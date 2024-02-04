document.getElementById('id2').addEventListener('click() ', decisionMaker);

function decisionMaker(){
    convNumber=document.getElementById('id1').value() 
    if(convNumber>10){
        document.getElementById('abl').innerHTML='Big number'+ convNumber

    }else{
        document.getElementById('abl').innerHTML='small number'+ convNumber
    }

}