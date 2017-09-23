/**
 * [pug template]
 */
<template lang="pug">
  div
    label {{ label }}
    input(type="number" v-model="value")
</template>
/**
 * [javascript application]
 */
<script>
export default {
  name: 'number_component',
  props: {
    defaultVal: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  created () {
    this.value = this.defaultVal
  },
  components: {
    // Component declaration
  },
  /**
   * Computed methods
   */
  computed: {
    // Computed properties
  },
  /**
   * Watch methods
   */
  watch: {
    // Watcher(observer) properties
  },
  /**
   * Component methods
   */
  methods: {
    // Function javascript
  }
}
</script>
/**
 * [scss styles]
 */
<style lang="scss">
</style>
