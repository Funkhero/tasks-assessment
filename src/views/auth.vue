<template>
  <div class="auth-page">
    <div class="auth-page__wrapper">
      <t-title class="auth-page__title">Hello</t-title>
      <p class="auth-page__subtitle">Pls login with your account:</p>
      <div class="auth-page__form">
        <component
          :is="currentForm"
          @form-change="currentForm = $event"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/login-form.vue';
import RegistrationForm from '@/components/auth/registratoin-form.vue';

export default {
  name: 'AuthPage',
  routeName: 'auth',
  components: {
    LoginForm,
    RegistrationForm,
  },
  data() {
    return {
      currentForm: 'login-form',
    };
  },
};
</script>

<style lang="scss" scoped>
  .auth-page {
    &__wrapper {
      border: 1px solid grey;
      max-width: 540px;
      width: 100%;
      margin: 0 auto;
      padding: 40px;
    }
    &__title {
      margin-bottom: 14px;
    }
    &__subtitle {
      margin-bottom: 24px;
    }
  }
</style>
