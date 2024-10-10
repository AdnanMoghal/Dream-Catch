<template>
  <div class="login-form">

    <div class="test">
      <div>user@user.user</div>
      <div> useruser</div>
    </div>

    <div class="login-form__container m-container-small">
      <div class="login-form__inner">

        <div class="login-form__error-popup">
          <span class="login-form__error-popup_message">
                   <m-popup v-if="errorMessage"
                            :error="true"
                            :data="errorMessage"></m-popup>
          </span>
        </div>

        <div class="login-form__login">
          <input :class="['m-input-form', {error: errorLogin}]"
                 placeholder="Please, enter your login"
                 v-model="userLog"
                 type="text">
          <p v-show="errorLogin"
             class="error-message">
            Не правильный e-mail адрес</p>
        </div>

        <div class="login-form__password">
          <input :class="['m-input-form', {error: errorPassword}]"
                 placeholder="Please, enter your password"
                 v-model="userPass"
                 type="password">
          <p v-show="errorPassword"
             class="error-message">
            Введите пароль</p>
        </div>

        <m-button :btn="btn"
                  :class="{disabled: !accessLogin || !accessPassword }"
                  @click.native="logIn"></m-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from "nuxt-property-decorator";
import MPopup from "~/components/elementary/m-popup.vue";

@Component({
  components: {
    MPopup
  }
})
export default class LoginForm extends Vue {
  @Watch('userLog')
  onUserLogChange(val: string, oldVal: string) {
    if (val !== oldVal && val.length < 3) this.errorLogin = true;

    if (val.length > 3 && val !== oldVal) {
      if (this.validateEmail(val) === false) {
        this.errorLogin = true;
        this.accessLogin = false;
      } else {
        this.errorLogin = false;
        this.accessLogin = true;
      }
    }
  }

  @Watch('userPass')
  onUserPassChange(val: string, oldVal: string) {
    if (val !== oldVal && val.length < 8) {
      this.errorPassword = true;
      this.accessPassword = false;
    } else if (val.length >= 8) {
      this.errorPassword = false;
      this.accessPassword = true;
    }

    if (val.length < 8) {
      this.errorPassword = true;
      this.accessPassword = false;
    }
  }

  errorLogin = false;
  errorPassword = false;
  accessLogin = false;
  accessPassword = false;

  userLog: string = '';
  userPass: string = '';
  btn = {
    name: "Войти"
  }
  errorMessage: string = '';

  async logIn() {
    const userLogData = {
      "email": this.userLog,
      "password": this.userPass
    }

    await this.$service.auth.login(userLogData);
  }

  validateEmail(email: string) {
    const regularExpressionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpressionEmail.test(email);
  }

  get getErrorState() {
    return this.$store.state.auth.error;
  }

}

</script>

<style lang="scss"
       scoped>
@import "assets/css/variables";

.test {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.login-form {
  padding-top: 6rem;


  &__container.m-container-small {
    margin: 0 auto;
    border: 1px solid $color-mintmain;
    border-radius: 4px;
    max-width: 400px;
  }

  &__login,
  &__password,
  &__inner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &__login,
  &__password {
    max-width: 250px;
    width: 100%;
    position: relative;
  }

  &__inner {
    padding: 2rem 0;
  }

  &__error-popup {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    &_message {
      position: absolute;
      z-index: 10;
      top: -60px;
    }
  }
}

.m-input-form {
  margin-bottom: 20px;
}

.error-message {
  position: absolute;
  left: 0;
  top: -25%;
}
</style>