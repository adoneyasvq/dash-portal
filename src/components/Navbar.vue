<template>
  <header class="navbar">
    <div class="nav-container">
      <div class="brand-group">
        <!-- Africa CDC Logo linked to Home -->
        <router-link to="/" class="logo-link">
          <img
            src="https://impact.africacdc.org/themes/custom/thinkmodular/assets/img/africa-cdc.png"
            alt="Africa CDC Logo"
            class="cdc-logo"
          />
        </router-link>
        <div class="brand">
          <h2>DASH</h2>
          <span>Digital Analytics and Systems for Health</span>
        </div>
      </div>

      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/dhis">DHIS</router-link>
        <router-link to="/mis">MIS</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #005a36; /* Africa CDC Green */
  color: white;
  padding: 0.75rem 2rem;
  border-bottom: 4px solid #d4af37; /* Gold accent */
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-link {
  display: flex;
  align-items: center;
}

.cdc-logo {
  height: 45px;
  width: auto;
  object-fit: contain;
  background: white;
  padding: 3px;
  border-radius: 4px;
}

.brand h2 {
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.1;
}

.brand span {
  font-size: 0.8rem;
  color: #e0e4e8;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
  color: #d4af37;
}
</style>
