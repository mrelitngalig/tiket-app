<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.store';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

function logout() {
  auth.logout();
  router.push('/login');
}
</script>

<template>
  <div class="dashboard-container">
    <!-- Header with Logo and Profile -->
    <header class="header">
      <div class="header-left">
        <div class="logo-mini">TA</div>
        <h1>TiketApp Dashboard</h1>
      </div>
      <div class="header-right">
        <div class="user-info">
          <div class="avatar">{{ (auth.user?.name || 'U')[0].toUpperCase() }}</div>
          <div class="user-details">
            <strong>{{ auth.user?.name || 'User' }}</strong>
            <small>{{ auth.user?.email }}</small>
          </div>
        </div>
        <button class="btn-logout" @click="logout">Logout</button>
      </div>
    </header>

    <!-- Main Dashboard Content -->
    <main class="main-content">
      <!-- Search Section -->
      <section class="search-section">
        <div class="search-card">
          <div class="search-header">
            <h3>Pencarian Tiket</h3>
            <div class="search-form">
              <input type="text" placeholder="Dari" class="search-input" />
              <input type="text" placeholder="Ke" class="search-input" />
              <input type="date" class="search-input" />
              <button class="btn-search">Cari</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Dashboard Cards -->
      <section class="dashboard-cards">
        <!-- Active Ticket Card -->
        <div class="card">
          <div class="card-header">
            <img src="@/assets/ticket-active.png" alt="Active Tickets" class="card-image"/>

            <h3>Tiket Aktif</h3>
          </div>
          <div class="card-body">
            <p>Lihat tiket yang sedang berjalan dan update statusnya.</p>
            <button class="btn-action">Lihat</button>
          </div>
        </div>

        <!-- Create Ticket Card -->
        <div class="card">
          <div class="card-header">
            <img src="@/assets/ticket-active.png" alt="Create Ticket" class="card-image"/>
            <h3>Buat Tiket</h3>
          </div>
          <div class="card-body">
            <p>Buat tiket baru untuk kebutuhanmu, mudah dan cepat.</p>
            <button class="btn-action">Buat</button>
          </div>
        </div>

        <!-- Reports Card -->
        <div class="card">
          <div class="card-header">
            <img src="@/assets/ticket-active.png" alt="Reports" class="card-image"/>
            <h3>Laporan</h3>
          </div>
          <div class="card-body">
            <p>Ringkasan aktivitas dan performa tiket.</p>
            <button class="btn-action">Buka</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #1a202c;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #4a5568;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mini {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #ff5959, #e74c3c);
  padding: 10px;
  border-radius: 6px;
}

h1 {
  color: #edf2f7;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4a5568;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: bold;
}

.user-details {
  color: #edf2f7;
}

.btn-logout {
  background: transparent;
  border: 1px solid #edf2f7;
  color: #edf2f7;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.btn-logout:hover {
  background: #edf2f7;
  color: #2d3748;
}

.main-content {
  margin-top: 20px;
}

.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.search-card {
  background: #2d3748;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
}

.search-header h3 {
  color: #fff;
  margin-bottom: 15px;
}

.search-form {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.search-input {
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #444;
  background: #333;
  color: #fff;
}

.search-input::placeholder {
  color: #b8c0c7;
}

.btn-search {
  padding: 10px 16px;
  font-size: 16px;
  color: #fff;
  background: #e74c3c;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-search:hover {
  background: #ff5959;
}

.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  background: #2d3748;
  border-radius: 10px;
  padding: 20px;
  color: #edf2f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 15px;
}

.card-body {
  text-align: center;
}

h3 {
  font-size: 20px;
  margin: 0;
}

p {
  font-size: 14px;
  color: #e2e8f0;
  margin-bottom: 15px;
}

.btn-action {
  background: #ff5959;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-action:hover {
  background: #e74c3c;
}

@media (min-width: 768px) {
  .dashboard-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .dashboard-cards {
    grid-template-columns: 1fr;
  }
}
</style>
