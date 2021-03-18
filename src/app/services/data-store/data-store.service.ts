import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  
  labels = new Array<String>();  
  
  constructor() { }
  
}
