//Para poder hacer uso y manipulacion del DOM se importa el servicio ElementRef al ser un servicio se hace inyeccion de dependencias
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Las directiva tambien pueden escuchar eventos del elemento que implementa la directiva "elemento host"
  // Con el uso del decorador @HostListener
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}
