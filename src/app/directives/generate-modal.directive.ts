import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[generateModal]'
})
export class GenerateModalDirective {

  constructor(public vc: ViewContainerRef) { }

  ngOnInit() {
    
  }

}
