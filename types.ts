export type Order = {
    id?: string;
    name: string;
    restaurant: string;
    quantity: number;
    instructions: string;
    cost: number;
    owner: string;
    status: string; // Placed, Accepted, Declined, Delivered
}

export type User = {
    id?: string;
    username: string;
    name: string;
    card: string;
    balance: number;
}

export type Driver = {
    id?: string;
    username: string;
    name: string;
    car: string;
}