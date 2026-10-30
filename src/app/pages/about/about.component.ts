import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  currentLang: 'uk' | 'en' = 'uk';

  linesUk = [
    'SOROKA це реальна персона.',
    'Вірить в освіту.',
    'Любить Землю і людство.',
    'Надихається мистецтвом і журналістикою.',
    'Поважає науку і релігію.',
    'Захоплюється мультипланітарністю і космічними мандрівками.',
    'Цінує цивілізацію і SI(AI).',
    'Вдячна ЗСУ і усім, хто допомагає Україні.',
    'Мріє про мир у всьому Світі.'
  ];

  linesEn = [
    'SOROKA is a real person.',
    'Believes in education.',
    'Loves the Earth and humanity.',
    'Is inspired by art and journalism.',
    'Respects science and religion.',
    'Is fascinated by multiplanetary life and space travel.',
    'Values civilization and SI (AI).',
    'Is grateful to the Armed Forces of Ukraine and everyone who helps Ukraine.',
    'Dreams of peace throughout the World.'
  ];

  get lines() {
    return this.currentLang === 'uk' ? this.linesUk : this.linesEn;
  }

  get title() {
    return this.currentLang === 'uk' ? 'Про автора' : 'About the Author';
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }
}
