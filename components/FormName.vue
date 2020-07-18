<template>
    <b-form @submit.prevent="onSubmit" class="form-name">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          :class="{ 'is-invalid': form.nameNotFound || form.error.status}"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
          <b-form-invalid-feedback v-if="form.error.status" id="input-live-feedback">
            {{form.error.message}}
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else id="input-live-feedback">
            Имя не найдено
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
          name: '',
          nameNotFound: false,
          error: {
            status: false,
            message: ""
          }
        },
      }
    },
    methods: {
      async onSubmit() {
        this.form.error = {status: false, message: ""};
        this.cancelError();
        await this.login(this.form.name);
        if(this.formName.error.status) {
          this.form.error = this.formName.error;
          return false;
        } 

        if(!this.user) {
          this.form.nameNotFound = true;
          return false;
        }
  
        this.form.nameNotFound = false;
        this.$router.push(`/profile`)
    },
    ...mapActions({
      login: 'formName/login',
      cancelError: 'formName/cancelFormNameError'
    })
  },
  computed: {
    ...mapGetters({
          formName: 'formName/formName',
          user: 'user/user',
    })
  }
}
</script>
<style>
.form-name {
  text-align: left;
}
</style>
