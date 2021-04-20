const xhr = new XMLHttpRequest() //cria instância do objeto.

const url = 'https://jsonplaceholder.typicode.com/users'

const $listaUsuarios = document.querySelector('#lista-usuarios')
let app = document.querySelector('#app');
let btnListar = document.querySelector('#btn-listar')

xhr.open('GET', url); //abrindo conexão com o verbo GET + endereço  
//Até aqui a requisição não foi feita 

// o send envia a requisição
xhr.send(null);

btnListar.addEventListener('click', () => {
        //  A esta propriedade passamos uma função, que será executada automaticamente
        //  toda vez que ocorrer uma mudança de estado na requisição
        xhr.onreadystatechange = verificaAjax()
})

// 0 = req. nao iniciada
// 1 = conexao com o server estabelecida
// 2 = req recebida
// 3 = processando a requisição
// 4 = req. concluída e resposta pronta

function verificaAjax(){ //Analisa os estados de um requisição AJAX
    
    //readState nos diz em que estado se encontra
    if(xhr.readyState === 4){//req recebida e resposta pronta , o que pode ser um ERRo
        //por isso verificamos quando se é 200, quando realmente tem o dado
         if(xhr.status === 200 || xhr.status === 304){ //Obteve a resposta ou ela está em cache
             let json = xhr.responseText;
             const resposta = JSON.parse(json); //recebe string e devolve objeto
             //analisa uma string JSON e constroi um valor ou objeto JavaScript descrito pela string.
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
