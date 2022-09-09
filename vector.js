//funciones array o funcion flecha 

const nombres = (posicion)=> {
    let tun = ['juliana', 'chocho', 'valentina', 'manuela'];

    if(posicion == 4) return "no es valido coloque del 0 al 3:";
    
    return tun[posicion];
}
const mensaje =()=> "este es la pocision :";

module.exports = {nombres,mensaje};
