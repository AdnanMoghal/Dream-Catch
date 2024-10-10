import { Component, Vue, Watch } from "nuxt-property-decorator";
import SliderItem from "@/components/slider/slider-carousel-item.vue";

@Component
export default class SliderMixin extends Vue {
  offset: number = 0;
  slideCount: number = 0;
  currentPage: number = 0;
  browserWidth: number = 0;
  sliderWidth: number = 0;
  dragging: boolean = false;
  currentHeight: string = "auto";
  autoplayTimeout: any = null;
  scrollPerPage = true;
  loop = true;
  autoPlay = false;
  isTouch;
  mouseDrag = true;
  touchDrag = true;
  minSwipeDistance = 8;
  perPage = 1

  private startTime: number = 0;
  private dragMomentum: number = 0;
  private maxOffset: number = 0;
  private dragOffset: number = 0;
  private dragStartY: number = 0;
  private dragStartX: number = 0;
  private resizeHandler;

  @Watch("value")
  onValueChange(val: number) {
    if (val !== this.currentPage) {
      this.goToPage(val);
      this.calculate();
    }
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.pageCount) {
      this.offset = page * this.sliderWidth;
      this.currentPage = page;
    }
  }

  get pageCount() {
    return this.scrollPerPage
      ? Math.ceil(this.slideCount / this.currentPerPage)
      : this.slideCount - this.currentPerPage + 1;
  }


  get currentPerPage() {
    return this.perPage
  }

  calculate() {
    // calc offset depending on drag momentum
    this.offset +=
      Math.max(
        -this.currentPerPage + 1,
        Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)
      ) *
      (this.sliderWidth / this.currentPerPage);

    // get width for 1 slide
    const width = this.scrollPerPage
      ? this.sliderWidth
      : this.sliderWidth / this.currentPerPage;

    // lock offset to either the nearest page, or to the last slide
    const lastFullPageOffset =
      this.sliderWidth * Math.floor(this.slideCount / this.currentPerPage);
    const remainderOffset =
      lastFullPageOffset +
      this.sliderWidth * (this.slideCount % this.currentPerPage);

    // more than last slide is not allowed
    if (this.offset > (lastFullPageOffset + remainderOffset) / 2) {
      this.offset = remainderOffset;
    } else {
      this.offset = width * Math.round(this.offset / width);
    }

    this.offset = Math.max(0, Math.min(this.offset, this.maxOffset));

    this.currentPage = this.scrollPerPage
      ? Math.round(this.offset / this.sliderWidth)
      : Math.round(this.offset / this.sliderWidth / this.currentPerPage);
  }

  mounted() {
    this.isTouch = typeof window !== "undefined" && "ontouchstart" in window;

    if ((this.isTouch && this.touchDrag) || this.mouseDrag) {
      const innerSlider = this.$el.querySelector(".slider-inner");
      if (this.isTouch) {
        innerSlider.addEventListener("touchstart", this.onStart, {
          passive: true,
        });
        innerSlider.addEventListener("touchmove", this.onMove, {
          passive: true,
        });
        innerSlider.addEventListener("touchend", this.onEnd, { passive: true });
      } else {
        innerSlider.addEventListener("mousedown", this.onStart);
        innerSlider.addEventListener("mouseleave", this.onLeave);
        innerSlider.addEventListener("mousemove", this.onMove);
        innerSlider.addEventListener("mouseup", this.onEnd);
      }
    }

    this.$nextTick(() => {
      this.computeCarouselWidth();
    });

    this.autoScroll();
  }

  created() {
    this.getSlideCount();
    // console.log('BBB getSlideCount: ', this.getSlideCount());
    // if (process.browser) {
    //   this.resizeHandler = debounce(this.onResize, 300);
    //   window.addEventListener("resize", this.resizeHandler);
    // }
  }

  private computeCarouselWidth() {
    this.getSlideCount();
    this.getBrowserWidth();
    this.getSliderWidth();
    this.getMaxOffset();
  }

  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.resizeHandler);
    }
    this.resizeHandler = null;
  }

  autoScroll() {
    if (this.autoPlay) {
      this.autoplayTimeout = setInterval(() => {
        if (this.pageCount && this.currentPage < this.pageCount) {
          this.nextPage();
        } else {
          this.goToPage(0);
        }
      }, 5000);
    }
  }

  clearTimer() {
    if (this.autoPlay) {
      clearInterval(this.autoplayTimeout);
      this.autoScroll();
    }
  }

  nextPage() {
    console.log('click prevPage');
    this.goToPage(this.getNextPage());
  }

  prevPage() {
    console.log('click prevPage');
    this.goToPage(this.getPreviousPage());
  }

  getNextPage() {
    if (this.currentPage < this.pageCount - 1) {
      return this.currentPage + 1;
    }
    return this.loop ? 0 : this.currentPage;
  }

  getPreviousPage() {
    if (this.currentPage > 0) {
      return this.currentPage - 1;
    }
    return this.loop ? this.pageCount - 1 : this.currentPage;
  }

  private onStart(e: Event) {
    if (this.isTouch) {
      // check for only one finger
      if ((e as TouchEvent).touches.length !== 1) {
        return;
      }
      this.dragStartX = (e as TouchEvent).touches[0].clientX;
      this.dragStartY = (e as TouchEvent).touches[0].clientY;
    } else {
      // check for only first(left) mouse button
      if ((e as MouseEvent).button !== 0) {
        return;
      }

      this.dragStartX = (e as MouseEvent).clientX;
      this.dragStartY = (e as MouseEvent).clientY;
    }

    this.startTime = e.timeStamp;
    this.dragging = true;
  }

  private onLeave(e: Event) {
    this.onEnd(e);
  }

  private onMove(e: Event) {
    if (!this.dragging) {
      return;
    }

    const eventPosX = this.isTouch
      ? (e as TouchEvent).touches[0].clientX
      : (e as MouseEvent).clientX;
    const eventPosY = this.isTouch
      ? (e as TouchEvent).touches[0].clientY
      : (e as MouseEvent).clientY;
    const newOffsetX = this.dragStartX - eventPosX;
    const newOffsetY = this.dragStartY - eventPosY;

    if (this.isTouch && Math.abs(newOffsetX) < Math.abs(newOffsetY)) {
      return;
    }

    e.stopImmediatePropagation();

    this.dragOffset = newOffsetX;
  }

  private onEnd(e: Event) {
    if (!this.dragging) {
      return;
    }

    const eventPosX = this.isTouch
      ? (e as TouchEvent).changedTouches[0].clientX
      : (e as MouseEvent).clientX;
    const deltaX = this.dragStartX - eventPosX;
    this.dragMomentum = deltaX / (e.timeStamp - this.startTime);

    if (
      this.minSwipeDistance !== 0 &&
      Math.abs(deltaX) >= this.minSwipeDistance
    ) {
      const width = this.scrollPerPage
        ? this.sliderWidth
        : this.sliderWidth / this.currentPerPage;
      this.dragOffset = this.dragOffset + Math.sign(deltaX) * (width / 2);
    }

    this.offset += this.dragOffset;

    this.calculate();
    this.dragOffset = 0;
    this.dragging = false;
  }

  private getSlideCount() {
    // this.slideCount = this.sliderItems.length;
  }

  private getBrowserWidth() {
    this.browserWidth = window.innerWidth;
    // this.getBreakpointSlidesPerPage();
  }

  private getSliderWidth() {
    this.sliderWidth = this.$el.parentElement.clientWidth;
  }

  private getMaxOffset() {
    this.maxOffset = Math.max(
      (this.sliderWidth / this.currentPerPage) *
      (this.slideCount - this.currentPerPage),
      0
    );
  }

  // get sliderItems(): typeof SliderItem[] {
  //   return (
  //     (this.$slots &&
  //       this.$slots.default &&
  //       this.$slots.default.filter(
  //         (slot) =>
  //           slot.componentOptions &&
  //           slot.componentOptions.tag.match(/^slider-carousel-item$/i) !== null
  //       )) ||
  //     []
  //   );
  // }


}
