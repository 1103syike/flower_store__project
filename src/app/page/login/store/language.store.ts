import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageStore {
    language = signal<'en' | 'zh' | 'ko'>('en');

    set(lang: 'zh' | 'en' | 'ko') {
        this.language.set(lang);
    }
}
