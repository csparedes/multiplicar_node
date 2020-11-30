//requires
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(comando);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Error:\n ${archivo}`));
        break;

    default:
        console.log('Comando no reconocido');
}







// let base = 8;
// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;

//     console.log('El archivo ha sido creado');
// });

// console.log(module);

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));