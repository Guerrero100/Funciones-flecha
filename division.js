//funciones array o funcion flecha 
const divi = (nu1,nu2)=>{

    if(nu2 == 0) return "esta variable no es valida por favor elija otro numero:";
    
    return nu1/nu2;
}
const mensaje = ()=>"esta es la division:";

module.exports = {divi, mensaje};