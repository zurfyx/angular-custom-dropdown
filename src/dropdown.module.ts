import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [],
  exports: [DropdownDirective],
  declarations: [DropdownDirective],
  providers: [],
})
export class DropdownModule {
  constructor() {
    console.info('loaded module');
  }
 }