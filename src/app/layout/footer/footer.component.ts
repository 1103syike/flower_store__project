import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Component, signal, Signal } from '@angular/core';
import { LanguageStore } from '../../page/login/store/language.store';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule],
})
export class FooterComponent {
  constructor(private languageStore: LanguageStore) { }
  setLanguage(lang: 'zh' | 'en' | 'ko'){
    this.languageStore.language.set(lang);
  }
}