<script setup lang="ts">
import {onMounted, ref} from 'vue'
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import Slider2 from '@/components/Slider2.vue';
import Form from '@/components/Form.vue';
import ServisCard from '@/components/ServisCard.vue';
import { useServisesStore } from '@/stores/servises'
import TrippleSlider from '@/components/TrippleSlider.vue';
import SertificateCard from '@/components/SertificateCard.vue';

const isVisible = ref(true);
let lastScroll = 0;

const scroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScroll && currentScrollY > 50) {
    // Скроллим вниз — скрываем
    isVisible.value = false;
  } else {
    // Скроллим вверх — показываем
    isVisible.value = true;
  }

  lastScroll = currentScrollY;
}
onMounted(() => {
    window.addEventListener('scroll', scroll);
  })


  const servises = useServisesStore()

</script>

<template>
    <Header v-show="isVisible"/>
    <section class="main-banner">
        <Slider/> 
        <!-- <div><Slider2/></div>  -->
        
        <div class="main-banner__info">
            <div class="main-banner__info-first">
                <h1 class="main-banner__title">Любимый семейный кроссовер уже в продаже!</h1>
                <p class="main-banner_descr">Первый взнос составит 12% от стоимости дома, без изменения за использование кредита.</p>
                <div class="btn-group">
                    <Button
                    :label="'Подробнее'"
                    class="button__details btn"
                />
                <Button
                :label="'Тест-драйв'"
                class="button__test btn"
                />
                </div>
                
            </div>
            <Form/>
        </div>
    </section>
    <section class="section">
        <div class="servises">
            <div class="servises__header">
                <h2 class="section__title">Предоставляемые услуги</h2>
                <Button
                :label="'Все услуги'"
                class="button__all btn"/>
            </div>
                <TrippleSlider
                    className="btn-group"
                    :component="ServisCard"
                    :list="servises.servisesList"
                />
        </div>
    </section> 
    <section class="section">
        <div class="sertificates">
            <div class="sertificates__header">
                <h2 class="section__title">Сертификаты</h2>
                <Button
                :label="'Все сертификаты'"
                class="button__all-sert btn"/>
            </div>
                <TrippleSlider
                className="btn-group__sert"
            class="btn-group__sert"
            :component="SertificateCard" 
            :list="servises.sertificates"/>
        </div>
    </section> 
</template>

<style lang="less" scoped>
    // .main-banner__title,
    // .section__title {
    //     font-family: "LTSuperior";
    // }
    * {
        box-sizing: border-box;
    }

    .section {
        position: relative;
    }
   .main-banner {
    position: relative;
   }

   .main-banner__info {
    position: absolute;
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
    left: 100px;
    top: 150px;
    width: 89.6%;
    background-color: transparent;
   }

   .main-banner__title {
    width: 835px;
    margin-bottom: 30px;
    margin-top: 0;
    font-size: 60px;
    line-height: 115%;
    font-weight: 600;
    color: #fff;
   }

   .main-banner_descr {
    width: 485px;
    margin-bottom: 45px;
    font-size: 20px;
    line-height: 150%;
    font-weight: 400;
    color: #fff;
   }

   .btn-group {
    display: flex;
    column-gap: 10px;
   }

   .servises__cards {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
   }

   .servises,
   .sertificates {
    // position: relative;
    padding: 80px 100px 0 100px;
   }


   .servises__header,
   .sertificates__header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
   }

   .section__title {
        font-family: LTSuperior;
        font-weight: 600;
        font-size: 48px;
        line-height: 130%;
        color: #0A0A0A;
   }

   @media(max-width: 1440px) {
    .main-banner__title {
        width: 710px;
        font-size: 50px;
    }
    .main-banner_descr {
        width: 395px;
        font-size: 16px;
    }
    .main-banner__info {
        width: 88.9%;
        left: 80px;
        top: 116px;
    }

    .section__title {
        font-size: 34px;
    }

    .servises,
    .sertificates {
        padding: 62px 79px 0 80px;
    }

    .sertificates__header {
        padding-top: 13px;
    }
    
   }

   @media(max-width: 768px) {
    .main-banner__title {
        width: 355px;
        margin-bottom: 21px;
        font-size: 36px;
    }
    .main-banner__info  {
        flex-direction: column;
        top: 9px;
        left: 41px;
    }

    .main-banner_descr {
        margin-bottom: 34px;
    }
    .btn-group {
        column-gap: 7px;
    }
    .main-banner {
        padding-bottom: 286px;
    }
    .main-banner__info-first {
        margin-bottom: 164px;
    }
    .section__title {
        font-size: 28px;
    }
    .servises,
    .sertificates {
        padding: 58px 40px 0 40px;
    }
   }

   @media (min-width: 320px) and (max-width: 768px) {
        .main-banner__title {
            width: 290px;
            margin-bottom: 0;
            font-size: 26px;
        }
        .main-banner__info {
            left: 16px;
            padding-top: 22px;
        }
        .main-banner_descr {
            width: 290px;
            font-size: 14px;
        }
        .btn-group {
            flex-direction: column;
        }
        .main-banner__info-first {
            margin-bottom: 131px;
        }
        .section__title {
        font-size: 20px;
        }
        .servises,
        .sertificates {
        padding: 129px 35px 0 16px;
    }
   }

</style>