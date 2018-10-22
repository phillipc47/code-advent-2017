import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResultDataService {
  private _resultSource = new BehaviorSubject<number>(0);
  public result$ = this._resultSource.asObservable();

  constructor() { }

  public updateResult(newResult: number) {
    this._resultSource.next(newResult);
  }
}
