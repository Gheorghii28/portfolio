import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  public scrollToSection(sectionId: string): void {
    this.scrollSubject.next(sectionId);
  }

  public getScrollSubject(): Observable<string> {
    return this.scrollSubject.asObservable();
  }
}
