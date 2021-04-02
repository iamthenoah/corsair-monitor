<template>
    <div class="content bezels">
        <h1>WALLET</h1>
        <CryptoCard 
            address="3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf" 
            ETH="3.55" value="$4,623.09" name="Main Account"
            theme="https://i.pinimg.com/originals/b7/3c/11/b73c11f822f8244adeb4209a39d204c0.jpg"
        />
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