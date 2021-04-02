<template>
    <div class="content bezels">
        <h1>Crypto Wallet</h1>
        <main>
            <CryptoCard 
                address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
                name="Main Account" :ETH="3.55" :value="4623.09"
                theme="https://i.pinimg.com/originals/b7/3c/11/b73c11f822f8244adeb4209a39d204c0.jpg"
            />
        </main>
    </div>
</template>

<script>
import CryptoCard from '@/components/CryptoCard.vue';

export default {
    components: {
        CryptoCard
    }
}
</script>