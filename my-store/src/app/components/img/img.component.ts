import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ',this.img);

    //code
  }

  // @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;


// Ciclo de vida de componentes

// el constructor es el primer elemento en correr
// Before render => Corre antes del render
  constructor() {
    // Se corre de forma inmediata
    // solo se corre una vez  --No async
    console.log('constructor', 'imgValue =>', this.img);
  }

  // Corre antes y durante el render su objetivo es actualizar los cambios en los @Inputs
  // corre muchas veces "once time"
  ngOnChanges(changes: SimpleChanges) {
    // before & during render
    // detectar cambios en @Input
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
    // if (changes.){

    // }
  }

  // Corre antes de renderizarce "before render"
  // aqui si se pueden hacer llamadas asincronas
  // pero solo se va correr una vez
  ngOnInit(): void{
    // Before render
    // aync - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  // Corre despues de que todo este renderizando
  // normalmente aqui se manejan los hijos
  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  // Cuando se elimina un componente se ejecuta OnDestroy
  // Se corre solo cuando se elimina algun componente
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }
}
