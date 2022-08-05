/*In the name of kindly generous ALLAH*/
/*Thanks ALLAH*/
const martyrdomDays = {
    4:"Martyr Shaikh Fazl-o-ALLAH (شیخ فضل اللّٰه)",
    8:"Atomic-bomb of u.s. to Hiroshima",
    9:"Tasooa (تاسوعا)",
    10:"Ashoora (عاشورا)"
}
const dayNumbers = document.querySelectorAll('.nowday .navigation .no')
const dayDescription = document.querySelector('.nowday .description')

dayNumbers.forEach((el,index)=>
    el.addEventListener('click',()=>chooseDay(index+1))
)
for(let i=0; i<dayNumbers.length; i++){
    dayNumbers[i].classList.remove('blood')
    if(i+1 in martyrdomDays){
        dayNumbers[i].style.setProperty('--no-color','red')
        dayNumbers[i].classList.add('blood')
    }
}

nowDay(new Date().getDay()+2)

function chooseDay(dayth){
    dayNumbers.forEach(el=>{
        el.style.backgroundColor='var(--no-color-bg)'
        el.style.color='var(--no-color)'
        el.classList.remove('no-choosed')    
    })
    const desc = martyrdomDays[dayth]
    if(desc === undefined){
        dayDescription.querySelector('.content').innerText = 'No event found!'
        dayDescription.style.setProperty('--no-color','yellow')
        dayDescription.classList.remove('blood-step')
    }else{
        dayDescription.querySelector('.content').innerText = desc 
        dayDescription.style.setProperty('--no-color','red')
        dayDescription.classList.add('blood-step')
    }
    dayNumbers[dayth-1].style.backgroundColor='var(--no-color)'
    dayNumbers[dayth-1].style.color='var(--no-color-bg)'
    dayNumbers[dayth-1].classList.add('no-choosed')

}

function nowDay(dayth){
    dayNumbers.forEach(el=>el.style.padding='0')
    for(let now of document.querySelectorAll('.nowday .now'))
        now.remove()
    let now = document.createElement('div')
    now.classList.add('now')
    now.innerText = "Now"
    dayNumbers[dayth-1].appendChild(now)
    dayNumbers[dayth-1].style.padding='20px'
    chooseDay(dayth)
}