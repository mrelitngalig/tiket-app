import { defineStore } from 'pinia';

type User = { email: string; name?: string } | null;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: (localStorage.getItem('token') as string | null),
    user: JSON.parse(localStorage.getItem('user') || 'null') as User,
    loading: false,
  }),
  getters: {
    isAuthenticated: (s): boolean => !!s.token,
  },
  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        // Mock: terima semua yang tidak kosong
        await new Promise((r) => setTimeout(r, 400));
        if (!email || !password) throw new Error('Invalid');

        const token = 'demo-token';
        const user = { email, name: email.split('@')[0] };

        this.token = token;
        this.user = user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});
