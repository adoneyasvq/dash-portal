<template>
  <div class="page router-view-wrapper">
    <!-- Header Section -->
    <header class="dept-header">
      <span class="badge">Sub-Department</span>
      <h1>Management Information System (MIS)</h1>
      <p class="lead">
        Driving operational efficiency, software engineering excellence, and
        secure digital infrastructure across DASH.
      </p>
    </header>

    <!-- Leadership Section -->
    <section class="section">
      <h2>Sub-Department Leadership</h2>
      <div class="leadership-card">
        <div class="avatar-placeholder">S</div>
        <div class="leader-info">
          <h3>Shehzaad</h3>
          <p class="role">Head of Sub-Department</p>
          <p class="bio">
            Oversees technical strategy, internal software development, IT
            infrastructure, operations, and cybersecurity across the department.
          </p>
        </div>
      </div>
    </section>

    <!-- Divisions Grid Section -->
    <section class="section">
      <h2>Divisions &amp; Scope</h2>
      <div class="divisions-grid">
        <!-- Division 1 -->
        <div class="division-card">
          <div class="card-header">
            <div class="icon">⚙️</div>
            <h3>Operations</h3>
          </div>
          <p>
            Manages core workflows, systems maintenance, administrative data
            flows, and cross-departmental coordination.
          </p>
          <ul class="task-list">
            <li>Workflow automation &amp; process optimization</li>
            <li>Operational reporting &amp; data verification</li>
            <li>User support &amp; system administration</li>
          </ul>
        </div>

        <!-- Division 2 -->
        <div class="division-card">
          <div class="card-header">
            <div class="icon">💻</div>
            <h3>Software Dev</h3>
          </div>
          <p>
            Architects, builds, and maintains digital platforms and web systems
            supporting health analytics.
          </p>
          <ul class="task-list">
            <li>Frontend &amp; backend application development</li>
            <li>API integration &amp; database management</li>
            <li>Quality assurance &amp; system upgrades</li>
          </ul>
        </div>

        <!-- Division 3 -->
        <div class="division-card">
          <div class="card-header">
            <div class="icon">🛡️</div>
            <h3>Infrastructure &amp; Cybersecurity</h3>
          </div>
          <p>
            Ensures network uptime, cloud platform stability, data privacy, and
            defense against security threats.
          </p>
          <ul class="task-list">
            <li>Server management &amp; cloud hosting</li>
            <li>Cybersecurity audits &amp; access control</li>
            <li>Disaster recovery &amp; data backup policies</li>
          </ul>
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
  position: relative;
  padding-bottom: 0.4rem;
}

.section h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background-color: #d4af37;
}

/* Leadership Styling */
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
  color: #1c252c;
}

.role {
  color: #005a36;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.bio {
  color: #5a6a75;
  font-size: 0.95rem;
  margin: 0;
}

/* Divisions Grid */
.divisions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.division-card {
  background: white;
  border: 1px solid #e0e4e8;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.division-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.5rem;
}

.card-header h3 {
  color: #005a36;
  margin: 0;
}

.division-card p {
  color: #5a6a75;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.task-list {
  padding-left: 1.2rem;
  color: #1c252c;
  font-size: 0.85rem;
}

.task-list li {
  margin-bottom: 0.4rem;
}
</style>
