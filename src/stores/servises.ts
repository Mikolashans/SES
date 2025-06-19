import { defineStore } from "pinia";
import {ref} from 'vue'

export interface Servise {
    id: number;
    title: string;
    description: string;
    price: number;
    img: string;
}

export interface Sertificate {
    id: number;
    title: string;
    photo: string;
}

export const useServisesStore = defineStore('servises', () => {
    const servisesList = [
        {
            id: 1,
            title: 'Лизинг',
            description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
            price: 100000,
            img: '/servise1.png'
        },
        {
            id: 2,
            title: 'Лизинг2',
            description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
            price: 100000,
            img: '/servise2.png'
        },
        {
            id: 3,
            title: 'Лизинг3',
            description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
            price: 100000,
            img: '/servise2.png'
        },
        {
            id: 4,
            title: 'Лизинг4',
            description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
            price: 100000,
            img: '/servise2.png'
        },
        {
            id: 5,
            title: 'Лизинг5',
            description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
            price: 100000,
            img: '/servise2.png'
        }
    ]


    const sertificates = [
        {
            id: 1,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        },
        {
            id: 2,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        },
        {
            id: 3,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        },
        {
            id: 4,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        },
        {
            id: 5,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        },
        {
            id: 6,
            title: 'Каталог оборудования ECORESULT и ECOWAY',
            photo: '/public/imgSerticate.png'
        }
    ]

    return {
        servisesList,
        sertificates
    }
})