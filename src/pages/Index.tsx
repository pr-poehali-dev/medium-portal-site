import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 relative">
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <img 
          src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/8aab610d-1a99-41eb-a667-a4a262ace7d6.jpg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-accent flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            Мастер Духовных Практик
          </h1>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'spiritualism', 'tarot', 'reviews', 'faq', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm transition-all hover:text-accent ${
                  activeSection === section ? 'text-accent font-semibold' : 'text-foreground/80'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'Обо мне'}
                {section === 'spiritualism' && 'Спиритизм'}
                {section === 'tarot' && 'Таро'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'faq' && 'FAQ'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden text-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['home', 'about', 'spiritualism', 'tarot', 'reviews', 'faq', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left transition-all hover:text-accent ${
                    activeSection === section ? 'text-accent font-semibold' : 'text-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'spiritualism' && 'Спиритизм'}
                  {section === 'tarot' && 'Таро'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/cc363fee-b119-499b-8df1-dd52bb1102af.jpg" 
            alt="Mystical background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Проводник Между Мирами
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Открываю завесу тайн, соединяю миры, даю ответы на вопросы,
              которые не имеют решения в материальном мире
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
              onClick={() => scrollToSection('contact')}
            >
              Записаться на консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative">
        <div className="absolute top-10 left-10 opacity-10 animate-float hidden lg:block">
          <Icon name="Moon" size={120} className="text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          <Icon name="Stars" size={100} className="text-accent" />
        </div>
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl font-bold text-center mb-12 text-accent">Духовные Практики</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Предсказания на Таро',
                icon: 'Sparkles',
                description: 'Раскрываю будущее через древние арканы. Помогаю найти ответы на жизненно важные вопросы.',
                features: ['Расклад на будущее', 'Анализ ситуации', 'Совет карт']
              },
              {
                title: 'Определение Судьбы',
                icon: 'Eye',
                description: 'По фотографии определяю энергетическое состояние человека, его связь с этим миром.',
                features: ['Анализ по фото', 'Чтение ауры', 'Энергетическая диагностика']
              },
              {
                title: 'Сеансы Спиритизма',
                icon: 'Ghost',
                description: 'Онлайн сеансы связи с духовным миром. Вы становитесь участником процесса.',
                features: ['Личный контакт', 'Ответы от духов', 'Онлайн формат']
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img 
                    src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/fcf6b34d-67b9-4a91-973b-9bd374c56333.jpg" 
                    alt="Tarot cards" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:rotate-12 pointer-events-none">
                  <img 
                    src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/53a4a7fb-7f22-493e-9d8a-14637b9e1dda.jpg" 
                    alt="Tarot card" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:-rotate-12 pointer-events-none" style={{ transitionDelay: '0.1s' }}>
                  <img 
                    src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/53a4a7fb-7f22-493e-9d8a-14637b9e1dda.jpg" 
                    alt="Tarot card" 
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform group-hover:animate-glow">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-center text-accent">{service.title}</CardTitle>
                  <CardDescription className="text-center text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-accent">Обо мне</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/aa42a211-61b2-4ee1-9fa5-580fa15f0944.jpg" 
                alt="Мастер духовных практик" 
                className="rounded-lg shadow-2xl shadow-primary/30 border border-primary/30"
              />
            </div>
            <Card className="bg-card/70 backdrop-blur border-border">
              <CardContent className="pt-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Более 15 лет я посвятил изучению эзотерических практик и древних знаний. 
                  Моя миссия — помогать людям найти ответы на вопросы, выходящие за пределы материального мира.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Я работаю с классическим Таро, провожу спиритические сеансы и читаю энергетические поля. 
                  Каждая консультация — это индивидуальный подход и глубокое погружение в вашу ситуацию.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  {['Таро', 'Спиритизм', 'Ясновидение', 'Энергетика', 'Медитации'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="spiritualism" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/fe2cae5a-db18-4dd2-bad0-c066831d0dfd.jpg" 
            alt="Spiritualism background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-4 text-accent">Онлайн Сеансы Спиритизма</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Уникальная возможность стать участником спиритического сеанса не выходя из дома
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Icon name="Wifi" size={24} />
                  Как проходит сеанс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <p>Подключение через защищённый видеоканал</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <p>Создание энергетического круга и настройка</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <p>Установление контакта с духовным миром</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <p>Вы задаёте вопросы и получаете ответы</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="text-accent flex items-center gap-2">
                  <Icon name="Shield" size={24} />
                  Важные аспекты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-foreground/80">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Полная энергетическая защита участников</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Конфиденциальность всех вопросов и ответов</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Запись сеанса для вашего архива</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p>Консультация после сеанса включена</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tarot" className="relative py-20 px-4 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/fcf6b34d-67b9-4a91-973b-9bd374c56333.jpg" 
            alt="Tarot background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-4 text-accent">Гадание на Таро</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Древняя система познания через символизм 78 арканов
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Общий расклад', duration: '30 мин', price: 'от 3000₽', description: 'Общая ситуация и ближайшее будущее' },
              { name: 'Крест Кельтов', duration: '45 мин', price: 'от 5000₽', description: 'Глубокий анализ сложной ситуации' },
              { name: 'Годовой прогноз', duration: '60 мин', price: 'от 8000₽', description: 'Прогноз на 12 месяцев вперёд' }
            ].map((spread, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur border-border hover:border-accent/50 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/53a4a7fb-7f22-493e-9d8a-14637b9e1dda.jpg" 
                    alt="Tarot card" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-accent">{spread.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{spread.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Icon name="Clock" size={16} className="text-primary" />
                      {spread.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Icon name="DollarSign" size={16} className="text-primary" />
                      {spread.price}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                    Выбрать расклад
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-accent">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Елена М.',
                text: 'Потрясающий опыт! Сеанс спиритизма помог мне получить ответы на вопросы, которые мучили меня годами. Благодарю за профессионализм и чуткость.',
                rating: 5
              },
              {
                name: 'Дмитрий К.',
                text: 'Расклад на Таро оказался невероятно точным. Всё, что было предсказано, сбылось в течение месяца. Рекомендую всем, кто ищет настоящего мастера.',
                rating: 5
              },
              {
                name: 'Анна С.',
                text: 'Диагностика по фотографии выявила проблемы, о которых я даже не подозревала. После работы с мастером почувствовала значительное облегчение.',
                rating: 5
              },
              {
                name: 'Михаил Л.',
                text: 'Скептически относился к подобным практикам, но решил попробовать. Был поражён глубиной и точностью консультации. Теперь регулярный клиент.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 italic">"{review.text}"</p>
                  <p className="text-sm text-muted-foreground font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-accent">Вопросы и ответы</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как проходит онлайн консультация?',
                a: 'Консультация проводится через защищённое видео-соединение. Вам нужен только компьютер или смартфон с доступом в интернет. Я высылаю ссылку на подключение за час до начала.'
              },
              {
                q: 'Можно ли определить, жив ли человек, только по фотографии?',
                a: 'Да, через считывание энергетического поля на фотографии я могу определить связь человека с материальным миром. Для этого нужна чёткая фотография лица.'
              },
              {
                q: 'Безопасны ли спиритические сеансы?',
                a: 'Абсолютно безопасны при правильном проведении. Я использую проверенные методы защиты и работаю только с высокими духовными сущностями. Каждый участник находится под энергетическим щитом.'
              },
              {
                q: 'Сколько длится консультация на Таро?',
                a: 'В зависимости от типа расклада: от 30 минут для простого расклада до 60-90 минут для сложных ситуаций и годовых прогнозов.'
              },
              {
                q: 'Нужна ли предоплата?',
                a: 'Да, для бронирования времени требуется предоплата 50%. Остальную сумму можно внести после консультации. Принимаю все виды электронных платежей.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/88758f07-884e-4f13-86e1-d955377396e2/files/ea6725e6-6257-48b8-85ba-c083cbe37954.jpg" 
            alt="Crystal ball background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <h3 className="text-4xl font-bold text-center mb-4 text-accent">Записаться на консультацию</h3>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и я свяжусь с вами в течение 24 часов
          </p>
          <Card className="bg-card/70 backdrop-blur border-border shadow-xl shadow-primary/10">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input placeholder="Введите имя" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email или Telegram</label>
                  <Input placeholder="Для связи" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Тип консультации</label>
                  <select className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-foreground">
                    <option>Таро</option>
                    <option>Спиритизм</option>
                    <option>Диагностика по фото</option>
                    <option>Комплексная консультация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваш вопрос</label>
                  <Textarea 
                    placeholder="Опишите ситуацию или вопрос, с которым хотите обратиться"
                    className="bg-background/50 min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border text-center space-y-3">
                <p className="text-sm text-muted-foreground">Или свяжитесь напрямую:</p>
                <div className="flex flex-col gap-2 items-center">
                  <a href="tel:+79001234567" className="flex items-center gap-2 text-foreground hover:text-accent transition">
                    <Icon name="Phone" size={18} />
                    +7 (900) 123-45-67
                  </a>
                  <a href="mailto:medium@example.com" className="flex items-center gap-2 text-foreground hover:text-accent transition">
                    <Icon name="Mail" size={18} />
                    medium@example.com
                  </a>
                  <a href="https://t.me/medium" className="flex items-center gap-2 text-foreground hover:text-accent transition">
                    <Icon name="Send" size={18} />
                    @medium_master
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="text-xl font-bold text-accent">Мастер Духовных Практик</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Проводник между мирами | Помощь в духовных вопросах
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition">
              <Icon name="Send" size={24} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Все права защищены. Консультации не заменяют медицинскую помощь.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;