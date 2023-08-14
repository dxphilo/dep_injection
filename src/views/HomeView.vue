<script setup lang="ts">
import { inject } from 'vue';

type Dates = {
  date: string;
  formatDateTimeWithRelativeTime: (a: string) => string;
}

const injectedDates: Dates | undefined = inject('dates');
const { date, formatDateTimeWithRelativeTime } = injectedDates || {};
</script>

<template>
  <main>
    <div>
      <p>This is how to Dependency Injection</p>
      <p>Date is {{ date }}</p>
      <p>ACCOUNT WAS CREATD {{ formatDateTimeWithRelativeTime && formatDateTimeWithRelativeTime("2023-08-04T18:39:28.674804") }}</p>
    </div>
  </main>
</template>
