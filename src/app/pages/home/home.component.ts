import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentLang: 'uk' | 'en' = 'uk';

  textUk = {
    p1: 'Я довго була аполітичною.',
    p2: 'У тому сенсі, що я свідомо усунулася від контролю за політичними процесами, добровільно відмовилася від відповідальності за державний курс країни між виборами, і здебільшого мені було байдуже до діяльності державних інститутів.',
    p3: 'На практиці моя аполітичність звучала десь так:',
    p4: '«Усі вони однакові, яка різниця, хто при владі — декорації змінюються, суть залишається».',
    p5: 'Особливості мого життя і моєї освіти сформували цю позицію.',
    p6: 'Війна і топ-корупція під час війни показали мені, що аполітичність має свою ціну.',
    p7: 'Написала статтю-маніфест:',
    title: '«Війна як наслідок аполітичності»',
    p8: 'Це не заклик на барикади у буквальному сенсі.',
    p9: 'Це розповідь українки, яка усвідомила важливість своєї ролі у політиці, тому більше не мовчить, а діє.',
    p10: 'Читайте. Думайте. Відчувайте. Дійте.'
  };

  textEn = {
    p1: 'I was apolitical for a long time.',
    p2: 'In the sense that I consciously stepped away from monitoring political processes, voluntarily refused responsibility for the country’s course between elections, and for the most part was indifferent to the work of state institutions.',
    p3: 'In practice my apoliticalness sounded something like this:',
    p4: '“They are all the same; what difference does it make who is in power — the scenery changes, the essence remains.”',
    p5: 'The circumstances of my life and education shaped this position.',
    p6: 'War and top-level corruption during the war showed me that apoliticalness has a price.',
    p7: 'I wrote a manifesto article:',
    title: '“War as a Consequence of Apoliticalness”',
    p8: 'This is not a call to the barricades in the literal sense.',
    p9: 'This is the story of a Ukrainian woman who realized the importance of her role in politics, and therefore no longer remains silent, but acts.',
    p10: 'Read. Think. Feel. Act.'
  };

  get t() {
    return this.currentLang === 'uk' ? this.textUk : this.textEn;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }
}
