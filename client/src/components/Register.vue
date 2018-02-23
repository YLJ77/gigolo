<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="注册">
            <form name="tab-tracker-form"
                  autocomplete="off">
                <v-text-field
                  label="邮件"
                  v-model="email"
                  ></v-text-field>

                    <v-text-field
                  label="密码"
                  v-model="password"
                  type="password"
                  autocomplete="new-password"
                  ></v-text-field>

            </form>

            <div class="error" v-html="error"></div>
            <br>
            <v-btn
               dark
               class="cyan"
               @click="register"
               >注册</v-btn>
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
            async register() {
                try {
                    const response = await AuthenticationService.register({
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
