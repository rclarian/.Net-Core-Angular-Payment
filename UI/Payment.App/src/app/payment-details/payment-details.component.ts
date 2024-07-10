import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{
  
  constructor(public service : PaymentDetailService){

  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  ngOnInit() {
    this.service.refreshList();
  }
}
