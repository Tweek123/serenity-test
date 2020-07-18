<template>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          :class="{ 'is-invalid': form.error.status}"
        ></b-form-textarea>
        <b-form-invalid-feedback v-if="form.error.status" id="input-live-feedback">
            {{form.error.message}}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
</template>

<script>
  import { mapGetters, mapActions  } from 'vuex'
  export default {
    data() {
      return {
        form: {
          text: '',
          error: {
            status: false,
            message: ""
          }
        }
      }
    },
    methods: {
      async onSubmit() {
        this.form.error = {status: false, message: ""};
        this.cancelError();
        await this.sendMessage(this.form.text);
 
        if(this.formSendMessage.error.status) {
          this.form.error = this.formSendMessage.error;
          return false;
        } 
      },
    ...mapActions({
      sendMessage: 'formMessage/sendMessage',
      cancelError: 'formMessage/cancelFormSendMessageError'
    })
    },
  computed: {
    ...mapGetters({
          formSendMessage: 'formMessage/formSendMessage'
    })
  }
  }
</script>