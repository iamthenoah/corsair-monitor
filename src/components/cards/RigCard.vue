<template>
    <div class="rig-card-container bg-theme-light noselect">
        <div v-if="selected" class="selected-indicator"></div>
        <div class="rig-card-content">
            <a @click="redirect()" class="right">view details</a>
            <h4 class="name">{{ name }}</h4>
            <p class="condition">{{ state }}</p>
            <p class="number hash-number">{{ hash }} H/s<span class="material-icons">north_east</span></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        state: String,
        temp: String,
        hash: String,
        selected: Boolean,
        placeholder: Boolean,
    },
    methods: {
        redirect: function() { 
            document.getElementById('scroll-to-rig-info').scrollIntoView({ behavior: 'smooth' });
            this.$router.push(`${this.$route.path}?selected=${this.name}`); 
        }
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    h4 {
        font-size: 22px;
        color: $grey;
        font-weight: 500;
        margin: 0;
    }

    .rig-card-container {
        position: relative;
        width: 380px;
        height: 200px;
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

    .condition {
        margin-top: 0;
        margin-bottom: 20px;
        font-weight: 300;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .hash-number {
        background: $green;
        width: fit-content;
        border-radius: 5px;
        height: fit-content;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        color: white;

        span {
            font-size: 32px;
            transform: translateY(5px);
            margin-left: 5px;
        }
    }

</style>