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
            <h4>Hasrates</h4>
            <div v-if="WorkerStats" class="stat-card-container">
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
            </div>
            <div v-else class="stat-card-container">
                <StatCard placeholder />
                <StatCard placeholder />
                <StatCard placeholder />
            </div>
        </section>
        <section>
            <div id="hashrate-chart"></div>
        </section>
        <section>
            <h4>Shares</h4>
            <div v-if="WorkerStats" class="stat-card-container">
                <StatCard 
                    :value="WorkerStats.worker.validShares"
                    stat="Valid Shares"
                />
                <StatCard 
                    :value="WorkerStats.worker.staleShares"
                    stat="Stale Shares"
                />
                <StatCard 
                    :value="WorkerStats.worker.invalidShares"
                    stat="Invalid Shares"
                />
            </div>
            <div v-else class="stat-card-container">
                <StatCard placeholder />
                <StatCard placeholder />
                <StatCard placeholder />
            </div>
        </section>
        <section>
            <div id="share-chart"></div>
        </section>
    </main>
</template>

<script>

import WorkerCard from '@/components/cards/WorkerCard.vue';
import StatCard from '@/components/cards/StatCard.vue';
import ApexCharts from 'apexcharts'

export default {
    components: {
        StatCard,
        WorkerCard,
    },
    async mounted() { 
        this.$store.dispatch('RESET_WORKERS');
        await this.$store.dispatch('GET_WORKERS', '3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf');

        const workers = JSON.parse(JSON.stringify(this.$store.getters.Workers));
        if (!this.$route.params.id && workers) this.$router.push('/workers/' + workers[0].worker);

        // "stats": [
        //     {
        //         "time": 1617879000,
        //         "reportedHashrate": 41765627,
        //         "currentHashrate": 51111111.11111111,
        //         "validShares": 46,
        //         "invalidShares": 0,
        //         "staleShares": 0,
        //         "averageHashrate": 51111111.11111111
        //     }
        // ]

        this.loadCharts();
        setInterval(this.loadCharts(), 120000);
    },
    computed: {
        Workers: function() { return this.$store.getters.Workers; },
        WorkerStats: function() { return this.$store.getters.WorkerStats; },
    },
    methods: {
        loadCharts: async function() {
            const workers = this.$store.getters.Workers;
            const name = this.$route.params.id;
            const worker = name ? workers.filter(w => w.worker == name)[0] : workers[0];

            await this.$store.dispatch('GET_WORKER_STATISTICS', {
                address: '3a7aF0a0527C51E322aBbC3Eabfd31b4fC8F5Dcf',
                worker: worker
            });
    
            const stats = JSON.parse(JSON.stringify(this.$store.getters.WorkerStats));
            const current = [];
            const average = [];
            const reported = [];
            const valid = [];
            const invalid = [];
            const stale = [];
    
            for (const { currentHashrate, averageHashrate, reportedHashrate, validShares, invalidShares, staleShares, time } of stats.stats) {
                const date = new Date(time * 1000);
                current.push([date, currentHashrate]);
                average.push([date, averageHashrate]);
                reported.push([date, reportedHashrate]);
                valid.push([date, validShares]);
                invalid.push([date, invalidShares]);
                stale.push([date, staleShares]);
            }
    
            const optionsHasrate = {
                series: [
                    {
                        name: 'Current Hashrate',
                        data: current
                    },
                    {
                        name: 'Average Hashrate',
                        data: average
                    },
                    {
                        name: 'Reported Hashrate',
                        data: reported
                    },
                ],
                chart: {
                    type: 'line',
                    stacked: false,
                    height: 500,
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                yaxis: {
                    labels: {
                        formatter: val => (val / 1000000).toFixed(1)
                    },
                    title: {
                        text: 'Hashrate (MH)'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: val => (val / 1000000).toFixed(1)
                    }
                }
            };
    
            const optionsShare = {
                series: [
                    {
                        name: 'Valid Shares',
                        data: valid
                    },
                    {
                        name: 'Invalid Shares',
                        data: invalid
                    },
                    {
                        name: 'Stale Shares',
                        data: stale
                    },
                ],
                chart: {
                    type: 'line',
                    stacked: false,
                    height: 500,
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                yaxis: {
                    title: {
                        text: 'Shares'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                }
            };
    
            const canvasHashrate = document.getElementById('hashrate-chart');
            const canvasShare = document.getElementById('share-chart');
            canvasHashrate.innerHTML = '';
            canvasShare.innerHTML = '';
            const chartHashrate = new ApexCharts(canvasHashrate, optionsHasrate);
            const chartShare = new ApexCharts(canvasHashrate, optionsShare);
            chartHashrate.render();
            chartShare.render();
        }
    }
}
</script>

<style lang="scss">
    
	@import '@/assets/styles/variables.scss';

    .stat-card-container {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: 100%;
        gap: 20px;
        overflow: hidden;
    }

</style>