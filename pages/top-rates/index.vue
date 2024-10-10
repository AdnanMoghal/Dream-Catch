<template>
  <section class="m-main">
    <div class="m-main__container m-container">
      <user-navigation :is-mobile="isMobile"/>
      <top-rates-page />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue, mixins, Prop} from "nuxt-property-decorator";
import UserNavigation from "~/components/users/user-navigation.vue";
import TopRatesPage from "~/components/users/top-rates-page.vue";
import HandleMediaMixin from "~/mixins/handle-media";

@Component({
  components: {
    UserNavigation,
    TopRatesPage
  }
})

export default class UserPage extends mixins(HandleMediaMixin) {

title= 'Top Rates';
 head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }



}
</script>

