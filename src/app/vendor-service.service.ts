import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  vendorList : VendorModel[] = [
    {name:"Poushali Banik", age:23,city:"Agartala"},
    {name:"Syed Adnan", age:22,city:"Chennai"},
    {name:"Amisha", age:23,city:"Patna"},
    {name:"Ridhi", age:23,city:"Kolkata"},
    {name:"Mano", age:23,city:"Sivagangai"},
  ]
  constructor() { }
}
