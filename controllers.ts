import express from 'express';
import * as uuid from 'uuid';
import { Order, User, Driver } from './types';

const router = express.Router();

const users = new Map<string, User>();
const orders = new Map<string, Order>();
const drivers = new Map<string, Driver>();

// Manually add a driver and user
const driver = {
  id: '3a9bf929-824a-4864-9c45-effb2bc49d2d',
  username: 'awesomeDriver',
  name: 'Nikhil Dange',
  car: 'Toyota Camry',
  orders: 41,
}

const user = {
    id: 'e1414613-f671-4ad1-85d7-fb5227f856eb',
    username: 'lebronjames93458325',
    name: 'Lebron James',
    card: 'Discover Student',
}

// GET all existing orders
router.get('/orders', (req, res) => {
    const currentOrders = Array.from(orders.values());
    return res.status(200).json({ orders: currentOrders });
});

// GET a specific order
router.get('/order/:id', (req, res) => {
    const { id } = req.params;
    const order = orders.get(id);

    // Check the database to ensure the order exists
    if (order != null) { 
        return res.status(200).json({ order });
    }
    else {
        return res.status(404).json({ error: "Oops! That order can't be found 🤪"});
    }
});

router.post('/order', (req, res) => {
  // TODO
});

router.post('/order/:id/accept', (req, res) => {  
  // Not sure about this one
});

router.post('/user', (req, res) => {
  // TODO
});

export default router;