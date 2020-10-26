<template>
  <button class="button is-primary" @click="onClick" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
