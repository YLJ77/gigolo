<template>
    <div class="white elevation-2">
        <v-toolbar class="cyan" flat dense dark>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            
            <slot name="add"></slot>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>slot内容未定义</slot>   
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
            }
        }
    }
</script>
