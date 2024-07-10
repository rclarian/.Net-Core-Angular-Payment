import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent{

  private paymentDetailFormSubscription?: Subscription
  constructor(public service : PaymentDetailService ){

  }

  onSubmit(form: NgForm){
     this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      })
  }

  // ngOnDestroy(){
  //   this.paymentDetailFormSubscription.unsubscribe();
  // }

  // ngOnInit() {
  //   this.service.refreshList();
  // }

  

}
