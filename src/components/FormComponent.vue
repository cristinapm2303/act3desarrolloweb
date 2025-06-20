<template>
  <div>
    <h2>Formulario</h2>
    <input v-model="nombre" placeholder="Escribe tu nombre" />
    <p>Hola, {{ nombreEnMayus }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      nombre: ''
    }
  },
  computed: {
    nombreEnMayus() {
      return this.nombre.toUpperCase() // esto funciona como un filtro
    }
  }
}
</script>



<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin: 1rem 0;
}
</style>