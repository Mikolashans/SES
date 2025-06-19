<script setup lang="ts">
import { ref } from 'vue';
import { useNavigastionStore } from '@/stores/navigation';
import NavigationLink from './NavigationLink.vue';
const isMore = ref(false);
const navigation = useNavigastionStore();
function showMore(){
    isMore.value = !isMore.value
}
</script>

<template>
    <div class="more" @click="showMore">
        <button class="more__button">Еще</button>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.9141 0.289248C8.85987 0.234573 8.79536 0.191176 8.72427 0.161561C8.65319 0.131946 8.57694 0.116699 8.49993 0.116699C8.42293 0.116699 8.34668 0.131946 8.2756 0.161561C8.20451 0.191176 8.14 0.234573 8.08577 0.289248L5.4141 2.96091C5.35987 3.01558 5.29536 3.05898 5.22427 3.0886C5.15319 3.11821 5.07694 3.13346 4.99993 3.13346C4.92293 3.13346 4.84668 3.11821 4.7756 3.0886C4.70451 3.05898 4.64 3.01558 4.58577 2.96091L1.9141 0.289248C1.85987 0.234573 1.79535 0.191176 1.72427 0.161561C1.65319 0.131946 1.57694 0.116699 1.49993 0.116699C1.42293 0.116699 1.34668 0.131946 1.2756 0.161561C1.20451 0.191176 1.14 0.234573 1.08577 0.289248C0.97712 0.398542 0.916138 0.546389 0.916138 0.700497C0.916138 0.854605 0.97712 1.00245 1.08577 1.11175L3.76327 3.78924C4.09139 4.11696 4.53618 4.30103 4.99993 4.30103C5.46369 4.30103 5.90847 4.11696 6.2366 3.78924L8.9141 1.11175C9.02275 1.00245 9.08373 0.854605 9.08373 0.700497C9.08373 0.546389 9.02275 0.398542 8.9141 0.289248Z" fill="white" />
</svg>
        <div  class="more__items" v-if="isMore && navigation.moreList.length > 0">
            <NavigationLink v-for="item in navigation.moreList"
            :key="item.id" 
            :link="item"/>
            <!-- <div class="div-more" v-if="isMore && navigation.moreList.length != 0"> -->
        </div>
    </div>    
</template>

<style scoped>
.more {
    position: relative;
    display: flex;
    margin-right: 60px;
    align-items: center;
    
}

.more__button {
    font-size: 18px;
    line-height: 150%;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.more__items {
    position: absolute;
    left: 100%;
    top: 0;
    padding: 15px;
    background-color: #0a0a0a;
    border-radius: 8px;
}

@media (max-width: 1440px) {
    .more__button {
        font-size: 14px;
    }
    .more {
        margin-right: 30px;
    }
}

@media (max-width: 768px) {
    .more {
        display: none;
    }
}
</style>