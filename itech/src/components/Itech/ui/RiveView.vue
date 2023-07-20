<template>
  <canvas ref="canvas" :width="width" :height="height" :style="`transform: scale(${scale});`"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Rive, Layout, Fit } from '@rive-app/canvas';
export default defineComponent({
  name: 'Rive',
  props: {
    src: String,
    width: String,
    height: String,
    stateMachine: Array,
    animation: String,
    artboard: String,
    fit: String,
    scale: {
      type: String,
      default: '1'
    }
  },
  emits: {
    onLoad: ({rive, machine, canvas}) => {
      return {rive, machine, canvas};
    }
  },
  mounted() {
    const rive = new Rive({
      canvas: this.$refs.canvas,
      src: this.$props.src,
      layout: new Layout({
        fit: this.$props.fit,
        alignment: this.$props.alignment,
      }),
      autoplay: true,
      stateMachines: this.$props.stateMachine,
      onLoad:(_)=>{
        const machine = this.$props.stateMachine; 
        const canvas = this.$refs.canvas;     
        this.$emit('onLoad', {rive,machine,canvas});
      }
    })
  }
})
</script>