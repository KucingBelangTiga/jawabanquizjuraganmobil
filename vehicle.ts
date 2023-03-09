export class Vehicles{
    protected vehicleYear: number;
    protected vehiclePrice: number;
    protected vehicleTax: number;
    protected vehicleSeat: number;
    protected vehicleType: string;

    constructor(vehicleYear: number,vehiclePrice: number,vehicleTax: number,vehicleSeat: number,vehicleType: string){
        this.vehicleYear = vehicleYear;
        this.vehiclePrice = vehiclePrice;
        this.vehicleTax = vehicleTax;
        this.vehicleSeat = vehicleSeat;
        this.vehicleType = vehicleType;
    }

    getVehicleType(){
        return this.vehicleType;
    }

    getVehicleYear(): number{
        return this.vehicleYear;
    }

    getVehiclePrice(): number{
        return this.vehiclePrice;
    }

    getVehicleTax(): number{
        return this.vehicleTax;
    }

    getVehicleSeat(): number{
        return this.vehicleSeat;
    }

    listVehicles(): void{
        console.log(``)
    }

    getVehicleIncome(): number{
        let a=1;
        return a;
    }
}

export class SUV extends Vehicles{
    private vehicleNumber: string;
    private transactionDate: string;
    private rent: number;
    private driver: number;
    private order: number;
    private orderPerKM: number;
    private total: number;

    constructor(vehicleNumber: string,vehicleType: string, vehicleYear: number,vehiclePrice: number,vehicleTax: number,vehicleSeat: number,transactionDate: string, rent: number, driver: number,order: number,orderPerKM: number,total: number,
    ){
        super(vehicleYear,vehiclePrice,vehicleTax,vehicleSeat,vehicleType);
        this.vehicleNumber = vehicleNumber;
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
        this.total = total;
    }

    listVehicles(): void{
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('---------------------------------------------------------------------------------------------------------------');
    }

    getInfoPurchase(): string{
        return `Nopol: ${this.vehicleNumber}, Model: ${this.vehicleType}, Tahun: ${this.vehicleYear}, Harga: ${this.vehiclePrice}, Pajak: ${this.vehicleTax}, Jumlah Kursi: ${this.vehicleSeat}`
    }

    getInfoIncome(): string{
        return `Tanggal Transaksi: ${this.transactionDate}, Harga Sewa: ${this.rent}, Biaya Supir: ${this.driver}, Biaya Total: ${this.total}`
    }

    getVehicleIncome(): number{
        let a = this.total;
        return a;
    }
}

export class Taxi extends Vehicles{
    private vehicleNumber: string;
    private transactionDate: string;
    private rent: number;
    private driver: number;
    private order: number;
    private orderPerKM: number;
    private total: number;

    constructor(vehicleNumber: string,vehicleType: string, vehicleYear: number,vehiclePrice: number,vehicleTax: number,vehicleSeat: number,transactionDate: string, rent: number, driver: number,order: number,orderPerKM: number,total: number,
    ){
        super(vehicleYear,vehiclePrice,vehicleTax,vehicleSeat,vehicleType);
        this.vehicleNumber = vehicleNumber;
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
        this.total = total;
    }

    listVehicles(): void{
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('---------------------------------------------------------------------------------------------------------------');
    }

    getInfoPurchase(): string{
        return `Nopol: ${this.vehicleNumber}, Model: ${this.vehicleType}, Tahun: ${this.vehicleYear}, Harga: ${this.vehiclePrice}, Pajak: ${this.vehicleTax}, Jumlah Kursi: ${this.vehicleSeat}`
    }

    getInfoIncome(): string{
        return `Tanggal Transaksi: ${this.transactionDate}, Total KM: ${this.rent}, Biaya Per KM: ${this.driver}, Biaya Total: ${this.total}`
    }

    getVehicleIncome(): number{
        let a = this.total;
        return a;
    }
}

export class PrivateJet extends Vehicles{
    private vehicleNumber: string;
    private transactionDate: string;
    private rent: number;
    private driver: number;
    private order: number;
    private orderPerKM: number;
    private total: number;

    constructor(vehicleNumber: string,vehicleType: string, vehicleYear: number,vehiclePrice: number,vehicleTax: number,vehicleSeat: number,transactionDate: string, rent: number, driver: number,order: number,orderPerKM: number,total: number,
    ){
        super(vehicleYear,vehiclePrice,vehicleTax,vehicleSeat,vehicleType);
        this.vehicleNumber = vehicleNumber;
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
        this.total = total;
    }

    listVehicles(): void{
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('----------------------------------------------------------------------------------------------------------------');
    }

    getInfoPurchase(): string{
        return `Nopol: ${this.vehicleNumber}, Model: ${this.vehicleType}, Tahun: ${this.vehicleYear}, Harga: ${this.vehiclePrice}, Pajak: ${this.vehicleTax}, Jumlah Kursi: ${this.vehicleSeat}`
    }

    getInfoIncome(): string{
        return `Tanggal Transaksi: ${this.transactionDate}, Harga Sewa: ${this.rent}, Biaya Pilot: ${this.driver}, Biaya Total: ${this.total}`
    }

    getVehicleIncome(): number{
        let a = this.total;
        return a;
    }
}