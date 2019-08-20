<template lang="pug">
  div.login.col-md6.col-md-offset-3
    Title.text-center {{ $t('register.title') }}

    Login
      hr
      div.well
        form(autocomplete='off' @submit.prevent='validateBeforeSubmit' style={ width: '100%' })
          ItemForm
            Label.col-md-5(for='username') {{ $t('register.username') }}
            div.col-md-7(:class="{ 'has-error': errors.has('username') }")
              input.form-control(
                autocomplete='off'
                name='username'
                v-model='username'
                v-validate
                data-vv-rules='required'
                type='text'
                id='username'
                :placeholder="$t('register.username')"
                :class="{ 'has-error': errors.has('username') }"
              )
              span.text-danger(v-show="errors.has('username')") {{ errors.first('username') }}

          ItemForm
            Label.col-md-5(for='email') {{ $t('register.email') }}
            div.col-md-7(:class="{ 'has-error': errors.has('email') }")
              input.form-control(
                autocomplete='off'
                name='email'
                v-model='email'
                v-validate
                data-vv-rules='required|email'
                type='email'
                id='email'
                :placeholder="$t('register.email')"
                :class="{ 'has-error': errors.has('email') }"
              )
              span.text-danger(v-show="errors.has('email')") {{ errors.first('email') }}

          ItemForm
            Label.col-md-5(for='password') {{ $t('register.password') }}
            div.col-md-7(:class="{ 'has-error': errors.has('password') }")
              input.form-control(
                autocomplete='off'
                name='password'
                v-model='password'
                v-validate
                data-vv-rules='required|min:6'
                type='password'
                id='password'
                :placeholder="$t('register.password')"
                :class="{ 'has-error': errors.has('password') }"
              )
              span.text-danger(v-show="errors.has('password')") {{ errors.first('password') }}
          ItemForm
            Label.col-md-5(for='password_confirmation') {{ $t('register.password_confirmation') }}
            div.col-md-7(:class="{ 'has-error': errors.has('password_confirmation') }")
              input.form-control(
                autocomplete='off'
                name='password_confirmation'
                v-model='password_confirmation'
                v-validate
                data-vv-rules='required'
                type='password'
                id='password_confirmation'
                :placeholder="$t('register.password_confirmation')"
                :class="{ 'has-error': errors.has('password_confirmation') }"
              )
              //- input.form-control(
              //-   autocomplete='off'
              //-   name='password_confirmation'
              //-   v-model='password_confirmation'
              //-   v-validate
              //-   data-vv-rules='required|confirmed:password'
              //-   type='password'
              //-   id='password_confirmation'
              //-   :placeholder="$t('register.password_confirmation')"
              //-   :class="{ 'has-error': errors.has('password_confirmation') }"
              //- )
              span.text-danger(
                v-show="errors.has('password_confirmation')"
              ) {{ errors.first('password_confirmation') }}

          Button.btn.btn-block(type='submit' v-html="$t('register.title')")
      hr
    div.alert.alert-danger(
      v-if='error'
      style={ width: '50%', margin: 'auto' }
    ) {{ $t('register.error') }}

</template>

<script>
import { mapActions } from 'vuex';
import authType from '@/types/auth';
import {
  Title, Login, ItemForm, Label, Button,
} from './styles';

export default {
  name: 'register',
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
      password_confirmation: '',
      username: '',
      error: null,
    };
  },
  methods: {
    ...mapActions({
      register: authType.actions.register,
    }),
    validateBeforeSubmit() {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.register({
              email: this.email,
              password: this.password,
              username: this.username,
            })
              .then(
                user => this.$router.push('/login'),
                error => { this.error = true; },
              );
          }
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>
