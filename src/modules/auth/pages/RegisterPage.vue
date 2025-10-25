<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as Sentry from '@sentry/vue';
import { useAuthStore } from '@/modules/auth/store/auth.store';

const router = useRouter();
const auth = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const success = ref('');

async function onSubmit() {
  error.value = '';
  success.value = '';

  try {
    // Validasi sederhana
    if (!email.value.includes('@')) {
      const e = new Error(`Email tidak valid: ${email.value}`);
      Sentry.captureException(e, { tags: { form: 'register', stage: 'validation' } });
      throw e;
    }

    if (password.value.length < 6) {
      const e = new Error('Password minimal 6 karakter');
      Sentry.captureException(e, { tags: { form: 'register', stage: 'validation' } });
      throw e;
    }

    if (password.value !== confirmPassword.value) {
      const e = new Error('Konfirmasi password tidak cocok');
      Sentry.captureException(e, { tags: { form: 'register', stage: 'validation' } });
      throw e;
    }

    // Simulasi registrasi
    await new Promise((r) => setTimeout(r, 500));

    // Mock register (tidak panggil API)
    success.value = 'Registrasi berhasil! Silakan login.';
    Sentry.addBreadcrumb({
      category: 'user',
      message: `User berhasil mendaftar: ${email.value}`,
      level: 'info',
    });
  } catch (err: any) {
    error.value = err.message || 'Terjadi kesalahan saat registrasi';

    // Kirim error detail ke Sentry
    Sentry.setContext('Register Attempt', {
      name: name.value,
      email: email.value,
      time: new Date().toISOString(),
    });
    Sentry.captureException(err);
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
          <p>Daftar untuk membuat akun</p>
        </div>
      </div>

      <form class="form" @submit.prevent="onSubmit">
        <label>Nama Lengkap</label>
        <input v-model="name" type="text" placeholder="Nama lengkap" required />

        <label>Email</label>
        <input v-model="email" type="email" placeholder="nama@domain.com" required />

        <label>Password</label>
        <input v-model="password" type="password" placeholder="••••••••" required />

        <label>Konfirmasi Password</label>
        <input v-model="confirmPassword" type="password" placeholder="••••••••" required />

        <button :disabled="auth.loading" class="btn-primary">
          {{ auth.loading ? 'Memproses…' : 'Daftar' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">{{ success }}</p>
      </form>

      <p class="tiny-note">Registrasi ini hanya simulasi, tidak tersambung ke API.</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: #f87171;
  background: rgba(239, 68, 68, 0.1);
  padding: 8px;
  border-radius: 6px;
  margin-top: 10px;
  text-align: center;
}

.success {
  color: #4ade80;
  background: rgba(34, 197, 94, 0.1);
  padding: 8px;
  border-radius: 6px;
  margin-top: 10px;
  text-align: center;
}
</style>
