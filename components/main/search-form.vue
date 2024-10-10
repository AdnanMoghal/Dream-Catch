<template>
  <form
    class="search__form"
  >
    <input
      ref="search-input"
      type="search"
      class="search__input"
      placeholder="Поиск"
    />
<!--    <template v-if="getCutArray && getCutArray.length && curPath !== '/search'">-->
<!--      <div class="results__container">-->
<!--        <nuxt-link-->
<!--          v-for="(item, index) in getCutArray"-->
<!--          :key="index"-->
<!--          :to="`/${item.url}`"-->
<!--          class="result__item"-->
<!--        >-->
<!--          <div-->
<!--            v-if="item && item.title && item.url"-->
<!--            class="result__item__text"-->
<!--            v-html="item.title"-->
<!--          ></div>-->
<!--        </nuxt-link>-->
<!--        <div-->
<!--          v-if="getCutArray && getCutArray.length && getCutArray.length === 5"-->
<!--          class="result__showmore"-->
<!--          @click="fullSearchRedirect"-->
<!--        >-->
<!--          {{ $t("showMore") }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
    <button type="submit" class="search__submit"></button>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Ref, Action } from "nuxt-property-decorator";
import vClickOutside from "v-click-outside";

@Component({
  directives: {
    clickOutside: vClickOutside.directive
  }})
export default class SearchForm extends Vue {
}
</script>

<style scoped lang="scss">
@import "assets/css/variables";

.search__form {
  position: relative;
  max-width: 270px;
  width: 100%;
}

.search__input {
  width: 100%;
  padding: 9px 0 9px 42px;
  color: #002a40;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
  opacity: 0.9;

  &::placeholder {
    color: #a1b2c2;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
}

.search__submit {
  position: absolute;
  top: 50%;
  left: 15px;
  width: 17px;
  height: 17px;
  background-color: transparent;
  background-image: url(/img/search.svg?data);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  outline: none;
  transform: translateY(-50%);
  cursor: pointer;
}

/* clears the 'X' from Internet Explorer */
input[type="search"]::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input[type="search"]::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

.results__container {
  position: absolute;
  bottom: -8px;
  z-index: 200;
  box-sizing: border-box;
  padding: 13px 20px;
  background: #fff;
  border: 1px solid rgba(180, 180, 180, 0.2);
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(26, 94, 204, 0.06);
  transform: translateY(100%);
}

.result__item {
  display: block;
  padding: 5px 0;
  border-bottom: 1px solid #aaa;
  cursor: pointer;

  &:hover {
    .result__item__text {
      color: #0af;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
}

.result__item__text {
  color: #000;
  font-size: 1rem;
  line-height: 1.3;
  transition: 0.25s color ease-out;
  will-change: color;
}

.result__showmore {
  padding: 5px 0;
  color: #0af;
  font-size: 0.875rem;
  cursor: pointer;
}
</style>
