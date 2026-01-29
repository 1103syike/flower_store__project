import { Component, ElementRef, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { InViewDirective } from './in-view.directive';
import { LanguageStore } from '../../../login/store/language.store';

register();
@Component({
  selector: 'app-swiper-component',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [InViewDirective],
  templateUrl: './swiper.componet.html',
  styleUrl: './swiper.componet.css',
})
export class SwiperComponent {
  slides = [
    {
      en_title: `Pre-order and make this<br>Valentine's Day unforgettable`,
      zh_title: `現在預購<br>讓這個情人節難以忘懷`,
      ko_title: `사전 주문하고<br>이 발렌타인데이를 잊지 못할 순간으로 만드세요`,
      img: '/index/swiper-1.webp'
    },
    {
      en_title: `Freshly arrived<br>Dutch-imported tulips.`,
      zh_title: `新鮮到貨<br>荷蘭進口鬱金香`,
      ko_title: `신선하게 도착한<br>네덜란드산 튤립`,
      img: '/index/swiper-2.webp'
    },
    {
      en_title: `The finest preserved flowers<br>for the one you love most.`,
      zh_title: `最頂級的永生花<br>獻給你永恆的、最愛的那個人`,
      ko_title: `가장 소중한 사람을 위한<br>최고급 프리저브드 플라워`,
      img: '/index/swiper-3.webp'
    },
    {
      en_title: `The best wishes<br>for graduates are right here.`,
      zh_title: `給畢業生最好的祝福<br>就在這裡`,
      ko_title: `졸업생을 위한 최고의 축하가<br>바로 여기에 있습니다`,
      img: '/index/swiper-4.webp'
    },
  ];

  show: boolean[] = [];
  @ViewChild('swiper', { static: true }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    const el = this.swiperEl.nativeElement;
    el.initialize();          // 初始化
    el.swiper.update();       // 重算 slide / pagination
  }
  constructor(private languageStore: LanguageStore) { }


  getTitle(s: any) {

    return s[`${this.languageStore.language()}_title`];
  
  }
}
