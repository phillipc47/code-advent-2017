import { Component } from '@angular/core';
import { ResultDataService } from './services/result-service/result-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'code-advent';
  public result: number;
  
  constructor(resultDataService: ResultDataService)   {
    resultDataService.result$.subscribe(result => {
      this.result = result;
    })
   }
}
