const mensaje = ()=> "el nombre elegido del perro es:";
 const perro = (posi)=>{

    let nombresp= ['dan', 'lukas', 'thor', 'rocco', 'lupe'];

    return nombresp[posi];
}

module.exports = { perro, mensaje};

