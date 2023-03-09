import { Vehicles } from "./vehicle";

export class VehicleList{
    protected vehicles: Vehicles[];
    
    constructor(vehicles: Vehicles[]){
        this.vehicles = vehicles;
    }

    setVehicles(vehicles: Vehicles[]){
        this.vehicles = vehicles;
    }

    getVehicles(): void{
        console.log("Kendaraan yang Disewakan:");
        for(let i in this.vehicles){
            this.vehicles[i].listVehicles()
        }
    }

    getTotalVehicles(param): void{
        let total = 0;

        for(let i in this.vehicles){
            if(this.vehicles[i].getVehicleType()==param){
                total++;
            }else if(param==''){
                total++;
            }
        }

        if(param==''){
            console.log(`Total Semua Kendaraan yang disewa: ${total}`);
        }else{
            console.log(`Jumlah Kendaraan Dengan Jenis ${param} yang disewa: ${total}`);
        }
    }

    getTotalIncome(param): void{
        let totalIncome = 0;

        for(let i in this.vehicles){
            if(this.vehicles[i].getVehicleType()==param){
                totalIncome += this.vehicles[i].getVehicleIncome();
            }else if(param==''){
                totalIncome += this.vehicles[i].getVehicleIncome();
            }
        }

        if(param==''){
            console.log(`Total Pendapatan Dari Semua Kendaraan yang disewa: ${totalIncome}`);
        }else{
            console.log(`Total Pendapatan Sewa Dari Kendaraan Jenis ${param}: ${totalIncome}`);
        }
    }
}