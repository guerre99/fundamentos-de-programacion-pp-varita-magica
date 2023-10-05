// ej 1

const html = document.querySelector('html')

html.addEventListener('click',function(event){
    event.preventDefault()
})

// ej 2

    // ej 2.1

const cuerpo = document.querySelector('body')

cuerpo.addEventListener('click',function(event){
    if(event.target.tagName === 'IMG'){
        event.target.src = './assets/magic-1.gif'
    }
})

    // ej 2.2

cuerpo.addEventListener('click',function(event){
    if(event.target.tagName === 'P'){
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white'
    }
})

    // ej 2.3

cuerpo.addEventListener('click',function(event){
    if(event.target.tagName === 'ARTICLE'|| event.target.tagName === 'SECTION'){
        event.target.style.backgroundColor = 'blue' 
    }
})

// ej 3

    // ej 3.1

const imagen = document.querySelectorAll('img')


imagen.forEach(
    function(imagen){
        let url = imagen.src;
        imagen.addEventListener('mouseover',function(event){
            event.target.src = './assets/abracadabra.gif'
        }),
        imagen.addEventListener('mouseout',function(event){
            event.target.src = url
        })
    }
)

    // ej 3.2

const texto = document.querySelectorAll('p')

texto.forEach(
    function(texto){
        let fondo = texto.style.backgroundColor;
        let colortxt = texto.style.color;
        texto.addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = 'pink'
            event.target.style.color = 'red'
        }),
        texto.addEventListener('mouseout',function(event){
            event.target.style.backgroundColor = fondo
            event.target.style.color = colortxt
        })
    }
)

    // ej 3.3

const seccion = document.querySelectorAll('article,section')

seccion.forEach(
    function(seccion){
        let fondo = seccion.style.backgroundColor;
        seccion.addEventListener('mouseover',function(event){
            event.target.style.backgroundColor = 'orange'
        }),
        seccion.addEventListener('mouseout',function(event){
            event.target.style.backgroundColor = fondo
        })
    }
)
