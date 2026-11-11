<template>
  <div class="page router-view-wrapper">
    <!-- Hero Banner -->
    <div class="hero">
      <span class="badge">Overview</span>
      <h1>Digital Analytics and Systems for Health (DASH)</h1>
      <p class="lead">
        DASH provides the digital systems, data platforms and analytics that
        Africa CDC headquarters uses to manage its operations and to support
        evidence-based decisions for public health across Africa. It does this
        through two sub-departments: Digital Health Information Systems, which
        covers health data platforms and surveillance, and Management
        Information Systems, which covers internal software, operations,
        infrastructure and cybersecurity.
      </p>
    </div>

    <!-- Sub-Department Quick Access Grid -->
    <div class="sub-dept-cards">
      <router-link to="/dhis" class="dept-card">
        <div class="card-content">
          <h3>Digital Health Information System (DHIS)</h3>
          <p>Head: <strong>Judith</strong></p>
          <span class="card-link">Explore DHIS &rarr;</span>
        </div>
      </router-link>

      <router-link to="/mis" class="dept-card highlight-border">
        <div class="card-content">
          <h3>Management Information System (MIS)</h3>
          <p>Head: <strong>Shehzaad</strong></p>
          <span class="card-link">Explore MIS &amp; Divisions &rarr;</span>
        </div>
      </router-link>
    </div>

    <!-- Interactive Org Chart Component -->
    <OrgChart />
  </div>
</template>

<script setup>
import OrgChart from "../components/OrgChart.vue";
</script>

<style scoped>
.hero {
  border-bottom: 2px solid #e0e4e8;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.hero h1 {
  color: #005a36;
  margin: 0.75rem 0;
  font-size: 2rem;
}

.lead {
  font-size: 1.05rem;
  color: #333;
  line-height: 1.6;
}

.sub-dept-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.dept-card {
  display: flex;
  gap: 1.25rem;
  background: #f4f6f8;
  border: 1px solid #e0e4e8;
  border-left: 5px solid #005a36;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.dept-card.highlight-border {
  border-left-color: #d4af37;
}

.dept-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.card-icon {
  font-size: 2rem;
}

.card-content h3 {
  color: #005a36;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.card-content p {
  color: #5a6a75;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}

.card-link {
  font-size: 0.85rem;
  font-weight: 700;
  color: #005a36;
}
</style>
