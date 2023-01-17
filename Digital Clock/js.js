let hoursEl = document.getElementById('hours')
let minutesEl = document.getElementById('minutes')
let secondsEl = document.getElementById('seconds')
let ampmEl = document.getElementById('ampm')



function updateClock(){
hoursEl = new Date().getHours()
minutesEl = ['0', new Date().getMinutes()]
secondsEl = ['0', new Date().getSeconds()]
ampmEl = 'am'

if (hoursEl > 12){
    ampmEl = "pm"
    hoursEl -=12
}
if (new Date().getSeconds() > 9){
    secondsEl = [new Date().getSeconds()]
}
if (new Date().getHours() > 9){
    hoursEl = [new Date().getHours()]
}
if (new Date().getMinutes() > 9){
    minutesEl = [new Date().getMinutes()]
}
    document.getElementById('hours').innerHTML = hoursEl 
    document.getElementById('minutes').innerHTML = minutesEl.join('')
    document.getElementById('seconds').innerHTML = secondsEl.join('')
    document.getElementById('ampm').innerHTML = ampmEl

    setTimeout(() =>{
        updateClock()

    }, 1000)

}

updateClock()
