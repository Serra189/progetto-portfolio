const backBNT= document.getElementById('backBTN');

backBNT.addEventListener('click', function(){
    window.scrollTo(0,0); //funzione che mi scrolla la finestra alle coordinate che gli do, in questo caso 0,0
})

//per l'elemento window non c'è bisogno di ottenerlo, perchè indica tutta la finstra del browser
window.addEventListener('scroll', function(){
    let posY=window.scrollY; //proprietà di sola lettura che restituisc in pixel di quanto è scrolata la finestra
    if (posY>100){
        backBNT.style.display= 'block'; //fa tornare visibile l'elemento 
    } else {
        backBNT.style.display= 'none'; //rinasconte l'elemento 
    }
})
