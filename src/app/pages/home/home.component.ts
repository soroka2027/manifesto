import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HelloWorldComponent } from '../../components/hello-world/hello-world.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HelloWorldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLang: 'uk' | 'en' = 'uk';

  menuItems = [
    { path: '/manifest', labelUk: 'Маніфест', labelEn: 'Manifesto' },
    { path: '/behind-scenes', labelUk: 'За лаштунками', labelEn: 'Behind the Scenes' },
    { path: '/infospace', labelUk: 'Інфопростір', labelEn: 'Infospace' },
    { path: '/visualization', labelUk: 'Візуалізація', labelEn: 'Visualization' },
    { path: '/about', labelUk: 'Про автора', labelEn: 'About the Author' }
  ];

  textUk = {
    p1: 'Я довго була аполітичною.',
    p2: 'Особливості моєї освіти сформували цю позицію.',
    p3: 'Війна і топ-корупція під час війни показали мені, що аполітичність має свою ціну.',
    p4: 'Написала статтю-маніфест:',
    title: '«Війна як наслідок аполітичності»',
    p5: 'Це не заклик на барикади у буквальному сенсі.',
    p6: 'Це розповідь українки, яка усвідомила важливість своєї ролі у політиці, тому більше не мовчить, а діє.',
    p7: 'Читайте. Думайте. Відчувайте. Дійте.'
  };

  textEn = {
    p1: 'I was apolitical for a long time.',
    p2: 'The peculiarities of my education shaped this position.',
    p3: 'War and top-level corruption during the war showed me that apoliticalness has a price.',
    p4: 'I wrote a manifesto article:',
    title: '“War as a Consequence of Apoliticalness”',
    p5: 'This is not a call to the barricades in the literal sense.',
    p6: 'This is the story of a Ukrainian woman who realized the importance of her role in politics, and therefore no longer remains silent, but acts.',
    p7: 'Read. Think. Feel. Act.'
  };

  get t() {
    return this.currentLang === 'uk' ? this.textUk : this.textEn;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }
}
