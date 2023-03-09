import { Vehicles } from "./vehicle";

export class Orders{
    protected transaction_date: string;
    protected rent: number;
    protected driver: number;
    protected total_orders: number;
    protected order_per_km: number;
    protected total_cost: number;

    constructor(transaction_date: string,rent: number,total_orders: number,total_cost: number,driver: number,order_per_km: number){
        this.transaction_date = transaction_date;
        this.total_orders = total_orders;
        this.total_cost = total_cost;
        this.driver = driver;
        this.order_per_km = order_per_km;
        this.rent = rent;
    }

    getTransactionsDate(): string{
        return this.transaction_date;
    }

    getRent(): number{
        return this.rent;
    }

    getDriver(): number{
        return this.driver;
    }

    getTotalOrders(): number{
        return this.total_orders;
    }

    getOrderPerKm(): number{
        return this.order_per_km;
    }

    getTotalCost(): number{
        return this.total_cost;
    }
}