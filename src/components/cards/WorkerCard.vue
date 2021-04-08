<template>
    <div @click="redirect()" :class="{ 'cursor' : !placeholder }" class="rig-card-container bg-theme-light noselect fade-in">
        <div v-if="isSelected" class="selected-indicator"></div>
        <div class="rig-card-content">
            <h3 :class="{ 'placeholder' : placeholder }" class="name">{{ worker.worker }}</h3>
            <p :class="{ 'placeholder' : placeholder }" class="mining-condition">{{ worker.currentHashrate != 0 ? 'Mining' : 'Idle' }}</p>
            <p :class="{ 'placeholder' : placeholder }" class="number hash-number">{{ formatNumber(worker.currentHashrate / 1000000) }} MHs<span class="material-icons">north_east</span></p>
            <p :class="{ 'placeholder' : placeholder }" class="average-hashrate bottom">{{ formatNumber(worker.averageHashrate / 1000000) }} MHs</p>
        </div>
    </div>
</template>

<script>

import NumberFormatter from 'number-formatter';

export default {
    props: {
        worker: {
            type: Object,
            default() {
                return {
                    worker: '______',
                    time: '__________',
                    lastSeen: '__________',
                    reportedHashrate: '__________',
                    currentHashrate: '__________',
                    averageHashrate: '__________',
                    validShares: '___',
                    invalidShares: '___',
                    staleShares: '___'
                }
            }
        },
        placeholder: Boolean,
    },
    computed: {
        isSelected: function() { return this.$route.params.id == this.worker.worker; },
    },
    methods: {
        formatNumber: function(value) { return NumberFormatter('#,##0.##', value); },
        redirect: function() { 
            document.getElementById('scroll-to-worker-info').scrollIntoView({ behavior: 'smooth' });
            this.$router.push('/workers/' + this.worker.worker); 
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
        border-radius: 5px;
        overflow: hidden;
        transition: all ease-in-out 300ms;
        margin: 0 20px 20px 0;
    }

    .rig-card-content {
        padding: 20px;
    }

    .mining-condition {
        margin-top: 0;
        margin-bottom: 20px;
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

    .average-hashrate {
        
    }

</style>