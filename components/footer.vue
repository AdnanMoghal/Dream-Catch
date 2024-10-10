<template>
  <section class="footer">
    <div class="footer__container m-container">
      <div class="footer__logo m-container-small">
        <a class="footer__logo-link" href="/">Khuwahish</a>
      </div>
      <div class="footer__wrapper m-container-middle">
        <ul class="footer__list" v-for="(list, i) in footerList" :key="i">
          <template v-for="(item, ind) in list" >
            <li class="footer__list-item">
              <nuxt-link class="footer__list-link" :key="ind" :to="item.link">{{item.title}}</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {footerList} from "@/assets/data/footer.json";

@Component({})

export default class FooterComponent extends Vue {
  footerList = footerList;
}

</script>

<style lang="scss" scoped>
@import "../assets/css/variables";

//.m-container-small,
//.m-container-big {
//}

.footer {
  background-color: $color-mintmain;
  padding: 4.75rem 0;

  @include for-average() {
    padding: 3rem 0;
  }

  &__wrapper,
  &__container {
    display: flex;
    justify-content: space-around;

    @include for-average() {
      flex-wrap: wrap;
      max-width: 500px;
    }
  }

  &__container {
    padding: 0 1rem;
  }

  &__wrapper {
    @include for-middle() {
      flex-wrap: wrap;
    }
  }

  &__logo {
    padding-bottom: 2.5rem;

    @include for-average() {
      text-align: center;
    }

    &-link {
      color: $color-whitemain;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__list {
    padding: 0 1rem;

    @include for-middle() {
      flex: 1 1 30%;
    }

    @include for-small() {
      flex: 1 1 42%;
    }

    &-item {
      padding-bottom: 20px;
    }

    &-link {
      color: $color-whitemain;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}


</style>
