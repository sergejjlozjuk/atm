// создать класс человек в котром будет уникальный id и свойство time  в котором будет указано сколько времени
// человек проводит возле банкомата
// создать массив в который каждые 3 секунды будет пушиться новый объект с человеком
// создать банкомат который будет содержать свойство о состоянии занят он либо нет и 
// метод с сеттаймаутом в котором будет браться время от каждого человека и по окончанию времени менять состояние на свободный
// метод который будет удалять человека из банкомата


let turn = [];
let atm = {
    state: true,
    human: null,
    timer: function () {
        setTimeout(()=> {
            atm.state = true;
            console.log(`человек с id:${this.human.id} успешно обслужен. За ${this.human.timer} секунд`);
            this.checkTurn();
            this.inAtm();
        }, this.human.timer*1000)
    },
    checkTurn: () => turn.length < 9 ? startTurn() : null,
    inAtm: function () {
        if(this.state === true) {
            this.human = turn[0];
            turn.splice(0,1);
            this.state = false;
            this.timer()
        }
    }
}
class Human {
    constructor() {
        this.id = this.humanId()
        this.timer = this.timer()
    }
    humanId = () => Math.floor(Math.random() * (100 - 1) + 1);
    timer = () => Math.floor(Math.random() * (6 - 2) + 2);
    // start = () => atm.state ? atm.inAtm() : null;
}

let addHumanInTurn = () => turn.push(new Human());
let startTurn = () => {
    let timer = setInterval(() => {
        turn.length >= 10 ? clearInterval(timer) : addHumanInTurn();
        atm.inAtm()
    }, 1000)
}
let root = document.querySelector('div');
let btn = document.createElement('button');
btn.className = 'start';
btn.innerHTML = 'start';
root.appendChild(btn);
btn.addEventListener('click', () => startTurn());

