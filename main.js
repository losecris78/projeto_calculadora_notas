const form = document.getElementById("form_atividade");
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas =[];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';    
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>';
const notaMinima =parseFloat(prompt("Digite a nota mínima: "));

form.addEventListener('submit',function (e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
    
});
function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome_atividade");
    const inputNotaAtividade = document.getElementById("nota_atividade");

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha ='<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value} </td>`;
        //Na linha 12 o ? significa o if true, e : significa else. Substituida a string para colocar as imágens
        //linha += `<td> ${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }      
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    //alert(`Atividade: ${inputNomeAtividade.value}, nota: ${notaAtividade.value}`);
};
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media_final_valor').innerHTML=mediaFinal.toFixed(2);
    /* línea comentada para cambiar a const span y no usar los string
    document.getElementById('media_final_resultado').innerHTML=mediaFinal >= 7 ? "Aprovado" : 'Reprovado';*/
    document.getElementById('media_final_resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    //console.log (somaDasNotas);
    //console.log(media);
    //console.log (notas);
};


function calculaMediaFinal(){
    let somaDasNotas = 0;
    for (let i= 0; i < notas.length; i++){
    somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
};