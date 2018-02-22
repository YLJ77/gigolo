<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar class="cyan" flat dense dark>
                    <v-toolbar-title>登录</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">

                    <v-text-field
                         label="邮件"
                         v-model="email"
                     ></v-text-field>

                    <v-text-field
                         label="密码"
                         v-model="password"
                     ></v-text-field>

                    <div class="error" v-html="error"></div>
                    <br>
                    <v-btn
                       dark
                       class="cyan"
                       @click="login"
                       >登录</v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data () {
            return {
                email: "",
                password: "",
                error: null,
            }
        },
        methods: {
            async login() {
                try {
                    const response = await AuthenticationService.login({
                        email: this.email,
                        password: this.password
                    });
                    console.log(response.data);
                } catch (error) {
                    this.error = error.response.data.error;
                }
            }
        }
    }
</script>
