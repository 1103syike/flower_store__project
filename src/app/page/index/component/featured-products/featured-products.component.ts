import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { LanguageStore } from '../../../login/store/language.store';

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProducts {
  products = [
    {
      id: 1,
      en_name: `Spring Glow Basket`,
      zh_name: `春日微光花籃`,
      ko_name: `봄빛 바구니`,
      img: '/products/fresh-flower-01.webp',
      price: 'NT$1,780',
      type: 'Flower_In_Box'
    },
    {
      id: 2,
      en_name: `Soft Spring Basket`,
      zh_name: `柔春花籃`,
      ko_name: `부드러운 봄 바구니`,
      img: '/products/fresh-flower-02.webp',
      price: 'NT$2,280',
      type: 'Flower_In_Box'
    },
    {
      id: 3,
      en_name: `Pure White Tulip Bouquet`,
      zh_name: `純白鬱金香花束`,
      ko_name: `순백의 튤립 꽃다발`,
      img: '/products/fresh-flower-03.webp',
      price: 'NT$1,980',
      type: 'Collection'
    },
    {
      id: 4,
      en_name: `White Daisy Whisper`,
      zh_name: `白雛菊低語`,
      ko_name: `하얀 데이지의 속삭임`,
      img: '/products/fresh-flower-04.webp',
      price: 'NT$1,680',
      type: 'Collection'
    },
  ];
  filters = [
    {
      key: 'all',
      action: 'showAll',
      title: {
        en: 'All',
        zh: '所有商品',
        ko: '전체',
      },
    },
    {
      key: 'exclusive',
      action: 'showCollection',
      title: {
        en: 'Exclusive Collection',
        zh: '限定系列',
        ko: '익스클루시브 컬렉션',
      },
    },
    {
      key: 'box',
      action: 'showFlowerInBox',
      title: {
        en: 'Flowers in a Box',
        zh: '盒裝花禮',
        ko: '박스 플라워',
      },
    },
  ];
  onFilter(action: string) {
    (this as any)[action]();
  }

  showList = signal('All');

  showAll() {
    this.showList.set('All')
  }
  showCollection() {
    this.showList.set('Collection')
  }

  showFlowerInBox() {
    this.showList.set('Flower_In_Box')
  }

  constructor(public languageStore: LanguageStore) { }
  getProductName(product: any) {
    return product[`${this.languageStore.language()}_name`];
  }

  title = {
    en: 'Popular categories',
    zh: '熱門分類',
    ko: '인기 카테고리',
  }

    getTitle() {
    return this.title[this.languageStore.language()];
  }
}
