import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  //whenever I want to use this directive I need to use this selector '[appHighlight]'
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
      private renderer: Renderer2) { }

  //@HostListener --> for mouse moves(enters, leaves)
  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }

}
