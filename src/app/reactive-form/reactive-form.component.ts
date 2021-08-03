import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  username = new FormControl('vasya'); // прив'язка до інпутів
  password = new FormControl('123456');

  myForm: FormGroup = new FormGroup(
    {
      username: this.username,
      password: this.password
    });

  constructor() {
  }

  ngOnInit(): void {
  }

}
