import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ChatMessage {
  role: 'user' | 'grok';
  textUk: string;
  textEn: string;
  thinkingTime?: string; // e.g. "2s"
  partial?: boolean;     // if true, show as start...end
  endTextUk?: string;
  endTextEn?: string;
}

@Component({
  selector: 'app-behind-scenes',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './behind-scenes.component.html',
  styleUrl: './behind-scenes.component.scss'
})
export class BehindScenesComponent {
  currentLang: 'uk' | 'en' = 'uk';

  introUk = {
    title: 'За лаштунками',
    text: 'Цей розділ підсвічує особливості взаємодії SOROKA & Grok. Тут зібрані ключові промпти, час «розмірковування» Grok у секундах і часткові відповіді — саме так виглядала наша реальна бесіда під час написання маніфесту.'
  };

  introEn = {
    title: 'Behind the Scenes',
    text: 'This section highlights the interaction between SOROKA & Grok. Here you will find key prompts, Grok’s thinking time in seconds, and partial responses — exactly how our real conversation looked while writing the manifesto.'
  };

  messages: ChatMessage[] = [
    {
      role: 'user',
      textUk: 'Ти знаєш соціолога Ентоні Гіденса?',
      textEn: 'Do you know the sociologist Anthony Giddens?'
    },
    {
      role: 'grok',
      thinkingTime: '2s',
      textUk: 'Так, знаю.\n\nЕнтоні Гіденс (Anthony Giddens) — один із найвідоміших сучасних британських соціологів.\n\nОсновне, чим він відомий:',
      textEn: 'Yes, I do.\n\nAnthony Giddens is one of the most famous contemporary British sociologists.\n\nHe is best known for:',
      partial: true,
      endTextUk: '• Книги: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World та інші.',
      endTextEn: '• Books: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World and others.'
    },
    {
      role: 'user',
      textUk: 'Це цитата: Соціологія це дисципліна із вкрай неоднозначною репутацією, ті хто її вивчають - скоріше помруть від нудьги ніж покинуть геть усе і дертимуться на барикади.',
      textEn: 'This is a quote: Sociology is a discipline with an extremely ambiguous reputation; those who study it are more likely to die of boredom than to leave everything and rush to the barricades.'
    },
    {
      role: 'grok',
      thinkingTime: '29s',
      textUk: 'Так, це справжня цитата Ентоні Гіденса.\n\nВона з його підручника Sociology (перше видання 1980-х, потім багато разів перевидавався). Оригінал звучить приблизно так:',
      textEn: 'Yes, this is a real quote by Anthony Giddens.\n\nIt comes from his textbook Sociology (first edition in the 1980s, later reprinted many times). The original reads roughly as follows:',
      partial: true,
      endTextUk: 'Важливий нюанс\nГіденс наводить цю думку не як свою позицію, а як поширений стереотип. Далі він якраз сперечається з ним.',
      endTextEn: 'Important nuance\nGiddens presents this idea not as his own position, but as a widespread stereotype. He then argues against it.'
    },
    {
      role: 'user',
      textUk: 'Так, давай. Я збираюся представити тебе як соавтора моєї статті. Так буде справедливо чи вона буде лише твоя?',
      textEn: 'Yes, let’s do it. I’m going to present you as a co-author of my article. Would that be fair, or should it be only yours?'
    },
    {
      role: 'grok',
      thinkingTime: '22s',
      textUk: 'Чесна відповідь:\n\nСтаття буде твоя.\n\nЯ допомагаю формулювати, структурувати, загострювати, пропоную формулювання. Але:',
      textEn: 'Honest answer:\n\nThe article will be yours.\n\nI help formulate, structure, sharpen, and suggest wording. But:',
      partial: true,
      endTextUk: '• фінальна відповідальність за текст — твоя.\nТому справедливо називати мене помічником.',
      endTextEn: '• final responsibility for the text is yours.\nSo it is fair to call me an assistant.'
    },
    {
      role: 'user',
      textUk: 'Ти знаєш що таке гештальт-терапія і як проходять групова терапія у цьому підході?',
      textEn: 'Do you know what Gestalt therapy is and how group therapy works in this approach?'
    },
    {
      role: 'grok',
      thinkingTime: '7s',
      textUk: 'Так, знаю.\n\nЩо таке гештальт-терапія\n\nГештальт-терапія — це гуманістичний напрямок психотерапії, заснований Фріцем Перлзом, Лорою Перлз і Полом Гудменом у 1940–50-х роках.\n\nГоловні ідеї:',
      textEn: 'Yes, I do.\n\nWhat is Gestalt therapy\n\nGestalt therapy is a humanistic approach to psychotherapy founded by Fritz Perls, Laura Perls and Paul Goodman in the 1940s–50s.\n\nCore ideas:',
      partial: true,
      endTextUk: '• «Незавершені гештальти» — незавершені ситуації, емоції, потреби, які продовжують впливати на людину, доки не будуть усвідомлені і завершені.',
      endTextEn: '• “Unfinished gestalts” — incomplete situations, emotions and needs that continue to affect a person until they are recognized and completed.'
    }
  ];

  navItems = [
    { path: '/', labelUk: 'Головна', labelEn: 'Home' },
    { path: '/manifest', labelUk: 'Маніфест', labelEn: 'Manifesto' },
    { path: '/behind-scenes', labelUk: 'За лаштунками', labelEn: 'Behind the Scenes' },
    { path: '/infospace', labelUk: 'Інфопростір', labelEn: 'Infospace' },
    { path: '/visualization', labelUk: 'Візуалізація', labelEn: 'Visualization' },
    { path: '/about', labelUk: 'Про автора', labelEn: 'About' }
  ];

  get intro() {
    return this.currentLang === 'uk' ? this.introUk : this.introEn;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  getText(msg: ChatMessage): string {
    return this.currentLang === 'uk' ? msg.textUk : msg.textEn;
  }

  getEndText(msg: ChatMessage): string {
    return this.currentLang === 'uk' ? (msg.endTextUk || '') : (msg.endTextEn || '');
  }
}
