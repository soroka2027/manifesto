import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <!-- Mobile top nav -->
      <nav class="mobile-nav">
        @for (item of menuItems; track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="item.exact ? { exact: true } : { exact: false }"
            class="mobile-nav-link">
            {{ lang === 'uk' ? item.labelUk : item.labelEn }}
          </a>
        }
      </nav>

      <!-- Language -->
      <div class="lang-switch">
        <button type="button" [class.active]="lang === 'uk'" (click)="langChange.emit('uk')">ua</button>
        <span class="sep">|</span>
        <button type="button" [class.active]="lang === 'en'" (click)="langChange.emit('en')">eng</button>
      </div>

      <!-- Logo centered + seasonal decor -->
      <div class="brand-block">
        <div class="logo-wrap">
          <div class="logo-circle" aria-hidden="false">
            <img src="assets/logo.png" alt="SOROKA" class="logo-img" />
          </div>
          <span class="season-bell" title="Carol of the Bells / Щедрик" aria-hidden="true">🔔</span>
          <span class="season-candle" title="{{ lang === 'uk' ? 'Світла пам\\'ять' : 'In memory' }}" aria-hidden="true">🕯️</span>
        </div>

        <div class="season-block">
          <div class="spruce" aria-hidden="true">
            <span class="spruce-branch">🌲</span>
            <span class="spruce-star">✨</span>
            <span class="spruce-snow">❄</span>
          </div>
          <p class="season-greeting">{{ seasonGreeting }}</p>
        </div>
      </div>

      <!-- Desktop vertical menu -->
      <nav class="desktop-menu">
        @for (item of menuItems; track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="item.exact ? { exact: true } : { exact: false }"
            class="menu-link">
            {{ lang === 'uk' ? item.labelUk : item.labelEn }}
          </a>
        }
      </nav>
    </aside>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() lang: 'uk' | 'en' = 'uk';
  @Output() langChange = new EventEmitter<'uk' | 'en'>();

  menuItems = [
    { path: '/', labelUk: 'Головна', labelEn: 'Home', exact: true },
    { path: '/manifest', labelUk: 'Маніфест', labelEn: 'Manifesto', exact: false },
    { path: '/behind-scenes', labelUk: 'За лаштунками', labelEn: 'Behind the Scenes', exact: false },
    { path: '/about', labelUk: 'Про автора', labelEn: 'About the Author', exact: false },
    { path: '/infospace', labelUk: 'Інфопростір', labelEn: 'Infospace', exact: false },
    { path: '/visualization', labelUk: 'Візуалізація', labelEn: 'Visualization', exact: false }
  ];

  /** Seasonal greeting by calendar date (local). */
  get seasonGreeting(): string {
    const now = new Date();
    const month = now.getMonth() + 1; // 1–12
    const day = now.getDate();

    // St Nicholas: through 6 December
    if (month < 12 || (month === 12 && day <= 6)) {
      return this.lang === 'uk' ? 'З Днем Святого Миколая!' : 'Happy Saint Nicholas Day!';
    }
    // Christmas season: 7–30 December
    if (month === 12 && day >= 7 && day <= 30) {
      return this.lang === 'uk' ? 'З Різдвом Христовим!' : 'Merry Christmas!';
    }
    // New Year: 31 Dec and January
    if ((month === 12 && day >= 31) || month === 1) {
      return this.lang === 'uk' ? 'З Новим 2027 роком!' : 'Happy New Year 2027!';
    }
    // Rest of year — quiet hope line
    return this.lang === 'uk' ? 'Світло з нами.' : 'Light is with us.';
  }
}
