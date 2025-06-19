<script setup lang="ts">

</script>
<template>
    <div class="logo-container">
        <div class="logo-container__logo">
            <div class="">
                <p class="logo-container__name">Scamacca</p>
                <!-- <img src="/Scamacca.png" alt=""> -->
            </div>
            <div class="logo-container__img">
                <img src="../assets/logo.svg" alt="">
            </div>
        </div>
        <p class="logo-container__descr">Официальный дилер Scamacca в&nbsp;Москве</p>
    </div>
</template>



<style scoped lang="less">
.logo-container__logo,
.logo-container {
    display: flex;
}

.logo-container__logo {
    column-gap: 12px;
}

.logo-container {
    width: 370px;
    margin-right: 65px;
    align-items: center;
    column-gap: 35px;
}

.logo-container__descr {
    font-size: 16px;
    line-height: 150%;
    color: #FFFFFF99;
    letter-spacing: 0.02em;
    word-spacing: 0.2em;
}

.logo-container__img {
    padding-top: 4px;
    align-content: center;
}

.logo-container__name {
    padding-left: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
}

@media (max-width: 1440px) {
    .logo-container__descr {
        margin: 0;
        font-size: 12px;
        letter-spacing: 0;
        word-spacing: 0;
    }

    .logo-container__name {
        font-size: 12.55px;
        padding-left: 8px;
    }

    .logo-container__img {
        padding-top: 6px;

        img {
            width: 20px;
        }
    }

    .logo-container__logo {
        column-gap: 11px;
    }

    .logo-container {
        // align-items: baseline;
        width: 256px;
        column-gap: 18px;
        margin-right: 52px;
    }
}

@media (max-width: 768px) {
    .logo-container__name {
        font-size: 16px;
    }

    .logo-container {
        width: 320px;
        margin-right: 144px;
        column-gap: 23px;
    }

    .logo-container__img {
        img {
            width: 25px;
        }
    }

    .logo-container__logo {
        column-gap: 14px;
    }
}

@media (min-width: 320px) and (max-width: 768px) {
    .logo-container__descr {
        display: none;
    }
}
</style>