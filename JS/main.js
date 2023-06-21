// Lista de Usuários
const login = [
    { user: "admin", pass: "admin" }
]

// Variáveis: Botão de Enviar Formulário e Mensagem de Erro
const input = document.querySelector('#submit')
const err = "* Erro: Verifique os dados e tente novamente"

// Validação Do Usuário
function logar() {
    // Recebe o Valor do Input Usuário/Senha
    const user = document.querySelector('#data_user').value
    const pass = document.querySelector('#data_pass').value

    // Variável: Informa Número de Vezes Que o While Rodou
    var i = 0

    // Loop
    while (i <= login.length) {

        // Validação: Se Estiver Correto
        if (user == login[i].user && pass == login[i].pass) {
            location.href = "HTML/home.html"
            break
        }
        i = i + 1
        user_not_auth()
    }

    // Declaração da Função
    function user_not_auth() {
        document.querySelector('#msg_error').innerHTML = err
    }

}
