import { Directive, ViewContainerRef } from '@angular/core';
import { ReferencesService } from '../services/references.service';

@Directive({
  selector: '[generateModal]'
})
export class GenerateModalDirective {

  constructor(public vc: ViewContainerRef, private refServices: ReferencesService) { }

  ngOnInit() {
    this.refServices.setVContainer(this.vc)
  }

}
