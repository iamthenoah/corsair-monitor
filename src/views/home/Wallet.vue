<template>
    <div class="content bezels">
        <h1>Crypto Wallet</h1>
        <main>
            <CryptoCard 
                address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                name="Main Account" :ETH="3.55" :value="formatNumber(23434.5)"
                theme="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnUSnSpwEO49RoQS_hf4Vhou9WLCQsJjAteZd8HOziwF5Y-XnMbrGhg4Q9ZvBj1Jjfkk&usqp=CAU"
            />
        </main>
    </div>
</template>

<script>

import CryptoCard from '@/components/cards/CryptoCard.vue';
import NumberFormatter from 'number-formatter';

export default {
    components: {
        CryptoCard
    },
    methods: {
        formatNumber: function(value) {
            return NumberFormatter('$ #,##0.####', value);
        }
    }
}
</script>