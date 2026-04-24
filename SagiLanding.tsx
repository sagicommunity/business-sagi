import {
  Shield,
  Search,
  Store,
  Clock,
  RefreshCw,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Users,
  TrendingUp,
  Headphones,
  GraduationCap,
  Briefcase,
  Bell,
  ChevronRight,
  Zap,
  Building2,
  CircleUser,
  ShoppingBag,
  Globe,
  Target,
  Share2,
  MessageCircle,
  Star,
  Layers,
} from 'lucide-react';

const GREEN = '#2ABB6F';
const GREEN_DARK = '#1E9E5A';

function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Search size={22} />,
      title: 'Найдите нужное сообщество',
      desc: 'Используйте каталог с фильтрами по нише, городу и размеру аудитории. Найдите площадку, где уже собрана ваша целевая аудитория.',
      color: '#EEF2FF',
      border: '#C7D2FE',
      iconColor: '#4338CA',
    },
    {
      num: '02',
      icon: <Target size={22} />,
      title: 'Сформируйте оффер для участников',
      desc: 'Скидка, бонус, специальные условия или эксклюзивное предложение только для членов сообщества. Участники получают реальную ценность.',
      color: '#EDFAF3',
      border: '#B6EDD2',
      iconColor: GREEN_DARK,
    },
    {
      num: '03',
      icon: <TrendingUp size={22} />,
      title: 'Получайте клиентов и растите',
      desc: 'Оффер попадает к аудитории, которой он действительно релевантен. Участники приходят уже с доверием к вашему бренду.',
      color: '#FFF7ED',
      border: '#FED7AA',
      iconColor: '#C2410C',
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
      icon: <Search size={20} />,
      title: 'Нет единого места',
      desc: 'Сложно найти сообщества с нужной целевой аудиторией в одном месте, всё разбросано по разным платформам.',
      bg: '#F8F9FF',
      border: '#E0E7FF',
      iconBg: '#EEF2FF',
      iconColor: '#4338CA',
    },
    {
      icon: <Target size={20} />,
      title: 'Таргет дорожает',
      desc: 'Таргетинг в Instagram и Google дорожает каждый год. Средний клик в Instagram от 800 ₸, 1000 показов от 6000 ₸. А конверсия падает. CAC уже не окупается.',
      bg: '#FFF8F8',
      border: '#FED7D7',
      iconBg: '#FEE2E2',
      iconColor: '#DC2626',
    },
    {
      icon: <BarChart3 size={20} />,
      title: 'Непрозрачная цена охвата',
      desc: 'Сложно заранее просчитать реальную стоимость охвата нужной аудитории, приходится сливать тестовый бюджет.',
      bg: '#FFFBF0',
      border: '#FDE68A',
      iconBg: '#FEF3C7',
      iconColor: '#D97706',
    },
    {
      icon: <Shield size={20} />,
      title: 'Аудитория не доверяет',
      desc: 'Классическое продвижение не работает: люди не доверяют баннерам и холодным объявлениям от незнакомых брендов.',
      bg: '#F0FDF4',
      border: '#B6EDD2',
      iconBg: '#EDFAF3',
      iconColor: GREEN_DARK,
    },
  ];

  return (
    <section className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            Контекст
          </span>
          <h2 className="text-4xl font-black text-[#111827] mb-4">
            С чем сталкивается<br />
            <span className="green-text">бизнес при продвижении</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Традиционные каналы перестают работать.<br />Sagi даёт альтернативу.
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

function CommunityLedGrowth() {
  const pillars = [
    {
      icon: <Shield size={20} />,
      title: 'Доверие сообщества',
      desc: 'Предложение внутри доверенного сообщества воспринимается как рекомендация, а не прерывание. Конверсия в 3–5 раз выше холодных каналов.',
      stat: '3–5×',
      statLabel: 'выше конверсия',
      color: '#4338CA',
      bg: '#EEF2FF',
      border: '#C7D2FE',
    },
    {
      icon: <Share2 size={20} />,
      title: 'Органический охват',
      desc: 'Предложение от вашего бизнеса попадает точно в контекст сообщества и воспринимается как ценное, а не спам. Меньше отторжения, больше отклика.',
      stat: '-40%',
      statLabel: 'ниже CAC',
      color: GREEN_DARK,
      bg: '#EDFAF3',
      border: '#B6EDD2',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Долгосрочные отношения',
      desc: 'Бренды, встроенные в сообщество, остаются в поле зрения аудитории постоянно. Это формирует лояльность, а не разовую транзакцию.',
      stat: '+60%',
      statLabel: 'выше LTV',
      color: '#C2410C',
      bg: '#FFF7ED',
      border: '#FED7AA',
    },
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
                Бренды, которые встраиваются в контекст сообщества, получают аудиторию с уже сформированным доверием, вместо того чтобы его строить с нуля.
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

export function SagiLanding() {
  return (
    <div className="min-h-screen bg-white text-[#111827]" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .btn-green {
          background: ${GREEN};
          color: #fff;
          transition: background 0.18s;
        }
        .btn-green:hover { background: ${GREEN_DARK}; }

        .badge-green {
          background: #EDFAF3;
          color: ${GREEN_DARK};
          border: 1px solid #B6EDD2;
        }
        .icon-green {
          background: #EDFAF3;
          color: ${GREEN_DARK};
        }
        .card-border { border: 1.5px solid #F0F0F0; }
        .card-border:hover { border-color: #B6EDD2; }
        .card-lift { transition: transform 0.2s, box-shadow 0.2s; }
        .card-lift:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(42,187,111,0.10); }

        .hero-bg { background: linear-gradient(160deg, #F2FDF7 0%, #FFFFFF 55%); }
        .section-alt { background: #FAFAFA; }

        .price-card-featured {
          border: 2px solid ${GREEN} !important;
          box-shadow: 0 16px 48px rgba(42,187,111,0.12);
        }
        .divider { background: linear-gradient(90deg, transparent, #E8E8E8, transparent); }

        .cta-card {
          background: linear-gradient(140deg, #1D3828 0%, #0F2218 100%);
        }
        .green-text { color: ${GREEN}; }

        .community-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06);
        }
      `}</style>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#F0F0F0]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[22px] font-black tracking-tight text-[#111827]">sagi</span>
            <span className="text-xs font-semibold text-[#2ABB6F] border border-[#B6EDD2] bg-[#EDFAF3] rounded-full px-2.5 py-0.5 ml-1">Community</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[['Как это работает','#КакРаботает'],['Community Led Growth','#CLG'],['Тарифы','#Тарифы']].map(([l,h]) => (
              <a key={l} href={h} className="text-sm text-[#6B7280] hover:text-[#111827] transition font-medium">{l}</a>
            ))}
          </div>
          <a href="#Тарифы" className="btn-green hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm">
            Найти аудиторию <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className="hero-bg pt-20 pb-28 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <span className="badge-green inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-7">
              <Zap size={11} />
              Платформа сообществ
            </span>

            <h1 className="text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6 text-[#111827]">
              Выберите community вашей аудитории.<br />
              <span className="green-text">Размещайте предложения там,</span><br />
              где находится ваш клиент.
            </h1>

            <p className="text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Находите готовые сообщества, где уже сидит ваша аудитория, и предлагайте свои офферы напрямую участникам.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14">
              <a href="#Тарифы" className="btn-green inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base shadow-md">
                Найти сообщество <Search size={17} />
              </a>
              <a href="#CLG" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base border-2 border-[#E5E7EB] text-[#374151] hover:border-[#B6EDD2] hover:text-[#1E9E5A] transition">
                Как это работает <ChevronRight size={17} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
              {[
                { v: '1000+', l: 'сообществ' },
                { v: '3 млн+', l: 'участников в сети' },
                { v: '7 лет', l: 'на рынке' },
              ].map(s => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-2xl font-black green-text">{s.v}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Community card mockup */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-[340px] mx-auto">
              <div className="absolute -inset-8 rounded-full opacity-30" style={{ background: `radial-gradient(ellipse, ${GREEN}55, transparent 70%)` }} />

              <div className="community-card relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${GREEN}, ${GREEN_DARK})` }}>
                    T
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#111827]">Tech Founders Kazakhstan</div>
                    <div className="text-xs text-[#9CA3AF]">Алматы · Технологии</div>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#EDFAF3]">
                      <Star size={11} style={{ color: GREEN }} />
                      <span className="text-xs font-bold" style={{ color: GREEN_DARK }}>4.9</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {['B2B', 'Стартапы', 'Инвестиции'].map(tag => (
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280]">{tag}</span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { v: '2 400', l: 'участников' },
                    { v: '38', l: 'событий/мес' },
                    { v: '94%', l: 'активность' },
                  ].map(s => (
                    <div key={s.l} className="text-center bg-[#F9FAFB] rounded-xl p-2.5">
                      <div className="text-base font-black text-[#111827]">{s.v}</div>
                      <div className="text-[10px] text-[#9CA3AF]">{s.l}</div>
                    </div>
                  ))}
                </div>

                <button className="w-full btn-green py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                  Предложить оффер <ArrowRight size={15} />
                </button>
              </div>

              <div className="absolute -right-14 top-8 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-[#F0F0F0] z-20">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: GREEN }}>
                  <CheckCircle size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#111827]">Оффер отправлен</div>
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

      <div id="CLG">
        <CommunityLedGrowth />
      </div>

      <div className="divider h-px" />

      <div id="КакРаботает">
        <HowItWorks />
      </div>

      <div className="divider h-px" />

      {/* ══════════════════════════
          FEATURES — ADVERTISERS ONLY
      ══════════════════════════ */}
      <section id="Возможности" className="py-24 px-6 section-alt">
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
              { icon: <Search size={17} />, t: 'Каталог сообществ с фильтрами', d: 'Поиск по нише, городу, размеру и уровню активности аудитории.' },
              { icon: <Target size={17} />, t: 'Точный выбор аудитории', d: 'Выбирайте сообщества по демографии и интересам участников.' },
              { icon: <MessageCircle size={17} />, t: 'Нативное предложение в ленте', d: 'Ваш оффер встраивается в контекст сообщества естественно.' },
              { icon: <BarChart3 size={17} />, t: 'Аналитика размещений', d: 'Охват, клики, вовлечённость по каждому предложению в реальном времени.' },
              { icon: <Globe size={17} />, t: 'Фильтры по интересам и геолокации', d: 'Сообщества организованы по интересам, нише и городу. Находите именно ту аудиторию, которая вам нужна.' },
              { icon: <Share2 size={17} />, t: 'Прямой оффер сообществу', d: 'Отправляйте офферы напрямую через платформу без посредников.' },
              { icon: <TrendingUp size={17} />, t: 'ROI по каждому каналу', d: 'Понятные данные о возврате инвестиций для каждого размещения.' },
              { icon: <Users size={17} />, t: 'Портрет аудитории сообщества', d: 'Демографика, интересы и активность участников до размещения.' },
              { icon: <Shield size={17} />, t: 'Верифицированные сообщества', d: 'Только реальные активные сообщества с подтверждённой аудиторией.' },
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

      {/* ══════════════════════════
          WHO WE ARE
      ══════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
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
                Ведущая платформа сообществ в Казахстане и СНГ. Помогаем бизнесам находить свою аудиторию и размещать предложения там, где она находится.
              </p>
            </div>

            <div className="flex gap-8 lg:gap-12">
              {[
                { v: '1000+', l: 'сообществ на платформе' },
                { v: '3 млн+', l: 'участников в сети' },
                { v: '7 лет', l: 'на рынке' },
              ].map(s => (
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
                    <img
                      src={`/brands/brand${i}.jpeg`}
                      alt={`brand ${i}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          PRICING
      ══════════════════════════ */}
      <section id="Тарифы" className="py-24 px-6 bg-white">
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
              Найти сообщество <ArrowRight size={17} />
            </a>
          </div>

          <p className="text-center text-sm text-[#9CA3AF] mt-6">
            Корпоративные тарифы и пакеты по запросу на sagibonus@gmail.com
          </p>
        </div>
      </section>

      <div className="divider h-px" />

      {/* ══════════════════════════
          CTA FOOTER
      ══════════════════════════ */}
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
                Найдите своё сообщество<br />и начните размещать предложения
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                1000+ сообществ. Найдите свою аудиторию и размещайте предложения там, где находится ваш клиент.
              </p>
              <a href="mailto:info@sagi.kz" className="btn-green inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-md">
                Найти сообщество <Search size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
