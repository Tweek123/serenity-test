<template>
  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    :title="user.name"
    tag="article"
    style="max-width: 20rem;"
  >
    <b-list-group v-for="message in user.messages" :key="message.id">
      <b-list-group-item class="mb-2">
        <a href="#" @click.prevent="openUser(message.userFromId)">{{message.userName}}</a>
        <p>{{message.text}}</p>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>
<script>
import { mapGetters, mapMutations  } from 'vuex'

export default {
  mounted() {
    this.refreshMessages = setInterval(function(){
       this.getMessages();
    }.bind(this), 5000)
  },
  destroyed() {
    clearInterval(this.refreshMessages);
  },
  methods: {
      openUser(id) {
          this.$router.push(`/users/${id}`);
      },
      async getMessages() {
        const messages = await this.$axios.$get(`https://my-json-server.typicode.com/Tweek123/json-server/message?userToId=${this.userId}`);
        this.setUserMessages(messages);
      },
      ...mapMutations({
        setUserMessages: 'user/setUserMessages' // map `this.add()` to `this.$store.commit('increment')`
      })
  },
  computed: {
    ...mapGetters({
          user: 'user/user',
          userId: 'user/id'
    })
  }
}
</script>