import { VehicleList } from "./vehicleList";
import { Vehicles, SUV, Taxi, PrivateJet } from "./vehicle";

const suv1 = new SUV('D 1001 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
const suv2 = new SUV('D 1002 UM', 'SUV', 2010, 350000000, 3500000, 4, '10/01/2023', 500000, 150000, 0, 0, 650000);
const suv3 = new SUV('D 1003 UM', 'SUV', 2015, 350000000, 3500000, 5, '12/01/2023', 500000, 150000, 0, 0, 650000);
const suv4 = new SUV('D 1004 UM', 'SUV', 2015, 350000000, 3500000, 5, '13/01/2023', 500000, 150000, 0, 0, 650000);
const taxi1 = new Taxi('D 11 UK', 'Taxi', 2002, 175000000, 1750000, 4, '12/01/2023', 0, 0, 45, 4500, 202500);
const taxi2 = new Taxi('D 12 UK', 'Taxi', 2015, 225000000, 2250000, 4, '13/01/2023', 0, 0, 75, 4500, 337500);
const taxi3 = new Taxi('D 13 UK', 'Taxi', 2020, 275000000, 2750000, 4, '13/01/2023', 0, 0, 90, 4500, 405000);
const jet1 = new PrivateJet('ID8089', 'Private Jet', 2015, 150000000000, 1500000000, 12, '10/01/2023', 35000000, 15000000, 0, 0, 50000000);
const jet2 = new PrivateJet('ID8099', 'Private Jet', 2018, 175000000000, 1750000000, 15, '10/01/2023', 55000000, 25000000, 0, 0, 80000000);

// const suv1 = new SUV('D 1001 UM', 'SUV', 2010, 350000000, 3500000, 4);
// const suv2 = new SUV('D 1002 UM', 'SUV', 2010, 350000000, 3500000, 4);
// const suv3 = new SUV('D 1003 UM', 'SUV', 2015, 350000000, 3500000, 5);
// const suv4 = new SUV('D 1004 UM', 'SUV', 2015, 350000000, 3500000, 5);
// const taxi1 = new Taxi('D 11 UK', 'Taxi', 2002, 175000000, 1750000, 4);
// const taxi2 = new Taxi('D 12 UK', 'Taxi', 2015, 225000000, 2250000, 4);
// const taxi3 = new Taxi('D 13 UK', 'Taxi', 2020, 275000000, 2750000, 4);
// const jet1 = new PrivateJet('ID8089', 'Private Jet', 2015, 150000000000, 1500000000, 12);
// const jet2 = new PrivateJet('ID8099', 'Private Jet', 2018, 175000000000, 1750000000, 15);

let v: Vehicles[] = [suv1, suv2, suv3, suv4,taxi1,taxi2,taxi3,jet1,jet2];

let vehicle_list = new VehicleList(v);
vehicle_list.getVehicles();
vehicle_list.getTotalVehicles('Taxi');
vehicle_list.getTotalVehicles('SUV');
vehicle_list.getTotalVehicles('Private Jet');
vehicle_list.getTotalVehicles('');
vehicle_list.getTotalIncome('SUV');
vehicle_list.getTotalIncome('Taxi');
vehicle_list.getTotalIncome('Private Jet');
vehicle_list.getTotalIncome('');
// console.log(vehicle_list.getVehicles());
