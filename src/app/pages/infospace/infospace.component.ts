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
      preview1: 'assets/sources/1-kartonky-preview1.jpg',
      cardTitleUk: 'Картонки — голоси з площі',
      cardTitleEn: 'Kartonky — voices from the square',
      commentUk:
        'Народна галерея протестних плакатів. Голос народу.\nКартонка — це кілька слів, які хтось написав від руки і виніс на вулицю. Тут вони залишаються.',
      commentEn:
        'A people’s gallery of protest signs. The voice of the people.\nA cardboard is a few words someone wrote by hand and took to the street. Here they remain.'
    },
    {
      id: 'nabu',
      nameUk: 'НАБУ',
      nameEn: 'NABU',
      link: 'https://youtu.be/dLGhaHbWCAA',
      iconImg: 'assets/sources/2-nabu.jpg',
      iconText: '▲',
      iconBg: '#0a0a0a',
      iconColor: '#f5c518',
      preview1: 'assets/sources/2-nabu-preview1.jpg',
      cardTitleUk: 'Офіційний YouTube-канал Національного антикорупційного бюро України (НАБУ)',
      cardTitleEn: 'Official YouTube channel of the National Anti-Corruption Bureau of Ukraine (NABU)',
      commentUk:
        'Дуже вдячні Вам НАБУ і САП!!! ❤❤❤\nВи неймовірно хоробрі! І ми з Вами повністю солідарні у боротьбі із корупцією!\n\nУ мене питання до тих, хто каже, що вибори не на часі і вони можуть зачекати до кінця війни. Як з таким рівнем топ-корупції і мафіізації можна розраховувати не те що на перемогу, а хочаб вистояти.',
      commentEn:
        'Deep gratitude to NABU and SAPO!!! ❤❤❤\nYou are incredibly brave. We stand fully with you in the fight against corruption.\n\nA question to those who say elections are not timely and can wait until the war ends: with this level of top-level corruption and mafioso capture, how can one count not on victory — but even on holding the line?'
    },
    {
      id: 'madyar',
      nameUk: 'Мадяр',
      nameEn: 'Madyar',
      link: 'https://t.me/robert_magyar',
      iconImg: 'assets/sources/3-magyarbirds.jpg',
      iconText: 'М',
      iconBg: '#1b4332',
      iconColor: '#fff',
      preview1: 'assets/sources/3-madyar-preview1.jpg',
      cardTitleUk: 'МАДЯР — Командувач СБС ЗСУ 🇺🇦',
      cardTitleEn: 'MADYAR — Commander of SBS AFU 🇺🇦',
      commentUk:
        'Інформація на вагу золота і наша вдячність і 🖤 не має меж.',
      commentEn:
        'Information worth its weight in gold — and our gratitude 🖤 knows no bounds.'
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
      preview1: 'assets/sources/5-fedorov-preview1.jpg',
      preview2: 'assets/sources/5-fedorov-preview2.jpg',
      cardTitleUk: 'Михайло Федоров — політик',
      cardTitleEn: 'Mykhailo Fedorov — politician',
      commentUk:
        'Вважаю, що скасування виборів в Україні знищує саме те, за що ведеться наша боротьба — вільна, демократична Україна, де український народ, а не одна людина, є джерелом влади.\n\nСвітова історія знає випадки, коли країни проводили вибори навіть під час жорстоких воєн, щоб зберегти суть вільної держави та довіру народу до влади.',
      commentEn:
        'I believe that cancelling elections in Ukraine destroys exactly what our struggle is for — a free, democratic Ukraine where the Ukrainian people, not one person, are the source of power.\n\nWorld history knows cases when countries held elections even during brutal wars, to preserve the essence of a free state and public trust in government.'
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
      preview1: 'assets/sources/10-znua-preview1.jpg',
      cardTitleUk: 'Дзеркало тижня',
      cardTitleEn: 'Dzerkalo Tyzhnia',
      commentUk:
        'Дякую, Інно!\nЗеленський нам і партнерам каже: скільки буде тривати війна, стільки і буде його влада. Але, тривалість війни визначається бажанням кремля воювати з Україною. Отже виходить, що тепер вже НЕ народ України вирішує - хто буде лідером його нації, а путін.\n\nКартонкові протести - це факт КАТЕГОРИЧНОЇ незгоди українців із діючою владою, це ЧІТКИЙ знак того, що владі не вдасться перетворити Україну в анти-демократію!\n\nЩоб бути сильними і успішно протистояти ворогу, і вистояти у цій страшній і невідомо скільки тривалій війні, нам необхідно зняти внутрішню суспільну напругу і знову об\'єднати суспільство!\n\nВИБОРИ - це момент найбільшої єдності суспільства. Момент прояснення усіх деталей суспільного договору. Момент згоди меншості із більшістю щодо лідера нації, якому увесь загал віддає верховну владу на суворо обмежений термін.',
      commentEn:
        'Thank you, Inna!\nZelenskyy tells us and our partners: as long as the war lasts, so will his power. But the duration of the war is determined by the Kremlin’s will to fight Ukraine. So it turns out that it is no longer the people of Ukraine who decide who will lead their nation — it is Putin.\n\nThe cardboard protests are a fact of CATEGORICAL disagreement by Ukrainians with the current authorities, a CLEAR sign that the authorities will not succeed in turning Ukraine into an anti-democracy!\n\nTo be strong and successfully resist the enemy, and to hold out in this terrible war of unknown length, we need to ease internal social tension and reunite society!\n\nELECTIONS are the moment of greatest unity in society. A moment of clarifying every detail of the social contract. A moment when the minority agrees with the majority on the nation’s leader, to whom the whole public entrusts supreme power for a strictly limited term.'
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
      preview1: 'assets/sources/13-bihus-preview1.jpg',
      cardTitleUk: 'BIHUS Info',
      cardTitleEn: 'BIHUS Info',
      commentUk:
        'Дякую, BIHUS Info!\n\nWahnsinn! Цей безкінечний як ця війна серіал про Зе-епоху - un genre trash-absurde-cringe-horreur.\n\nЗе-ельдорадо для Зе-обраних під Зе-парасолькою у Зе-раю.\nА народу - безкінечна війна і пенсія на місяць у 50 євро.\n\nУ Зе-соцліфті від безробітної Зе-красотулі до Зе-депутатки і Зе-світськоїлевиці.\nА народу - безкінечна війна і пенсія на місяць у 50 євро.',
      commentEn:
        'Thank you, BIHUS Info!\n\nWahnsinn! This endless-as-the-war series about the Ze-era — un genre trash-absurde-cringe-horreur.\n\nA Ze-eldorado for the Ze-chosen under the Ze-umbrella in Ze-paradise.\nAnd for the people — an endless war and a monthly pension of 50 euros.\n\nIn the Ze-social lift from an unemployed Ze-beauty to a Ze-MP and Ze-society lioness.\nAnd for the people — an endless war and a monthly pension of 50 euros.'
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
      preview1: 'assets/sources/14-tytanovi-preview1.jpg',
      cardTitleUk: 'Канал протезно-реабілітаційного центру TYTANOVI',
      cardTitleEn: 'Channel of the TYTANOVI prosthetic rehabilitation center',
      commentUk:
        'Велика вдячність і шана нашим Захисникам!\nСил Вам і благополучного відновлення!',
      commentEn:
        'Deep gratitude and respect to our Defenders!\nStrength to you and a successful recovery!'
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
