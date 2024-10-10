<template>
  <div class="cgi__container m-container">
    <div v-for="(item, i) in data" :key="i">
      <div v-if="i < 3 || showAll" class="cgi__item-wrapper">
        <div class="cgi__item-img__wrapper">
          <img v-if="item.img" class="cgi__item-img" :src="item.img" />
          <div
            v-on:click="onClickLikeCounter(i)"
            class="cgi__item-img_favorite"
          ></div>
          <div class="cgi__item-img_like-count">
            <span class="count">{{ item.likes }}</span>
            <span class="icon"></span>
          </div>
          <div class="cgi__item-img_comment">
            <span class="count">43</span>
            <span class="icon"></span>
          </div>
          <div class="cgi__item-cover" />
        </div>
        <div class="cgi__item-text">
          <p v-if="item.category" class="cgi__item-text_category">
            {{ item.category }}
          </p>
          <p v-if="item.title" class="cgi__item-text_title">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <span class="m-border"></span>
    <upload-btn
      class="upload-btn"
      @click.native="onClickToggleShowMoreBtn"
      :title="'Показать все'"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "nuxt-property-decorator";
import UploadBtn from "~/components/elementary/upload-btn.vue";

@Component({
  components: {
    UploadBtn,
  },
})
export default class CategoryGridItems extends Vue {
  @Prop() data;
  showAll = false;
  created() {}

  onClickToggleShowMoreBtn() {
    this.showAll = !this.showAll;
  }

  onClickLikeCounter(index) {
    this.data[index].likes++;
    this.$forceUpdate();
    return 1;
  }
}
</script>

<style scoped
       lang="scss">
@import "assets/css/variables";

.cgi {
  &__container {
    max-width: 790px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @include for-middle() {
      justify-content: flex-start;
    }
  }

  &__item {
    &-wrapper {
      max-width: 242px;
      width: 100%;
      padding-bottom: 100px;

      &:last-of-type {
        padding-bottom: 60px;

        @include for-middle() {
          padding-bottom: 20px;
        }
      }

      @include for-middle() {
        max-width: 180px;
        padding-bottom: 20px;
        margin: 0 5px;
      }

      @include for-small() {
        max-width: 140px;
      }
    }

    &-cover,
    &-img {
      border-radius: 4px;
      max-width: 243px;
      max-height: 300px;

      @include for-middle() {
        max-width: 180px;
        max-height: 222px;
      }

      @include for-small() {
        max-width: 140px;
        max-height: 172px;
      }
    }

    &-cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }

    &-img {
      margin-bottom: 0;
      cursor: pointer;

      &__wrapper {
        position: relative;

        &:hover {
          .cgi__item-cover {
            background: rgba(22, 24, 43);
            opacity: 0.2;
            z-index: 100;
          }

          .cgi__item-img_favorite {
            display: block;
          }

          .cgi__item-img_like-count,
          .cgi__item-img_comment {
            display: flex;
          }
        }
      }

      &_favorite,
      &_like-count,
      &_comment {
        position: absolute;
      }

      &_favorite {
        margin: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        left: 50%;
        right: 50%;
        display: block;
        background-image: url("static/img/svg/default-svg/white-svg/favorite-default-white.svg");
        width: 60px;
        height: 56px;
        z-index: 100;
      }

      &_like-count {
        left: 10%;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          background-image: url("static/img/svg/default-svg/white-svg/favorite-default-white.svg");
        }
      }

      &_comment {
        right: 10%;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon {
          background-image: url("static/img/svg/default-svg/white-svg/comment-default-white.svg");
        }
      }
    }

    &-text {
      &_category {
        font-size: 12px;
        color: #c6c6c6;
        margin: 20px 0 10px;
      }

      &_title {
        font-weight: 500;

        @include for-middle() {
          font-size: 12px;
        }
      }
    }
  }
}

.cgi__item-img_favorite,
.cgi__item-img_like-count,
.cgi__item-img_comment {
  z-index: 120;
  display: none;
}

.count {
  color: $color-whitemain;
  margin-bottom: 10px;
  font-weight: 500;
}

.cgi__item-img_favorite,
.icon {
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>