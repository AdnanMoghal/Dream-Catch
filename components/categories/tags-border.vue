<template>
  <div class="tb"
       >
    <div class="tb__container">
      <div class="tb__inner">
        <template  v-if="value.length" >
          <div v-for="tag in value" class="tb__tag-container">
            <div class="tb__tag-wrapper" :tag-id="tag.id">
              <p class="tb__tag-text">
                {{ tag.name }}
              </p>
              <a class="tb__tag-btn" @click="deleteTag(tag)"></a>
            </div>
          </div>
        </template>
        <template v-else-if="!value.length">
          <div class="tb__tag-container">
            <div class="tb__tag-wrapper">
              <p class="tb__tag-text">
                Добавь тег!
              </p>
              <a class="tb__tag-btn"></a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from "nuxt-property-decorator";
@Component({})


export default class TagsBorder extends Vue {
  @Prop() value;


  deleteTag(tag) {
    this.$emit('deleteTag', tag);
  }
}

</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.tb {
  padding: 30px 0;

  @include for-average() {
    padding: 1rem 0;
  }

  &__inner {
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid #EDEDED;
    border-bottom: 1px solid #EDEDED;
  }

  &__tag-container {
    padding: 15px 10px;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }

    &:nth-of-type(2) {
      padding-left: 10px;
    }
  }

  &__tag-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px 10px;
    border: 1px solid #F8F8F8;
    border-radius: 2px;
  }

  &__tag-text {
    color: #5D5F6D;
    font-size: 12px;
    font-weight: 300;
    margin-right: 10px;
  }

  &__tag-btn {
    width: 8px;
    height: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.46904 4.00208L7.89833 0.57281C8.03068 0.444983 8.03435 0.234074 7.90653 0.101718C7.7787 -0.0306369 7.56779 -0.034307 7.43543 0.0935194C7.43266 0.0961938 7.42993 0.0989268 7.42723 0.101718L3.99793 3.53099L0.568647 0.101699C0.436291 -0.0261275 0.225381 -0.0224575 0.0975538 0.109898C-0.0271495 0.239013 -0.0271495 0.443695 0.0975538 0.57281L3.52684 4.00208L0.0975538 7.43135C-0.0325179 7.56144 -0.0325179 7.77235 0.0975538 7.90244C0.227645 8.0325 0.438555 8.0325 0.568647 7.90244L3.99793 4.47317L7.42722 7.90244C7.55957 8.03027 7.77048 8.0266 7.89831 7.89424C8.02299 7.76513 8.02299 7.56045 7.89831 7.43135L4.46904 4.00208Z' fill='%23C6C6C6'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center center;
    display: block;
    align-self: center;
    cursor: pointer;
  }
}
</style>