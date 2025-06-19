<script setup lang="ts"></script>
<template>
    <div class="favorite-container">
        <div class="container-first"></div>
        <div class="container-second"></div>
    </div>
    
</template>


<style>

.favorite-container {
    display: flex;
    column-gap: 20px;
}

.container-first,
.container-second {
    width: 44px;
    height: 18px;
    background-repeat: no-repeat;
    background-position: center;
}

.container-first {
    background-image: url('/1.png');
}

.container-second {
    background-image: url('/2.png');
}

@media (max-width: 1440px) {
    .favorite-container {
        column-gap: 15px;
        order: 1;
    }
}

@media (max-width: 768px) {
    .favorite-container {
        column-gap: 13px;
        margin-right: 19px;
    }
}

@media (min-height: 320px) and (max-width: 768px) {
    .favorite-container {
        display: none;
    }
}

</style>