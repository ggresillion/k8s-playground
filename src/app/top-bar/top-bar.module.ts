import {NgModule} from '@angular/core';
import {TopBarComponent} from './top-bar.component';
import {SharedModule} from '../shared/shared.module';
import {KubernetesModule} from '../kubernetes/kubernetes.module';


@NgModule({
  declarations: [TopBarComponent],
  imports: [
    SharedModule,
    KubernetesModule,
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
