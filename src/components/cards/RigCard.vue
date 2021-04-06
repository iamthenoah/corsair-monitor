<template>
    <div @click="redirect()" class="rig-card-container bg-theme-light noselect" :class="{ 'cursor' : !placeholder }">
        <div v-if="selected">
            <div class="selected-indicator"></div>
        </div>
        <div v-if="placeholder" class="rig-card-content">
            <PlaceHolderText/>
        </div>
        <div v-else>
            <h3>{{ name }}</h3>
            <p>{{ algo }}</p>
            <p>{{ state }}</p>
            <p>{{ temp }}</p>
            <p>{{ hash }}</p>
            <p>{{ vram }}</p>
            <p>{{ gpus }}</p>
            <p>{{ uptime }}</p>
        </div>
    </div>
</template>

<script>
import PlaceHolderText from '@/components/PlaceholderText.vue';

export default {
    components: {
        PlaceHolderText
    },
    props: {
        name: String,
        algo: String,
        state: String,
        temp: String,
        hash: String,
        vram: String,
        gpus: String,
        uptime: Number,
        selected: Boolean,
        placeholder: Boolean,
    },
    methods: {
        redirect: function() {
            this.$router.push(`${this.$route.path}?selected=${this.name}`);
        }
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .rig-card-container {
        position: relative;
        width: 380px;
        height: 250px;
        border-radius: 15px;
        overflow: hidden;
        transition: all ease-in-out 300ms;
        margin: 0 20px 20px 0;

        // margin: 5px 15px 30px;
        // &:hover {
        //     box-shadow: 0 20px 20px -10px rgba(black, 0.5);
        // }
    }

    .rig-card-content {
        padding: 20px;
    }

</style>