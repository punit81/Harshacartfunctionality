import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //age: new FormControl(21, [Validators.required]),
    age: new FormControl(21, {updateOn: 'change', validators:[Validators.required]}),
    pincode: new FormControl(null, [Validators.required, this.pincodeValidator()]),
   },
   {updateOn: 'submit'}
  );
  constructor() { }

  ngOnInit(): void {
  }

  pincodeValidator(){
    return (control: AbstractControl) => {
      if(control.value == 123456){
        return null;
      }
      return {
        // name_of_error: information_related_to_error
        zipcode: {
          allowedCode: 123456,
          enteredCode: control.value,
        }
      }
    }
  }

  submitData(){
    if(this.checkoutForm.valid){
    //if(this.checkoutForm.get('name')?.valid){
    console.log("FORM SUBMISSION", this.checkoutForm.value);
    } else {
      console.log("VALIDATION LOGIC")
    }

  }

  loadData() {
    const data: any = {
      name: 'test',
      age: 12,
      pincode: 123456,
    };
    this.checkoutForm.setValue(data); // only when the structure of the data & form is same
  }

  patchData() {
    const data: any = {
      name: 'test',
      age: 12,
    };
    this.checkoutForm.patchValue(data); // when the structure of the data & form is not matching
  }

}
