import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k8s-playground';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';
  originalCode = 'function x() { // TODO }';
}
