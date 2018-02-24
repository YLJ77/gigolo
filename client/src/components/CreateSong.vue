<template>
    <v-layout>
        <v-flex xs4>
            <panel title="歌曲元数据">
                <v-text-field
                   label="标题"
                   v-model="song.title"
                   required
                   :rules="[required]"
                   ></v-text-field>
                <v-text-field
                   label="艺术家"
                   v-model="song.artist"
                   required
                   :rules="[required]"
                   ></v-text-field>
                <v-text-field
                   label="类别"
                   v-model="song.genre"
                   required
                   :rules="[required]"
                   ></v-text-field>
                <v-text-field
                   label="专辑"
                   v-model="song.album"
                   required
                   :rules="[required]"
                   ></v-text-field>
                <v-text-field
                   label="专辑图片链接"
                   v-model="song.albumImageUrl"
                   required
                   :rules="[required]"
                   ></v-text-field>
                <v-text-field
                   label="youtube ID"
                   v-model="song.youtubeId"
                   required
                   :rules="[required]"
                   ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="歌曲结构" class="ml-2">
                <v-text-field
                   label="Tab"
                   multi-line
                   required
                   :rules="[required]"
                   v-model="song.tab"
                   ></v-text-field>
                <v-text-field
                   label="歌词"
                   multi-line
                   required
                   :rules="[required]"
                   v-model="song.lyrics"
                   ></v-text-field>
            </panel>

            <div class="red--text" v-if="error">{{ error }}</div>

            <v-btn
                dark
                class="cyan"
                @click="create"
                   >
                创建歌曲
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null,
            },
            required: value => !!value || '不能为空',
            error: null
        }
    },
    methods: {
        async create() {
            this.error = null;
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key]);

            if (!areAllFieldsFilledIn) {
                this.error = '请填写不能为空的字段'
                return;
            }

            try {
                await SongsService.post(this.song);  
                this.$router.push({
                    name: 'songs'
                });
            } catch(error) {
                console.log(error);
            }
        }
    },
    components: {
        Panel
    }
}
</script>

<style>
    div.input-group__error {
        text-align: left;
    }
</style>
