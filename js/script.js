var subBtn = document.getElementById('button')

subBtn.addEventListener('click', function(){
    var hambName = document.getElementById('name')
    console.log(hambName.value)
    
    var couponUser = document.getElementById('coupon')
    console.log(couponUser.value)
    
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

    if (!hambName.value) {
        alert('Manca il nome dell burger')
    }

    switch (couponUser.value) {
        case 'Sconto50':
            somma -= ((somma * 50) / 100)
            break;
    
        case 'Sconto25':
            somma -= ((somma * 25) / 100)
            break;
        
        case 'Sconto10':
            somma -= ((somma * 10) / 100)
            break;

        case 'Sconto5':
            somma -= ((somma * 5) / 100)
            break;
            
        default:
            break;
    }
    document.getElementById('price').innerHTML = somma
})
