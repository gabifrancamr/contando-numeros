var inicio = document.getElementById('numinicial');
var fim = document.getElementById('numfinal');
var passo = document.getElementById('passo');
var resultado = document.querySelector('div#resultado');

function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert('Preencha todas as informações')
    } else {
        resultado.innerHTML = 'Contando: <br>'
    
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p == 0){
            resultado.innerHTML += 'Considerando contador 1!<br>'
            p = 1
        }

        if(i < f){
            /*var contador = i
            while(contador <= f){
                resultado.innerHTML += `${contador}, `
                contador ++
            }*/
            for(var c =i; c <= f; c+=p){
                resultado.innerHTML += `${c} ~ `
            }
        }

        if(i > f){
            for(var c=i; c >=f; c-=p){
                resultado.innerHTML += `${c} ~ `
            }
        }
        resultado.innerHTML += '&#128151'
    }
}