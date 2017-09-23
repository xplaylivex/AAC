/**
 * [pug template]
 */
<template lang="pug">
  div
    div(v-for="comp in components")
      component(:is="comp.type" :label="comp.label" :defaultVal="comp.defaultValue")
</template>
/**
 * [javascript application]
 */
<script>
import TextComponent from './TextComponent'
import NumberComponent from './NumberComponent'
import CheckboxComponent from './CheckboxComponent'

export default {
  name: 'app',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    inputtext: TextComponent,
    inputnumber: NumberComponent,
    inputcheckbox: CheckboxComponent
  },
  data () {
    return {
      components: [
        { type: 'inputtext', label: 'Label 1', defaultValue: 'Salut' },
        { type: 'inputnumber', label: 'Label 2', defaultValue: '42' },
        { type: 'inputcheckbox', label: 'Label 3', defaultValue: 'true' }
      ]
    }
  },
  /**
   * Computed methods
   */
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
/**
 * [scss styles]
 */
<style scoped lang="scss">
</style>
