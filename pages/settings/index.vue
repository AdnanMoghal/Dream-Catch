<template>
  <section class="m-main">
    <div class="m-main__container m-container">
      <user-navigation :is-mobile="isMobile"/>
      <profile-settings />
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch, mixins} from "nuxt-property-decorator";
import UserNavigation from "~/components/users/user-navigation.vue";
import HandleMediaMixin from "~/mixins/handle-media";
import ProfileSettings from "~/components/users/settings/profile-settings.vue";

@Component({components: {
    UserNavigation,
    ProfileSettings
  }})
export default class UserSettings extends mixins(HandleMediaMixin) {
title= 'Settings';
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