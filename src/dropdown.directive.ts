/* tslint:disable:directive-selector */

import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dropdown]',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  }
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) { }

  onDocumentClick(event: Event) {
    const isOutsideClick = !this.elementRef.nativeElement.contains(event.target);
    const isLinkClick = event.target instanceof HTMLLinkElement;
    if (isOutsideClick) {
      this.setActive(false);
      return;
    }
    this.setActive(true);
  }

  setActive(active = true) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'active', active);
  }
}
