const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((reject, resolve) => {

        let data = '';
        console.log('============================='.blue);
        console.log(`==========Tabla de ${base}===================`.black);
        console.log('============================='.blue);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

            console.log('El archivo ha sido creado');
        });

    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}