// // console.log('vue ok', Vue);

const app = Vue.createApp({
    data(){
        return {
            message: 'Hello VueJS',
            image: ''
        }
    },
})

app.mount('#app');