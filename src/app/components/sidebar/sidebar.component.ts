import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HelloWorldComponent } from '../hello-world/hello-world.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HelloWorldComponent],
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
        <button [class.active]="lang === 'uk'" (click)="langChange.emit('uk')">ua</button>
        <span class="sep">|</span>
        <button [class.active]="lang === 'en'" (click)="langChange.emit('en')">eng</button>
      </div>

      <!-- Logo + greeting -->
      <div class="brand-block">
        <a href="https://x.ai" target="_blank" rel="noopener" class="logo-block">
          <div class="logo-circle">
            <img src="assets/logo.png" alt="SOROKA" class="logo-img" />
          </div>
          <span class="grok-link">&amp; Grok</span>
        </a>
        <app-hello-world [lang]="lang"></app-hello-world>
        <div class="halloween-badge">🎃 Happy Halloween</div>
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
}
