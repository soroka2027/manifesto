import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-manifest',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent {
  // FINAL5
  currentLang: 'uk' | 'en' = 'uk';
  currentPage = 0;

  titleUk = 'Війна як наслідок аполітичності';
  titleEn = 'War as a Consequence of Apoliticalness';

  pagesUk: string[][] = [
     [
      'Аполітичність — це свідоме або несвідоме самоусунення громадянина від контролю за політичними процесами, яке виражається у байдужості до діяльності державних інститутів та добровільній відмові від відповідальності за державний курс країни між виборами.',
      'На практиці аполітичність звучить так:',
      '«Я поза політикою, мене це не стосується».',
      '«Політика — це брудна справа, я туди не лізу, щоб не бруднитися».',
      '«Від мого голосу чи думки все одно нічого не зміниться».',
      '«Там нагорі без нас уже все давно вирішили й поділили».',
      '«Усі вони однакові, яка різниця, хто при владі — декорації змінюються, суть залишається».',
      '«Моя справа — просто чесно робити свою роботу/волонтерити, а в державні справи нехай лізуть політики».',
      '«Зараз війна, критикувати владу не на часі, розберемося після перемоги».',
      'Мене звати Альона. Я професійний викладач вищої школи, кандидат соціологічних наук, доцент. Освіта, професія і сім років у гештальт-терапії сформували мій спосіб бачити світ.',
      'Довго моїм девізом була фраза Ентоні Ґідденса про те, що соціологи скоріше помруть від нудьги, ніж підуть на барикади. Я була переконана: барикади лише змінюють акторів на сцені, тоді як справжні ляльководи залишаються в тіні. Ця думка давала мені затишну внутрішню свободу, захист від розчарувань і… залізне виправдання для моєї аполітичності.',
      'Ця позиція довго працювала. Аж поки не стала небезпечною.',
      'Бо є моменти, коли навіть істинне розуміння структури перетворюється на виправдання мовчання. А мовчання має свою ціну, дуже конкретну — життя.',
    ],
    [
      'Тому сьогодні я роблю те, чого довго уникала.',
      'Я сідаю на «гарячий стілець».',
      'Для тих, хто не знайомий з гештальт-підходом, коротко поясню, що зараз відбувається.',
      'У груповій гештальт-терапії є формат, коли одна людина сідає навпроти терапевта (або просто в центр) і працює зі своєю темою тут-і-тепер. Це називається «гарячий стілець».',
      'Решта групи присутня, спостерігає і відчуває.',
      'Навпроти може стояти порожній стілець — на нього умовно садять людину, ситуацію або частину себе, з якою потрібно зустрітися.',
      'Мета — не проаналізувати і не «вирішити», а підвищити усвідомленість: що я насправді відчуваю, що перериває мій контакт, що залишається незавершеним.',
      'Сьогодні група — це ви. Усі, хто читає ці рядки.',
      'А на порожньому стільці — ви, Володимире Олександровичу, і ви, «Слуги народу», які отримали від нас монопольну владу.',
      'У 2019-му я віддала вам свій голос.',
      'Я не наївно вірила, що ви зміните природу влади.',
      'Я пам’ятаю про структуру «правлячі — підлеглі».',
      'Але я голосувала не за зміну природи.',
      'Я голосувала за те, щоб хоча б на цьому місці, у цей історичний момент, хтось нарешті почав робити те, що пообіцяв.',
      'А ви тоді сказали найпростіше і найважливіше: корупціонери будуть покарані. Справедливими вироками. Безкомпромісно.',
      'Ви отримали все. Президентство. Монокоаліцію. Повну можливість діяти.',
      'А потім почалася велика війна.',
      'І вона стала вашим щитом. Воєнний стан дозволив вам і вашій партії відмовити українцям у проведенні чергових виборів і залишитися при владі.',
    ],
    [
      'Зараз сьомий рік вашого правління.',
      'І я дивлюся на вас і бачу не те, за що голосувала.',
      'Я бачу корупційні схеми, які розслідують НАБУ і САП, і які тягнуться прямо у ваш офіс і ваш парламент.',
      'Я бачу депутатів, які живуть так, ніби війни немає: будинки за кордоном, діти в найкращих університетах світу.',
      'Я бачу генерального прокурора, якого ви особисто призначили, — і який втік, бо кришував злодійство.',
      'Я бачу розкол у силових структурах: одні воюють і гинуть, інші — охороняють гроші і мафію.',
      'Я бачу, як ви з бюджету годуєте свій марафон і свій піар, який уже давно став пропагандою.',
      'Я бачу, як ви ігноруєте антикорупційні закони, від яких залежить міжнародна допомога.',
      'Я бачу мінімальну пенсію 2500 грн. і зарплату судді в 300000 грн.',
      'Я бачу, як суддям і прокурорам підвищують виплати на десятки відсотків, а військовим — нуль.',
      'Це далеко не повний список!',
      'Ці факти ранять, але найгірше в тому, що ви, Володимире Олександровичу, взяли наш запит на справедливість і перетворили його на декорацію.',
      'Ви сіли на місце, яке ми вам дали з довірою, і використовуєте війну як вічне виправдання, чому обіцянки можна не виконувати.',
      'І це вбиває сильніше, ніж зовнішній ворог.',
      'Бо зовнішній ворог — він відкритий.',
      'А ви були «своїми».',
    ],
    [
      'Тепер я повертаюся до тебе, групо.',
      'Я довго перебувала у бульбашці аполітичності, але сьогодні я бачу іншу її сторону. І тому я стверджую:',
      'Війна — це також і наслідок нашої групової аполітичності.',
      'Коли ми кажемо «я в політику не лізу», ми добровільно віддаємо право розпоряджатися майбутнім наших дітей мафії та некомпетентним дилетантам. Ми перетворюємося на споживачів, а не на співвласників держави.',
      'Бути «поза політикою» — це зручна дитяча бульбашка. Яка дозволяє зняти з себе всю відповідальність за свою країну і перекласти її на «лідерів-героїв».',
      'Аполітичність більшості створює для влади простір безконтрольності і безкарності, де корупція вимиває гроші, необхідні для виживання на фронті. Корупція послаблює державу зсередини і зовні. І тим подовжує війну.',
      'Історія дає нам приклади, де у найважчі моменти для нації саме відмова від аполітичності ставала фактором її виживання і подальшого відновлення.',
    ],
    [
      'Тепер, розуміючи і знаючи це все, я більше не можу триматися за стару формулу.',
      'Не тому, що вона раптом стала для мене брехнею.',
      'А тому, що в умовах війни її ціна стала занадто високою.',
      'Я бачу, як аполітичність послаблює країну і бачу, як вона вбиває.',
      'Я більше не згодна про це мовчати.',
      'Цей маніфест написано не для того, щоб закликати всіх на барикади.',
      'Я хочу сказати інше:',
      'Аполітичність — це вибір. І цей вибір має наслідки.',
      'У момент екзистенційної загрози я обираю інше.',
      'Я обираю бачити.',
      'Я обираю називати речі своїми іменами.',
      'Я обираю не захищати зручні ілюзії.',
      'Я ОБИРАЮ БУТИ СПІВВЛАСНИЦЕЮ ЦІЄЇ КРАЇНИ, А НЕ ЛИШЕ ЇЇ МЕШКАНКОЮ.',
      'Групо, я закінчила роботу на цьому стільці.',
      'Незавершений гештальт проговорено.',
      'Тепер м’яч на вашому боці.',
      'Що ви відчуваєте?',
      'Що з вами відбувається, поки ви це чуєте?',
    ],
  ];

  pagesEn: string[][] = [
    [
      'Apoliticalness is a conscious or unconscious withdrawal of a citizen from control over political processes, expressed in indifference to the work of state institutions and a voluntary refusal of responsibility for the country’s course between elections.',
      'In practice apoliticalness sounds like this:',
      '“I am outside politics; this does not concern me.”',
      '“Politics is a dirty business; I stay out so as not to get dirty.”',
      '“My vote or opinion will not change anything anyway.”',
      '“Up there everything was decided and divided long ago without us.”',
      '“They are all the same; what difference does it make who is in power — the scenery changes, the essence remains.”',
      '“My job is simply to do my work honestly / volunteer; let the politicians deal with state affairs.”',
      '“There is a war now; criticizing the authorities is not the time; we will sort it out after victory.”',
      'My name is Alyona. I am a professional university lecturer, PhD in Sociology, associate professor. Education, profession and seven years in Gestalt therapy shaped the way I see the world.',
      'For a long time my motto was Anthony Giddens’s phrase that sociologists are more likely to die of boredom than to go to the barricades. I was convinced: barricades only change the actors on stage, while the real puppet masters remain in the shadows. This thought gave me cozy inner freedom, protection from disappointment, and… an iron justification for my apoliticalness.',
      'This position worked for a long time. Until it became dangerous.',
      'Because there are moments when even a true understanding of structure turns into a justification for silence. And silence has a price — a very concrete one: life.',
    ],
    [
      'So today I do what I long avoided.',
      'I sit on the “hot seat”.',
      'For those unfamiliar with the Gestalt approach, I will briefly explain what is happening.',
      'In group Gestalt therapy there is a format when one person sits opposite the therapist (or simply in the center) and works with their theme here-and-now. This is called the “hot seat”.',
      'The rest of the group is present, observes and feels.',
      'Opposite may stand an empty chair — on which one symbolically places a person, a situation or a part of oneself that one needs to meet.',
      'The goal is not to analyze or “solve”, but to raise awareness: what I really feel, what interrupts my contact, what remains unfinished.',
      'Today the group is you. Everyone reading these lines.',
      'And on the empty chair — you, Volodymyr Oleksandrovych, and you, “Servants of the People”, who received monopoly power from us.',
      'In 2019 I gave you my vote.',
      'I did not naively believe you would change the nature of power.',
      'I remember the structure “rulers — the ruled”.',
      'But I did not vote for a change of nature.',
      'I voted so that at least in this place, at this historical moment, someone would finally start doing what was promised.',
      'And you then said the simplest and most important thing: corrupt officials will be punished. With fair sentences. Without compromise.',
      'You received everything. The presidency. A mono-coalition. Full capacity to act.',
      'Then the full-scale war began.',
      'And it became your shield. Martial law allowed you and your party to deny Ukrainians regular elections and remain in power.',
    ],
    [
      'It is now the seventh year of your rule.',
      'And I look at you and see not what I voted for.',
      'I see corruption schemes investigated by NABU and SAP that lead straight to your office and your parliament.',
      'I see MPs who live as if there is no war: houses abroad, children in the world’s best universities.',
      'I see the prosecutor general you personally appointed — who fled because he covered theft.',
      'I see a split in the security structures: some fight and die, others protect money and the mafia.',
      'I see how you feed your marathon and PR from the budget — PR that has long become propaganda.',
      'I see how you ignore anti-corruption laws on which international aid depends.',
      'I see a minimum pension of 2500 UAH and a judge’s salary of 300,000 UAH.',
      'I see raises for judges and prosecutors of tens of percent — and zero for the military.',
      'This is far from a full list!',
      'These facts hurt, but the worst is that you, Volodymyr Oleksandrovych, took our demand for justice and turned it into decoration.',
      'You sat in the place we gave you with trust, and you use the war as an eternal excuse for not keeping promises.',
      'And that kills more than the external enemy.',
      'Because the external enemy is open.',
      'And you were “ours”.',
    ],
    [
      'Now I return to you, group.',
      'I long stayed in a bubble of apoliticalness, but today I see its other side. And therefore I assert:',
      'War is also a consequence of our group apoliticalness.',
      'When we say “I don’t get involved in politics”, we voluntarily hand over the right to dispose of our children’s future to the mafia and incompetent amateurs. We turn into consumers, not co-owners of the state.',
      'Being “outside politics” is a convenient childhood bubble. It allows one to drop all responsibility for one’s country and shift it onto “hero-leaders”.',
      'The apoliticalness of the majority creates for power a space of uncontrolledness and impunity, where corruption drains the money needed for survival at the front. Corruption weakens the state from within and without. And thus prolongs the war.',
      'History gives us examples where in the hardest moments for a nation, refusing apoliticalness became a factor of its survival and later recovery.',
    ],
    [
      'Now, understanding and knowing all this, I can no longer hold on to the old formula.',
      'Not because it suddenly became a lie for me.',
      'But because in wartime its price became too high.',
      'I see how apoliticalness weakens the country and I see how it kills.',
      'I am no longer willing to stay silent about it.',
      'This manifesto is not written to call everyone to the barricades.',
      'I want to say something else:',
      'Apoliticalness is a choice. And this choice has consequences.',
      'In a moment of existential threat I choose differently.',
      'I choose to see.',
      'I choose to call things by their names.',
      'I choose not to protect comfortable illusions.',
      'I CHOOSE TO BE A CO-OWNER OF THIS COUNTRY, NOT MERELY ITS RESIDENT.',
      'Group, I have finished the work on this seat.',
      'The unfinished gestalt has been spoken.',
      'Now the ball is on your side.',
      'What do you feel?',
      'What is happening to you while you hear this?',
    ],
  ];

  get title() {
    return this.currentLang === 'uk' ? this.titleUk : this.titleEn;
  }

  get paragraphs(): string[] {
    if (this.currentLang === 'en') {
      return this.pagesEn[this.currentPage] || [];
    }
    return this.pagesUk[this.currentPage] || [];
  }

  get totalPages() {
    return this.pagesUk.length;
  }

  get pageIndexes(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
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
