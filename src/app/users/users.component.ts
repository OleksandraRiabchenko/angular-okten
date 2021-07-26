import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 20, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'nastya', age: 31, status: false},
    {id: 6, name: 'darina', age: 30, status: true},
    {id: 7, name: 'karina', age: 15, status: false},
    {id: 8, name: 'max', age: 32, status: true}
  ];

  constructor() {
  }

}
