import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  vendors=new Subject<VendorModel>();
  ve?:VendorModel;
  setVendor(vendor:VendorModel)
  {
    this.ve=vendor;
    this.vendors.next(vendor);
  }

}
