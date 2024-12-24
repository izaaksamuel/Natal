/**
 * Sorteio de uma carta
 * @author samuel
 */

// Array de cartas com objetos
const cartas = [
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Double take- Dhruv", imagem: "./img/doubletake.jpg "},
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "New perspective - panic at the Disco ", imagem: "./img/perspective.jpg"},
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Perfect - Ed Sheeran", imagem: "./img/perfect.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "galway girl - Ed Sheeran", imagem: "./img/galway.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Beautiful girls - Bruno Mars", imagem: "./img/beautiful.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Disco - Surf Curse", imagem: "./img/disco.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Supersticiosa -Dody ", imagem: "./img/supersticiosa.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Cabelo arco íris - Kamaitachi", imagem: "./img/arcoiris.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "505 - Artic monkeys", imagem: "./img/505.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "We fell in love in october - Girl in red", imagem: "./img/october.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Love nwantiti- Ckay", imagem: "./img/love.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "As it was - Harry Styles", imagem: "./img/harry.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Running up that Hill - Kate Bursh", imagem: "./img/kate.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Flores de papel- Matheus Blc", imagem: "./img/papel.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Perfect Girl - Mareux", imagem: "./img/0.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Heart break anniversary - Giveon", imagem: "./img/hear.jpg" },
    { nome: "Música que me lembra ou que eu acho que combine com você", atributos: "Liga pra mim - Thru, Erix", imagem: "./img/pramiim.jpg" },
    { nome: "Elogio criativo", atributos: "As vezes da vontade de te dar um tuqui, mas mesmo assim, adoro cada conversa contigo", imagem: "./img/pam.jpg" },
    { nome: "Elogio criativo", atributos: "Pesquise Shrek 1h.04min.20seg", imagem: "./img/shrek.jpg" },
    { nome: "Elogio criativo", atributos: "Pesquise Aladin 45min.25seg", imagem: "./img/aladin.jpg" },
    { nome: "Elogio criativo", atributos: "Tanto o universo quanto a  sua beleza são infinitos, mas tenho minhas duvidas sobre o universo", imagem: "./img/universo.jpg" },
    { nome: "Elogio criativo", atributos: "É incrível como sempre que você falava qualquer coisa eu te olhava exatamente assim", imagem: "./img/gatinho.jpg" },
    { nome: "Elogio", atributos: "Eu só quero te ver bem, se eu pudesse,trocaria a minha felicidade pela sua", imagem: "./img/aniversario.jpg" },
    { nome: "Elogio criativo", atributos: "Você é a garota mais Incrível que eu já conheci,linda, inteligente, esforçada, nunca deixe alguém dizer o contrário ", imagem: "./img/peter.jpg" },
    { nome: "Elogio criativo", atributos: "Adoro o fato de você conseguir ser super fofa e totalmente grossa ao mesmo tempo", imagem: "./img/interestelar.jpg" },
    { nome: "Elogio criativo", atributos: "Coversar com você é sempre divertido, porque eu nunca sei se a sua próxima mensagem é algo fofo ou um xingamento pesado pra mim", imagem: "./img/stephen-king.jpg" },
    { nome: "Elogio criativo", atributos: "Desculpa fazer você ter que cozinhar um bolo comigo, eu só queria uma desculpa para poder passar a tarde com você", imagem: "./img/getinho.jpg" },
    { nome: "Elogio criativo", atributos: "Sei que você não está no seu melhor momento, mas eu te conheço, e sei que você vai dar a volta por cima, to torcendo por ti ", imagem: "./img/bolar.jpg" },
    { nome: "Elogio criativo", atributos: "Você com certeza é a melhor editora de vídeos que eu conheço", imagem: "./img/trem.jpg" },
    { nome: "Elogio criativo", atributos: "Eu sempre admirei o fato de sempre tentar ajudar os outros na medida do possível, você é uma pessoa boa", imagem: "./img/fofo.jpg" },
    { nome: "Elogio criativo", atributos: "Eu sempre vou rir quando lembrar que após dizer que te amava, tu me encarou e falou 'que que cê falou?'",imagem: "./img/rindo.jpg"},
    { nome: "Elogio criativo", atributos: "Eu sempre gostei muito do seu estilo e do jeito que você arruma seu cabelo,unhas etc, sempre fica linda",imagem: "./img/rendo.jpg"},
    { nome: "Elogio criativo", atributos: "Como a Maria diz,você é a garota mais meiga que eu já conheci, sempre mto boazinha ",imagem: "./img/rondo.jpg"} 


];

function sortear() {
    // Lógica principal do sorteio da carta
    const indice = Math.floor(Math.random() * cartas.length);
    const carta = cartas[indice]; // Obtém a carta sorteada

    // Renderizar o canto superior esquerdo da carta
    document.getElementById('sup').innerHTML = `<div class="nome">${carta.nome}</div>`;

    // Renderizar o centro da carta
    const cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${carta.imagem}">`;

    // Renderizar lado inferior da carta
    document.getElementById('inf').innerHTML = `<div class="card">${carta.atributos}</div>`;
}