<template>
  <div>
    <login-form />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "nuxt-property-decorator";
import LoginForm from "~/components/login/login.vue"

@Component({
  components: {
    LoginForm
  }
})

export default class LoginPage extends Vue {

}

</script>