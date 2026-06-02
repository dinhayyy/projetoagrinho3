function mostrarCuriosidade() {

    const curiosidades = [
        "O Brasil está entre os maiores produtores agrícolas do mundo.",
        "Sensores no campo ajudam a economizar água e energia.",
        "Drones são usados para monitorar plantações.",
        "A agricultura sustentável preserva o meio ambiente.",
        "A tecnologia conecta o campo e a cidade."
    ];

    const sorteio =
        curiosidades[Math.floor(Math.random() * curiosidades.length)];

    document.getElementById("curiosidade").textContent = sorteio;
}