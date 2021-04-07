<template>
    <main class="content bezels">
        <h1>Rig Monitoring</h1>
        <section>
            <h4>Mining Rigs</h4>
            <div class="horizontal-carousel">
                <div v-if="workers">
                    <ul v-for="worker in workers.workers" :key="worker.worker">
                        <li><WorkerCard :worker="worker" :selected="isSelectedRig(worker.worker)"/></li>
                    </ul>
                </div>
                <div v-else class="noscroll">
                    <ul>
                        <li><WorkerCard placeholder/></li>
                        <li><WorkerCard placeholder/></li>
                        <li><WorkerCard placeholder/></li>
                    </ul>
                </div>
            </div>
        </section>
        <hr id="scroll-to-worker-info">
        <section>
            <pre>{{ workers }}</pre>
        </section>
    </main>
</template>

<script>

import WorkerCard from '@/components/cards/WorkerCard.vue';

export default {
    components: {
        WorkerCard
    },
    data() {
        return {
            workers: null
        }
    },
    async mounted() { 
        this.workers = await this.$store.dispatch('GET_INFO', [
            'miner',
            '3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf',
            'dashboard'
        ]);
    },

    // this.$store.dispatch('RESET_BASIC_INFO');

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
        // changeSelectedRig: function(name) { this.$router.push(`/rigs?selected=${name}`) },
    }
}
</script>