<template>
  <div class="page">
    <header class="dept-header">
      <span class="badge">Sub-Department</span>
      <h1>Digital Health Information System (DHIS)</h1>
      <p class="lead">
        Managing national and regional health data architectures, surveillance
        pipelines, and analytics standards.
      </p>
    </header>

    <section class="section">
      <h2>Leadership</h2>
      <div class="leadership-card">
        <div class="avatar-placeholder">J</div>
        <div class="leader-info">
          <h3>Judith</h3>
          <p class="role">Head of Sub-Department</p>
          <p class="bio">
            Leads digital health systems integration, data quality frameworks,
            and institutional reporting solutions across public health networks.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Core Focus Areas</h2>
      <div class="focus-grid">
        <div class="focus-card">
          <h3>📊 Health Data Analytics</h3>
          <p>
            Standardizing health indicators, data collection protocols, and
            real-time dashboard visualizations.
          </p>
        </div>
        <div class="focus-card">
          <h3>🔄 Interoperability</h3>
          <p>
            Connecting disparate hospital and community health record systems to
            ensure seamless data exchange.
          </p>
        </div>
        <div class="focus-card">
          <h3>📈 System Capacity</h3>
          <p>
            Training health informatics personnel and implementing standardized
            data governance policies.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dept-header {
  border-bottom: 2px solid #e0e4e8;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.dept-header h1 {
  color: #005a36;
  margin: 0.75rem 0 0.5rem 0;
}

.lead {
  color: #5a6a75;
  font-size: 1.1rem;
}

.section {
  margin-bottom: 2.5rem;
}

.section h2 {
  color: #005a36;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid #d4af37;
  display: inline-block;
  padding-bottom: 0.2rem;
}

.leadership-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #f4f6f8;
  border: 1px solid #e0e4e8;
  border-left: 5px solid #005a36;
  border-radius: 8px;
  padding: 1.5rem;
}

.avatar-placeholder {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #005a36;
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.leader-info h3 {
  margin: 0 0 0.2rem 0;
}

.role {
  color: #005a36;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.bio {
  color: #5a6a75;
  margin: 0;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.focus-card {
  background: white;
  border: 1px solid #e0e4e8;
  border-radius: 8px;
  padding: 1.25rem;
}

.focus-card h3 {
  color: #005a36;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.focus-card p {
  color: #5a6a75;
  font-size: 0.9rem;
  margin: 0;
}
</style>
