function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // Mapeamento dos tipos de ingresso aos IDs correspondentes
    const ids = {
        'pista': 'qtd-pista',
        'inferior': 'qtd-inferior',
        'superior': 'qtd-superior'
    };

    let qtdDisponivel = parseInt(document.getElementById(ids[tipo]).textContent);
    
    while (qtd > qtdDisponivel) {
        alert('Quantidade não permitida.');
        return;
    }

    qtdDisponivel -= qtd;
    document.getElementById(ids[tipo]).textContent = qtdDisponivel;
    alert('Compra realizada com sucesso!');
}