import express from 'express';
import { data } from './src/data.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/product', (req, res) => {
  const productsData = data.getProducts();
  const newProduct = req.body;
  newProduct.id = productsData.length ? Math.max(...productsData.map(product => product.id)) + 1 : 1;
  productsData.push(newProduct);
  data.saveProducts(productsData);
  res.status(201).json(newProduct);
});

app.get('/product', (req, res) => {
  const products = data.getProducts();
  res.status(200).json(products);
});

app.get('/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const products = data.getProducts();
  const product = products.find(product => product.id === id);
  if (!product) {
    res.status(404).json({ message: 'Produto não encontrado' });
    return;
  }
  res.status(200).json(product);
});

app.put('/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const products = data.getProducts();
  const updatedProduct = req.body;
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Produto não encontrado' });
    return;
  }
  products[index] = updatedProduct;
  data.saveProducts(products);
  res.status(200).json({ message: 'Produto atualizado com sucesso!' });
});

app.delete('/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const products = data.getProducts();
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Produto não encontrado' });
    return;
  }
  products.splice(index, 1);
  data.saveProducts(products);
  res.status(200).json({ message: 'Produto excluído com sucesso!' });
});

app.post('/supplier', (req, res) => {
  const suppliers = data.getSuppliers();
  const newSupplier = req.body;
  newSupplier.id = suppliers.length ? Math.max(...suppliers.map(supplier => supplier.id)) + 1 : 1;
  suppliers.push(newSupplier);
  data.saveSuppliers(suppliers);
  res.status(201).json(newSupplier);
});

app.get('/supplier', (req, res) => {
  const suppliers = data.getSuppliers();
  res.status(200).json(suppliers);
});

app.get('/supplier/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const suppliers = data.getSuppliers();
  const supplier = suppliers.find(supplier => supplier.id === id);
  if (!supplier) {
    res.status(404).json({ message: 'Fornecedor não encontrado' });
    return;
  }
  res.status(200).json(supplier);
});

app.put('/supplier/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const suppliers = data.getSuppliers();
  const updatedSupplier = req.body;
  const index = suppliers.findIndex(supplier => supplier.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Fornecedor não encontrado' });
    return;
  }
  suppliers[index] = updatedSupplier;
  data.saveSuppliers(suppliers);
  res.status(200).json({ message: 'Fornecedor atualizado com sucesso!' });
});

app.delete('/supplier/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const suppliers = data.getSuppliers();
  const index = suppliers.findIndex(supplier => supplier.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Fornecedor não encontrado' });
    return;
  }
  suppliers.splice(index, 1);
  data.saveSuppliers(suppliers);
  res.status(200).json({ message: 'Fornecedor excluído com sucesso!' });
});

app.post('/requisition', (req, res) => {
  const requisitions = data.getRequisitions();
  const newRequisition = req.body;
  newRequisition.id = requisitions.length ? Math.max(...requisitions.map(requisition => requisition.id)) + 1 : 1;
  requisitions.push(newRequisition);
  data.saveRequisitions(requisitions);
  res.status(201).json(newRequisition);
});

app.get('/requisition', (req, res) => {
  const requisitions = data.getRequisitions();
  res.status(200).json(requisitions);
});

app.get('/requisition/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const requisitions = data.getRequisitions();
  const requisition = requisitions.find(requisition => requisition.id === id);
  if (!requisition) {
    res.status(404).json({ message: 'Requisição não encontrada' });
    return;
  }
  res.status(200).json(requisition);
});

app.put('/requisition/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const requisitions = data.getRequisitions();
  const updatedRequisition = req.body;
  const index = requisitions.findIndex(requisition => requisition.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Requisição não encontrada' });
    return;
  }
  requisitions[index] = updatedRequisition;
  data.saveRequisitions(requisitions);
  res.status(200).json({ message: 'Requisição atualizada com sucesso!' });
});

app.delete('/requisition/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const requisitions = data.getRequisitions();
  const index = requisitions.findIndex(requisition => requisition.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Requisição não encontrada' });
    return;
  }
  requisitions.splice(index, 1);
  data.saveRequisitions(requisitions);
  res.status(200).json({ message: 'Requisição excluída com sucesso!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
