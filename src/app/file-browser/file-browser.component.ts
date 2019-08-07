import {Component, OnInit} from '@angular/core';
import {KubernetesService} from '../kubernetes/kubernetes.service';
import {V1DeploymentList} from '@kubernetes/client-node';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {

  deployments: V1DeploymentList;

  constructor(private readonly kubernetesService: KubernetesService) {
  }

  ngOnInit() {
    this.kubernetesService.getAppsV1Api().subscribe(client =>
      client.listDeploymentForAllNamespaces()
        .then(dep => this.deployments = dep.body)
    );
  }

}
