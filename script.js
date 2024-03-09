let vopros = document.querySelector(".question_twenty_three_minus_seven")
let otvet = document.querySelectorAll(".sixteen")
var otvetyi = []
var massiv_pravednikh_otvetov = [993, 16, 52, 21, 6]

class Questions{
    constructor(wopros, var_good, var_2, var_3, var_4, var_5){
        this.wopros = wopros
        this.var_good = var_good
        this.massiv_otvetov = [var_good, var_2, var_3, var_4, var_5]
    }

    display(){
        vopros.innerHTML=this.wopros
        for(let i = 0; i<this.massiv_otvetov.length;i+=1){
            otvet[i].innerHTML=this.massiv_otvetov[i]
            console.log(otvet[i].innerHTML)
        }
    }
}

var tekhuschii = 0

var questions = [
    new Questions("1000-7", "33", "007", "72", "228", "993"),
    new Questions("23-7", "16", "1", "44", "25", "3"),
    new Questions("45+7", "60", "52", "50", "53", "33"),
    new Questions("100-79", "8", "78", "79", "21", "99"),
    new Questions("11-5", "9", "6", "2", "8", "3")
]

otvet.forEach((predmet) => {
    predmet.addEventListener("click", function() {
        if (tekhuschii < questions.length) {
            otvetyi.push(this.innerHTML)
            questions[tekhuschii].display()
            tekhuschii += 1
        }
        console.log(otvetyi)
    })
})
