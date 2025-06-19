<script setup lang="ts">
import { type Servise } from '@/stores/servises';

const props = defineProps<{
    card: Servise
}>()

</script><template>
    <div class="card">
        <div class="card__img">
            <img class="card__img-img" :src="props.card.img" alt="">
        </div>

        <h4 class="card__title">{{ props.card.title }}</h4>
        <p class="card__descr">{{ props.card.description }}</p>
        <p class="card__price">от {{ props.card.price.toLocaleString('ru-Ru') }} &#x20bd;</p>
        <div class="card__arrow-up">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_12311_89)">
                    <path
                        d="M22.9678 3.32795L16.0911 3.29259C15.9261 3.29192 15.7626 3.32392 15.61 3.38676C15.4575 3.44959 15.3188 3.54202 15.2021 3.6587C15.0855 3.77538 14.993 3.91401 14.9302 4.0666C14.8674 4.21918 14.8354 4.38269 14.836 4.54771C14.837 4.87794 14.9686 5.19436 15.2021 5.42787C15.4357 5.66138 15.7521 5.793 16.0823 5.79398L22.4021 5.8205L4.37969 23.8429C4.14527 24.0773 4.01358 24.3952 4.01358 24.7268C4.01358 25.0583 4.14527 25.3762 4.37969 25.6107C4.61411 25.8451 4.93206 25.9768 5.26358 25.9768C5.5951 25.9768 5.91304 25.8451 6.14746 25.6107L24.2229 7.53523L24.214 13.9257C24.2134 14.0907 24.2454 14.2542 24.3082 14.4068C24.371 14.5594 24.4635 14.698 24.5801 14.8147C24.6968 14.9314 24.8355 15.0238 24.988 15.0867C25.1406 15.1495 25.3041 15.1815 25.4692 15.1808C25.6342 15.1815 25.7977 15.1495 25.9503 15.0867C26.1028 15.0238 26.2415 14.9314 26.3582 14.8147C26.4748 14.698 26.5673 14.5594 26.6301 14.4068C26.6929 14.2542 26.7249 14.0907 26.7243 13.9257L26.7154 7.07561C26.7148 6.08186 26.3198 5.12899 25.6171 4.4263C24.9144 3.72361 23.9615 3.32857 22.9678 3.32795Z"
                        fill="#0A0A0A" />
                </g>
                <defs>
                    <clipPath id="clip0_12311_89">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="card__arrow-side">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.12 9.9099L19.25 5.9999C19.157 5.90617 19.0464 5.83178 18.9246 5.78101C18.8027 5.73024 18.672 5.7041 18.54 5.7041C18.408 5.7041 18.2773 5.73024 18.1554 5.78101C18.0336 5.83178 17.923 5.90617 17.83 5.9999C17.6437 6.18726 17.5392 6.44071 17.5392 6.7049C17.5392 6.96909 17.6437 7.22254 17.83 7.4099L21.39 10.9999H1C0.734784 10.9999 0.48043 11.1053 0.292893 11.2928C0.105357 11.4803 0 11.7347 0 11.9999H0C0 12.2651 0.105357 12.5195 0.292893 12.707C0.48043 12.8945 0.734784 12.9999 1 12.9999H21.45L17.83 16.6099C17.7363 16.7029 17.6619 16.8135 17.6111 16.9353C17.5603 17.0572 17.5342 17.1879 17.5342 17.3199C17.5342 17.4519 17.5603 17.5826 17.6111 17.7045C17.6619 17.8263 17.7363 17.9369 17.83 18.0299C17.923 18.1236 18.0336 18.198 18.1554 18.2488C18.2773 18.2996 18.408 18.3257 18.54 18.3257C18.672 18.3257 18.8027 18.2996 18.9246 18.2488C19.0464 18.198 19.157 18.1236 19.25 18.0299L23.12 14.1499C23.6818 13.5874 23.9974 12.8249 23.9974 12.0299C23.9974 11.2349 23.6818 10.4724 23.12 9.9099Z"
                    fill="#0A0A0A" />
            </svg>
        </div>

    </div>


</template>


<style scoped lang="less">
* {
    box-sizing: border-box;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    &:hover {
        .card__arrow-up {
            display: none;
        }

        .card__arrow-side {
            display: block;
        }
    }
}

.card__arrow-up {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 91.6%;
    top: 14px;
}

.card__arrow-side {
    width: 30px;
    height: 30px;
    position: absolute;
    left: 91.6%;
    top: 14px;
    display: none;
}

.card__img {
    padding-top: 15px;
    padding-left: 15px;
    display: flex;
    margin-bottom: 30px;
}

.card__img-img {
    border-radius: 16px;

}

.card__title {
    margin: 0;
    padding-left: 13px;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0A0A0A;
    text-align: left;
}

.card__descr {
    margin: 0;
    padding-left: 13px;
    margin-bottom: 21px;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #0A0A0A99;
    text-align: left;
}

.card__price {
    margin: 0;
    padding-left: 13px;
    margin-bottom: 13px;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #0A0A0A;
    text-align: left;
}

@media (max-width: 1440px) {
    .card__img-img {
        width: 55%;
    }

    .card__title {
        margin-bottom: 15px;
        font-size: 24px;
    }

    .card__descr {
        margin-bottom: 12px;
        font-size: 16px;
    }

    .card__price {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .card__img {
        margin-bottom: 22px;
        padding-top: 4px;
        padding-left: 4px;
    }

    .card__img-img {
        width: 67.5%;
    }

    .card__title {
        padding-left: 4px;
        font-size: 22px;
    }

    .card__descr {
        padding-left: 4px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden
    }

    .card__price {
        padding-left: 4px;
        margin-bottom: 4px;
        font-size: 18px;
    }

    .card__arrow-up,
    .card__arrow-side {
        width: 20px;
        height: 20px;
        top: 4px;
        left: 90.6%;

        & svg {
            width: 20px;
            height: 20px;
        }
    }

}

@media (min-width: 320px) and (max-width: 768px) {
    .card__title {
        margin-bottom: 8px;
        padding-left: 0;
        font-size: 18px;
    }

    .card__img-img {
        width: 77.5%;
    }

    .card__descr {
        padding-left: 0;
        line-height: 135%;
    }

    .card__price {
        padding-left: 0;
    }

    .card__arrow-up,
    .card__arrow-side {
        top: -1px;
        left: 91.6%;
    }
}
</style>