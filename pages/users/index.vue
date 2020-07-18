<template>
<div class="w-25">
  <b-list-group v-for="user of users" :key="user.id">
    <b-list-group-item><a href="#" @click.prevent="openUser(user.id)">{{user.name}}</a></b-list-group-item>    
  </b-list-group>
</div>
</template>
<script>
export default {
  methods: {
      openUser(id) {
          this.$router.push(`/users/${id}`)
      }
  },
  async asyncData({$axios, store}) {
    const user = store.getters['user/user'];
    const users = await $axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/users?name_ne=${user.name}`)
    return {users}
  }
}
</script>