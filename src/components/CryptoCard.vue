<template>
    <div class="card-container noselect">
        <p class="name">{{ name }}</p>
        <p class="address">0x{{ address }}</p>
        <h3>{{ value }}</h3>
        <div class="bottom">
            <p>{{ ETH }} ETH</p>
        </div>
        <img :src="theme">
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        address: String,
        theme: String,
        value: Number,
        ETH: Number
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .card-container {
        position: relative;
        padding: 0 20px;
        width: 300px;
        height: 190px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        transform: scale(1);
        box-shadow: 0 10px 10px -10px rgba(black, 0.75);
    }

    .card-container:hover {
        transform: scale(1.02);
        box-shadow: 0 15px 20px -10px rgba(black, 0.5);
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

    p, h3 {
        color: white;
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