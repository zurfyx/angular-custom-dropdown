import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@NgModule({
  imports: [],
  exports: [
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
  ],
  declarations: [
    DropdownDirective,
    DropdownToggleDirective,
    DropdownMenuDirective,
  ],
  providers: [],
})
export class DropdownModule { }
