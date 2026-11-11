<template>
  <div class="org-chart-container">
    <h2>Department Structure</h2>
    <p class="subtitle">Click on any box to expand or collapse details.</p>

    <div class="tree">
      <!-- Root Node: DASH -->
      <div class="node-wrapper">
        <div
          class="node root-node"
          :class="{ active: expandedNodes.dash }"
          @click="toggleNode('dash')"
        >
          <div class="node-header">
            <h3>DASH</h3>
            <span class="badge">Department</span>
          </div>
          <p class="name">Vasilis</p>
          <p class="title">Top Adviser</p>
          <span class="toggle-icon">{{ expandedNodes.dash ? "▼" : "►" }}</span>
        </div>

        <!-- Level 2: Sub-Departments -->
        <div v-if="expandedNodes.dash" class="children-container">
          <div class="line-v"></div>
          <div class="children-grid">
            <!-- Sub Dept 1: DHIS -->
            <div class="branch">
              <div
                class="node sub-node"
                :class="{ active: expandedNodes.dhis }"
                @click="toggleNode('dhis')"
              >
                <div class="node-header">
                  <h4>DHIS</h4>
                </div>
                <p class="name">Judith</p>
                <p class="title">Head of Sub-Department</p>
                <span class="toggle-icon">{{
                  expandedNodes.dhis ? "▼" : "►"
                }}</span>
              </div>

              <!-- DHIS details when expanded -->
              <div v-if="expandedNodes.dhis" class="details-card">
                <p>
                  Digital Health Information System core team and operations.
                </p>
                <router-link to="/dhis" class="page-link"
                  >Go to DHIS Page →</router-link
                >
              </div>
            </div>

            <!-- Sub Dept 2: MIS (Your Sub Department) -->
            <div class="branch">
              <div
                class="node sub-node highlight-node"
                :class="{ active: expandedNodes.mis }"
                @click="toggleNode('mis')"
              >
                <div class="node-header">
                  <h4>MIS</h4>
                </div>
                <p class="name">Shehzaad</p>
                <p class="title">Head of Sub-Department</p>
                <span class="toggle-icon">{{
                  expandedNodes.mis ? "▼" : "►"
                }}</span>
              </div>

              <!-- Level 3: MIS Divisions -->
              <div v-if="expandedNodes.mis" class="divisions-container">
                <div class="line-v"></div>
                <div class="divisions-grid">
                  <div class="division-card">
                    <h5>Operations</h5>
                    <p>Process & workflow management</p>
                  </div>
                  <div class="division-card">
                    <h5>Software Dev</h5>
                    <p>Systems engineering & platforms</p>
                  </div>
                  <div class="division-card">
                    <h5>Infra & Cybersecurity</h5>
                    <p>Network & data protection</p>
                  </div>
                </div>
                <router-link to="/mis" class="page-link"
                  >Go to MIS Page →</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Reactive state tracking which nodes are currently expanded
const expandedNodes = reactive({
  dash: true, // Expanded by default
  dhis: false,
  mis: true, // Expanded by default to show your sub-department
});

function toggleNode(nodeKey) {
  expandedNodes[nodeKey] = !expandedNodes[nodeKey];
}
</script>

<style scoped>
.org-chart-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e0e4e8;
}

.subtitle {
  color: #5a6a75;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.tree {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.node {
  background: white;
  border: 2px solid #005a36;
  border-radius: 6px;
  padding: 1rem 1.5rem;
  min-width: 220px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.node:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.root-node {
  border-top: 5px solid #005a36;
}

.highlight-node {
  border-top: 5px solid #d4af37; /* Gold accent for your sub-department */
}

.node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.node-header h3,
.node-header h4 {
  color: #005a36;
  margin: 0;
}

.badge {
  background: #005a36;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
}

.name {
  font-weight: bold;
  margin: 0;
  font-size: 1.05rem;
}

.title {
  color: #5a6a75;
  font-size: 0.85rem;
  margin: 0.2rem 0 0 0;
}

.toggle-icon {
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 0.75rem;
  color: #5a6a75;
}

.children-container,
.divisions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.line-v {
  width: 2px;
  height: 20px;
  background-color: #005a36;
}

.children-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details-card {
  margin-top: 10px;
  padding: 0.75rem;
  background: #f4f6f8;
  border-radius: 6px;
  font-size: 0.85rem;
  max-width: 220px;
  text-align: center;
}

.divisions-grid {
  display: flex;
  gap: 0.75rem;
  margin-top: 5px;
  margin-bottom: 10px;
}

.division-card {
  background: #f4f6f8;
  border: 1px solid #e0e4e8;
  border-radius: 6px;
  padding: 0.6rem;
  min-width: 130px;
  text-align: center;
}

.division-card h5 {
  color: #005a36;
  margin-bottom: 0.25rem;
}

.division-card p {
  font-size: 0.75rem;
  color: #5a6a75;
  margin: 0;
}

.page-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.85rem;
  color: #005a36;
  font-weight: bold;
  text-decoration: none;
}

.page-link:hover {
  color: #d4af37;
  text-decoration: underline;
}
</style>
