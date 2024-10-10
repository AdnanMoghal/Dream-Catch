<template>
  <section class="m-main">
    <div class="m-main__container m-container">
      <user-navigation :is-mobile="isMobile"/>
      <user-main-page/>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue, mixins, Prop} from "nuxt-property-decorator";
import UserNavigation from "~/components/users/user-navigation.vue";
import UserMainPage from "~/components/users/user-main-page.vue";
import HandleMediaMixin from "~/mixins/handle-media";

@Component({
  components: {
    UserNavigation,
    UserMainPage
  }
})

export default class UserPage extends mixins(HandleMediaMixin) {

title= 'User';
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

