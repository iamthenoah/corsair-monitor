<template>
    <div class="card-container noselect content bg-theme-light fade-in">
        <a>+ add card</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    
	@import '@/assets/styles/variables.scss';

    .card-container {
        position: relative;
        padding: 20px;
        width: 350px;
        height: 230px;
        border-radius: 15px;
        overflow: hidden;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        transform: scale(1);
        margin: 5px 10px 30px 5px; // t r b l
        // box-shadow: 0 15px 10px -10px rgba(black, 0.5);
        border: 10px solid transparent;
    }

    .card-container:hover {
        border: 10px solid $theme;
    }

    p {
        margin-top: 0;
        color: white;
    }

</style>