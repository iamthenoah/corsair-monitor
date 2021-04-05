<template>
    <main class="content bezels">
        <h1>Rig Monitoring</h1>
        <h4>Mining Rigs</h4>
        <div v-if="Rigs" id="rigcard-container" class="horizontal-carousel">
            <ul v-for="rig in Object.entries(Rigs)" :key="Object.keys(rig)[0]">
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
                <li>
                    <RigCard
                        :name="rig[0]" 
                        :algo="rig[1]['miner']" 
                        :state="rig[1]['condition']" 
                        :temp="rig[1]['temp']"
                        :gpus="rig[1]['gpus']" 
                        :hash="rig[1]['miner_hashes']" 
                        :vram="rig[1]['vramsize']" 
                        :uptime="rig[1]['miner_secs']" 
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>

import RigCard from '@/components/cards/RigCard.vue';

export default {
    components: {
        RigCard,
    },
    mounted() {
        this.$store.dispatch('RESET');
        this.$store.dispatch('GET_RIGS', '7f217d');
    },
    computed: {
        Rigs: function() {
            const r = this.$store.getters.Rigs;
            return r ? r.rigs : null;
        }
    }
}
</script>

<style lang="scss">
    
    #rigcard-container {
        width: 100%;
    }

</style>