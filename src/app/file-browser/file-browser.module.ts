import {NgModule} from '@angular/core';
import {FileBrowserComponent} from './file-browser.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FileBrowserComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    FileBrowserComponent
  ]
})
export class FileBrowserModule { }
