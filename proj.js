let valor_cidade = [] // vaiavel global do tipo array

function inserir(){
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
}
function excluir(){
    valor_cidade.pop()
    console.log(valor_cidade)

}