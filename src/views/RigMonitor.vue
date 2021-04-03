<template>
    <div class="content bezels">
        <h1>Rig Monitoring</h1>
        <p>{{ Rigs }}</p>
        <LoadingBar v-if="Rigs.length === 0"/>
    </div>
</template>

<script>

import LoadingBar from '@/components/LoadingBar.vue';

export default {
    components: {
        LoadingBar,
    },
    mounted() {
        this.$store.dispatch('RESET');
        this.$store.dispatch('ADD_RIG', '7f217d');
    },
    computed: {
        Rigs: function() {
            return this.$store.getters.Rigs;
        }
    }
}
</script>
