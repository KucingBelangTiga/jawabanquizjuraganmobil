"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PrivateJet = exports.Taxi = exports.SUV = exports.Vehicles = void 0;
var Vehicles = /** @class */ (function () {
    function Vehicles(vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, vehicleType) {
        this.vehicleYear = vehicleYear;
        this.vehiclePrice = vehiclePrice;
        this.vehicleTax = vehicleTax;
        this.vehicleSeat = vehicleSeat;
        this.vehicleType = vehicleType;
    }
    Vehicles.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    Vehicles.prototype.getVehicleYear = function () {
        return this.vehicleYear;
    };
    Vehicles.prototype.getVehiclePrice = function () {
        return this.vehiclePrice;
    };
    Vehicles.prototype.getVehicleTax = function () {
        return this.vehicleTax;
    };
    Vehicles.prototype.getVehicleSeat = function () {
        return this.vehicleSeat;
    };
    Vehicles.prototype.listVehicles = function () {
        console.log("");
    };
    Vehicles.prototype.getVehicleIncome = function () {
        var a = 1;
        return a;
    };
    return Vehicles;
}());
exports.Vehicles = Vehicles;
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(vehicleNumber, vehicleType, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, transactionDate, rent, driver, order, orderPerKM, total) {
        var _this = _super.call(this, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, vehicleType) || this;
        _this.vehicleNumber = vehicleNumber;
        _this.transactionDate = transactionDate;
        _this.rent = rent;
        _this.driver = driver;
        _this.order = order;
        _this.orderPerKM = orderPerKM;
        _this.total = total;
        return _this;
    }
    SUV.prototype.listVehicles = function () {
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('---------------------------------------------------------------------------------------------------------------');
    };
    SUV.prototype.getInfoPurchase = function () {
        return "Nopol: ".concat(this.vehicleNumber, ", Model: ").concat(this.vehicleType, ", Tahun: ").concat(this.vehicleYear, ", Harga: ").concat(this.vehiclePrice, ", Pajak: ").concat(this.vehicleTax, ", Jumlah Kursi: ").concat(this.vehicleSeat);
    };
    SUV.prototype.getInfoIncome = function () {
        return "Tanggal Transaksi: ".concat(this.transactionDate, ", Harga Sewa: ").concat(this.rent, ", Biaya Supir: ").concat(this.driver, ", Biaya Total: ").concat(this.total);
    };
    SUV.prototype.getVehicleIncome = function () {
        var a = this.total;
        return a;
    };
    return SUV;
}(Vehicles));
exports.SUV = SUV;
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(vehicleNumber, vehicleType, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, transactionDate, rent, driver, order, orderPerKM, total) {
        var _this = _super.call(this, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, vehicleType) || this;
        _this.vehicleNumber = vehicleNumber;
        _this.transactionDate = transactionDate;
        _this.rent = rent;
        _this.driver = driver;
        _this.order = order;
        _this.orderPerKM = orderPerKM;
        _this.total = total;
        return _this;
    }
    Taxi.prototype.listVehicles = function () {
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('---------------------------------------------------------------------------------------------------------------');
    };
    Taxi.prototype.getInfoPurchase = function () {
        return "Nopol: ".concat(this.vehicleNumber, ", Model: ").concat(this.vehicleType, ", Tahun: ").concat(this.vehicleYear, ", Harga: ").concat(this.vehiclePrice, ", Pajak: ").concat(this.vehicleTax, ", Jumlah Kursi: ").concat(this.vehicleSeat);
    };
    Taxi.prototype.getInfoIncome = function () {
        return "Tanggal Transaksi: ".concat(this.transactionDate, ", Total KM: ").concat(this.rent, ", Biaya Per KM: ").concat(this.driver, ", Biaya Total: ").concat(this.total);
    };
    Taxi.prototype.getVehicleIncome = function () {
        var a = this.total;
        return a;
    };
    return Taxi;
}(Vehicles));
exports.Taxi = Taxi;
var PrivateJet = /** @class */ (function (_super) {
    __extends(PrivateJet, _super);
    function PrivateJet(vehicleNumber, vehicleType, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, transactionDate, rent, driver, order, orderPerKM, total) {
        var _this = _super.call(this, vehicleYear, vehiclePrice, vehicleTax, vehicleSeat, vehicleType) || this;
        _this.vehicleNumber = vehicleNumber;
        _this.transactionDate = transactionDate;
        _this.rent = rent;
        _this.driver = driver;
        _this.order = order;
        _this.orderPerKM = orderPerKM;
        _this.total = total;
        return _this;
    }
    PrivateJet.prototype.listVehicles = function () {
        console.log(this.getInfoPurchase());
        console.log(this.getInfoIncome());
        console.log('----------------------------------------------------------------------------------------------------------------');
    };
    PrivateJet.prototype.getInfoPurchase = function () {
        return "Nopol: ".concat(this.vehicleNumber, ", Model: ").concat(this.vehicleType, ", Tahun: ").concat(this.vehicleYear, ", Harga: ").concat(this.vehiclePrice, ", Pajak: ").concat(this.vehicleTax, ", Jumlah Kursi: ").concat(this.vehicleSeat);
    };
    PrivateJet.prototype.getInfoIncome = function () {
        return "Tanggal Transaksi: ".concat(this.transactionDate, ", Harga Sewa: ").concat(this.rent, ", Biaya Pilot: ").concat(this.driver, ", Biaya Total: ").concat(this.total);
    };
    PrivateJet.prototype.getVehicleIncome = function () {
        var a = this.total;
        return a;
    };
    return PrivateJet;
}(Vehicles));
exports.PrivateJet = PrivateJet;
