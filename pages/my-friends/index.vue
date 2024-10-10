<template>
  <section class="m-main">
    <div class="m-main__container m-container">
      <user-navigation :is-mobile="isMobile"/>
      <my-friend-page/>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue, mixins, Prop} from "nuxt-property-decorator";
import UserNavigation from "~/components/users/user-navigation.vue";
import MyFriendPage from "~/components/users/my-friend-page.vue";
import HandleMediaMixin from "~/mixins/handle-media";

@Component({
  components: {
    UserNavigation,
    MyFriendPage
  }
})

export default class FriendsPage extends mixins(HandleMediaMixin) {
  title= 'My friends';
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

