export type Order = {
    id?: string;
    name: string;
    restaurant: string;
    quantity: number;
    instructions: string;
    owner: User;
}

export type User = {
    id?: string;
    username: string;
    name: string;
    card: string;
}

export type Driver = {
    id?: string;
    username: string;
    name: string;
    car: string;
    orders: number;
}