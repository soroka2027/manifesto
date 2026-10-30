import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

interface ManifestPage {
  paragraphsUk: string[];
  paragraphsEn: string[];
}

@Component({
  selector: 'app-manifest',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss']
})
export class ManifestComponent {
  currentLang: 'uk' | 'en' = 'uk';
  currentPage = 0;

  titleUk = 'Війна як наслідок аполітичності';
  titleEn = 'War as a Consequence of Apoliticalness';

  pages: ManifestPage[] = [
    {
      paragraphsUk: [
        'Мене звати SOROKA.',
        'Я українка. Народилася і прожила все життя в Україні, за винятком півтора року — з травня 2022-го по листопад 2023-го — коли була біженкою в Німеччині.',
        'Я професійний викладач вищої школи, к.соц.н., доцент. За світоглядом гештальтіст. Освіта, професія і сім років у гештальт-терапії сформували мій спосіб бачити світ.',
        'Я довго жила з однією ясною думкою. Її сформулював британський соціолог Ентоні Гіденс:',
        '«Соціологія — дисципліна з украй неоднозначною репутацією. Ті, хто її вивчає, скоріше помруть від нудьги, ніж покинуть геть усе і дертимуться на барикади.»',
        'Для мене ця фраза стала не просто цитатою. Вона висловила те, до чого приходять багато хто з тих, хто серйозно вивчає суспільство.',
        'Барикади не змінюють суті існування суспільства як організації: правлячі і підлеглі. Вони лише замінюють Акторів. У більшості випадків навіть не торкаються справжніх владних сімей і мереж, які залишаються в сутінках.',
        'Ця думка захищала мене від наївного ентузіазму. Вона дозволяла дивитися на політичні цикли без ілюзій. Вона була чесною. І саме тому вона стала основою моєї аполітичності.'
      ],
      paragraphsEn: [
        'My name is SOROKA.',
        'I am Ukrainian. I was born and lived all my life in Ukraine, except for a year and a half — from May 2022 to November 2023 — when I was a refugee in Germany.',
        'I am a professional university lecturer, PhD in Sociology, associate professor. By worldview I am a gestaltist. Education, profession and seven years in Gestalt therapy shaped the way I see the world.',
        'For a long time I lived with one clear thought. It was formulated by the British sociologist Anthony Giddens:',
        '“Sociology is a subject with a curiously mixed reputation. Those who study it are more likely to die of boredom than to leave everything and rush to the barricades.”',
        'For me this phrase was not just a quote. It expressed what many of those who seriously study society eventually arrive at.',
        'Barricades do not change the essence of society as an organization: rulers and the ruled. They only replace the Actors. In most cases they do not even touch the real power families and networks that remain in the shadows.',
        'This thought protected me from naive enthusiasm. It allowed me to look at political cycles without illusions. It was honest. And that is why it became the foundation of my apolitical stance.'
      ]
    },
    {
      paragraphsUk: [
        'Я вважала: якщо глибинна гра майже не змінюється, то немає сенсу витрачати життя на чергову зміну декорацій. Краще розуміти, ніж бігти. Краще бачити механізм, ніж кричати на площі.',
        'Ця позиція довго працювала. Вона давала внутрішню свободу і захист від розчарувань. Аж поки не стала небезпечною.',
        'Бо є моменти, коли навіть істинне розуміння структури перетворюється на виправдання мовчання. І мовчання в такі моменти має свою ціну. Дуже конкретну.',
        'Тому сьогодні я роблю те, чого довго уникала. Я сідаю на «гарячий стілець».',
        'Для тих, хто не знайомий з гештальт-підходом, коротко поясню, що зараз відбувається.',
        'У груповій гештальт-терапії є формат, коли одна людина сідає в центр і працює зі своєю темою тут-і-тепер. Це називається «гарячий стілець». Решта групи присутня, спостерігає і відчуває. Навпроти може стояти порожній стілець — на нього умовно садять людину, ситуацію або частину себе, з якою потрібно зустрітися.',
        'Мета — не проаналізувати і не «вирішити», а підвищити усвідомленість: що я насправді відчуваю, що перериває мій контакт, що залишається незавершеним.',
        'Сьогодні група — це ви. Усі, хто читає ці рядки. А на порожньому стільці — ви, Володимире Олександровичу, і ви, «Слуги народу», які отримали від нас монопольну владу.'
      ],
      paragraphsEn: [
        'I believed: if the deep game barely changes, there is no point spending life on another change of scenery. Better to understand than to run. Better to see the mechanism than to shout in the square.',
        'This position worked for a long time. It gave inner freedom and protection from disappointment. Until it became dangerous.',
        'Because there are moments when even a true understanding of structure turns into a justification for silence. And silence in such moments has a price. A very concrete one.',
        'So today I do what I long avoided. I sit on the “hot seat”.',
        'For those unfamiliar with the Gestalt approach, I will briefly explain what is happening.',
        'In group Gestalt therapy there is a format when one person sits in the center and works with their theme here-and-now. This is called the “hot seat”. The rest of the group is present, observes and feels. Opposite may stand an empty chair — on which one symbolically places a person, a situation or a part of oneself that one needs to meet.',
        'The goal is not to analyze or “solve”, but to raise awareness: what I really feel, what interrupts my contact, what remains unfinished.',
        'Today the group is you. Everyone reading these lines. And on the empty chair — you, Volodymyr Oleksandrovych, and you, “Servants of the People”, who received monopoly power from us.'
      ]
    },
    {
      paragraphsUk: [
        'У 2019-му я віддала вам свій голос. Не тому, що вірила в чудеса. А тому, що ви сказали найпростіше і найважливіше: корупціонери будуть покарані. Справедливими вироками. Безкомпромісно.',
        'Ви отримали все. Президентство. Монокоаліцію. Повну можливість діяти. А потім почалася велика війна. І вона стала вашим щитом.',
        'Воєнний стан дозволив вам і вашій партії відмовити українцям у проведенні чергових виборів і залишитися при владі. Зараз сьомий рік вашого правління. І я дивлюся на вас і бачу не те, за що голосувала.',
        'Я бачу корупційні схеми, які розслідують НАБУ і САП, і які тягнуться прямо у ваш офіс і ваш парламент.',
        'Я бачу депутатів, які живуть так, ніби війни немає: будинки за кордоном, діти в найкращих університетах світу.',
        'Я бачу генерального прокурора, якого ви особисто призначили, — і який втік, бо кришував злодійство.',
        'Я бачу розкол у силових структурах: одні воюють і гинуть, інші — охороняють гроші і мафію.',
        'Я бачу, як ви з бюджету годуєте свій марафон і свій піар, який уже давно став пропагандою. Як ігноруєте антикорупційні закони, від яких залежить міжнародна допомога. Мінімальну пенсію 2500 грн і зарплату судді в 300 000 грн. Підвищення суддям і прокурорам — і нуль військовим.',
        'Це не повний список. Це лише те, що вже неможливо не бачити.'
      ],
      paragraphsEn: [
        'In 2019 I gave you my vote. Not because I believed in miracles. But because you said the simplest and most important thing: corrupt officials will be punished. With fair sentences. Without compromise.',
        'You received everything. The presidency. A mono-coalition. Full capacity to act. Then the full-scale war began. And it became your shield.',
        'Martial law allowed you and your party to deny Ukrainians regular elections and remain in power. It is now the seventh year of your rule. And I look at you and see not what I voted for.',
        'I see corruption schemes investigated by NABU and SAP that lead straight to your office and your parliament.',
        'I see MPs who live as if there is no war: houses abroad, children in the world’s best universities.',
        'I see the prosecutor general you personally appointed — who fled because he covered theft.',
        'I see a split in the security structures: some fight and die, others protect money and the mafia.',
        'I see how you feed your marathon and PR from the budget — PR that has long become propaganda. How you ignore anti-corruption laws on which international aid depends. A minimum pension of 2500 UAH and a judge’s salary of 300,000 UAH. Raises for judges and prosecutors — and zero for the military.',
        'This is not a full list. This is only what is already impossible not to see.'
      ]
    },
    {
      paragraphsUk: [
        'Найгірше навіть не в цифрах. Найгірше в тому, що ви взяли наш запит на справедливість і перетворили його на декорацію. Ви сіли на місце, яке ми вам дали з довірою, і використовуєте війну як вічне виправдання, чому обіцянки можна не виконувати.',
        'Я не наївно вірила, що ви зміните природу влади. Я пам’ятаю про структуру «правлячі — підлеглі». Але я голосувала не за зміну природи. Я голосувала за те, щоб хоча б на цьому місці, у цей історичний момент, хтось нарешті почав робити те, що пообіцяв.',
        'Ви цього не зробили. І це вбиває сильніше, ніж зовнішній ворог. Бо зовнішній ворог — він відкритий. А ви були «своїми».',
        'Мій шлях до тези, що стала назвою статті, був довгим і непростим.',
        'Спочатку аполітичність ґрунтувалася на соціологічній неосвіченості. Я належала до тих, хто, не будучи при владі, непогано влаштувався поруч із правлячими сім’ями. Нам вистачало. Ми жили. Ми не лізли.',
        'Потім — аспірантура, викладання, цитата Гіденса на лекціях. Я давала її студентам без пояснень — щоб вони самі поверталися до неї і переосмислювали. Пізніше — кафедра психології. Аполітичність стала способом зберігати рівновагу.',
        'Навіть коли почалася повномасштабна війна, я шукала причини лише у зовнішньому ворогові. Був «хороший президент» — майже герой. Цифрова держава. Не втік у 2022-му. Невтомно шукав підтримку світу.',
        'Я трималася цієї картини довго. Навіть після справи «Династія», де на записах звучав «Вова». Я захищала думку, що це не він. Тепер думаю — це саме він. І це жах.'
      ],
      paragraphsEn: [
        'The worst is not even in the numbers. The worst is that you took our demand for justice and turned it into decoration. You sat in the place we gave you with trust, and you use the war as an eternal excuse for not keeping promises.',
        'I did not naively believe you would change the nature of power. I remember the structure “rulers — the ruled”. But I did not vote for a change of nature. I voted so that at least in this place, at this historical moment, someone would finally start doing what was promised.',
        'You did not. And that kills more than the external enemy. Because the external enemy is open. And you were “ours”.',
        'My path to the thesis that became the title of this article was long and difficult.',
        'At first apoliticalness was based on sociological unawareness. I belonged to those who, without being in power, settled quite well next to the ruling families. We had enough. We lived. We did not interfere.',
        'Then — graduate school, teaching, Giddens’s quote in lectures. I gave it to students without explanation — so they would return to it and rethink it themselves. Later — the psychology department. Apoliticalness became a way to keep balance.',
        'Even when the full-scale war began, I looked for causes only in the external enemy. There was a “good president” — almost a hero. Digital state. Did not flee in 2022. Tirelessly sought the world’s support.',
        'I held on to this picture for a long time. Even after the “Dynasty” case, where “Vova” was heard on the tapes. I defended the idea that it was not him. Now I think — it is him. And that is horror.'
      ]
    },
    {
      paragraphsUk: [
        'Я — цивільна особа. Підтримую ЗСУ і політику спротиву ворогу. Політику Зеленського в її нинішньому вигляді визначаю як таку, що ведеться всупереч національним інтересам України.',
        'Легітимність для мене зруйнувалася майже миттєво. Усвідомлення трансформації і рішення написати цю статтю зайняло два місяці.',
        'Все почалося 16 липня 2026 з картонкових протестів і брифінгу Михайла Федорова: діджиталізацію робив він і його команда; його звільнили в момент плану перемоги і реформ в оборонці. Країна залишилася без міністра оборони в розпал війни. Парламент пішов на канікули.',
        '19 серпня 2026 — відео-заява Федорова про корупцію, зловживання довірою і необхідність виборів. Пізніше з’ясувалося: Зеленський брехав про «неможливість» виборів.',
        '21 серпня я приєдналася до активної громадськості. Далі — матеріали НАБУ і САП, затримання, плівки. Сумніви щодо «Вови» зникли. Відповіді президента не було. Або вона була стриманою і байдужою.',
        'Політика Зеленського — провокативність плюс безвідповідальність: «шашлики» у лютому 2022-го; блокбастер «Кіллхаус» у розпал війни 2026-го. Кадрова політика на кумівстві, ручне керування, узурпація.',
        'Існуюча політика завдає шкоди державі. Гроші, які ми не контролюємо, легко крадуть. Під час війни це залишає мало шансів вижити.',
        'Я стверджую: війна є також наслідком нашої групової аполітичності.'
      ],
      paragraphsEn: [
        'I am a civilian. I support the Armed Forces of Ukraine and the policy of resisting the enemy. I define Zelenskyy’s current policy as one pursued against Ukraine’s national interests.',
        'Legitimacy collapsed for me almost instantly. Realizing the transformation and deciding to write this article took two months.',
        'It all began on 16 July 2026 with cardboard protests and Mykhailo Fedorov’s briefing: he and his team built digitalization; he was dismissed at the moment of the victory plan and defense reforms. The country was left without a defense minister in the middle of war. Parliament went on holiday.',
        '19 August 2026 — Fedorov’s video statement on corruption, abuse of trust and the need for elections. Later it emerged that Zelenskyy had lied about the “impossibility” of elections.',
        'On 21 August I joined active civil society. Then — NABU and SAP materials, arrests, tapes. Doubts about “Vova” disappeared. There was no adequate presidential response — or it was restrained and indifferent.',
        'Zelenskyy’s policy — provocativeness plus irresponsibility: “barbecues” in February 2022; the blockbuster “Kill House” in the midst of war in 2026. Personnel policy based on nepotism, manual control, usurpation.',
        'The current policy harms the state. Money we do not control is easily stolen. In wartime this leaves little chance of survival.',
        'I assert: war is also a consequence of our group apoliticalness.'
      ]
    },
    {
      paragraphsUk: [
        'Аргумент 1. Аполітичність створює систему безкарності.',
        'Аргумент 2. Аполітичність дозволяє владі підміняти реальність пропагандою.',
        'Аргумент 3. Аполітичність перекладає всю відповідальність на «героїв» і знімає її з себе.',
        'Аргумент 4. Аполітичність подовжує війну, бо послаблює державу зсередини.',
        'Аргумент 5. Аполітичність робить суспільство сліпим до системних помилок у реальному часі.',
        'Аргумент 6. Аполітичність послаблює інституції, які мають захищати країну.',
        'Аргумент 7. Аполітичність перетворює громадян на споживачів, а не на співвласників держави.',
        'Аргумент 8. Аполітичність подовжує час виходу з кризи.',
        'Історія це підтверджує: Польща («Солідарність»), Балтія («Співоча революція»), Південна Корея, Фінляндія, Чехословаччина. У найважчі моменти відмова від аполітичності ставала фактором виживання.',
        'Я більше не можу триматися за стару формулу. Не тому, що вона стала брехнею. А тому, що в умовах війни її ціна стала занадто високою.',
        'Аполітичність — це не нейтральність. Це вибір. І цей вибір має наслідки.',
        'Я обираю бачити. Я обираю називати речі своїми іменами. Я обираю не захищати зручні ілюзії.',
        'Я ОБИРАЮ БУТИ СПІВВЛАСНИЦЕЮ ЦІЄЇ КРАЇНИ, А НЕ ЛИШЕ ЇЇ МЕШКАНКОЮ.',
        'Групо, я закінчила роботу на цьому стільці. Незавершений гештальт проговорено. Тепер м’яч на вашому боці.',
        'Що ви відчуваєте? Що з вами відбувається, поки ви це чуєте?'
      ],
      paragraphsEn: [
        'Argument 1. Apoliticalness creates a system of impunity.',
        'Argument 2. Apoliticalness allows power to replace reality with propaganda.',
        'Argument 3. Apoliticalness shifts all responsibility onto “heroes” and removes it from oneself.',
        'Argument 4. Apoliticalness prolongs war by weakening the state from within.',
        'Argument 5. Apoliticalness makes society blind to systemic mistakes in real time.',
        'Argument 6. Apoliticalness weakens the institutions that must protect the country.',
        'Argument 7. Apoliticalness turns citizens into consumers, not co-owners of the state.',
        'Argument 8. Apoliticalness lengthens the time needed to exit a crisis.',
        'History confirms this: Poland (Solidarity), the Baltics (Singing Revolution), South Korea, Finland, Czechoslovakia. In the hardest moments, refusing apoliticalness became a factor of survival.',
        'I can no longer hold on to the old formula. Not because it became a lie. But because in wartime its price became too high.',
        'Apoliticalness is not neutrality. It is a choice. And this choice has consequences.',
        'I choose to see. I choose to call things by their names. I choose not to protect comfortable illusions.',
        'I CHOOSE TO BE A CO-OWNER OF THIS COUNTRY, NOT MERELY ITS RESIDENT.',
        'Group, I have finished the work on this seat. The unfinished gestalt has been spoken. Now the ball is on your side.',
        'What do you feel? What is happening to you while you hear this?'
      ]
    }
  ];

  get title() {
    return this.currentLang === 'uk' ? this.titleUk : this.titleEn;
  }

  get current() {
    return this.pages[this.currentPage];
  }

  get paragraphs() {
    return this.currentLang === 'uk' ? this.current.paragraphsUk : this.current.paragraphsEn;
  }

  switchLang(lang: 'uk' | 'en') {
    this.currentLang = lang;
  }

  goToPage(index: number) {
    if (index >= 0 && index < this.pages.length) {
      this.currentPage = index;
    }
  }
}
