"use strict";
exports.__esModule = true;
exports.VehicleList = void 0;
var VehicleList = /** @class */ (function () {
    function VehicleList(vehicles) {
        this.vehicles = vehicles;
    }
    VehicleList.prototype.setVehicles = function (vehicles) {
        this.vehicles = vehicles;
    };
    VehicleList.prototype.getVehicles = function () {
        console.log("Kendaraan yang Disewakan:");
        for (var i in this.vehicles) {
            this.vehicles[i].listVehicles();
        }
    };
    VehicleList.prototype.getTotalVehicles = function (param) {
        var total = 0;
        for (var i in this.vehicles) {
            if (this.vehicles[i].getVehicleType() == param) {
                total++;
            }
            else if (param == '') {
                total++;
            }
        }
        if (param == '') {
            console.log("Total Semua Kendaraan yang disewa: ".concat(total));
        }
        else {
            console.log("Jumlah Kendaraan Dengan Jenis ".concat(param, " yang disewa: ").concat(total));
        }
    };
    VehicleList.prototype.getTotalIncome = function (param) {
        var totalIncome = 0;
        for (var i in this.vehicles) {
            if (this.vehicles[i].getVehicleType() == param) {
                totalIncome += this.vehicles[i].getVehicleIncome();
            }
            else if (param == '') {
                totalIncome += this.vehicles[i].getVehicleIncome();
            }
        }
        if (param == '') {
            console.log("Total Pendapatan Dari Semua Kendaraan yang disewa: ".concat(totalIncome));
        }
        else {
            console.log("Total Pendapatan Sewa Dari Kendaraan Jenis ".concat(param, ": ").concat(totalIncome));
        }
    };
    return VehicleList;
}());
exports.VehicleList = VehicleList;
