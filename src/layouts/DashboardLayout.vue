<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="dashboard-layout">
    <!-- RAIL -->

    <aside class="dashboard-rail">
      <div class="rail-brand">
        <RouterLink to="/dashboard"> Gatherly Organizer </RouterLink>
      </div>

      <nav class="rail-nav">
        <RouterLink to="/dashboard" class="rail-link"> Overview </RouterLink>

        <a class="rail-link"> My Events </a>

        <a class="rail-link"> Attendees </a>

        <a class="rail-link"> QR Check-in </a>
      </nav>

      <div class="rail-footer">
        <RouterLink to="/" class="rail-link"> ← Back to Public </RouterLink>
      </div>
    </aside>

    <!-- PANE -->

    <main class="dashboard-pane">
      <header class="pane-header">
        <h1>Dashboard</h1>

        <span> Admin </span>
      </header>

      <section class="pane-content">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;

  min-height: 100vh;
}

.dashboard-rail {
  width: 260px;

  background: #1c1948;

  color: white;

  display: flex;

  flex-direction: column;
}

.rail-brand {
  padding: 24px;

  font-weight: 700;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.rail-brand a {
  color: white;

  text-decoration: none;
}

.rail-nav {
  flex: 1;

  padding: 20px;
}

.rail-link {
  display: block;

  padding: 12px 16px;

  color: #ddd;

  text-decoration: none;

  border-radius: 8px;

  margin-bottom: 8px;
}

.rail-link:hover {
  background: rgba(255, 255, 255, 0.1);

  color: white;
}

.rail-footer {
  padding: 20px;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.dashboard-pane {
  flex: 1;

  background: #f8f8fa;
}

.pane-header {
  height: 70px;

  background: white;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 32px;

  border-bottom: 1px solid #eee;
}

.pane-header h1 {
  font-size: 20px;

  color: #1c1948;
}

.pane-content {
  padding: 32px;
}
</style>
