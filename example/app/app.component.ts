import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { DropdownDirective, TOGGLE_STATUS } from '../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('myDropdown') myDropdown: DropdownDirective;

  ngOnInit() {
    this.myDropdown.statusChange()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((status: TOGGLE_STATUS) => {
        let statusValue: String;
        /* tslint:disable:no-console */
        if (status === TOGGLE_STATUS.OPEN) {
          statusValue = 'Opened';
        } else if (status === TOGGLE_STATUS.CLOSE) {
          statusValue = 'Closed';
        }
        console.info(`Dropdown status changed to "${statusValue}".`);
        /* tslint:enable:no-console */
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(),
    this.ngUnsubscribe.complete();
  }
}
