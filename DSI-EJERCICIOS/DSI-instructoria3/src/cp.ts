
import * as fs from 'fs';

let origen: string=process.argv[2];

let destino: string=process.argv[3];

let ArchivoOrigen: string = origen;
let ArchivoDestino: string = destino;
let argu: string='';


const data=fs.readFileSync(ArchivoOrigen, 'utf-8');

argu=data;

fs.writeFileSync(ArchivoDestino, data);

/* Para ejecutar el programa use el siguiente comado
 * npm run --silent cp RUTAORIGEN RUTADESTINO
 * 
 * Ejemplo de funcionamiento
 * npm run --silent cp ./origen.txt ./destino.txt
 * les devolvera el contenido del archivo
 */ 