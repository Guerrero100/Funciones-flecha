
const mensaje = () => "la profesion es :";
const profesion = (posicion2) => {

if(posicion2 == 7) return "no es posible la profesion deseada:";

    let t = ['construccion', 'arquitectura', 'guardia de seguridad', 'oficios varios'];
    return t[posicion2];
}

module.exports = { profesion, mensaje };
