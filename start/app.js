new Vue({
    el: "#app",
    data: {
        title: "Hello VUE!",
        name: "mehdi",
        classes: ["red", "wrong"],
        url: "https://www.udemy.com",
        wage: 11,
        cords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        greet(time) {
            return `wow this is very cool! lets keep going ${this.name}! now is ${time} better get some sleep.`;
        },
        changeWage(amount) {
            this.wage += amount;
        },
        logevent(e) {
            console.log(e)
        },
        changeCords(e) {
            this.cords.x = e.offsetX
            this.cords.y = e.offsetY
        }
    }
})