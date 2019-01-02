new Vue({
    el: "#app",
    data: {
        title: "Hello VUE!",
        name: "mehdi",
        classes: ["red", "wrong"],
        url: "https://www.udemy.com",
        wage: 11
    },
    methods: {
        greet(time) {
            return `wow this is very cool! lets keep going ${this.name}! now is ${time} better get some sleep.`;
        },
        changeWage(amount) {
            this.wage += amount;
        }
    }
})