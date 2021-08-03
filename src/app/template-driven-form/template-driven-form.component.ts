import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  user = {
    username: 'Vasya',
    password: '1111',
    status: true,
    gender: 'male',
    level: ['junior']
  }

  constructor() {
    // setTimeout(() =>{
    //   this.user.username = 'kokos'
    // }, 3000)
  }

  ngOnInit(): void {
  }


  save(tref: HTMLFormElement) {
    console.log(tref.username.value)
    // console.log(tref.password.value)
    // console.log(tref.status.value)
    console.log(this.user)
  }
}
