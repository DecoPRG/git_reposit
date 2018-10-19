
window.onload = function() {

    const inptA     = document.getElementById('inptA')
    const inptB     = document.getElementById("inptB")
    const inptC     = document.getElementById("inptC")
    const sinaleq   = document.getElementById('sinaleq')


    inptC.disabled = true


    let mover = (posicaoA = -140, posicaoB = 580) => {
       
        if(posicaoA <= 210 && posicaoB >= 210) {

            setTimeout( () => {

                posicaoA += 10
                posicaoB -= 10

                inptA.style.top = posicaoA + 'px'
                inptB.style.top = posicaoB + 'px'

                mover(posicaoA, posicaoB)

            }, 25)    
        }
    }
    
    mover()

    
    let esmaecer = (intensidade = 0) => {

        if(intensidade <= 1) {

            setTimeout( () =>{

                intensidade += 0.05

                inptC.style.opacity      = intensidade
                setaeq.style.opacity     = intensidade
                setareload.style.opacity = intensidade

                esmaecer(intensidade)

            }, 100)
        }
    }
    
    esmaecer()



    sinaleq.addEventListener('click', () => {

        if(isNaN(inptA.value) || isNaN(inptB.value)) {

            alert('Esta operação trabalha apenas com NÚMEROS !')
            
            inptA.value = ""
            inptB.value = ""

            mover()
            esmaecer()

        } else {

            inptC.value = (Number(inptA.value) + Number(inptB.value))

            inptA.disabled = true
            inptB.disabled = true
            inptC.disabled = false

            if(inptC.value.indexOf('.') > 0) {

                inptC.value = (Number(inptA.value) + Number(inptB.value)).toFixed(2)  

                inptA.disabled = true
                inptB.disabled = true
                inptC.disabled = false
                
            }
        }        

    })

    
    inptC.addEventListener('focusin', () => {

        inptA.value = ""
        inptB.value = ""
        inptC.value = ""
        inptA.disabled = false
        inptB.disabled = false
        inptC.disabled = true
        mover()
        esmaecer()
        
    })
    
}
 






