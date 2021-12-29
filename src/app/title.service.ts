import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title = 'Home'

  constructor() { }

  getTitle(): Observable<string> {
    return of(this.title);
  }

  setTitle(title: string): void {
    this.title = title;
  }
}
