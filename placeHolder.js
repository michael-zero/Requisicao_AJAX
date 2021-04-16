const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/users'

const $listaUsuarios = document.querySelector('#lista-usuarios')
let app = document.querySelector('#app');

let btnListar = document.querySelector('#btn-listar')




xhr.open('GET', url); 
xhr.send(null);

btnListar.addEventListener('click', () => {
        xhr.onreadystatechange = verificaAjax()
})

function verificaAjax(){
    
    if(xhr.readyState === 4){//req recebida e resposta pronta
         if(xhr.status === 200 || xhr.status === 304){ //Obteve a resposta ou ela está em cache
             let json = xhr.responseText;
             const resposta = JSON.parse(json); //recebe string e devolve objeto
            
            //  console.log(resposta[0])
            //  mostraUsuarios(resposta)
             mostrarCardUsu(resposta)      
         }else{
             alert('Deu ruim na resposta.')
         }
    }
 }


    function mostrarCardUsu(usuarios){
        usuarios.forEach(usuario => {
            let c = criarCartao(usuario)
            app.appendChild(c)
        })
    }
