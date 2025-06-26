<template>
  <div class="user-card">
    <p><strong>{{ user.name }}</strong></p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['user']
}
</script>



<style scoped>
.user-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem auto;
  width: 300px;
  color: white;
  text-align: left;
}
</style>
