import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsPath = path.join(__dirname, 'data/products.json');
const suppliersPath = path.join(__dirname, 'data/suppliers.json');
const requisitionsPath = path.join(__dirname, 'data/requisitions.json');

function readData(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []; // Retorna um array vazio se o arquivo não existir
    } else {
      console.error('Erro ao ler arquivo:', error);
      return [];
    }
  }
}

function writeData(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
  } catch (error) {
    console.error('Erro ao escrever arquivo:', error);
  }
}

export const data = {
  getProducts: () => readData(productsPath),
  saveProducts: (products) => writeData(productsPath, products),
  getSuppliers: () => readData(suppliersPath),
  saveSuppliers: (suppliers) => writeData(suppliersPath, suppliers),
  getRequisitions: () => readData(requisitionsPath),
  saveRequisitions: (requisitions) => writeData(requisitionsPath, requisitions),
};
