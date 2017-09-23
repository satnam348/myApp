import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgUnless]'
})
export class NgUnlessDirective {
@Input() set appNgUnless(condition: boolean)
{
if (condition) {
this.viewRef.createEmbeddedView(this.tempRef);
}else {
this.viewRef.clear();
  }
}
  constructor(private tempRef: TemplateRef<any>, private viewRef: ViewContainerRef  ) { }

}
