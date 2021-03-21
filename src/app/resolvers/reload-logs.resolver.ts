import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataStoreService } from '../services/data-store/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class ReloadLogsResolver implements Resolve<boolean> {
  
  constructor(private datastore: DataStoreService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.datastore.reloadLogs();
    return of(true);
  }
}
