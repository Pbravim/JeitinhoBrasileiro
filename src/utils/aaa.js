fetch('http://<IP>/user/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': '<RETORNADO NO LOGIN>' // Se precisar de autenticação
    },
    body: JSON.stringify({
        nome: "<NOME>",
        senha: "<SENHA",
        email: "<EMAIL>"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Erro na requisição');
    }
    return response.json();
})
.then(data => {
    console.log('Dados do Carrinho:', data);
})
.catch(error => {
    console.error('Erro:', error);
});