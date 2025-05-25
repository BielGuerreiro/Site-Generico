const carros = [
    {
        imagem: "carro.web",
        titulo: "Nissan GT-R R35",
        descricao: "O Nissan GT-R R35 é um ícone automotivo, conhecido por seu motor V6 biturbo de 3.8 litros e aceleração impressionante. Com tração integral e aerodinâmica refinada, ele oferece estabilidade e velocidade, sendo admirado por entusiastas e pilotos ao redor do mundo."
    },
    {
        imagem: "logo.png",
        titulo: "Ferrari LaFerrari",
        descricao: "A Ferrari LaFerrari é um supercarro híbrido com um motor V12 de 6.3 litros combinado a um sistema elétrico, entregando uma potência de 950 cavalos. Um dos modelos mais avançados já produzidos pela Ferrari."
    },
    {
        imagem: "carro3.webp",
        titulo: "Lamborghini Aventador",
        descricao: "O Lamborghini Aventador possui um motor V12 de 6.5 litros, design agressivo e tecnologia de ponta. Seu chassi leve e aerodinâmico oferecem potência e velocidade, tornando-se um dos supercarros mais icônicos da Lamborghini."
    }
];

let indiceAtual = 0;

function mudarCarro(direcao) {
    indiceAtual += direcao;

    // Garante que o índice fique dentro dos limites da lista
    if (indiceAtual < 0) {
        indiceAtual = carros.length - 1;
    } else if (indiceAtual >= carros.length) {
        indiceAtual = 0;
    }

    // Atualiza a imagem, título e descrição do carro
    document.getElementById("carro-img").src = carros[indiceAtual].imagem;
    document.getElementById("titulo-carro").innerText = carros[indiceAtual].titulo;
    document.getElementById("descricao-carro").innerText = carros[indiceAtual].descricao;
}