<template>
  <div v-if="message" :id="id" class="form-message" :class="type" role="alert">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
  type: "success" | "error";
  id?: string;
}>();
</script>

<style scoped>
.form-message {
  padding: 1rem;
  border-radius: 4px;
  font-size: var(--size-txt-m);
}

.form-message.success {
  background-color: #4caf50;
  color: white;
  border: 2px solid #45a049;
}

.form-message.error {
  background-color: #f44336;
  color: white;
  border: 2px solid #da190b;
}
</style>
