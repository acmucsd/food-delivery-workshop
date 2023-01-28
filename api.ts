// import e from 'express';
import express from 'express';
import * as uuid from 'uuid';
import { Order, User, Driver } from './types';

const router = express.Router();

const users = new Map<string, User>();
const orders = new Map<string, Order>();
const drivers = new Map<string, Driver>();

// Manually add a driver and user
const driverOne: Driver = {
  id: '3a9bf929-824a-4864-9c45-effb2bc49d2d',
  username: 'awesomeDriver',
  name: 'Nikhil Dange',
  car: 'Toyota Camry',
}
drivers.set(driverOne.id, driverOne);

const userOne: User = {
    id: 'e1414613-f671-4ad1-85d7-fb5227f856eb',
    username: 'lebronjames123',
    name: 'Lebron James',
    card: 'Discover Student',
    balance: 100,
}
users.set(userOne.id, userOne);

// console.log(drivers);
// console.log(users);

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

// POST a new order
router.post('/order', (req, res) => {
  // TODO

  const order: Order = req.body.order;

  // Check if the user has enough balance
  const userBalance = order.owner.balance;
  if (!userBalance || userBalance < order.cost) {
    return res.status(400).json({ error: 'User balance is too low! '});
  }

  const id = uuid.v4();
  order.id = id;
  orders.set(id, order);
  order.owner.balance -= order.cost;
  return res.status(200).json({ success: true });
});

router.post('/order/:id/accept', (req, res) => {  
  // Not sure about this one
  // Idea is for driver to 'accept' an order -- should it be POST or PATCH?
  // I could include a status field for orders to update?
});

router.post('/user', (req, res) => {
  // TODO
  const user: User = req.body.user;
  const id = uuid.v4();
  user.id = id;
  users.set(id, user);
  return res.status(200).json({ success: true });
});


export default router;