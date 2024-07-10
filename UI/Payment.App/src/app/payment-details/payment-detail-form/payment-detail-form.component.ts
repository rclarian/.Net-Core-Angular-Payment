import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent{

  private paymentDetailFormSubscription?: Subscription
  constructor(public service : PaymentDetailService, private toastr: ToastrService ){

  }

  onSubmit(form: NgForm){
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success('Added successfully', 'Payment Detail Register');
        },
        error: err => {
          console.log(err);
        }
      })
    }
  }

}
