<template>
  <div id="app">
    <AppTemplate
      :options="options">
      <template v-slot:nav>
        <router-link to="/">Battery voltage</router-link>
        <router-link to="/current">Current</router-link>
      </template>
      <router-view />
    </AppTemplate>
  </div>
</template>
<script>

import AppTemplate from '@moreillon/vue_application_template'

export default {
  name: 'App',
  components: {
    AppTemplate,
  },
  data(){
    return {
      options: {
        title: 'Solar power dashboard',
        authenticate: true,
        login_url: `${process.env.VUE_APP_AUTHENTICATION_API_URL}/login`,
        identification_url: `${process.env.VUE_APP_AUTHENTICATION_API_URL}/whoami`
      },
    }
  },
}
</script>
<style>
main {
  margin: 2vw;
  margin-top: 0;
}
</style>
