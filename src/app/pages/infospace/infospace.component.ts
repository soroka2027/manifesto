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
  thumb?: string;
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

  searchQueryUk = 'повідомити про корупцію';
  searchQueryEn = 'report corruption';
  suggestionUk = 'національне антикорупційне бюро україни';
  suggestionEn = 'national anti-corruption bureau of ukraine';
  nabuSite = 'https://nabu.gov.ua/';

  manifestoLinesUk = [
    'Слухай багатьох',
    'Аналізуй',
    'Перевіряй факти',
    'Руйнуй шаблони',
    'Правда не боїться твоїх запитань',
    'Істина витримує будь-яку критику'
  ];

  manifestoLinesEn = [
    'Listen to many',
    'Analyze',
    'Check the facts',
    'Break the patterns',
    'Truth is not afraid of your questions',
    'Truth withstands any criticism'
  ];

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
        'Deeply grateful to NABU and SAP!!! You are incredibly brave! We fully stand with you in the fight against corruption. Honest, hard-working people will not live well until we reform law enforcement and other systems — so that only integrity and professional candidates reach key positions through transparent, impartial competitions.',
      thumb: 'assets/nabu-thumb.svg'
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
      commentUk: 'Читаю, порівнюю, перевіряю.',
      commentEn: 'I read, compare, verify.'
    },
    {
      id: 'cpk',
      nameUk: 'Центр протидії корупції',
      nameEn: 'Anti-Corruption Center',
      iconText: 'цпк_',
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

  get searchQuery() {
    return this.currentLang === 'uk' ? this.searchQueryUk : this.searchQueryEn;
  }

  get suggestion() {
    return this.currentLang === 'uk' ? this.suggestionUk : this.suggestionEn;
  }

  get lines() {
    return this.currentLang === 'uk' ? this.manifestoLinesUk : this.manifestoLinesEn;
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
