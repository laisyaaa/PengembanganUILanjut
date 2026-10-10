<script setup>
const events = [
  {
    id: 1,
    title: 'Vue.js Mastery Workshop',
    date: 'Oct 12, 2026',
    loc: 'Tech Hub, Jakarta',
    cat: 'Workshop',
    desc: 'Learn advanced Vue 3 concepts, Composition API, and state management to build high-performance web applications interactively.',
  },

  {
    id: 2,
    title: 'National Tech Meetup',
    date: 'Oct 15, 2026',
    loc: 'Main Auditorium, City Center',
    cat: 'Meetup',
    desc: 'A gathering of hundreds of developers and tech enthusiasts to share the latest industry trends.',
  },

  {
    id: 3,
    title: 'Startup Pitch Competition',
    date: 'Nov 02, 2026',
    loc: 'Innovation Center',
    cat: 'Competition',
    desc: 'Watch the best local startup founders pitch their innovative ideas.',
  },

  {
    id: 4,
    title: 'UI/UX Design Sprint',
    date: 'Nov 10, 2026',
    loc: 'Creative Studio',
    cat: 'Workshop',
    desc: 'A hands-on session on designing user interfaces and visual hierarchy principles.',
  },

  {
    id: 5,
    title: 'Digital Marketing Seminar',
    date: 'Nov 20, 2026',
    loc: 'Grand Hotel Hall',
    cat: 'Seminar',
    desc: 'An in-depth seminar discussing modern digital marketing strategies.',
  },

  {
    id: 6,
    title: 'Community Leaders Summit',
    date: 'Dec 05, 2026',
    loc: 'City Hall',
    cat: 'Conference',
    desc: 'An exclusive year-end conference for community leaders.',
  },
]
</script>

<template>
  <main class="event-list-page">
    <section class="header-section">
      <h2 class="section-title">Upcoming Events</h2>

      <p class="section-desc">
        Discover workshops, seminars, tech meetups, and competitions near you.
      </p>
    </section>

    <!-- LAYOUT SYSTEM : ADAPTIVE GRID -->

    <section class="event-grid">
      <article class="event-card" v-for="event in events" :key="event.id">
        <div class="event-body">
          <div class="event-meta">
            <span class="event-date">
              {{ event.date }}
            </span>

            <span class="event-category">
              {{ event.cat }}
            </span>
          </div>

          <h3 class="event-title">
            {{ event.title }}
          </h3>

          <p class="event-loc">
            {{ event.loc }}
          </p>

          <p class="event-desc">
            {{ event.desc }}
          </p>

          <div class="card-footer">
            <router-link :to="`/browse/events/${event.id}`" class="btn-link">
              View Event Details →
            </router-link>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.event-list-page {
  display: flex;

  flex-direction: column;

  gap: var(--space-5);
}

.header-section {
  margin-bottom: var(--space-3);
}

.section-title {
  font-size: 2.2rem;

  color: var(--text-main);

  margin-bottom: var(--space-2);
}

.section-desc {
  color: var(--text-muted);

  font-size: 1.1rem;
}

/* ADAPTIVE GRID */

.event-grid {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  gap: var(--space-6);
}

/* COMMON REGION */

.event-card {
  background: white;

  border-radius: var(--space-4);

  border: 1px solid var(--border-color);

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  display: flex;

  flex-direction: column;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
}

.event-body {
  padding: var(--space-6);

  display: flex;

  flex-direction: column;

  height: 100%;
}

/* GROUPING */

.event-meta {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: var(--space-4);
}

.event-date {
  background: rgba(102, 68, 255, 0.1);

  color: var(--primary);

  padding: var(--space-1) var(--space-2);

  border-radius: 6px;

  font-weight: 600;

  font-size: 0.85rem;
}

.event-category {
  color: var(--text-muted);

  font-size: 0.85rem;

  font-weight: 500;
}

.event-title {
  margin-bottom: var(--space-2);

  font-size: 1.4rem;

  color: var(--text-main);
}

.event-loc {
  color: var(--text-muted);

  font-size: 0.95rem;

  margin-bottom: var(--space-4);
}

.event-desc {
  color: var(--text-muted);

  line-height: 1.6;

  font-size: 0.95rem;

  margin-bottom: var(--space-6);

  flex-grow: 1;
}

/* ACTION */

.card-footer {
  border-top: 1px solid var(--border-color);

  padding-top: var(--space-4);
}

.btn-link {
  color: var(--text-main);

  font-weight: 600;

  text-decoration: none;
}

.btn-link:hover {
  color: var(--primary);
}
</style>
