import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-active-vendor',
  templateUrl:'./active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private ss:SharedServiceService) { }
 @Input() vendor:VendorModel[]=[];
 
 selvendor?:VendorModel;
 onPressd(ven:VendorModel):void{
   this.selvendor=ven;
  this.ss.setVendor(this.selvendor)
   console.log(ven);
 }
  ngOnInit(): void {
  }

}
