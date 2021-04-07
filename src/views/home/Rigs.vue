<template>
    <main class="content bezels">
        <h1>Rig Monitoring</h1>
        <section>
            <h4>Mining Rigs</h4>
            <div class="horizontal-carousel">
                <div v-if="Rigs">
                    <ul v-for="rig in Rigs" :key="rig.name">
                        <li>
                            <RigCard
                                :selected="isSelectedRig(rig.name)"
                                :name="rig.name"
                                :state="rig.rig.condition"
                                :temp="rig.rig.temp"
                                :hash="rig.rig.hash"
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
        <hr id="scroll-to-rig-info">
        <section>
            <pre>{{ Rigs }}</pre>
        </section>
    </main>
</template>

<script>

import RigCard from '@/components/cards/RigCard.vue';

export default {
    components: {
        RigCard
    },
    mounted() { 
        this.$store.dispatch('RESET');
        this.$store.dispatch('GET_RIGS', '7f217d');
        // document.getElementById('html-mabite').scrollIntoView({ behavior: 'smooth' })
    },
    computed: {
        Rigs: function() { return this.$store.getters.Rigs; },
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