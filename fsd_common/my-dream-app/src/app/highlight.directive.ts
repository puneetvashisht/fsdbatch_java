import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight(this.highlightColor || 'orange');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color
  }

  constructor(private el: ElementRef) {
      console.log(el);
      // el.nativeElement.style.backgroundColor = 'green'
   }



}
