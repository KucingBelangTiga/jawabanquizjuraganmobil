import { VehicleList } from "./vehicleList";
import { Vehicles, SUV, Taxi, PrivateJet } from "./vehicle";

export class VehiclesInfo{
    protected year: number;
    protected price: number;
    protected tax: number;
    protected seat: number;
    protected type: string;
    protected number: string;
    // INCOME
    protected tdate: string;
    protected rent: number;
    protected driver: number;
    protected order: number;
    protected order_per_km: number;
    protected total: number;

    constructor(number: string,
        type: string,
        year: number,
        price: number,
        tax: number,
        seat: number,
        tdate: string,
        rent: number,
        driver: number,
        order: number,
        order_per_km: number,
        total: number){
            this.number = number;
            this.type = type;
            this.year = year;
            this.price = price;
            this.tax = tax;
            this.seat =seat;
            this.tdate = tdate;
            this.rent =rent;
            this.driver = driver;
            this.order = order;
            this.order_per_km = order_per_km;
            this.total = total;
        }

    infoSplitter(){
        if(this.type == 'SUV'){
            let info_purchase = new SUV(this.number, this.type, this.year, this.price, this.tax, this.seat); 
            // let info_income = new Income(this.number, this.tdate, this.rent, this.driver, this.order, this.order_per_km, this.total)
        }else if(this.type == 'Taxi'){
    
        }else if(this.type == 'Private Jet'){
    
        }
    }
}