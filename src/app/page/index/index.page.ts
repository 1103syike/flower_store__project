import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { SwiperComponent } from './component/swiper/swiper.componet';
import { FeaturedProducts } from './component/featured-products/featured-products.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent,SwiperComponent,FeaturedProducts,FooterComponent],
  template: `
  <app-header></app-header>
  <app-swiper-component></app-swiper-component>
  <app-featured-products></app-featured-products>
  <app-footer></app-footer>

  `,
})
export class IndexPage {

}
