import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface SourceItem {
  id: string;
  nameUk: string;
  nameEn: string;
  link: string;
  iconImg: string | null;
  iconText: string;
  iconBg: string;
  iconColor: string;
  preview1?: string;
  preview2?: string;
  cardTitleUk: string;
  cardTitleEn: string;
  commentUk: string;
  commentEn: string;
}

@Component({
  selector: 'app-infospace',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './infospace.component.html',
  styleUrls: ['./infospace.component.scss']
})
export class InfospaceComponent implements OnDestroy {
  @ViewChild('heroBlock') heroBlock?: ElementRef<HTMLElement>;
  currentLang: 'uk' | 'en' = 'uk';
  /** Active source for tip (hover on desktop, tap on mobile) */
  activeId: string | null = null;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;
  /** 60s inactivity then tip closes (especially mobile) */
  private readonly hideDelayMs = 60_000;

  mottoUk =
    'Слухай багатьох, аналізуй, перевіряй факти, руйнуй шаблони: правда не боїться твоїх запитань, істина витримує будь-яку критику.';
  mottoEn =
    'Listen to many, analyze, check the facts, break the patterns: truth is not afraid of your questions; truth withstands any criticism.';

  sources: SourceItem[] = [
    {
      id: 'kartonky',
      nameUk: 'Картонки',
      nameEn: 'Kartonky',
      link: 'https://kartonky.propellercrew.com/',
      iconImg: 'assets/source-kartonky-logo.svg',
      iconText: '',
      iconBg: '#111',
      iconColor: '#fff',
      preview1: 'assets/source-kartonky-preview1.png',
      preview2: 'assets/source-kartonky-preview2.jpg',
      cardTitleUk: 'Картонки — голоси з площі',
      cardTitleEn: 'Kartonky — voices from the square',
      commentUk:
        'Народна галерея протестних плакатів. Картонка — це кілька слів, які хтось написав від руки і виніс на вулицю. Тут вони залишаються. Голос народу.',
      commentEn:
        'A people’s gallery of protest signs. A cardboard is a few words someone wrote by hand and took to the street. Here they remain. The voice of the people.'
    },
    {
      id: 'nabu',
      nameUk: 'NABU',
      nameEn: 'NABU',
      link: 'https://nabu.gov.ua/',
      iconImg: null,
      iconText: '▲',
      iconBg: '#0a0a0a',
      iconColor: '#f5c518',
      cardTitleUk: 'Національне антикорупційне бюро',
      cardTitleEn: 'National Anti-Corruption Bureau',
      commentUk: 'Офіційне джерело розслідувань топкорупції.',
      commentEn: 'Official source of top-corruption investigations.'
    },
    {
      id: 'up',
      nameUk: 'Українська правда',
      nameEn: 'Ukrainska Pravda',
      link: 'https://www.pravda.com.ua/',
      iconImg: null,
      iconText: 'УП',
      iconBg: '#7a1520',
      iconColor: '#fff',
      cardTitleUk: 'Українська правда',
      cardTitleEn: 'Ukrainska Pravda',
      commentUk: 'Читаю, порівнюю, перевіряю факти.',
      commentEn: 'I read, compare, check the facts.'
    },
    {
      id: 'epytannia',
      nameUk: 'Є Питання',
      nameEn: 'Ye Pytannia',
      link: 'https://www.youtube.com/@Yepytannia',
      iconImg: null,
      iconText: 'є?',
      iconBg: '#fff',
      iconColor: '#111',
      cardTitleUk: 'Є Питання',
      cardTitleEn: 'Ye Pytannia',
      commentUk: 'Один із джерел, де ставлю запитання і слухаю відповіді.',
      commentEn: 'One of the sources where I ask questions and listen to answers.'
    },
    {
      id: 'cpk',
      nameUk: 'ЦПК',
      nameEn: 'ANTAC',
      link: 'https://antac.org.ua/',
      iconImg: null,
      iconText: 'цпк',
      iconBg: '#111',
      iconColor: '#fff',
      cardTitleUk: 'Центр протидії корупції',
      cardTitleEn: 'Anti-Corruption Action Center',
      commentUk: 'Слідкую за їхньою роботою і розслідуваннями.',
      commentEn: 'I follow their work and investigations.'
    },
    {
      id: 'bihus',
      nameUk: 'BIHUS Info',
      nameEn: 'BIHUS Info',
      link: 'https://bihus.info/',
      iconImg: null,
      iconText: 'Б',
      iconBg: '#f5c518',
      iconColor: '#111',
      cardTitleUk: 'BIHUS Info',
      cardTitleEn: 'BIHUS Info',
      commentUk: 'Важливі розслідування — обов’язково дивлюсь.',
      commentEn: 'Important investigations — I always watch.'
    },
    {
      id: 'mokrec',
      nameUk: 'MokRec',
      nameEn: 'MokRec',
      link: 'https://www.youtube.com/@MokRec',
      iconImg: null,
      iconText: 'MR',
      iconBg: '#1a1a1a',
      iconColor: '#e63939',
      cardTitleUk: 'MokRec',
      cardTitleEn: 'MokRec',
      commentUk: 'Дивлюся розбори і матеріали каналу.',
      commentEn: 'I watch the channel’s breakdowns and materials.'
    }
  ];

  get title() {
    return this.currentLang === 'uk' ? 'Інфопростір' : 'Infospace';
  }

  get motto() {
    return this.currentLang === 'uk' ? this.mottoUk : this.mottoEn;
  }

  get active(): SourceItem | null {
    return this.sources.find((s) => s.id === this.activeId) || null;
  }

  get goLabel() {
    return this.currentLang === 'uk' ? 'Перейти' : 'Open';
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  /** Desktop: hover opens tip */
  onSourceEnter(id: string) {
    if (this.isCoarsePointer()) return;
    this.clearHideTimer();
    this.setActive(id);
  }

  /** Desktop: leaving the whole stage can clear; keep tip while moving between sources */
  onStageLeave() {
    if (this.isCoarsePointer()) return;
    // Short delay so cursor can move from icon to tip on the photo
    this.clearHideTimer();
    this.hideTimer = setTimeout(() => this.clearActive(), 280);
  }

  /**
   * Mobile/tablet: first tap selects & shows tip, does NOT navigate.
   * Desktop click also selects (hover already did).
   */
  onSourceActivate(id: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.setActive(id);
    // Mobile: bring photo + fixed tip into view
    if (this.isCoarsePointer()) {
      setTimeout(() => {
        this.heroBlock?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }

  private setActive(id: string) {
    this.activeId = id;
    this.resetHideTimer();
  }

  clearActive() {
    this.activeId = null;
    this.clearHideTimer();
  }

  private resetHideTimer() {
    this.clearHideTimer();
    this.hideTimer = setTimeout(() => this.clearActive(), this.hideDelayMs);
  }

  private clearHideTimer() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  private isCoarsePointer(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  }

  ngOnDestroy() {
    this.clearHideTimer();
  }
}
