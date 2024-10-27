//Variáveis universal
let amigos = [];

function adicionar() {
    //Pegando informações
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    //Condições para adicionar: não estar vazio e nem repetir
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    //Adicionando na lista
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //Zerando celula que pega o nome do amigo
    amigo.value = '';
}

function sortear() {
    //Condições para sortear: Pelo menos 4 amigos 
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    //Decrementando o array
    embaralhar(amigos);
    //Incrementando o array a lista de sorteio. sempre a pessoa sai com a proxima e a utima sai com a primeira 
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' saiu com ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' saiu com ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    //embaralha a ordem de todos os elementos dentro de um array 
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    //Zerando a lista de amigos, lista sorteio e zerar array; 
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}