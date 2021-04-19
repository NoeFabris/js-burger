var subBtn = document.getElementById('button')

subBtn.addEventListener('click', function(){
    var hambName = document.getElementById('name')
    // if (hanbName === 'ciao') {
    //     prompt('ciao')
    // }else {
    //     alert(df)
    // }

    var listaIngredienti = document.querySelectorAll(".ingredient [type = 'checkbox']")
    console.log(listaIngredienti)
    var somma = 50
    
    for (let i = 0; i < listaIngredienti.length; i++) {
        var prezzoAgg = listaIngredienti[i].value
        
        if (listaIngredienti[i].checked === true) {
            somma += parseInt(listaIngredienti[i].value)
            console.log(prezzoAgg)
        }
    }
    document.getElementById('price').innerHTML = somma
})
