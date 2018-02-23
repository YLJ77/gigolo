<template>
    <v-toolbar class="cyan" fixed>
        <v-toolbar-title class="mr-4">
            <v-btn flat dark
                 @click="$router.push({name: 'root'})">
                小白脸
            </v-btn>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark
                         @click="navigateTo({name: 'songs'})">
                浏览
            </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
                 @click="navigateTo({name: 'login'})"
                 v-if="!$store.state.isUserLoggedIn"
                 >
                 登录
            </v-btn>

            <v-btn flat dark
             v-if="!$store.state.isUserLoggedIn"
             @click="navigateTo({name: 'register'})"
                >
                注册
            </v-btn>

            <v-btn flat
             v-if="$store.state.isUserLoggedIn"
             @click="logout"
                >
                登出
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
            
            }       
        },
        methods: {
            navigateTo(router) {
                this.$router.push(router);
            },
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push({
                    name: 'root'
                });
            },
        }
    }
</script>

<style scoped></style>
