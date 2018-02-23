<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="登录">
            <v-text-field
                   label="邮件"
                   v-model="email"
                   ></v-text-field>

                <v-text-field
                   label="密码"
                   v-model="password"
                   type="password"
                   ></v-text-field>

                    <div class="error" v-html="error"></div>
                    <br>
                    <v-btn
                       dark
                       class="cyan"
                       @click="login"
                       >登录</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    import Panel from '@/components/Panel'

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
                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUser', response.data.user);
                } catch (error) {
                    this.error = error.response.data.error;
                }
            }
        },
        components: {
            Panel
        }
    }
</script>
