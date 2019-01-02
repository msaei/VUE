new Vue({
    el: "#app",
    data: {
        title: "Hello VUE!",
        name: "mehdi"
    },
    methods: {
        greet(time) {
            return `wow this is very cool! lets keep going ${this.name}! now is ${time} better get some sleep.`
        }
    }
})