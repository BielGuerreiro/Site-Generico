const carros = document.querySelectorAll(".carro");
let indiceAtual = 0;

const dadosCarros = [
    { titulo: "Nissan GT-R R35", descricao: "O Nissan GT-R R35 é um dos supercarros mais icônicos da Nissan, conhecido por sua potência brutal, tecnologia avançada e desempenho impressionante. Ele foi lançado em 2007 como sucessor do lendário Skyline GT-R R34, trazendo um novo design e um motor ainda mais poderoso." },
    { titulo: "Ferrari F8", descricao: "A Ferrari F8 Tributo tem um motor V8 biturbo de 720 cv, acelera de 0 a 100 km/h em 2,9 segundos, e atinge 340 km/h de velocidade máxima. Ela combina design aerodinâmico avançado, tecnologia de ponta, e um interior sofisticado, mantendo o legado da Ferrari com potência e inovação." },
    { titulo: "McLaren P1", descricao: "O McLaren P1 é um hipercarro híbrido com 916 cv, alcançando 350 km/h. Seu design aerodinâmico e tecnologia avançada garantem desempenho extremo e exclusividade." },
    { titulo: "Camaro", descricao: "O Chevrolet Camaro é um dos muscle cars mais icônicos da história, produzido pela General Motors desde 1966 como resposta ao sucesso do Ford Mustang. Ele combina potência, design agressivo e tecnologia moderna, mantendo sua essência esportiva ao longo das gerações." },
    { titulo: "Lamborghini Revuelto", descricao: "O Lamborghini Revuelto é um supercarro híbrido plug-in de alto desempenho, lançado em 2023 como sucessor do Aventador. Ele combina um motor V12 aspirado de 6.5 litros com três motores elétricos, gerando um total de 1015 cv." },
    { titulo: "Porche 911 GT3", descricao: "O Porsche 911 GT3 é um dos modelos mais icônicos da linha 911, projetado para oferecer um desempenho excepcional tanto nas ruas quanto nas pistas. Ele combina um motor aspirado de alta rotação, aerodinâmica refinada e tecnologia inspirada no automobilismo" },
    { titulo: "Civic Type R", descricao: "O Honda Civic Type R é um dos hatchbacks esportivos mais icônicos do mundo, combinando potência, aerodinâmica refinada e tecnologia avançada. Ele é projetado para oferecer uma experiência de condução emocionante, tanto nas ruas quanto nas pistas." }
];

function mudarCarro(direcao) {
    const carrosContainer = document.querySelector(".carros");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");

    carrosContainer.style.transition = "transform 0.5s ease-in-out";
    indiceAtual += direcao;

    if (indiceAtual < 0) indiceAtual = dadosCarros.length - 1;
    if (indiceAtual >= dadosCarros.length) indiceAtual = 0;

    carrosContainer.style.transform = `translateX(${-indiceAtual * 100}%)`;

    titulo.style.opacity = "0";
    descricao.style.opacity = "0";
    titulo.style.transform = `translateX(${direcao * 100}px)`;
    descricao.style.transform = `translateX(${direcao * 100}px)`;

    setTimeout(() => {
        titulo.textContent = dadosCarros[indiceAtual].titulo;
        descricao.textContent = dadosCarros[indiceAtual].descricao;

        titulo.style.opacity = "1";
        descricao.style.opacity = "1";
        titulo.style.transform = "translateX(0)";
        descricao.style.transform = "translateX(0)";

        ScrollReveal().reveal('#titulo', {
            duration: 1000,
            origin: 'bottom',
            distance: '30px',
            easing: 'ease-in-out',
            reset: false
        });

        ScrollReveal().reveal('#descricao', {
            duration: 1000,
            origin: 'bottom',
            distance: '30px',
            easing: 'ease-in-out',
            reset: false
        });

    }, 300);
}

window.onload = function () {
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");

    titulo.textContent = dadosCarros[0].titulo;
    descricao.textContent = dadosCarros[0].descricao;
};
