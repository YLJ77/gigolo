<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <ul>
                    <li v-for="song in songs" :key="song.title">
                        {{ `${song.title} - ${song.artist} - ${song.album}` }}
                    </li>
                </ul>
            </Panel>
        </v-flex>
    </v-layout>
</template>

<script>
    import SongsService from '@/services/SongsService'
    import Panel from '@/components/Panel'
    export default {
        data() {
            return {
                songs: null
            }
        },
        components: {
            Panel
        },
        async mounted() {
            this.songs = await SongsService.index();
        }
    }
</script>
