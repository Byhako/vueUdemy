<template lang="pug">
  div.login.col-md6.col-md-offset-3
    Title.text-center {{ $t('login.title') }}

    Login
      hr
      div.well
        form(
          autocomplete='off'
          @submit.prevent='validateBeforeSubmit'
          style={ width: '100%' }
        )
          ItemForm
            Label.col-md-4(for='email') {{ $t('login.email') }}
            div.col-md-8(:class="{ 'has-error': errors.has('email') }")
              input.form-control(
                autocomplete='off'
                name='email'
                v-model='email'
                v-validate
                data-vv-rules='required|email'
                type='email'
                id='email'
                :placeholder="$t('login.email')"
                :class="{ 'has-error': errors.has('email') }"
              )
              span.text-danger(v-show="errors.has('email')") {{ errors.first('email') }}

          ItemForm
            Label.col-md-4(for='password') {{ $t('login.password') }}
            div.col-md-8(:class="{ 'has-error': errors.has('password') }")
              input.form-control(
                autocomplete='off'
                name='password'
                v-model='password'
                v-validate
                data-vv-rules='required|min:6'
                type='password'
                id='password'
                :placeholder="$t('login.password')"
                :class="{ 'has-error': errors.has('password') }"
              )
              span.text-danger(v-show="errors.has('password')") {{ errors.first('password') }}

          Button.btn.btn-block(type='submit' v-html="$t('login.title')")
      hr
    div.alert.alert-danger(
      v-if='error'
      style={ width: '50%', margin: 'auto' }
    ) {{ $t('login.error') }}

</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import authType from '@/types/auth';
import {
  Title, Login, ItemForm, Label, Button,
} from './style';

export default {
  name: 'home',
  components: {
    Title,
    Login,
    ItemForm,
    Label,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    ...mapActions({
      login: authType.actions.login,
    }),
    validateBeforeSubmit() {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.login({
              email: this.email,
              password: this.password,
            })
              .then(
                user => this.$router.push('/'),
                error => { this.error = true; },
              );
          }
        })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>
