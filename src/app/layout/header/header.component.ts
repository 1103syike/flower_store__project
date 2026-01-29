import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageStore } from '../../page/login/store/language.store';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  standalone: true,
  imports: [RouterLink, MatIconModule, MatToolbarModule, MatButtonModule],
})
export class HeaderComponent {
  constructor(private languageStore: LanguageStore) { }
  logo_texts = {
    en: 'Wendy Flower',
    zh: '溫蒂花藝',
    ko: '웬디 플라워',
  }
  
  btn_texts = [
    {
      key: 'All_Products',
      en: 'All Products',
      zh: '所有商品',
      ko: '전체 상품',
    }, {
      key: 'Categories',
      en: 'Categories',
      zh: '商品分類',
      ko: '카테고리',
    },
    {
      key: 'Fresh_Flowers',
      en: 'Fresh Flowers',
      zh: '鮮花',
      ko: '생화',
    },
    {
      key: 'Preserved_Flowers',
      en: 'Preserved Flowers',
      zh: '永生花',
      ko: '프리저브드 플라워',
    },
    {
      key: 'Brand_Story',
      en: 'Brand Story',
      zh: '品牌故事',
      ko: '브랜드 스토리',
    },
  ]
  getText(t: any) {
    return t[this.languageStore.language()];
  }

  getLogo() {
    return this.logo_texts[this.languageStore.language()];
  }
}