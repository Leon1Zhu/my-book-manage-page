<template>
    <div class="animated-integer">
      <span class="all-book-count">{{ tweeningValue }}</span>
    </div>
</template>

<script>

    export default{
      props: {
        value: {
          type: Number,
          required: true
        }
      },
      data: function () {
        return {
          tweeningValue: 0
        }
      },
      watch: {
        value: function (newValue, oldValue) {
          this.tween(oldValue, newValue)
        }
      },
      mounted: function () {
        this.tween(0, this.value)
      },
      methods: {
        tween: function (startValue, endValue) {
          var vm = this
          function animate () {
            if (TWEEN.update()) {
              requestAnimationFrame(animate)
            }
          }
          new TWEEN.Tween({ tweeningValue: startValue })
            .to({ tweeningValue:   endValue }, 1000)
            .onUpdate(function () {
              vm.tweeningValue = vm.toThousands(parseInt(this.tweeningValue))
            })
            .start()
          animate()
        },


       toThousands:function (num) {
          var result = '', counter = 0;
          num = (num || 0).toString();
          for (var i = num.length - 1; i >= 0; i--) {
            counter++;
            result = num.charAt(i) + result;
            if (!(counter % 3) && i != 0) { result = ',' + result; }
          }
          return result;
        }
    }
    }
</script>
