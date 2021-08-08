import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TestComponent} from "./test/test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterViewInit {
  title = 'angular-okten Lesson 6 part3 ';

  @ViewChild(TestComponent)
  testComponent: TestComponent;

  constructor() {
    console.log('constructor');
    console.log(this.testComponent)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    console.log(this.testComponent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterViewInit(): void {
    console.log(this.testComponent.some)
  }


}
