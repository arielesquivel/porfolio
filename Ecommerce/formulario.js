inicio()
function inicio(){
    let Body_principal = document.getElementById('t-body')
    let Section_principal=document.createElement('section')
    let footer_pincipal = document.createElement('footer')
    let titulo_pagina = document.createElement('h1')
    titulo_pagina.classList.add('la_caza')
    titulo_pagina.textContent = 'la caza!'
    Body_principal.appendChild(titulo_pagina)
Nav()
function Nav(){
    //UL Nav
    let NAV = document.createElement('ul')
    NAV.classList.add('nav')
    NAV.classList.add('justify-content-end')
    Body_principal.appendChild(NAV)
    // primer li nav
    let Li_1 = document.createElement('li')
    Li_1.classList.add('nav-item')
    NAV.appendChild(Li_1)

    let A_l1 = document.createElement('a')
    A_l1.classList.add('nav-link')
    A_l1.classList.add('active')
    A_l1.href = 'index.html'
    A_l1.textContent = 'Home'
    Li_1.appendChild(A_l1)
    //segundo li nav
    let Li_2 = document.createElement('li')
    Li_2.classList.add('nav-item')
    NAV.appendChild(Li_2)
    let A_l2 = document.createElement('a')
    A_l2.classList.add('nav-link')
    A_l2.href = 'Productos.html'//html
    A_l2.textContent = 'Listado'
    Li_2.appendChild(A_l2)
    // tercer li nav
    let Li_3 = document.createElement('li')
    Li_3.classList.add('nav-item')
    NAV.appendChild(Li_3)
    let A_l3 = document.createElement('a')
    A_l3.classList.add('nav-link')
    A_l3.href = 'formulario.html'// html
    A_l3.textContent = 'Contacto'
    Li_3.appendChild(A_l3)
}//listo
singIn()
function singIn(){
    Body_principal.appendChild(Section_principal)
    let img_sec=document.createElement('img')
    //imagen logo
    img_sec.src ='./img/logo_sing_in.png'
    img_sec.alt ='alt="logo'
    Section_principal.appendChild(img_sec)
    //parrafo inicio
    let div_1=document.createElement('div')
        let p_1=document.createElement('p')
            p_1.textContent ='Iniciar Sesion'
            p_1.classList.add('Parrafo')
            div_1.appendChild(p_1)
    Section_principal.appendChild(div_1)
    let form_principal=document.createElement('form')
        form_principal.action='get'
        let div_form=document.createElement('div')
            form_principal.appendChild(div_form)
            div_form.classList.add("input-input")

        let input_1=document.createElement('input')
            input_1.type='text' 
            input_1.placeholder="Email"
            input_1.textContent=input_1
            div_form.appendChild(input_1)
        let input_2 = document.createElement('input')
            input_2.type = "password"
            input_2.placeholder = "Password"
            input_2.innerText
            div_form.appendChild(input_2)
        Section_principal.appendChild(form_principal)
        //boton de envio
        let Btn_div=document.createElement('div')
            Btn_div.classList.add('boton')
        let btn_btn=document.createElement('button')
            btn_btn.textContent = 'Iniciar'
            btn_btn.addEventListener("click", function () {

        console.log(sessionStorage.setItem(input_1, input_2))
    });

            Btn_div.appendChild(btn_btn)
            Section_principal.appendChild(Btn_div)
        let div_olvide=document.createElement('div')
            div_olvide.classList.add('olvide')
        let a_olvide=document.createElement('a')
            a_olvide.textContent = 'Olvide mi password'
            a_olvide.href='formulario.html'
            div_olvide.appendChild(a_olvide)
            Section_principal.appendChild(div_olvide)
}
    footer()
    function footer() {
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