import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResultDataService {
  private _resultSource = new BehaviorSubject<string>('');
  public result$ = this._resultSource.asObservable();

  constructor() { }

  public updateResult(newResult: string) {
    this._resultSource.next(newResult);
  }
}
