<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2024 甘语桐. All rights reserved.</p>
        <p class="footer-note">
          Made with <i class="fas fa-heart pulse"></i> for showcasing my work
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
}

.footer-content p {
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.7);
}

.footer-note {
  font-size: 0.9em;
}

.pulse {
  color: #e74c3c;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>

