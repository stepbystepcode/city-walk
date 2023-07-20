<template>
  <q-page>
    <div>
      <div class="fullscreen">
        <ElAmap
          ref="AmapRef"
          v-model:center="amapOptions.center"
          v-model:zoom="amapOptions.zoom"
        >
          <ElMarker
            :position="[116.473778, 39.990661]"
            :label="{
            content: 'city walk',
            offset: [0, 0],
            direction: 'bottom',
          }"
          />
        </ElAmap>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElAmap, ElMarker } from '@dabu/vue3-amap';
import type { ElAmapProps, ElAmapExpose } from '@dabu/vue3-amap';
const AmapRef = ref<ElAmapExpose | null>(null);
const amapOptions = reactive<ElAmapProps>({
  zoom: 10,
  center: [116.397428, 39.90923],
});

</script>
