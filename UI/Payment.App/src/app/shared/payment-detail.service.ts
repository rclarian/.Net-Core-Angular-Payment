import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService implements OnDestroy{

  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  formSubmitted: boolean = false;
  private paymentDetailSubscription?: Subscription

  constructor(private http: HttpClient) { }

  refreshList(){
    this.paymentDetailSubscription = this.http.get(this.url)
      .subscribe({
        next: res => {
          //console.log(res);
          this.list = res as PaymentDetail[];
        },
        error: err => {
          console.log(err)
        }
      })
  }

  postPaymentDetail(){
    return this.http.post(this.url, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.url}/${this.formData.paymentDetailId}`, this.formData);
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmitted = false;
  }

  ngOnDestroy(){
    this.paymentDetailSubscription.unsubscribe();
  }
}
