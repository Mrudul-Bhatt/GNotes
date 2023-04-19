import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  titleName$ = new BehaviorSubject<string>('Keep');

  constructor() {}

  setTitleName(titleName: string) {
    this.titleName$.next(titleName);
  }
}
