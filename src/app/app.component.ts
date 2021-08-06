import {Component} from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-okten Lesson 6 lazy';

  constructor(private dataService: DataService) {
    this.dataService.getCurrentValue().subscribe(value => this.title = value)
  }

  incrementDataCell() {
    let value = this.dataService.getSnapshotValue();
    this.dataService.setNewValue(++value);
  }
}
