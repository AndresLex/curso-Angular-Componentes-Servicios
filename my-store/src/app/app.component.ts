import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  onLoaded(img: string, imgDefault?: string) {
    console.log('Log Padre', img,imgDefault);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
