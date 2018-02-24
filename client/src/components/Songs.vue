<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
            <router-link
                slot="add"
                :to="{name: 'songs-create'}"
                >
                <v-btn
                    class="cyan accent-2"
                    fab
                    light
                    medium
                    absolute
                    right
                    middle
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </router-link>
            
                <ul class="song-list">
                    <li v-for="song in songs" :key="song.id" class="song">
                        <v-layout>
                            <v-flex xs6>
                                <div class="song-title">
                                    {{ song.title }}
                                </div>
                                <div class="song-artist">
                                    {{ song.artist }}
                                </div>
                                <div class="song-genre">
                                    {{ song.genre }}
                                </div>

                                <v-btn
                                    dark
                                    class="cyan"
                                    @click="navigateTo({
                                        name: 'song', 
                                        params: {
                                            songId: song.id
                                        }
                                    })"
                                    >查看</v-btn>
                            </v-flex>

                            <v-flex xs6>
                                <img class="album-image" :src="song.albumImageUrl">       
                            </v-flex>
                        </v-layout>
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
        methods: {
            navigateTo(route) {
                this.$router.push(route);
            
            }
        },
        components: {
            Panel
        },
        async mounted() {
            let data = await SongsService.index();
            this.songs = data.data;
        }
    }
</script>

<style scoped land="less">
ul.song-list {
    list-style: none;
}

img.album-image {
    width: 80%;
    margin: 0 auto;
}

div.song-title {
 font-size: 30px;
}

div.song-artist{
    font-size: 24px;
}

li.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
div.song-genre{
    font-size: 18px;
}

</style>
