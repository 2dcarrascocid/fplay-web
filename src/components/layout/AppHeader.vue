<template>
  <header class="container flex justify-between items-center relative" style="padding: 1rem 0;">
    <RouterLink to="/" class="flex items-center z-50">
      <img
        :src="logo"
        alt="Fair Play Chile Logo"
        style="height: 48px; width: auto;"
      />
    </RouterLink>

    <!-- Mobile Menu Button -->
    <button 
      class="mobile-menu-btn" 
      @click="toggleMenu" 
      aria-label="Toggle navigation"
      :class="{ 'open': isMenuOpen }"
    >
      <span class="hamburger"></span>
    </button>

    <nav :class="{ 'nav-open': isMenuOpen }">
      <ul class="flex gap-md nav-list">
        <li><RouterLink to="/" @click="handleNavClick('Home')">Inicio</RouterLink></li>
        <li><RouterLink to="/servicios" @click="handleNavClick('Servicios')">Servicios</RouterLink></li>
        <li><RouterLink to="/nosotros" @click="handleNavClick('Nosotros')">Nosotros</RouterLink></li>
        <li><RouterLink to="/productos" @click="handleNavClick('Productos')">Nuestros Productos</RouterLink></li>
        <li><RouterLink to="/contacto" @click="handleNavClick('Contacto')">Contacto</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import logo from "../../assets/fplay.png";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Prevent scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Analytics integration
import { useGtag } from "vue-gtag-next";
const { event } = useGtag();

const handleNavClick = (label) => {
  // Track navigation click
  event('menu_click', {
    'event_category': 'navigation',
    'event_label': label
  });
  
  // Close menu if open (mobile)
  closeMenu();
};

</script>

<style scoped>
header {
  border-bottom: 1px solid var(--color-border);
  position: relative;
}

.z-50 {
  z-index: 50;
}

nav a {
  font-weight: 500;
  color: var(--color-text-muted);
  transition: color 0.3s;
}

nav a:hover, nav a.router-link-active {
  color: var(--color-primary);
}

/* Mobile Menu Button - Hidden on Desktop */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 50;
  padding: 10px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: background 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.3s, top 0.3s;
}

.hamburger::before { top: -8px; }
.hamburger::after { top: 8px; }

/* Hamburger Open State */
.mobile-menu-btn.open .hamburger {
  background: transparent;
}

.mobile-menu-btn.open .hamburger::before {
  transform: rotate(45deg);
  top: 0;
}

.mobile-menu-btn.open .hamburger::after {
  transform: rotate(-45deg);
  top: 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-dark-bg); /* Use dark bg or var(--color-bg) */
    z-index: 40;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1a; /* Fallback/Hardcoded dark for safety */
  }

  nav.nav-open {
    transform: translateX(0);
  }

  .nav-list {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
  }
}
</style>
