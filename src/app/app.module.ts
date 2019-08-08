import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FileBrowserModule} from './file-browser/file-browser.module';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarModule} from './top-bar/top-bar.module';
import {EditorModule} from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileBrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    TopBarModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
