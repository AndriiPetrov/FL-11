import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sourceName: string = 'Source Name';

  arrayOfNews: any = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.arrayOfNews = this.data.getAll();
  }

  changeSourceName() {
    // this.sourceName = 
  }
}
