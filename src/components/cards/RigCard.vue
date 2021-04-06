<template>
    <div @click="redirect()" class="rig-card-container bg-theme-light noselect" :class="{ 'selected-shadow': selected }">
        <div v-if="selected">
            <div class="selected-indicator"></div>
        </div>
        <div class="rig-card-content">
            <p>{{ name }}</p>
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
export default {
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
        cursor: pointer;
        transition: all ease-in-out 300ms;
        margin: 0 20px 20px 0;

        // margin: 5px 15px 30px;
        // &:hover {
        //     box-shadow: 0 20px 20px -10px rgba(black, 0.5);
        // }
    }

    .rig-card-content {
        padding: 0 20px;
    }

    .name {
        margin-bottom: 0;
    }

    .address {
        margin-top: 0px;
        margin-bottom: 20px;
        font-weight: 300;
        text-overflow: ellipsis;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
    }

    // .selected-shadow {
    //     box-shadow: 0 15px 10px -10px rgba(black, 0.5);
    // }

    h3 {
        font-family: 'Montserrat';
    }

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(3px);
    }

</style>