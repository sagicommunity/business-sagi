import { useState } from 'react';
import {
  Shield, Search, Store, Clock, RefreshCw, BarChart3, CheckCircle,
  ArrowRight, Smartphone, Users, TrendingUp, Headphones, GraduationCap,
  Briefcase, Bell, ChevronRight, Zap, Building2, CircleUser, ShoppingBag,
  Globe, Target, Share2, MessageCircle, Star, Layers,
  Gift, Award, CreditCard, Percent, MapPin, Settings, DollarSign,
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
              <a href="mailto:sagibonus@gmail.com" className="btn-green w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm shadow-md">
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
              <a href="mailto:sagibonus@gmail.com" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm border-2 transition" style={{ borderColor: '#4338CA', color: '#4338CA' }}>
                Найти сообщество <ArrowRight size={15} />
              </a>
            </div>
          </div>
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
            <div className="flex items-center gap-3 mb-1">
              <span className="text-5xl font-black text-[#111827]">Бесплатно</span>
              <span className="text-xl font-semibold text-[#D1D5DB] line-through">10 000 ₸</span>
            </div>
            <div className="text-[#9CA3AF] text-sm mb-7">Полный доступ к платформе без скрытых платежей</div>
            <div className="space-y-2.5 mb-8">
              {['Аналитика по предложениям', 'Возможность размещать предложения в определённых сообществах'].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                  <CheckCircle size={14} style={{ color: GREEN }} />
                  {f}
                </div>
              ))}
            </div>
            <a href="mailto:info@sagi.kz" className="btn-green w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base shadow-md">
              Найти своих клиентов в Sagi <ArrowRight size={17} />
            </a>
          </div>
          <p className="text-center text-sm text-[#9CA3AF] mt-6">
            Корпоративные тарифы и пакеты по запросу на sagibonus@gmail.com
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
              <a href="mailto:info@sagi.kz" className="btn-green inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-md">
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
              <a href="mailto:sagibonus@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                Создать сообщество <ArrowRight size={17} />
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
                { label: 'Активных партнёров', val: '6' },
                { label: 'Стоимость одного размещения', val: '15 000 ₸' },
                { label: 'Доход в месяц', val: '90 000 ₸', highlight: true },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-4 text-center" style={{ background: item.highlight ? INDIGO : 'white', borderRadius: 16 }}>
                  <div className="text-xl font-black mb-1" style={{ color: item.highlight ? 'white' : INDIGO }}>{item.val}</div>
                  <div className="text-xs leading-relaxed" style={{ color: item.highlight ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B7280]">Реальные цифры зависят от размера и активности сообщества. Доход растёт вместе с аудиторией.</p>
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
              <a href="mailto:sagibonus@gmail.com" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: INDIGO }}>
                Создать сообщество <ArrowRight size={17} />
              </a>
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

  const badge = (text: string) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: '#FEF3C7', color: AMBER, border: '1px solid #FDE68A' }}>
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
              <Gift size={11} />
              Для участников сообществ
            </span>
            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Один профиль —<br />
              <span style={{ color: AMBER }}>все любимые места</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Кэшбэк, штампики и эксклюзивные предложения в кафе, магазинах и сервисах твоего города. Всё в одном приложении — без бумажных карточек и десяти разных программ.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="mailto:sagibonus@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                Найти сообщества рядом <MapPin size={17} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[{ v: '1000+', l: 'мест на платформе' }, { v: '3 млн+', l: 'участников в сети' }, { v: 'до 15%', l: 'кэшбэк бонусами' }].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black" style={{ color: AMBER }}>{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* User card mockup */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
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
                <div className="mb-4">
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
                  <div className="text-[10px] text-[#9CA3AF] mt-1.5">Ещё 2 визита — бесплатный напиток</div>
                </div>
                <button className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 text-white" style={{ background: AMBER }}>
                  Смотреть предложения <ArrowRight size={15} />
                </button>
              </div>
              <div className="absolute -right-14 top-8 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: AMBER }}>
                  <Gift size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">+120 бонусов</div>
                  <div className="text-[9px] text-[#9CA3AF]">за последний визит</div>
                </div>
              </div>
              <div className="absolute -left-16 bottom-10 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#EEF2FF]">
                  <Search size={14} style={{ color: '#4338CA' }} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">3 новых места рядом</div>
                  <div className="text-[9px] text-[#9CA3AF]">в сети Sagi</div>
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
            {badge('Знакомо?')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Лояльность есть.<br />
              <span style={{ color: AMBER }}>Но толку от неё мало</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Старые программы лояльности созданы для бизнеса, а не для вас.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <RefreshCw size={20} />, title: 'Бумажные карточки теряются', desc: 'Накопил 9 штампиков — и потерял карточку. Снова начинать с нуля.', bg: '#FFF8F8', border: '#FED7D7', iconBg: '#FEE2E2', iconColor: '#DC2626' },
              { icon: <Smartphone size={20} />, title: '10 разных приложений', desc: 'У каждого кафе своё приложение. Устанавливать, регистрироваться, запоминать пароли.', bg: '#FFFBF0', border: '#FDE68A', iconBg: '#FEF3C7', iconColor: '#D97706' },
              { icon: <Bell size={20} />, title: 'Пропускаешь акции', desc: 'Любимое место сделало скидку для постоянных клиентов. Ты узнал об этом через неделю.', bg: '#F5F3FF', border: '#C4B5FD', iconBg: '#EDE9FE', iconColor: '#4338CA' },
              { icon: <Target size={20} />, title: 'Скидки не для тебя', desc: 'Бонусы сгорают, условия непрозрачные, а «выгодные предложения» доступны всем подряд.', bg: '#F0FDF4', border: '#B6EDD2', iconBg: '#EDFAF3', iconColor: GREEN_DARK },
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

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Что вы получаете')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Каждый визит<br />
              <span style={{ color: AMBER }}>приносит реальную выгоду</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Вступайте в сообщества любимых мест и получайте ценность с каждой покупкой.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <CreditCard size={22} />, title: 'Кэшбэк бонусами', desc: 'До 15% с каждой покупки возвращается на бонусный счёт. Тратьте бонусы на следующий визит.', color: AMBER, bg: '#FFFBEB', border: '#FDE68A' },
              { icon: <CheckCircle size={22} />, title: 'Штамп-карты', desc: 'Вместо бумажных карточек — цифровая карта в приложении. Не теряется, не мнётся, не сгорает.', color: GREEN_DARK, bg: '#EDFAF3', border: '#B6EDD2' },
              { icon: <Award size={22} />, title: 'Уровни участника', desc: 'Bronze, Silver, Gold. Чем активнее — тем выше кэшбэк и больше привилегий. Уровень не сгорает.', color: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE' },
              { icon: <Percent size={22} />, title: 'Эксклюзивные предложения', desc: 'Скидки и акции только для участников сообщества. Не для всех — только для своих.', color: '#DC2626', bg: '#FFF8F8', border: '#FED7D7' },
            ].map(item => (
              <div key={item.title} className="rounded-2xl p-6 border card-lift" style={{ background: item.bg, borderColor: item.border }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: item.color, color: 'white' }}>
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

      {/* Network section */}
      <section className="py-24 px-6 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            {badge('Сетевой эффект')}
            <h2 className="text-4xl font-black text-[#111827] mb-4">
              Чем больше мест в сети —<br />
              <span style={{ color: AMBER }}>тем выгоднее быть участником</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Sagi — это 1000+ сообществ в одной экосистеме. Ваш профиль, бонусы и уровень работают во всех из них.
            </p>
          </div>

          <div className="rounded-2xl p-10 mb-8" style={{ background: 'linear-gradient(140deg, #78350F 0%, #92400E 100%)' }}>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FCD34D' }}>Один профиль — вся сеть</div>
                <h3 className="text-2xl font-black text-white mb-4">
                  Вступил в одно сообщество —<br />открыл доступ ко всей сети
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Ваш профиль Sagi работает во всех сообществах сети. Бонусы, уровень и история — едины. Кафе, спортзал, книжный, барбершоп — всё в одном приложении.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Один аккаунт', 'Все сообщества', 'Без лишних приложений', 'Бонусы не сгорают'].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/80">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Globe size={16} />, label: 'Откройте новые места', desc: 'Sagi показывает вам другие сообщества по интересам и геолокации' },
                  { icon: <Share2 size={16} />, label: 'Партнёрские предложения', desc: 'Бизнесы из других сообществ делают вам эксклюзивные предложения' },
                  { icon: <TrendingUp size={16} />, label: 'Чем больше вы активны', desc: 'Тем быстрее растёт уровень и тем ценнее становится ваш профиль' },
                ].map(item => (
                  <div key={item.label} className="flex gap-3 p-4 rounded-xl bg-white/8" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.12)', color: '#FCD34D' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                      <div className="text-xs text-white/50 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Level progression */}
          <div className="rounded-2xl p-8 bg-white border border-[#F0F0F0]">
            <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-6 text-center">Как работают уровни в сети Sagi</div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { level: 'Bronze', emoji: '🥉', cashback: '3%', desc: 'Стартовый уровень. Бонусы за каждый визит, доступ к базовым предложениям.', color: '#92400E', bg: '#FEF3C7', border: '#FDE68A', visits: '0+ визитов' },
                { level: 'Silver', emoji: '🥈', cashback: '7%', desc: 'Повышенный кэшбэк, доступ к закрытым акциям и приоритетные предложения от партнёров.', color: '#374151', bg: '#F3F4F6', border: '#E5E7EB', visits: '500+ бонусов' },
                { level: 'Gold', emoji: '🥇', cashback: '15%', desc: 'Максимальный кэшбэк, эксклюзивные предложения, ранний доступ к акциям и VIP-привилегии.', color: '#B45309', bg: '#FFFBEB', border: '#FDE68A', visits: '2000+ бонусов' },
              ].map(l => (
                <div key={l.level} className="rounded-2xl p-6 border text-center card-lift" style={{ background: l.bg, borderColor: l.border }}>
                  <div className="text-3xl mb-2">{l.emoji}</div>
                  <div className="text-lg font-black mb-1" style={{ color: l.color }}>{l.level}</div>
                  <div className="text-3xl font-black mb-1" style={{ color: l.color }}>{l.cashback}</div>
                  <div className="text-xs text-[#9CA3AF] mb-3">кэшбэк бонусами · {l.visits}</div>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{l.desc}</p>
                </div>
              ))}
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
              <span style={{ color: AMBER }}>до первых бонусов</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Найди сообщества своих мест', desc: 'В каталоге — 1000+ кафе, магазинов и сервисов. Ищи по городу, категории или рядом с тобой. Вступай в один клик.', color: '#FEF3C7', border: '#FDE68A', iconColor: AMBER },
              { num: '02', title: 'Совершай покупки — бонусы начисляются сами', desc: 'Просто приходи в заведение. Бонусы и штампики начисляются автоматически. Никаких кассиров и бумажных карточек.', color: '#EDFAF3', border: '#B6EDD2', iconColor: GREEN_DARK },
              { num: '03', title: 'Повышай уровень и открывай привилегии', desc: 'Чем активнее — тем выше уровень. Gold-участники получают 15% кэшбэк и первыми узнают об эксклюзивных акциях.', color: '#EEF2FF', border: '#C7D2FE', iconColor: '#4338CA' },
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
                <span className="text-sm font-semibold border border-white/20 bg-white/10 text-white/80 rounded-full px-3 py-1">Community</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Вступи и получи<br />первые бонусы сегодня
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                1000+ сообществ кафе, магазинов и сервисов уже в сети. Один профиль — все любимые места.
              </p>
              <a href="mailto:sagibonus@gmail.com" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-md text-white" style={{ background: AMBER }}>
                Найти сообщества рядом <MapPin size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export function SagiLanding() {
  const [tab, setTab] = useState<'business' | 'admin' | 'user'>('business');

  const switchTab = (t: 'business' | 'admin' | 'user') => {
    setTab(t);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111827]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .btn-green { background: ${GREEN}; color: #fff; transition: background 0.18s; }
        .btn-green:hover { background: ${GREEN_DARK}; }

        .badge-green { background: #EDFAF3; color: ${GREEN_DARK}; border: 1px solid #B6EDD2; }
        .icon-green { background: #EDFAF3; color: ${GREEN_DARK}; }
        .card-border { border: 1.5px solid #F0F0F0; }
        .card-border:hover { border-color: #B6EDD2; }
        .card-lift { transition: transform 0.2s, box-shadow 0.2s; }
        .card-lift:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(42,187,111,0.10); }

        .hero-bg { background: linear-gradient(160deg, #F2FDF7 0%, #FFFFFF 55%); }
        .section-alt { background: #FAFAFA; }

        .price-card-featured { border: 2px solid ${GREEN} !important; box-shadow: 0 16px 48px rgba(42,187,111,0.12); }
        .divider { background: linear-gradient(90deg, transparent, #E8E8E8, transparent); }
        .cta-card { background: linear-gradient(140deg, #1D3828 0%, #0F2218 100%); }
        .green-text { color: ${GREEN}; }

        .community-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
        }

        .tab-active { background: white; color: #111827; box-shadow: 0 1px 4px rgba(0,0,0,0.10); }
        .tab-inactive { color: #6B7280; }
        .tab-inactive:hover { color: #374151; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#F0F0F0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="text-[22px] font-black tracking-tight text-[#111827]">sagi</span>
            <span className="text-xs font-semibold text-[#2ABB6F] border border-[#B6EDD2] bg-[#EDFAF3] rounded-full px-2.5 py-0.5 ml-1">Community</span>
          </div>
          <div className="flex items-center gap-2">
            {([
              { key: 'business', label: 'Для бизнеса' },
              { key: 'admin', label: 'Для администратора' },
              { key: 'user', label: 'Для участника' },
            ] as const).map(t => (
              <button
                key={t.key}
                onClick={() => switchTab(t.key)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={tab === t.key
                  ? { background: GREEN, color: 'white', boxShadow: '0 2px 8px rgba(42,187,111,0.30)' }
                  : { background: '#F3F4F6', color: '#6B7280' }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {tab === 'business' && <BusinessPage />}
      {tab === 'admin' && <AdminPage />}
      {tab === 'user' && <UserPage />}
    </div>
  );
}
