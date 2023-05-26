<template>
  <div class="h-full">
    <n-card title="network informations" class="h-fit shadow-sm rounded-16px"></n-card>
    <n-button @click="handleClick">点它</n-button>
  </div>
</template>

<script setup lang="ts">
import { request } from '@/service/request';

interface resp {
  code: number;
  token: string;
  expire: Date;
}
interface req {
  username: string;
  password: string;
}
async function handleClick() {
  const result = await request.post<resp>('/api/v1/login', { username: 'admin', password: 'admin' } as req);
  console.log(result);
}
</script>

<style scoped></style>
