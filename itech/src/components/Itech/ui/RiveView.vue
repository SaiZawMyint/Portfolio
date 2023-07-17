<template>
  <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Rive, Layout } from '@rive-app/canvas';  
export default defineComponent({
  name: 'Rive',
  props: {
    src: String,
    width: String,
    height: String
  },
  mounted() {
    new Rive({
      canvas: this.$refs.canvas,
      src: this.$props.src,
      layout: new Layout({
          fit: this.$props.fit,
          alignment: this.$props.alignment,
      }),
      autoplay: true
  })
  }
})
</script>