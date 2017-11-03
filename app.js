new Vue({
el: '#app',
data: {
    title: "Hola JSConf Colombia",
    link: "https://jsconf.co",
    color: "#aba",
    finalLink: "<a href='https://www.google.com'>Hola JSConf</a>"
},
methods: {
    sayHola: function(event){
        this.title = event.target.value;;
    }
}
})