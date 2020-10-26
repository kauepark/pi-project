<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            id="nomeUsuario"
            label="Nome de usuário" 
            prepend-icon="mdi-account-circle"
            v-model="username"
          />
          <v-text-field 
            id="senhaUsuario"
            :type="showPassword ? 'text' : 'password'" 
            label="Senha"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" v-on:click="onRegister">Registrar</v-btn>
        <v-btn color="info" v-on:click="onLogin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import VueRouter from 'vue-router';
import {db} from '../main'
export default {
    data() {
        return {
            username: null,
            password: null,
            loginValid: false
        }
    },
    methods: {
        async onLogin() {
            try {
                const snapshot = await db.collection('usuario').get();
                snapshot.forEach(doc => {
                    let eventoData = doc.data();
                    if (eventoData.username == this.username && eventoData.password == this.password) {
                        this.loginValid = true;
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },
        async onRegister() {
            try {
                if (this.username && this.password) {
                    await db.collection('usuario').add({
                        username: this.username,
                        password: this.password
                    });
                    this.username = null;
                    this.password = null;
                    this.loginValid = true;
                } else {
                    console.log('Campo obligátorio')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>