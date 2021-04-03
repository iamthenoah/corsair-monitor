<template>
    <div class="rig-card-container bg-theme-light noselect">
        <p>{{ name }}</p>
        <p>{{ algo }}</p>
        <p>{{ state }}</p>
        <p>{{ temp }}</p>
        <p>{{ hash }}</p>
        <p>{{ vram }}</p>
        <p>{{ gpus }}</p>
        <p>{{ uptime }}</p>
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
        uptime: Number
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .rig-card-container {
        position: relative;
        padding: 0 20px;
        width: 380px;
        height: 250px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        box-shadow: 0 0 10px 10px rgba(black, 0.05);
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
        filter: blur(3px);
        z-index: -1;
    }

</style>