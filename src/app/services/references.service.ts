import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  public vContainerRef: ViewContainerRef;
  constructor() { }

  setVContainer(containerRef: ViewContainerRef){
    this.vContainerRef = containerRef;
  }

  getVContainer(){
    return this.vContainerRef;
  }
}
