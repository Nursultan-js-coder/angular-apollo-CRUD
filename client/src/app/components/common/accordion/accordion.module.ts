import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  bootstrap: [AccordionComponent]
})
export class NgbdAccordionBasicModule {}
