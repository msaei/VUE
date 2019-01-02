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
        },
        showName: true,
        items: ["coding", "cooking", "cycling"],
        friends: [
            { name: "will", age: "33" },
            { name: "memo", age: "44" },
            { name: "jen", age: "30" },
        ]
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
        },
        updateName(e) {
            //console.log(e.target.value)
            this.name = e.target.value
        },
        logClick() {
            console.log("got clicked!")
        },
        toggleShowname() {
            this.showName = !this.showName
        }
    }
})