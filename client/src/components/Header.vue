<template>
    <v-toolbar class="cyan" fixed dark>
        <v-toolbar-title class="mr-4">
            <v-btn flat
                 @click="$router.push({name: 'root'})">
                小白脸
            </v-btn>
        </v-toolbar-title>
        <!-- <v-toolbar-items> -->
        <!--     <v-btn flat dark> -->
        <!--         浏览 -->
        <!--     </v-btn> -->
        <!-- </v-toolbar-items> -->

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat
                 @click="navigateTo({name: 'login'})"
                 >
                 登录
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn flat
             @click="navigateTo({name: 'register'})"
                >
                注册
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
            }
        }
    }
</script>

<style scoped></style>
