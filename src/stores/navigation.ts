import { defineStore } from "pinia";
import { ref } from "vue";


export interface Navigation {
    id: number,
    name: string,
    path: string,
    children: Navigation[]
}

export const useNavigastionStore = defineStore('navigation', () => {

    const navList = [
        {
            id: 1,
            name: 'Модельный ряд',
            path: 'soon',
            children: [
                {
                    id: 11,
                    name: 'Подмодельный ряд1',
                    path: 'soon'
                },
                {
                    id: 12,
                    name: 'Подмодельный ряд2',
                    path: 'soon'
                },
            ]
        },
        {
            id: 2,
            name: 'Покупка',
            path: 'soon',
            children: [
                {
                    id: 21,
                    name: 'Покупка сейчас',
                    path: 'soon'
                },
                {
                    id: 22,
                    name: 'Покупка потом',
                    path: 'soon'
                },
                {
                    id: 23,
                    name: 'Покупка никогда',
                    path: 'soon'
                },
            ]
        },
        {
            id: 3,
            name: 'Сервис',
            path: 'soon',
            children: [
                {
                    id: 31,
                    name: 'Записаться',
                    path: 'soon'
                },
                {
                    id: 32,
                    name: 'Живая очередь',
                    path: 'soon'
                },
                {
                    id: 33,
                    name: 'Просто спросить',
                    path: 'soon'
                },
            ]
        },
        {
            id: 4,
            name: 'О нас',
            path: 'soon',
            children: [
                {
                    id: 41,
                    name: 'Рост',
                    path: 'soon'
                },
                {
                    id: 42,
                    name: 'Вес',
                    path: 'soon'
                },
                {
                    id: 43,
                    name: 'Паспортные данные',
                    path: 'soon'
                },
            ]
        },
    ] as Navigation[] 

    let moreList = ref<Navigation[]>([])
    let visibleList = ref<Navigation[]>([])

    return {
        navList,
        moreList,
        visibleList,
    }
})