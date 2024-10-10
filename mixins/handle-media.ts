import {Vue, Component} from "nuxt-property-decorator";

@Component({})

export default class HandleMedia extends Vue {
    mediaQueryList = null;
    isMobile = false;

    mounted() {
        // this.scrollListener();
        this.mediaQueryList = window.matchMedia("(max-width: 767px)");
        this.mediaQueryList.addListener(this.handleMedia);
        this.handleMedia(this.mediaQueryList);
    }

    handleMedia(evt) {
        this.isMobile = !!evt.matches;
    }

    // scrollListener() {
    //     // show or hide mobile head navigation bar
    //     let prevScrollpos = window.pageYOffset;
    //     console.log('HDFVGHSDJFGBHSD');
    //
    //
    //     if (window.innerWidth < 768) {
    //         console.log('IM WORK');
    //         window.onscroll = () => {
    //             let currentScrollPos = window.pageYOffset;
    //             const lol =  document.querySelector(".test-header-mobile");
    //             prevScrollpos > currentScrollPos ? lol.classList.add('lol') : lol.classList.remove('lol');
    //             prevScrollpos = currentScrollPos;
    //         }
    //     }
    // }
}





