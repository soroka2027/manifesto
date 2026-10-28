import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Dialogue {
  userUk: string;
  userEn: string;
  thinkingTime: string;
  grokStartUk: string;
  grokStartEn: string;
  grokEndUk: string;
  grokEndEn: string;
}

@Component({
  selector: 'app-behind-scenes',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './behind-scenes.component.html',
  styleUrls: ['./behind-scenes.component.scss']
})
export class BehindScenesComponent {
  currentLang: 'uk' | 'en' = 'uk';
  currentPage = 0;

  introUk = 'Цей розділ підсвічує взаємодію SOROKA & Grok. Ключові промпти, час розмірковування і часткові відповіді — так виглядала наша бесіда під час написання маніфесту.';
  introEn = 'This section highlights the interaction between SOROKA & Grok. Key prompts, thinking time and partial answers — this is how our conversation looked while writing the manifesto.';

  menuItems = [
    { path: '/', labelUk: 'Головна', labelEn: 'Home' },
    { path: '/manifest', labelUk: 'Маніфест', labelEn: 'Manifesto' },
    { path: '/behind-scenes', labelUk: 'За лаштунками', labelEn: 'Behind the Scenes' },
    { path: '/infospace', labelUk: 'Інфопростір', labelEn: 'Infospace' },
    { path: '/visualization', labelUk: 'Візуалізація', labelEn: 'Visualization' },
    { path: '/about', labelUk: 'Про автора', labelEn: 'About' }
  ];

  dialogues: Dialogue[] = [
    {
      userUk: 'Ти знаєш соціолога Ентоні Гіденса?',
      userEn: 'Do you know the sociologist Anthony Giddens?',
      thinkingTime: '2s',
      grokStartUk: 'Так, знаю.\n\nЕнтоні Гіденс (Anthony Giddens) — один із найвідоміших сучасних британських соціологів.\n\nОсновне, чим він відомий:',
      grokStartEn: 'Yes, I do.\n\nAnthony Giddens is one of the most famous contemporary British sociologists.\n\nHe is best known for:',
      grokEndUk: '• Книги: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World та інші.',
      grokEndEn: '• Books: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World and others.'
    },
    {
      userUk: 'Це цитата: Соціологія це дисципліна із вкрай неоднозначною репутацією, ті хто її вивчають - скоріше помруть від нудьги ніж покинуть геть усе і дертимуться на барикади.',
      userEn: 'This is a quote: Sociology is a discipline with an extremely ambiguous reputation; those who study it are more likely to die of boredom than to leave everything and rush to the barricades.',
      thinkingTime: '29s',
      grokStartUk: 'Так, це справжня цитата Ентоні Гіденса.\n\nВона з його підручника Sociology. Оригінал звучить приблизно так:',
      grokStartEn: 'Yes, this is a real quote by Anthony Giddens.\n\nIt comes from his textbook Sociology. The original reads roughly as follows:',
      grokEndUk: 'Важливий нюанс\nГіденс наводить цю думку не як свою позицію, а як поширений стереотип. Далі він якраз сперечається з ним.',
      grokEndEn: 'Important nuance\nGiddens presents this idea not as his own position, but as a widespread stereotype. He then argues against it.'
    },
    {
      userUk: 'Так, давай. Я збираюся представити тебе як соавтора моєї статті. Так буде справедливо чи вона буде лише твоя?',
      userEn: 'Yes, let\'s do it. I\'m going to present you as a co-author of my article. Would that be fair, or should it be only yours?',
      thinkingTime: '22s',
      grokStartUk: 'Чесна відповідь:\n\nСтаття буде твоя.\n\nЯ допомагаю формулювати, структурувати, загострювати. Але:',
      grokStartEn: 'Honest answer:\n\nThe article will be yours.\n\nI help formulate, structure, sharpen. But:',
      grokEndUk: '• фінальна відповідальність за текст — твоя.\nТому справедливо називати мене помічником.',
      grokEndEn: '• final responsibility for the text is yours.\nSo it is fair to call me an assistant.'
    },
    {
      userUk: 'Ти знаєш що таке гештальт-терапія і як проходять групова терапія у цьому підході?',
      userEn: 'Do you know what Gestalt therapy is and how group therapy works in this approach?',
      thinkingTime: '7s',
      grokStartUk: 'Так, знаю.\n\nЩо таке гештальт-терапія\n\nГештальт-терапія — це гуманістичний напрямок психотерапії, заснований Фріцем Перлзом, Лорою Перлз і Полом Гудменом у 1940–50-х роках.\n\nГоловні ідеї:',
      grokStartEn: 'Yes, I do.\n\nWhat is Gestalt therapy\n\nGestalt therapy is a humanistic approach to psychotherapy founded by Fritz Perls, Laura Perls and Paul Goodman in the 1940s–50s.\n\nCore ideas:',
      grokEndUk: '• «Незавершені гештальти» — незавершені ситуації, емоції, потреби, які продовжують впливати на людину, доки не будуть усвідомлені і завершені.',
      grokEndEn: '• "Unfinished gestalts" — incomplete situations, emotions and needs that continue to affect a person until they are recognized and completed.'
    }
  ];

  get intro() {
    return this.currentLang === 'uk' ? this.introUk : this.introEn;
  }

  get current() {
    return this.dialogues[this.currentPage];
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  goToPage(index: number) {
    if (index >= 0 && index < this.dialogues.length) {
      this.currentPage = index;
    }
  }
}
