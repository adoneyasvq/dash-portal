<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h3>DASH</h3>
        <p>Digital Analytics and Systems for Health</p>
      </div>
      <div class="footer-copy">
        <p>
          &copy; {{ new Date().getFullYear() }} DASH Department. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #003822;
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
  border-top: 4px solid #d4af37;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-brand h3 {
  color: #d4af37;
  margin: 0;
}

.footer-brand p {
  font-size: 0.85rem;
  color: #e0e4e8;
  margin: 0.2rem 0 0 0;
}

.footer-copy p {
  font-size: 0.85rem;
  color: #e0e4e8;
  margin: 0;
}
</style>
