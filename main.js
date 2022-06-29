let sel_bat = document.getElementById("bat")

let bat_price = document.getElementById("bat-price")

let bat_unit = document.getElementById("bat-unit")



let sel_ball = document.getElementById("ball")

let ball_price = document.getElementById("ball-price")

let ball_unit = document.getElementById("ball-unit")




let sel_stump = document.getElementById("Stumpset")

let stump_price = document.getElementById("Stumpset-price")

let stump_unit = document.getElementById("Stumpset-unit")



let sel_bat_gloves = document.getElementById("bat-gloves")

let bat_gloves_price = document.getElementById("bat-gloves-price")

let bat_gloves_unit = document.getElementById("bat-gloves-unit")



let sel_keeping_gloves = document.getElementById("keeping-gloves")

let keeping_gloves_price = document.getElementById("keeping-gloves-price")

let keeping_gloves_unit = document.getElementById("keeping-gloves-unit")




var tot = document.getElementById("total")

var tax = document.getElementById("tax")

var grand_total = document.getElementById("grand-total")


function calculate(x,y,z){
    
    let quant = parseInt(x.value)

    let unit_price = parseInt(y.innerText)
   
    z.textContent = (quant * unit_price)
      
    tot.textContent = parseInt(tot.textContent) + parseInt(z.textContent)
    
    tax.textContent = parseInt(tot.textContent * 0.18)

    grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))
    

    
}

sel_bat.onchange = function(){calculate(sel_bat,bat_unit,bat_price)}

sel_ball.onchange = function(){calculate(sel_ball,ball_unit,ball_price)}

sel_stump.onchange = function(){calculate(sel_stump,stump_unit,stump_price)}

sel_bat_gloves.onchange = function(){calculate(sel_bat_gloves,bat_gloves_unit,bat_gloves_price)}

sel_keeping_gloves.onchange = function(){calculate(sel_keeping_gloves,keeping_gloves_unit,keeping_gloves_price)}



// sel_bat.onchange = function(){
//     let bat_pri = parseInt(sel_bat.value)
    
//     let bat_unt_pri = parseInt(bat_unit.innerText)

//     bat_price.textContent = (bat_pri * bat_unt_pri)
    
//     tot.textContent = parseInt(tot.textContent) + parseInt(bat_price.textContent)

//     tax.textContent = parseInt(tot.textContent * 0.18)

//     grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))

// }

 

// sel_ball.onchange = function(){
//     let ball_pri = parseInt(sel_ball.value)

//     let ball_unt_pri = parseInt(ball_unit.innerText)

//     ball_price.textContent = (ball_pri * ball_unt_pri)
  
//     tot.textContent = parseInt(tot.textContent) +  parseInt(ball_price.textContent)

//     tax.textContent = parseInt(tot.textContent * 0.18)

//     grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))
// }


// sel_stump.onchange = function(){
//     let stump_pri = parseInt(sel_stump.value)

//     let stump_unt_pri = parseInt(stump_unit.innerText)

//     stump_price.textContent = (stump_pri * stump_unt_pri)
  
//     tot.textContent = parseInt(tot.textContent) +  parseInt(stump_price.textContent)
    
//     tax.textContent = parseInt(tot.textContent * 0.18)

//     grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))
// }




// sel_bat_gloves.onchange = function(){
//     let bat_gloves_pri = parseInt(sel_bat_gloves.value)

//     let bat_gloves_unt_pri = parseInt(bat_gloves_unit.innerText)

//     bat_gloves_price.textContent = (bat_gloves_pri * bat_gloves_unt_pri)
  
//     tot.textContent = parseInt(tot.textContent) +  parseInt(bat_gloves_price.textContent)

    
//     tax.textContent = parseInt(tot.textContent * 0.18)

//     grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))
// }





// sel_keeping_gloves.onchange = function(){
//     let keeping_gloves_pri = parseInt(sel_keeping_gloves.value)

//     let keeping_gloves_unt_pri = parseInt(keeping_gloves_unit.innerText)

//     keeping_gloves_price.textContent = (keeping_gloves_pri * keeping_gloves_unt_pri)
  
//     tot.textContent = parseInt(tot.textContent) +  parseInt(keeping_gloves_price.textContent)
    
//     tax.textContent = parseInt(tot.textContent * 0.18)

//     grand_total.textContent = (parseInt(tot.textContent) + parseInt(tax.textContent))
// }



