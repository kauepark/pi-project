<template>
  <v-app>
    <!--<Login/>-->
    <Calendario/>
  </v-app>
</template>

<script>
import Login from './components/Login';
import Calendario from './components/Calendario';

export default {
  name: 'App',

  components: {
    Login,
    Calendario,
  },

  data: () => ({
    //
  }),
};
</script>
