// import e from 'express';
import express from 'express';
import * as uuid from 'uuid';
import { Order, User, Driver } from './types';

const router = express.Router();

// Our database, for now!
const users = new Map<string, User>();
const orders = new Map<string, Order>();
const drivers = new Map<string, Driver>();

// Manually add a driver, user, and order
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

const testOrder: Order = {
  id: '407d7b6b-08d0-4e29-b1fd-e9832cec8c54',
  name: "Chicken Pad Thai",
  restaurant: "Blue Pepper",
  quantity: 1,
  instructions: 'Leave on front porch.',
  cost: 15,
  owner: 'e1414613-f671-4ad1-85d7-fb5227f856eb',
  status: 'Placed'
}
orders.set(testOrder.id, testOrder);

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

  // 1. Obtain the user's balance

  // 2. Validate if the balance is too low

  // 3. Create a uuid for the order, and set the order as placed

  // 4. Update user balance and database

});

router.post('/order/:id/accept', (req, res) => {  
  // TODO


  // 1. Obtain the order from our database


  // 2. Check if the order status is valid for acceptance


  // 3. Mark the status as accepted and update the database

});

router.post('/user', (req, res) => {
  // TODO

});


export default router;