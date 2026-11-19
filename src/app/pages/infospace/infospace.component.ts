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
  activeId: string | null = null;
  tipTop = 0;
  tipLeft = 0;
  showDesktopTip = false;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;
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
      nameUk: 'НАБУ',
      nameEn: 'NABU',
      link: 'https://youtube.com/@nabuofficial',
      iconImg: 'assets/sources/2-nabu.jpg',
      iconText: '▲',
      iconBg: '#0a0a0a',
      iconColor: '#f5c518',
      cardTitleUk: 'НАБУ',
      cardTitleEn: 'NABU',
      commentUk: 'Офіційний канал Національного антикорупційного бюро України.',
      commentEn: 'Official channel of the National Anti-Corruption Bureau of Ukraine.'
    },
    {
      id: 'madyar',
      nameUk: 'Мадяр',
      nameEn: 'Madyar',
      link: 'https://youtube.com/@magyarbirds',
      iconImg: 'assets/sources/3-magyarbirds.jpg',
      iconText: 'М',
      iconBg: '#1b4332',
      iconColor: '#fff',
      cardTitleUk: 'Мадяр',
      cardTitleEn: 'Madyar',
      commentUk: 'Канал підрозділу «Птахи Мадяра».',
      commentEn: 'Channel of the “Birds of Madyar” unit.'
    },
    {
      id: 'up',
      nameUk: 'Українська правда',
      nameEn: 'Ukrainska Pravda',
      link: 'https://youtube.com/channel/UChparf_xrUZ_CJGQY5g4aEg',
      iconImg: 'assets/sources/4-up.jpg',
      iconText: 'УП',
      iconBg: '#7a1520',
      iconColor: '#fff',
      cardTitleUk: 'Українська правда',
      cardTitleEn: 'Ukrainska Pravda',
      commentUk: 'YouTube-канал Української правди.',
      commentEn: 'YouTube channel of Ukrainska Pravda.'
    },
    {
      id: 'fedorov',
      nameUk: 'Михайло Федоров',
      nameEn: 'Mykhailo Fedorov',
      link: 'https://www.facebook.com/share/1TmYF4udbQ/',
      iconImg: 'assets/sources/5-m_fedorov.jpg',
      iconText: 'МФ',
      iconBg: '#1877f2',
      iconColor: '#fff',
      cardTitleUk: 'Михайло Федоров',
      cardTitleEn: 'Mykhailo Fedorov',
      commentUk: 'Публікація Михайла Федорова у Facebook.',
      commentEn: 'Mykhailo Fedorov’s Facebook post.'
    },
    {
      id: 'epytannia',
      nameUk: 'Є Питання',
      nameEn: 'Ye Pytannia',
      link: 'https://youtube.com/channel/UCLzoT0z2WwyDUAx8LHYzDJw',
      iconImg: 'assets/sources/6-ep.jpg',
      iconText: 'є?',
      iconBg: '#ffffff',
      iconColor: '#111111',
      cardTitleUk: 'Є Питання',
      cardTitleEn: 'Ye Pytannia',
      commentUk: 'YouTube-канал «Є Питання».',
      commentEn: 'YouTube channel “Ye Pytannia”.'
    },
    {
      id: 'mokrec',
      nameUk: 'MokRec',
      nameEn: 'MokRec',
      link: 'https://youtube.com/@mokrec',
      iconImg: 'assets/sources/7-mokrec.jpg',
      iconText: 'MR',
      iconBg: '#1a1a1a',
      iconColor: '#e63939',
      cardTitleUk: 'MokRec',
      cardTitleEn: 'MokRec',
      commentUk: 'YouTube-канал MokRec.',
      commentEn: 'MokRec YouTube channel.'
    },
    {
      id: 'cpk',
      nameUk: 'ЦПК',
      nameEn: 'ANTAC',
      link: 'https://youtube.com/@antac_ukraine',
      iconImg: 'assets/sources/8-anticor.jpg',
      iconText: 'цпк',
      iconBg: '#111111',
      iconColor: '#ffffff',
      cardTitleUk: 'Центр протидії корупції',
      cardTitleEn: 'Anti-Corruption Action Center',
      commentUk: 'YouTube-канал Центру протидії корупції.',
      commentEn: 'YouTube channel of the Anti-Corruption Action Center.'
    },
    {
      id: 'censor',
      nameUk: 'Цензор.НЕТ',
      nameEn: 'Censor.NET',
      link: 'https://youtube.com/@censor_net',
      iconImg: 'assets/sources/9-censornet.jpg',
      iconText: 'ЦН',
      iconBg: '#c1121f',
      iconColor: '#ffffff',
      cardTitleUk: 'Цензор.НЕТ',
      cardTitleEn: 'Censor.NET',
      commentUk: 'YouTube-канал Цензор.НЕТ.',
      commentEn: 'Censor.NET YouTube channel.'
    },
    {
      id: 'znua',
      nameUk: 'ZN,UA',
      nameEn: 'ZN,UA',
      link: 'https://zn.ua/ukr/POLITICS/virodzhennja-vladi-jak-zelenskij-dosjah-svojeji-steli-a-sistema-derzhupravlinnja-dna.html',
      iconImg: 'assets/sources/10-znua.jpg',
      iconText: 'ZN',
      iconBg: '#0d1b2a',
      iconColor: '#e0e1dd',
      cardTitleUk: 'Дзеркало тижня',
      cardTitleEn: 'Dzerkalo Tyzhnia',
      commentUk: 'Стаття: «Виродження влади…» — zn.ua.',
      commentEn: 'Article: “The degeneration of power…” — zn.ua.'
    },
    {
      id: 'radionv',
      nameUk: 'Radio NV',
      nameEn: 'Radio NV',
      link: 'https://youtube.com/@radionvua',
      iconImg: 'assets/sources/11-radionv.jpg',
      iconText: 'NV',
      iconBg: '#e63946',
      iconColor: '#ffffff',
      cardTitleUk: 'Radio NV',
      cardTitleEn: 'Radio NV',
      commentUk: 'YouTube-канал Radio NV.',
      commentEn: 'Radio NV YouTube channel.'
    },
    {
      id: 'united24',
      nameUk: 'UNITED24',
      nameEn: 'UNITED24',
      link: 'https://u24app.gov.ua/s/nxIQO0M3fF',
      iconImg: 'assets/sources/12-u24.jpg',
      iconText: 'U24',
      iconBg: '#0057b7',
      iconColor: '#ffd700',
      preview1: 'assets/sources/12-u24-preview1.jpg',
      preview2: 'assets/sources/12-u24-preview2.jpg',
      cardTitleUk: 'UNITED24 — допомога ЗСУ напряму',
      cardTitleEn: 'UNITED24 — support for the Armed Forces, directly',
      commentUk:
        'Додаток UNITED24 — це швидкий і зручний спосіб підтримати захисників України без посередників. Кошти надходять напряму до підрозділів на передовій, тож тобі більше не потрібно шукати окремі збори чи непокоїтися щодо їхньої прозорості.',
      commentEn:
        'The UNITED24 app is a fast, convenient way to support Ukraine’s defenders without intermediaries. Funds go directly to units on the front line, so you no longer need to hunt for separate fundraisers or worry about their transparency.'
    },
    {
      id: 'bihus',
      nameUk: 'BIHUS Info',
      nameEn: 'BIHUS Info',
      link: 'https://youtube.com/@bihusinfo',
      iconImg: 'assets/sources/13-bihus_info.jpg',
      iconText: 'Б',
      iconBg: '#f5c518',
      iconColor: '#111111',
      cardTitleUk: 'BIHUS Info',
      cardTitleEn: 'BIHUS Info',
      commentUk: 'YouTube-канал BIHUS Info.',
      commentEn: 'BIHUS Info YouTube channel.'
    },
    {
      id: 'tytanovi',
      nameUk: 'TYTANOVI',
      nameEn: 'TYTANOVI',
      link: 'https://youtube.com/@tytanovi-rehab',
      iconImg: 'assets/sources/14-tytanovi.jpg',
      iconText: 'Т',
      iconBg: '#2d3436',
      iconColor: '#dfe6e9',
      cardTitleUk: 'TYTANOVI',
      cardTitleEn: 'TYTANOVI',
      commentUk: 'YouTube-канал TYTANOVI (реабілітація).',
      commentEn: 'TYTANOVI YouTube channel (rehab).'
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

  onSourceEnter(id: string, event?: Event) {
    if (this.isCoarsePointer()) return;
    this.clearHideTimer();
    this.setActive(id);
    this.positionDesktopTip(event?.currentTarget as HTMLElement | undefined);
  }

  onStageLeave() {
    if (this.isCoarsePointer()) return;
    this.clearHideTimer();
    this.hideTimer = setTimeout(() => this.clearActive(), 280);
  }

  onSourceActivate(id: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.setActive(id);
    if (this.isCoarsePointer()) {
      setTimeout(() => {
        this.heroBlock?.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    } else {
      this.positionDesktopTip(event.currentTarget as HTMLElement);
    }
  }

  private setActive(id: string) {
    this.activeId = id;
    this.resetHideTimer();
  }

  clearActive() {
    this.activeId = null;
    this.showDesktopTip = false;
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


  onTipEnter() {
    this.clearHideTimer();
  }

  onStripScroll() {
    if (!this.activeId || this.isCoarsePointer()) return;
    const el = document.querySelector(
      `.source-item[data-source-id="${this.activeId}"]`
    ) as HTMLElement | null;
    this.positionDesktopTip(el ?? undefined);
  }

  private positionDesktopTip(anchor?: HTMLElement) {
    if (!anchor || this.isCoarsePointer()) {
      this.showDesktopTip = false;
      return;
    }
    const r = anchor.getBoundingClientRect();
    const gap = 14;
    const tipWidth = 340;
    let left = r.right + gap;
    if (left + tipWidth > window.innerWidth - 12) {
      left = Math.max(12, r.left - tipWidth - gap);
    }
    let top = r.top + r.height / 2;
    const estH = 280;
    top = Math.min(Math.max(top, estH / 2 + 8), window.innerHeight - estH / 2 - 8);
    this.tipTop = top;
    this.tipLeft = left;
    this.showDesktopTip = true;
  }

  private isCoarsePointer(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  }

  ngOnDestroy() {
    this.clearHideTimer();
  }
}
