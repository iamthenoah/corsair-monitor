<template>
    <div class="card-container noselect content fade-in bg-theme-light fade-in">
        <p :class="{ 'placeholder' : placeholder }" class="name">{{ name }}</p>
        <p :class="{ 'placeholder' : placeholder }" class="address">0x{{ address }}</p>
        <p :class="{ 'placeholder' : placeholder }" class="number">{{ formatNumber(value) }}</p>
        <div class="bottom right">
            <p :class="{ 'placeholder' : placeholder }" class="eth">{{ ETH }} ETH</p>
        </div>
        <img :src="theme">
    </div>
</template>

<script>

import NumberFormatter from 'number-formatter';

export default {
    props: {
        name: {
            type: String,
            default: '____________'
        },
        address: {
            type: String,
            default: '_________________________________'
        },
        theme: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 100000
        },
        ETH: {
            type: Number,
            default: 10000
        },
        placeholder: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        formatNumber: function(value) { return NumberFormatter('$ #,##0.####', value); }
    }
}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .card-container {
        position: relative;
        padding: 20px;
        width: 350px;
        height: 230px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        transform: scale(1);
        margin: 5px 10px 30px 5px; // t r b l
        // box-shadow: 0 15px 10px -10px rgba(black, 0.5);
    }

    .card-container:hover {
        box-shadow: 0 20px 20px -12.5px rgba(black, 0.5);
        transform: scale(1.02);
    }

    .name {
        margin-bottom: 0;
    }

    .address {
        margin-top: 5px;
        margin-bottom: 40px;
        font-weight: 300;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .eth {
        margin-right: 20px;
        font-weight: bold;
        font-size: 16px;
    }

    p {
        margin-top: 0;
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

</style>