let listaAmigos = [];
let paresDeAmigosSecretos = [];

function adicionarAmigo () {
    let nomeAmigoEntrada = document.getElementById ('nome-amigo');
    let listaAmigosElementos = document.getElementById('lista-amigos');

    let nomeAmigo = nomeAmigoEntrada.value.trim();

    if (nomeAmigo === '') {
    alert ("Por favor, insira um nome!");
    return;
    } 

    if (listaAmigos.includes (nomeAmigo)) {
        alert ('Nome já adicionado!');
        return;
    } 
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test (nomeAmigo)) {
        alert ('Por favor, insira um nome válido!');
        return;
    }

        listaAmigos.push (nomeAmigo);

       let novoNomeLista = document.createElement ('li');
       novoNomeLista.textContent = nomeAmigo;
       listaAmigosElementos.appendChild (novoNomeLista);
        nomeAmigoEntrada.value = '';
    }

    function embaralhar (lista) {
        for (let i = lista.length - 1; i > 0; i--) {
            const j = Math.floor (Math.random () * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]];
        }
        return lista;
    }

    function sortearAmigo () {
        console.log ("Função sortearAmigo() chamada");

        if (listaAmigos.length < 2) {
            alert ('Adicione pelo menos 2 amigos para sortear!');
            return;
        }
        
        paresDeAmigosSecretos = [];
        let nomesDisponíveis = [...listaAmigos];
        nomesDisponíveis = embaralhar (nomesDisponíveis);  
        
        console.log ("Listas de nomes embaralhada:", nomesDisponíveis);

        for (let i = 0; i <listaAmigos.length; i++) {
            const amigo = listaAmigos [i];
            let amigosDisponiveis = nomesDisponíveis.filter (a => a !== amigo);
        
        if (amigosDisponiveis.length === 0) {
            alert ('Não foi possível sortear amigos secretos. Tente novamente!');
            paresDeAmigosSecretos = [];
            return;
        }

        let nomeAleatório = Math.floor (Math.random () * amigosDisponiveis.length);
        let amigoSorteado = amigosDisponiveis [nomeAleatório];

        paresDeAmigosSecretos.push (`${amigo} -> ${amigoSorteado}`);

        console.log ("Amigo:", amigo);
        console.log ("Amigo Sorteado:", amigoSorteado);
        console.log ("Nomes Disponíveis:", nomesDisponíveis);

       nomesDisponíveis = nomesDisponíveis.filter (nome => nome !== amigoSorteado)

       console.log ("Nomes Dispoíveis (após remoção):", nomesDisponíveis);
        }

    exibirResultado ();

    console.log ("Função exibirResultado() chamada.");

}
    
    function exibirResultado () {
        let amigoSorteadolista = document.getElementById ('amigo-sorteado');

        if (paresDeAmigosSecretos.length > 0) {
        let indiceAleatorio = Math.floor (Math.random () * paresDeAmigosSecretos.length);
        amigoSorteadolista.textContent = paresDeAmigosSecretos [indiceAleatorio];
        } else {
            amigoSorteadolista.textContent = "Nenhum par sorteado."
        }
        atualizarLista ();
    } 

    function atualizarLista () {
        let listaAmigosElementos = document.getElementById ('lista-amigos');
        listaAmigosElementos.innerHTML = '';

        listaAmigos.forEach (amigo => {
            let novoNomeLista = document.createElement ('li');
            novoNomeLista.textContent = amigo;
            listaAmigosElementos.appendChild (novoNomeLista);
        })
    }

    function limparCampo () {
        let nomeAmigoEntrada = document.getElementById ('nome-amigo');
        if (nomeAmigoEntrada) {
            nomeAmigoEntrada.value = '';
        }
     }
    
     function reiniciarJogo () {
        console.log ("Função reiniciar Jogo () chamada.");

        listaAmigos = [];
        paresDeAmigosSecretos = [];

        document.getElementById ('lista-amigos').innerHTML = '';
        document.getElementById ('amigo-sorteado').innerHTML = '';
        limparCampo ();

        console.log ("Listas e campos reiniciados.")
       
        sortearAmigo();

        console.log ("Função sortearAmigo() chamada após reiniciar Jogo");
     }