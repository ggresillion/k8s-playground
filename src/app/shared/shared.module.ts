import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule, ClrIconModule} from '@clr/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ClarityModule,
    ClrIconModule,
    FormsModule,
  ]
})
export class SharedModule {
}
