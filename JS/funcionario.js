var i = 0
const funcionarios = [
  { id: 1, senha: "FUNC0001", status: "Ativo", nome: "Gabril Soares", funcao: "Atendente", sexo: "M", email: "gabriel.soares@whatevershoes.com", salario: "R$ 2.300,00", comissao: "", dt_demissao: "", dt_admissao: "01/03/2021" },
  { id: 2, senha: "FUNC0002", status: "Ativo", nome: "Maria Silva", funcao: "Atendente", sexo: "F", email: "maria.silva@whatevershoes.com", salario: "R$ 2.500,00", comissao: "", dt_demissao: "", dt_admissao: "10/04/2021" },
  { id: 3, senha: "FUNC0003", status: "Ativo", nome: "João Santos", funcao: "Gerente", sexo: "M", email: "joao.santos@whatevershoes.com", salario: "R$ 5.000,00", comissao: "", dt_demissao: "", dt_admissao: "15/01/2021" },
  { id: 4, senha: "FUNC0004", status: "Ativo", nome: "Ana Souza", funcao: "Atendente", sexo: "F", email: "ana.souza@whatevershoes.com", salario: "R$ 1.800,00", comissao: "", dt_demissao: "", dt_admissao: "22/05/2021" },
  { id: 5, senha: "FUNC0005", status: "Ativo", nome: "Lucas Oliveira", funcao: "Estoquista", sexo: "M", email: "lucas.oliveira@whatevershoes.com", salario: "R$ 2.100,00", comissao: "", dt_demissao: "", dt_admissao: "03/02/2021" },
  { id: 6, senha: "FUNC0006", status: "Ativo", nome: "Carla Rodrigues", funcao: "Assistente Administrativo", sexo: "F", email: "carla.rodrigues@whatevershoes.com", salario: "R$ 2.500,00", comissao: "", dt_demissao: "", dt_admissao: "12/06/2021" },
  { id: 7, senha: "FUNC0007", status: "Ativo", nome: "Pedro Alves", funcao: "Atendente", sexo: "M", email: "pedro.alves@whatevershoes.com", salario: "R$ 2.200,00", comissao: "", dt_demissao: "", dt_admissao: "01/03/2021" }
]


/* Inserção de Dados Dinâmicamente */
const lista_funcionario = document.querySelector('.body-table')

while (i < funcionarios.length) {
  lista_funcionario.insertAdjacentHTML('beforeend',
    `<tr class="line_table">
            <td><input type="checkbox" name="" id=""></td>
            <th scope="row">${funcionarios[i].id}</th>
            <td>${funcionarios[i].nome}</td>
            <td>${funcionarios[i].status}</td>
            <td>${funcionarios[i].senha}</;td>
            <td>${funcionarios[i].funcao}</td>
            <td>${funcionarios[i].sexo}</td>
            <td>${funcionarios[i].email}</td>
            <td>${funcionarios[i].salario}</td>
            <td>${funcionarios[i].comissao}</td>
            <td>${funcionarios[i].dt_demissao}</td>
            <td>${funcionarios[i].dt_admissao}</td>
            </tr>`
  )
  i = i + 1
}

// Funções Relacionadas a Funcionários

function adicionarComissao() {
  var funcaoSelect1 = document.querySelector("#função");
  var comissaoInput1 = document.querySelector("#input_comissão");

  if (funcaoSelect1.value === "Atendente") {
    comissaoInput1.value = "3,5";
    comissaoInput1.readOnly = false;
    comissaoInput1.style.backgroundColor = "#ffffff";
    comissaoInput1.style.color = "#000000";
  } else {
    comissaoInput1.value = '';
    comissaoInput1.readOnly = true;
    comissaoInput1.style.backgroundColor = "#f2f2f2";
  }
}

function editarComissao() {
  var funcaoSelect2 = document.querySelector("#função_2");
  var comissaoInput2 = document.querySelector("#input_comissão_2");

  if (funcaoSelect2.value === "Atendente") {
    comissaoInput2.value = "";
    comissaoInput2.readOnly = false;
    comissaoInput2.style.backgroundColor = "#ffffff";
    comissaoInput2.style.color = "#000000";
  } else {
    comissaoInput2.value = '';
    comissaoInput2.readOnly = true;
    comissaoInput2.style.backgroundColor = "#f2f2f2";
  }

}




  