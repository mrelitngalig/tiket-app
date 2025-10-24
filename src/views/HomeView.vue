<script setup>


function logout() {
auth.logout();
router.push('/login');
}
</script>


<template>
<div class="page">
<header class="topbar slide-down">
<div class="left">
<div class="logo-mini">TA</div>
<h2>Beranda</h2>
</div>
<div class="right">
<div class="user-chip">
<span class="avatar">{{ (auth.user?.name || 'U')[0].toUpperCase() }}</span>
<div class="meta">
<strong>{{ auth.user?.name || 'User' }}</strong>
<small>{{ auth.user?.email }}</small>
</div>
</div>
<button class="btn-ghost" @click="logout">Logout</button>
</div>
</header>


<main class="content">
<section class="cards">
<article class="card hover-lift">
<h3>Tiket Aktif</h3>
<p>Lihat daftar tiket yang sedang berjalan.</p>
<button class="btn-primary">Lihat</button>
</article>
<article class="card hover-lift">
<h3>Buat Tiket</h3>
<p>Buat tiket baru untuk kebutuhanmu.</p>
<button class="btn-secondary">Buat</button>
</article>
<article class="card hover-lift">
<h3>Laporan</h3>
<p>Ringkasan aktivitas dan performa.</p>
<button class="btn-outline">Buka</button>
</article>
</section>
</main>
</div>
</template>