class Pro{
    constructor(Nombre,descripcion,foto) {
        this.Nombre=Nombre
        this.descripcion = descripcion;
        this.foto = foto;

    }
}
let P1= new Pro(
    'Maletas',
    'Diseño viajero Para ellas & ellos',
    './img/fondo4.jpg',
)
let P2 = new Pro(
    'Cunero',
    'Suave ,comodo,digno para mimir',
    './img/fondo8.jpg',
)
let P3 = new Pro(
    'Abc',
    'Juega con las letras y crea su nombre',
    './img/navidad2.jpg',)
let P4 = new Pro(
    'Cielo & Estrellas',
    'Tiempo de otro universo',
    './img/navidad1.jpeg',
)
let P5 = new Pro(
    'Osita',
    'Lo mas tierno en tiempos de encierro',
    './img/fondo11.jpg',
)
let P6 = new Pro(
    'Granjera',
    'senti el campo en tu casa',
    './img/granero1.jpg',
)

let List_Productos=[]
    List_Productos.push(P1,P2,P3,P4,P5,P6)

Creador(List_Productos)
function Creador(List_Productos) {
    let Body_principal = document.getElementById('t-body')
    let main_principal=document.createElement('main')
    let footer_pincipal=document.createElement('footer')
    let titulo_pagina = document.createElement('h1')
    titulo_pagina.classList.add('la_caza')
    titulo_pagina.textContent = 'la caza!'
    Body_principal.appendChild(titulo_pagina)
    Nav() //barra de navegacion 
    function Nav(){
        //UL Nav
        let NAV=document.createElement('ul')
        NAV.classList.add('nav')
        NAV.classList.add('justify-content-end')
        Body_principal.appendChild(NAV)
        let buscador_input = document.createElement('input')
        let btn_buscador=document.createElement('a')
            btn_buscador.classList.add('btn')
            btn_buscador.classList.add('btn-primary')
            btn_buscador.textContent='Buscar'
            btn_buscador.addEventListener("click", function () {
                List_Productos.filter(Nombre,descripcion)
        });
            buscador_input.appendChild(btn_buscador)
        NAV.appendChild(buscador_input)
    
        // primer li nav
        let Li_1=document.createElement('li')
            Li_1.classList.add('nav-item')
            NAV.appendChild(Li_1)

        
        
        let A_l1=document.createElement('a')
            A_l1.classList.add('nav-link')
            A_l1.classList.add('active')
            A_l1.href='index.html'
            A_l1.textContent='Home'
            Li_1.appendChild(A_l1)
        //segundo li nav
        let Li_2 = document.createElement('li')
            Li_2.classList.add('nav-item')
            NAV.appendChild(Li_2)
        let A_l2 = document.createElement('a')
            A_l2.classList.add('nav-link')
            A_l2.href = 'Productos.html'
            A_l2.textContent = 'Listado'
            Li_2.appendChild(A_l2)
        // tercer li nav
        let Li_3 = document.createElement('li')
            Li_3.classList.add('nav-item')
            NAV.appendChild(Li_3)
        let A_l3 = document.createElement('a')
            A_l3.classList.add('nav-link')
            A_l3.href = 'formulario.html'
            A_l3.textContent = 'Contacto'
            Li_3.appendChild(A_l3)
    }
    header() //header 
    function header() {
        //contenedor de carousel
        let Header_principal = document.createElement('div')
        Header_principal.classList.add('carousel')
        Header_principal.classList.add('slide')
        Header_principal.setAttribute('data-ride',"carousel")
        Header_principal.id ='carouselExampleSlidesOnly'
        Body_principal.appendChild(Header_principal)
        let div_header=document.createElement('div')
        div_header.classList.add('carousel-inner')
        Header_principal.appendChild(div_header)
        //div carousel
        let div_carousel_1=document.createElement('div')
        div_carousel_1.classList.add('carousel-item')
        div_carousel_1.classList.add('active')
        div_header.appendChild(div_carousel_1)
        //imagen principal
        let img_carusel_principal=document.createElement('img')
        img_carusel_principal.classList.add('d-block')
        img_carusel_principal.classList.add('w-100')
        img_carusel_principal.src = './img/panaderia.jpg'
        img_carusel_principal.alt='#'
        div_carousel_1.appendChild(img_carusel_principal)

        //segundo contenedor de imagen
        let div_carousel_2=document.createElement('div')
            div_carousel_2.classList.add('carousel-item')
            div_header.appendChild(div_carousel_2)
            //imagen
        let img_carusel_2=document.createElement('img')
        img_carusel_2.src = './img/navidad2.jpg'
            img_carusel_2.alt='#'
            img_carusel_2.classList.add('d-block')
            img_carusel_2.classList.add('w-100')
            div_carousel_2.appendChild(img_carusel_2)

        //tercer contenedor carousel de imagen
        let div_carousel_3 = document.createElement('div')
        div_carousel_3.classList.add('carousel-item')
        div_header.appendChild(div_carousel_3)
        //imagen 3
        let img_carusel_3 = document.createElement('img')
        img_carusel_3.src = './img/fondo8.jpg'
        img_carusel_3.alt = '#'
        img_carusel_3.classList.add('d-block')
        img_carusel_3.classList.add('w-100')
        div_carousel_3.appendChild(img_carusel_3)
    
    }
    List_Productos.forEach(x =>{
        card(x)       
    })
    card(List_Productos) // productos card
    function card(List_Productos){
        Body_principal.appendChild(main_principal)
        let card_contendor=document.createElement('div')
        card_contendor.classList.add('card')
        card_contendor.style = "width: 18rem;"
        let img_card_1=document.createElement('img')
        img_card_1.src =List_Productos.foto
        img_card_1.alt = "#"
        img_card_1.classList.add('card-img-top')
        card_contendor.appendChild(img_card_1)
        main_principal.appendChild(card_contendor)
        let card_contendor_2=document.createElement('div')
        card_contendor_2.classList.add('card-body')
        card_contendor.appendChild(card_contendor_2)
        let card_titulo_1=document.createElement('h5')
        card_titulo_1.classList.add('card-title')
        card_titulo_1.textContent = List_Productos.Nombre
        card_contendor_2.appendChild(card_titulo_1)
        let card_parrafo_1 = document.createElement('p')
        card_parrafo_1.classList.add('card-text')
        card_parrafo_1.textContent =List_Productos.descripcion
        card_contendor_2.appendChild(card_parrafo_1)
        let card_A_1=document.createElement('a')
        card_A_1.href='#'
        card_A_1.classList.add('btn')
        card_A_1.classList.add('btn-primary')
        card_A_1.textContent ='Go somewhere'
        card_contendor_2.appendChild(card_A_1)
        //card_A_1.addEventListenrr('click',)
        card_A_1.addEventListener("click", function () {
            console.log(sessionStorage.setItem(List_Productos.Nombre ,List_Productos.descripcion))
            console.log('Nombre: '+List_Productos.Nombre+ '  descripcion: '+ List_Productos.descripcion)
         });
    
    }
    footer()
    function footer(){
        Body_principal.appendChild(footer_pincipal)
        footer_pincipal.classList.add('page-footer')
        footer_pincipal.classList.add('font-small')
        footer_pincipal.classList.add('blue')
        let div_footer = document.createElement('div')
        div_footer.classList.add('footer-copyright')
        div_footer.classList.add('text-center')
        div_footer.classList.add('py-3')
        div_footer.textContent = '#AprendéDesdeCasa!'
        footer_pincipal.appendChild(div_footer)
        let a_div_footer = document.createElement('a')
        a_div_footer.href = "https://nucba.com.ar/"
        a_div_footer.textContent = ' NUCBA'
        div_footer.appendChild(a_div_footer)
    }
}
