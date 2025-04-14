// criar uma function com as variaveis e os iDs
// criar uma condiçao p/ verificar erro 
// add um variavel vazia para resetar
// criar um for com text creatElem e o append
function tabuada (){
    const numero = document.getElementById("num").value;
    const tabu = document.getElementById("seltab");
    const resultado = document.getElementById("res");

    if(numero.length === 0){
        alert("[ERRO] Verificar numero digitado");
    }else{
        const n = Number(numero);
        tabu.innerHTML = "";
        for(let i = 0; i <= 10; i++){
            const item = document.createElement("option");
            item.text = `${n} X ${i} = ${n * i}`;
            tabu.appendChild(item);
        }
    }
}

const botao = document.getElementById("bot");
botao.addEventListener("click", tabuada);


