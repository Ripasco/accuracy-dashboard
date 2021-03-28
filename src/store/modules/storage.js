const state = {
    allStorageStats:[
        {
            title:'Всего товаров',
            stat:34567,
            info:'456 уникальных товаров'
        },
        {
            title:'На складе',
            stat:18991,
            info:'429 закончилось'
        },
        {
            title:'Выручка за 30 дней',
            stat:23653230,
            info:'98 653 230 Р стоимость остатков'
        },
        {
            title:'В пути к клиенту',
            stat:1245,
            info:'454 в пути от клиента'
        },
        {
            title:'Процент выкупа',
            stat:'44,8%',
            info:'28,4 оборачиваемость'
        },
    ],
    storages:[
        {
            data:[
                {
                    title:"Москва",
                },
                {
                    title:"12 345",
                },
                {
                    title:"512 345",
                },
                {
                    title:"345",
                },
                {
                    title:"52 230 Р",
                },
                {
                    title:"123 230 Р",
                },
                {
                    title:"43",
                },
                {
                    title:"2",
                },
                {
                    title:"23,7%",
                },
                {
                    title:"28,4"
                }
            ],
        },
        {
            data:[
                {
                    title:"Якущево",
                },
                {
                    title:"22 345",
                },
                {
                    title:"312 345",
                },
                {
                    title:"315",
                },
                {
                    title:"32 230 Р",
                },
                {
                    title:"143 230 Р",
                },
                {
                    title:"33",
                },
                {
                    title:"7",
                },
                {
                    title:"33,7%",
                },
                {
                    title:"18,4"
                }
            ],
        },
        {
            data:[
                {
                    title:"Саратов",
                },
                {
                    title:"22 345",
                },
                {
                    title:"212 345",
                },
                {
                    title:"245",
                },
                {
                    title:"62 230 Р",
                },
                {
                    title:"83 230 Р",
                },
                {
                    title:"31",
                },
                {
                    title:"5",
                },
                {
                    title:"33,7%",
                },
                {
                    title:"30,4"
                }
            ],
        },
        {
            data:[
                {
                    title:"Перьм",
                },
                {
                    title:"8 345",
                },
                {
                    title:"235 345",
                },
                {
                    title:"255",
                },
                {
                    title:"43 230 Р",
                },
                {
                    title:"63 230 Р",
                },
                {
                    title:"16",
                },
                {
                    title:"1",
                },
                {
                    title:"18,7%",
                },
                {
                    title:"18,4"
                }
            ],
        }
    ],
    storagesTitle:[
        {
            title:"Склад",
        },
        {
            title:"Уникальных товаров",
        },
        {
            title:"На склад",
        },
        {
            title:"Закончилось",
        },
        {
            title:"Стоимость остатка",
        },
        {
            title:"Выручка за 30 дней",
        },
        {
            title:"В пути к клиенту",
        },
        {
            title:"В пути от клиента",
        },
        {
            title:"Процент от выкупа",
        },
        {
            title:"Оборачиваемость"
        }
    ],
    filterTags:[
        {
            title:'Москва'
        },
        {
            title:'Пермь'
        },
        {
            title:'Саратов'
        }
    ],
}
const mutations = {

}
const actions = {

}
const getters = {

}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}