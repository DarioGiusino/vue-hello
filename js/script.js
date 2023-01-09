// // console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'La mia prima app di Vue',
    data(){
        return {
            message: 'Hello VueJS',
            image: {
                source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTDq43xsge81SwhLSgYZz9GhEX7auaWnpicrT7nxWfQ&s',
                title: 'random image'
            }
        }
    },
})

app.mount('#app');



//? Toggle dark mode

const htmlElement = document.querySelector('html');
const button = document.getElementById('button');

let isLight = true;

button.addEventListener('click', () => {
    isLight = !isLight;

    if(!isLight){
        htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }

});