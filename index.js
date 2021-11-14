const textbox = document.getElementById("input")
const check_button = document.getElementById("check")
const generate_button = document.getElementById("generate")
const select = document.getElementById('select')
const copy = document.getElementById('copy')

const specials = ["#", "@", "!", "$", "%", "^","&", "*", "(", ")", "*", "+", ",", "/", "-", ":", ";","=", "?", "|", "[", "]", "{", "}"]

const smalls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]

const caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

copy.style.visibility = "hidden"

copy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(textbox.value)
    textbox.value = ""
    copy.style.visibility = "hidden"
})

textbox.addEventListener('input', (event)=> {
    if(textbox.value != ""){
        copy.style.visibility = 'visible'
    }
    else{
        copy.style.visibility = 'hidden'
    }
})

generate_button.addEventListener('click', ()=> {
    let result = ''
    const length = select.value
    let charArray = [caps, smalls, specials]
    let index = 0

    for(let i=0; i<length; i++){
        if(i == 0){
            index = Math.floor(Math.random() * 2)
        }
        else{
            index = Math.floor(Math.random() * 3)
        }
        let array = charArray[index]
        result += array[Math.floor(Math.random() * array.length)]
    }
    copy.style.visibility = 'visible'
    textbox.value = result
})

check_button.addEventListener('click', ()=> {
    let isRight = false
    let sm = false
    let ca = false
    let spe = false
    const length = select.value
    const password = textbox.value

    if(length <= password.length){
        for(let i=0; i<length; i++){

            if(smalls.indexOf(password[i])>=0){
                sm = true
            }

            if(caps.indexOf(password[i])>=0){
                ca = true
            }

            if(specials.indexOf(password[i])>=0){
                spe = true
            }
        }
        isRight = true
    }
    else{
        isRight = false
    }

    if(isRight && ca && spe && sm){
        alert('The password is strong')
    }
    else{
        alert('the password is weak')
    }
})
