var mySecondExample = {
  template: '#my-second-template',
  data: function () {
    return {}
  }
}

var myExample = {
  template: '#my-template',
  components: {
    'my-second-example': mySecondExample
  },
  data: function () {
    return {
        myValue: 'Salut :)'
    }
  },
  methods: {
      check: function () {
          alert('Tout est en regle')
      }
  }
}

/**************/

var myComp1 = {
  template: '#my-comp1',
  methods: {
      setComponent: function () {
          this.$emit('set-comp', 'my-comp2')
      }
  }
}

var myComp2 = {
  template: '#my-comp2',
  methods: {
      setComponent: function () {
          this.$emit('set-comp', 'my-comp1')
      }
  }
}