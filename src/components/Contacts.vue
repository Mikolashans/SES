<script lang="ts" setup></script>
<template>
    <address class="address">
        <p class="address__street">г. Москва, ул. Космонавтиков, д. 6</p>
        <p><a class="address__tel" href="tel:+74954340326">+7 (495) 434-03-26</a></p>
        
    </address>
</template>

<style scoped lang="less">
.address {
    display: flex;
    column-gap: 40px;
    margin-right: 40px;
}

.address__street {
    font-style: normal;
    font-weight: 400;
font-size: 18px;
line-height: 150%;
    color: #fff;
}

.address__tel {
font-weight: 500;
font-size: 18px;
font-style: normal;
line-height: 150%;
color: #fff;
}

@media (max-width: 1440px) {
    .address__street,
    .address__tel {
        font-size: 14px;
    }

    .address {
        margin-right: 25px;
        column-gap: 30px;
        p {
            margin: 0;
        }
    }
}


@media  (max-width: 1440px) {
        .address__street {
            display: none;
            column-gap: 30px;
        }
        .address__tel {
            display: block;
            width: 44px;
            height: 44px;
            font-size: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url('/buttonBurger.png');
        }

        .address {
            order: 2;
        }

    }
</style>