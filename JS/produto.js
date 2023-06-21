var i = 0
const produtos = [
    { id: 1, descricao: "Tênis Casual Masculino Azul", vl_venda: "R$ 99,90", vl_custo: "R$ 49,95", marca: "NIKE", estante: "A1", qtde_disponivel: 10, cor: ["Azul"], tamanho: [39, 40, 41, 42, 43] },
    { id: 2, descricao: "Tênis Casual Masculino Preto", vl_venda: "R$ 99,90", vl_custo: "R$ 49,95", marca: "NIKE", estante: "A1", qtde_disponivel: 5, cor: ["Preto"], tamanho: [39, 40, 41, 42, 43] },
    { id: 3, descricao: "Tênis Casual Feminino Branco", vl_venda: "R$ 89,90", vl_custo: "R$ 44,95", marca: "ADIDAS", estante: "B2", qtde_disponivel: 7, cor: ["Branco"], tamanho: [34, 35, 36, 37, 38, 39] },
    { id: 4, descricao: "Tênis Esportivo Masculino Preto", vl_venda: "R$ 129,90", vl_custo: "R$ 64,95", marca: "ADIDAS", estante: "B2", qtde_disponivel: 3, cor: ["Preto"], tamanho: [39, 40, 41, 42, 43] },
    { id: 5, descricao: "Sandália Rasteira Feminina Marrom", vl_venda: "R$ 69,90", vl_custo: "R$ 34,95", marca: "VIA UNO", estante: "C3", qtde_disponivel: 8, cor: ["Marrom"], tamanho: [34, 35, 36, 37, 38, 39] },
    { id: 6, descricao: "Tênis Casual Feminino Knit Rosa", vl_venda: "R$ 99,90", vl_custo: "R$ 49,95", marca: "ELLA'S", estante: "C4", qtde_disponivel: 6, cor: ["Rosa"], tamanho: [34, 35, 36, 37, 38] },
    { id: 7, descricao: "Tênis Slip On Branco com Glitter", vl_venda: "R$ 129,90", vl_custo: "R$ 64,95", marca: "ELLA'S", estante: "D2", qtde_disponivel: 4, cor: ["Branco"], tamanho: [35, 36, 37, 38, 39] },
    { id: 8, descricao: "Rasteirinha Pedrarias Dourada", vl_venda: "R$ 89,90", vl_custo: "R$ 44,95", marca: "ELLA'S", estante: "D2", qtde_disponivel: 5, cor: ["Dourado"], tamanho: [35, 36, 37, 38,] }
        ]            


/* Inserção de Dados Dinâmicamente */
const lista_produto = document.querySelector('.body-table')

while (i < produtos.length) {
    lista_produto.insertAdjacentHTML('beforeend',
        `<tr class="line_table">
            <td><input type="checkbox" name="" id=""></td>
            <th scope="row">${produtos[i].id}</th>
            <td>${produtos[i].descricao}</td>
            <td>${produtos[i].vl_venda}</td>
            <td>${produtos[i].vl_custo}</;td>
            <td>${produtos[i].marca}</td>
            <td>${produtos[i].estante}</td>
            <td>${produtos[i].qtde_disponivel}</td>
            <td>${produtos[i].cor}</td>
            <td>${produtos[i].tamanho}</td>
            </tr>`
    )
    i = i + 1
}
