<script setup>
import { onBeforeUnmount, onBeforeMount, onMounted, ref, watch } from 'vue';
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import Contacts from './Contacts.vue';
import Favorite from './Favorite.vue';
import Burger from './Burger.vue';
import More from './More.vue';
</script>
<template>
    <div class="header">
        <Burger />
        <Logo />
        <Navigation />
        <More />
        <Contacts />
        <Favorite />
    </div>

</template>
<style scoped lang="less">
* {
    box-sizing: border-box;
    box-sizing: inherit;
}

@bg-dark-dark: #0a0a0a;

.header {
    display: flex;
    width: 100%;
    padding: 0 100px;
    position: fixed;
    align-items: center;
    z-index: 1;
    background-color: @bg-dark-dark;
}

@media (max-width: 1440px) {
    .header {
        padding: 0 75px;
        padding-top: 12px;
        padding-bottom: 10px;
        justify-content: space-around;
    }
}

@media (max-width:768px) {
    .header {
        position: relative;
        box-sizing: border-box;
        justify-content: left;
        padding-left: 40px;
        padding-top: 9px;
        padding-right: 15px;
        padding-bottom: 9px;
    }
}

@media (min-width: 320px) and (max-width: 768px) {
    .header {
        padding-left: 15px;
    }

}
</style>