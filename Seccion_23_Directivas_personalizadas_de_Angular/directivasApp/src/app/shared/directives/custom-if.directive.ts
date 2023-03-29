import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  //structural directive <ng-template>
  @Input() set customIf(condicion: boolean) {
    if(condicion) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<ElementRef>,
    private viewContainer: ViewContainerRef
  ) { 
    console.log('templateRef', templateRef);
    console.log('viewContainer', viewContainer);
    
  }

}
