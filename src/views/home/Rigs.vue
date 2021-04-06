<template>
    <main class="content bezels">
        <h1>Rig Monitoring</h1>
        <section>
            <h4>Mining Rigs</h4>
            <div class="horizontal-carousel">
                <div v-if="Rigs">
                    <ul v-for="rig in Object.entries(Rigs)" :key="Object.keys(rig)[0]">
                        <li>
                            <RigCard
                                @click="changeSelectedRig(rig[0])"
                                :selected="isSelectedRig(rig[0])"
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
                                @click="changeSelectedRig('rig[0]')"
                                :selected="isSelectedRig('rig[0]')"
                                name="rig[0]" 
                                algo="rig[1]['miner']" 
                                state="rig[1]['condition']" 
                                temp="rig[1]['temp']"
                                gpus="rig[1]['gpus']" 
                                hash="rig[1]['miner_hashes']" 
                                vram="rig[1]['vramsize']" 
                                :uptime="123455" 
                            />
                        </li>
                    </ul>
                </div>
                <div v-else class="noscroll">
                    <ul>
                        <li><RigCard placeholder/></li>
                        <li><RigCard placeholder/></li>
                        <li><RigCard placeholder/></li>
                    </ul>
                </div>
            </div>
        </section>
        <hr>
        <section>
            <div v-if="selectedRig">
                {{ selectedRig }}
            </div>
        </section>
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
        // document.getElementById('html-mabite').scrollIntoView({ behavior: 'smooth' })
    },
    computed: {
        Rigs: function() {
            const r = this.$store.getters.Rigs;
            return r ? r.rigs : null;
            // return null;
        },
        selectedRig: function() {
            const r = this.$store.getters.Rigs;
            let selected = null;

            if (r) {
                const name = this.$route.query.selected;
                selected = Object.keys(r.rigs)
                    .filter(k => k == name)
                    .reduce((o, k) => {
                        o[k] = r.rigs[k];
                        return o;
                    }, {});
            }

            return selected;
        }
    },
    // watch: {
    //     selectedRig: {
    //         handler: function() {
    //             const r = this.$store.getters.Rigs;
    //             if (r && !this.$route.query.selected) {
    //                 const name = Object.keys(r.rigs)[0];
    //                 this.$router.push(`/rigs?selected=${name}`);
    //             }
    //         }
    //     }
    // },
    methods: {
        isSelectedRig: function(name) { return this.$route.query.selected == name; },
        changeSelectedRig: function(name) { this.$router.push(`/rigs?selected=${name}`) },
    }
}
</script>