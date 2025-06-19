<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import type { Navigation } from '@/stores/navigation';

const isShowSubNav = ref(true)
const props = defineProps<{
    link: Navigation
}>()
function showSubNav() {
    isShowSubNav.value = true
}

function hideSubNav() {
    isShowSubNav.value = false
}

onMounted(() => {
    hideSubNav();
})

</script>
<template>
    <div class="link-container" @mouseover="showSubNav" @mouseleave="hideSubNav">
        <router-link class="link" :to="{ name: props.link.path }">{{ props.link.name }}</router-link>
        <div v-if="!isShowSubNav"><svg width="10" height="5" viewBox="0 0 10 5" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.9141 0.289248C8.85987 0.234573 8.79536 0.191176 8.72427 0.161561C8.65319 0.131946 8.57694 0.116699 8.49993 0.116699C8.42293 0.116699 8.34668 0.131946 8.2756 0.161561C8.20451 0.191176 8.14 0.234573 8.08577 0.289248L5.4141 2.96091C5.35987 3.01558 5.29536 3.05898 5.22427 3.0886C5.15319 3.11821 5.07694 3.13346 4.99993 3.13346C4.92293 3.13346 4.84668 3.11821 4.7756 3.0886C4.70451 3.05898 4.64 3.01558 4.58577 2.96091L1.9141 0.289248C1.85987 0.234573 1.79535 0.191176 1.72427 0.161561C1.65319 0.131946 1.57694 0.116699 1.49993 0.116699C1.42293 0.116699 1.34668 0.131946 1.2756 0.161561C1.20451 0.191176 1.14 0.234573 1.08577 0.289248C0.97712 0.398542 0.916138 0.546389 0.916138 0.700497C0.916138 0.854605 0.97712 1.00245 1.08577 1.11175L3.76327 3.78924C4.09139 4.11696 4.53618 4.30103 4.99993 4.30103C5.46369 4.30103 5.90847 4.11696 6.2366 3.78924L8.9141 1.11175C9.02275 1.00245 9.08373 0.854605 9.08373 0.700497C9.08373 0.546389 9.02275 0.398542 8.9141 0.289248Z"
                    fill="white" />
            </svg></div>
        <div v-else><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.40029 4.88006L1.81029 0.29006C1.62293 0.103809 1.36948 -0.000732422 1.10529 -0.000732422C0.841105 -0.000732422 0.587653 0.103809 0.400291 0.29006C0.306562 0.383023 0.232168 0.493624 0.181399 0.615483C0.130631 0.737343 0.104492 0.868048 0.104492 1.00006C0.104492 1.13207 0.130631 1.26278 0.181399 1.38464C0.232168 1.5065 0.306562 1.6171 0.400291 1.71006L5.00029 6.29006C5.09402 6.38302 5.16841 6.49362 5.21918 6.61548C5.26995 6.73734 5.29609 6.86805 5.29609 7.00006C5.29609 7.13207 5.26995 7.26278 5.21918 7.38464C5.16841 7.5065 5.09402 7.6171 5.00029 7.71006L0.400291 12.2901C0.211987 12.477 0.105672 12.7312 0.104734 12.9965C0.103797 13.2619 0.208314 13.5168 0.395291 13.7051C0.582269 13.8934 0.836391 13.9997 1.10176 14.0006C1.36712 14.0016 1.62199 13.897 1.81029 13.7101L6.40029 9.12006C6.96209 8.55756 7.27765 7.79506 7.27765 7.00006C7.27765 6.20506 6.96209 5.44256 6.40029 4.88006Z"
                    fill="#FFF" />
            </svg></div>
        <div class="sub-nav" v-if="isShowSubNav">
            <div class="div" v-for="subLink in props.link.children">
                <router-link class="link" :to="{ name: subLink.path }">{{ subLink.name }}</router-link>

            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.link-container {
    position: relative;
    width: fit-content;
    display: flex;
    flex-shrink: 0;
}

.sub-nav {
    position: absolute;
    width: 100px;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 100%;
    row-gap: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: #0a0a0a;
    z-index: 1;
}

.div {
    border: 1px solid #E1E0DC;
    border-radius: 8px;
    padding: 5px;
    overflow: hidden;
}

.link {
    margin-right: 8px;
    text-decoration: none;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
}

@media (max-width: 1440px) {
    .link {
        font-size: 14px;
    }
}
</style>