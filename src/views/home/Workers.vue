<template>
    <main class="content bezels">
        <h1>Worker Monitoring</h1>
        <section>
            <h4>Mining Rigs</h4>
            <div class="horizontal-carousel">
                <div v-if="Workers">
                    <ul>
                        <li v-for="w in Workers" :key="w.worker"><WorkerCard :worker="w" /></li>
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
            <h4>Worker Statistics</h4>
            <div v-if="WorkerStats" id="stat-card-container">
                <StatCard 
                    :value="WorkerStats.worker.currentHashrate / 1000000"
                    suffix="MHs"
                    stat="Current Hashrate"
                />
                <StatCard 
                    :value="WorkerStats.worker.averageHashrate / 1000000"
                    suffix="MHs"
                    stat="Average Hashrate"
                />
                <StatCard 
                    :value="WorkerStats.worker.reportedHashrate / 1000000"
                    suffix="MHs"
                    stat="Reported Hashrate"
                />
                <StatCard 
                    :value="WorkerStats.worker.validShares"
                    stat="Valid Shares"
                />
            </div>
            <div v-else id="stat-card-container">
                <StatCard placeholder />
                <StatCard placeholder />
                <StatCard placeholder />
                <StatCard placeholder />
            </div>
        </section>
        <pre v-show="WorkerStats">
            {{ WorkerStats }}
        </pre>
    </main>
</template>

<script>

import WorkerCard from '@/components/cards/WorkerCard.vue';
import StatCard from '@/components/cards/StatCard.vue';

export default {
    components: {
        StatCard,
        WorkerCard,
    },
    async mounted() { 
        this.$store.dispatch('RESET_WORKERS');
        await this.$store.dispatch('GET_WORKERS', '3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf');
        const workers = JSON.parse(JSON.stringify(this.$store.getters.Workers));
        
        if (!this.$route.params.id) {
            this.$router.push('/workers/' + workers[0].worker);
        } else {
            const name = this.$route.params.id;
            const worker = name ? workers.filter(w => w.worker == name)[0] : workers[0];

            this.$store.dispatch('GET_WORKER_STATISTICS', {
                address: '3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf',
                worker: worker
            });
        }
    },
    computed: {
        Workers: function() { return this.$store.getters.Workers; },
        WorkerStats: function() { return this.$store.getters.WorkerStats; },
    },
}
</script>

<style lang="scss">
    
	@import '@/assets/styles/variables.scss';

    #stat-card-container {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
        overflow: hidden;
    }

</style>