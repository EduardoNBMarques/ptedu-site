import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Exemplo de tradução
      "welcome": "Bem-vindo ao PT Edu Marques!",
      "programs": "Programas",
      "account": "Área Pessoal",
      "login": "Entrar",
      "logout": "Sair",
      "subscribe": "Subscrever",
      "about": "Sobre",
      "cart": "Carrinho",
      "landing": "Landing",
      "online_packages": "Pacotes Online",
      "monthly_value": "valor mensal",
      "package": "Pacote",
      "included_services": "Serviços Incluídos",
      "price": "Preço",
      "waitlist_open": "LISTA DE ESPERA RE-ABERTA",
      "main_title": "MUDA O CORPO, RECONQUISTA A CONFIANÇA E MELHORA A TUA SAÚDE,",
      "main_subtitle": "COMENDO O QUE GOSTAS TODO O SANTO DIA.",
      "main_desc": "Conhece (sem compromisso) o nosso programa de transformação corporal e a nossa metodologia simples, realista e verdadeira.",
      "your_full_name": "O teu nome completo",
      "your_email": "O teu email (que usas mais!)",
      "your_whatsapp": "🇵🇹 O teu número WhatsApp",
      "change_body": "Quero mudar o corpo",
      "account_area": "Área Pessoal",
      "training": "Treino",
      "nutrition": "Nutrição",
      "your_progress": "A tua evolução",
      "choose_area": "Escolhe uma área acima para veres o teu conteúdo.",
      "create_account": "Criar Conta",
      "login_account": "Entrar na Área Pessoal",
      "email": "Email",
      "help": "Ajuda",
      "faq": "FAQ",
      "contact": "Contactos",
      "contact_title": "Contactos",
      "contact_desc": "Se precisares de ajuda, entra em contacto connosco pelos canais abaixo:",
      "faq1_q": "Quanto tempo vai demorar a ver resultados?",
      "faq1_a": "Os resultados variam de pessoa para pessoa, dependendo da dedicação e consistência. Normalmente, os primeiros sinais de progresso podem ser notados/sentidos entre 4 a 6 semanas, mas mudanças mais significativas surgem após 8 a 12 semanas de treino regular.",
      "faq2_q": "Com que frequência devo treinar por semana?",
      "faq2_a": "Idealmente, deves treinar entre 2 a 5 vezes por semana, com sessões bem distribuídas para garantir a recuperação muscular e maximizar os resultados.",
      "faq3_q": "Preciso seguir uma dieta específica para ver resultados?",
      "faq3_a": "Não precisas seguir uma dieta rigorosa, mas uma alimentação equilibrada e rica em nutrientes, ajustada aos teus objetivos, em que podes melhorar significativamente os teus resultados. Sugestões nutricionais podem ser fornecidas para te ajudar.",
      "faq4_q": "E se eu tiver uma lesão ou condição médica? Ainda posso participar?",
      "faq4_a": "Sim, basta informar-nos sobre qualquer lesão ou condição médica antes de começar o programa. Os treinos serão adaptados para garantir a segurança e o progresso, respeitando as tuas limitações. O questionário irá ajudar-nos a conhecer mais sobre ti.",
      "faq5_q": "Preciso de equipamento para treinar?",
      "faq5_a": "Depende do tipo de treino. Muitos programas podem ser feitos usando apenas o peso do corpo ou com equipamentos básicos como halteres, bandas de resistência ou kettlebells. Se estiveres a treinar em casa, os exercícios podem ser adaptados ao equipamento disponível.",
      "faq6_q": "Os treinos são adaptados ao meu nível de condição física?",
      "faq6_a": "Sim, todos os treinos são personalizados com base no teu nível atual, sejas iniciante, intermédio ou avançado. O objetivo é desafiar-te de forma segura e eficaz.",
      "faq7_q": "Como sei que estou a fazer progressos?",
      "faq7_a": "O progresso é monitorizado de várias formas: avaliações físicas, acompanhamento das medidas, desempenho nos treinos e até como te sentes. Serão também agendados check-ins regulares para ajustar o plano conforme necessário.",
      "faq8_q": "O que acontece se eu faltar a uma sessão de treino?",
      "faq8_a": "É normal faltar a uma sessão ocasionalmente ou ter um imprevisto. O plano será ajustado para garantir que continuas a progredir. O mais importante é a consistência ao longo do tempo. Não te preocupes, deves apenas avisar-nos com 24 horas de antecedência; caso contrário, vais perder a aula."
    }
  },
  en: {
    translation: {
      "welcome": "Welcome to PT Edu Marques!",
      "programs": "Programs",
      "account": "Account Area",
      "login": "Login",
      "logout": "Logout",
      "subscribe": "Subscribe",
      "about": "About",
      "cart": "Cart",
      "landing": "Landing",
      "online_packages": "Online Packages",
      "monthly_value": "monthly value",
      "package": "Package",
      "included_services": "Included Services",
      "price": "Price",
      "waitlist_open": "WAITLIST RE-OPENED",
      "main_title": "CHANGE YOUR BODY, REGAIN CONFIDENCE AND IMPROVE YOUR HEALTH,",
      "main_subtitle": "EATING WHAT YOU LOVE EVERY SINGLE DAY.",
      "main_desc": "Discover (no commitment) our body transformation program and our simple, realistic and true methodology.",
      "your_full_name": "Your full name",
      "your_email": "Your email (the one you use most!)",
      "your_whatsapp": "🇬🇧 Your WhatsApp number",
      "change_body": "I want to change my body",
      "account_area": "Account Area",
      "training": "Training",
      "nutrition": "Nutrition",
      "your_progress": "Your Progress",
      "choose_area": "Choose an area above to see your content.",
      "create_account": "Create Account",
      "login_account": "Login to Account Area",
      "email": "Email",
      "help": "Help",
      "faq": "FAQ",
      "contact": "Contact",
      "contact_title": "Contact",
      "contact_desc": "If you need help, contact us through the channels below:",
      "faq1_q": "How long will it take to see results?",
      "faq1_a": "Results vary from person to person, depending on dedication and consistency. Usually, the first signs of progress can be noticed/felt between 4 to 6 weeks, but more significant changes appear after 8 to 12 weeks of regular training.",
      "faq2_q": "How often should I train per week?",
      "faq2_a": "Ideally, you should train between 2 to 5 times per week, with well-distributed sessions to ensure muscle recovery and maximize results.",
      "faq3_q": "Do I need to follow a specific diet to see results?",
      "faq3_a": "You don't need to follow a strict diet, but a balanced and nutrient-rich diet, adjusted to your goals, can significantly improve your results. Nutritional suggestions can be provided to help you.",
      "faq4_q": "What if I have an injury or medical condition? Can I still participate?",
      "faq4_a": "Yes, just let us know about any injury or medical condition before starting the program. Training will be adapted to ensure safety and progress, respecting your limitations. The questionnaire will help us get to know you better.",
      "faq5_q": "Do I need equipment to train?",
      "faq5_a": "It depends on the type of training. Many programs can be done using only body weight or basic equipment like dumbbells, resistance bands, or kettlebells. If you are training at home, exercises can be adapted to the available equipment.",
      "faq6_q": "Are the workouts adapted to my fitness level?",
      "faq6_a": "Yes, all workouts are personalized based on your current level, whether you are a beginner, intermediate, or advanced. The goal is to challenge you safely and effectively.",
      "faq7_q": "How do I know if I am making progress?",
      "faq7_a": "Progress is monitored in several ways: physical assessments, tracking measurements, performance in workouts, and even how you feel. Regular check-ins will also be scheduled to adjust the plan as needed.",
      "faq8_q": "What happens if I miss a training session?",
      "faq8_a": "It's normal to miss a session occasionally or have an unforeseen event. The plan will be adjusted to ensure you keep progressing. The most important thing is consistency over time. Don't worry, just let us know 24 hours in advance; otherwise, you will lose the class."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
