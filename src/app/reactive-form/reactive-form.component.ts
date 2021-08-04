import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  customValidator(inputValue:AbstractControl) {
    console.log(inputValue)
    if(inputValue.value.includes('duck')) {
      return {achtung: 'duck word is present'}
    }

    return null; // -> errors (для того щоб валідатор хоть щось повертав і не видавав помилку)
  }
  username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), this.customValidator]);
  password = new FormControl('');


  myForm: FormGroup = new FormGroup(
    {
      username: this.username,
      password: this.password
    });

  constructor() {
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.myForm)
  }
}
