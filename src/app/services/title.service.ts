import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _title = new BehaviorSubject<string>("");
  currentTitle$ = this._title.pipe(
    distinctUntilChanged()
  );

  constructor() { }

  setTitle(title: string){
    this._title.next(title);
  }
}
