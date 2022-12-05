import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

v!:VendorModel
constructor(private ss:SharedServiceService){}

ngOnInit(): void {
  this.ss.vendors.subscribe((x)=>{
    this.v=x;
  })
  }

}
