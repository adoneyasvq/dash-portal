<template>
  <div class="page">
    <header class="header">
      <h1>Contact DASH</h1>
      <p class="lead">
        Reach out to the Digital Analytics and Systems for Health department.
      </p>
    </header>

    <div class="contact-container">
      <!-- Contact Info Box -->
      <div class="info-box">
        <h3>Office Details</h3>

        <div class="info-item">
          <strong>Department:</strong>
          <p>Digital Analytics and Systems for Health (DASH)</p>
        </div>

        <div class="info-item">
          <strong>Top Leadership:</strong>
          <p>Vasilis (Top Adviser)</p>
        </div>

        <div class="info-item">
          <strong>Sub-Departments:</strong>
          <p>• DHIS (Head: Judith)</p>
          <p>• MIS (Head: Shehzaad)</p>
        </div>
      </div>

      <!-- General Inquiry Form -->
      <form class="contact-form" @submit.prevent="handleSubmit">
        <h3>Send an Inquiry</h3>

        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="name@domain.com"
          />
        </div>

        <div class="form-group">
          <label for="department">Target Sub-Department</label>
          <select id="department" v-model="form.department">
            <option value="general">General DASH Inquiry</option>
            <option value="dhis">
              Digital Health Information System (DHIS)
            </option>
            <option value="mis">Management Information System (MIS)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  department: "general",
  message: "",
});

function handleSubmit() {
  alert(
    `Thank you ${form.name}. Your inquiry to the ${form.department.toUpperCase()} department has been recorded!`,
  );
  form.name = "";
  form.email = "";
  form.message = "";
}
</script>

<style scoped>
.header {
  border-bottom: 2px solid #e0e4e8;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.header h1 {
  color: #005a36;
}

.lead {
  color: #5a6a75;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-box {
  background: #f4f6f8;
  border: 1px solid #e0e4e8;
  border-top: 4px solid #005a36;
  border-radius: 8px;
  padding: 1.5rem;
}

.info-box h3 {
  color: #005a36;
  margin-bottom: 1rem;
}

.info-item {
  margin-bottom: 1rem;
}

.info-item strong {
  color: #1c252c;
  font-size: 0.9rem;
}

.info-item p {
  color: #5a6a75;
  margin: 0.2rem 0 0 0;
  font-size: 0.9rem;
}

.contact-form {
  background: white;
  border: 1px solid #e0e4e8;
  border-radius: 8px;
  padding: 1.5rem;
}

.contact-form h3 {
  color: #005a36;
  margin-bottom: 1.25rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #1c252c;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #e0e4e8;
  border-radius: 4px;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #005a36;
}

.submit-btn {
  background: #005a36;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #003822;
}
</style>
