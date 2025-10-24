<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/modules/auth/store/auth.store';
import * as Sentry from '@sentry/vue'; // ✅ tambahkan ini

const email = ref('');
const password = ref('');
const error = ref('');

const router = useRouter();
const route = useRoute();
const auth = useAuthStore();

async function onSubmit() {
  error.value = '';
  try {
    // validasi manual biar bisa ditangkap Sentry juga
    if (!email.value.includes('@')) {
      const e = new Error(`Email tidak valid: ${email.value}`);
      Sentry.captureException(e);
      throw e;
    }

    await auth.login(email.value, password.value);
    const redirect = (route.query.redirect as string) || '/';
    router.replace(redirect);
  } catch (err: any) {
    // ✅ kirim error login ke sentry
    Sentry.setContext('Login Attempt', {
      email: email.value,
      page: route.fullPath,
      time: new Date().toISOString(),
    });
    Sentry.captureException(err);

    error.value = 'Email atau password salah';
  }
}
</script>


<template>
  <div class="auth-bg">
    <div class="glass-card fade-in">
      <div class="brand">
        <div class="logo-circle">TA</div>
        <div class="brand-text">
          <h1>TiketApp</h1>
          <p>Masuk untuk melanjutkan</p>
        </div>
      </div>

      <form class="form" @submit.prevent="onSubmit">
        <label>Email</label>
        <input
          v-model="email"
          type="text"
          autocomplete="email"
          placeholder="nama@domain.com"
          required
        />

        <label>Password</label>
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
          placeholder="••••••••"
          required
        />

        <button :disabled="auth.loading" class="btn-primary">
          {{ auth.loading ? 'Memproses…' : 'Masuk' }}
        </button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>

      <p class="tiny-note">Ini login mock. Tidak memanggil API.</p>
    </div>
  </div>
</template>
