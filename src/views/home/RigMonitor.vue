<template>
    <div class="content bezels">
        <h1>Rig Monitoring</h1>
        <h4>Mining Rigs</h4>
        <div id="rig-container">
            <div v-if="Rigs">
                <div v-for="rig in Object.entries(Rigs)" :key="Object.keys(rig)[0]">
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
                </div>
            </div>
        </div>
    </div>
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