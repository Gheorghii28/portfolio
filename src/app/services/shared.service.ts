import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private focusElementSubject = new Subject<string>();
  focusElement$ = this.focusElementSubject.asObservable();

  triggerFocusElement(elementId: string) {
    this.focusElementSubject.next(elementId);
  }
}
