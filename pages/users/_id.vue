<template>
  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    :title="user.name"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-list-group v-for="message of messages" :key="message.id">
      <b-list-group-item class="mb-2">
        <a href="#" @click.prevent="openUser(message.userFromId)">{{message.userName}}</a>
        <p>{{message.text}}</p>
      </b-list-group-item>
    </b-list-group>

    <FormSendMessage />
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.refreshMessages = setInterval(function(){
      this.getMessages();
    }.bind(this), 5000)
  },
  destroyed() {
    clearInterval(this.refreshMessages);
  },
  async asyncData({$axios, params, store}) {
    const user = await $axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/users/${params.id}`)
    const messages = await $axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/message?userToId=${params.id}`)
    store.dispatch('user/visitedUser', user);
    return {user, messages}
  },
  methods: {
    async getMessages() {
      this.messages = await this.$axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/message?userToId=${this.visitedUserId}`)
    },
    openUser(id) {
      if(this.userId == id) {
        this.$router.push(`/profile`)
      } else {
        this.$router.push(`/users/${id}`)
      }
    }
  },
  computed: {
    ...mapGetters({
          visitedUserId: 'user/visitedUserId',
          userId: 'user/id'
    })
  }
}
</script>