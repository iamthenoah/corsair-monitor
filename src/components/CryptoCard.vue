<template>
    <div class="card-container noselect content">
        <p class="name">{{ name }}</p>
        <p class="address">0x{{ address }}</p>
        <h3 class="number">{{ value }}</h3>
        <div class="bottom right">
            <p id="eth">{{ ETH }} ETH</p>
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
        value: String,
        ETH: Number
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .card-container {
        position: relative;
        padding: 0 25px;
        width: 350px;
        height: 230px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        transform: scale(1);
    }

    .card-container:hover {
        box-shadow: 0 15px 20px -10px rgba(black, 0.5);
        transform: scale(1.02);
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

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.1);
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: blur(2px);
        z-index: -1;
    }

    #eth {
        margin-right: 25px;
        font-weight: bold;
        font-size: 16px;
    }

</style>