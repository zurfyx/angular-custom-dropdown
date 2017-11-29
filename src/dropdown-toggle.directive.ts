import { Directive, Host, HostListener } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[dropdownToggle]',
  exportAs: 'dropdownToggle',
})
export class DropdownToggleDirective {

  constructor(@Host() public dropdown: DropdownDirective) { }

  @HostListener('click')
  toggle() {
    this.dropdown.toggle();
  }
}
