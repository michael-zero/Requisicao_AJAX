let xhr = new XMLHttpRequest(); //Instância do objeto

// Abrir comunicação (método, caminho)
xhr.open("GET","alunos.json");
xhr.send(null); //enviando a solicitação , somente recuperando dados, por isso o null ..

xhr.onreadystatechange = verificaAjax; //tratar a resposta

function verificaAjax(){
   if(xhr.readyState === 4){
        if(xhr.status === 200 || xhr.status === 304){ //Obteve a resposta ou ela está em cache
            console.log(xhr.responseText)
            let json = xhr.responseText;
            const dados = JSON.parse(json); //recebe string e devolve objeto

            console.log(dados)
            
        }else{
            alert('Deu ruim na resposta.')
        }
   }
}

// Estado de Prontidão 0: Quando cria-se o objeto de solicitação ele está no estado 0. 

// Estado de Prontidão 1: Aqui diz-se que está no estado 1 quando a solicitação sabe como e com o que se conectar.

// Estado de Prontidão 2: Nesse estado a solicitação está em progresso, portanto o servidor já recebeu a solicitação no script e esse programa responde essa solicitação.

// Estado de Prontidão 3: No estado 3 os dados estão sendo baixados no objeto de solicitação, mas ainda não estão prontos para serem usados no código. 

// Estado de Prontidão 4: No estado 4 a resposta do servidor está concluída. Agora tem-se todos os dados da resposta disponíveis na propriedade responseText do objeto de solicitação. Nesse instante a propriedade onreadystatechange é executada e já pode usar os dados do servidor.


