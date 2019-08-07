import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import {FileBrowserModule} from './file-browser/file-browser.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TopBarModule} from './top-bar/top-bar.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule,
    FileBrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
