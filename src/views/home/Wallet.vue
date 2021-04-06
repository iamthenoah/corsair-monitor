<template>
    <main class="content bezels">
        <h3>Crypto Wallet</h3>
        <div class="horizontal-carousel">
            <div v-if="loaded">
                <ul>
                    <li>
                        <CryptoCard 
                            address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                            name="Main Account" :ETH="3.55" :value="formatNumber(23434.5)"
                            theme="https://pbs.twimg.com/media/ExGYfNTXAAU8IZ8.jpg:large"
                        />
                    </li>
                    <li>
                        <CryptoCard 
                            address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                            name="Main Account" :ETH="3.55" :value="formatNumber(23434.5)"
                            theme="https://i.pinimg.com/736x/ee/05/1b/ee051bb136477c3fbc9522fe622bf4d7.jpg"
                        />
                    </li>
                    <li>
                        <CryptoCard 
                            address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                            name="Main Account" :ETH="3.55" :value="formatNumber(23434.5)"
                            theme="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyx7riEf-N7I1Sbn7DTCTbPeeYAK7AxquuTFEwP_nP7L-ghTYbTA17uFODOaUAKz8KRA&usqp=CAU"
                        />
                    </li>
                    <li>
                        <CryptoCard 
                            address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                            name="Main Account" :ETH="3.55" :value="formatNumber(23434.5)"
                            theme="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnUSnSpwEO49RoQS_hf4Vhou9WLCQsJjAteZd8HOziwF5Y-XnMbrGhg4Q9ZvBj1Jjfkk&usqp=CAU"
                        />
                    </li>
                </ul>
            </div>
            <div v-else class="noscroll">
                <ul>
                    <li><CryptoCard address="_________________________________" name="____________" ETH="_______" value="_________" placeholder/></li>
                    <li><CryptoCard address="_________________________________" name="____________" ETH="_______" value="_________" placeholder/></li>
                    <li><CryptoCard address="_________________________________" name="____________" ETH="_______" value="_________" placeholder/></li>
                    <li><CryptoCard address="_________________________________" name="____________" ETH="_______" value="_________" placeholder/></li>
                    <li><CryptoCard address="_________________________________" name="____________" ETH="_______" value="_________" placeholder/></li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>

import CryptoCard from '@/components/cards/CryptoCard.vue';
import NumberFormatter from 'number-formatter';

export default {
    components: {
        CryptoCard
    },
    data() {
        return {
            loaded: false,
        }
    },
    mounted() {
        setTimeout(() => this.loaded = true, 10000);
    },
    methods: {
        formatNumber: function(value) { return NumberFormatter('$ #,##0.####', value); }
    }
}
</script>