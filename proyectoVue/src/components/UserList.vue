<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <UserCard v-for="u in users" :key="u.id" :user="u" />
  </div>
</template>

<script>
import UserCard from './UserCard.vue'

export default {
  name: 'UserList',
  components: {
    UserCard
  },
  data() {
    return {
      users: [
        { id: 1, name: 'Ana', email: 'ana@mail.com' },
        { id: 2, name: 'Luis', email: 'luis@mail.com' }
      ]
    }
  }
}
</script>



<style scoped>
.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  margin-bottom: 1rem;
}
</style>