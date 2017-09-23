import { Directive, ElementRef, HostListener, Input, OnInit , Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class AppDirective  implements OnInit {
@Input() bgcolor: String = '#000';
@Input() color: String = '#fff';
  constructor(private el: ElementRef, private render: Renderer2) { }
 ngOnInit() {
   console.log(this.el);
 this.el.nativeElement.style.backgroundColor = this.bgcolor;
 this.el.nativeElement.style.padding = '20px';
 this.el.nativeElement.style.color = this.color;
 this.el.nativeElement.style.textAlign = 'center';
// this.render.setStyle(this.el.nativeElement, 'color', '#000');
 }
@HostListener('window:scroll', [])
onWindowScroll() {
this.el.nativeElement.style.fontSize = parseInt(this.el.nativeElement.style.fontSize, 10) + 1 + 'px';
}
@HostListener('mouseenter') onMouseEnter() {
  // this.highlight('yellow');
this.render.setStyle(this.el.nativeElement, 'fontSize', '72px');
}

@HostListener('mouseleave') onMouseLeave() {
 // this.highlight(null);
  this.render.setStyle(this.el.nativeElement, 'fontSize', '30px');
}
private highlight(color: string) {
  // this.el.nativeElement.style.backgroundColor = color;
}
}
