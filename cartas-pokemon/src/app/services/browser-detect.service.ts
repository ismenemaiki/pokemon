import { Injectable } from '@angular/core';
import { BrowserInfo, detect } from 'detect-browser';

@Injectable({ providedIn: 'root' })
export class BrowserDetectService {
  private browser: BrowserInfo;

  constructor() {
    this.browser = <BrowserInfo>detect();
  }

  isMobile(): boolean {
    return ['iOS', 'Android OS', 'BlackBarry OS', 'Windows Mobile'].includes(
      this.browser.os
    );
  }
  isDesktop(): boolean {
    return !this.isMobile();
  }
}
