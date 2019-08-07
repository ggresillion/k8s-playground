import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxElectronModule} from 'ngx-electron';
import {KubernetesService} from './kubernetes.service';

@NgModule({
  declarations: [],
  providers: [KubernetesService],
  imports: [
    CommonModule,
    NgxElectronModule
  ]
})
export class KubernetesModule {
}
