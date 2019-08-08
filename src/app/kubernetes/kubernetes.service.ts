import {Injectable} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {AppsV1Api, CoreV1Api} from '@kubernetes/client-node';
import {Observable, Subject, of} from 'rxjs';

@Injectable()
export class KubernetesService {

  private config;
  private coreV1Api;
  private appsV1Api;
  private coreV1ApiSubject = new Subject<CoreV1Api>();
  private appsV1ApiSubject = new Subject<AppsV1Api>();

  constructor(private electronService: ElectronService) {
    const win = (this.electronService.remote.getCurrentWindow() as any);
    if (this.electronService.isElectronApp) {
      this.coreV1Api = win.coreV1Api;
      this.appsV1Api = win.appsV1Api;
      this.coreV1ApiSubject.next(win.coreV1Api);
      this.appsV1ApiSubject.next(win.appsV1Api);
      this.config = win.config;
    }
  }

  getCoreV1Api(): Observable<CoreV1Api> {
    if (!!this.coreV1Api) {
      return of(this.coreV1Api);
    }
    return this.coreV1ApiSubject.asObservable();
  }

  getAppsV1Api(): Observable<AppsV1Api> {
    if (!!this.appsV1Api) {
      return of(this.appsV1Api);
    }
    return this.appsV1ApiSubject.asObservable();
  }

  getConfig() {
    return this.config;
  }

  validate(yaml: string) {
    return (this.electronService.remote.getCurrentWindow() as any).validate(yaml);
  }
}
