import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaymentDetail } from '../../shared/payment-detail.model';


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
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
        },
        error: err => {
          console.log(err);
        }
      })
  }

}
