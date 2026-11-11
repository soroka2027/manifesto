import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface SourceItem {
  id: string;
  nameUk: string;
  nameEn: string;
  iconText: string;
  iconBg: string;
  iconColor: string;
  link: string;
  cardTitleUk: string;
  cardTitleEn: string;
  cardMetaUk: string;
  cardMetaEn: string;
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
export class InfospaceComponent {
  currentLang: 'uk' | 'en' = 'uk';
  hoveredId: string | null = null;

  sources: SourceItem[] = [
    {
      id: 'nabu',
      nameUk: 'NABU',
      nameEn: 'NABU',
      iconText: '▲',
      iconBg: '#0a0a0a',
      iconColor: '#f5c518',
      link: 'https://youtu.be/dLGhaHbWCAA?si=nJU7TUnkDHdvIJ1h',
      cardTitleUk: 'Операція «Карфаген»: продовження (повне відео)',
      cardTitleEn: 'Operation Carthage: continuation (full video)',
      cardMetaUk: 'Подобається · 1,6 млн · 4 лист.',
      cardMetaEn: 'Likes · 1.6M · Nov 4',
      commentUk:
        'Дуже вдячні Вам НАБУ і САП!!! Ви неймовірно хоробрі! І ми з Вами повністю солідарні у боротьбі із корупцією! Не буде чесним і сумлінно працюючим людям жити добре, доки ми не змінимо правоохоронну й інші системи через відповідні реформи. Щоб на ключові посади мали доступ лише доброчесні і професійні кандидати, що обираються на основі прозорого і неупередженого конкурсу.',
      commentEn:
        'Deeply grateful to NABU and SAP!!! You are incredibly brave! We fully stand with you in the fight against corruption. Honest, hard-working people will not live well until we reform law enforcement and other systems — so that only integrity and professional candidates reach key positions through transparent, impartial competitions.'
    },
    {
      id: 'up',
      nameUk: 'Українська правда',
      nameEn: 'Ukrainska Pravda',
      iconText: 'УП',
      iconBg: '#7a1520',
      iconColor: '#fff',
      link: 'https://www.pravda.com.ua/',
      cardTitleUk: 'Українська правда',
      cardTitleEn: 'Ukrainska Pravda',
      cardMetaUk: 'Медіа',
      cardMetaEn: 'Media',
      commentUk: 'Читаю, порівнюю, перевіряю факти.',
      commentEn: 'I read, compare, check the facts.'
    },
    {
      id: 'epytannia',
      nameUk: 'Є ПИТАННЯ',
      nameEn: 'YE PYTANNIA',
      iconText: 'є?',
      iconBg: '#fff',
      iconColor: '#111',
      link: 'https://www.youtube.com/@Yepytannia',
      cardTitleUk: 'Є Питання',
      cardTitleEn: 'Ye Pytannia',
      cardMetaUk: 'YouTube-канал',
      cardMetaEn: 'YouTube channel',
      commentUk: 'Один із джерел, де ставлю запитання і слухаю відповіді.',
      commentEn: 'One of the sources where I ask questions and listen to answers.'
    },
    {
      id: 'mokrec',
      nameUk: 'MokRec',
      nameEn: 'MokRec',
      iconText: 'MR',
      iconBg: '#1a1a1a',
      iconColor: '#e63939',
      link: 'https://www.youtube.com/@MokRec',
      cardTitleUk: 'MokRec',
      cardTitleEn: 'MokRec',
      cardMetaUk: 'YouTube',
      cardMetaEn: 'YouTube',
      commentUk: 'Дивлюся розбори і матеріали каналу.',
      commentEn: 'I watch the channel’s breakdowns and materials.'
    },
    {
      id: 'censor',
      nameUk: 'Цензор.NET',
      nameEn: 'Censor.NET',
      iconText: 'ЦН',
      iconBg: '#c9a227',
      iconColor: '#111',
      link: 'https://censor.net/',
      cardTitleUk: 'Цензор.NET',
      cardTitleEn: 'Censor.NET',
      cardMetaUk: 'Медіа',
      cardMetaEn: 'Media',
      commentUk: 'Слідкую за новинами та матеріалами.',
      commentEn: 'I follow the news and materials.'
    },
    {
      id: 'radionv',
      nameUk: 'Radio NV',
      nameEn: 'Radio NV',
      iconText: 'NV',
      iconBg: '#111',
      iconColor: '#e10600',
      link: 'https://radio.nv.ua/',
      cardTitleUk: 'Radio NV',
      cardTitleEn: 'Radio NV',
      cardMetaUk: 'Радіо / медіа',
      cardMetaEn: 'Radio / media',
      commentUk: 'Слухаю аналітику та інтерв’ю.',
      commentEn: 'I listen to analysis and interviews.'
    },
    {
      id: 'bihus',
      nameUk: 'BIHUS Info',
      nameEn: 'BIHUS Info',
      iconText: 'Б',
      iconBg: '#f5c518',
      iconColor: '#111',
      link: 'https://bihus.info/',
      cardTitleUk: 'BIHUS Info',
      cardTitleEn: 'BIHUS Info',
      cardMetaUk: 'Розслідування',
      cardMetaEn: 'Investigations',
      commentUk: 'Важливі розслідування — обов’язково дивлюсь.',
      commentEn: 'Important investigations — I always watch.'
    },
    {
      id: 'cpk',
      nameUk: 'Центр протидії корупції',
      nameEn: 'Anti-Corruption Center',
      iconText: 'цпк',
      iconBg: '#111',
      iconColor: '#fff',
      link: 'https://antac.org.ua/',
      cardTitleUk: 'Центр протидії корупції',
      cardTitleEn: 'Anti-Corruption Action Center',
      cardMetaUk: 'Громадська організація',
      cardMetaEn: 'NGO',
      commentUk: 'Слідкую за їхньою роботою і розслідуваннями.',
      commentEn: 'I follow their work and investigations.'
    }
  ];

  get title() {
    return this.currentLang === 'uk' ? 'Інфопростір' : 'Infospace';
  }

  get hovered(): SourceItem | null {
    return this.sources.find((s) => s.id === this.hoveredId) || null;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  onHover(id: string | null) {
    this.hoveredId = id;
  }
}
