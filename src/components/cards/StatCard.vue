<template>
    <div class="stat-card-container bg-theme-light">
        <div class="center-fit">
            <h3 :class="{ 'placeholder' : placeholder }" class="number">{{ formatNumber(value) }} {{ suffix }}</h3>
            <p :class="{ 'placeholder' : placeholder }" class="stat">{{ stat }}</p>
        </div>
    </div>
</template>

<script>

import NumberFormatter from 'number-formatter';

export default {
    props: {
        icon: String,
        suffix: String,
        value: {
            type: Number,
            default: 100000
        },
        stat: {
            type: String,
            default: '________'
        },
        placeholder: Boolean
    },
    methods: {
        formatNumber: function(value) { return NumberFormatter('#,##0.##', value); },
    }
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/styles/variables.scss';
    
    .stat-card-container {
        position: relative;
        display: inline-block;
        height: 150px;
        border-radius: 10px;
        text-align: center;
    }

</style>