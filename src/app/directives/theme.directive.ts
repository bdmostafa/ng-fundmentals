import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @Input('appTheme') defaultColor?: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('white')
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  setBoxShadow(px: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'boxShadow',
      px
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('bisque')
    this.setBoxShadow('0 15px 30px 0 bisque, 0 5px 15px 0 bisque')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor(this.defaultColor)
    this.setBoxShadow('')
  }

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('white')
    }
  }

}
