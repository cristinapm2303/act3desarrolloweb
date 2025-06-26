<template>
  <header>
    <h1>VueAPP</h1>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/usuarios">Usuarios</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.nav-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
.nav-links a {
  color: #646cff;
}
</style>