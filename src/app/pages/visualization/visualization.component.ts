import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-visualization',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent {
  currentLang: 'uk' | 'en' = 'uk';
  /** false = first state (photo); true = description open */
  descriptionOpen = false;
  audioPlaying = false;

  private touchStartY = 0;

  symbolsUk = [
    {
      icon: '⏱️',
      title: 'Шаховий годинник',
      text: 'Центральний компонент. Для України, що бореться за існування, час — це вже не просто гроші. Це людські життя.'
    },
    {
      icon: '♟️',
      title: 'Шахова дошка',
      text: 'Наш соціум з його нерівністю, внутрішніми конфліктами, складною структурою та непередбачуваною динамікою.'
    },
    {
      icon: '🌪️',
      title: 'Хаос із фігурами',
      text: 'Символ внутрішнього політичного абсурду та дисбалансу. Генерали тилового СБУ проти власних громадян із картонками та проти НАБУ. Депутати Верховної Ради проти антикорупційних реформ. Генеральний прокурор Кравченко, що пустився берега — він просто корупціонер чи вже частина мафії? Це узурпація влади та нехтування базовими принципами демократії.'
    },
    {
      icon: '🚪',
      title: 'Двоє дверей',
      text: 'Два політичні табори, що утворилися внаслідок протилежних виборів українців. Ці два виходи ведуть у абсолютно різні майбутні України. Саме тут криється головний внутрішньосуспільний конфлікт, який заважає єдності. Це вибір між двома несумісними системами управління.'
    },
    {
      icon: '🕳️',
      title: 'Двері аполітичності',
      text: 'Символ суспільно-політичного невігластва, інфантильності та тези про власну безпорадність. Саме таке середовище стає підґрунтям для свавілля влади та репресій.'
    },
    {
      icon: '🖤',
      title: 'Чорна смола',
      text: 'Витікає з дверей аполітичності як символ застою «совка». Це пряме питання до тих, хто досі залишається в цьому таборі: за що ми, українці, вступили у бій з російським загарбником у 2022 році? За що боремося п’ятий рік поспіль і сплачуємо таку високу ціну?'
    },
    {
      icon: '✊',
      title: 'Двері активної громадської позиції',
      text: 'Вибір демократії з усіма її цінностями та благами для народу як справжнього володаря країни. Це обов’язкова змінність влади у чітко визначені терміни через вибори, справедливе антикорупційне законодавство та всебічний народний контроль за державним майном і грошима.'
    },
    {
      icon: '💡',
      title: 'Світло в кімнаті',
      text: 'Необхідність освіти. Бажання знати, як саме управляти країною за допомогою інструментів демократії. Це високі вимоги до доброчесності та професійності кандидатів, які претендують на владу.'
    },
    {
      icon: '🧹',
      title: 'Совок із мітлою',
      text: 'Стоїть поряд зі стіною, де висять справи про топкорупцію та мафіозизацію («Карфаген», «Феміда», «Форест Гамп», «Династія»). Символ великої роботи з прибирання та очищення країни від перевертнів. Вони пролізли у владні інституції і замість служіння українському народу обслуговують власні або, що набагато гірше, ворожі інтереси.'
    }
  ];

  symbolsEn = [
    {
      icon: '⏱️',
      title: 'Chess clock',
      text: 'The central element. For a Ukraine fighting for existence, time is no longer just money. It is human lives.'
    },
    {
      icon: '♟️',
      title: 'Chessboard',
      text: 'Our society with its inequality, internal conflicts, complex structure and unpredictable dynamics.'
    },
    {
      icon: '🌪️',
      title: 'Chaos of pieces',
      text: 'A symbol of internal political absurdity and imbalance — rear-line power against citizens with cardboard signs and against NABU; MPs against anti-corruption reform; a prosecutor general who has gone off the rails. Usurpation of power and disregard for basic democratic principles.'
    },
    {
      icon: '🚪',
      title: 'Two doors',
      text: 'Two political camps formed by opposing choices of Ukrainians. These exits lead to entirely different futures for Ukraine. Here lies the main internal social conflict that blocks unity: a choice between two incompatible systems of governance.'
    },
    {
      icon: '🕳️',
      title: 'Door of apoliticalness',
      text: 'A symbol of civic-political ignorance, infantilism and the claim of one’s own helplessness. Such an environment becomes ground for arbitrary power and repression.'
    },
    {
      icon: '🖤',
      title: 'Black tar',
      text: 'Flows from the door of apoliticalness as a symbol of Soviet-style stagnation. A direct question to those who still stay in that camp: what did we, Ukrainians, enter the fight against the Russian invader in 2022 for? What have we been fighting for for a fifth year, at such a high cost?'
    },
    {
      icon: '✊',
      title: 'Door of active civic stance',
      text: 'The choice of democracy with its values and goods for the people as the true sovereign of the country: mandatory change of power on a fixed electoral schedule, fair anti-corruption law, and full public control over state property and money.'
    },
    {
      icon: '💡',
      title: 'Light in the room',
      text: 'The need for education. The will to know how to govern a country with democratic tools. High standards of integrity and professionalism for those who claim power.'
    },
    {
      icon: '🧹',
      title: 'Dustpan and broom',
      text: 'Stands by the wall of top-corruption cases (“Carthage”, “Themis”, “Forrest Gump”, “Dynasty”). A symbol of the hard work of cleaning the country of turncoats who entered institutions not to serve the people, but their own — or, worse, hostile — interests.'
    }
  ];

  get title() {
    return this.currentLang === 'uk' ? 'Візуалізація' : 'Visualization';
  }

  get installTitle() {
    return this.currentLang === 'uk' ? 'Не однаково' : 'Not indifferent';
  }

  get installSubtitle() {
    return this.currentLang === 'uk' ? 'Інсталяція, 2026' : 'Installation, 2026';
  }

  get swipeLabel() {
    return this.currentLang === 'uk'
      ? 'Зазирнути в задум автора'
      : 'Look into the author’s intent';
  }

  get closeLabel() {
    return this.currentLang === 'uk' ? 'Згорнути опис' : 'Collapse description';
  }

  get audioLabel() {
    return this.audioPlaying
      ? (this.currentLang === 'uk' ? 'Зупинити аудіогід' : 'Stop audio guide')
      : (this.currentLang === 'uk' ? 'Увімкнути аудіосупровід автора' : 'Play author’s audio guide');
  }

  get intro() {
    return this.currentLang === 'uk'
      ? 'Простір між двома стінами — це наше життя під час війни.\n\nЦивільний українець на сході України станом на 15.11.2026 року вже 1726-ту добу широкомасштабної збройної агресії російської федерації проти України перебуває у постійному страху смерті, фактично ставши заручником обставин.\n\nЩоб зрозуміти внутрішній світ автора, дослідіть символізм кожної деталі:'
      : 'The space between two walls is our life during the war.\n\nAs of 15 November 2026, a civilian Ukrainian in eastern Ukraine has lived through the 1,726th day of Russia’s full-scale armed aggression against Ukraine in constant fear of death — a hostage of circumstances.\n\nTo understand the author’s inner world, explore the symbolism of each detail:';
  }

  get symbols() {
    return this.currentLang === 'uk' ? this.symbolsUk : this.symbolsEn;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  openDescription() {
    this.descriptionOpen = true;
  }

  closeDescription() {
    this.descriptionOpen = false;
  }

  toggleAudio() {
    // Placeholder until the author’s voice file is added
    this.audioPlaying = !this.audioPlaying;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.changedTouches[0]?.clientY ?? 0;
  }

  onTouchEnd(event: TouchEvent) {
    const endY = event.changedTouches[0]?.clientY ?? 0;
    const dy = this.touchStartY - endY;
    if (!this.descriptionOpen && dy > 60) {
      this.openDescription();
    } else if (this.descriptionOpen && dy < -60) {
      this.closeDescription();
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowUp' || e.key === 'PageDown') {
      this.openDescription();
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      this.closeDescription();
    }
  }
}
