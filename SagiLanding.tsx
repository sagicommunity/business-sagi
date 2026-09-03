import { useEffect } from 'react';
import {
  Shield, Search, Store, Clock, RefreshCw, BarChart3, CheckCircle,
  ArrowRight, Smartphone, Users, TrendingUp, Headphones, GraduationCap,
  Briefcase, Bell, ChevronRight, Zap, Building2, CircleUser, ShoppingBag, Trophy,
  Globe, Target, Share2, MessageCircle, Star, Layers,
  Gift, Award, CreditCard, Percent, MapPin, Settings, DollarSign,
  Compass, UserPlus, Footprints, TreePine, Heart, Flame, Phone, Mail,
} from 'lucide-react';

const GREEN = '#2ABB6F';
const GREEN_DARK = '#1E9E5A';

// ─── BUSINESS COMPONENTS ──────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Search size={22} />,
      title: 'Найдите нужное сообщество',
      desc: 'Используйте каталог с фильтрами по нише, городу и размеру аудитории. Найдите площадку, где уже собрана ваша целевая аудитория.',
      color: '#EEF2FF', border: '#C7D2FE', iconColor: '#4338CA',
    },
    {
      num: '02',
      icon: <Target size={22} />,
      title: 'Сформируйте предложение для участников',
      desc: 'Скидка, бонус, специальные условия или эксклюзивное предложение только для членов сообщества. Участники получают реальную ценность.',
      color: '#EDFAF3', border: '#B6EDD2', iconColor: GREEN_DARK,
    },
    {
      num: '03',
      icon: <TrendingUp size={22} />,
      title: 'Получайте клиентов и растите',
      desc: 'Предложение попадает к аудитории, которой оно действительно релевантно. Участники приходят уже с доверием к вашему бренду.',
      color: '#FFF7ED', border: '#FED7AA', iconColor: '#C2410C',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Как это работает
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            От поиска аудитории<br />
            <span className="green-text">до первого клиента</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Три шага, чтобы начать размещать предложения в нужных сообществах.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.num} className="rounded-2xl p-7 border" style={{ background: s.color, borderColor: s.border }}>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: s.iconColor, color: 'white' }}>
                  {s.icon}
                </div>
                <span className="text-4xl font-black" style={{ color: s.iconColor, opacity: 0.15 }}>{s.num}</span>
              </div>
              <h3 className="text-lg font-black text-[#111827] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainBlock() {
  const pains = [
    {
      icon: <Target size={20} />, title: 'Стоимость клиента растёт',
      desc: 'Таргетинг в Instagram и Google дорожает каждый год. Средний клик от 800 ₸, 1000 показов от 6000 ₸. Вы платите за клики, но не всегда получаете продажи.',
      bg: '#FFF8F8', border: '#FED7D7', iconBg: '#FEE2E2', iconColor: '#DC2626',
    },
    {
      icon: <Search size={20} />, title: 'Объявления просто пролистывают',
      desc: 'Люди давно научились игнорировать баннеры и холодные объявления в ленте. Доверия к незнакомым брендам нет - конверсия стремится к нулю.',
      bg: '#F8F9FF', border: '#E0E7FF', iconBg: '#EEF2FF', iconColor: '#4338CA',
    },
    {
      icon: <BarChart3 size={20} />, title: 'Бюджет уходит на тесты',
      desc: 'Невозможно заранее просчитать реальную стоимость охвата нужной аудитории. Приходится сливать деньги на эксперименты без гарантий результата.',
      bg: '#FFFBF0', border: '#FDE68A', iconBg: '#FEF3C7', iconColor: '#D97706',
    },
    {
      icon: <Shield size={20} />, title: 'Нет доступа к лояльной аудитории',
      desc: 'Холодный трафик почти не конвертируется. А люди, которые уже доверяют кому-то - закрыты в сообществах, куда бизнес просто не заходит.',
      bg: '#F0FDF4', border: '#B6EDD2', iconBg: '#EDFAF3', iconColor: GREEN_DARK,
    },
  ];

  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Проблема
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Хватит тратить бюджет<br />
            <span className="green-text">на продвижение, которое не окупается</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Сегодня стоимость привлечения одного клиента постоянно растёт, а обычные объявления в ленте люди просто пролистывают.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {pains.map(p => (
            <div key={p.title} className="rounded-2xl p-6 border card-lift" style={{ background: p.bg, borderColor: p.border }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: p.iconBg }}>
                <div style={{ color: p.iconColor }}>{p.icon}</div>
              </div>
              <h3 className="text-base font-black text-[#111827] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionBlock() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Решение
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Ваши идеальные клиенты<br />
            <span className="green-text">уже собраны здесь</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Выбирайте сообщества, где живёт ваша аудитория. Будь то профессиональный клуб или локальное комьюнити - мы приводим вас к вашей целевой аудитории.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(140deg, #1D3828 0%, #0F2218 100%)' }}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: GREEN }}>
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                Это не просто объявление - это прямой доступ к лояльной аудитории
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Без посредников, без лишних затрат. Ваше предложение попадает к людям, которые уже объединены общим интересом и доверяют рекомендациям внутри своего круга.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Аудитория сегментирована по интересам и геолокации',
                  'Предложение выглядит как рекомендация, а не объявление',
                  'Прямой контакт без агентств и лишних наценок',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} style={{ color: GREEN, flexShrink: 0, marginTop: 2 }} />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-5" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { icon: <Target size={18} />, title: 'Точность', desc: 'Вы бьёте точно в цель. Никакого "слива" бюджета на тех, кому ваш продукт не интересен.' },
                { icon: <Users size={18} />, title: 'Доверие', desc: 'Ваше предложение выглядит как рекомендация внутри сообщества. Люди доверяют своим.' },
                { icon: <TrendingUp size={18} />, title: 'Экономия', desc: 'Стоимость привлечения реального покупателя через сообщество в разы ниже, чем в соцсетях.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: GREEN }}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div>
                    <div className="text-white font-black text-sm mb-1">{item.title}</div>
                    <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultBlock() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Результат
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Sagi превращает<br />
            <span className="green-text">общение в продажи</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <TrendingUp size={22} />, stat: 'Ниже CAC', title: 'Снижение стоимости привлечения', desc: 'Вы платите за доступ к уже прогретой аудитории, а не за холодные клики. Стоимость нового клиента падает.', color: GREEN, bg: '#EDFAF3', border: '#B6EDD2' },
            { icon: <Target size={22} />, stat: 'Выше CR', title: 'Высокая конверсия в покупку', desc: 'Предложение внутри сообщества конвертирует в разы лучше баннерной и таргетированной рекламы.', color: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE' },
            { icon: <Users size={22} />, stat: 'LTV растёт', title: 'Клиенты становятся постоянными', desc: 'Люди из сообществ приходят с доверием. Они возвращаются, рекомендуют и остаются с вами надолго.', color: '#C2410C', bg: '#FFF7ED', border: '#FED7AA' },
          ].map(item => (
            <div key={item.title} className="rounded-2xl p-7 border card-lift" style={{ background: item.bg, borderColor: item.border }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: item.color, color: 'white' }}>
                {item.icon}
              </div>
              <div className="text-2xl font-black mb-1" style={{ color: item.color }}>{item.stat}</div>
              <h3 className="text-base font-black text-[#111827] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityLedGrowth() {
  const pillars = [
    { icon: <Target size={20} />, title: 'Точность', desc: 'Вы бьёте точно в цель. Никакого "слива" бюджета на тех, кому ваш продукт не интересен. Только нужная аудитория.', stat: '3–5×', statLabel: 'выше конверсия', color: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE' },
    { icon: <Shield size={20} />, title: 'Доверие', desc: 'Участники сообществ активно следят за предложениями, бонусами и штампиками. Ваше предложение попадает к людям, которые уже привыкли взаимодействовать с брендами внутри платформы.', stat: '-40%', statLabel: 'ниже CAC', color: GREEN_DARK, bg: '#EDFAF3', border: '#B6EDD2' },
    { icon: <TrendingUp size={20} />, title: 'Экономия', desc: 'Стоимость привлечения одного реального покупателя через сообщество в разы ниже, чем в социальных сетях.', stat: '+60%', statLabel: 'выше LTV', color: '#C2410C', bg: '#FFF7ED', border: '#FED7AA' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Layers size={11} />
            Community Led Growth
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Рост через сообщества:<br />
            <span className="green-text">новый стандарт B2C маркетинга</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Community Led Growth (CLG) это стратегия, при которой бизнес растёт не за счёт маркетинговых бюджетов,
            а за счёт доверия внутри сообществ. Sagi делает этот канал доступным для любого бизнеса.
          </p>
        </div>

        <div className="rounded-2xl p-8 mb-10" style={{ background: 'linear-gradient(140deg, #1D3828 0%, #0F2218 100%)' }}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#2ABB6F] mb-3">Почему это работает</div>
              <h3 className="text-2xl font-black text-white mb-4">
                Люди доверяют сообществам,<br />а не холодным объявлениям
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                92% потребителей доверяют предложениям внутри сообществ больше, чем прямым объявлениям.
                Бренды, которые встраиваются в контекст сообщества, получают аудиторию с уже сформированным доверием.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Меньше бюджет', 'Выше конверсия', 'Органический рост', 'Лояльная аудитория'].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/80">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Таргетинг / холодные объявления', bar: 18, val: '~2%', color: '#6B7280' },
                { label: 'Community Led Growth', bar: 85, val: '~12%', color: GREEN },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-white/60">{item.label}</span>
                    <span className="text-sm font-black text-white">{item.val}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full transition-all" style={{ width: `${item.bar}%`, background: item.color }} />
                  </div>
                  <div className="text-[10px] text-white/30 mt-1">Средняя конверсия</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.title} className="rounded-2xl p-6 border card-lift" style={{ background: p.bg, borderColor: p.border }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: p.color, color: 'white' }}>
                {p.icon}
              </div>
              <div className="text-3xl font-black mb-0.5" style={{ color: p.color }}>{p.stat}</div>
              <div className="text-xs font-semibold mb-3" style={{ color: p.color }}>{p.statLabel}</div>
              <h4 className="text-base font-black text-[#111827] mb-2">{p.title}</h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TwoWaysBlock() {
  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Возможности платформы
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Два способа работать<br />
            <span className="green-text">с аудиторией в Sagi</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Рекламируйтесь в чужих сообществах или стройте своё — оба пути ведут к росту продаж.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-[#B6EDD2]" style={{ background: 'linear-gradient(160deg, #F2FDF7 0%, #EDFAF3 100%)' }}>
            <div className="p-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: GREEN, color: 'white' }}>
                <Building2 size={22} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: GREEN }}>Для тех, кто хочет удержать клиентов</div>
              <h3 className="text-2xl font-black text-[#111827] mb-3">Постройте своё сообщество</h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Создайте пространство для ваших клиентов внутри Sagi. Запустите программу лояльности, публикуйте новости и акции — и клиенты будут возвращаться снова и снова.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Star size={14} />, text: 'Бонусы, штампики и кэшбэк для постоянных клиентов' },
                  { icon: <Bell size={14} />, text: 'Лента новостей, акций и событий вашего бренда' },
                  { icon: <Users size={14} />, text: 'Прямое взаимодействие с аудиторией без посредников' },
                  { icon: <TrendingUp size={14} />, text: 'Аналитика активности и вовлечённости участников' },
                  { icon: <RefreshCw size={14} />, text: 'Клиенты возвращаются — LTV растёт' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#EDFAF3', color: GREEN }}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-[#374151] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="https://wa.me/77084857101" target="_blank" rel="noopener noreferrer" className="btn-green w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm shadow-md">
                Создать сообщество <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#C7D2FE]" style={{ background: 'linear-gradient(160deg, #F8F9FF 0%, #EEF2FF 100%)' }}>
            <div className="p-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#4338CA', color: 'white' }}>
                <Target size={22} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#4338CA' }}>Для тех, кто ищет новых клиентов</div>
              <h3 className="text-2xl font-black text-[#111827] mb-3">Размещайте предложения в чужих сообществах</h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Найдите сообщества, где уже собрана ваша аудитория. Предложите участникам скидку, бонус или специальные условия — и получите новых клиентов с доверием к вашему бренду.
              </p>
              <div className="space-y-3">
                {[
                  { icon: <Search size={14} />, text: 'Каталог сообществ с фильтрами по нише и городу' },
                  { icon: <Share2 size={14} />, text: 'Кросс-продвижение между смежными сообществами' },
                  { icon: <MessageCircle size={14} />, text: 'Нативное предложение в ленте, не баннер' },
                  { icon: <BarChart3 size={14} />, text: 'Аналитика охвата и отклика по каждому размещению' },
                  { icon: <Shield size={14} />, text: 'Только верифицированные сообщества с живой аудиторией' },
                ].map(item => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#EEF2FF', color: '#4338CA' }}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-[#374151] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="https://wa.me/77084857101" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm border-2 transition" style={{ borderColor: '#4338CA', color: '#4338CA' }}>
                Найти сообщество <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OffersShowcase() {
  const communities = [
    {
      icon: <GraduationCap size={20} />,
      avatarBg: '#2563EB',
      name: 'Meridian School',
      category: 'Школа · Астана',
      members: '2 700 родителей',
      offers: [
        { name: 'BookNook', initials: 'BN', color: '#2563EB', text: '\u221215% на учебники и канцтовары' },
        { name: 'KidsWear', initials: 'KW', color: '#DB2777', text: 'Кэшбэк 10%' },
        { name: 'MathPro', initials: 'MP', color: '#059669', text: 'Первое занятие бесплатно' },
        { name: 'FamilyCafe', initials: 'FC', color: '#D97706', text: '\u221220% по будням' },
      ],
    },
    {
      icon: <Trophy size={20} />,
      avatarBg: '#DC2626',
      name: 'Astana Sport Club',
      category: 'Спортивная ассоциация · Астана',
      members: '25 000 участников',
      offers: [
        { name: 'ProteinLab', initials: 'PL', color: '#DC2626', text: 'Кэшбэк 12%' },
        { name: 'FitGear', initials: 'FG', color: '#0EA5E9', text: '\u221215% на экипировку' },
        { name: 'RecoveryZone', initials: 'RZ', color: '#7C3AED', text: '\u221220% на первый сеанс' },
        { name: 'PulseGym', initials: 'PG', color: '#059669', text: 'Кэшбэк 8%' },
      ],
    },
    {
      icon: <Briefcase size={20} />,
      avatarBg: '#4338CA',
      name: 'Nova Consulting',
      category: 'Клуб предпринимателей · Алматы',
      members: '8 355 предпринимателей',
      offers: [
        { name: 'WorkHub', initials: 'WH', color: '#4338CA', text: '\u221225% на коворкинг' },
        { name: 'BrewBar', initials: 'BB', color: '#92400E', text: 'Кэшбэк 10%' },
        { name: 'CleanPro', initials: 'CP', color: '#0EA5E9', text: '\u221215% на химчистку' },
        { name: 'LunchBox', initials: 'LB', color: '#D97706', text: 'Кэшбэк 7%' },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Как это выглядит у клиентов
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            Ваше предложение — среди тех,<br /><span className="green-text">которыми уже пользуются каждый день</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Три разных типа сообществ — школьное, спортивное, профессиональное. Так участники видят вкладку «Партнёры»: рядом с бонусами и штампиками, которыми они и так пользуются, а не в отдельном баннере.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map(c => (
            <div key={c.name} className="community-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: c.avatarBg }}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-black text-[#111827] truncate">{c.name}</div>
                  <div className="text-[11px] text-[#9CA3AF] truncate">{c.category}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold" style={{ background: '#FEF3C7', color: '#D97706' }}>
                  <Percent size={11} /> Партнёры
                </div>
                <span className="text-[10px] font-semibold text-[#9CA3AF]">{c.members}</span>
              </div>
              <div>
                {c.offers.map(o => (
                  <div key={o.name} className="flex items-center gap-3 py-2.5 border-b border-[#F3F4F6] last:border-0">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-black text-white" style={{ background: o.color }}>
                      {o.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-[#111827] truncate">{o.name}</div>
                      <div className="text-[11px] text-[#6B7280] truncate">{o.text}</div>
                    </div>
                    <div className="px-2 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0" style={{ background: '#EDFAF3', color: GREEN_DARK }}>
                      Активно
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl p-8 sm:p-10 border border-[#B6EDD2] flex flex-col lg:flex-row items-start lg:items-center gap-8" style={{ background: 'linear-gradient(160deg, #F2FDF7 0%, #EDFAF3 100%)' }}>
          <div className="flex-1">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style={{ background: GREEN, color: 'white' }}>
              <Search size={20} />
            </div>
            <h3 className="text-xl font-black text-[#111827] mb-2">Не нашли подходящее сообщество?</h3>
            <p className="text-[#6B7280] leading-relaxed mb-3">
              Сообщества на Sagi очень разные - школьные, спортивные, профессиональные, местные землячества и клубы по интересам. Вы и сами наверняка уже состоите в одном из них - и можете разместить своё предложение именно там.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              А если нужна конкретная аудитория - мамы, родители школьников, предприниматели, спортсмены - оставьте заявку, и мы подберём подходящее сообщество под ваш бизнес.
            </p>
          </div>
          <a href="https://wa.me/77084857101" target="_blank" rel="noopener noreferrer" className="btn-green flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md">
            Оставить заявку <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE: БИЗНЕС ─────────────────────────────────────────────────────────────

function BusinessPage() {
  return (
    <>
      <section className="hero-bg pt-20 pb-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7">
              <Zap size={11} />
              Платформа сообществ
            </span>
            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Ваши клиенты уже здесь.<br />
              <span className="green-text">Экономьте время</span><br />
              <span className="green-text">на поиске</span> и деньги на продвижении
            </h1>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Участники сообществ уже мотивированы: у них есть бонусные уровни, кэшбэк и штампики. Ваше предложение они увидят и воспользуются.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="#БизнесТарифы" className="btn-green inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md">
                Найти своих клиентов в Sagi <Search size={17} />
              </a>
              <a href="#БизнесCLG" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base border-2 border-[#E5E7EB] text-[#374151] hover:border-[#B6EDD2] hover:text-[#1E9E5A] transition">
                Как это работает <ChevronRight size={17} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[{ v: '1000+', l: 'сообществ' }, { v: '3 млн+', l: 'участников в сети' }, { v: '7 лет', l: 'на рынке' }].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black green-text">{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
              <div className="absolute -inset-8 rounded-full opacity-30" style={{ background: `radial-gradient(ellipse, ${GREEN}55, transparent 70%)` }} />
              <div className="community-card relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex-shrink-0 overflow-hidden">
                    <img src="/brands/hani.jpeg" alt="hani" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#111827]">hani</div>
                    <div className="text-xs text-[#9CA3AF]">Кондитерские-кофейни · Астана</div>
                  </div>
                  <div className="ml-auto flex-shrink-0 text-xs font-semibold text-[#9CA3AF]">4 партнёра</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[{ label: 'Бонусы', active: true }, { label: 'Предложения', active: false }, { label: 'Кросс', active: false }, { label: 'Штампики', active: false }].map(btn => (
                    <div key={btn.label} className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold"
                      style={btn.active ? { background: '#F5A623', color: 'white' } : { background: '#F3F4F6', color: '#6B7280' }}>
                      {btn.label}
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-3 mb-4" style={{ background: '#FFFBF0', border: '1px solid #FDE68A' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Star size={13} style={{ color: '#F5A623' }} />
                      <span className="text-xs font-black text-[#111827]">Уровень: Silver</span>
                    </div>
                    <span className="text-xs text-[#9CA3AF]">760 / 2000</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F3F4F6]">
                    <div className="h-2 rounded-full" style={{ width: '38%', background: '#F5A623' }} />
                  </div>
                  <div className="text-[10px] text-[#9CA3AF] mt-1.5">Ещё 1 240 бонусов до Gold - кэшбэк вырастет до 7%</div>
                </div>
                <button className="w-full btn-green py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                  Разместить предложение <ArrowRight size={15} />
                </button>
              </div>
              <div className="absolute -right-14 top-8 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: GREEN }}>
                  <CheckCircle size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">Предложение отправлено</div>
                  <div className="text-[9px] text-[#9CA3AF]">Верифицировано Sagi</div>
                </div>
              </div>
              <div className="absolute -left-16 bottom-10 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#EEF2FF]">
                  <TrendingUp size={15} style={{ color: '#4338CA' }} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">Охват +340</div>
                  <div className="text-[9px] text-[#9CA3AF]">за последние 7 дней</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />
      <PainBlock />
      <div className="divider h-px" />
      <SolutionBlock />
      <div className="divider h-px" />
      <div id="БизнесCLG"><CommunityLedGrowth /></div>
      <div className="divider h-px" />
      <ResultBlock />
      <div className="divider h-px" />
      <TwoWaysBlock />
      <div className="divider h-px" />
      <OffersShowcase />
      <div className="divider h-px" />
      <HowItWorks />
      <div className="divider h-px" />

      {/* Features */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Инструменты платформы
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">Всё для поиска аудитории<br />и размещения предложений</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Полный набор инструментов, чтобы найти нужное сообщество и разместить предложение с измеримым результатом.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Search size={17} />, t: 'Каталог сообществ с фильтрами', d: 'Поиск по нише, городу, размеру и уровню активности. Находите именно ту аудиторию, которая вам нужна.' },
              { icon: <Target size={17} />, t: 'Предложения для участников', d: 'Размещайте специальные предложения напрямую в ленте сообщества. Скидки, акции, эксклюзивные условия.' },
              { icon: <Share2 size={17} />, t: 'Кросс-продвижение', d: 'Предлагайте свои условия участникам смежных сообществ. Расширяйте охват через партнёрские базы.' },
              { icon: <Star size={17} />, t: 'Бонусы и штампики', d: 'Интегрируйтесь в механики лояльности сообщества: начисляйте бонусы и штампики за покупки у вас.' },
              { icon: <Globe size={17} />, t: 'Фильтры по интересам и геолокации', d: 'Сообщества организованы по интересам и городу. Географический таргетинг без лишних показов.' },
              { icon: <BarChart3 size={17} />, t: 'Аналитика размещений', d: 'Охват, просмотры и вовлечённость по каждому предложению в реальном времени.' },
              { icon: <TrendingUp size={17} />, t: 'ROI по каждому каналу', d: 'Понятные данные о возврате инвестиций - сравнивайте эффективность разных сообществ.' },
              { icon: <CreditCard size={17} />, t: 'Клиентская база растёт', d: 'Каждый, кто откликнулся на предложение, остаётся в вашей CRM - контакты, история визитов, накопленный кэшбэк. Не разовый охват, а актив, который пополняется сам.' },
              { icon: <Users size={17} />, t: 'Мотивированная аудитория', d: 'Участники имеют бонусные уровни и кэшбэк. Они активно следят за предложениями и реагируют на них.' },
              { icon: <Shield size={17} />, t: 'Верифицированные сообщества', d: 'Только реальные активные сообщества с подтверждённой и вовлечённой аудиторией.' },
            ].map(item => (
              <div key={item.t} className="card-border card-lift flex gap-4 p-5 rounded-2xl bg-white">
                <div className="icon-green w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <div className="text-sm font-bold text-[#111827] mb-1">{item.t}</div>
                  <div className="text-xs text-[#6B7280] leading-relaxed">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* WHO WE ARE */}
      <section className="py-24 bg-white overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 22s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-6">
                <span className="text-[42px] font-black tracking-tight text-[#111827]">sagi</span>
                <span className="text-sm font-semibold text-[#2ABB6F] border border-[#B6EDD2] bg-[#EDFAF3] rounded-full px-3.5 py-1">Community</span>
              </div>
              <p className="text-[#6B7280] text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Ведущая платформа сообществ в Казахстане. Помогаем бизнесам находить свою аудиторию и размещать предложения там, где она находится.
              </p>
            </div>
            <div className="flex gap-8 lg:gap-12">
              {[{ v: '1000+', l: 'сообществ на платформе' }, { v: '3 млн+', l: 'участников в сети' }, { v: '7 лет', l: 'на рынке' }].map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-4xl font-black green-text leading-none">{s.v}</div>
                  <div className="text-sm text-[#9CA3AF] mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#F0F0F0] py-6 bg-[#FAFAFA]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C4C4C4] text-center mb-6">Нам доверяют</div>
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div className="marquee-track flex items-center gap-4 w-max">
              {[...Array(2)].map((_, repeat) =>
                [1,2,3,4,5,6,7,8].map(i => (
                  <div key={`${repeat}-${i}`} className="w-32 h-24 rounded-xl overflow-hidden bg-white border border-[#EFEFEF] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <img src={`/brands/brand${i}.jpeg`} alt={`brand ${i}`} className="w-full h-full object-cover" draggable={false} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Pricing */}
      <section id="БизнесТарифы" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              Прозрачная тарификация
            </span>
            <h2 className="text-4xl font-black text-[#111827] mb-4">Начните прямо сейчас</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Доступ к каталогу сообществ и инструментам для размещения предложений.
            </p>
          </div>
          <div className="price-card-featured card-lift rounded-2xl p-8 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="icon-green w-8 h-8 rounded-xl flex items-center justify-center">
                <Target size={15} />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">Для бизнеса</div>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-black text-[#111827]">19 990 ₸</span>
              <span className="text-base font-semibold text-[#9CA3AF]">/ мес</span>
            </div>
            <div className="text-[#9CA3AF] text-sm mb-7">Размещение вашего предложения в одном выбранном сообществе</div>
            <div className="space-y-3 mb-8">
              {[
                'Целевые клиенты, а не холодная реклама - аудитория одного сообщества, которая реально вам подходит',
                'Предложение показывается участникам этого сообщества весь месяц, а не разово',
                'Выглядит как рекомендация внутри сообщества, а не баннер - выше доверие и конверсия',
                'Аналитика охвата, просмотров и отклика по вашему предложению',
              ].map(f => (
                <div key={f} className="flex items-start gap-2 text-sm text-[#374151]">
                  <CheckCircle size={14} style={{ color: GREEN, marginTop: 3 }} className="flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <a href="https://wa.me/77084857101" target="_blank" rel="noopener noreferrer" className="btn-green w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base shadow-md">
              Найти своих клиентов в Sagi <ArrowRight size={17} />
            </a>
          </div>
          <p className="text-center text-sm text-[#9CA3AF] mt-6">
            Корпоративные тарифы и пакеты по запросу на business@sagibonus.com
          </p>
        </div>
      </section>

      <div className="divider h-px" />

      {/* CTA */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-card rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-white text-3xl font-black tracking-tight">sagi</span>
                <span className="text-sm font-semibold border border-white/20 bg-white/10 text-white/80 rounded-full px-3 py-1">Community</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-7">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2ABB6F]" />
                Community Led Growth для вашего бизнеса
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Найдите сообщество<br />с вашей аудиторией
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                1000+ сообществ. Найдите свою аудиторию и размещайте предложения там, где находится ваш клиент.
              </p>
              <a href="https://wa.me/77084857101" target="_blank" rel="noopener noreferrer" className="btn-green inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-md">
                Найти своих клиентов в Sagi <Search size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── PAGE: АДМИНИСТРАТОР ──────────────────────────────────────────────────────

function AdminPage() {
  const INDIGO = '#4F46E5';
  const INDIGO_DARK = '#3730A3';

  const badge = (text: string) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: '#EDE9FE', color: INDIGO_DARK, border: '1px solid #C4B5FD' }}>
      {text}
    </span>
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-28 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F5F3FF 0%, #FFFFFF 55%)' }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ background: '#EDE9FE', color: INDIGO_DARK, border: '1px solid #C4B5FD' }}>
              <Building2 size={11} />
              Для администраторов сообществ
            </span>
            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Ваше сообщество —<br />
              <span style={{ color: INDIGO }}>ваш актив.</span><br />
              Монетизируйте его.
            </h1>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Запустите программу лояльности, принимайте предложения от партнёров и зарабатывайте на своей аудитории — пока участники получают реальную ценность.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="https://apps.apple.com/kz/app/id6764310350" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                App Store <ArrowRight size={17} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.abr.sagi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                Google Play <ArrowRight size={17} />
              </a>
              <a href="#АдминКакРаботает" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base border-2 border-[#E5E7EB] text-[#374151] hover:border-[#C4B5FD] transition">
                Как это устроено <ChevronRight size={17} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[{ v: '1000+', l: 'сообществ в сети' }, { v: '3 млн+', l: 'активных участников' }, { v: '500+', l: 'партнёров на платформе' }].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black" style={{ color: INDIGO }}>{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin dashboard mockup */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
              <div className="absolute -inset-8 rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${INDIGO}88, transparent 70%)` }} />
              <div className="community-card relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-sm font-black text-[#111827]">Моё сообщество</div>
                    <div className="text-xs text-[#9CA3AF]">Панель управления</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: GREEN }}>Активно</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { v: '1 248', l: 'участников', color: INDIGO },
                    { v: '+34', l: 'за неделю', color: GREEN },
                    { v: '87%', l: 'вовлечённость', color: '#D97706' },
                    { v: '6', l: 'активных партнёров', color: '#DC2626' },
                  ].map(s => (
                    <div key={s.l} className="rounded-xl p-3 bg-[#FAFAFA] border border-[#F0F0F0]">
                      <div className="text-base font-black" style={{ color: s.color }}>{s.v}</div>
                      <div className="text-[10px] text-[#9CA3AF]">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-3 mb-4" style={{ background: '#F5F3FF', border: '1px solid #C4B5FD' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: INDIGO }}>Новый запрос от партнёра</div>
                  <div className="text-xs text-[#374151] mb-3">Кафе «Sunrise» хочет разместить предложение — 15 000 ₸</div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: INDIGO }}>Принять</button>
                    <button className="flex-1 py-1.5 rounded-lg text-xs font-semibold text-[#6B7280] bg-[#F3F4F6]">Отклонить</button>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white" style={{ background: INDIGO }}>
                  Открыть дашборд <ArrowRight size={15} />
                </button>
              </div>
              <div className="absolute -right-14 top-8 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: INDIGO }}>
                  <DollarSign size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">+90 000 ₸ / мес</div>
                  <div className="text-[9px] text-[#9CA3AF]">доход от партнёров</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Pain */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('С чем вы сталкиваетесь')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Сообщество требует времени.<br />
              <span style={{ color: INDIGO }}>Но почти ничего не приносит</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Вы строите аудиторию, но без правильных инструментов она не работает ни на участников, ни на вас.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Users size={20} />, title: 'Участники уходят', desc: 'Без механик удержания вовлечённость падает. Люди вступают — и забывают про вас через неделю.', bg: '#FFF8F8', border: '#FED7D7', iconBg: '#FEE2E2', iconColor: '#DC2626' },
              { icon: <DollarSign size={20} />, title: 'Нет дохода', desc: 'Вы вкладываете время и силы, но аудитория не конвертируется в деньги. Монетизация непонятна.', bg: '#FFFBF0', border: '#FDE68A', iconBg: '#FEF3C7', iconColor: '#D97706' },
              { icon: <Settings size={20} />, title: 'Всё вручную', desc: 'Акции, рассылки, отчёты — каждый раз с нуля. Инструментов нет, всё разбросано по разным приложениям.', bg: '#F5F3FF', border: '#C4B5FD', iconBg: '#EDE9FE', iconColor: INDIGO },
              { icon: <Globe size={20} />, title: 'Нет видимости', desc: 'Бизнесы, готовые платить за доступ к вашей аудитории, просто не знают о вашем существовании.', bg: '#F0FDF4', border: '#B6EDD2', iconBg: '#EDFAF3', iconColor: GREEN_DARK },
            ].map(p => (
              <div key={p.title} className="rounded-2xl p-6 border card-lift" style={{ background: p.bg, borderColor: p.border }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: p.iconBg }}>
                  <div style={{ color: p.iconColor }}>{p.icon}</div>
                </div>
                <h3 className="text-base font-black text-[#111827] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Flywheel */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Механика роста')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Чем активнее сообщество —<br />
              <span style={{ color: INDIGO }}>тем больше оно зарабатывает</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Sagi запускает самоусиливающийся цикл: лояльные участники привлекают партнёров, партнёры дают участникам ценность — и цикл повторяется.
            </p>
          </div>

          <div className="rounded-2xl p-10 mb-8" style={{ background: 'linear-gradient(140deg, #1e1b4b 0%, #312e81 100%)' }}>
            <div className="grid md:grid-cols-4 gap-4 items-center">
              {[
                { icon: <Users size={20} />, label: 'Вовлечённые участники', sub: 'Лояльность растёт через бонусы и уровни' },
                { icon: <Target size={20} />, label: 'Партнёры приходят сами', sub: 'Ваша аудитория становится ценной для бизнесов' },
                { icon: <DollarSign size={20} />, label: 'Вы зарабатываете', sub: 'Партнёры платят за доступ к участникам' },
                { icon: <TrendingUp size={20} />, label: 'Участники получают больше', sub: 'Эксклюзивные предложения от партнёров' },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col items-center text-center gap-3 relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-black text-white mb-1">{item.label}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{item.sub}</div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-5 w-6 h-6 items-center justify-center z-10">
                      <ArrowRight size={16} className="text-white/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-2">Результат через 3 месяца</div>
              <div className="flex justify-center gap-10 flex-wrap">
                {[{ v: '×2.4', l: 'рост вовлечённости' }, { v: '+60%', l: 'удержание участников' }, { v: '6–12 партнёров', l: 'в среднем на сообщество' }].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-2xl font-black text-white">{s.v}</div>
                    <div className="text-xs text-white/40 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Network effect */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Сетевой эффект')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Вы не один —<br />
              <span style={{ color: INDIGO }}>вы часть сети из 1000+ сообществ</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              В одиночку сложно привлечь партнёров и участников. В сети Sagi — партнёры уже здесь, участники уже здесь.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl p-8 border border-[#C4B5FD]" style={{ background: 'linear-gradient(160deg, #F5F3FF 0%, #EDE9FE 100%)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: INDIGO, color: 'white' }}>
                <Target size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-3">Партнёры сами вас находят</h3>
              <p className="text-[#6B7280] leading-relaxed mb-5">
                500+ бизнесов уже зарегистрированы на платформе и активно ищут сообщества, в которых можно разместить предложение. Они фильтруют по нише, городу и размеру — и находят вас.
              </p>
              <div className="space-y-2.5">
                {['Входящие запросы без холодного поиска', 'Фильтр по релевантным для вас нишам', 'Вы сами решаете, чьё предложение принять'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-[#374151]">
                    <CheckCircle size={14} style={{ color: INDIGO }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-[#B6EDD2]" style={{ background: 'linear-gradient(160deg, #F2FDF7 0%, #EDFAF3 100%)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: GREEN, color: 'white' }}>
                <Share2 size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-3">Участники открывают вас через сеть</h3>
              <p className="text-[#6B7280] leading-relaxed mb-5">
                3 млн+ пользователей уже в экосистеме Sagi. Когда кто-то пользуется одним сообществом — платформа показывает ему смежные. Ваше сообщество органически растёт внутри сети.
              </p>
              <div className="space-y-2.5">
                {['Кросс-рекомендации между сообществами', 'Участники других сообществ видят вас в каталоге', 'Один профиль — все сообщества в сети'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm text-[#374151]">
                    <CheckCircle size={14} style={{ color: GREEN }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Network visual */}
          <div className="rounded-2xl p-8 bg-white border border-[#F0F0F0] text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-6">Ваше сообщество в сети Sagi</div>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['Фитнес', 'Кафе и рестораны', 'Красота', 'Retail', 'Образование', 'Медицина', 'Путешествия', 'Спорт', 'Ваше сообщество', 'Еда', 'Технологии', 'Искусство'].map((cat, i) => (
                <div
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={cat === 'Ваше сообщество'
                    ? { background: INDIGO, color: 'white', boxShadow: `0 0 0 4px ${INDIGO}22` }
                    : { background: '#F3F4F6', color: '#6B7280' }}
                >
                  {cat}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#9CA3AF] mt-6">Участники любого сообщества в сети могут найти и вступить в ваше</p>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            {badge('Инструменты')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">Всё для управления<br /><span style={{ color: INDIGO }}>и монетизации сообщества</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Star size={17} />, t: 'Программа лояльности', d: 'Бонусы, штампики, кэшбэк и уровни под вашим брендом. Участники получают ценность — и возвращаются.' },
              { icon: <DollarSign size={17} />, t: 'Монетизация через партнёров', d: 'Бизнесы платят за размещение предложений вашим участникам. Вы принимаете или отклоняете каждый запрос.' },
              { icon: <BarChart3 size={17} />, t: 'Аналитика в реальном времени', d: 'Кто активен, что работает, как растёт аудитория. Все данные в одном месте.' },
              { icon: <Bell size={17} />, t: 'Лента и пуш-уведомления', d: 'Публикуйте новости, акции и события. Участники получают уведомления и остаются вовлечёнными.' },
              { icon: <Award size={17} />, t: 'Уровни и геймификация', d: 'Bronze, Silver, Gold. Чем активнее участник — тем выше уровень и больше привилегий. Это мотивирует возвращаться.' },
              { icon: <Shield size={17} />, t: 'Модерация и контроль', d: 'Вы управляете тем, кто и что видит. Принимайте участников вручную или автоматически — на ваш выбор.' },
            ].map(item => (
              <div key={item.t} className="flex gap-4 p-5 rounded-2xl border card-lift bg-white" style={{ borderColor: '#E0E7FF' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#EDE9FE', color: INDIGO }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111827] mb-1">{item.t}</div>
                  <div className="text-xs text-[#6B7280] leading-relaxed">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* How it works + revenue */}
      <section id="АдминКакРаботает" className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Как это работает')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              От создания<br />
              <span style={{ color: INDIGO }}>до первого дохода</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { num: '01', title: 'Создайте сообщество', desc: 'Зарегистрируйте сообщество на Sagi: добавьте название, описание, категорию и фото. Займёт 10 минут.', color: '#EDE9FE', border: '#C4B5FD', iconColor: INDIGO },
              { num: '02', title: 'Настройте лояльность', desc: 'Выберите механики: бонусы, штампики, кэшбэк, уровни. Настройте правила начисления — без кода и технических знаний.', color: '#EDFAF3', border: '#B6EDD2', iconColor: GREEN_DARK },
              { num: '03', title: 'Принимайте партнёров', desc: 'Бизнесы из каталога находят вас и отправляют запросы. Вы принимаете — участники видят предложение, вы получаете доход.', color: '#FFFBF0', border: '#FDE68A', iconColor: '#D97706' },
            ].map(s => (
              <div key={s.num} className="rounded-2xl p-7 border" style={{ background: s.color, borderColor: s.border }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: s.iconColor }}>
                    {s.num}
                  </div>
                  <span className="text-4xl font-black" style={{ color: s.iconColor, opacity: 0.15 }}>{s.num}</span>
                </div>
                <h3 className="text-lg font-black text-[#111827] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Revenue example */}
          <div className="rounded-2xl p-8 border border-[#C4B5FD]" style={{ background: 'linear-gradient(160deg, #F5F3FF 0%, #EDE9FE 100%)' }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: INDIGO }}>Пример дохода администратора</div>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Участников в сообществе', val: '1 200' },
                { label: 'Активных партнёров', val: '25' },
                { label: 'Стоимость одного размещения', val: '20 000 ₸' },
                { label: 'Доход администратора в месяц', val: '250 000 ₸', highlight: true },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-4 text-center" style={{ background: item.highlight ? INDIGO : 'white', borderRadius: 16 }}>
                  <div className="text-xl font-black mb-1" style={{ color: item.highlight ? 'white' : INDIGO }}>{item.val}</div>
                  <div className="text-xs leading-relaxed" style={{ color: item.highlight ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B7280]">Администратор получает 50% от суммы, которую платят партнёры за размещение - остальное уходит на инфраструктуру платформы. Реальные цифры зависят от размера и активности сообщества, доход растёт вместе с аудиторией.</p>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Admin CTA */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-12 sm:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #1e1b4b 0%, #312e81 100%)' }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-white text-3xl font-black tracking-tight">sagi</span>
                <span className="text-sm font-semibold border border-white/20 bg-white/10 text-white/80 rounded-full px-3 py-1">Community</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Запустите сообщество<br />и начните зарабатывать
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Присоединяйтесь к сети из 1000+ сообществ. Настройте лояльность, привлеките партнёров и монетизируйте свою аудиторию.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://apps.apple.com/kz/app/id6764310350" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                  App Store <ArrowRight size={17} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.abr.sagi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                  Google Play <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── PAGE: УЧАСТНИК ───────────────────────────────────────────────────────────

function UserPage() {
  const AMBER = '#D97706';
  const INDIGO = '#4338CA';
  const VIOLET = '#7C3AED';

  const APP_STORE_URL = 'https://apps.apple.com/kz/app/id6764310350';
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.abr.sagi';

  const badge = (text: string, color: string = AMBER, bg: string = '#FEF3C7', border: string = '#FDE68A') => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: bg, color, border: `1px solid ${border}` }}>
      {text}
    </span>
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-28 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFBEB 0%, #FFFFFF 55%)' }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ background: '#FEF3C7', color: AMBER, border: '1px solid #FDE68A' }}>
              <Users size={11} />
              Sagi Kin — приложение для сообществ
            </span>
            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Найдите своих.<br />
              <span style={{ color: AMBER }}>Стройте сообщество вместе</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Sagi Kin — это сообщества по интересам, семейное древо, шаги и челленджи вместе с близкими, и бонусы в любимых местах. Всё в одном профиле — без десяти разных приложений.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                App Store <ArrowRight size={17} />
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                Google Play <ArrowRight size={17} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[{ v: '1000+', l: 'сообществ на платформе' }, { v: '3 млн+', l: 'участников в сети' }, { v: '15+', l: 'типов сообществ' }].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black" style={{ color: AMBER }}>{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Four pillars mockup */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
              <div className="absolute -inset-8 rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${AMBER}88, transparent 70%)` }} />
              <div className="community-card relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Всё в одном приложении</div>
                {[
                  { icon: <Compass size={18} />, title: 'Сообщества по интересам', desc: 'Школа, спорт, соседи, работа', color: INDIGO, bg: '#EEF2FF' },
                  { icon: <Footprints size={18} />, title: 'Шаги и челленджи', desc: 'Рейтинг сообщества, призы', color: '#1E9E5A', bg: '#EDFAF3' },
                  { icon: <TreePine size={18} />, title: 'Семейное древо', desc: 'Родственники, фотоархив', color: VIOLET, bg: '#F5F3FF' },
                  { icon: <Gift size={18} />, title: 'Бонусы и кэшбэк', desc: 'До 15% в любимых местах', color: AMBER, bg: '#FFFBEB' },
                ].map((row, i) => (
                  <div key={row.title} className={`flex items-center gap-3 py-3 ${i < 3 ? 'border-b border-[#F3F4F6]' : ''}`}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: row.bg, color: row.color }}>
                      {row.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111827]">{row.title}</div>
                      <div className="text-xs text-[#9CA3AF]">{row.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -right-14 top-4 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: AMBER }}>
                  <Gift size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">+120 бонусов</div>
                  <div className="text-[9px] text-[#9CA3AF]">за последний визит</div>
                </div>
              </div>
              <div className="absolute -left-16 -bottom-8 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#EEF2FF]">
                  <Search size={14} style={{ color: INDIGO }} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">3 новых сообщества рядом</div>
                  <div className="text-[9px] text-[#9CA3AF]">в сети Sagi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Communities: find or create */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Сообщества', INDIGO, '#EEF2FF', '#C7D2FE')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Найдите сообщество —<br />
              <span style={{ color: INDIGO }}>или создайте своё</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Школьные, спортивные, соседские, профессиональные, семейные — в Sagi Kin сотни сообществ. Не нашли своё? Создайте за пару минут.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 border card-lift" style={{ background: '#EEF2FF', borderColor: '#C7D2FE' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: INDIGO, color: 'white' }}>
                <Compass size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-2">Найти сообщество</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                Ищите по городу, категории или рядом с вами. Вступайте в один клик — без приглашений и заявок.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Школа', 'Спорт', 'Соседи', 'Работа', 'Семья', 'Диаспора'].map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'white', color: INDIGO, border: '1px solid #C7D2FE' }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 border card-lift" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: VIOLET, color: 'white' }}>
                <UserPlus size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-2">Создать своё</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                Заведите приватное или открытое сообщество и пригласите людей по ссылке. Готовые инструменты — уже внутри.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Посты', 'События', 'Задачи', 'Челленджи', 'Объявления'].map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'white', color: VIOLET, border: '1px solid #DDD6FE' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Steps & challenges */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Активность', '#1E9E5A', '#EDFAF3', '#B6EDD2')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Шаги и челленджи —<br />
              <span style={{ color: '#1E9E5A' }}>вместе с сообществом</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Подключите телефон — и соревнуйтесь в шагах, книгах, тренировках или своих задачах прямо внутри сообщества.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Footprints size={22} />, title: 'Шаги автоматически', desc: 'Синхронизация с телефоном — шаги считаются сами, без ручного ввода.' },
              { icon: <Trophy size={22} />, title: 'Рейтинг сообщества', desc: 'Смотрите, кто активнее на этой неделе. Делитесь результатом — или скройте свой.' },
              { icon: <Target size={22} />, title: 'Свои челленджи', desc: 'Книги, километры, вода, экономия — любая цель и единица измерения, какую задаст сообщество.' },
              { icon: <Flame size={22} />, title: 'Призы победителям', desc: 'Админ сообщества назначает награду за месяц — видно только внутри своего круга.' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 border card-lift bg-white" style={{ borderColor: '#B6EDD2' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#1E9E5A', color: 'white' }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-[#111827] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Family tree */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Семья', VIOLET, '#F5F3FF', '#DDD6FE')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Родословная,<br />
              <span style={{ color: VIOLET }}>которую строите вместе</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Семейное сообщество в Sagi Kin — это общее древо, которое пополняют все родственники, а не только вы.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <TreePine size={22} />, title: 'Семейное дерево', desc: 'Стройте древо вместе с родными — каждый добавляет свою ветку.' },
              { icon: <Users size={22} />, title: 'Кто вам кем приходится', desc: 'Sagi Kin сам покажет родство: троюродный брат, внук дяди — без объяснений на словах.' },
              { icon: <Heart size={22} />, title: 'Семейный фотоархив', desc: 'Смотрите фото, которые выложили другие ветки семьи — то, что иначе никогда не увидите.' },
              { icon: <Bell size={22} />, title: 'Дни рождения родни', desc: 'Напоминания даже о дальних родственниках — тех, кого сложно держать в голове.' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 border card-lift" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: VIOLET, color: 'white' }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-[#111827] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Bonuses & cashback — condensed */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              {badge('Бонусы')}
              <h2 className="text-4xl font-black text-[#111827] mb-4">
                И бонусы<br />
                <span style={{ color: AMBER }}>в любимых местах</span>
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                Кафе, магазины и сервисы вашего города тоже в сети Sagi. Один профиль работает во всех сообществах — кэшбэк, штамп-карты и уровень не сгорают и не привязаны к одному месту.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <CreditCard size={18} />, title: 'Кэшбэк бонусами', desc: 'До 15% с покупки' },
                  { icon: <CheckCircle size={18} />, title: 'Штамп-карты', desc: 'Не теряются, не мнутся' },
                  { icon: <Award size={18} />, title: 'Уровни участника', desc: 'Bronze, Silver, Gold' },
                  { icon: <Percent size={18} />, title: 'Только для своих', desc: 'Эксклюзивные предложения' },
                ].map(b => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#FFFBEB', color: AMBER }}>
                      {b.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111827]">{b.title}</div>
                      <div className="text-xs text-[#9CA3AF]">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { level: 'Bronze', emoji: '🥉', cashback: '3%' },
                  { level: 'Silver', emoji: '🥈', cashback: '7%' },
                  { level: 'Gold', emoji: '🥇', cashback: '15%' },
                ].map(l => (
                  <span key={l.level} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full bg-white border border-[#FDE68A]">
                    {l.emoji} {l.level} · {l.cashback} кэшбэк
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="relative w-[320px] mx-auto">
                <div className="absolute -inset-8 rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${AMBER}88, transparent 70%)` }} />
                <div className="community-card relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex-shrink-0 overflow-hidden">
                      <img src="/brands/hani.jpeg" alt="hani" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#111827]">hani</div>
                      <div className="text-xs text-[#9CA3AF]">Кондитерские-кофейни · Астана</div>
                    </div>
                    <div className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: '#FEF3C7', color: AMBER }}>Silver</div>
                  </div>
                  <div className="rounded-xl p-4 mb-4" style={{ background: '#FFFBF0', border: '1px solid #FDE68A' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Star size={13} style={{ color: '#F5A623' }} />
                        <span className="text-xs font-black text-[#111827]">760 / 2000 бонусов</span>
                      </div>
                      <span className="text-[10px] text-[#9CA3AF]">до Gold</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#F3F4F6] mb-1.5">
                      <div className="h-2 rounded-full" style={{ width: '38%', background: '#F5A623' }} />
                    </div>
                    <div className="text-[10px] text-[#9CA3AF]">Ещё 1 240 бонусов — кэшбэк вырастет до 7%</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-[#374151]">Штамп-карта hani</div>
                      <div className="text-[10px] text-[#9CA3AF]">8 / 10</div>
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div key={i} className="w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold"
                          style={i < 8 ? { background: '#F5A623', color: 'white' } : { background: '#F3F4F6', color: '#D1D5DB', border: '1.5px dashed #E5E7EB' }}>
                          {i < 8 ? '✓' : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* How it works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Как начать')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Три шага<br />
              <span style={{ color: AMBER }}>до первого сообщества</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Скачайте Sagi Kin и найдите своих', desc: 'Каталог из 1000+ сообществ: школьные, спортивные, семейные, соседские. Или создайте своё за пару минут.', color: '#EEF2FF', border: '#C7D2FE', iconColor: INDIGO },
              { num: '02', title: 'Участвуйте — всё в одном профиле', desc: 'Посты, шаги и челленджи, семейное древо, бонусы в любимых местах. Ничего не нужно переключать.', color: '#EDFAF3', border: '#B6EDD2', iconColor: '#1E9E5A' },
              { num: '03', title: 'Растите вместе с сообществом', desc: 'Повышайте уровень, находите родню, соревнуйтесь в активности — чем активнее вы, тем больше пользы.', color: '#FEF3C7', border: '#FDE68A', iconColor: AMBER },
            ].map(s => (
              <div key={s.num} className="rounded-2xl p-7 border" style={{ background: s.color, borderColor: s.border }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: s.iconColor }}>
                    {s.num}
                  </div>
                  <span className="text-4xl font-black" style={{ color: s.iconColor, opacity: 0.15 }}>{s.num}</span>
                </div>
                <h3 className="text-lg font-black text-[#111827] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* User CTA */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-12 sm:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #78350F 0%, #92400E 100%)' }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-white text-3xl font-black tracking-tight">sagi</span>
                <span className="text-sm font-semibold border border-white/20 bg-white/10 text-white/80 rounded-full px-3 py-1">Kin</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Скачайте Sagi Kin<br />и найдите своих
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Сообщества, семейное древо, шаги и бонусы любимых мест — в одном приложении.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                  App Store <ArrowRight size={17} />
                </a>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                  Google Play <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── PAGE: ДЛЯ СОТРУДНИКОВ (ENTERPRISE) ────────────────────────────────────

function EnterprisePage() {
  const FOREST = '#14532D';
  const GOLD = '#D97706';
  const PHONE = '+77077000087';
  const PHONE_DISPLAY = '+7 707 700 00 87';
  const EMAIL = 'business@sagibonus.com';
  const WHATSAPP_URL = 'https://wa.me/77077000087';

  const badge = (text: string, color: string = FOREST, bg: string = '#F0FDF4', border: string = '#BBF7D0') => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: bg, color, border: `1px solid ${border}` }}>
      {text}
    </span>
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-28 px-6 overflow-hidden" style={{ background: 'linear-gradient(160deg, #F0FDF4 0%, #FFFFFF 55%)' }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ background: '#F0FDF4', color: FOREST, border: '1px solid #BBF7D0' }}>
              <Building2 size={11} />
              Корпоративная платформа · модель Dubai Esaad для Казахстана
            </span>
            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Умная экосистема<br />
              <span style={{ color: FOREST }}>привилегий</span> для вашей команды
            </h1>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Цифровая платформа лояльности и структурной коммуникации, встроенная прямо в WhatsApp и Telegram — сотрудникам не нужно ничего устанавливать.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: FOREST }}>
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base border-2 border-[#111827] text-[#111827] hover:border-[#14532D] hover:text-[#14532D] transition">
                <Phone size={17} /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base border-2 border-[#E5E7EB] text-[#374151] hover:border-[#BBF7D0] transition">
                <Mail size={17} /> {EMAIL}
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[{ v: '200+', l: 'партнёров сети' }, { v: '10–30%', l: 'скидка у партнёров' }, { v: '10 дней', l: 'от звонка до запуска' }].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black" style={{ color: FOREST }}>{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote + stat mockup */}
          <div className="flex-shrink-0 relative w-full max-w-[380px]">
            <div className="rounded-2xl p-8 relative overflow-hidden mb-5" style={{ background: 'linear-gradient(140deg, #14532D 0%, #166534 100%)' }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
              <div className="text-4xl font-black mb-3 relative" style={{ color: GOLD }}>&ldquo;</div>
              <p className="text-white text-lg font-semibold leading-snug mb-3 relative">
                Повышайте благосостояние сотрудников, не раздувая ФОТ.
              </p>
              <div className="text-xs text-white/50 uppercase tracking-widest relative">— тезис презентации</div>
            </div>
            <div className="community-card">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '25–30%', l: 'снижение текучести' },
                  { v: '500%', l: 'окупаемость внедрения' },
                  { v: '810 000 ₸', l: 'выгода на семью в год' },
                  { v: '0 ₸', l: 'нагрузка на ваш ФОТ' },
                ].map(s => (
                  <div key={s.l} className="rounded-xl p-3.5 text-center" style={{ background: '#F0FDF4' }}>
                    <div className="text-lg font-black mb-0.5" style={{ color: FOREST }}>{s.v}</div>
                    <div className="text-[10px] text-[#6B7280] leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Challenges */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Вызовы HR в 2025–2026')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Три силы, которые<br />
              <span style={{ color: FOREST }}>забирают ваших лучших людей</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp size={20} />, title: 'Инфляционное давление', desc: 'Реальные доходы сотрудников снижаются из-за роста цен на 10–15%+. Это заставляет людей постоянно искать работу с более высокой зарплатой.', bg: '#FFF8F8', border: '#FED7D7', iconBg: '#FEE2E2', iconColor: '#DC2626' },
              { icon: <Layers size={20} />, title: 'Невидимый соцпакет', desc: 'Компания тратит бюджеты на бенефиты, которыми пользуются редко. Сотрудники не ощущают ежедневной заботы.', bg: '#FFFBF0', border: '#FDE68A', iconBg: '#FEF3C7', iconColor: GOLD },
              { icon: <Users size={20} />, title: 'Битва за таланты', desc: 'Перекупить специалиста на +50 000 ₸ легко. Удержать его через глубокую эмоциональную и финансовую привязанность — гораздо сложнее.', bg: '#F5F3FF', border: '#C4B5FD', iconBg: '#EDE9FE', iconColor: '#4338CA' },
            ].map(p => (
              <div key={p.title} className="rounded-2xl p-7 border card-lift" style={{ background: p.bg, borderColor: p.border }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: p.iconBg }}>
                  <div style={{ color: p.iconColor }}>{p.icon}</div>
                </div>
                <h3 className="text-lg font-black text-[#111827] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Solution: Esaad model */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Sagi Smart OS')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Модель Esaad,<br />
              <span style={{ color: FOREST }}>адаптированная для РК</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Мы внедряем в вашу компанию модель, аналогичную правительственной программе Dubai Esaad. Sagi — не новое приложение, а структурный слой прямо в WhatsApp и Telegram.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-7 border card-lift bg-white" style={{ borderColor: '#BBF7D0' }}>
              <div className="text-xs font-bold text-[#9CA3AF] mb-3">— 01</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: FOREST, color: 'white' }}>
                <Percent size={22} />
              </div>
              <h3 className="text-lg font-black text-[#111827] mb-2">Центр Привилегий</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">Закрытый каталог скидок 10–30% у лучших локальных партнёров.</p>
            </div>
            <div className="rounded-2xl p-7 relative overflow-hidden card-lift" style={{ background: 'linear-gradient(140deg, #14532D 0%, #166534 100%)' }}>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/5" />
              <div className="text-xs font-bold text-white/50 mb-3 relative">— 02</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                <Heart size={22} />
              </div>
              <h3 className="text-lg font-black text-white mb-2 relative">Семейный доступ</h3>
              <p className="text-sm text-white/60 leading-relaxed relative">Возможность подключить супруга/супругу для удвоения выгоды на всю семью.</p>
            </div>
            <div className="rounded-2xl p-7 border card-lift bg-white" style={{ borderColor: '#BBF7D0' }}>
              <div className="text-xs font-bold text-[#9CA3AF] mb-3">— 03</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: FOREST, color: 'white' }}>
                <Layers size={22} />
              </div>
              <h3 className="text-lg font-black text-[#111827] mb-2">Единый Хаб</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">Структурированный доступ к корпоративной базе знаний и контактам коллег.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Family advantage */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              {badge('Family Advantage', '#7C3AED', '#F5F3FF', '#DDD6FE')}
              <h2 className="text-4xl font-black text-[#111827] mb-8">
                Счастливая семья —<br />
                <span style={{ color: '#7C3AED' }}>самый лояльный сотрудник</span>
              </h2>
              <div className="space-y-6">
                {[
                  { num: '01', title: 'Двойная выгода', desc: 'Скидки на ежедневные нужды — продукты, медицина, детское образование — работают на общий семейный бюджет.' },
                  { num: '02', title: 'Семейный «Якорь»', desc: 'Когда супруг(а) пользуется бенефитами вашей компании, решение об увольнении становится семейным вопросом.' },
                  { num: '03', title: 'Эмоциональная лояльность', desc: 'Ваш бренд работодателя проникает в дом сотрудника, создавая мощную эмоциональную связь.' },
                ].map(item => (
                  <div key={item.num} className="flex gap-4 pb-6 border-b border-[#F3F4F6] last:border-0 last:pb-0">
                    <div className="text-xs font-bold text-[#9CA3AF] pt-1 flex-shrink-0">— {item.num}</div>
                    <div>
                      <div className="text-base font-black text-[#111827] mb-1">{item.title}</div>
                      <div className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #14532D 0%, #166534 100%)' }}>
              <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
              <div className="text-4xl font-black mb-4 relative" style={{ color: GOLD }}>&ldquo;</div>
              <p className="text-white text-2xl font-black leading-snug mb-2 relative">
                Бизнес делают люди,<br />а людей делает <span style={{ color: GOLD }}>их тыл</span>.
              </p>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-6 relative">— принцип Sagi</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Family budget math */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Математика семейного бюджета')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Суммарная выгода<br />
              <span style={{ color: FOREST }}>за год — 810 000 ₸</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Расчёт для семьи из 2 взрослых в Казахстане, по средней корзине партнёров Sagi.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ background: 'white', borderColor: '#BBF7D0' }}>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Средние расходы / мес', val: '≈ 450 000 ₸' },
                { label: 'Средняя экономия', val: '15%' },
                { label: 'Месяцев в году', val: '12' },
                { label: 'Годовая выгода', val: '810 000 ₸', highlight: true },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-4 text-center" style={{ background: item.highlight ? FOREST : '#F0FDF4' }}>
                  <div className="text-xl font-black mb-1" style={{ color: item.highlight ? 'white' : FOREST }}>{item.val}</div>
                  <div className="text-xs leading-relaxed" style={{ color: item.highlight ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              <strong className="text-[#111827]">Сообщение для CEO:</strong> внедрение Sagi эквивалентно выплате каждому сотруднику «тринадцатой зарплаты» в размере 810 000 ₸ — но без фактических затрат из вашего фонда оплаты труда.
            </p>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Retention economics */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Экономика удержания')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Удержание стоит<br />
              <span style={{ color: FOREST }}>дешевле, чем найм</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8" style={{ background: '#111827' }}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Снижение текучести</div>
              <div className="text-5xl font-black mb-4" style={{ color: GOLD }}>25–30%</div>
              <p className="text-sm text-white/60 leading-relaxed">Компании с развитой системой lifestyle-привилегий удерживают таланты на 1.5–2 года дольше.</p>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
              <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">Высокий барьер выхода</div>
              <p className="text-xl font-black text-[#111827] leading-snug">Сотрудник теряет не чат, а <span style={{ color: FOREST }}>финансовую систему экономии</span> для семьи.</p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: FOREST }}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Окупаемость</div>
              <div className="text-5xl font-black text-white mb-4">500%</div>
              <p className="text-sm text-white/70 leading-relaxed">Удержание 5 ключевых сотрудников в год полностью окупает внедрение Sagi. 3–6 окладов = замена 1 специалиста в РК.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Local ecosystem categories */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('200+ партнёров · Алматы · Астана')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Категории, где сотрудники<br />
              <span style={{ color: FOREST }}>тратят каждый день</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Партнёры в пешей доступности от офиса — категории повседневных трат, а не разовые бонусы.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Heart size={22} />, title: 'Здоровье', items: ['Медицинские центры', 'Аптечные сети', 'Стоматология', 'Лаборатории'] },
              { icon: <GraduationCap size={22} />, title: 'Дети', items: ['Образовательные центры', 'Кружки и секции', 'Развивающие игрушки', 'Лагеря и продлёнки'] },
              { icon: <Store size={22} />, title: 'Дом и быт', items: ['Продуктовые сети', 'Магазины электроники', 'Бытовая химия', 'Услуги для дома'] },
              { icon: <Star size={22} />, title: 'Досуг', items: ['Рестораны и кофейни', 'Фитнес-залы', 'Кино и театры', 'Семейные активности'] },
            ].map(cat => (
              <div key={cat.title} className="rounded-2xl p-6 border card-lift bg-white" style={{ borderColor: '#BBF7D0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: FOREST, color: 'white' }}>
                  {cat.icon}
                </div>
                <h3 className="text-base font-black text-[#111827] mb-3">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.items.map(it => (
                    <div key={it} className="text-xs text-[#6B7280] pb-2 border-b border-[#F3F4F6] last:border-0">{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Comparison table */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Соцпакет vs Sagi Enterprise')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Почему классический<br />
              <span style={{ color: FOREST }}>соцпакет не работает</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[720px] rounded-2xl border border-[#F0F0F0] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F9FAFB] px-6 py-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">Характеристика</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">Обычный соцпакет</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: FOREST }}>Sagi Enterprise</div>
              </div>
              {[
                { label: 'Частота использования', old: 'Раз в месяц / квартал', oldSub: 'Эпизодически', sagi: 'Ежедневно', sagiSub: 'Каждый поход в магазин' },
                { label: 'Охват семьи', old: 'Часто платно / сложно', oldSub: 'Отдельные договоры', sagi: 'Включено по умолчанию', sagiSub: 'Супруг(а) — одним кликом' },
                { label: 'Удобство', old: 'Отдельные карты / порталы', oldSub: 'Логины, пароли, приложения', sagi: 'Прямо в WhatsApp', sagiSub: 'Ноль установок' },
                { label: 'Влияние на лояльность', old: 'Низкое', oldSub: 'Воспринимается как должное', sagi: 'Высокое', sagiSub: 'Ежедневная ощутимая выгода' },
              ].map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 px-6 py-5 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                  <div className="text-sm font-bold text-[#111827] pr-4">{row.label}</div>
                  <div>
                    <div className="text-sm text-[#374151]">{row.old}</div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">{row.oldSub}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: FOREST }}>{row.sagi}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{row.sagiSub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Two paths + consultation */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Как подключить компанию')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Присоединитесь к сети —<br />
              <span style={{ color: FOREST }}>или создайте своё сообщество</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Хотите добавить свою организацию в сообщество Sagi или создать отдельное — только для своих сотрудников? Оба пути начинаются с одного звонка.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl p-8 border card-lift" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: FOREST, color: 'white' }}>
                <Percent size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-2">Подключиться к сети Sagi</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                Самый быстрый и выгодный старт: сотрудники сразу получают скидки 10–30% у 200+ партнёров сети — без ожидания, без затрат на поиск партнёров.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: FOREST }}>
                <CheckCircle size={14} /> Главная выгода — готовые скидки уже сегодня
              </div>
            </div>
            <div className="rounded-2xl p-8 border card-lift" style={{ background: '#FFFBF0', borderColor: '#FDE68A' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: GOLD, color: 'white' }}>
                <Building2 size={22} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-2">Кастомное решение для компании</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                Отдельное закрытое сообщество только для сотрудников вашей организации: свой пул партнёров под профиль команды, брендированный кабинет, отдельная аналитика.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: GOLD }}>
                <Settings size={14} /> Под задачи и бюджет именно вашей компании
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ background: FOREST }}>
            <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Консультация и стоимость</div>
            <p className="text-white text-lg font-semibold max-w-2xl mx-auto mb-7 leading-relaxed">
              Стоимость, состав пакета и сроки запуска обсуждаются индивидуально — под размер команды и её потребности. Напишите нам в WhatsApp, позвоните или напишите на почту — и мы предложим решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: GOLD }}>
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                <Phone size={17} /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                <Mail size={17} /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Roadmap */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Запуск за 10 дней')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              От первого звонка<br />
              <span style={{ color: FOREST }}>до запуска — 10 дней</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { num: '01', tag: 'День 1–3', title: 'Анализ команды', desc: 'Анкетирование сотрудников, выявление приоритетов и категорий трат.' },
              { num: '02', tag: 'День 4–7', title: 'Пул партнёров', desc: 'Формирование локальной сети мерчантов под профиль вашей команды.' },
              { num: '03', tag: 'День 8–10', title: 'Запуск хаба', desc: 'Брендированный кабинет в WhatsApp/Telegram, онбординг сотрудников и семей.' },
              { num: '04', tag: 'Ежемесячно', title: 'Рост и аналитика', desc: 'Отчёт по использованию, расширение списка партнёров, опросы NPS.' },
            ].map(s => (
              <div key={s.num} className="rounded-2xl p-6 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: FOREST }}>
                    {s.num}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: GOLD }}>{s.tag}</span>
                </div>
                <h3 className="text-base font-black text-[#111827] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* Footer CTA */}
      <footer className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-12 sm:p-16 relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #14532D 0%, #166534 100%)' }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-white text-3xl font-black tracking-tight">sagi</span>
                <span className="text-sm font-semibold border border-white/20 bg-white/10 text-white/80 rounded-full px-3 py-1">Enterprise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Это больше,<br /><span style={{ color: GOLD }}>чем скидки</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Это ваша инвестиция в стабильность и благополучие семей ваших сотрудников. Давайте создадим систему, которую невозможно будет променять на лишние 50 тысяч тенге у конкурента.
              </p>
              <div className="bg-white rounded-2xl p-6 max-w-sm mx-auto mb-8 text-left">
                <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-1">Founder & CEO</div>
                <div className="text-lg font-black text-[#111827] mb-3">Жаксылык Есельбаев</div>
                <div className="text-sm text-[#6B7280] mb-1">Sagi Community</div>
                <a href={`tel:${PHONE}`} className="block text-sm font-semibold mb-0.5" style={{ color: FOREST }}>{PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`} className="block text-sm font-semibold mb-0.5" style={{ color: FOREST }}>{EMAIL}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold" style={{ color: FOREST }}>WhatsApp</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: GOLD }}>
                  WhatsApp <MessageCircle size={17} />
                </a>
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  Позвонить <Phone size={17} />
                </a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
                  Написать <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export function SagiLanding() {
  useEffect(() => {
    window.location.replace('https://sagikin.com/business')
  }, [])

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center px-6 text-center"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <div>
        <div className="text-2xl font-black tracking-tight text-[#111827] mb-6">sagi</div>
        <p className="text-[#374151] text-lg font-semibold mb-2">Мы переехали на sagikin.com</p>
        <p className="text-[#6B7280] mb-1">Сейчас перенаправим вас на новую страницу…</p>
        <p className="text-[#9CA3AF] text-sm mb-8">We&apos;ve moved to sagikin.com — redirecting you now.</p>
        <a
          href="https://sagikin.com/business"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white"
          style={{ background: GREEN }}
        >
          Перейти на sagikin.com <ArrowRight size={17} />
        </a>
      </div>
    </div>
  );
}
