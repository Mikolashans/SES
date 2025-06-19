<script setup lang="ts">
import { type Navigation } from '@/stores/navigation';
import { useNavigastionStore } from '@/stores/navigation';
import NavigationLink from './NavigationLink.vue';
import { RouterLink } from 'vue-router';
import { onMounted, ref, onBeforeUnmount } from 'vue';

const navigation = useNavigastionStore()
onMounted(() => {
    update()
    window.addEventListener('resize', update);

});
const visibleList = ref<Navigation[]>([]);
const hiddenList = ref<Navigation[]>([]);
const navWidth = ref();
const update = () => {
    const widthMenu = navWidth.value.clientWidth;
    const visibleItems = Math.floor(widthMenu / 125);
    if (visibleItems < navigation.navList.length) {
        console.log(visibleItems)
        console.log(widthMenu)
        navigation.visibleList = [...navigation.navList.slice(0, visibleItems - 1)];
        navigation.moreList = navigation.navList.slice(visibleItems - 1);
        console.log(navigation.visibleList, navigation.moreList)
    } else {
        navigation.visibleList = [...navigation.navList]
        navigation.moreList = []
        console.log(visibleItems)
        console.log(widthMenu)
    }
}
onBeforeUnmount(() => {
    window.removeEventListener('resize', update);
});

</script>
<template>
    <nav class="nav" ref="navWidth">
        <NavigationLink v-for="link in navigation.visibleList" :key="link.id" :link="link" />
    </nav>
</template>

<style scoped lang="less">
.nav {
    display: flex;
    width: 500px;
    margin-right: 36px;
    column-gap: 40px;
    list-style: none;
}

.link {
    text-decoration: none;
}

@media (max-width: 1440px) {
    .nav {
        width: 375px;
        column-gap: 20px;
        margin-right: 20px;
    }
}

@media only screen and (max-width: 768px) {
    .nav {
        display: none;
    }
}
</style>