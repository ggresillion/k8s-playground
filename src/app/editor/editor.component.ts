import {Component, OnInit} from '@angular/core';
import {KubernetesService} from '../kubernetes/kubernetes.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  title = 'k8s-playground';
  editorOptions = {theme: 'vs-dark', language: 'yaml'};
  code = `\
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        ports:
        - containerPort: 80
`;

  constructor(private readonly kubernetesService: KubernetesService) {
  }

  ngOnInit() {
  }

  save() {
    this.kubernetesService.validate(this.code).then(res => console.log(res));
    // this.kubernetesService.getAppsV1Api().subscribe(c => {
    //   const dep = loadYaml<V1Deployment>(this.code);
    //   console.log(dep);
    //   c.createNamespacedDeployment('test', dep)
    //     .then(o => this.code = o.body.toString())
    //     .catch(e => console.log(e.body));
    // });
  }
}
