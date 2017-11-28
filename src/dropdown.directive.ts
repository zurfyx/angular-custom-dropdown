/* tslint:disable:directive-selector */

import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TOGGLE_STATUS } from './toggle-status';

@Directive({
  selector: '[dropdown]',
  exportAs: 'dropdown',
})
export class DropdownDirective {

  private status: TOGGLE_STATUS = TOGGLE_STATUS.CLOSE;
  private status$: Subject<TOGGLE_STATUS> = new Subject<TOGGLE_STATUS>();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) { }

  setActive(active = true) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'active', active);
  }

  toggle() {
    if (this.status === TOGGLE_STATUS.OPEN) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'open', true);
    if (this.status !== TOGGLE_STATUS.OPEN) {
      this.status$.next(TOGGLE_STATUS.OPEN);
    }
    this.status = TOGGLE_STATUS.OPEN;
  }

  close() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'open', false);
    if (this.status !== TOGGLE_STATUS.CLOSE) {
      this.status$.next(TOGGLE_STATUS.CLOSE);
    }
    this.status = TOGGLE_STATUS.CLOSE;
  }

  statusChange(): Observable<TOGGLE_STATUS> {
    return this.status$.asObservable();
  }
}
