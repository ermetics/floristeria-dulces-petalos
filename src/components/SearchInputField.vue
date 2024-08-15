<template>
  <v-text-field
    :value="modelValue"
    density="comfortable"
    label="Búsqueda"
    outline
    placeholder="Orquídea, ramo novia..."
    variant="outlined"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #clear>
      <IconInputClear @click="$emit('click:clear')" />
    </template>
  </v-text-field>
</template>

<script setup>
import IconInputClear from '@/components/icons/IconInputClear.vue'
defineEmits(['click:clear', 'update:modelValue'])
defineProps({ modelValue: String })
</script>
