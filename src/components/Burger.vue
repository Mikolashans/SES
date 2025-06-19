<script setup lang="ts">
import { useNavigastionStore } from '@/stores/navigation'
import NavigationLink from '../components/NavigationLink.vue'
import { ref } from 'vue'
const isOpen = ref(false)
function toggle() {
    isOpen.value = !isOpen.value
}

const navigation = useNavigastionStore()
</script>
<template>
    <div class="burger" :class="{ 'open': isOpen }" @click="toggle">
        <div class="burger__line"></div>
        <div class="nav" v-if="isOpen">
            <NavigationLink v-for="link in navigation.navList" :key="link.id" :link="link" />
        </div>
    </div>

</template>

<style scoped lang="less">
.burger {
    display: none;
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    padding: 15px 12px;
    align-content: center;
    background-color: #fff;
}

.nav {
    position: relative;
}

.burger__line {
    position: relative;
    width: 20px;
    height: 2px;
    background-color: #0a0a0a;
}

.burger__line::after {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background-color: #0a0a0a;
    top: 6px;
}

.burger__line::before {
    content: "";
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background-color: #0a0a0a;
    top: -6px;
}

.burger.open .burger__line {
    background-color: transparent;
}

.burger.open .burger__line::before {
    transform: rotate(45deg) translate(6px, 3px);
}

.burger.open .burger__line::after {
    transform: rotate(-45deg) translate(6px, -3px);
}

.nav {
    position: absolute;
    width: 300px;
    height: 500px;
    top: 0;
    left: 100%;
    background-color: #0a0a0a;
}

@media only screen and (max-width:768px) {
    .burger {
        display: block;
        margin-right: 16px;
    }
}
</style>