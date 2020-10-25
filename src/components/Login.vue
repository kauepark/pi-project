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
          />
          <v-text-field 
            id="senhaUsuario"
            :type="showPassword ? 'text' : 'password'" 
            label="Senha"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" v-on:click="onRegistro">Registrar</v-btn>
        <v-btn color="info" v-on:click="onLogin">Entrar</v-btn>
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
            nome_usuario: document.getElementById('#nomeUsuario').value(),
            senha: document.getElementById('#senhaUsuario').value(),
            loginValido: false
        }
    },
    methods: {
        async onLogin() {
            try {
                const snapshot = await db.collection('usuario').get();
                snapshot.forEach(doc => {
                    let eventoData = doc.data();
                    if (eventoData.nome_usuario == this.nome_usuario && eventoData.senha == this.senha) {
                        this.loginValido = true;
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },
        async onRegistro() {
            try {
                if (this.nome_usuario && this.senha) {
                    await db.collection('usuario').add({
                        nome_usuario: this.nome_usuario,
                        senha: this.senha
                    });
                    this.nome_usuario = null;
                    this.senha = null;
                    this.loginValido = true;
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