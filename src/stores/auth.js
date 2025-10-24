import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
state: () => ({
token: localStorage.getItem('token') || null,
user: JSON.parse(localStorage.getItem('user') || 'null'),
loading: false,
}),
getters: {
isAuthenticated: (s) => !!s.token,
},
actions: {
async login(email, password) {
this.loading = true;
try {
// Simulasi call API (delay kecil). Ganti dengan fetch/axios ke backend-mu.
await new Promise((r) => setTimeout(r, 600));
if (!email || !password) throw new Error('Invalid');


// contoh payload sukses
this.token = 'demo-token';
this.user = { email, name: email.split('@')[0] };


localStorage.setItem('token', this.token);
localStorage.setItem('user', JSON.stringify(this.user));
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