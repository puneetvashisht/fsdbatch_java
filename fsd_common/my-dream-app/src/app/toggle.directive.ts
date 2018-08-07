import { Directive, ElementRef, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit{

  open: boolean;
  ngOnInit(){
    this.open = false;
  }

  @HostBinding('class.rounded-circle') get propertyName() {
    return this.open;
  }


  @HostListener('click')
  onMouseEnter(){
    console.log('Mouse clicked')
    this.open = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    console.log('Mouse left')
    this.open = false;
  }


  constructor(private el: ElementRef) {
      console.log(el);
      // el.nativeElement.style.backgroundColor = 'green'
   }



}
