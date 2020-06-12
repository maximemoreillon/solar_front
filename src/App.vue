<template>
  <div id="app">
    <AppTemplate applicationName="Solar power manager">
      <template v-slot:navigation>
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
}
</script>
<style>
main {
  margin: 2vw;
  margin-top: 0;
}
</style>
