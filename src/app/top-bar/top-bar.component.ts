import {Component, OnInit} from '@angular/core';
import {KubernetesService} from '../kubernetes/kubernetes.service';
import {KubeConfig} from '@kubernetes/client-node';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  config: KubeConfig;

  constructor(private readonly kubernetesService: KubernetesService) {
  }

  ngOnInit() {
    this.config = this.kubernetesService.getConfig();
  }
}
