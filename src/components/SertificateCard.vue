<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Sertificate } from '@/stores/servises';
import Button from './Button.vue';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox="gallery"]', {
});

const isOpen = ref(false)

const props = defineProps<{
    card: Sertificate
}>()

</script>
<template>
    <div class="card">
        <h4 class="card__title">{{ props.card.title }}</h4>
        <div class="button_cont">
            <Button :label="'Открыть сертификат'" class="button__sertificate" />
            <div class="button__arrow-up">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.2494 0.274922L6.5819 0.256066C6.49389 0.255705 6.40668 0.272774 6.32531 0.306286C6.24393 0.339799 6.16999 0.389092 6.10776 0.451323C6.04553 0.513554 5.99624 0.587491 5.96272 0.668868C5.92921 0.750245 5.91214 0.837454 5.9125 0.925461C5.91303 1.10158 5.98322 1.27034 6.10776 1.39488C6.2323 1.51942 6.40106 1.58962 6.57718 1.59014L9.94773 1.60428L0.335788 11.2162C0.210763 11.3412 0.140526 11.5108 0.140526 11.6876C0.140526 11.8644 0.210763 12.034 0.335788 12.159C0.460812 12.2841 0.630381 12.3543 0.807192 12.3543C0.984003 12.3543 1.15357 12.2841 1.2786 12.159L10.9188 2.51881L10.9141 5.92706C10.9137 6.01507 10.9308 6.10228 10.9643 6.18365C10.9978 6.26503 11.0471 6.33897 11.1094 6.4012C11.1716 6.46343 11.2455 6.51272 11.3269 6.54624C11.4083 6.57975 11.4955 6.59682 11.5835 6.59646C11.6715 6.59682 11.7587 6.57975 11.8401 6.54624C11.9215 6.51272 11.9954 6.46343 12.0576 6.4012C12.1199 6.33897 12.1692 6.26503 12.2027 6.18365C12.2362 6.10228 12.2533 6.01507 12.2529 5.92706L12.2482 2.27368C12.2479 1.74368 12.0372 1.23548 11.6624 0.860708C11.2876 0.48594 10.7794 0.275252 10.2494 0.274922Z"
                        fill="#0A0A0A" />
                </svg>
            </div>
            <div class="button__arrow-side">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.4133 7.1066L12.8333 4.49993C12.7714 4.43745 12.6976 4.38785 12.6164 4.35401C12.5351 4.32016 12.448 4.30273 12.36 4.30273C12.272 4.30273 12.1849 4.32016 12.1036 4.35401C12.0224 4.38785 11.9486 4.43745 11.8867 4.49993C11.7625 4.62484 11.6928 4.79381 11.6928 4.96993C11.6928 5.14606 11.7625 5.31502 11.8867 5.43993L14.26 7.83327H0.666667C0.489856 7.83327 0.320286 7.9035 0.195262 8.02853C0.0702379 8.15355 0 8.32312 0 8.49993H0C0 8.67674 0.0702379 8.84631 0.195262 8.97134C0.320286 9.09636 0.489856 9.1666 0.666667 9.1666H14.3L11.8867 11.5733C11.8242 11.6352 11.7746 11.709 11.7407 11.7902C11.7069 11.8715 11.6895 11.9586 11.6895 12.0466C11.6895 12.1346 11.7069 12.2217 11.7407 12.303C11.7746 12.3842 11.8242 12.458 11.8867 12.5199C11.9486 12.5824 12.0224 12.632 12.1036 12.6659C12.1849 12.6997 12.272 12.7171 12.36 12.7171C12.448 12.7171 12.5351 12.6997 12.6164 12.6659C12.6976 12.632 12.7714 12.5824 12.8333 12.5199L15.4133 9.93327C15.7879 9.55827 15.9982 9.04993 15.9982 8.51993C15.9982 7.98993 15.7879 7.4816 15.4133 7.1066Z"
                        fill="#0A0A0A" />
                </svg>
            </div>
        </div>

        <div class="sert">
            <img :src="props.card.photo" alt="">
        </div>
        <div class="sertificate__icon">
            <a class="sertificate-link" data-fancybox="gallery" href="/imgSerticate.png">
                <img src="/imgSerticate.png" alt="">
            </a>
        </div>
    </div>
</template>


<style scoped lang="less">
.card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 9px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        background-color: #CCB076;

        .button__arrow-side {
            display: block;
        }

        .button__arrow-up {
            display: none;
        }

        // .sert {
        //     display: block;
        // }
    }
}

.button__arrow-up {
    padding-top: 12px;
    padding-left: 7px;
}

.button__arrow-side {
    display: none;
}

.button_cont {
    display: flex;
    padding-left: 33px;
    align-items: center;
}

.sert {
    display: none;
    position: absolute;
    bottom: -8px;
    right: -3px;
}

.button__sertificate {
    width: 200px;
    height: 20px;

    &:hover+.sert {
        display: flex;
    }
}

.card__title {
    width: 335px;
    margin-bottom: 80px;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #0A0A0A;
}

.sertificate__icon {
    position: absolute;
    right: 41px;
    bottom: 32px;
    width: 40px;
    height: 64px;
    background-image: url('/Vector.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &:hover {
        right: 150px;
        bottom: 184px;

        .sertificate-link {
            display: block;
        }
    }
}

.sertificate-link {
    display: none;
}

@media (max-width: 1440px) {
    .card {
        padding-top: 2px;
    }

    .card__title {
        width: 274px;
        margin-bottom: 100px;
        font-size: 20px;
    }

    .button__sertificate {
        font-size: 16px;
    }

    .button_cont {
        padding-left: 22px;
    }

    .sertificate__icon {
        right: 36px;
        bottom: 19px;
        width: 32px;
        height: 59px;
    }
}

@media (min-width: 320px) and (max-width: 768px) {
    .card__title {
        margin-bottom: 15px;
        font-size: 16px;
    }

    .sertificate__icon[data-v-af43032c] {
        right: 22px;
        bottom: 177px;
        width: 21px;
        height: 55px;
    }
}
</style>