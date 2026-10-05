/* ============ DADOS DO SITE — edite aqui ============ */
const CONFIG = {
  name: "Sr. Cachos",
  whatsapp: "https://wa.me/5516993325171", // Agendamentos
  whatsappProducts: "https://wa.me/5516994543556", // Compra de produtos
  instagram: "https://instagram.com/senhorcachos",
  address: "Rua da Justiça, 561 — Jd. Lima, Franca – SP",
  hours: [
    { day: "Segunda-feira", time: "Fechado" },
    { day: "Terça-feira", time: "8:00 – 20:00" },
    { day: "Quarta-feira", time: "8:00 – 20:00" },
    { day: "Quinta-feira", time: "8:00 – 20:00" },
    { day: "Sexta-feira", time: "8:00 – 20:00" },
    { day: "Sábado", time: "8:00 – 18:00" },
    { day: "Domingo", time: "Fechado" }
  ],
  img: {
    hero: { src: "img/image6.jpeg", alt: "Mulher com cabelos cacheados volumosos e definidos" },
    hero2: { src: "img/image0.jpeg", alt: "Mulher com cabelos cacheados longos e definidos" },
    serv: { src: "img/image4.jpeg", alt: "Cabelo cacheado finalizado e preso em coque" },
    gal: [
      { src: "img/image1.jpeg", alt: "Cabelo cacheado longo com ondas e definição" },
      { src: "img/image2.jpeg", alt: "Cabelo cacheado curto com definição e volume" },
      { src: "img/image3.jpeg", alt: "Cabelo cacheado preso com cachos definidos" },
      { src: "img/image5.jpeg", alt: "Cabelo cacheado longo visto de perfil" }
    ],
    beforeAfter: [
      {
        before: { src: "img/image14.jpeg", alt: "Antes: cabelo em processo de transformação" },
        after: { src: "img/image15.jpeg", alt: "Depois: cabelo após o corte e finalização" }
      },
      {
        before: { src: "img/image16.jpeg", alt: "Antes: cabelo antes da transformação" },
        after: { src: "img/image17.jpeg", alt: "Depois: cabelo após a transformação" }
      },
      {
        before: { src: "img/image18.jpeg", alt: "Antes: cabelo antes da transformação" },
        after: { src: "img/image19.jpeg", alt: "Depois: cabelo após a transformação" }
      }
    ],
    team: [
      { src: "img/image7.jpeg", alt: "Duda Teles, profissional do Sr. Cachos" },
      { src: "img/image8.jpeg", alt: "Khetlyn Fernandes, profissional do Sr. Cachos" },
      { src: "img/image9.jpeg", alt: "Júlia Ferreira, profissional do Sr. Cachos" },
      { src: "img/image10.jpeg", alt: "Tânia Ferreira, profissional do Sr. Cachos" },
      { src: "img/image11.jpeg", alt: "Rafael, profissional do Sr. Cachos" },
      { src: "img/image12.jpeg", alt: "Gisely, profissional do Sr. Cachos" },
      { src: "img/image13.jpeg", alt: "Karen, profissional do Sr. Cachos" }
    ]
  },
  about: [
    "Aqui, o ponto de partida é o seu cabelo como ele é. A equipe observa curvatura, comportamento do fio e rotina antes de indicar um corte, tratamento ou finalização.",
    "O Sr. Cachos é salão e loja, com foco em cabelos naturais e em transição. A proposta é cuidar da textura com técnica, sem tentar encaixar todo cabelo no mesmo padrão."
  ],
  aboutBig: "Cuidar de cacho e crespo é técnica. Respeitar a textura é o primeiro passo.",
  textures: [
    { name: "Ondulado", description: "Curvas mais suaves, que podem perder forma com peso e calor. O cuidado busca leveza e movimento." , shape: [3.5, 6]},
    { name: "Cacheado", description: "Espirais com diferentes níveis de definição, frizz e ressecamento. Corte e finalização ajudam a revelar o desenho do fio.", shape: [5, 12]},
    { name: "Crespo", description: "Curvatura fechada e muita variação entre os fios. Hidratação, manejo e corte pedem atenção especial.", shape: [8, 7]},
    { name: "Transição", description: "Do fio tratado ao natural, cada fase pede um cuidado diferente. O processo acompanha o tempo e a textura de cada pessoa.", shape: [7, 13, 1]}
  ],
  services: [
    { name: "Corte para cacheados e crespos", description: "Corte pensado para o formato, a curvatura e o caimento que você quer no dia a dia.", meta: "Duração: a combinar" },
    { name: "Finalização e definição", description: "Técnicas para valorizar a forma natural do cabelo e encontrar uma finalização que faça sentido para a sua rotina.", meta: "Duração: a combinar" },
    { name: "Hidratação", description: "Tratamento escolhido de acordo com a necessidade do fio, buscando maciez, maleabilidade e aparência saudável.", meta: "Duração: a combinar" },
    { name: "Reconstrução", description: "Cuidado voltado a fios fragilizados que precisam recuperar resistência, sempre após avaliação.", meta: "Duração: a combinar" },
    { name: "Transição capilar", description: "Orientação e cuidados para acompanhar o cabelo durante a transição e entender cada nova fase da textura.", meta: "Duração: a combinar" },
    { name: "Coloração e mechas", description: "Cor e mechas planejadas de acordo com o objetivo e com as condições do fio.", meta: "Duração: a combinar" },
    { name: "Consultoria personalizada", description: "Uma conversa para entender o cabelo, a rotina e os objetivos antes de montar um caminho de cuidados.", meta: "Duração: a combinar" }
  ],
  steps: [
    { title: "Conte o que você procura", text: "Chame pelo WhatsApp e conte o que gostaria de fazer ou o que está incomodando no seu cabelo." },
    { title: "Converse com o salão", text: "Tire suas dúvidas e encontre o serviço e o horário que fazem sentido para você." },
    { title: "Avaliação, quando necessária", text: "Em alguns procedimentos, a equipe avalia o fio antes de indicar a técnica mais adequada." },
    { title: "Atendimento personalizado", text: "O serviço considera a curvatura, o corte, o comportamento do fio e a sua rotina." },
    { title: "Finalização e orientação", text: "Você sai com orientações para entender e manter o resultado em casa." }
  ],
  testimonials: [
    { name: "Juliana", text: "Maravilhoso o atendimento! Pessoas muito atenciosas e simpáticas. Gostei bastante do atendimento e do corte de cabelo que fiz. Foi uma excelente experiência na minha primeira vez. Com certeza voltarei e recomendo!" },
    { name: "Lorraine Moreira", text: "Profissionais incríveis! Ótimo atendimento, do agendamento ao serviço. Equipe de parabéns. Além de ser um salão completo ainda tem uma cafeteira lá dentro e você também encontra produtos para cuidar dos cabelos em casa." },
    { name: "Monique Candido", text: "Lugar maravilhoso, passei toda minha transição com a equipe. Amei e continuo frequentando!" },
    { name: "Ana Claudia Santos", text: "Salão maravilhoso. Sempre tive medo de cortar o cabelo e a cabeleireira Tânia corta o cabelo do jeitinho que eu gosto, muito cuidadosa. Sem falar no atendimento perfeito! Super indico." },
    { name: "Luciene Albino", text: "Espaço acolhedor, profissionais excelentes, responderam todas as dúvidas, deram dicas valiosas, desde o cuidado do dia a dia até quais produtos indicados para nosso tipo de cabelo." },
    { name: "Julia Ponciano", text: "Fui ao salão e cortei o cabelo com a Tânia! Uma profissional maravilhosa, super atenciosa e que realizou um trabalho impecável! Amei o corte e o cuidado com o meu cabelo." },
    { name: "Ana Laura Oliveira", text: "Sempre amo os resultados! Elas vendem ótimos produtos e dão ótimas dicas para os cuidados de cada tipo de cabelo." },
    { name: "Roberta Garcia", text: "Muito bom o lugar, produtos maravilhosos!! E atendimento nota 10!!" }
  ],
  team: [
    { name: "Duda Teles", specialty: "Especialista em cabelos naturais", bio: "Cortes, coloração e mechas." },
    { name: "Khetlyn Fernandes", specialty: "Especialista em cabelos naturais", bio: "Cortes e cuidados para cabelos naturais." },
    { name: "Júlia Ferreira", specialty: "Especialista em cabelos naturais", bio: "Maquiagem e cuidados para cabelos naturais." },
    { name: "Tânia Ferreira", specialty: "Especialista em cabelos naturais", bio: "Tratamentos e cortes." },
    { name: "Rafael", specialty: "Especialista em cabelos naturais", bio: "Cuidados e técnicas para cabelos naturais." },
    { name: "Gisely", specialty: "Especialista em tratamentos", bio: "Tratamentos e consultoria." },
    { name: "Karen", specialty: "Especialista em cabelos naturais", bio: "Cortes, tratamentos e mechas." }
  ],
  faq: [
    ["Vocês fazem química?", "O foco do salão é cabelo natural e em transição, com cortes, tratamentos, coloração e mechas. Para saber se um procedimento específico é indicado, fale com a equipe."],
    ["Preciso de avaliação antes?", "Em alguns serviços, sim. Pelo WhatsApp, a equipe pode entender o que você procura e orientar sobre a necessidade de avaliação."],
    ["Quanto custa?", "Os valores são informados pelo salão de acordo com o serviço e as características do cabelo. Chame no WhatsApp para consultar."],
    ["Vocês vendem produtos?", "Sim. O Sr. Cachos também trabalha com produtos. Pergunte à equipe sobre as opções disponíveis."],
    ["Vocês atendem cabelos em transição?", "Sim. A transição faz parte da proposta do salão e o atendimento considera a fase atual do cabelo e o objetivo de cada pessoa."],
    ["Como agendo um horário?", "É só clicar em um dos botões de WhatsApp do site e conversar com a equipe sobre o serviço que você procura."]
  ]
};
