import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabSelectionService {
  private selectedTabSubject = new Subject<string>();
  selectedTab$ = this.selectedTabSubject.asObservable();

  selectTab(tab: string) {
    this.selectedTabSubject.next(tab);
  }
}
