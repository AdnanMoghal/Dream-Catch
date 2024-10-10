<template>
  <div id="root-app">
    <!-- MODAL -->
    <client-only>
      <portal-target name="tech-block"></portal-target>
      <portal-target name="modal"></portal-target>
    </client-only>
    <!-- MODAL -->
    <header-component></header-component>
    <div id="root-wrapper">
      <Nuxt />
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import HeaderComponent from "~/components/header.vue";
import FooterComponent from "~/components/footer.vue";

@Component({
  components: {
    HeaderComponent,
    FooterComponent
  }
})

export default class Layout extends Vue {

}
</script>

<style scoped>
#root-app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

#root-wrapper {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 0 0;
}
</style>

