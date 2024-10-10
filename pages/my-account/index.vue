<template>
  <section class="main">
    <div class="main__container m-container">
      <user-navigation :is-mobile="isMobile"/>
      <user-private-account />
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue, mixins, Prop} from "nuxt-property-decorator";
import UserNavigation from "~/components/users/user-navigation.vue";
import HandleMediaMixin from "~/mixins/handle-media";
import UserPrivateAccount from "~/components/users/user-private-account.vue";

@Component({
  components: {
    UserNavigation,
    UserPrivateAccount
  }
})

export default class MyAccount extends mixins(HandleMediaMixin) {
title= 'My account';
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


  created() {
    // console.log('MY-account');
  }
}
</script>

<style lang="scss"
       scoped>
@import "../../assets/css/variables";

.main {
  flex: 1 1 auto;
  padding: 0 1rem;
  background-color: #f4f4f4;

  @include for-average() {
    padding-top: 50px;
  }

  @include for-small() {
    padding: 50px 0 0.5rem;
  }
}

.main__container.m-container {
  display: flex;
  justify-content: space-between;
}
</style>
