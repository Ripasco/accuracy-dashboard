const state = {
    infoStats :[
        {
            title:'Users',
            count:"46 000",
            rate:"+32.14%",
            class: Number(32.14) > 0 ? 'text-success' : 'text-danger',
            icon:Number(32.14) > 0 ? 'sort-up-alt' : 'sort-down-alt',
        },
        {
            title:'Sessions',
            count:"98.3K",
            rate:"+18.77%",
            class: Number(18.77) > 0 ? 'text-success' : 'text-danger',
            icon:Number(18.77) > 0 ? 'sort-up-alt' : 'sort-down-alt',
        },
        {
            title:'Avg Session Duration',
            count:"3m 40sec",
            rate:"-5.14%",
            class: Number(-5.14) > 0 ? 'text-success' : 'text-danger',
            icon:Number(-5.14) > 0 ? 'sort-up-alt' : 'sort-down-alt',
        },
        {
            title:'Bounce Rate',
            count:"45.72%",
            rate:"-13.16%",
            class: Number(-13.16) > 0 ? 'text-success' : 'text-danger',
            icon:Number(-13.16) > 0 ? 'sort-up-alt' : 'sort-down-alt',
        },
    ]
}
const mutations = {

}
const actions = {

}
const getters = {

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}