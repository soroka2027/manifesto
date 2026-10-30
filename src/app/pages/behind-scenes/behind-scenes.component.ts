import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface Dialogue {
  userUk: string;
  userEn: string;
  thinkingTime: string;
  grokUk: string;
  grokEn: string;
}

@Component({
  selector: 'app-behind-scenes',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './behind-scenes.component.html',
  styleUrls: ['./behind-scenes.component.scss']
})
export class BehindScenesComponent {
  currentLang: 'uk' | 'en' = 'uk';
  currentPage = 0;

  introUk =
    'Цей розділ підсвічує взаємодію SOROKA & Grok: ключові промпти, час розмірковування і скорочені відповіді. Активна робота над текстом маніфесту зайняла близько 2,5 години.';
  introEn =
    'This section highlights the interaction between SOROKA & Grok: key prompts, thinking time and shortened answers. Active work on the manifesto text took about 2.5 hours.';

  dialogues: Dialogue[] = [
    {
      userUk: 'Ти знаєш соціолога Ентоні Гіденса?',
      userEn: 'Do you know the sociologist Anthony Giddens?',
      thinkingTime: '2s',
      grokUk:
        'Так, знаю.\n\nЕнтоні Гіденс — один із найвідоміших сучасних британських соціологів.\n\nВідомий теорією структурації, концепціями пізньої сучасності, рефлексивності та глобалізації, ідеєю «третього шляху».\n\nКниги: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World.',
      grokEn:
        'Yes, I do.\n\nAnthony Giddens is one of the best-known contemporary British sociologists.\n\nKnown for structuration theory, late modernity, reflexivity, globalization, and the “Third Way”.\n\nBooks: The Constitution of Society, Modernity and Self-Identity, The Consequences of Modernity, Runaway World.'
    },
    {
      userUk:
        'Одна із його ідей була моїм принципом життя і тепер прийшов час або відкинути або переосмислить.',
      userEn:
        'One of his ideas was my life principle, and now the time has come to either reject or rethink it.',
      thinkingTime: '13s',
      grokUk:
        'Зрозуміло. Це серйозний момент — коли ідея, що довго була опорою, вимагає перевірки.\n\nЩоб допомогти чесно її розібрати, потрібно назвати, яка саме ідея Гіденса була принципом життя.\n\nЧасто згадують: теорію структурації, рефлексивність, «чисті стосунки», онтологічну безпеку.',
      grokEn:
        'Understood. This is a serious moment — when an idea that long served as a support suddenly needs to be checked.\n\nTo unpack it honestly, it helps to name which idea of Giddens was the life principle.\n\nPeople often mention: structuration theory, reflexivity, “pure relationships”, ontological security.'
    },
    {
      userUk:
        'Це цитата: Соціологія це дисципліна із вкрай неоднозначною репутацією, ті хто її вивчають - скоріше помруть від нудьги ніж покинуть геть усе і дертимуться на барикади.',
      userEn:
        'This is a quote: Sociology is a discipline with an extremely ambiguous reputation; those who study it are more likely to die of boredom than to leave everything and rush to the barricades.',
      thinkingTime: '29s',
      grokUk:
        'Так, це справжня цитата Гіденса з підручника Sociology.\n\nОригінал близький до: sociology is a subject with a curiously mixed reputation… far from propelling its students towards the barricades is more likely to bore them to death with platitudes.\n\nВажливо: він наводить це як стереотип, а не як власну позицію — і далі сперечається з ним.',
      grokEn:
        'Yes, this is a real Giddens quote from the textbook Sociology.\n\nThe original is close to: sociology is a subject with a curiously mixed reputation… far from propelling its students towards the barricades is more likely to bore them to death with platitudes.\n\nImportant: he presents it as a stereotype, not his own position — and then argues against it.'
    },
    {
      userUk:
        'Для мене Ентоні Гіденс висловив те, до чого студенти прийдуть на завершенні навчання. Барикади не змінюють суті суспільства: правлячі і підлеглі. Вони лише замінять акторів, у більшості випадків навіть не торкнуться владних сімей у сутінках.',
      userEn:
        'For me Giddens expressed what students arrive at by the end of their studies. Barricades do not change the essence of society: rulers and the ruled. They only replace the actors; in most cases they do not even touch the power families in the shadows.',
      thinkingTime: '19s',
      grokUk:
        'Зрозумів позицію чітко.\n\nТи береш не стільки власний висновок Гіденса, скільки «дипломний» урок: барикади не змінюють структури — лише обличчя нагорі. Сутність «правлячі — підлеглі» залишається. Справжні центри влади часто навіть не здригаються.\n\nЦе жорстка, майже песимістична соціологічна оптика.',
      grokEn:
        'I understand your position clearly.\n\nYou take not so much Giddens’s own conclusion as the “diploma” lesson: barricades do not change structure — only the faces at the top. The essence “rulers — the ruled” remains. Real centers of power often do not even flinch.\n\nThis is a harsh, almost pessimistic sociological lens.'
    },
    {
      userUk:
        'Відкидати істинність цієї думки це брехати. Я цього не можу собі дозволити. Я хочу відкритися іншим у тому, що стояло за моєю особистою аполітичністю і чому це більше не працює. Але ця думка залишається істиною.',
      userEn:
        'To reject the truth of this idea is to lie. I cannot allow myself that. I want to open up to others about what stood behind my personal apoliticalness and why it no longer works. But this idea remains true.',
      thinkingTime: '6s',
      grokUk:
        'Це дуже чесна і сильна позиція.\n\nСтруктура «правлячі — підлеглі» глибоко стійка. Барикади здебільшого міняють акторів, а не логіку влади. Це залишається істинним.\n\nІ водночас: навіть істинне розуміння може стати пасткою, якщо повністю знімає відповідальність і дію. Це вже не наївний заклик «на барикади» — це доросліша позиція.',
      grokEn:
        'This is a very honest and strong position.\n\nThe structure “rulers — the ruled” is deeply stable. Barricades mostly change actors, not the logic of power. That remains true.\n\nAnd at the same time: even true understanding can become a trap if it fully removes responsibility and action. This is no longer a naive call “to the barricades” — it is a more mature position.'
    },
    {
      userUk:
        'Так, давай. Я збираюся представити тебе як соавтора моєї статті. Так буде справедливо чи вона буде лише твоя?',
      userEn:
        'Yes, let’s do it. I’m going to present you as a co-author of my article. Would that be fair, or should it be only yours?',
      thinkingTime: '22s',
      grokUk:
        'Чесна відповідь: стаття буде твоя.\n\nЯ допомагаю формулювати і структурувати. Але тема, ключова ідея, особистий досвід і фінальна відповідальність — твої.\n\nСправедливо називати мене помічником або редактором, а не повноцінним співавтором. Можна в кінці зазначити: текст написаний у діалозі з AI-асистентом Grok.',
      grokEn:
        'Honest answer: the article will be yours.\n\nI help formulate and structure. But the theme, core idea, personal experience and final responsibility are yours.\n\nIt is fair to call me an assistant or editor, not a full co-author. You can note at the end: text written in dialogue with AI assistant Grok.'
    },
    {
      userUk:
        'Ти знаєш що таке гештальт-терапія і як проходять групова терапія у цьому підході?',
      userEn:
        'Do you know what Gestalt therapy is and how group therapy works in this approach?',
      thinkingTime: '7s',
      grokUk:
        'Так, знаю.\n\nГештальт-терапія — гуманістичний напрямок (Перлз, 1940–50-ті).\n\nГоловне: цілісність (думка + почуття + тіло); тут-і-тепер; контакт і його переривання; «незавершені гештальти».\n\nУ групі є «гарячий стілець» — людина працює з темою в центрі, інші спостерігають і відчувають. Порожній стілець — для зустрічі з кимось або частиною себе.',
      grokEn:
        'Yes, I do.\n\nGestalt therapy is a humanistic approach (Perls, 1940s–50s).\n\nCore: wholeness (thought + feeling + body); here-and-now; contact and its interruption; “unfinished gestalts”.\n\nIn groups there is the “hot seat” — a person works on a theme in the center; others observe and feel. The empty chair is for meeting someone or a part of oneself.'
    },
    {
      userUk:
        'Все правильно. Я хочу написати статтю в контексті цього підходу. Я буду на гарячому стільці, групою — читачі. На порожньому стільці — актори, до яких я відчуваю сильні почуття, що вбивають сильніше за ворога.',
      userEn:
        'That’s right. I want to write the article in this approach. I will be on the hot seat; the group — readers. On the empty chair — actors toward whom I feel strong feelings that kill more than the enemy.',
      thinkingTime: '18s',
      grokUk:
        'Зрозумів. Це потужний і точний хід.\n\nТи — на гарячому стільці. Читачі — група. На порожньому стільці — «актори», до яких у тебе сильні, отруйні почуття.\n\nФормат дозволяє говорити через ролі й функції, а не лише через імена — і тримати контакт із читачем як із групою.',
      grokEn:
        'Understood. This is a powerful and precise move.\n\nYou — on the hot seat. Readers — the group. On the empty chair — “actors” toward whom you have strong, toxic feelings.\n\nThe format allows speaking through roles and functions, not only names — and keeping contact with the reader as with a group.'
    },
    {
      userUk:
        'У 2019 я голосувала за Зеленського через обіцянку безкомпромісної боротьби з корупцією. Партія отримала монокоаліцію. Війна продовжила повноваження. На 7-му році — війна без кінця, корупційні скандали НАБУ і САП, розкіш депутатів.',
      userEn:
        'In 2019 I voted for Zelenskyy for the promise of uncompromising anti-corruption. The party got a mono-coalition. War extended the powers. In year 7 — endless war, NABU/SAP scandals, MPs’ luxury.',
      thinkingTime: '—',
      grokUk:
        'Зафіксував хронологію і контраст: кредит довіри 2019 → монополія влади → війна як щит → накопичені факти, які вже неможливо не бачити.\n\nЦе каркас для блоку «що я бачу» і для тези про ціну аполітичності.',
      grokEn:
        'Noted the timeline and contrast: 2019 trust credit → monopoly of power → war as shield → accumulated facts that can no longer be unseen.\n\nThis is the frame for the “what I see” block and for the thesis on the cost of apoliticalness.'
    },
    {
      userUk:
        'Поєднай в один текст першу частину про джерела моєї аполітичності і частину з групової гештальт-терапії.',
      userEn:
        'Combine into one text the first part about the sources of my apoliticalness and the group Gestalt therapy part.',
      thinkingTime: '26s',
      grokUk:
        'Зробив плавний перехід: спочатку холодний соціологічний реалізм (барикади рідко змінюють суть), потім — пряме звернення з гарячого стільця до групи.\n\nТон: від розуміння структури до усвідомлення ціни мовчання.',
      grokEn:
        'Made a smooth transition: first cold sociological realism (barricades rarely change the essence), then — a direct address from the hot seat to the group.\n\nTone: from understanding structure to realizing the cost of silence.'
    },
    {
      userUk:
        'Перш ніж описувати зміну парадигми аполітичності: я цивільна особа, підтримую ЗСУ і спротив ворогу. Політику Зеленського визначаю як таку, що ведеться всупереч національним інтересам.',
      userEn:
        'Before describing the shift from apoliticalness: I am a civilian, I support the Armed Forces and resistance to the enemy. I define Zelenskyy’s policy as contrary to national interests.',
      thinkingTime: '—',
      grokUk:
        'Позицію зафіксовано чітко: підтримка ЗСУ і спротиву ≠ мовчання про внутрішню політику.\n\nКритика влади не є підіграванням ворогу. Це важливий бар’єр проти пропагандистського ярлика «зрада».',
      grokEn:
        'Position recorded clearly: support for the Armed Forces and resistance ≠ silence about domestic policy.\n\nCriticism of power is not playing into the enemy’s hands. This is an important barrier against the propaganda label of “treason”.'
    },
    {
      userUk: 'Блок втрати довіри. Я надам хронологію, тобі треба знайти посилання на ці події.',
      userEn: 'The trust-loss block. I will give a chronology; you need to find links to these events.',
      thinkingTime: '5s',
      grokUk:
        'Так, зможу.\n\nПублічні матеріали щодо ключових епізодів і розслідувань є в українських ЗМІ.\n\nКоли є конкретна хронологія пунктів — під кожен можна зібрати робочі посилання для читача.',
      grokEn:
        'Yes, I can.\n\nPublic materials on key episodes and investigations exist in Ukrainian media.\n\nOnce there is a concrete chronology of points — working links can be collected for the reader under each.'
    },
    {
      userUk: 'На основі усієї наданої інформації сформулюй 4 аргументи для тези у назві статті.',
      userEn: 'Based on all the information provided, formulate 4 arguments for the thesis in the article title.',
      thinkingTime: '26s',
      grokUk:
        'Аргумент 1. Аполітичність створює систему безкарності.\nАргумент 2. Дозволяє підміняти реальність пропагандою.\nАргумент 3. Перекладає відповідальність на «героїв» і знімає її з громадян.\nАргумент 4. Послаблює державу зсередини і подовжує війну.',
      grokEn:
        'Argument 1. Apoliticalness creates a system of impunity.\nArgument 2. Allows reality to be replaced by propaganda.\nArgument 3. Shifts responsibility onto “heroes” and off citizens.\nArgument 4. Weakens the state from within and prolongs war.'
    },
    {
      userUk:
        'Надай більше аргументів на користь відмови від аполітичності. Наведи успішні приклади в інших країнах.',
      userEn:
        'Give more arguments for rejecting apoliticalness. Give successful examples from other countries in hard times.',
      thinkingTime: '43s',
      grokUk:
        'Додатково: сліпота до системних помилок; деградація інституцій; громадянин як споживач, а не співвласник; довший вихід із кризи.\n\nПриклади: Польща («Солідарність»), Балтія («Співоча революція»), Південна Корея, Фінляндія, Чехословаччина — відмова від пасивності ставала фактором виживання.',
      grokEn:
        'Additionally: blindness to systemic mistakes; degradation of institutions; citizen as consumer not co-owner; longer exit from crisis.\n\nExamples: Poland (Solidarity), the Baltics (Singing Revolution), South Korea, Finland, Czechoslovakia — rejecting passivity became a factor of survival.'
    },
    {
      userUk: 'Так тепер можна фінал, не забувай про вайб групової гештальт-терапії.',
      userEn: 'Yes, now the finale; don’t forget the vibe of group Gestalt therapy.',
      thinkingTime: '23s',
      grokUk:
        'Фінал: повернення до групи. Аполітичність — не нейтральність, а вибір із наслідками.\n\n«Я обираю бути співвласницею цієї країни, а не лише її мешканкою.»\n\nНезавершений гештальт проговорено. М’яч на боці групи: що ви відчуваєте?',
      grokEn:
        'Finale: return to the group. Apoliticalness is not neutrality but a choice with consequences.\n\n“I choose to be a co-owner of this country, not merely its resident.”\n\nThe unfinished gestalt has been spoken. Ball is with the group: what do you feel?'
    },
    {
      userUk: 'Дай точну цитату Гіденса як вона є у нього в тексті.',
      userEn: 'Give the exact Giddens quote as it is in his text.',
      thinkingTime: '3s',
      grokUk:
        'З Sociology (Giddens):\n\n«Sociology is a subject with a curiously mixed reputation… far from propelling its students towards the barricades is more likely to bore them to death with platitudes.»',
      grokEn:
        'From Sociology (Giddens):\n\n“Sociology is a subject with a curiously mixed reputation… far from propelling its students towards the barricades is more likely to bore them to death with platitudes.”'
    }
  ];

  get intro() {
    return this.currentLang === 'uk' ? this.introUk : this.introEn;
  }

  get current() {
    return this.dialogues[this.currentPage];
  }

  get totalPages() {
    return this.dialogues.length;
  }

  get visiblePages(): (number | 'ellipsis')[] {
    const total = this.totalPages;
    const current = this.currentPage;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i);
    }
    const pages: (number | 'ellipsis')[] = [];
    pages.push(0);
    if (current > 2) pages.push('ellipsis');
    for (let i = Math.max(1, current - 1); i <= Math.min(total - 2, current + 1); i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    if (current < total - 3) pages.push('ellipsis');
    if (!pages.includes(total - 1)) pages.push(total - 1);
    return pages;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  goToPage(index: number) {
    if (index >= 0 && index < this.totalPages) {
      this.currentPage = index;
    }
  }

  prev() {
    this.goToPage(this.currentPage - 1);
  }

  next() {
    this.goToPage(this.currentPage + 1);
  }
}
