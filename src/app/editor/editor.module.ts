import {NgModule} from '@angular/core';
import {EditorComponent} from './editor.component';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [EditorComponent],
  exports: [
    EditorComponent
  ],
  imports: [
    SharedModule,
    MonacoEditorModule,
  ]
})
export class EditorModule {
}
