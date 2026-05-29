/*// Função para mostrar detalhes da indústria
function mostrarDetalhes(cultura) {
    const detalhes = document.getElementById('detalhes');
    let info = '';

    switch(cultura) {
        case 'soja':
            info = "<h3>Soja</h3><p>A soja é um dos principais produtos agrícolas do Paraná, utilizada na alimentação e indústria.</p>";
            break;
        case 'milho':
            info = "<h3>Milho</h3><p>O milho é essencial na produção de alimentos e biocombustíveis, sendo cultivado em larga escala.</p>";
            break;
        case 'cafe':
            info = "<h3>Café</h3><p>O Paraná também é conhecido pela produção de café de qualidade, com destaque para grãos especiais.</p>";
            break;
        default:
            info = '';
    }

    detalhes.innerHTML = info;
}

// Função para enviar formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const resposta = document.getElementById('resposta');
    resposta.textContent = `Obrigado pelo contato, ${nome}! Responderemos em breve.`;
    this.reset();
});
