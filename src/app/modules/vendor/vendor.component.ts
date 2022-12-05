import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private vendorservice:VendorServiceService){ 
    
  }

  vendorlist=this.vendorservice.vendorList;
  ngOnInit(): void {
  }

}
