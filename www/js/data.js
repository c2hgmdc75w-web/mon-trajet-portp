/* ============================================================
   MON TRAJET EN PORTUGAIS (PORTUGAL) — données de contenu
   3 niveaux × 3 modules × 20 leçons × 10 phrases = 1800 phrases,
   45 points de grammaire. Champ cible : "pt" (TTS pt-PT).
   ============================================================ */

const ICONS = {
  headphones:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0118 0v2"/><path d="M21 14a2 2 0 01-2 2h-1a2 2 0 01-2-2v-1a2 2 0 012-2h3v3z"/><path d="M3 14a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 00-2-2H3v3z"/></svg>',
  speaker:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>',
  repeat:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>'
};

const level1Module1Lessons = [
 {
  "title": "Arrivée à Lisbonne",
  "phrases": [
   {
    "fr": "Enfin à Lisbonne, quel soleil !",
    "pt": "Finalmente em Lisboa, que sol!"
   },
   {
    "fr": "Excusez-moi, le métro, c'est par où ?",
    "pt": "Desculpe, o metro é por onde?"
   },
   {
    "fr": "J'ai seulement une valise.",
    "pt": "Tenho só uma mala."
   },
   {
    "fr": "Le métro part juste devant l'aéroport.",
    "pt": "O metro sai mesmo à porta do aeroporto."
   },
   {
    "fr": "Je vais en métro jusqu'au centre.",
    "pt": "Vou de metro até ao centro."
   },
   {
    "fr": "Combien coûte la carte de transport ?",
    "pt": "Quanto custa o cartão de transporte?"
   },
   {
    "fr": "La carte coûte cinquante centimes.",
    "pt": "O cartão custa cinquenta cêntimos."
   },
   {
    "fr": "Je vais descendre à Baixa-Chiado.",
    "pt": "Vou sair na Baixa-Chiado."
   },
   {
    "fr": "Mon appartement se trouve à Alfama.",
    "pt": "O meu apartamento fica em Alfama."
   },
   {
    "fr": "Le centre est à vingt minutes en métro.",
    "pt": "O centro fica a vinte minutos de metro."
   }
  ]
 },
 {
  "title": "Une bica à la pastelaria",
  "phrases": [
   {
    "fr": "Bonjour, une bica et un pastel de nata, s'il vous plaît.",
    "pt": "Bom dia, uma bica e um pastel de nata, se faz favor."
   },
   {
    "fr": "Le pastel de nata est encore chaud.",
    "pt": "O pastel de nata ainda está quente."
   },
   {
    "fr": "Tu veux de la cannelle dessus ?",
    "pt": "Queres canela por cima?"
   },
   {
    "fr": "Oui, un peu de cannelle et de sucre.",
    "pt": "Sim, um pouco de canela e de açúcar."
   },
   {
    "fr": "Pour moi, un galão et une tosta mista.",
    "pt": "Para mim, um galão e uma tosta mista."
   },
   {
    "fr": "La pastelaria est pleine ce matin.",
    "pt": "A pastelaria está cheia esta manhã."
   },
   {
    "fr": "On mange au comptoir ?",
    "pt": "Comemos ao balcão?"
   },
   {
    "fr": "Le café ici est vraiment bon.",
    "pt": "O café aqui é mesmo bom."
   },
   {
    "fr": "Ça fait combien en tout ?",
    "pt": "Quanto é tudo?"
   },
   {
    "fr": "Trois euros quarante, s'il vous plaît.",
    "pt": "São três euros e quarenta, por favor."
   }
  ],
  "tip": {
   "title": "« O, a, um, uma » : les articles",
   "example": "Pour moi, un galão et une tosta mista. — Para mim, <b>um</b> galão e <b>uma</b> tosta mista.",
   "body": "Comme en français, le portugais a des articles définis (o, a, os, as = le, la, les) et indéfinis (um, uma = un, une). On les accorde en genre et en nombre : o café, a bica, um pastel, uma tosta, os pastéis. Attention, le genre ne correspond pas toujours au français : a ponte (le pont), a viagem (le voyage)."
  }
 },
 {
  "title": "Le miradouro de Santa Luzia",
  "phrases": [
   {
    "fr": "On monte au miradouro de Santa Luzia ?",
    "pt": "Subimos ao miradouro de Santa Luzia?"
   },
   {
    "fr": "La montée est un peu raide.",
    "pt": "A subida é um bocado íngreme."
   },
   {
    "fr": "Regarde, on voit le Tage d'ici !",
    "pt": "Olha, daqui vê-se o Tejo!"
   },
   {
    "fr": "Les toits d'Alfama sont magnifiques.",
    "pt": "Os telhados de Alfama são lindíssimos."
   },
   {
    "fr": "Les azulejos sont bleus et blancs.",
    "pt": "Os azulejos são azuis e brancos."
   },
   {
    "fr": "Tu me prends en photo ?",
    "pt": "Tiras-me uma fotografia?"
   },
   {
    "fr": "Il y a beaucoup de touristes ce matin.",
    "pt": "Hoje de manhã há muitos turistas."
   },
   {
    "fr": "On s'assoit un peu sur ce banc ?",
    "pt": "Sentamo-nos um pouco neste banco?"
   },
   {
    "fr": "J'adore la lumière de Lisbonne.",
    "pt": "Adoro a luz de Lisboa."
   },
   {
    "fr": "On redescend à pied vers la Baixa.",
    "pt": "Descemos a pé até à Baixa."
   }
  ]
 },
 {
  "title": "S'installer à Alfama",
  "phrases": [
   {
    "fr": "Voici les clés de l'appartement.",
    "pt": "Aqui estão as chaves do apartamento."
   },
   {
    "fr": "L'appartement est au deuxième étage.",
    "pt": "O apartamento fica no segundo andar."
   },
   {
    "fr": "Il n'y a pas d'ascenseur dans l'immeuble.",
    "pt": "Não há elevador no prédio."
   },
   {
    "fr": "La cuisine est petite, mais très lumineuse.",
    "pt": "A cozinha é pequena, mas tem muita luz."
   },
   {
    "fr": "Où est la salle de bains ?",
    "pt": "Onde é a casa de banho?"
   },
   {
    "fr": "Le frigo ne marche pas.",
    "pt": "O frigorífico não funciona."
   },
   {
    "fr": "Je vais appeler le propriétaire.",
    "pt": "Vou ligar ao senhorio."
   },
   {
    "fr": "La fenêtre donne sur la ruelle.",
    "pt": "A janela dá para a rua."
   },
   {
    "fr": "Le soir, on entend le fado d'ici.",
    "pt": "À noite, ouve-se o fado daqui."
   },
   {
    "fr": "Je me sens déjà bien ici.",
    "pt": "Já me sinto bem aqui."
   }
  ]
 },
 {
  "title": "Une matinée à Graça",
  "phrases": [
   {
    "fr": "Graça est un quartier très calme.",
    "pt": "A Graça é um bairro muito calmo."
   },
   {
    "fr": "Aujourd'hui, il y a un marché sur la place.",
    "pt": "Hoje há uma feira no largo."
   },
   {
    "fr": "Moi, je suis français, et toi ?",
    "pt": "Sou francês, e tu?"
   },
   {
    "fr": "Je suis ici pour six mois.",
    "pt": "Estou cá por seis meses."
   },
   {
    "fr": "La boulangerie est fermée le dimanche.",
    "pt": "A padaria está fechada ao domingo."
   },
   {
    "fr": "Cette terrasse est très agréable.",
    "pt": "Esta esplanada é muito agradável."
   },
   {
    "fr": "Tu es fatigué ?",
    "pt": "Estás cansado?"
   },
   {
    "fr": "Non, je suis juste un peu en retard.",
    "pt": "Não, só estou um bocado atrasado."
   },
   {
    "fr": "Mon voisin est très sympathique.",
    "pt": "O meu vizinho é muito simpático."
   },
   {
    "fr": "Le café est déjà froid.",
    "pt": "O café já está frio."
   }
  ],
  "tip": {
   "title": "« Ser » ou « estar » ?",
   "example": "Moi, je suis français, et toi ? — <b>Sou</b> francês, e tu?",
   "body": "Le verbe « être » se traduit par deux verbes. « Ser » exprime l'identité, la nationalité ou une caractéristique durable : sou francês, a Graça é calma. « Estar » exprime un état passager ou la situation du moment : estou cansado, o café está frio. Comparez : « O meu vizinho é simpático » (de nature) et « Hoje está muito simpático » (aujourd'hui)."
  }
 },
 {
  "title": "En elétrico 28",
  "phrases": [
   {
    "fr": "On prend l'elétrico 28 à Martim Moniz.",
    "pt": "Apanhamos o elétrico 28 no Martim Moniz."
   },
   {
    "fr": "Il y a déjà une file énorme.",
    "pt": "Já há uma fila enorme."
   },
   {
    "fr": "L'elétrico passe toutes les dix minutes.",
    "pt": "O elétrico passa de dez em dez minutos."
   },
   {
    "fr": "Je valide ma carte en montant.",
    "pt": "Valido o cartão à entrada."
   },
   {
    "fr": "Fais attention à ton sac !",
    "pt": "Cuidado com a tua mala!"
   },
   {
    "fr": "Les rues sont très étroites par ici.",
    "pt": "As ruas aqui são muito estreitas."
   },
   {
    "fr": "L'elétrico monte jusqu'à Graça.",
    "pt": "O elétrico sobe até à Graça."
   },
   {
    "fr": "Je descends à l'arrêt suivant.",
    "pt": "Saio na próxima paragem."
   },
   {
    "fr": "Il y a une place libre, assieds-toi.",
    "pt": "Há um lugar livre, senta-te."
   },
   {
    "fr": "Ce trajet est vraiment génial !",
    "pt": "Esta viagem é mesmo fixe!"
   }
  ]
 },
 {
  "title": "Déjeuner dans la Mouraria",
  "phrases": [
   {
    "fr": "On déjeune dans cette petite tasca ?",
    "pt": "Almoçamos nesta tasca?"
   },
   {
    "fr": "Le plat du jour est écrit sur le tableau.",
    "pt": "O prato do dia está no quadro."
   },
   {
    "fr": "Je vais prendre une bifana.",
    "pt": "Eu vou querer uma bifana."
   },
   {
    "fr": "Et pour moi, des sardines grillées.",
    "pt": "E para mim, sardinhas assadas."
   },
   {
    "fr": "Tu veux du vin ou de l'eau ?",
    "pt": "Queres vinho ou água?"
   },
   {
    "fr": "Un verre de vinho verde, s'il vous plaît.",
    "pt": "Um copo de vinho verde, se faz favor."
   },
   {
    "fr": "Le pain et les olives arrivent tout de suite.",
    "pt": "O pão e as azeitonas vêm já."
   },
   {
    "fr": "Le serveur est très rapide.",
    "pt": "O empregado é muito rápido."
   },
   {
    "fr": "Ces sardines sont délicieuses.",
    "pt": "Estas sardinhas estão deliciosas."
   },
   {
    "fr": "Vous pouvez nous apporter l'addition ?",
    "pt": "Pode trazer-nos a conta, por favor?"
   }
  ]
 },
 {
  "title": "Au marché du quartier",
  "phrases": [
   {
    "fr": "Je vais au marché ce matin.",
    "pt": "Vou ao mercado esta manhã."
   },
   {
    "fr": "Le marché du quartier ouvre à sept heures.",
    "pt": "O mercado do bairro abre às sete horas."
   },
   {
    "fr": "Je voudrais un demi-kilo de tomates.",
    "pt": "Queria meio quilo de tomate."
   },
   {
    "fr": "Ces oranges sont bien sucrées ?",
    "pt": "Estas laranjas são docinhas?"
   },
   {
    "fr": "La poissonnerie est au fond du marché.",
    "pt": "A peixaria fica ao fundo do mercado."
   },
   {
    "fr": "Le poisson est très frais aujourd'hui.",
    "pt": "O peixe hoje está muito fresco."
   },
   {
    "fr": "Je prends deux daurades.",
    "pt": "Levo duas douradas."
   },
   {
    "fr": "J'achète le pain à la boulangerie d'à côté.",
    "pt": "Compro o pão na padaria ao lado."
   },
   {
    "fr": "Ça fait six euros vingt.",
    "pt": "São seis euros e vinte."
   },
   {
    "fr": "Je mets tout dans le sac.",
    "pt": "Ponho tudo no saco."
   }
  ],
  "tip": {
   "title": "Les contractions « no, na, do, da, ao »",
   "example": "La poissonnerie est au fond du marché. — A peixaria fica <b>ao</b> fundo <b>do</b> mercado.",
   "body": "Comme « au » (à + le) en français, le portugais contracte les prépositions avec l'article, et cela aussi au féminin. Em + o = no, em + a = na : no mercado, na padaria. De + o = do, de + a = da : do bairro, da Graça. A + o = ao, a + a = à : vou ao mercado, vou à pastelaria."
  }
 },
 {
  "title": "Les courses à la mercearia",
  "phrases": [
   {
    "fr": "Il y a une petite épicerie au coin de la rue.",
    "pt": "Há uma mercearia na esquina."
   },
   {
    "fr": "Tu as besoin de quelque chose ?",
    "pt": "Precisas de alguma coisa?"
   },
   {
    "fr": "Il nous faut du lait et des œufs.",
    "pt": "Precisamos de leite e de ovos."
   },
   {
    "fr": "Une douzaine d'œufs, s'il vous plaît.",
    "pt": "Uma dúzia de ovos, se faz favor."
   },
   {
    "fr": "Vous avez de l'huile d'olive portugaise ?",
    "pt": "Tem azeite português?"
   },
   {
    "fr": "Celle-là est excellente.",
    "pt": "Este é excelente."
   },
   {
    "fr": "Je prends aussi une bouteille d'eau.",
    "pt": "Levo também uma garrafa de água."
   },
   {
    "fr": "Je peux régler avec ma carte ?",
    "pt": "Posso pagar com cartão?"
   },
   {
    "fr": "Oui, mais seulement à partir de cinq euros.",
    "pt": "Sim, mas só a partir de cinco euros."
   },
   {
    "fr": "Il y a un distributeur dans la rue d'en face.",
    "pt": "Há um multibanco na rua em frente."
   }
  ]
 },
 {
  "title": "Une soirée au Bairro Alto",
  "phrases": [
   {
    "fr": "Ce soir, on sort au Bairro Alto.",
    "pt": "Hoje à noite vamos ao Bairro Alto."
   },
   {
    "fr": "Les ruelles sont pleines de monde.",
    "pt": "As ruas estão cheias de gente."
   },
   {
    "fr": "On boit un verre dehors ?",
    "pt": "Bebemos um copo lá fora?"
   },
   {
    "fr": "Je vais prendre une bière pression.",
    "pt": "Vou pedir uma imperial."
   },
   {
    "fr": "La musique est un peu trop forte.",
    "pt": "A música está um bocado alta."
   },
   {
    "fr": "Il y a une maison de fado dans cette rue.",
    "pt": "Há uma casa de fados nesta rua."
   },
   {
    "fr": "On réserve une table pour dix heures du soir ?",
    "pt": "Reservamos uma mesa para as dez da noite?"
   },
   {
    "fr": "Le Bairro Alto est très animé la nuit.",
    "pt": "O Bairro Alto é muito animado à noite."
   },
   {
    "fr": "Il est tard, je rentre à la maison.",
    "pt": "Já é tarde, vou para casa."
   },
   {
    "fr": "On prend un taxi ou on marche ?",
    "pt": "Apanhamos um táxi ou vamos a pé?"
   }
  ]
 },
 {
  "title": "Le temps qu'il fait",
  "phrases": [
   {
    "fr": "Il fait quel temps ce matin ?",
    "pt": "Como está o tempo esta manhã?"
   },
   {
    "fr": "En été, il fait très chaud à Lisbonne.",
    "pt": "No verão, faz muito calor em Lisboa."
   },
   {
    "fr": "Aujourd'hui, il fait vingt-huit degrés.",
    "pt": "Hoje estão vinte e oito graus."
   },
   {
    "fr": "Il va pleuvoir dans l'après-midi.",
    "pt": "Vai chover à tarde."
   },
   {
    "fr": "Prends un parapluie, on ne sait jamais.",
    "pt": "Leva um guarda-chuva, nunca se sabe."
   },
   {
    "fr": "Il y a beaucoup de vent au miradouro.",
    "pt": "Está muito vento no miradouro."
   },
   {
    "fr": "En hiver, il ne fait pas très froid ici.",
    "pt": "No inverno, não faz muito frio cá."
   },
   {
    "fr": "Mais les maisons sont souvent humides.",
    "pt": "Mas as casas são muitas vezes húmidas."
   },
   {
    "fr": "Le ciel est tout bleu ce matin.",
    "pt": "O céu está todo azul esta manhã."
   },
   {
    "fr": "Il fait un temps parfait pour se promener !",
    "pt": "Está um dia ótimo para passear!"
   }
  ]
 },
 {
  "title": "Le metro de Lisbonne",
  "phrases": [
   {
    "fr": "La station de métro est à deux minutes.",
    "pt": "A estação de metro fica a dois minutos."
   },
   {
    "fr": "Je recharge ma carte à la machine.",
    "pt": "Carrego o cartão na máquina."
   },
   {
    "fr": "Un trajet coûte combien ?",
    "pt": "Quanto custa uma viagem?"
   },
   {
    "fr": "La ligne bleue passe par Baixa-Chiado.",
    "pt": "A linha azul passa pela Baixa-Chiado."
   },
   {
    "fr": "Pour la Mouraria, je descends à Martim Moniz.",
    "pt": "Para a Mouraria, saio no Martim Moniz."
   },
   {
    "fr": "Le métro est bondé à l'heure de pointe.",
    "pt": "O metro vai cheio à hora de ponta."
   },
   {
    "fr": "Le prochain métro arrive dans trois minutes.",
    "pt": "O próximo metro chega daqui a três minutos."
   },
   {
    "fr": "Je dois changer de ligne à Baixa-Chiado.",
    "pt": "Tenho de mudar de linha na Baixa-Chiado."
   },
   {
    "fr": "Le métro ferme vers une heure du matin.",
    "pt": "O metro fecha por volta da uma da manhã."
   },
   {
    "fr": "C'est plus rapide que le bus.",
    "pt": "É mais rápido do que o autocarro."
   }
  ]
 },
 {
  "title": "Demander son chemin dans la Baixa",
  "phrases": [
   {
    "fr": "Excusez-moi, la rue Augusta, c'est par où ?",
    "pt": "Desculpe, a Rua Augusta é por onde?"
   },
   {
    "fr": "Continuez tout droit jusqu'au bout de la rue.",
    "pt": "Siga sempre em frente até ao fim da rua."
   },
   {
    "fr": "Ensuite, tournez à droite.",
    "pt": "Depois, vire à direita."
   },
   {
    "fr": "C'est loin à pied ?",
    "pt": "É longe a pé?"
   },
   {
    "fr": "Non, c'est à cinq minutes.",
    "pt": "Não, fica a cinco minutos."
   },
   {
    "fr": "Vous voyez le grand arc là-bas ?",
    "pt": "Está a ver aquele arco grande ali?"
   },
   {
    "fr": "Le Terreiro do Paço est juste derrière.",
    "pt": "O Terreiro do Paço fica logo atrás."
   },
   {
    "fr": "Je suis un peu perdu dans ces rues.",
    "pt": "Estou um bocado perdido nestas ruas."
   },
   {
    "fr": "Toutes les rues de la Baixa se ressemblent.",
    "pt": "As ruas da Baixa são todas parecidas."
   },
   {
    "fr": "Merci beaucoup, vous êtes très aimable.",
    "pt": "Muito obrigado, é muito amável."
   }
  ]
 },
 {
  "title": "La routine du matin",
  "phrases": [
   {
    "fr": "Je me lève à sept heures tous les jours.",
    "pt": "Levanto-me às sete horas todos os dias."
   },
   {
    "fr": "Je prends une douche et je m'habille.",
    "pt": "Tomo banho e visto-me."
   },
   {
    "fr": "Je ne prends pas le petit-déjeuner à la maison.",
    "pt": "Não tomo o pequeno-almoço em casa."
   },
   {
    "fr": "Je descends à la pastelaria du coin.",
    "pt": "Desço à pastelaria da esquina."
   },
   {
    "fr": "Bonjour, madame, vous voulez un galão comme d'habitude ?",
    "pt": "Bom dia, a senhora quer o galão do costume?"
   },
   {
    "fr": "Oui, avec une tosta mista, s'il vous plaît.",
    "pt": "Sim, com uma tosta mista, se faz favor."
   },
   {
    "fr": "Maintenant, le serveur me tutoie.",
    "pt": "Agora o empregado já me trata por tu."
   },
   {
    "fr": "Tu veux du sucre dans ton café ?",
    "pt": "Queres açúcar no café?"
   },
   {
    "fr": "Ensuite, je prends l'elétrico pour aller travailler.",
    "pt": "Depois, apanho o elétrico para o trabalho."
   },
   {
    "fr": "J'arrive au bureau à neuf heures.",
    "pt": "Chego ao escritório às nove horas."
   }
  ],
  "tip": {
   "title": "« Tu » et « o senhor / a senhora » : tutoyer et vouvoyer au Portugal",
   "example": "Bonjour, madame, vous voulez un galão comme d'habitude ? — Bom dia, <b>a senhora quer</b> o galão do costume?",
   "body": "Pour tutoyer, on emploie « tu » avec le verbe à la 2e personne : queres, podes, estás. Pour vouvoyer, on dit « o senhor / a senhora » avec le verbe à la 3e personne, ou simplement le verbe seul : « Quer um café? », « Pode ajudar-me? ». Au Portugal, « você » sonne souvent distant, voire impoli : mieux vaut l'éviter. Passer au tutoiement se dit « tratar por tu »."
  }
 },
 {
  "title": "Les tâches de la maison",
  "phrases": [
   {
    "fr": "Aujourd'hui, je range toute la maison.",
    "pt": "Hoje vou arrumar a casa toda."
   },
   {
    "fr": "Tu peux passer l'aspirateur dans le salon ?",
    "pt": "Podes aspirar a sala?"
   },
   {
    "fr": "Après le dîner, je fais la vaisselle.",
    "pt": "Depois do jantar, lavo a loiça."
   },
   {
    "fr": "Qui descend les poubelles ce soir ?",
    "pt": "Quem leva o lixo hoje à noite?"
   },
   {
    "fr": "J'étends le linge à la fenêtre.",
    "pt": "Estendo a roupa à janela."
   },
   {
    "fr": "Avec ce soleil, il sèche vite.",
    "pt": "Com este sol, seca depressa."
   },
   {
    "fr": "Il faut acheter du liquide vaisselle.",
    "pt": "Temos de comprar detergente da loiça."
   },
   {
    "fr": "La machine à laver fait beaucoup de bruit.",
    "pt": "A máquina de lavar faz muito barulho."
   },
   {
    "fr": "Je range mes affaires dans l'armoire.",
    "pt": "Arrumo as minhas coisas no armário."
   },
   {
    "fr": "Voilà, la maison est enfin propre !",
    "pt": "Pronto, a casa já está limpa!"
   }
  ]
 },
 {
  "title": "Les vêtements dans le Chiado",
  "phrases": [
   {
    "fr": "On va faire les boutiques dans le Chiado ?",
    "pt": "Vamos às compras ao Chiado?"
   },
   {
    "fr": "Je cherche une veste légère.",
    "pt": "Procuro um casaco leve."
   },
   {
    "fr": "Quelle taille faites-vous ?",
    "pt": "Qual é o seu tamanho?"
   },
   {
    "fr": "Je fais du trente-huit.",
    "pt": "Visto o trinta e oito."
   },
   {
    "fr": "Les cabines d'essayage sont au fond.",
    "pt": "Os provadores ficam ao fundo."
   },
   {
    "fr": "Ce pull rouge te va très bien.",
    "pt": "Essa camisola vermelha fica-te muito bem."
   },
   {
    "fr": "Il est un peu trop grand pour moi.",
    "pt": "É um bocado grande para mim."
   },
   {
    "fr": "Vous l'avez en noir ?",
    "pt": "Tem em preto?"
   },
   {
    "fr": "Ces chaussures sont parfaites pour les pavés.",
    "pt": "Estes sapatos são perfeitos para a calçada."
   },
   {
    "fr": "Je les prends, merci.",
    "pt": "Levo-os, obrigado."
   }
  ]
 },
 {
  "title": "L'heure et les nombres",
  "phrases": [
   {
    "fr": "Tu peux me donner l'heure ?",
    "pt": "Tens horas, por favor?"
   },
   {
    "fr": "Là, il est dix heures et quart.",
    "pt": "Agora são dez e um quarto."
   },
   {
    "fr": "La pastelaria ferme à vingt heures.",
    "pt": "A pastelaria fecha às oito da noite."
   },
   {
    "fr": "On se retrouve à midi et demi ?",
    "pt": "Encontramo-nos ao meio-dia e meia?"
   },
   {
    "fr": "Il est presque une heure.",
    "pt": "É quase uma hora."
   },
   {
    "fr": "Mon numéro de porte, c'est le quinze.",
    "pt": "O número da minha porta é o quinze."
   },
   {
    "fr": "Il y a trente-deux marches jusqu'à chez moi.",
    "pt": "Há trinta e dois degraus até à minha casa."
   },
   {
    "fr": "J'ai vingt-neuf ans.",
    "pt": "Tenho vinte e nove anos."
   },
   {
    "fr": "Le billet coûte trois euros dix.",
    "pt": "O bilhete custa três euros e dez."
   },
   {
    "fr": "J'ai cinq minutes de retard.",
    "pt": "Estou cinco minutos atrasado."
   }
  ]
 },
 {
  "title": "Un appel téléphonique",
  "phrases": [
   {
    "fr": "Allô, c'est Sofia ?",
    "pt": "Estou? É a Sofia?"
   },
   {
    "fr": "Oui, c'est moi. Qui est à l'appareil ?",
    "pt": "Sim, sou eu. Quem fala?"
   },
   {
    "fr": "Mon téléphone n'a presque plus de batterie.",
    "pt": "O meu telemóvel já quase não tem bateria."
   },
   {
    "fr": "Il n'y a pas de réseau dans le métro.",
    "pt": "Não há rede no metro."
   },
   {
    "fr": "Tu as un chargeur ?",
    "pt": "Tens um carregador?"
   },
   {
    "fr": "Je te rappelle d'ici dix minutes.",
    "pt": "Ligo-te daqui a dez minutos."
   },
   {
    "fr": "Tu as mon nouveau numéro ?",
    "pt": "Tens o meu número novo?"
   },
   {
    "fr": "Je t'envoie un message avec l'adresse.",
    "pt": "Mando-te uma mensagem com a morada."
   },
   {
    "fr": "Il y a un problème avec l'appartement.",
    "pt": "Há um problema com o apartamento."
   },
   {
    "fr": "D'accord, à tout à l'heure.",
    "pt": "Está bem, até logo."
   }
  ],
  "tip": {
   "title": "« Ter » et « há » (= il y a)",
   "example": "Il n'y a pas de réseau dans le métro. — Não <b>há</b> rede no metro.",
   "body": "« Ter » signifie avoir : tenho, tens, tem, temos, têm (tens um carregador?). Pour dire « il y a », le portugais européen emploie « há », qui ne change jamais : há um problema, há muitos turistas, não há rede. Au Portugal, on évite « tem » dans ce sens : on dit « há uma pastelaria aqui »."
  }
 },
 {
  "title": "Coucher de soleil à la Senhora do Monte",
  "phrases": [
   {
    "fr": "C'est le miradouro le plus haut de Lisbonne.",
    "pt": "É o miradouro mais alto de Lisboa."
   },
   {
    "fr": "On y va pour le coucher du soleil ?",
    "pt": "Vamos lá ver o pôr do sol?"
   },
   {
    "fr": "Il faut monter en passant par Graça.",
    "pt": "Temos de subir pela Graça."
   },
   {
    "fr": "D'ici, on voit toute la ville.",
    "pt": "Daqui vê-se a cidade toda."
   },
   {
    "fr": "Là-bas, c'est le château Saint-Georges.",
    "pt": "Ali é o Castelo de São Jorge."
   },
   {
    "fr": "Le ciel devient tout orange.",
    "pt": "O céu está a ficar cor de laranja."
   },
   {
    "fr": "Un musicien joue de la guitare à côté.",
    "pt": "Está ali um músico a tocar guitarra."
   },
   {
    "fr": "On reste encore un petit peu ?",
    "pt": "Ficamos mais um bocadinho?"
   },
   {
    "fr": "Il commence à faire frais.",
    "pt": "Começa a estar fresco."
   },
   {
    "fr": "Quelle belle fin de journée !",
    "pt": "Que fim de tarde tão bonito!"
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce premier module se termine ici.",
    "pt": "Este primeiro módulo acaba aqui."
   },
   {
    "fr": "Maintenant, je commande un café en portugais.",
    "pt": "Agora já peço um café em português."
   },
   {
    "fr": "Je sais déjà demander mon chemin à Lisbonne.",
    "pt": "Já sei perguntar o caminho em Lisboa."
   },
   {
    "fr": "Je comprends l'heure et les prix.",
    "pt": "Percebo as horas e os preços."
   },
   {
    "fr": "Le portugais n'est pas si difficile.",
    "pt": "O português não é assim tão difícil."
   },
   {
    "fr": "La prononciation reste un vrai défi.",
    "pt": "A pronúncia ainda é um grande desafio."
   },
   {
    "fr": "Le prochain module parle de voyages.",
    "pt": "O próximo módulo é sobre viagens."
   },
   {
    "fr": "Je vais pratiquer un peu chaque jour.",
    "pt": "Vou praticar um bocadinho todos os dias."
   },
   {
    "fr": "Bravo, tu te débrouilles très bien !",
    "pt": "Parabéns, estás a ir muito bem!"
   },
   {
    "fr": "On se retrouve bientôt pour la suite.",
    "pt": "Encontramo-nos em breve para continuar."
   }
  ]
 }
];

const level1Module2Lessons = [
 {
  "title": "Arrivée à l'aéroport de Porto",
  "phrases": [
   {
    "fr": "On vient d'atterrir à Porto.",
    "pt": "Acabámos de aterrar no Porto."
   },
   {
    "fr": "Où est le tapis des bagages ?",
    "pt": "Onde é o tapete das bagagens?"
   },
   {
    "fr": "Le métro va jusqu'au centre-ville.",
    "pt": "O metro vai até ao centro da cidade."
   },
   {
    "fr": "Il faut acheter une carte Andante ?",
    "pt": "É preciso comprar um cartão Andante?"
   },
   {
    "fr": "Oui, à la machine près de la sortie.",
    "pt": "Sim, na máquina ao pé da saída."
   },
   {
    "fr": "Le trajet prend environ une demi-heure.",
    "pt": "A viagem demora cerca de meia hora."
   },
   {
    "fr": "On peut aussi prendre un taxi.",
    "pt": "Também podemos apanhar um táxi."
   },
   {
    "fr": "Le taxi est trop cher pour nous.",
    "pt": "O táxi é demasiado caro para nós."
   },
   {
    "fr": "Alors on prend le métro, la ligne violette.",
    "pt": "Então apanhamos o metro, a linha violeta."
   },
   {
    "fr": "Bienvenue dans le Nord du Portugal !",
    "pt": "Bem-vindos ao Norte de Portugal!"
   }
  ]
 },
 {
  "title": "Des billets à la gare de São Bento",
  "phrases": [
   {
    "fr": "Je voudrais deux billets pour Guimarães.",
    "pt": "Queria dois bilhetes para Guimarães."
   },
   {
    "fr": "Pour quel train, s'il vous plaît ?",
    "pt": "Para que comboio, por favor?"
   },
   {
    "fr": "Le prochain, si possible.",
    "pt": "O próximo, se possível."
   },
   {
    "fr": "Il part à dix heures et quart.",
    "pt": "Parte às dez e um quarto."
   },
   {
    "fr": "Je voudrais aussi un aller-retour pour Braga.",
    "pt": "Queria também um bilhete de ida e volta para Braga."
   },
   {
    "fr": "Vous avez une réduction pour les jeunes ?",
    "pt": "Tem desconto para jovens?"
   },
   {
    "fr": "Oui, avec une pièce d'identité.",
    "pt": "Sim, com um documento de identificação."
   },
   {
    "fr": "On peut payer par carte ici ?",
    "pt": "Pode-se pagar com cartão aqui?"
   },
   {
    "fr": "Bien sûr, voici vos billets.",
    "pt": "Claro, aqui tem os seus bilhetes."
   },
   {
    "fr": "Le train part de la voie quatre.",
    "pt": "O comboio parte da linha quatro."
   }
  ],
  "tip": {
   "title": "« Queria… » : demander poliment (l'imparfait de politesse)",
   "example": "Je voudrais deux billets pour Guimarães. — <b>Queria</b> dois bilhetes para Guimarães.",
   "body": "Pour demander poliment, les Portugais utilisent l'imparfait « queria » (littéralement « je voulais »), là où le français emploie le conditionnel « je voudrais ». C'est la formule la plus courante au guichet, au café ou au restaurant : « Queria um café, por favor », « Queria uma mesa para dois ». « Quero » (je veux) est possible, mais plus direct ; « queria » sonne toujours aimable."
  }
 },
 {
  "title": "Les azulejos de São Bento",
  "phrases": [
   {
    "fr": "Regarde le hall de la gare de São Bento !",
    "pt": "Olha para o átrio da estação de São Bento!"
   },
   {
    "fr": "Les murs sont couverts d'azulejos.",
    "pt": "As paredes estão cobertas de azulejos."
   },
   {
    "fr": "Ils sont bleus et blancs.",
    "pt": "São azuis e brancos."
   },
   {
    "fr": "Ils racontent l'histoire du Portugal.",
    "pt": "Contam a história de Portugal."
   },
   {
    "fr": "Il y a environ vingt mille carreaux.",
    "pt": "Há cerca de vinte mil azulejos."
   },
   {
    "fr": "Je n'ai jamais vu une gare aussi belle.",
    "pt": "Nunca vi uma estação tão bonita."
   },
   {
    "fr": "On prend une photo ensemble ?",
    "pt": "Tiramos uma fotografia juntos?"
   },
   {
    "fr": "Attention, il y a beaucoup de monde ici.",
    "pt": "Cuidado, está aqui muita gente."
   },
   {
    "fr": "Les touristes viennent ici même sans prendre le train.",
    "pt": "Os turistas vêm cá mesmo sem apanhar o comboio."
   },
   {
    "fr": "La Ribeira est à dix minutes à pied.",
    "pt": "A Ribeira fica a dez minutos a pé."
   }
  ]
 },
 {
  "title": "Un alojamento local dans la Ribeira",
  "phrases": [
   {
    "fr": "Bonjour, j'ai une réservation au nom de Martin.",
    "pt": "Bom dia, tenho uma reserva em nome de Martin."
   },
   {
    "fr": "Bienvenue, vous restez trois nuits ?",
    "pt": "Bem-vindo, fica três noites?"
   },
   {
    "fr": "Oui, jusqu'à vendredi matin.",
    "pt": "Sim, até sexta-feira de manhã."
   },
   {
    "fr": "L'appartement est au troisième étage.",
    "pt": "O apartamento é no terceiro andar."
   },
   {
    "fr": "Il n'y a pas d'ascenseur, désolé.",
    "pt": "Não há elevador, desculpe."
   },
   {
    "fr": "Ce n'est pas grave, on a peu de bagages.",
    "pt": "Não faz mal, temos pouca bagagem."
   },
   {
    "fr": "La fenêtre donne sur le Douro.",
    "pt": "A janela dá para o Douro."
   },
   {
    "fr": "Voici le code de la porte d'entrée.",
    "pt": "Aqui está o código da porta da rua."
   },
   {
    "fr": "Le petit-déjeuner n'est pas compris.",
    "pt": "O pequeno-almoço não está incluído."
   },
   {
    "fr": "Il y a une bonne pâtisserie juste en bas.",
    "pt": "Há uma boa pastelaria mesmo aqui em baixo."
   }
  ]
 },
 {
  "title": "Une valise perdue",
  "phrases": [
   {
    "fr": "Je ne trouve pas ma valise grise.",
    "pt": "Não encontro a minha mala cinzenta."
   },
   {
    "fr": "Tous les autres passagers sont déjà partis.",
    "pt": "Os outros passageiros já saíram todos."
   },
   {
    "fr": "Je vais demander au guichet des bagages.",
    "pt": "Vou perguntar no balcão das bagagens."
   },
   {
    "fr": "Votre valise est restée à Paris.",
    "pt": "A sua mala ficou em Paris."
   },
   {
    "fr": "Elle va arriver ce soir par le dernier vol.",
    "pt": "Vai chegar hoje à noite no último voo."
   },
   {
    "fr": "Nous allons la livrer à votre hôtel.",
    "pt": "Vamos entregá-la no seu hotel."
   },
   {
    "fr": "Je vais remplir ce formulaire tout de suite.",
    "pt": "Vou preencher já este formulário."
   },
   {
    "fr": "Vous allez recevoir un message sur votre portable.",
    "pt": "Vai receber uma mensagem no telemóvel."
   },
   {
    "fr": "En attendant, je vais acheter une brosse à dents.",
    "pt": "Entretanto, vou comprar uma escova de dentes."
   },
   {
    "fr": "Merci, j'espère la revoir demain.",
    "pt": "Obrigado, espero vê-la amanhã."
   }
  ],
  "tip": {
   "title": "« Vou + infinitif » : le futur proche",
   "example": "Je vais demander au guichet des bagages. — <b>Vou perguntar</b> no balcão das bagagens.",
   "body": "Comme en français avec « aller + infinitif », le portugais forme le futur proche avec le verbe « ir » au présent suivi de l'infinitif. On conjugue : vou, vais, vai, vamos, vão. À l'oral, c'est la façon la plus naturelle de parler du futur : « Vou apanhar o comboio », « Vais gostar do Porto », « Vamos jantar na Ribeira »."
  }
 },
 {
  "title": "Sur le pont Dom Luís",
  "phrases": [
   {
    "fr": "On traverse le pont Dom Luís à pied ?",
    "pt": "Atravessamos a ponte Dom Luís a pé?"
   },
   {
    "fr": "Le pont a deux niveaux.",
    "pt": "A ponte tem dois tabuleiros."
   },
   {
    "fr": "En haut, c'est le métro qui passe.",
    "pt": "Em cima passa o metro."
   },
   {
    "fr": "En bas, ce sont les voitures.",
    "pt": "Em baixo passam os carros."
   },
   {
    "fr": "On monte jusqu'en haut à pied.",
    "pt": "Vamos subir até lá acima a pé."
   },
   {
    "fr": "Il y a beaucoup de vent ici.",
    "pt": "Está muito vento aqui."
   },
   {
    "fr": "La vue sur la Ribeira est magnifique.",
    "pt": "A vista sobre a Ribeira é magnífica."
   },
   {
    "fr": "Des jeunes sautent du pont dans le fleuve !",
    "pt": "Há miúdos a saltar da ponte para o rio!"
   },
   {
    "fr": "C'est dangereux, mais c'est une tradition.",
    "pt": "É perigoso, mas é uma tradição."
   },
   {
    "fr": "De l'autre côté, c'est Vila Nova de Gaia.",
    "pt": "Do outro lado é Vila Nova de Gaia."
   }
  ]
 },
 {
  "title": "Les caves de Vila Nova de Gaia",
  "phrases": [
   {
    "fr": "On va visiter une cave de porto.",
    "pt": "Vamos visitar uma cave de vinho do Porto."
   },
   {
    "fr": "La visite guidée commence à trois heures de l'après-midi.",
    "pt": "A visita guiada começa às três da tarde."
   },
   {
    "fr": "Il y a une visite en français ?",
    "pt": "Há alguma visita em francês?"
   },
   {
    "fr": "Oui, la prochaine est à quatre heures.",
    "pt": "Sim, a próxima é às quatro."
   },
   {
    "fr": "Les tonneaux sont énormes.",
    "pt": "As pipas são enormes."
   },
   {
    "fr": "Le vin vieillit ici pendant des années.",
    "pt": "O vinho envelhece aqui durante anos."
   },
   {
    "fr": "La dégustation est comprise dans le prix.",
    "pt": "A prova está incluída no preço."
   },
   {
    "fr": "Je préfère le porto blanc.",
    "pt": "Prefiro o Porto branco."
   },
   {
    "fr": "Moi, j'aime surtout le tawny.",
    "pt": "Eu gosto mais do tawny."
   },
   {
    "fr": "On achète une bouteille pour la famille ?",
    "pt": "Compramos uma garrafa para a família?"
   }
  ]
 },
 {
  "title": "Payer ses souvenirs dans la Ribeira",
  "phrases": [
   {
    "fr": "Combien coûte ce petit coq en céramique ?",
    "pt": "Quanto custa este galo de cerâmica?"
   },
   {
    "fr": "Il coûte douze euros.",
    "pt": "Custa doze euros."
   },
   {
    "fr": "Et ces deux cartes postales ?",
    "pt": "E estes dois postais?"
   },
   {
    "fr": "Un euro cinquante chacune.",
    "pt": "Um euro e cinquenta cada um."
   },
   {
    "fr": "Je vous dois combien au total ?",
    "pt": "Quanto lhe devo no total?"
   },
   {
    "fr": "Ça fait quinze euros, s'il vous plaît.",
    "pt": "São quinze euros, por favor."
   },
   {
    "fr": "Je peux payer avec un billet de vingt ?",
    "pt": "Posso pagar com uma nota de vinte?"
   },
   {
    "fr": "Bien sûr, voici votre monnaie.",
    "pt": "Claro, aqui tem o troco."
   },
   {
    "fr": "Il me reste encore cinq euros.",
    "pt": "Ainda me sobram cinco euros."
   },
   {
    "fr": "Assez pour un café et une pâtisserie !",
    "pt": "Chega para um cimbalino e um bolo!"
   }
  ],
  "tip": {
   "title": "« Quanto custa? » et les nombres",
   "example": "Combien coûte ce petit coq en céramique ? — <b>Quanto custa</b> este galo de cerâmica?",
   "body": "Pour demander un prix, on dit « Quanto custa? » pour un objet et « Quanto é? » pour le total. Attention : « um » et « dois » ont une forme féminine, « uma » et « duas » (dois postais, duas bicas). Les centimes se disent avec « e » : « três euros e cinquenta », « um euro e vinte »."
  }
 },
 {
  "title": "À l'office de tourisme de Porto",
  "phrases": [
   {
    "fr": "Bonjour, vous avez un plan de Porto ?",
    "pt": "Bom dia, tem um mapa do Porto?"
   },
   {
    "fr": "Bien sûr, il est gratuit.",
    "pt": "Claro, é gratuito."
   },
   {
    "fr": "Qu'est-ce qu'on peut visiter en deux jours ?",
    "pt": "O que é que podemos visitar em dois dias?"
   },
   {
    "fr": "Commencez par la Ribeira et la cathédrale.",
    "pt": "Comece pela Ribeira e pela Sé."
   },
   {
    "fr": "En fin d'après-midi, allez voir le coucher de soleil à Gaia.",
    "pt": "Ao fim da tarde, vá ver o pôr do sol em Gaia."
   },
   {
    "fr": "Et pour aller à Guimarães ?",
    "pt": "E para ir a Guimarães?"
   },
   {
    "fr": "Le train part de São Bento toutes les heures.",
    "pt": "O comboio sai de São Bento de hora a hora."
   },
   {
    "fr": "Vous avez des brochures en français ?",
    "pt": "Tem folhetos em francês?"
   },
   {
    "fr": "Oui, ici, sur cette table.",
    "pt": "Sim, aqui, nesta mesa."
   },
   {
    "fr": "Merci, vous m'avez beaucoup aidé.",
    "pt": "Obrigado, ajudou-me muito."
   }
  ]
 },
 {
  "title": "À la pharmacie",
  "phrases": [
   {
    "fr": "J'ai pris un coup de soleil à la plage de Viana.",
    "pt": "Apanhei um escaldão na praia de Viana."
   },
   {
    "fr": "Vous avez une crème pour les brûlures ?",
    "pt": "Tem algum creme para queimaduras?"
   },
   {
    "fr": "Oui, celle-ci est très efficace.",
    "pt": "Sim, este é muito eficaz."
   },
   {
    "fr": "Mettez-la trois fois par jour.",
    "pt": "Ponha três vezes por dia."
   },
   {
    "fr": "J'ai aussi un peu mal à la tête.",
    "pt": "Também me dói um bocadinho a cabeça."
   },
   {
    "fr": "Prenez ces comprimés après le repas.",
    "pt": "Tome estes comprimidos depois da refeição."
   },
   {
    "fr": "Il faut une ordonnance ?",
    "pt": "É preciso receita?"
   },
   {
    "fr": "Non, ils sont en vente libre.",
    "pt": "Não, são de venda livre."
   },
   {
    "fr": "Et surtout, buvez beaucoup d'eau.",
    "pt": "E sobretudo, beba muita água."
   },
   {
    "fr": "Évitez le soleil pendant deux jours.",
    "pt": "Evite o sol durante dois dias."
   }
  ]
 },
 {
  "title": "Une croisière sur le Douro",
  "phrases": [
   {
    "fr": "La croisière des six ponts part à onze heures.",
    "pt": "O cruzeiro das seis pontes parte às onze."
   },
   {
    "fr": "On monte à bord du rabelo ?",
    "pt": "Embarcamos no rabelo?"
   },
   {
    "fr": "Le rabelo est un bateau traditionnel.",
    "pt": "O rabelo é um barco tradicional."
   },
   {
    "fr": "Autrefois, il transportait le vin.",
    "pt": "Antigamente transportava o vinho."
   },
   {
    "fr": "On passe sous tous les ponts de Porto.",
    "pt": "Passamos debaixo de todas as pontes do Porto."
   },
   {
    "fr": "Le guide parle en portugais et en français.",
    "pt": "O guia fala em português e em francês."
   },
   {
    "fr": "Mets ta casquette, il fait chaud.",
    "pt": "Põe o teu boné, está calor."
   },
   {
    "fr": "Regarde les maisons colorées de la Ribeira.",
    "pt": "Olha para as casas coloridas da Ribeira."
   },
   {
    "fr": "La croisière dure cinquante minutes.",
    "pt": "O cruzeiro dura cinquenta minutos."
   },
   {
    "fr": "Un jour, on va remonter toute la vallée du Douro.",
    "pt": "Um dia, vamos subir o vale do Douro todo."
   }
  ]
 },
 {
  "title": "Louer une voiture",
  "phrases": [
   {
    "fr": "J'ai réservé une petite voiture pour trois jours.",
    "pt": "Reservei um carro pequeno para três dias."
   },
   {
    "fr": "Votre permis de conduire, s'il vous plaît.",
    "pt": "A sua carta de condução, por favor."
   },
   {
    "fr": "L'assurance complète coûte dix euros par jour.",
    "pt": "O seguro completo custa dez euros por dia."
   },
   {
    "fr": "Le réservoir est plein au départ.",
    "pt": "O depósito está cheio à partida."
   },
   {
    "fr": "Il faut aussi le rendre plein.",
    "pt": "Também tem de o devolver cheio."
   },
   {
    "fr": "Les autoroutes ont des péages électroniques.",
    "pt": "As autoestradas têm portagens eletrónicas."
   },
   {
    "fr": "La voiture a déjà le badge Via Verde.",
    "pt": "O carro já tem Via Verde."
   },
   {
    "fr": "Je vais à Viana do Castelo par la côte.",
    "pt": "Vou a Viana do Castelo pela costa."
   },
   {
    "fr": "Attention, ici on roule vite.",
    "pt": "Cuidado, aqui conduz-se depressa."
   },
   {
    "fr": "Bonne route et bon séjour !",
    "pt": "Boa viagem e boa estadia!"
   }
  ]
 },
 {
  "title": "Un comboio en retard",
  "phrases": [
   {
    "fr": "Le train pour Braga a du retard.",
    "pt": "O comboio para Braga está atrasado."
   },
   {
    "fr": "Combien de minutes de retard ?",
    "pt": "Quantos minutos de atraso?"
   },
   {
    "fr": "Environ vingt-cinq minutes, d'après l'écran.",
    "pt": "Cerca de vinte e cinco minutos, segundo o ecrã."
   },
   {
    "fr": "On sait pourquoi ?",
    "pt": "Sabe-se porquê?"
   },
   {
    "fr": "Il y a un problème sur la ligne.",
    "pt": "Há um problema na linha."
   },
   {
    "fr": "On va manquer le début de la visite.",
    "pt": "Vamos perder o início da visita."
   },
   {
    "fr": "Je vais prévenir le guide par téléphone.",
    "pt": "Vou avisar o guia por telefone."
   },
   {
    "fr": "On boit un café en attendant ?",
    "pt": "Bebemos um café enquanto esperamos?"
   },
   {
    "fr": "Il y a une machine sur le quai.",
    "pt": "Há uma máquina na plataforma."
   },
   {
    "fr": "Ah, le train arrive enfin !",
    "pt": "Ah, o comboio está finalmente a chegar!"
   }
  ]
 },
 {
  "title": "En train régional jusqu'à Braga",
  "phrases": [
   {
    "fr": "Aujourd'hui, on va à Braga en train.",
    "pt": "Hoje vamos a Braga de comboio."
   },
   {
    "fr": "On part de Porto à neuf heures.",
    "pt": "Saímos do Porto às nove."
   },
   {
    "fr": "Ma sœur habite à Braga depuis un an.",
    "pt": "A minha irmã vive em Braga há um ano."
   },
   {
    "fr": "Elle est née à Guimarães.",
    "pt": "Ela nasceu em Guimarães."
   },
   {
    "fr": "On arrive à Braga vers dix heures.",
    "pt": "Chegamos a Braga por volta das dez."
   },
   {
    "fr": "À Braga, on monte au Bom Jesus.",
    "pt": "Em Braga, subimos ao Bom Jesus."
   },
   {
    "fr": "L'escalier du sanctuaire est très célèbre.",
    "pt": "A escadaria do santuário é muito famosa."
   },
   {
    "fr": "On peut aussi prendre le funiculaire.",
    "pt": "Também podemos apanhar o funicular."
   },
   {
    "fr": "Ce soir, on rentre à Porto.",
    "pt": "Hoje à noite voltamos para o Porto."
   },
   {
    "fr": "Demain, on part pour Viana do Castelo.",
    "pt": "Amanhã partimos para Viana do Castelo."
   }
  ],
  "tip": {
   "title": "« Em », « para », « a », « de » avec les villes",
   "example": "Ma sœur habite à Braga depuis un an. — A minha irmã vive <b>em</b> Braga há um ano.",
   "body": "Là où le français dit toujours « à », le portugais distingue : « em » pour l'endroit où l'on est (estou em Braga), « a » pour une destination de courte durée (vou a Guimarães), « para » pour une destination où l'on reste ou rentre (volto para casa), et « de » pour la provenance (sou de Lyon). Porto prend l'article : « no Porto », « ao Porto », « para o Porto », « do Porto »."
  }
 },
 {
  "title": "Une rencontre au Bom Jesus",
  "phrases": [
   {
    "fr": "Excusez-moi, vous pouvez nous prendre en photo ?",
    "pt": "Desculpe, pode tirar-nos uma fotografia?"
   },
   {
    "fr": "Avec plaisir ! Vous venez d'où ?",
    "pt": "Com todo o gosto! De onde são?"
   },
   {
    "fr": "On est français, de Lyon.",
    "pt": "Somos franceses, de Lyon."
   },
   {
    "fr": "Moi, je suis d'ici, de Braga.",
    "pt": "Eu sou daqui, de Braga."
   },
   {
    "fr": "Vous parlez bien portugais !",
    "pt": "Falam bem português!"
   },
   {
    "fr": "Merci, on apprend depuis quelques mois.",
    "pt": "Obrigado, estamos a aprender há uns meses."
   },
   {
    "fr": "Vous êtes montés par l'escalier ?",
    "pt": "Subiram pela escadaria?"
   },
   {
    "fr": "Oui, et on est très fatigués !",
    "pt": "Sim, e estamos muito cansados!"
   },
   {
    "fr": "Tu veux prendre un café avec nous ?",
    "pt": "Queres tomar um café connosco?"
   },
   {
    "fr": "Bonne idée, je connais un bon café juste à côté.",
    "pt": "Boa ideia, conheço um bom café aqui perto."
   }
  ]
 },
 {
  "title": "Le château de Guimarães",
  "phrases": [
   {
    "fr": "Guimarães est le berceau du Portugal.",
    "pt": "Guimarães é o berço de Portugal."
   },
   {
    "fr": "Le premier roi est né ici.",
    "pt": "O primeiro rei nasceu aqui."
   },
   {
    "fr": "Le château est sur une petite colline.",
    "pt": "O castelo fica numa pequena colina."
   },
   {
    "fr": "On peut marcher sur les remparts.",
    "pt": "Podemos andar nas muralhas."
   },
   {
    "fr": "Fais attention aux marches, elles sont hautes.",
    "pt": "Tem cuidado com os degraus, são altos."
   },
   {
    "fr": "Le centre historique est très bien conservé.",
    "pt": "O centro histórico está muito bem conservado."
   },
   {
    "fr": "Sur ce mur, on peut lire « Aqui nasceu Portugal ».",
    "pt": "Neste muro, lê-se «Aqui nasceu Portugal»."
   },
   {
    "fr": "On déjeune sur la place de l'Oliveira ?",
    "pt": "Almoçamos no Largo da Oliveira?"
   },
   {
    "fr": "Les terrasses sont pleines de monde.",
    "pt": "As esplanadas estão cheias de gente."
   },
   {
    "fr": "Guimarães est petite mais charmante.",
    "pt": "Guimarães é pequena, mas encantadora."
   }
  ]
 },
 {
  "title": "Les spécialités du Nord",
  "phrases": [
   {
    "fr": "Qu'est-ce qu'on mange à Porto ?",
    "pt": "O que é que se come no Porto?"
   },
   {
    "fr": "Il faut goûter la francesinha.",
    "pt": "Tem de provar a francesinha."
   },
   {
    "fr": "C'est un sandwich avec de la viande et du fromage.",
    "pt": "É uma sandes com carne e queijo."
   },
   {
    "fr": "Et il est couvert d'une sauce piquante.",
    "pt": "E vem coberta com um molho picante."
   },
   {
    "fr": "C'est très lourd pour le déjeuner !",
    "pt": "É muito pesado para o almoço!"
   },
   {
    "fr": "Les habitants de Porto s'appellent les tripeiros.",
    "pt": "Os habitantes do Porto chamam-se tripeiros."
   },
   {
    "fr": "C'est à cause des tripas à moda do Porto.",
    "pt": "É por causa das tripas à moda do Porto."
   },
   {
    "fr": "Moi, je vais prendre un caldo verde.",
    "pt": "Eu vou pedir um caldo verde."
   },
   {
    "fr": "C'est une soupe au chou et au chorizo.",
    "pt": "É uma sopa de couve com chouriço."
   },
   {
    "fr": "Pour finir, un petit verre de porto ?",
    "pt": "Para terminar, um cálice de Porto?"
   }
  ]
 },
 {
  "title": "Une randonnée à Ponte de Lima",
  "phrases": [
   {
    "fr": "Ponte de Lima est l'une des plus vieilles villes du Portugal.",
    "pt": "Ponte de Lima é uma das vilas mais antigas de Portugal."
   },
   {
    "fr": "On va marcher le long du fleuve Lima.",
    "pt": "Vamos caminhar ao longo do rio Lima."
   },
   {
    "fr": "Le sentier passe par le vieux pont romain.",
    "pt": "O trilho passa pela velha ponte romana."
   },
   {
    "fr": "Tu as apporté de l'eau et des sandwichs ?",
    "pt": "Trouxeste água e sandes?"
   },
   {
    "fr": "Oui, et aussi des fruits.",
    "pt": "Sim, e também fruta."
   },
   {
    "fr": "La randonnée fait douze kilomètres.",
    "pt": "O percurso tem doze quilómetros."
   },
   {
    "fr": "On s'arrête dans ce village pour manger ?",
    "pt": "Paramos nesta aldeia para comer?"
   },
   {
    "fr": "J'ai déjà mal aux pieds.",
    "pt": "Já me doem os pés."
   },
   {
    "fr": "Courage, il ne reste que trois kilomètres.",
    "pt": "Coragem, só faltam três quilómetros."
   },
   {
    "fr": "Ce soir, on va dormir comme des loirs.",
    "pt": "Hoje à noite vamos dormir como pedras."
   }
  ]
 },
 {
  "title": "Un vol annulé",
  "phrases": [
   {
    "fr": "Notre vol pour Paris est annulé.",
    "pt": "O nosso voo para Paris foi cancelado."
   },
   {
    "fr": "Tous les avions sont bloqués à cause du brouillard.",
    "pt": "Os aviões estão todos parados por causa do nevoeiro."
   },
   {
    "fr": "Regarde les panneaux d'affichage.",
    "pt": "Olha para os painéis."
   },
   {
    "fr": "Il y a des informations au comptoir.",
    "pt": "Há informações no balcão."
   },
   {
    "fr": "Les employés sont très gentils.",
    "pt": "Os funcionários são muito simpáticos."
   },
   {
    "fr": "Ils nous donnent des bons pour le dîner.",
    "pt": "Dão-nos vales para o jantar."
   },
   {
    "fr": "Il y a aussi deux hôtels près de l'aéroport.",
    "pt": "Também há dois hotéis perto do aeroporto."
   },
   {
    "fr": "On part demain matin à sept heures.",
    "pt": "Partimos amanhã de manhã às sete."
   },
   {
    "fr": "Au moins, on reste un jour de plus à Porto !",
    "pt": "Pelo menos ficamos mais um dia no Porto!"
   },
   {
    "fr": "On va manger une dernière francesinha.",
    "pt": "Vamos comer uma última francesinha."
   }
  ],
  "tip": {
   "title": "Les pluriels en « -ões », « -ães » et « -ais / -éis »",
   "example": "Tous les avions sont bloqués à cause du brouillard. — Os <b>aviões</b> estão todos parados por causa do nevoeiro.",
   "body": "Les mots en « -ão » ont trois pluriels possibles, à apprendre au cas par cas : le plus fréquent est « -ões » (avião → aviões, informação → informações), puis « -ães » (pão → pães, cão → cães) et « -ãos » (mão → mãos). Les mots en « -al » font « -ais » (jornal → jornais) et ceux en « -el » font « -éis » (hotel → hotéis, painel → painéis). En français, on ajoute simplement un « s » à l'écrit, mais en portugais le pluriel s'entend."
  }
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a fait découvrir le Nord du Portugal.",
    "pt": "Este módulo deu-nos a conhecer o Norte de Portugal."
   },
   {
    "fr": "On a pris l'avion, le train et le bateau.",
    "pt": "Andámos de avião, de comboio e de barco."
   },
   {
    "fr": "On sait maintenant acheter un billet en portugais.",
    "pt": "Agora já sabemos comprar um bilhete em português."
   },
   {
    "fr": "On sait aussi demander un prix.",
    "pt": "Também sabemos perguntar um preço."
   },
   {
    "fr": "Les petits problèmes de voyage ne nous font plus peur.",
    "pt": "Os pequenos problemas de viagem já não nos assustam."
   },
   {
    "fr": "Porto, Braga et Guimarães n'ont plus de secrets pour nous.",
    "pt": "O Porto, Braga e Guimarães já não têm segredos para nós."
   },
   {
    "fr": "Le prochain module sera consacré aux conversations entre amis.",
    "pt": "O próximo módulo vai ser sobre conversas entre amigos."
   },
   {
    "fr": "Ton portugais devient de plus en plus naturel.",
    "pt": "O teu português está cada vez mais natural."
   },
   {
    "fr": "Bravo pour tout ce travail !",
    "pt": "Parabéns por todo este trabalho!"
   },
   {
    "fr": "À bientôt, et bonne continuation !",
    "pt": "Até breve, e boa continuação!"
   }
  ]
 }
];

const level1Module3Lessons = [
 {
  "title": "Se présenter à Coimbra",
  "phrases": [
   {
    "fr": "Salut, tu t'appelles comment ?",
    "pt": "Olá, como te chamas?"
   },
   {
    "fr": "Moi, c'est Inês, et toi ?",
    "pt": "Chamo-me Inês, e tu?"
   },
   {
    "fr": "Moi, je suis Rui, ravi de te connaître.",
    "pt": "Eu sou o Rui, muito prazer."
   },
   {
    "fr": "Tu es étudiant ici, à Coimbra ?",
    "pt": "És estudante aqui em Coimbra?"
   },
   {
    "fr": "Oui, j'étudie le droit à l'université.",
    "pt": "Sim, estudo Direito na universidade."
   },
   {
    "fr": "C'est pour ça que tu portes la cape noire ?",
    "pt": "É por isso que usas a capa preta?"
   },
   {
    "fr": "Exactement, c'est la tradition des étudiants.",
    "pt": "Exatamente, é a tradição académica."
   },
   {
    "fr": "Et toi, tu es d'où ?",
    "pt": "E tu, de onde és?"
   },
   {
    "fr": "Je suis d'Aveiro, mais j'habite ici maintenant.",
    "pt": "Sou de Aveiro, mas agora moro cá."
   },
   {
    "fr": "Super, on est presque voisins.",
    "pt": "Que bom, somos quase vizinhos."
   }
  ]
 },
 {
  "title": "Parler de sa famille",
  "phrases": [
   {
    "fr": "Tu as des frères ou des sœurs, toi ?",
    "pt": "Tens irmãos?"
   },
   {
    "fr": "J'ai un grand frère et une sœur.",
    "pt": "Tenho um irmão mais velho e uma irmã."
   },
   {
    "fr": "Ma sœur fait ses études à Coimbra.",
    "pt": "A minha irmã estuda em Coimbra."
   },
   {
    "fr": "Et ton frère, il fait quoi ?",
    "pt": "E o teu irmão, o que faz?"
   },
   {
    "fr": "Il est pêcheur à Figueira da Foz.",
    "pt": "É pescador na Figueira da Foz."
   },
   {
    "fr": "Mes parents vivent à Aveiro.",
    "pt": "Os meus pais vivem em Aveiro."
   },
   {
    "fr": "Tu vois souvent ta famille ?",
    "pt": "Vês muitas vezes a tua família?"
   },
   {
    "fr": "Le dimanche, on déjeune tous ensemble.",
    "pt": "Ao domingo, almoçamos todos juntos."
   },
   {
    "fr": "Ma grand-mère prépare un cochon de lait délicieux.",
    "pt": "A minha avó faz um leitão delicioso."
   },
   {
    "fr": "Ta famille a l'air très unie.",
    "pt": "A tua família parece muito unida."
   }
  ],
  "tip": {
   "title": "« O meu, a minha » : les possessifs avec article",
   "example": "Ma sœur fait ses études à Coimbra. — <b>A minha</b> irmã estuda em Coimbra.",
   "body": "Au Portugal, le possessif est presque toujours précédé de l'article défini : on dit littéralement « la ma sœur ». Le possessif s'accorde avec l'objet possédé, comme en français : o meu irmão, a minha casa, os teus pais, as tuas amigas. Retenir le réflexe : article + possessif + nom."
  }
 },
 {
  "title": "Décrire son métier",
  "phrases": [
   {
    "fr": "Tu fais quoi comme métier, toi ?",
    "pt": "O que fazes na vida?"
   },
   {
    "fr": "Je suis infirmière à l'hôpital de Coimbra.",
    "pt": "Sou enfermeira no hospital de Coimbra."
   },
   {
    "fr": "Ton travail te plaît ?",
    "pt": "Gostas do teu trabalho?"
   },
   {
    "fr": "Beaucoup, mais c'est fatigant.",
    "pt": "Gosto muito, mas é cansativo."
   },
   {
    "fr": "Et toi, tu travailles dans quoi ?",
    "pt": "E tu, trabalhas em quê?"
   },
   {
    "fr": "Je suis prof dans une école à Aveiro.",
    "pt": "Sou professor numa escola em Aveiro."
   },
   {
    "fr": "Tes élèves sont sympas ?",
    "pt": "Os teus alunos são simpáticos?"
   },
   {
    "fr": "Pour la plupart, oui, ils sont très curieux.",
    "pt": "A maioria sim, são muito curiosos."
   },
   {
    "fr": "Tu travailles aussi le week-end ?",
    "pt": "Também trabalhas ao fim de semana?"
   },
   {
    "fr": "Non, heureusement, j'ai mon week-end libre.",
    "pt": "Não, felizmente tenho o fim de semana livre."
   }
  ]
 },
 {
  "title": "Parler de ses loisirs",
  "phrases": [
   {
    "fr": "Tu fais quoi de ton temps libre ?",
    "pt": "O que fazes nos tempos livres?"
   },
   {
    "fr": "J'aime faire du vélo le long de la lagune.",
    "pt": "Gosto de andar de bicicleta junto à ria."
   },
   {
    "fr": "Moi, je préfère lire et aller au cinéma.",
    "pt": "Eu prefiro ler e ir ao cinema."
   },
   {
    "fr": "Tu fais un peu de sport ?",
    "pt": "Fazes algum desporto?"
   },
   {
    "fr": "Je fais du surf à Figueira da Foz.",
    "pt": "Faço surf na Figueira da Foz."
   },
   {
    "fr": "Sérieux ? Les vagues là-bas sont géniales.",
    "pt": "A sério? As ondas lá são ótimas."
   },
   {
    "fr": "J'y vais presque tous les samedis.",
    "pt": "Vou lá quase todos os sábados."
   },
   {
    "fr": "Un jour, je vais essayer avec toi.",
    "pt": "Um dia vou experimentar contigo."
   },
   {
    "fr": "Marché conclu, je te prête une planche.",
    "pt": "Combinado, eu empresto-te uma prancha."
   },
   {
    "fr": "Comme c'est gentil, merci !",
    "pt": "Que simpático, obrigada!"
   }
  ]
 },
 {
  "title": "Inviter à dîner dans la Bairrada",
  "phrases": [
   {
    "fr": "Tu as des projets pour samedi soir ?",
    "pt": "Tens planos para sábado à noite?"
   },
   {
    "fr": "Pas encore, pourquoi ?",
    "pt": "Ainda não, porquê?"
   },
   {
    "fr": "Je veux t'inviter à dîner dans la Bairrada.",
    "pt": "Quero convidar-te para jantar na Bairrada."
   },
   {
    "fr": "Tu aimes le cochon de lait ?",
    "pt": "Gostas de leitão?"
   },
   {
    "fr": "J'adore, surtout avec un vin pétillant.",
    "pt": "Adoro, sobretudo com espumante."
   },
   {
    "fr": "D'abord, on va prendre quelques petites entrées.",
    "pt": "Primeiro, vamos comer uns petiscos."
   },
   {
    "fr": "Je passe te chercher à sept heures et demie.",
    "pt": "Passo a buscar-te às sete e meia."
   },
   {
    "fr": "Tu veux que j'apporte quelque chose ?",
    "pt": "Queres que leve alguma coisa?"
   },
   {
    "fr": "Pas besoin, viens juste avec de l'appétit.",
    "pt": "Não é preciso, só tens de vir com fome."
   },
   {
    "fr": "Bon, alors à samedi !",
    "pt": "Então, até sábado!"
   }
  ],
  "tip": {
   "title": "« Gostar de » : aimer quelque chose",
   "example": "Tu aimes le cochon de lait ? — <b>Gostas de</b> leitão?",
   "body": "En portugais, « aimer quelque chose » se dit gostar de : la préposition de est obligatoire, et elle se contracte avec l'article (de + o = do, de + a = da). Gosto de fado, gostas do Porto?, gosto muito da praia. Devant un verbe, on garde de + infinitif : gosto de nadar."
  }
 },
 {
  "title": "Faire connaissance à une fête",
  "phrases": [
   {
    "fr": "Tu connais quelqu'un à cette fête ?",
    "pt": "Conheces alguém nesta festa?"
   },
   {
    "fr": "Seulement Marta, c'est elle qui reçoit.",
    "pt": "Só a Marta, a dona da casa."
   },
   {
    "fr": "Moi, je suis dans sa classe à la fac.",
    "pt": "Eu sou colega dela na faculdade."
   },
   {
    "fr": "La musique est vraiment bonne, non ?",
    "pt": "A música está muito boa, não está?"
   },
   {
    "fr": "Oui, et la maison a une vue superbe.",
    "pt": "Sim, e a casa tem uma vista linda."
   },
   {
    "fr": "Je peux te servir un verre ?",
    "pt": "Posso servir-te uma bebida?"
   },
   {
    "fr": "Un jus d'orange, s'il te plaît.",
    "pt": "Um sumo de laranja, por favor."
   },
   {
    "fr": "On va danser un peu ?",
    "pt": "Vamos dançar um bocado?"
   },
   {
    "fr": "Pas maintenant, je suis en train de manger.",
    "pt": "Agora não, estou a comer."
   },
   {
    "fr": "Je danse avec toi après, promis.",
    "pt": "Depois danço contigo, prometo."
   }
  ]
 },
 {
  "title": "Parler de la météo",
  "phrases": [
   {
    "fr": "Il fait vraiment chaud aujourd'hui !",
    "pt": "Hoje está mesmo muito calor!"
   },
   {
    "fr": "C'est vrai, on va à la plage de Costa Nova ?",
    "pt": "Pois é, vamos à praia da Costa Nova?"
   },
   {
    "fr": "Bonne idée, mais il y a toujours du vent là-bas.",
    "pt": "Boa ideia, mas lá há sempre vento."
   },
   {
    "fr": "Prends une veste, le soir il fait frais.",
    "pt": "Leva um casaco, à noite fica fresco."
   },
   {
    "fr": "Demain, il va pleuvoir, d'après la télé.",
    "pt": "Amanhã vai chover, segundo a televisão."
   },
   {
    "fr": "Dommage, je voulais aller à Figueira.",
    "pt": "Que pena, queria ir à Figueira."
   },
   {
    "fr": "Tu es plutôt été ou hiver, toi ?",
    "pt": "És mais de verão ou de inverno?"
   },
   {
    "fr": "Je suis plutôt été, j'adore le soleil.",
    "pt": "Sou de verão, adoro o sol."
   },
   {
    "fr": "Moi, j'aime l'automne à Coimbra.",
    "pt": "Eu gosto do outono em Coimbra."
   },
   {
    "fr": "Les après-midi de septembre y sont parfaits.",
    "pt": "As tardes de setembro lá são perfeitas."
   }
  ]
 },
 {
  "title": "Parler de télévision",
  "phrases": [
   {
    "fr": "Qu'est-ce que tu es en train de regarder ?",
    "pt": "O que estás a ver?"
   },
   {
    "fr": "Une très bonne série portugaise.",
    "pt": "Uma série portuguesa muito boa."
   },
   {
    "fr": "Elle s'appelle comment ?",
    "pt": "Como se chama?"
   },
   {
    "fr": "C'est quoi, ton émission préférée ?",
    "pt": "Qual é o teu programa preferido?"
   },
   {
    "fr": "J'aime les concours de cuisine.",
    "pt": "Gosto dos concursos de culinária."
   },
   {
    "fr": "Il passe quand, le prochain épisode ?",
    "pt": "Quando dá o próximo episódio?"
   },
   {
    "fr": "Ce soir, à neuf heures.",
    "pt": "Hoje à noite, às nove horas."
   },
   {
    "fr": "Tu regardes les séries où, à la télé ?",
    "pt": "Onde vês as séries, na televisão?"
   },
   {
    "fr": "Non, je regarde tout sur l'ordinateur.",
    "pt": "Não, vejo tudo no computador."
   },
   {
    "fr": "On regarde le prochain épisode ensemble ?",
    "pt": "Vemos juntos o próximo episódio?"
   }
  ],
  "tip": {
   "title": "Les mots interrogatifs « O que, Qual, Como, Onde, Quando »",
   "example": "C'est quoi, ton émission préférée ? — <b>Qual</b> é o teu programa preferido?",
   "body": "O que = « qu'est-ce que » (O que fazes?), como = « comment » (Como te chamas?), onde = « où » (Onde moras?), quando = « quand » (Quando chegas?). Qual = « quel / lequel » s'emploie devant le verbe ser pour choisir parmi plusieurs options : Qual é o teu prato preferido? Attention : après un mot interrogatif, le pronom passe devant le verbe : Como te chamas?"
  }
 },
 {
  "title": "Parler de ses vacances",
  "phrases": [
   {
    "fr": "Tu sais déjà où tu pars en vacances ?",
    "pt": "Já sabes para onde vais de férias?"
   },
   {
    "fr": "Je vais passer le mois d'août à Costa Nova.",
    "pt": "Vou passar o mês de agosto na Costa Nova."
   },
   {
    "fr": "Trop bien ! Les maisons à rayures sont magnifiques.",
    "pt": "Que giro! As casas às riscas são lindas."
   },
   {
    "fr": "Ma tante a une maison là-bas.",
    "pt": "A minha tia tem lá uma casa."
   },
   {
    "fr": "Tu y vas avec qui ?",
    "pt": "Vais com quem?"
   },
   {
    "fr": "Avec mes cousins et mon chien.",
    "pt": "Com os meus primos e o meu cão."
   },
   {
    "fr": "Et toi, tu vas rester à Coimbra ?",
    "pt": "E tu, vais ficar em Coimbra?"
   },
   {
    "fr": "Non, je vais visiter la Bairrada avec des amis.",
    "pt": "Não, vou visitar a Bairrada com amigos."
   },
   {
    "fr": "On va faire la route des vins.",
    "pt": "Vamos fazer a rota dos vinhos."
   },
   {
    "fr": "Envoie-moi des photos, d'accord ?",
    "pt": "Manda-me fotografias, está bem?"
   }
  ]
 },
 {
  "title": "Un coup de fil à un ami",
  "phrases": [
   {
    "fr": "Salut Miguel, ça va ?",
    "pt": "Olá, Miguel, tudo bem?"
   },
   {
    "fr": "Très bien, et toi ?",
    "pt": "Tudo ótimo, e contigo?"
   },
   {
    "fr": "On ne s'est pas parlé depuis une éternité !",
    "pt": "Há imenso tempo que não falamos!"
   },
   {
    "fr": "C'est vrai, j'ai beaucoup de travail en ce moment.",
    "pt": "Pois é, ando com muito trabalho."
   },
   {
    "fr": "Tu viens à Coimbra ce week-end ?",
    "pt": "Vens a Coimbra este fim de semana?"
   },
   {
    "fr": "Peut-être que je passe samedi.",
    "pt": "Se calhar apareço no sábado."
   },
   {
    "fr": "Super, on peut dîner ensemble.",
    "pt": "Ótimo, podemos jantar juntos."
   },
   {
    "fr": "Je t'appelle demain pour qu'on s'organise.",
    "pt": "Ligo-te amanhã para combinar."
   },
   {
    "fr": "D'accord, j'attends de tes nouvelles.",
    "pt": "Está bem, fico à espera."
   },
   {
    "fr": "Je t'embrasse, à bientôt !",
    "pt": "Um abraço, até breve!"
   }
  ]
 },
 {
  "title": "Parler de son animal",
  "phrases": [
   {
    "fr": "Tu as un animal à la maison ?",
    "pt": "Tens algum animal de estimação?"
   },
   {
    "fr": "J'ai une chatte qui s'appelle Mimi.",
    "pt": "Tenho uma gata chamada Mimi."
   },
   {
    "fr": "Elle est câline ?",
    "pt": "É meiga?"
   },
   {
    "fr": "Très, elle dort toujours sur mon canapé.",
    "pt": "Muito, dorme sempre no meu sofá."
   },
   {
    "fr": "Moi, j'ai un chien très joueur.",
    "pt": "Eu tenho um cão muito brincalhão."
   },
   {
    "fr": "Tu emmènes ton chien à la plage ?",
    "pt": "Levas o teu cão à praia?"
   },
   {
    "fr": "Oui, à la plage de Figueira, en hiver.",
    "pt": "Sim, à praia da Figueira, no inverno."
   },
   {
    "fr": "En été, les chiens n'ont pas le droit d'entrer.",
    "pt": "No verão, os cães não podem entrar."
   },
   {
    "fr": "Il adore courir dans le sable.",
    "pt": "Ele adora correr na areia."
   },
   {
    "fr": "Un jour, je te présente mon chien.",
    "pt": "Um dia apresento-te o meu cão."
   }
  ]
 },
 {
  "title": "Décrire son logement",
  "phrases": [
   {
    "fr": "Tu habites où, à Coimbra ?",
    "pt": "Onde moras em Coimbra?"
   },
   {
    "fr": "J'habite près de la Quebra-Costas.",
    "pt": "Moro perto da Quebra-Costas."
   },
   {
    "fr": "Cette rue est vraiment en pente !",
    "pt": "Essa rua é mesmo inclinada!"
   },
   {
    "fr": "Eh oui, je la monte tous les jours.",
    "pt": "Pois é, subo-a todos os dias."
   },
   {
    "fr": "Ton appartement est grand ?",
    "pt": "O teu apartamento é grande?"
   },
   {
    "fr": "Il a deux chambres et un balcon.",
    "pt": "Tem dois quartos e uma varanda."
   },
   {
    "fr": "Tu vis seul ou en colocation ?",
    "pt": "Vives sozinho ou com colegas?"
   },
   {
    "fr": "Je partage l'appart avec trois étudiants.",
    "pt": "Partilho a casa com três estudantes."
   },
   {
    "fr": "Le loyer est cher ?",
    "pt": "A renda é cara?"
   },
   {
    "fr": "Je paie trois cents euros par mois.",
    "pt": "Pago trezentos euros por mês."
   }
  ]
 },
 {
  "title": "Parler de football",
  "phrases": [
   {
    "fr": "Tu es supporter de quel club ?",
    "pt": "És de que clube?"
   },
   {
    "fr": "Je suis pour l'Académica, évidemment !",
    "pt": "Sou da Académica, claro!"
   },
   {
    "fr": "Mon père est pour Benfica.",
    "pt": "O meu pai é do Benfica."
   },
   {
    "fr": "Et mon frère est pour le Sporting.",
    "pt": "E o meu irmão é do Sporting."
   },
   {
    "fr": "À la maison, il y a toujours des disputes !",
    "pt": "Em casa há sempre discussões!"
   },
   {
    "fr": "Tu vas voir le match dimanche ?",
    "pt": "Vais ver o jogo no domingo?"
   },
   {
    "fr": "Je vais au stade avec des amis.",
    "pt": "Vou ao estádio com uns amigos."
   },
   {
    "fr": "L'Académica joue contre qui ?",
    "pt": "A Académica joga contra quem?"
   },
   {
    "fr": "Contre Porto, ça va être difficile.",
    "pt": "Contra o Porto, vai ser difícil."
   },
   {
    "fr": "On va gagner, j'en suis sûr !",
    "pt": "Vamos ganhar, tenho a certeza!"
   }
  ]
 },
 {
  "title": "Un café entre collègues",
  "phrases": [
   {
    "fr": "On descend prendre un café ?",
    "pt": "Vamos tomar um café?"
   },
   {
    "fr": "Bonne idée, j'ai besoin d'une pause.",
    "pt": "Boa ideia, preciso de uma pausa."
   },
   {
    "fr": "Où est-ce que tu vas d'habitude ?",
    "pt": "Onde é que costumas ir?"
   },
   {
    "fr": "À la pâtisserie juste à côté.",
    "pt": "À pastelaria aqui ao lado."
   },
   {
    "fr": "Ils ont d'excellents ovos moles.",
    "pt": "Têm uns ovos moles ótimos."
   },
   {
    "fr": "Qu'est-ce que tu vas prendre ?",
    "pt": "O que é que vais pedir?"
   },
   {
    "fr": "Un grand café au lait, j'ai sommeil.",
    "pt": "Um galão, estou com sono."
   },
   {
    "fr": "Pour moi, un café et un gâteau.",
    "pt": "Para mim, um café e um bolo."
   },
   {
    "fr": "Combien ça fait en tout ?",
    "pt": "Quanto é tudo?"
   },
   {
    "fr": "Aujourd'hui, c'est moi qui paie.",
    "pt": "Hoje pago eu."
   }
  ],
  "tip": {
   "title": "« É que » dans les questions : « Onde é que moras? »",
   "example": "Où est-ce que tu vas d'habitude ? — <b>Onde é que</b> costumas ir?",
   "body": "À l'oral, les Portugais ajoutent très souvent é que après le mot interrogatif, exactement comme notre « est-ce que » : Onde é que moras?, O que é que queres?, Quando é que chegas? Le sens ne change pas, la question sonne simplement plus naturelle et plus orale. L'ordre des mots reste simple : mot interrogatif + é que + verbe."
  }
 },
 {
  "title": "Parler de musique",
  "phrases": [
   {
    "fr": "Tu écoutes quel genre de musique ?",
    "pt": "Que tipo de música ouves?"
   },
   {
    "fr": "J'écoute de tout, mais j'adore le fado.",
    "pt": "Ouço de tudo, mas adoro fado."
   },
   {
    "fr": "Tu connais le fado de Coimbra ?",
    "pt": "Conheces o fado de Coimbra?"
   },
   {
    "fr": "Oui, les étudiants le chantent en cape noire.",
    "pt": "Sim, os estudantes cantam-no de capa preta."
   },
   {
    "fr": "Tu joues d'un instrument, toi ?",
    "pt": "E tu, tocas algum instrumento?"
   },
   {
    "fr": "Je joue de la guitare portugaise depuis deux ans.",
    "pt": "Toco guitarra portuguesa há dois anos."
   },
   {
    "fr": "Que c'est beau ! C'est difficile ?",
    "pt": "Que bonito! É difícil?"
   },
   {
    "fr": "Un peu, mais j'aime vraiment ça.",
    "pt": "Um bocado, mas gosto muito."
   },
   {
    "fr": "Il y a une sérénade vendredi soir.",
    "pt": "Há uma serenata na sexta à noite."
   },
   {
    "fr": "On y va ensemble ? Il paraît que c'est magnifique.",
    "pt": "Vamos juntos? Dizem que é lindo."
   }
  ]
 },
 {
  "title": "Parler de ses goûts culinaires",
  "phrases": [
   {
    "fr": "Tu cuisines beaucoup à la maison ?",
    "pt": "Cozinhas muito em casa?"
   },
   {
    "fr": "Seulement le week-end, je n'ai pas le temps.",
    "pt": "Só ao fim de semana, não tenho tempo."
   },
   {
    "fr": "Quel plat tu aimes le plus ?",
    "pt": "De que prato gostas mais?"
   },
   {
    "fr": "J'adore la caldeirada d'anguilles d'Aveiro.",
    "pt": "Adoro a caldeirada de enguias de Aveiro."
   },
   {
    "fr": "Moi, je ne mange pas de poisson, je préfère la viande.",
    "pt": "Eu não como peixe, prefiro carne."
   },
   {
    "fr": "Alors tu dois goûter le cochon de lait.",
    "pt": "Então tens de provar o leitão."
   },
   {
    "fr": "Tu préfères le sucré ou le salé ?",
    "pt": "És mais de doce ou de salgado?"
   },
   {
    "fr": "Le sucré, sans hésiter ! J'adore les ovos moles.",
    "pt": "Doce, sem dúvida! Adoro ovos moles."
   },
   {
    "fr": "C'est trop sucré pour moi.",
    "pt": "São doces demais para mim."
   },
   {
    "fr": "Chacun a ses goûts, après tout.",
    "pt": "Afinal, cada um tem o seu gosto."
   }
  ]
 },
 {
  "title": "Faire un compliment",
  "phrases": [
   {
    "fr": "Tu es très élégante aujourd'hui !",
    "pt": "Estás muito elegante hoje!"
   },
   {
    "fr": "Merci, c'est gentil de ta part.",
    "pt": "Obrigada, és muito simpático."
   },
   {
    "fr": "Ce pull te va très bien.",
    "pt": "Essa camisola fica-te muito bem."
   },
   {
    "fr": "Il vient d'une petite boutique d'Aveiro.",
    "pt": "É de uma loja pequena em Aveiro."
   },
   {
    "fr": "Ta maison est très accueillante.",
    "pt": "A tua casa é muito acolhedora."
   },
   {
    "fr": "Tu cuisines vraiment bien, bravo !",
    "pt": "Cozinhas mesmo bem, parabéns!"
   },
   {
    "fr": "Ton portugais est excellent !",
    "pt": "O teu português está ótimo!"
   },
   {
    "fr": "Vraiment ? Je fais encore beaucoup de fautes.",
    "pt": "A sério? Ainda dou muitos erros."
   },
   {
    "fr": "Ce n'est pas grave, on comprend tout.",
    "pt": "Não faz mal, percebe-se tudo."
   },
   {
    "fr": "Merci, ça me donne du courage.",
    "pt": "Obrigado, isso dá-me coragem."
   }
  ]
 },
 {
  "title": "Exprimer un désaccord poliment",
  "phrases": [
   {
    "fr": "Désolé, mais je ne suis pas d'accord.",
    "pt": "Desculpa, mas não concordo."
   },
   {
    "fr": "Ah bon ? Pourquoi ?",
    "pt": "A sério? Porquê?"
   },
   {
    "fr": "Je trouve l'idée un petit peu risquée.",
    "pt": "Acho a ideia um bocadinho arriscada."
   },
   {
    "fr": "Je comprends, mais ça vaut la peine d'essayer.",
    "pt": "Percebo, mas vale a pena tentar."
   },
   {
    "fr": "Bon, tu as peut-être raison.",
    "pt": "Pronto, se calhar tens razão."
   },
   {
    "fr": "On peut réfléchir encore un peu ?",
    "pt": "Podemos pensar mais um pouco?"
   },
   {
    "fr": "Bien sûr, rien ne presse.",
    "pt": "Claro, não há pressa nenhuma."
   },
   {
    "fr": "Parlons-en calmement.",
    "pt": "Vamos falar disso com calma."
   },
   {
    "fr": "Tu m'attends juste une petite minute ?",
    "pt": "Esperas só um minutinho?"
   },
   {
    "fr": "Au fond, on pense presque la même chose.",
    "pt": "No fundo, pensamos quase o mesmo."
   }
  ],
  "tip": {
   "title": "Les diminutifs en « -inho / -inha »",
   "example": "Je trouve l'idée un petit peu risquée. — Acho a ideia um <b>bocadinho</b> arriscada.",
   "body": "Les Portugais adorent les diminutifs : on remplace la voyelle finale par -inho ou -inha pour dire « petit » ou pour adoucir une phrase. Um bocado devient um bocadinho (« un petit peu »), um minuto devient um minutinho, um café devient um cafezinho. C'est très fréquent à l'oral, souvent pour être gentil ou poli plutôt que pour parler de taille."
  }
 },
 {
  "title": "Se dire au revoir après une soirée",
  "phrases": [
   {
    "fr": "Quelle soirée agréable !",
    "pt": "Que noite tão agradável!"
   },
   {
    "fr": "Merci pour l'invitation, c'était génial.",
    "pt": "Obrigado pelo convite, foi ótimo."
   },
   {
    "fr": "Il faut qu'on remette ça bientôt.",
    "pt": "Temos de repetir em breve."
   },
   {
    "fr": "La prochaine fois, on se retrouve chez moi.",
    "pt": "Da próxima vez é lá em casa."
   },
   {
    "fr": "Et toi, tu rentres comment ?",
    "pt": "E tu, como vais para casa?"
   },
   {
    "fr": "À pied, j'habite tout près.",
    "pt": "Vou a pé, moro aqui perto."
   },
   {
    "fr": "Attention à la Quebra-Costas la nuit !",
    "pt": "Cuidado com a Quebra-Costas à noite!"
   },
   {
    "fr": "Envoie-moi un message après, d'accord ?",
    "pt": "Depois manda-me uma mensagem, está bem?"
   },
   {
    "fr": "Bonne nuit, et merci pour tout.",
    "pt": "Boa noite e obrigado por tudo."
   },
   {
    "fr": "Au revoir, à la prochaine !",
    "pt": "Adeus, até à próxima!"
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce module était très complet.",
    "pt": "Este módulo foi muito completo."
   },
   {
    "fr": "On sait déjà parler de beaucoup de sujets.",
    "pt": "Já sabemos falar de muitos assuntos."
   },
   {
    "fr": "La famille, le travail, la cuisine et le foot.",
    "pt": "A família, o trabalho, a comida e o futebol."
   },
   {
    "fr": "Le premier niveau est presque terminé.",
    "pt": "O primeiro nível está quase no fim."
   },
   {
    "fr": "Mon portugais progresse tous les jours.",
    "pt": "O meu português melhora todos os dias."
   },
   {
    "fr": "J'arrive déjà à discuter avec des Portugais.",
    "pt": "Já consigo conversar com portugueses."
   },
   {
    "fr": "Au prochain niveau, on va parler du passé.",
    "pt": "No próximo nível, vamos falar do passado."
   },
   {
    "fr": "Les phrases vont être un peu plus longues.",
    "pt": "As frases vão ser um pouco mais longas."
   },
   {
    "fr": "Bravo pour ce beau travail !",
    "pt": "Parabéns por este bom trabalho!"
   },
   {
    "fr": "À tout de suite pour le niveau suivant !",
    "pt": "Até já, no próximo nível!"
   }
  ]
 }
];

const level2Module1Lessons = [
 {
  "title": "Demander son NIF aux Finanças",
  "phrases": [
   {
    "fr": "Ce matin, je suis allé aux Finanças d'Oeiras pour mon NIF.",
    "pt": "Esta manhã fui às Finanças de Oeiras tratar do NIF."
   },
   {
    "fr": "Il faut prendre un ticket à l'entrée et attendre son tour.",
    "pt": "É preciso tirar uma senha à entrada e esperar pela vez."
   },
   {
    "fr": "Bonjour, je viens demander un numéro fiscal.",
    "pt": "Bom dia, venho pedir um número de contribuinte."
   },
   {
    "fr": "Vous avez votre passeport et un justificatif d'adresse ?",
    "pt": "Tem o passaporte e um comprovativo de morada?"
   },
   {
    "fr": "J'ai seulement le passeport, l'adresse figure dans ce contrat.",
    "pt": "Só tenho o passaporte, a morada está neste contrato."
   },
   {
    "fr": "Ça ira, asseyez-vous un instant, s'il vous plaît.",
    "pt": "Serve, sente-se só um momento, se faz favor."
   },
   {
    "fr": "Sans NIF, on ne peut presque rien faire au Portugal.",
    "pt": "Sem NIF, quase não se pode fazer nada em Portugal."
   },
   {
    "fr": "Même pour un forfait de téléphone, on vous le demande.",
    "pt": "Até para um contrato de telemóvel pedem o NIF."
   },
   {
    "fr": "Voici votre document, gardez-le précieusement.",
    "pt": "Aqui tem o seu documento, guarde-o bem."
   },
   {
    "fr": "Finalement, ça a été plus rapide que je ne le pensais.",
    "pt": "Afinal foi mais rápido do que eu pensava."
   }
  ]
 },
 {
  "title": "Ouvrir un compte à la banque",
  "phrases": [
   {
    "fr": "Bonjour, je voudrais ouvrir un compte dans cette agence.",
    "pt": "Bom dia, queria abrir uma conta nesta agência."
   },
   {
    "fr": "J'ai déjà parlé avec votre collègue la semaine dernière.",
    "pt": "Já falei com a sua colega na semana passada."
   },
   {
    "fr": "Vous avez apporté votre NIF et une pièce d'identité ?",
    "pt": "Trouxe o NIF e um documento de identificação?"
   },
   {
    "fr": "Oui, et j'ai rempli le formulaire en ligne hier soir.",
    "pt": "Sim, e preenchi o formulário online ontem à noite."
   },
   {
    "fr": "Parfait, vous recevrez la carte d'ici une dizaine de jours.",
    "pt": "Ótimo, vai receber o cartão dentro de uns dez dias."
   },
   {
    "fr": "Avec cette carte, je pourrai payer partout ?",
    "pt": "Com este cartão posso pagar em todo o lado?"
   },
   {
    "fr": "Oui, et retirer de l'argent à n'importe quel Multibanco.",
    "pt": "Sim, e levantar dinheiro em qualquer multibanco."
   },
   {
    "fr": "Combien coûte ce compte par mois ?",
    "pt": "Quanto custa esta conta por mês?"
   },
   {
    "fr": "Quatre euros, mais la première année est gratuite.",
    "pt": "Quatro euros, mas o primeiro ano é grátis."
   },
   {
    "fr": "Merci, vous m'avez vraiment bien aidé ce matin.",
    "pt": "Obrigado, ajudou-me muito esta manhã."
   }
  ],
  "tip": {
   "title": "Le « pretérito perfeito » des verbes réguliers",
   "example": "J'ai déjà parlé avec votre collègue la semaine dernière. — Já <b>falei</b> com a sua colega na semana passada.",
   "body": "Pour une action terminée, le portugais utilise un temps simple, le pretérito perfeito, là où le français emploie le passé composé : un seul mot suffit. Verbes en -ar : falei, falaste, falou, falámos, falaram ; en -er : comi, comeste, comeu ; en -ir : abri, abriste, abriu. Au Portugal, la forme « nós » du passé prend un accent : « falámos » (nous avons parlé) se distingue ainsi du présent « falamos »."
  }
 },
 {
  "title": "Au centro de saúde",
  "phrases": [
   {
    "fr": "J'ai pris rendez-vous au centro de saúde de Cacilhas.",
    "pt": "Marquei consulta no centro de saúde de Cacilhas."
   },
   {
    "fr": "Bonjour, j'ai une consultation avec la médecin de famille à neuf heures.",
    "pt": "Bom dia, tenho consulta com a médica de família às nove horas."
   },
   {
    "fr": "Vous avez votre numéro d'utente ?",
    "pt": "Tem o seu número de utente?"
   },
   {
    "fr": "Oui, on me l'a attribué ici le mois dernier.",
    "pt": "Sim, deram-me o número aqui no mês passado."
   },
   {
    "fr": "Qu'est-ce qui vous amène aujourd'hui ?",
    "pt": "O que é que o traz cá hoje?"
   },
   {
    "fr": "Depuis trois jours, j'ai mal à la gorge et de la fièvre.",
    "pt": "Há três dias que tenho dores de garganta e febre."
   },
   {
    "fr": "Ouvrez la bouche et dites « ah », s'il vous plaît.",
    "pt": "Abra a boca e diga «ah», se faz favor."
   },
   {
    "fr": "C'est une simple infection, rien d'inquiétant.",
    "pt": "É uma simples infeção, nada de preocupante."
   },
   {
    "fr": "Prenez ce médicament après les repas pendant une semaine.",
    "pt": "Tome este medicamento depois das refeições durante uma semana."
   },
   {
    "fr": "La pharmacie juste en face reste ouverte jusqu'à vingt heures.",
    "pt": "A farmácia mesmo em frente está aberta até às vinte horas."
   }
  ]
 },
 {
  "title": "Le café du quartier à Campo de Ourique",
  "phrases": [
   {
    "fr": "Tous les matins, je bois une bica au café du coin.",
    "pt": "Todas as manhãs tomo uma bica no café da esquina."
   },
   {
    "fr": "Le patron connaît déjà ma commande par cœur.",
    "pt": "O dono já sabe o meu pedido de cor."
   },
   {
    "fr": "Bonjour, comme d'habitude, une bica et une tosta mista ?",
    "pt": "Bom dia, o costume, uma bica e uma tosta mista?"
   },
   {
    "fr": "Aujourd'hui, je préfère un galão bien chaud.",
    "pt": "Hoje prefiro um galão bem quente."
   },
   {
    "fr": "Tu as vu le match du Benfica hier soir ?",
    "pt": "Viste o jogo do Benfica ontem à noite?"
   },
   {
    "fr": "Oui, ils ont gagné à la dernière minute.",
    "pt": "Vi, ganharam no último minuto."
   },
   {
    "fr": "Ici, dans le quartier, tout le monde se connaît.",
    "pt": "Aqui no bairro toda a gente se conhece."
   },
   {
    "fr": "Le marché de Campo de Ourique est juste à côté.",
    "pt": "O mercado de Campo de Ourique fica mesmo ao lado."
   },
   {
    "fr": "Je te dois combien pour les deux cafés ?",
    "pt": "Quanto te devo pelos dois cafés?"
   },
   {
    "fr": "Un euro quarante, et à demain !",
    "pt": "Um euro e quarenta, e até amanhã!"
   }
  ]
 },
 {
  "title": "Hier au travail",
  "phrases": [
   {
    "fr": "Hier, je suis allé au bureau à pied depuis la gare do Oriente.",
    "pt": "Ontem fui a pé da estação do Oriente até ao escritório."
   },
   {
    "fr": "Le matin, j'ai eu trois réunions d'affilée.",
    "pt": "De manhã tive três reuniões seguidas."
   },
   {
    "fr": "Tu as fait une pause pour déjeuner ?",
    "pt": "Fizeste uma pausa para almoçar?"
   },
   {
    "fr": "À peine, j'ai mangé une sandes devant l'ordinateur.",
    "pt": "Mal, comi uma sandes em frente ao computador."
   },
   {
    "fr": "L'après-midi, j'ai été en visioconférence avec des clients de Setúbal.",
    "pt": "À tarde estive em videoconferência com clientes de Setúbal."
   },
   {
    "fr": "Et qu'est-ce que tu as fait après le travail ?",
    "pt": "E o que é que fizeste depois do trabalho?"
   },
   {
    "fr": "Je suis allé courir au bord du Tage.",
    "pt": "Fui correr à beira do Tejo."
   },
   {
    "fr": "Ma cheffe a été très contente de mon rapport.",
    "pt": "A minha chefe ficou muito contente com o meu relatório."
   },
   {
    "fr": "Bref, j'ai été débordé toute la journée.",
    "pt": "Enfim, estive cheio de trabalho o dia todo."
   },
   {
    "fr": "Aujourd'hui, j'espère quitter le bureau plus tôt.",
    "pt": "Hoje espero sair do escritório mais cedo."
   }
  ],
  "tip": {
   "title": "Les passés irréguliers « fui, fiz, tive, estive »",
   "example": "Le matin, j'ai eu trois réunions d'affilée. — De manhã <b>tive</b> três reuniões seguidas.",
   "body": "Les verbes les plus fréquents ont un passé irrégulier à apprendre par cœur. « Ir » et « ser » partagent les mêmes formes : fui, foste, foi, fomos, foram ; « fazer » donne fiz, fizeste, fez ; « ter » donne tive, tiveste, teve ; « estar » donne estive, estiveste, esteve. Exemples : « Fui ao médico », « Fiz o jantar », « Estive em casa ». Attention : « foi » peut signifier « il est allé » ou « il a été », c'est le contexte qui tranche."
  }
 },
 {
  "title": "Une panne de courant",
  "phrases": [
   {
    "fr": "J'étais en train de cuisiner quand le courant a sauté.",
    "pt": "Estava a cozinhar quando a luz foi abaixo."
   },
   {
    "fr": "Tout l'immeuble est plongé dans le noir.",
    "pt": "O prédio inteiro ficou às escuras."
   },
   {
    "fr": "Le voisin est en train de vérifier le tableau électrique.",
    "pt": "O vizinho está a ver o quadro elétrico."
   },
   {
    "fr": "Tu as une lampe de poche quelque part ?",
    "pt": "Tens uma lanterna em algum lado?"
   },
   {
    "fr": "Oui, dans le tiroir de la cuisine, à gauche.",
    "pt": "Tenho, na gaveta da cozinha, à esquerda."
   },
   {
    "fr": "J'appelle le fournisseur d'électricité pour savoir ce qui se passe.",
    "pt": "Vou ligar para a companhia da luz para saber o que se passa."
   },
   {
    "fr": "Ils sont en train de réparer un câble dans la rue.",
    "pt": "Estão a reparar um cabo na rua."
   },
   {
    "fr": "Le frigo commence à se réchauffer, quelle galère.",
    "pt": "O frigorífico está a começar a aquecer, que chatice."
   },
   {
    "fr": "On dîne aux chandelles, alors ?",
    "pt": "Então jantamos à luz das velas?"
   },
   {
    "fr": "La lumière est revenue pile au moment du dessert.",
    "pt": "A luz voltou mesmo na hora da sobremesa."
   }
  ],
  "tip": {
   "title": "« Estar a + infinitif » : être en train de",
   "example": "J'étais en train de cuisiner quand le courant a sauté. — <b>Estava a cozinhar</b> quando a luz foi abaixo.",
   "body": "Pour une action en cours, le portugais du Portugal utilise « estar a » suivi de l'infinitif, exactement comme « être en train de ». Exemples : « Estou a trabalhar », « Estás a ouvir? », « Está a chover ». Au Portugal, on n'emploie pas la forme en -ando dans ce cas : on dit « estou a comer ». À l'imparfait, « estava a » plante le décor d'une action interrompue par une autre."
  }
 },
 {
  "title": "Un dimanche à Cascais",
  "phrases": [
   {
    "fr": "Dimanche, on a pris le train pour Cascais.",
    "pt": "No domingo apanhámos o comboio para Cascais."
   },
   {
    "fr": "Le trajet le long de la mer est magnifique.",
    "pt": "A viagem ao longo do mar é lindíssima."
   },
   {
    "fr": "On s'est promenés jusqu'à la Boca do Inferno.",
    "pt": "Passeámos até à Boca do Inferno."
   },
   {
    "fr": "Il y avait beaucoup de familles sur la plage.",
    "pt": "Havia muitas famílias na praia."
   },
   {
    "fr": "Tu as goûté les glaces de chez Santini ?",
    "pt": "Provaste os gelados do Santini?"
   },
   {
    "fr": "Oui, j'ai pris fraise et citron.",
    "pt": "Provei, pedi morango e limão."
   },
   {
    "fr": "L'après-midi, on a fait la sieste sur le sable.",
    "pt": "À tarde dormimos uma sesta na areia."
   },
   {
    "fr": "Le dimanche, j'aime ne rien prévoir du tout.",
    "pt": "Ao domingo gosto de não planear nada."
   },
   {
    "fr": "On est rentrés à Lisbonne au coucher du soleil.",
    "pt": "Voltámos para Lisboa ao pôr do sol."
   },
   {
    "fr": "Le train du retour était plein à craquer.",
    "pt": "O comboio de volta vinha cheio que nem um ovo."
   }
  ]
 },
 {
  "title": "Les voisins et la copropriété",
  "phrases": [
   {
    "fr": "Ce soir, il y a une réunion de copropriété dans le hall.",
    "pt": "Hoje à noite há reunião de condomínio na entrada do prédio."
   },
   {
    "fr": "L'administrateur veut repeindre la façade cette année.",
    "pt": "O administrador quer pintar a fachada este ano."
   },
   {
    "fr": "Combien ça va coûter à chaque appartement ?",
    "pt": "Quanto vai custar a cada apartamento?"
   },
   {
    "fr": "Environ deux cents euros, payables en trois fois.",
    "pt": "Cerca de duzentos euros, pagos em três prestações."
   },
   {
    "fr": "La voisine du troisième se plaint toujours du bruit.",
    "pt": "A vizinha do terceiro queixa-se sempre do barulho."
   },
   {
    "fr": "Pourtant, son chien aboie toute la journée !",
    "pt": "Mas o cão dela ladra o dia inteiro!"
   },
   {
    "fr": "Le monsieur du rez-de-chaussée arrose nos plantes en été.",
    "pt": "O senhor do rés-do-chão rega as nossas plantas no verão."
   },
   {
    "fr": "On a vraiment de la chance avec nos voisins.",
    "pt": "Temos mesmo sorte com os vizinhos."
   },
   {
    "fr": "Il faut aussi réparer l'ascenseur, qui tombe souvent en panne.",
    "pt": "Também é preciso arranjar o elevador, que avaria muitas vezes."
   },
   {
    "fr": "Bon, on vote et on rentre dîner.",
    "pt": "Bem, votamos e vamos jantar."
   }
  ]
 },
 {
  "title": "Le marché de Setúbal",
  "phrases": [
   {
    "fr": "Le samedi, je vais au marché du Livramento, à Setúbal.",
    "pt": "Ao sábado vou ao Mercado do Livramento, em Setúbal."
   },
   {
    "fr": "Ici, le poisson arrive directement du port.",
    "pt": "Aqui o peixe chega diretamente do porto."
   },
   {
    "fr": "Bonjour, ces dorades sont d'aujourd'hui ?",
    "pt": "Bom dia, estas douradas são de hoje?"
   },
   {
    "fr": "Elles sont arrivées ce matin, toutes fraîches.",
    "pt": "Chegaram esta manhã, fresquinhas."
   },
   {
    "fr": "Donnez-m'en deux bien nettoyées, s'il vous plaît.",
    "pt": "Dê-me duas bem arranjadas, se faz favor."
   },
   {
    "fr": "Je vais vous les écailler tout de suite.",
    "pt": "Vou escamá-las já."
   },
   {
    "fr": "Il me faut aussi des tomates et un bouquet de coriandre.",
    "pt": "Também preciso de tomate e de um molho de coentros."
   },
   {
    "fr": "Ça fait neuf euros vingt en tout.",
    "pt": "São nove euros e vinte ao todo."
   },
   {
    "fr": "Vous avez la monnaie sur vingt euros ?",
    "pt": "Tem troco para vinte euros?"
   },
   {
    "fr": "J'adore l'odeur et l'animation de ce marché.",
    "pt": "Adoro o cheiro e a animação deste mercado."
   }
  ]
 },
 {
  "title": "À la pastelaria",
  "phrases": [
   {
    "fr": "Cette pastelaria fait les meilleurs pastéis de nata d'Oeiras.",
    "pt": "Esta pastelaria faz os melhores pastéis de nata de Oeiras."
   },
   {
    "fr": "Ils sortent du four toutes les heures.",
    "pt": "Saem do forno de hora a hora."
   },
   {
    "fr": "Je vais prendre deux pastéis et un jus d'orange pressée.",
    "pt": "Vou querer dois pastéis e um sumo de laranja natural."
   },
   {
    "fr": "Je mets un peu de cannelle sur ton pastel ?",
    "pt": "Ponho um bocadinho de canela no teu pastel?"
   },
   {
    "fr": "Oui, et un peu de sucre glace aussi.",
    "pt": "Quero, e também um pouco de açúcar em pó."
   },
   {
    "fr": "C'est pour manger ici ou à emporter ?",
    "pt": "É para comer aqui ou para levar?"
   },
   {
    "fr": "Sur place, on s'assoit près de la vitrine.",
    "pt": "Para aqui, sentamo-nos ao pé da montra."
   },
   {
    "fr": "Mon voisin vient ici tous les matins depuis vingt ans.",
    "pt": "O meu vizinho vem cá todas as manhãs há vinte anos."
   },
   {
    "fr": "Ils font aussi un excellent bolo de arroz.",
    "pt": "Também fazem um bolo de arroz muito bom."
   },
   {
    "fr": "Franchement, j'en mangerais bien un deuxième.",
    "pt": "Sinceramente, comia mais um."
   }
  ]
 },
 {
  "title": "Des travaux à la maison",
  "phrases": [
   {
    "fr": "Ça fait deux semaines qu'on refait la salle de bains.",
    "pt": "Andamos a remodelar a casa de banho há duas semanas."
   },
   {
    "fr": "Les ouvriers commencent à huit heures du matin.",
    "pt": "Os trabalhadores começam às oito da manhã."
   },
   {
    "fr": "Le bruit de la perceuse me rend fou.",
    "pt": "O barulho do berbequim dá cabo de mim."
   },
   {
    "fr": "Il a fallu une autorisation de la Junta de Freguesia.",
    "pt": "Foi preciso uma autorização da Junta de Freguesia."
   },
   {
    "fr": "Le plombier a découvert une fuite derrière le mur.",
    "pt": "O canalizador encontrou uma fuga atrás da parede."
   },
   {
    "fr": "Ça va retarder le chantier d'une semaine.",
    "pt": "Isso vai atrasar as obras uma semana."
   },
   {
    "fr": "En attendant, on se douche à la salle de sport.",
    "pt": "Entretanto, tomamos banho no ginásio."
   },
   {
    "fr": "Tu as fini par choisir le carrelage ?",
    "pt": "Afinal sempre escolheste os azulejos?"
   },
   {
    "fr": "Oui, des azulejos bleus et blancs, très traditionnels.",
    "pt": "Escolhi, azulejos azuis e brancos, muito tradicionais."
   },
   {
    "fr": "J'ai hâte de voir tout ça terminé.",
    "pt": "Estou ansioso por ver tudo acabado."
   }
  ]
 },
 {
  "title": "Mon enfance à Almada",
  "phrases": [
   {
    "fr": "J'ai grandi à Almada, tout près de Cacilhas.",
    "pt": "Cresci em Almada, pertinho de Cacilhas."
   },
   {
    "fr": "Quand j'étais petit, je prenais le cacilheiro avec mon grand-père.",
    "pt": "Quando era pequeno, apanhava o cacilheiro com o meu avô."
   },
   {
    "fr": "Il me montrait Lisbonne de l'autre côté du Tage.",
    "pt": "Mostrava-me Lisboa do outro lado do Tejo."
   },
   {
    "fr": "Le dimanche, on allait manger du poisson grillé sur le quai.",
    "pt": "Ao domingo íamos comer peixe grelhado no cais."
   },
   {
    "fr": "Tu jouais dans la rue avec les enfants du quartier ?",
    "pt": "Brincavas na rua com os miúdos do bairro?"
   },
   {
    "fr": "Oui, on jouait au foot jusqu'à la tombée de la nuit.",
    "pt": "Brincava, jogávamos à bola até anoitecer."
   },
   {
    "fr": "Ma mère nous appelait par la fenêtre pour le dîner.",
    "pt": "A minha mãe chamava-nos da janela para jantar."
   },
   {
    "fr": "L'été, on passait nos journées à la Costa da Caparica.",
    "pt": "No verão passávamos os dias na Costa da Caparica."
   },
   {
    "fr": "À cette époque, tout était plus simple.",
    "pt": "Naquela altura era tudo mais simples."
   },
   {
    "fr": "J'y retourne encore souvent pour voir ma famille.",
    "pt": "Ainda lá volto muitas vezes para ver a família."
   }
  ],
  "tip": {
   "title": "Le « pretérito imperfeito » pour les habitudes passées",
   "example": "Quand j'étais petit, je prenais le cacilheiro avec mon grand-père. — Quando <b>era</b> pequeno, <b>apanhava</b> o cacilheiro com o meu avô.",
   "body": "Pour une habitude passée ou une description, le portugais emploie le pretérito imperfeito, comme l'imparfait français. Terminaisons : -ava pour les verbes en -ar (eu apanhava, nós jogávamos), -ia pour les verbes en -er et -ir (eu comia, ele vivia). « Ser » et « ir » sont irréguliers : « era », « ia ». Exemple : « Ao domingo íamos à praia » (le dimanche, on allait à la plage)."
  }
 },
 {
  "title": "La salle de sport au Parque das Nações",
  "phrases": [
   {
    "fr": "Je me suis inscrit dans une salle de sport au Parque das Nações.",
    "pt": "Inscrevi-me num ginásio no Parque das Nações."
   },
   {
    "fr": "L'abonnement coûte trente-cinq euros par mois.",
    "pt": "A mensalidade custa trinta e cinco euros."
   },
   {
    "fr": "J'y vais trois fois par semaine, après le bureau.",
    "pt": "Vou lá três vezes por semana, depois do escritório."
   },
   {
    "fr": "L'entraîneur m'a préparé un programme sur mesure.",
    "pt": "O treinador preparou-me um plano à medida."
   },
   {
    "fr": "Tu as déjà essayé le cours de pilates du mardi ?",
    "pt": "Já experimentaste a aula de pilates de terça?"
   },
   {
    "fr": "Oui, mais j'ai eu des courbatures pendant trois jours.",
    "pt": "Já, mas fiquei com dores musculares durante três dias."
   },
   {
    "fr": "Le matin, je préfère courir le long du fleuve.",
    "pt": "De manhã prefiro correr junto ao rio."
   },
   {
    "fr": "La vue sur le pont Vasco da Gama est superbe.",
    "pt": "A vista para a ponte Vasco da Gama é espetacular."
   },
   {
    "fr": "N'oublie pas ta serviette et ta gourde.",
    "pt": "Não te esqueças da toalha e da garrafa de água."
   },
   {
    "fr": "Je me sens bien mieux depuis que j'y vais.",
    "pt": "Sinto-me muito melhor desde que comecei a ir."
   }
  ]
 },
 {
  "title": "Un jour férié : le vingt-cinq avril",
  "phrases": [
   {
    "fr": "Le vingt-cinq avril, c'est le jour de la Liberté.",
    "pt": "O vinte e cinco de Abril é o Dia da Liberdade."
   },
   {
    "fr": "Ce jour-là, beaucoup de gens portent un œillet rouge.",
    "pt": "Nesse dia, muita gente usa um cravo vermelho."
   },
   {
    "fr": "À Almada, la mairie organise des concerts gratuits.",
    "pt": "Em Almada, a câmara organiza concertos gratuitos."
   },
   {
    "fr": "Beaucoup de bureaux sont fermés, mais les cafés restent ouverts.",
    "pt": "Muitos serviços estão fechados, mas os cafés continuam abertos."
   },
   {
    "fr": "Mes grands-parents se souviennent bien de mille neuf cent soixante-quatorze.",
    "pt": "Os meus avós lembram-se bem de mil novecentos e setenta e quatro."
   },
   {
    "fr": "Ils me racontaient souvent comment s'était passée cette journée.",
    "pt": "Contavam-me muitas vezes como tinha sido esse dia."
   },
   {
    "fr": "Tu profites du férié pour te reposer ?",
    "pt": "Aproveitas o feriado para descansar?"
   },
   {
    "fr": "Non, on fait un pique-nique au Parque dos Poetas, à Oeiras.",
    "pt": "Não, vamos fazer um piquenique no Parque dos Poetas, em Oeiras."
   },
   {
    "fr": "Quel dommage quand un férié tombe un samedi !",
    "pt": "Que pena quando um feriado calha a um sábado!"
   },
   {
    "fr": "Le soir, on chante « Grândola, Vila Morena » tous ensemble.",
    "pt": "À noite cantamos todos juntos a «Grândola, Vila Morena»."
   }
  ]
 },
 {
  "title": "Les Santos Populares",
  "phrases": [
   {
    "fr": "En juin, Lisbonne fête Santo António.",
    "pt": "Em junho, Lisboa festeja o Santo António."
   },
   {
    "fr": "Les rues se couvrent de guirlandes colorées.",
    "pt": "As ruas enchem-se de enfeites coloridos."
   },
   {
    "fr": "Tout le quartier sent la sardine grillée.",
    "pt": "O bairro todo cheira a sardinha assada."
   },
   {
    "fr": "Tu veux une sardine sur une tranche de pain ?",
    "pt": "Queres uma sardinha no pão?"
   },
   {
    "fr": "Avec plaisir, et un verre de vin rouge aussi.",
    "pt": "Com todo o gosto, e um copo de tinto também."
   },
   {
    "fr": "J'ai acheté un manjerico pour ma voisine.",
    "pt": "Comprei um manjerico para a minha vizinha."
   },
   {
    "fr": "Il y a toujours un petit poème planté dans le pot.",
    "pt": "O vaso traz sempre uma quadra."
   },
   {
    "fr": "On a dansé jusqu'à trois heures du matin.",
    "pt": "Dançámos até às três da manhã."
   },
   {
    "fr": "Le soir du douze juin, personne ne dort.",
    "pt": "Na noite de doze de junho ninguém dorme."
   },
   {
    "fr": "Heureusement, le lendemain est férié à Lisbonne.",
    "pt": "Felizmente, no dia seguinte é feriado em Lisboa."
   }
  ]
 },
 {
  "title": "Un jour de pluie",
  "phrases": [
   {
    "fr": "Il pleut des cordes depuis ce matin.",
    "pt": "Está a chover a potes desde manhã."
   },
   {
    "fr": "J'ai oublié mon parapluie dans le cacilheiro.",
    "pt": "Esqueci-me do guarda-chuva no cacilheiro."
   },
   {
    "fr": "Aujourd'hui, la traversée du Tage a été très agitée.",
    "pt": "Hoje a travessia do Tejo foi muito agitada."
   },
   {
    "fr": "Le bateau tanguait beaucoup à cause du vent.",
    "pt": "O barco abanava muito por causa do vento."
   },
   {
    "fr": "Tu es arrivé trempé au bureau ?",
    "pt": "Chegaste encharcado ao escritório?"
   },
   {
    "fr": "Complètement, même mes chaussettes étaient mouillées.",
    "pt": "Completamente, até as meias estavam molhadas."
   },
   {
    "fr": "Prends le bus, c'est mieux par ce temps.",
    "pt": "Apanha o autocarro, é melhor com este tempo."
   },
   {
    "fr": "Les rues de Cacilhas sont pleines de flaques.",
    "pt": "As ruas de Cacilhas estão cheias de poças."
   },
   {
    "fr": "Au moins, ça fait du bien aux jardins.",
    "pt": "Ao menos faz bem aos jardins."
   },
   {
    "fr": "Ce soir, je reste au chaud avec un thé.",
    "pt": "Hoje à noite fico em casa com um chá."
   }
  ]
 },
 {
  "title": "Le plat du jour à Setúbal",
  "phrases": [
   {
    "fr": "On déjeune à Setúbal, près du port ?",
    "pt": "Almoçamos em Setúbal, perto do porto?"
   },
   {
    "fr": "Tu dois absolument goûter le choco frito.",
    "pt": "Tens mesmo de provar o choco frito."
   },
   {
    "fr": "Bonjour, une table pour deux personnes, s'il vous plaît.",
    "pt": "Boa tarde, uma mesa para duas pessoas, se faz favor."
   },
   {
    "fr": "Quel est le plat du jour aujourd'hui ?",
    "pt": "Qual é o prato do dia hoje?"
   },
   {
    "fr": "Aujourd'hui, c'est du poisson grillé avec des pommes de terre.",
    "pt": "Hoje é peixe grelhado com batata cozida."
   },
   {
    "fr": "Je préfère le choco frito avec une salade.",
    "pt": "Prefiro o choco frito com salada."
   },
   {
    "fr": "Et pour boire, un pichet de vin blanc de la maison.",
    "pt": "E para beber, um jarro de vinho branco da casa."
   },
   {
    "fr": "Le serveur a apporté du pain, des olives et du fromage.",
    "pt": "O empregado trouxe pão, azeitonas e queijo."
   },
   {
    "fr": "Attention, au Portugal, les amuse-bouches posés sur la table se paient.",
    "pt": "Atenção, em Portugal as entradas que vêm para a mesa pagam-se."
   },
   {
    "fr": "L'addition, s'il vous plaît, on règle par carte.",
    "pt": "A conta, se faz favor, pagamos com cartão."
   }
  ]
 },
 {
  "title": "Un anniversaire surprise",
  "phrases": [
   {
    "fr": "Samedi, c'est l'anniversaire de ma sœur Inês.",
    "pt": "No sábado a minha irmã Inês faz anos."
   },
   {
    "fr": "On lui prépare un dîner surprise à Oeiras.",
    "pt": "Vamos fazer-lhe um jantar surpresa em Oeiras."
   },
   {
    "fr": "Tu peux t'occuper du gâteau ?",
    "pt": "Podes tratar do bolo?"
   },
   {
    "fr": "Bien sûr, je le commande à la pastelaria d'en bas.",
    "pt": "Claro, encomendo-o na pastelaria aqui de baixo."
   },
   {
    "fr": "Qu'est-ce qu'on lui offre cette année ?",
    "pt": "O que é que lhe oferecemos este ano?"
   },
   {
    "fr": "Elle rêve d'un massage dans un spa à Cascais.",
    "pt": "Ela sonha com uma massagem num spa em Cascais."
   },
   {
    "fr": "Tout le monde arrive à vingt heures pile.",
    "pt": "Toda a gente chega às vinte horas em ponto."
   },
   {
    "fr": "Éteignez les lumières, elle monte l'escalier !",
    "pt": "Apaguem as luzes, ela está a subir as escadas!"
   },
   {
    "fr": "On a chanté joyeux anniversaire tous en chœur.",
    "pt": "Cantámos os parabéns todos juntos."
   },
   {
    "fr": "Elle a soufflé ses trente bougies d'un seul coup.",
    "pt": "Apagou as trinta velas de uma só vez."
   }
  ]
 },
 {
  "title": "Le déménagement",
  "phrases": [
   {
    "fr": "On quitte Campo de Ourique pour s'installer à Almada.",
    "pt": "Vamos mudar-nos de Campo de Ourique para Almada."
   },
   {
    "fr": "Là-bas, le loyer est beaucoup moins cher.",
    "pt": "Lá a renda é muito mais barata."
   },
   {
    "fr": "Appelle-moi quand le camion arrive.",
    "pt": "Liga-me quando o camião chegar."
   },
   {
    "fr": "Je t'aide à porter les cartons, ne t'inquiète pas.",
    "pt": "Ajudo-te a levar as caixas, não te preocupes."
   },
   {
    "fr": "Passe-moi le ruban adhésif, s'il te plaît.",
    "pt": "Passa-me a fita-cola, por favor."
   },
   {
    "fr": "Attention, ce carton-là contient la vaisselle.",
    "pt": "Cuidado, essa caixa tem a loiça."
   },
   {
    "fr": "Il faut changer l'adresse à la loja do cidadão.",
    "pt": "É preciso mudar a morada na loja do cidadão."
   },
   {
    "fr": "Et demander un certificat de résidence à la Junta de Freguesia.",
    "pt": "E pedir um atestado de residência à Junta de Freguesia."
   },
   {
    "fr": "Les nouveaux voisins nous ont apporté des gâteaux.",
    "pt": "Os vizinhos novos trouxeram-nos uns bolos."
   },
   {
    "fr": "Je te montre la vue depuis le balcon ?",
    "pt": "Mostro-te a vista da varanda?"
   }
  ],
  "tip": {
   "title": "Les pronoms après le verbe : « Liga-me », « Ajudo-te »",
   "example": "Je t'aide à porter les cartons, ne t'inquiète pas. — <b>Ajudo-te</b> a levar as caixas, não te preocupes.",
   "body": "Dans une phrase affirmative, le portugais du Portugal place le pronom complément après le verbe, relié par un trait d'union : « Liga-me », « Ajudo-te », « Chamo-me Ana ». C'est l'inverse du français « je t'aide ». Après une négation, un mot interrogatif ou « já », le pronom repasse devant : « Não te preocupes », « Quem te disse? ». On ne commence jamais une phrase par « me » ou « te »."
  }
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce module touche à sa fin, bravo !",
    "pt": "Este módulo está a chegar ao fim, parabéns!"
   },
   {
    "fr": "Tu sais maintenant raconter ta journée d'hier.",
    "pt": "Agora já sabes contar o teu dia de ontem."
   },
   {
    "fr": "Tu arrives aussi à décrire ce que tu faisais enfant.",
    "pt": "Também consegues descrever o que fazias em criança."
   },
   {
    "fr": "Les démarches aux Finanças ne te font plus peur.",
    "pt": "As burocracias nas Finanças já não te assustam."
   },
   {
    "fr": "Et commander une bica est devenu un réflexe.",
    "pt": "E pedir uma bica tornou-se um hábito."
   },
   {
    "fr": "Tu as remarqué les pronoms placés après le verbe ?",
    "pt": "Reparaste nos pronomes depois do verbo?"
   },
   {
    "fr": "Au début ça surprend, puis ça devient naturel.",
    "pt": "Ao início parece estranho, depois torna-se natural."
   },
   {
    "fr": "Ton portugais sonne de plus en plus lisboète.",
    "pt": "O teu português soa cada vez mais lisboeta."
   },
   {
    "fr": "Continue à écouter un peu de portugais chaque jour.",
    "pt": "Continua a ouvir um bocadinho de português todos os dias."
   },
   {
    "fr": "On se retrouve au prochain module pour la suite !",
    "pt": "Encontramo-nos no próximo módulo para continuar!"
   }
  ]
 }
];

const level2Module2Lessons = [
 {
  "title": "Arrivée à Faro",
  "phrases": [
   {
    "fr": "L'avion a atterri à Faro avec vingt minutes de retard.",
    "pt": "O avião aterrou em Faro com vinte minutos de atraso."
   },
   {
    "fr": "Il faisait déjà chaud quand nous sommes sortis de l'aéroport.",
    "pt": "Já fazia calor quando saímos do aeroporto."
   },
   {
    "fr": "On a attendu le bus pour le centre pendant un quart d'heure.",
    "pt": "Esperámos pelo autocarro para o centro durante um quarto de hora."
   },
   {
    "fr": "Le chauffeur du bus nous a indiqué le bon arrêt.",
    "pt": "O motorista do autocarro indicou-nos a paragem certa."
   },
   {
    "fr": "Notre hôtel se trouvait juste à côté de la marina.",
    "pt": "O nosso hotel ficava mesmo ao lado da marina."
   },
   {
    "fr": "La réceptionniste nous a donné un plan de la vieille ville.",
    "pt": "A rececionista deu-nos um mapa da cidade velha."
   },
   {
    "fr": "On a posé nos valises et on est tout de suite ressortis.",
    "pt": "Deixámos as malas e saímos logo."
   },
   {
    "fr": "Les rues pavées de la vieille ville étaient très calmes.",
    "pt": "As ruas calcetadas da cidade velha estavam muito calmas."
   },
   {
    "fr": "Pour le premier soir, on a dîné sur une terrasse près du port.",
    "pt": "Na primeira noite, jantámos numa esplanada perto do porto."
   },
   {
    "fr": "Ce séjour dans le sud commence vraiment bien.",
    "pt": "Esta estadia no sul está a começar muito bem."
   }
  ]
 },
 {
  "title": "Promenade dans Tavira",
  "phrases": [
   {
    "fr": "Ce matin, on s'est promenés le long de la rivière à Tavira.",
    "pt": "Hoje de manhã, passeámos ao longo do rio em Tavira."
   },
   {
    "fr": "Le vieux pont romain traverse le Gilão au cœur de la ville.",
    "pt": "A velha ponte romana atravessa o Gilão no centro da cidade."
   },
   {
    "fr": "Les maisons blanches ont des toits en forme de pyramide.",
    "pt": "As casas brancas têm telhados em forma de pirâmide."
   },
   {
    "fr": "On a compté plus de vingt églises dans cette petite ville.",
    "pt": "Contámos mais de vinte igrejas nesta pequena cidade."
   },
   {
    "fr": "Du haut du château, on voyait toute la ville et la mer.",
    "pt": "Do alto do castelo, víamos a cidade toda e o mar."
   },
   {
    "fr": "Une vieille dame arrosait ses fleurs à la fenêtre.",
    "pt": "Uma senhora de idade estava a regar as flores à janela."
   },
   {
    "fr": "On s'est arrêtés dans une pâtisserie pour prendre un café.",
    "pt": "Parámos numa pastelaria para tomar um café."
   },
   {
    "fr": "J'ai goûté un petit gâteau aux amandes et à la figue.",
    "pt": "Provei um bolinho de amêndoa e figo."
   },
   {
    "fr": "Il faisait tellement chaud qu'on marchait à l'ombre.",
    "pt": "Estava tanto calor que andávamos à sombra."
   },
   {
    "fr": "Tavira est encore plus charmante que je ne l'imaginais.",
    "pt": "Tavira é ainda mais encantadora do que eu imaginava."
   }
  ]
 },
 {
  "title": "Les falaises de Ponta da Piedade",
  "phrases": [
   {
    "fr": "On vient d'arriver au phare de Ponta da Piedade.",
    "pt": "Acabámos de chegar ao farol da Ponta da Piedade."
   },
   {
    "fr": "Les falaises dorées tombent à pic dans la mer.",
    "pt": "As falésias douradas caem a pique sobre o mar."
   },
   {
    "fr": "Un escalier en bois descend jusqu'aux rochers.",
    "pt": "Uma escadaria de madeira desce até às rochas."
   },
   {
    "fr": "Je viens de compter presque deux cents marches.",
    "pt": "Acabei de contar quase duzentos degraus."
   },
   {
    "fr": "L'eau est d'un vert incroyablement transparent.",
    "pt": "A água é de um verde incrivelmente transparente."
   },
   {
    "fr": "Une petite barque vient de passer sous une arche de pierre.",
    "pt": "Um barquinho acabou de passar por baixo de um arco de pedra."
   },
   {
    "fr": "Les pêcheurs de Lagos proposent des tours dans les grottes.",
    "pt": "Os pescadores de Lagos fazem passeios às grutas."
   },
   {
    "fr": "Malheureusement, le dernier bateau vient de partir.",
    "pt": "Infelizmente, o último barco acabou de sair."
   },
   {
    "fr": "On reviendra demain matin, quand la mer sera plus calme.",
    "pt": "Voltamos amanhã de manhã, quando o mar estiver mais calmo."
   },
   {
    "fr": "C'est la plus belle côte que j'aie jamais vue.",
    "pt": "É a costa mais bonita que já vi."
   }
  ],
  "tip": {
   "title": "« Acabar de » + infinitif : venir de",
   "example": "Je viens de compter presque deux cents marches. — <b>Acabei de</b> contar quase duzentos degraus.",
   "body": "Pour dire « venir de faire quelque chose », le portugais n'utilise pas le verbe « vir » mais « acabar de » + infinitif. Au Portugal, on le met très souvent au passé : « Acabei de chegar » (je viens d'arriver), « Acabámos de jantar » (nous venons de dîner). Le présent « Acabo de saber » existe aussi, avec une nuance un peu plus soutenue."
  }
 },
 {
  "title": "Le marché d'Olhão",
  "phrases": [
   {
    "fr": "Le samedi, le marché d'Olhão est plein de monde dès sept heures.",
    "pt": "Ao sábado, o mercado de Olhão está cheio de gente logo às sete horas."
   },
   {
    "fr": "Les deux grandes halles en brique rouge font face à la Ria.",
    "pt": "Os dois grandes edifícios de tijolo vermelho estão virados para a Ria."
   },
   {
    "fr": "L'une est réservée au poisson, l'autre aux fruits et légumes.",
    "pt": "Um é para o peixe, o outro para a fruta e os legumes."
   },
   {
    "fr": "Les poissonnières criaient le prix des sardines.",
    "pt": "As peixeiras gritavam o preço das sardinhas."
   },
   {
    "fr": "Combien coûte un kilo de palourdes ?",
    "pt": "Quanto custa um quilo de amêijoas?"
   },
   {
    "fr": "Le vendeur m'a fait goûter des figues sèches.",
    "pt": "O vendedor deu-me a provar figos secos."
   },
   {
    "fr": "J'ai acheté du fromage de chèvre et un pot de miel.",
    "pt": "Comprei queijo de cabra e um frasco de mel."
   },
   {
    "fr": "Ça fait neuf euros et cinquante en tout.",
    "pt": "São nove euros e cinquenta ao todo."
   },
   {
    "fr": "Vous acceptez la carte bancaire ici ?",
    "pt": "Aceitam cartão aqui?"
   },
   {
    "fr": "On a pique-niqué sur le quai avec nos achats du marché.",
    "pt": "Fizemos um piquenique no cais com as compras do mercado."
   }
  ]
 },
 {
  "title": "Une journée de plage à Comporta",
  "phrases": [
   {
    "fr": "La plage de Comporta est plus grande que celle de Lagos.",
    "pt": "A praia da Comporta é maior do que a de Lagos."
   },
   {
    "fr": "Ici, l'eau est plus froide que dans l'Algarve.",
    "pt": "Aqui a água é mais fria do que no Algarve."
   },
   {
    "fr": "Mais il y a beaucoup moins de monde sur le sable.",
    "pt": "Mas há muito menos gente na areia."
   },
   {
    "fr": "Ce sable blanc est plus fin que celui d'hier.",
    "pt": "Esta areia branca é mais fina do que a de ontem."
   },
   {
    "fr": "Le vent est pire l'après-midi, il vaut mieux venir le matin.",
    "pt": "O vento é pior à tarde, é melhor vir de manhã."
   },
   {
    "fr": "Ce restaurant de plage est meilleur que celui d'à côté.",
    "pt": "Este restaurante de praia é melhor do que o do lado."
   },
   {
    "fr": "Les rizières derrière les dunes sont magnifiques.",
    "pt": "Os arrozais atrás das dunas são lindíssimos."
   },
   {
    "fr": "N'oublie pas de remettre de la crème solaire.",
    "pt": "Não te esqueças de pôr outra vez protetor solar."
   },
   {
    "fr": "J'ai pris un coup de soleil pire que l'an dernier.",
    "pt": "Apanhei um escaldão pior do que no ano passado."
   },
   {
    "fr": "C'était la meilleure journée de plage de nos vacances.",
    "pt": "Foi o melhor dia de praia das nossas férias."
   }
  ],
  "tip": {
   "title": "Les comparatifs « mais… do que », « melhor », « pior »",
   "example": "Ici, l'eau est plus froide que dans l'Algarve. — Aqui a água é <b>mais</b> fria <b>do que</b> no Algarve.",
   "body": "Pour comparer, on utilise « mais… do que » (plus… que) et « menos… do que » (moins… que) : « O comboio é mais rápido do que o autocarro ». Comme en français, « bom » et « mau » ont des formes irrégulières : « melhor » (meilleur, mieux) et « pior » (pire) : « Este café é melhor do que aquele ». « Grande » donne aussi « maior » : « A praia é maior do que a de ontem »."
  }
 },
 {
  "title": "En kayak jusqu'à la grotte de Benagil",
  "phrases": [
   {
    "fr": "On a loué deux kayaks sur la plage de Benagil.",
    "pt": "Alugámos dois caiaques na praia de Benagil."
   },
   {
    "fr": "Le moniteur nous a distribué des gilets de sauvetage.",
    "pt": "O monitor deu-nos coletes salva-vidas."
   },
   {
    "fr": "Il faut ramer une dizaine de minutes jusqu'à la grotte.",
    "pt": "É preciso remar uns dez minutos até à gruta."
   },
   {
    "fr": "Les vagues étaient un peu plus fortes que prévu.",
    "pt": "As ondas estavam um bocado mais fortes do que o previsto."
   },
   {
    "fr": "On est entrés dans la grotte en même temps qu'un groupe d'enfants.",
    "pt": "Entrámos na gruta ao mesmo tempo que um grupo de miúdos."
   },
   {
    "fr": "La lumière tombait par un grand trou dans la voûte.",
    "pt": "A luz entrava por um grande buraco no teto."
   },
   {
    "fr": "Tout le monde levait la tête, bouche bée.",
    "pt": "Toda a gente olhava para cima, de boca aberta."
   },
   {
    "fr": "Mon téléphone est resté au sec dans un sac étanche.",
    "pt": "O meu telemóvel ficou seco num saco estanque."
   },
   {
    "fr": "Au retour, j'avais mal aux bras et aux épaules.",
    "pt": "No regresso, doíam-me os braços e os ombros."
   },
   {
    "fr": "Ça valait vraiment la peine de se lever si tôt.",
    "pt": "Valeu mesmo a pena acordar tão cedo."
   }
  ]
 },
 {
  "title": "Un cours de surf à Sagres",
  "phrases": [
   {
    "fr": "J'ai pris mon tout premier cours de surf à Sagres.",
    "pt": "Tive a minha primeira aula de surf em Sagres."
   },
   {
    "fr": "L'école nous a prêté une combinaison et une planche.",
    "pt": "A escola emprestou-nos um fato de surf e uma prancha."
   },
   {
    "fr": "On a d'abord répété les mouvements sur le sable.",
    "pt": "Primeiro treinámos os movimentos na areia."
   },
   {
    "fr": "La monitrice répétait : « Rame, rame, et lève-toi ! »",
    "pt": "A professora repetia: «Rema, rema, e levanta-te!»"
   },
   {
    "fr": "L'eau de l'Atlantique était vraiment glacée ce matin-là.",
    "pt": "A água do Atlântico estava mesmo gelada nessa manhã."
   },
   {
    "fr": "Je suis tombé au moins quinze fois.",
    "pt": "Caí pelo menos quinze vezes."
   },
   {
    "fr": "À la fin, j'ai réussi à tenir debout quelques secondes.",
    "pt": "No fim, consegui ficar de pé uns segundos."
   },
   {
    "fr": "Les autres élèves m'ont applaudi depuis la plage.",
    "pt": "Os outros alunos aplaudiram-me da praia."
   },
   {
    "fr": "Après le cours, on avait une faim de loup.",
    "pt": "Depois da aula, estávamos cheios de fome."
   },
   {
    "fr": "Je crois que je vais m'inscrire pour toute la semaine.",
    "pt": "Acho que me vou inscrever para a semana toda."
   }
  ]
 },
 {
  "title": "Randonnée sur la Rota Vicentina",
  "phrases": [
   {
    "fr": "Aujourd'hui, on marche sur un tronçon de la Rota Vicentina, près de Vila Nova de Milfontes.",
    "pt": "Hoje vamos caminhar num troço da Rota Vicentina, perto de Vila Nova de Milfontes."
   },
   {
    "fr": "Le sentier des pêcheurs longe le haut des falaises.",
    "pt": "O Trilho dos Pescadores segue pelo alto das falésias."
   },
   {
    "fr": "Excusez-moi, c'est par où pour Almograve ?",
    "pt": "Desculpe, para Almograve é por onde?"
   },
   {
    "fr": "Suivez les marques bleues et vertes.",
    "pt": "Siga as marcas azuis e verdes."
   },
   {
    "fr": "Après la petite plage, tournez à gauche.",
    "pt": "Depois da pequena praia, vire à esquerda."
   },
   {
    "fr": "Si vous êtes fatigué, prenez le bus au village.",
    "pt": "Se estiver cansado, apanhe o autocarro na aldeia."
   },
   {
    "fr": "Remplissez votre gourde à la fontaine du village.",
    "pt": "Encha o cantil na fonte da aldeia."
   },
   {
    "fr": "Le sable rend la marche beaucoup plus difficile.",
    "pt": "A areia torna a caminhada muito mais difícil."
   },
   {
    "fr": "On a vu des cigognes faire leur nid sur les rochers face à la mer.",
    "pt": "Vimos cegonhas a fazer o ninho nas rochas junto ao mar."
   },
   {
    "fr": "Au bout de vingt kilomètres, nos pieds n'en pouvaient plus.",
    "pt": "Ao fim de vinte quilómetros, os nossos pés já não aguentavam mais."
   }
  ],
  "tip": {
   "title": "L'impératif poli : « Siga », « Vire », « Apanhe »",
   "example": "Après la petite plage, tournez à gauche. — Depois da pequena praia, <b>vire</b> à esquerda.",
   "body": "Pour s'adresser poliment à quelqu'un (le « vous » de politesse), on part de la 1re personne du présent et on change la voyelle finale : « sigo » → « siga », « viro » → « vire », « apanho » → « apanhe ». C'est la forme des indications dans la rue : « Siga em frente », « Vire à direita », « Apanhe o autocarro ». Au pluriel, on ajoute un -m : « Sigam », « Virem ». Notez qu'au Portugal, on « apanha » un bus ou un train."
  }
 },
 {
  "title": "Le cap Saint-Vincent au coucher du soleil",
  "phrases": [
   {
    "fr": "Le cap Saint-Vincent est la pointe sud-ouest de l'Europe continentale.",
    "pt": "O Cabo de São Vicente é a ponta sudoeste da Europa continental."
   },
   {
    "fr": "Autrefois, les marins croyaient que le monde s'arrêtait ici.",
    "pt": "Antigamente, os marinheiros achavam que o mundo acabava aqui."
   },
   {
    "fr": "Le vent soufflait si fort qu'on avait du mal à avancer.",
    "pt": "O vento soprava com tanta força que mal conseguíamos andar."
   },
   {
    "fr": "Un vendeur proposait des pulls en laine près du parking.",
    "pt": "Um vendedor vendia camisolas de lã perto do parque de estacionamento."
   },
   {
    "fr": "J'en ai acheté un parce que je grelottais.",
    "pt": "Comprei uma porque estava cheio de frio."
   },
   {
    "fr": "Ce phare est l'un des plus puissants du pays.",
    "pt": "Este farol é um dos mais potentes do país."
   },
   {
    "fr": "Des centaines de personnes attendaient le coucher du soleil.",
    "pt": "Centenas de pessoas esperavam pelo pôr do sol."
   },
   {
    "fr": "Quand le soleil a disparu, tout le monde a applaudi.",
    "pt": "Quando o sol desapareceu, toda a gente bateu palmas."
   },
   {
    "fr": "Ensuite, on a mangé du poisson grillé à Sagres.",
    "pt": "Depois, jantámos peixe grelhado em Sagres."
   },
   {
    "fr": "Ce moment restera gravé dans ma mémoire.",
    "pt": "Este momento vai ficar gravado na minha memória."
   }
  ]
 },
 {
  "title": "En bateau dans la Ria Formosa",
  "phrases": [
   {
    "fr": "On a pris le bateau pour l'île de Culatra au départ d'Olhão.",
    "pt": "Apanhámos o barco para a ilha da Culatra a partir de Olhão."
   },
   {
    "fr": "La traversée dure environ quarante minutes.",
    "pt": "A travessia demora cerca de quarenta minutos."
   },
   {
    "fr": "La Ria Formosa est une lagune protégée pleine d'oiseaux.",
    "pt": "A Ria Formosa é uma lagoa protegida cheia de aves."
   },
   {
    "fr": "Le guide nous a montré des flamants roses au loin.",
    "pt": "O guia mostrou-nos flamingos ao longe."
   },
   {
    "fr": "À marée basse, des gens ramassaient des palourdes dans la vase.",
    "pt": "Na maré baixa, havia pessoas a apanhar amêijoas no lodo."
   },
   {
    "fr": "Il n'y a pas de voitures sur l'île, seulement des chemins de sable.",
    "pt": "Não há carros na ilha, só caminhos de areia."
   },
   {
    "fr": "Les maisons des pêcheurs sont peintes de couleurs vives.",
    "pt": "As casas dos pescadores estão pintadas de cores vivas."
   },
   {
    "fr": "On a nagé dans une eau calme et tiède.",
    "pt": "Nadámos numa água calma e morna."
   },
   {
    "fr": "Attention, le dernier bateau repart à sept heures et demie.",
    "pt": "Atenção, o último barco sai às sete e meia."
   },
   {
    "fr": "Sur le chemin du retour, le ciel est devenu tout orange.",
    "pt": "No caminho de volta, o céu ficou todo cor de laranja."
   }
  ]
 },
 {
  "title": "Un dîner de cataplana à Lagos",
  "phrases": [
   {
    "fr": "Ce soir, on dîne dans une petite taverne près du port de Lagos.",
    "pt": "Esta noite vamos jantar numa tasca junto ao porto de Lagos."
   },
   {
    "fr": "Le serveur nous a apporté du pain, des olives et du beurre.",
    "pt": "O empregado trouxe-nos pão, azeitonas e manteiga."
   },
   {
    "fr": "Attention, ces petites entrées ne sont pas gratuites.",
    "pt": "Atenção, estas entradas não são grátis."
   },
   {
    "fr": "On a commandé une cataplana de poisson pour deux.",
    "pt": "Pedimos uma cataplana de peixe para duas pessoas."
   },
   {
    "fr": "Elle arrive dans une casserole en cuivre fermée comme un coquillage.",
    "pt": "Chega num tacho de cobre fechado como uma concha."
   },
   {
    "fr": "Quand le serveur l'a ouverte, ça sentait merveilleusement bon.",
    "pt": "Quando o empregado a abriu, cheirava maravilhosamente."
   },
   {
    "fr": "Mon amie a préféré l'arroz de marisco.",
    "pt": "A minha amiga preferiu o arroz de marisco."
   },
   {
    "fr": "Le riz était bien crémeux, comme on le fait ici.",
    "pt": "O arroz vinha bem malandrinho, como se faz cá."
   },
   {
    "fr": "Pour le dessert, on a partagé un gâteau à la caroube.",
    "pt": "Para sobremesa, partilhámos um bolo de alfarroba."
   },
   {
    "fr": "L'addition, s'il vous plaît, et un café pour moi.",
    "pt": "A conta, por favor, e um café para mim."
   }
  ]
 },
 {
  "title": "Évora : le temple romain et la chapelle des os",
  "phrases": [
   {
    "fr": "On est arrivés à Évora en fin de matinée.",
    "pt": "Chegámos a Évora ao fim da manhã."
   },
   {
    "fr": "Le temple romain est encore debout après deux mille ans.",
    "pt": "O templo romano ainda está de pé passados dois mil anos."
   },
   {
    "fr": "Tu as déjà visité la chapelle des os ?",
    "pt": "Já visitaste a Capela dos Ossos?"
   },
   {
    "fr": "Non, pas encore, j'y vais cet après-midi.",
    "pt": "Não, ainda não, vou lá esta tarde."
   },
   {
    "fr": "À l'entrée, une inscription s'adresse directement aux visiteurs.",
    "pt": "À entrada, há uma inscrição dirigida aos visitantes."
   },
   {
    "fr": "« Nous, les os qui sommes ici, nous attendons les vôtres. »",
    "pt": "«Nós, ossos que aqui estamos, pelos vossos esperamos.»"
   },
   {
    "fr": "J'en ai eu des frissons.",
    "pt": "Fiquei todo arrepiado."
   },
   {
    "fr": "Les étudiants remplissaient déjà les terrasses du centre.",
    "pt": "Os estudantes já enchiam as esplanadas do centro."
   },
   {
    "fr": "Au déjeuner, on a mangé des migas avec du porc.",
    "pt": "Ao almoço, comemos migas com carne de porco."
   },
   {
    "fr": "Il nous reste encore une journée pour visiter les environs.",
    "pt": "Ainda temos mais um dia para conhecer os arredores."
   }
  ],
  "tip": {
   "title": "« Já » et « ainda » : déjà et encore",
   "example": "Tu as déjà visité la chapelle des os ? — <b>Já</b> visitaste a Capela dos Ossos?",
   "body": "« Já » signifie « déjà » et se place en général devant le verbe : « Já visitaste? » (tu as déjà visité ?). « Ainda » veut dire « encore, toujours » : « Ainda está de pé » (il est toujours debout). Attention aux combinaisons : « ainda não » = pas encore, et « já não » = ne… plus : « Já não chove ». Ces deux mots attirent le pronom devant le verbe : « Já me disseram », « Ainda o tenho »."
  }
 },
 {
  "title": "Monsaraz et le vin de l'Alentejo",
  "phrases": [
   {
    "fr": "Monsaraz est un village fortifié perché sur une colline.",
    "pt": "Monsaraz é uma aldeia fortificada no alto de um monte."
   },
   {
    "fr": "Ses ruelles en schiste n'ont presque pas changé depuis des siècles.",
    "pt": "As ruas de xisto quase não mudaram ao longo dos séculos."
   },
   {
    "fr": "D'en haut, on voit l'immense lac d'Alqueva.",
    "pt": "Lá de cima, vê-se o enorme lago do Alqueva."
   },
   {
    "fr": "L'après-midi, on a visité une cave près de Reguengos.",
    "pt": "À tarde, visitámos uma adega perto de Reguengos."
   },
   {
    "fr": "Le vigneron nous a expliqué comment on fait le vin en jarre d'argile.",
    "pt": "O produtor explicou-nos como se faz o vinho de talha."
   },
   {
    "fr": "Ici, on le fait encore comme à l'époque des Romains.",
    "pt": "Aqui ainda se faz como no tempo dos romanos."
   },
   {
    "fr": "J'ai trouvé le rouge plus rond que le blanc.",
    "pt": "Achei o tinto mais redondo do que o branco."
   },
   {
    "fr": "On a acheté deux bouteilles pour les rapporter chez nous.",
    "pt": "Comprámos duas garrafas para levar para casa."
   },
   {
    "fr": "Le soir, des hommes chantaient du cante alentejano au café du village.",
    "pt": "À noite, um grupo de homens cantava cante alentejano no café da aldeia."
   },
   {
    "fr": "On a dormi dans une maison d'hôtes à l'intérieur des remparts.",
    "pt": "Ficámos numa casa de turismo rural dentro das muralhas."
   }
  ]
 },
 {
  "title": "Un échange de langues à l'auberge",
  "phrases": [
   {
    "fr": "Notre auberge de jeunesse organise un échange de langues le mardi soir.",
    "pt": "A nossa pousada da juventude organiza um intercâmbio de línguas à terça à noite."
   },
   {
    "fr": "Chacun parle sa langue pendant une demi-heure, puis on inverse.",
    "pt": "Cada um fala a sua língua durante meia hora, e depois trocamos."
   },
   {
    "fr": "Je me suis assis à côté d'une étudiante de Beja.",
    "pt": "Sentei-me ao lado de uma estudante de Beja."
   },
   {
    "fr": "Elle voulait améliorer son français avant de partir en stage.",
    "pt": "Ela queria melhorar o francês antes de ir fazer um estágio."
   },
   {
    "fr": "De mon côté, j'avais du mal avec les sons nasaux du portugais.",
    "pt": "Da minha parte, tinha dificuldade com os sons nasais do português."
   },
   {
    "fr": "Elle m'a appris à prononcer « pão » correctement.",
    "pt": "Ensinou-me a dizer «pão» como deve ser."
   },
   {
    "fr": "On a ri de nos erreurs pendant toute la soirée.",
    "pt": "Rimo-nos dos nossos erros a noite toda."
   },
   {
    "fr": "Un pêcheur du coin m'a appris quelques expressions alentejanas.",
    "pt": "Um pescador da terra ensinou-me umas expressões alentejanas."
   },
   {
    "fr": "On a échangé nos numéros pour continuer par message.",
    "pt": "Trocámos números para continuar por mensagem."
   },
   {
    "fr": "J'ai l'impression d'avoir plus progressé ce soir qu'en un mois.",
    "pt": "Sinto que aprendi mais esta noite do que num mês inteiro."
   }
  ]
 },
 {
  "title": "Un bus de nuit vers l'Algarve",
  "phrases": [
   {
    "fr": "On a pris le dernier bus de la journée pour rejoindre Lagos.",
    "pt": "Apanhámos o último autocarro do dia para ir para Lagos."
   },
   {
    "fr": "Le départ était prévu à onze heures du soir.",
    "pt": "A partida estava marcada para as onze da noite."
   },
   {
    "fr": "J'ai acheté le billet au guichet de la gare routière.",
    "pt": "Comprei o bilhete na bilheteira do terminal rodoviário."
   },
   {
    "fr": "Le chauffeur a rangé nos sacs à dos dans la soute.",
    "pt": "O motorista arrumou as nossas mochilas na bagageira."
   },
   {
    "fr": "Pardon, cette place est occupée ?",
    "pt": "Desculpe, este lugar está ocupado?"
   },
   {
    "fr": "Mon voisin ronflait et je n'arrivais pas à dormir.",
    "pt": "O senhor ao meu lado ressonava e eu não conseguia dormir."
   },
   {
    "fr": "On s'est arrêtés vingt minutes sur une aire de service.",
    "pt": "Parámos vinte minutos numa área de serviço."
   },
   {
    "fr": "J'en ai profité pour boire un café et me dégourdir les jambes.",
    "pt": "Aproveitei para beber um café e esticar as pernas."
   },
   {
    "fr": "Dehors, on ne voyait que des oliviers sous la lune.",
    "pt": "Lá fora, só se viam oliveiras ao luar."
   },
   {
    "fr": "On est arrivés à l'aube, complètement épuisés.",
    "pt": "Chegámos de madrugada, completamente estoirados."
   }
  ]
 },
 {
  "title": "Une grève des transports",
  "phrases": [
   {
    "fr": "Ce matin, il y a une grève des transports dans toute la région.",
    "pt": "Hoje de manhã há uma greve dos transportes em toda a região."
   },
   {
    "fr": "Le bus pour Mértola ne passera pas aujourd'hui.",
    "pt": "O autocarro para Mértola hoje não passa."
   },
   {
    "fr": "On a attendu à l'arrêt pendant plus d'une heure.",
    "pt": "Esperámos na paragem durante mais de uma hora."
   },
   {
    "fr": "Un monsieur nous a expliqué que la grève était pour de meilleurs salaires.",
    "pt": "Um senhor explicou-nos que a greve era por melhores salários."
   },
   {
    "fr": "On a décidé de partager un taxi avec un couple de Faro.",
    "pt": "Decidimos partilhar um táxi com um casal de Faro."
   },
   {
    "fr": "Le chauffeur est passé par les petites routes de l'intérieur pour éviter les travaux.",
    "pt": "O taxista passou por estradinhas do interior para fugir às obras."
   },
   {
    "fr": "Le trajet nous a coûté trente euros par personne.",
    "pt": "A viagem custou-nos trinta euros por pessoa."
   },
   {
    "fr": "Ce n'est pas cher pour une course aussi longue.",
    "pt": "Não é caro para uma viagem tão longa."
   },
   {
    "fr": "On a remercié le chauffeur pour sa patience.",
    "pt": "Agradecemos ao taxista pela paciência."
   },
   {
    "fr": "Finalement, on est arrivés à Mértola juste à temps pour goûter une açorda.",
    "pt": "Afinal, chegámos a Mértola mesmo a tempo para provar uma açorda."
   }
  ],
  "tip": {
   "title": "« Por » ou « para » ?",
   "example": "Le chauffeur est passé par les petites routes de l'intérieur pour éviter les travaux. — O taxista passou <b>por</b> estradinhas do interior <b>para</b> fugir às obras.",
   "body": "« Para » indique le but, la destination ou le destinataire : « o autocarro para Mértola », « para fugir às obras », « um café para mim ». « Por » exprime le passage, la cause, l'échange ou la répartition : « passar por », « trinta euros por pessoa », « obrigado pela paciência ». Avec l'article, « por » se contracte en « pelo, pela, pelos, pelas »."
  }
 },
 {
  "title": "Un passeport égaré à Mértola",
  "phrases": [
   {
    "fr": "Je ne trouve mon passeport nulle part.",
    "pt": "Não encontro o meu passaporte em lado nenhum."
   },
   {
    "fr": "Je l'avais encore hier soir à la pension.",
    "pt": "Ainda o tinha ontem à noite na pensão."
   },
   {
    "fr": "J'ai vidé mon sac à dos trois fois.",
    "pt": "Esvaziei a mochila três vezes."
   },
   {
    "fr": "La patronne de la pension a fouillé la chambre avec moi.",
    "pt": "A dona da pensão procurou comigo no quarto."
   },
   {
    "fr": "Il faut déclarer la perte au poste de police.",
    "pt": "É preciso participar a perda na esquadra da polícia."
   },
   {
    "fr": "L'agent a rempli un formulaire avec mes coordonnées.",
    "pt": "O agente preencheu um formulário com os meus dados."
   },
   {
    "fr": "Il m'a remis une déclaration de perte à garder sur moi.",
    "pt": "Deu-me uma declaração de perda para andar comigo."
   },
   {
    "fr": "Ensuite, j'ai appelé le consulat pour un document provisoire.",
    "pt": "Depois, liguei para o consulado por causa de um documento provisório."
   },
   {
    "fr": "Deux heures plus tard, le restaurant de la veille m'a téléphoné.",
    "pt": "Duas horas depois, telefonaram-me do restaurante da véspera."
   },
   {
    "fr": "Mon passeport était tombé sous la table où on avait dîné !",
    "pt": "O meu passaporte tinha caído debaixo da mesa onde jantámos!"
   }
  ]
 },
 {
  "title": "Au frais dans la serra de Monchique",
  "phrases": [
   {
    "fr": "Pour fuir la chaleur, on est montés dans la serra de Monchique.",
    "pt": "Para fugir ao calor, subimos à Serra de Monchique."
   },
   {
    "fr": "La route tourne sans arrêt entre les eucalyptus et les chênes-lièges.",
    "pt": "A estrada faz curvas sem parar entre eucaliptos e sobreiros."
   },
   {
    "fr": "Au sommet de la Fóia, il faisait bien plus frais que sur la côte.",
    "pt": "No alto da Fóia, estava muito mais fresco do que na costa."
   },
   {
    "fr": "Par temps clair, on peut voir jusqu'à la mer.",
    "pt": "Com o céu limpo, consegue-se ver até ao mar."
   },
   {
    "fr": "Au village, on a goûté une eau-de-vie d'arbouse.",
    "pt": "Na vila, provámos aguardente de medronho."
   },
   {
    "fr": "C'était tellement fort que je me suis mis à tousser.",
    "pt": "Era tão forte que comecei a tossir."
   },
   {
    "fr": "Le patron du café la distille lui-même chaque automne.",
    "pt": "O dono do café destila-a ele próprio todos os outonos."
   },
   {
    "fr": "Les thermes de Caldas de Monchique sont tout près d'ici.",
    "pt": "As termas das Caldas de Monchique ficam aqui pertinho."
   },
   {
    "fr": "Une pause à l'ombre des arbres nous a fait beaucoup de bien.",
    "pt": "Uma pausa à sombra das árvores soube-nos muito bem."
   },
   {
    "fr": "Demain matin, on redescendra vers la côte.",
    "pt": "Amanhã de manhã, voltamos a descer para a costa."
   }
  ]
 },
 {
  "title": "Les derniers souvenirs",
  "phrases": [
   {
    "fr": "Avant de partir, on doit encore acheter quelques souvenirs.",
    "pt": "Antes de partir, ainda temos de comprar umas lembranças."
   },
   {
    "fr": "Dans cette boutique, tout est fabriqué en liège.",
    "pt": "Nesta loja, é tudo feito de cortiça."
   },
   {
    "fr": "Ce sac en liège est léger et très résistant.",
    "pt": "Esta mala de cortiça é leve e muito resistente."
   },
   {
    "fr": "Je vais prendre ces deux azulejos pour ma mère.",
    "pt": "Vou levar estes dois azulejos para a minha mãe."
   },
   {
    "fr": "Vous pourriez me les emballer séparément ?",
    "pt": "Podia embrulhá-los em separado?"
   },
   {
    "fr": "Pour mon frère, j'ai trouvé une boîte de sardines au look rétro.",
    "pt": "Para o meu irmão, encontrei uma lata de sardinhas com um ar antigo."
   },
   {
    "fr": "La fleur de sel de Tavira fait un joli cadeau qui ne coûte pas cher.",
    "pt": "A flor de sal de Tavira é uma boa prenda e não é cara."
   },
   {
    "fr": "Il me reste encore un peu de place dans la valise, mais pas beaucoup.",
    "pt": "Ainda me sobra algum espaço na mala, mas pouco."
   },
   {
    "fr": "Le vendeur m'a offert un sachet d'amandes caramélisées.",
    "pt": "O vendedor ofereceu-me um saquinho de amêndoas caramelizadas."
   },
   {
    "fr": "Chaque objet me rappellera un moment de ce voyage.",
    "pt": "Cada objeto vai lembrar-me um momento desta viagem."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a fait découvrir le sud du Portugal, de l'Algarve à l'Alentejo.",
    "pt": "Este módulo levou-nos a descobrir o sul de Portugal, do Algarve ao Alentejo."
   },
   {
    "fr": "On sait maintenant demander son chemin et comprendre la réponse.",
    "pt": "Agora já sabemos pedir indicações e perceber a resposta."
   },
   {
    "fr": "Les verbes au passé sortent de plus en plus naturellement.",
    "pt": "Os verbos no passado saem cada vez com mais naturalidade."
   },
   {
    "fr": "On fait encore des erreurs, mais elles ne nous font plus peur.",
    "pt": "Ainda damos erros, mas já não nos assustam."
   },
   {
    "fr": "« Por » et « para » sont un peu moins mystérieux qu'au début.",
    "pt": "«Por» e «para» são um pouco menos misteriosos do que no início."
   },
   {
    "fr": "Chaque imprévu du voyage nous a fait progresser en portugais.",
    "pt": "Cada imprevisto da viagem fez-nos avançar no português."
   },
   {
    "fr": "On ose davantage parler avec les gens qu'on rencontre.",
    "pt": "Temos mais coragem para falar com as pessoas que conhecemos."
   },
   {
    "fr": "Bravo pour tout le chemin parcouru dans ce module.",
    "pt": "Parabéns por todo o caminho percorrido neste módulo."
   },
   {
    "fr": "Prends le temps de réécouter tes leçons préférées.",
    "pt": "Tira tempo para voltar a ouvir as tuas lições preferidas."
   },
   {
    "fr": "Le prochain module nous attend avec de nouvelles conversations.",
    "pt": "O próximo módulo espera-nos com novas conversas."
   }
  ]
 }
];

const level2Module3Lessons = [
 {
  "title": "Discuter de l'actualité",
  "phrases": [
   {
    "fr": "Tu as lu le journal ce matin au café ?",
    "pt": "Leste o jornal hoje de manhã no café?"
   },
   {
    "fr": "Oui, on parle beaucoup des nouveaux travaux du métro de Porto.",
    "pt": "Sim, fala-se muito das novas obras do metro do Porto."
   },
   {
    "fr": "Il paraît que la ligne va arriver jusqu'à la Foz.",
    "pt": "Parece que a linha vai chegar até à Foz."
   },
   {
    "fr": "Ce serait pratique pour les gens du quartier.",
    "pt": "Seria prático para as pessoas do bairro."
   },
   {
    "fr": "Mais les travaux vont durer au moins deux ans.",
    "pt": "Mas as obras vão durar pelo menos dois anos."
   },
   {
    "fr": "Le patron de la tasca n'arrêtait pas d'en parler.",
    "pt": "O dono da tasca não parava de falar disso."
   },
   {
    "fr": "Lui, il pense surtout aux clients qu'il va perdre.",
    "pt": "Ele pensa sobretudo nos clientes que vai perder."
   },
   {
    "fr": "Bon, on verra bien comment ça se termine.",
    "pt": "Bem, logo se vê como acaba."
   },
   {
    "fr": "Tu as entendu parler de la grève des bus ?",
    "pt": "Ouviste falar da greve dos autocarros?"
   },
   {
    "fr": "Oui, demain je vais devoir aller au travail à pied.",
    "pt": "Sim, amanhã vou ter de ir a pé para o trabalho."
   }
  ]
 },
 {
  "title": "Donner son avis",
  "phrases": [
   {
    "fr": "À ton avis, quelle est la meilleure tasca du quartier ?",
    "pt": "Na tua opinião, qual é a melhor tasca do bairro?"
   },
   {
    "fr": "Je trouve que celle de la rue d'à côté est la plus authentique.",
    "pt": "Acho que a da rua ao lado é a mais autêntica."
   },
   {
    "fr": "Tu ne trouves pas que le vin est un peu cher ?",
    "pt": "Não achas que o vinho é um bocado caro?"
   },
   {
    "fr": "Je ne crois pas, ça reste raisonnable pour Porto.",
    "pt": "Acho que não, continua a ser razoável para o Porto."
   },
   {
    "fr": "Qu'est-ce que tu penses des francesinhas d'ici ?",
    "pt": "O que é que achas das francesinhas daqui?"
   },
   {
    "fr": "Pour moi, la sauce est un peu trop épicée.",
    "pt": "Para mim, o molho é um bocadinho picante demais."
   },
   {
    "fr": "Je suis d'accord avec toi sur ce point.",
    "pt": "Concordo contigo nesse ponto."
   },
   {
    "fr": "Moi, je vois les choses autrement.",
    "pt": "Eu vejo as coisas de outra maneira."
   },
   {
    "fr": "Chacun ses goûts, après tout.",
    "pt": "Afinal, cada um tem os seus gostos."
   },
   {
    "fr": "En fait, on a raison tous les deux.",
    "pt": "No fundo, temos os dois razão."
   }
  ],
  "tip": {
   "title": "« Achar que » : donner son avis",
   "example": "Je trouve que celle de la rue d'à côté est la plus authentique. — <b>Acho que</b> a da rua ao lado é a mais autêntica.",
   "body": "Au Portugal, le verbe le plus courant pour donner son avis est « achar que » : « acho que » = je trouve que, je pense que. Pour demander l'avis de quelqu'un : « O que é que achas? » (qu'en penses-tu ?). Pour répondre brièvement : « Acho que sim » (je crois que oui), « Acho que não » (je ne crois pas). Plus soutenu : « penso que » ou « na minha opinião »."
  }
 },
 {
  "title": "Changer de travail",
  "phrases": [
   {
    "fr": "Je pense sérieusement à quitter mon poste à la banque.",
    "pt": "Estou a pensar seriamente em deixar o meu emprego no banco."
   },
   {
    "fr": "Depuis quand tu n'es plus heureux là-bas ?",
    "pt": "Desde quando é que deixaste de estar feliz lá?"
   },
   {
    "fr": "Depuis que mon chef a changé, l'ambiance est devenue lourde.",
    "pt": "Desde que o meu chefe mudou, o ambiente ficou pesado."
   },
   {
    "fr": "J'ai reçu une offre d'une entreprise de Matosinhos.",
    "pt": "Recebi uma proposta de uma empresa de Matosinhos."
   },
   {
    "fr": "Le salaire est un peu plus bas, mais les horaires sont meilleurs.",
    "pt": "O ordenado é um pouco mais baixo, mas o horário é melhor."
   },
   {
    "fr": "Et puis je pourrais y aller à vélo par le bord de mer.",
    "pt": "E além disso podia ir de bicicleta pela marginal."
   },
   {
    "fr": "Tu en as déjà parlé à ta femme ?",
    "pt": "Já falaste disso com a tua mulher?"
   },
   {
    "fr": "Oui, elle m'encourage à tenter ma chance.",
    "pt": "Sim, ela incentiva-me a tentar a sorte."
   },
   {
    "fr": "Avant de signer, demande à voir le contrat.",
    "pt": "Antes de assinares, pede para ver o contrato."
   },
   {
    "fr": "Je donnerai ma réponse vendredi.",
    "pt": "Vou dar a minha resposta na sexta-feira."
   }
  ]
 },
 {
  "title": "Parler d'environnement",
  "phrases": [
   {
    "fr": "Tu as vu tout ce plastique sur la plage de Matosinhos ?",
    "pt": "Viste tanto plástico na praia de Matosinhos?"
   },
   {
    "fr": "C'est triste, surtout après une tempête.",
    "pt": "É triste, sobretudo depois de um temporal."
   },
   {
    "fr": "Samedi, une association organise un nettoyage de la plage.",
    "pt": "No sábado, uma associação vai organizar uma limpeza da praia."
   },
   {
    "fr": "Ça te dirait de venir avec moi ?",
    "pt": "Queres vir comigo?"
   },
   {
    "fr": "Moi, je trie mes déchets depuis des années.",
    "pt": "Eu separo o lixo há anos."
   },
   {
    "fr": "Au bureau, on a enfin installé des poubelles de tri.",
    "pt": "No escritório, finalmente puseram ecopontos."
   },
   {
    "fr": "Pour aller en ville, je prends le métro plutôt que la voiture.",
    "pt": "Para ir à Baixa, prefiro apanhar o metro a levar o carro."
   },
   {
    "fr": "Le Douro est plus propre qu'il y a vingt ans.",
    "pt": "O Douro está mais limpo do que há vinte anos."
   },
   {
    "fr": "Mais il reste beaucoup à faire pour protéger la côte.",
    "pt": "Mas ainda há muito a fazer para proteger a costa."
   },
   {
    "fr": "Je crois que chaque petit geste compte.",
    "pt": "Acho que cada pequeno gesto conta."
   }
  ]
 },
 {
  "title": "Le derby de Porto",
  "phrases": [
   {
    "fr": "Tu as regardé le derby entre le FC Porto et Boavista hier soir ?",
    "pt": "Viste o dérbi entre o FC Porto e o Boavista ontem à noite?"
   },
   {
    "fr": "Bien sûr, je l'ai regardé à la tasca avec mes voisins.",
    "pt": "Claro, vi-o na tasca com os meus vizinhos."
   },
   {
    "fr": "Le match était super animé !",
    "pt": "O jogo foi animadíssimo!"
   },
   {
    "fr": "Le stade était plein à craquer.",
    "pt": "O estádio estava cheíssimo."
   },
   {
    "fr": "Le deuxième but était vraiment superbe.",
    "pt": "O segundo golo foi lindíssimo."
   },
   {
    "fr": "Mais l'arbitre a pris des décisions bizarres.",
    "pt": "Mas o árbitro tomou decisões estranhas."
   },
   {
    "fr": "Mon voisin est supporter de Boavista depuis toujours.",
    "pt": "O meu vizinho é do Boavista desde sempre."
   },
   {
    "fr": "Il était déçu, mais il a su perdre.",
    "pt": "Ficou desiludido, mas soube perder."
   },
   {
    "fr": "Pour le prochain derby, on va au stade ensemble ?",
    "pt": "Vamos juntos ao estádio ver o próximo dérbi?"
   },
   {
    "fr": "Les billets sont chers, mais ça vaut le coup.",
    "pt": "Os bilhetes são caros, mas vale a pena."
   }
  ],
  "tip": {
   "title": "Le superlatif en « -íssimo »",
   "example": "Le match était super animé ! — O jogo foi <b>animadíssimo</b>!",
   "body": "Pour dire « très, très » avec emphase, on ajoute « -íssimo » à l'adjectif : animado → animadíssimo, lindo → lindíssimo, cheio → cheíssimo. C'est très vivant à l'oral au Portugal, plus expressif que « muito ». Quelques formes sont irrégulières : fácil → facílimo, difícil → dificílimo."
  }
 },
 {
  "title": "Une série télé",
  "phrases": [
   {
    "fr": "Tu regardes une série en ce moment ?",
    "pt": "Estás a ver alguma série neste momento?"
   },
   {
    "fr": "Oui, une série policière portugaise qui se passe à Porto.",
    "pt": "Sim, uma série policial portuguesa passada no Porto."
   },
   {
    "fr": "On reconnaît plein de rues de la Ribeira.",
    "pt": "Reconhecem-se muitas ruas da Ribeira."
   },
   {
    "fr": "Hier soir, j'ai regardé trois épisodes d'affilée.",
    "pt": "Ontem à noite vi três episódios seguidos."
   },
   {
    "fr": "Je n'arrivais plus à m'arrêter.",
    "pt": "Já não conseguia parar."
   },
   {
    "fr": "Ne me raconte pas la fin, s'il te plaît !",
    "pt": "Não me contes o final, por favor!"
   },
   {
    "fr": "Promis, je ne dis rien.",
    "pt": "Prometo, não digo nada."
   },
   {
    "fr": "Les acteurs jouent vraiment bien.",
    "pt": "Os atores representam mesmo bem."
   },
   {
    "fr": "Elle passe à quelle heure à la télé ?",
    "pt": "A que horas é que dá na televisão?"
   },
   {
    "fr": "Tous les dimanches, à neuf heures et demie du soir.",
    "pt": "Todos os domingos, às nove e meia da noite."
   }
  ]
 },
 {
  "title": "Le fado et la musique portugaise",
  "phrases": [
   {
    "fr": "Hier, on est allés dans une maison de fado près de la Ribeira.",
    "pt": "Ontem fomos a uma casa de fados perto da Ribeira."
   },
   {
    "fr": "Il fallait se taire pendant que la chanteuse chantait.",
    "pt": "Era preciso estar calado enquanto a fadista cantava."
   },
   {
    "fr": "Sa voix m'a donné des frissons.",
    "pt": "A voz dela deu-me arrepios."
   },
   {
    "fr": "Le musicien jouait de la guitare portugaise.",
    "pt": "O músico tocava guitarra portuguesa."
   },
   {
    "fr": "Tu connais les chansons d'Amália Rodrigues ?",
    "pt": "Conheces as canções da Amália Rodrigues?"
   },
   {
    "fr": "Ma grand-mère les écoutait tout le temps à la radio.",
    "pt": "A minha avó ouvia-as sempre na rádio."
   },
   {
    "fr": "Le fado parle souvent de saudade et de la mer.",
    "pt": "O fado fala muitas vezes de saudade e do mar."
   },
   {
    "fr": "Moi, j'écoute aussi beaucoup de musique portugaise moderne.",
    "pt": "Eu também ouço muita música portuguesa moderna."
   },
   {
    "fr": "Il y a un concert gratuit à la Foz ce week-end.",
    "pt": "Há um concerto grátis na Foz este fim de semana."
   },
   {
    "fr": "Ça te dit qu'on y aille ensemble ?",
    "pt": "Apetece-te irmos juntos?"
   }
  ]
 },
 {
  "title": "Conseiller un ami stressé",
  "phrases": [
   {
    "fr": "Tu as l'air fatigué ces derniers temps.",
    "pt": "Andas com ar cansado ultimamente."
   },
   {
    "fr": "Oui, je suis très stressé à cause du travail.",
    "pt": "Sim, ando muito stressado por causa do trabalho."
   },
   {
    "fr": "Tu dors combien d'heures par nuit ?",
    "pt": "Quantas horas dormes por noite?"
   },
   {
    "fr": "Cinq ou six, au maximum.",
    "pt": "Cinco ou seis, no máximo."
   },
   {
    "fr": "Tu devrais prendre quelques jours de congé.",
    "pt": "Devias tirar uns dias de férias."
   },
   {
    "fr": "Pourquoi tu ne vas pas marcher le long de la mer à la Foz ?",
    "pt": "Porque é que não vais caminhar à beira-mar na Foz?"
   },
   {
    "fr": "Moi, ça m'aide toujours à me vider la tête.",
    "pt": "A mim, ajuda-me sempre a desanuviar."
   },
   {
    "fr": "Et arrête de lire tes mails le soir.",
    "pt": "E deixa de ler os e-mails à noite."
   },
   {
    "fr": "Tu as raison, je vais essayer.",
    "pt": "Tens razão, vou tentar."
   },
   {
    "fr": "Si tu as besoin de parler, appelle-moi.",
    "pt": "Se precisares de falar, liga-me."
   }
  ]
 },
 {
  "title": "Entre collègues",
  "phrases": [
   {
    "fr": "On va prendre un café avant la réunion ?",
    "pt": "Vamos tomar um café antes da reunião?"
   },
   {
    "fr": "Volontiers, j'ai besoin d'un petit café serré.",
    "pt": "Pode ser, preciso de uma bica."
   },
   {
    "fr": "Tu as vu le nouveau collègue de la comptabilité ?",
    "pt": "Já viste o novo colega da contabilidade?"
   },
   {
    "fr": "Il vient de Braga et il est très sympathique.",
    "pt": "É de Braga e é muito simpático."
   },
   {
    "fr": "Ce midi, toute l'équipe déjeune dans une tasca de la Baixa.",
    "pt": "Hoje ao almoço, a equipa toda vai comer a uma tasca da Baixa."
   },
   {
    "fr": "Tu viens avec nous ?",
    "pt": "Vens connosco?"
   },
   {
    "fr": "Je ne peux pas, je dois finir ce rapport.",
    "pt": "Não posso, tenho de acabar este relatório."
   },
   {
    "fr": "Le chef nous a demandé de rester plus tard vendredi.",
    "pt": "O chefe pediu-nos para ficarmos até mais tarde na sexta."
   },
   {
    "fr": "Encore ? C'est la troisième fois ce mois-ci !",
    "pt": "Outra vez? É a terceira vez este mês!"
   },
   {
    "fr": "Au moins, il nous paie toujours le dîner.",
    "pt": "Ao menos, paga-nos sempre o jantar."
   }
  ]
 },
 {
  "title": "Les réseaux sociaux",
  "phrases": [
   {
    "fr": "Tu as vu les photos du marché du Bolhão que j'ai publiées ?",
    "pt": "Viste as fotografias do Mercado do Bolhão que publiquei?"
   },
   {
    "fr": "Oui, j'ai mis « j'aime » sur toutes.",
    "pt": "Sim, pus «gosto» em todas."
   },
   {
    "fr": "Je passe trop de temps sur mon téléphone.",
    "pt": "Passo demasiado tempo no telemóvel."
   },
   {
    "fr": "Le soir, je regarde des vidéos pendant des heures.",
    "pt": "À noite, fico horas a ver vídeos."
   },
   {
    "fr": "Moi, j'ai supprimé l'application le mois dernier.",
    "pt": "Eu apaguei a aplicação no mês passado."
   },
   {
    "fr": "Au début, c'était dur, mais maintenant je me sens mieux.",
    "pt": "Ao início foi difícil, mas agora sinto-me melhor."
   },
   {
    "fr": "Je lis davantage et je dors mieux.",
    "pt": "Leio mais e durmo melhor."
   },
   {
    "fr": "Mais comment tu sais ce que font tes amis ?",
    "pt": "Mas como é que sabes o que os teus amigos andam a fazer?"
   },
   {
    "fr": "Je les appelle, tout simplement !",
    "pt": "Telefono-lhes, simplesmente!"
   },
   {
    "fr": "Bonne idée, je devrais essayer moi aussi.",
    "pt": "Boa ideia, eu também devia experimentar."
   }
  ]
 },
 {
  "title": "Parler de bénévolat",
  "phrases": [
   {
    "fr": "Le samedi matin, je fais du bénévolat dans une association.",
    "pt": "Ao sábado de manhã, faço voluntariado numa associação."
   },
   {
    "fr": "Nous distribuons des repas aux personnes sans abri.",
    "pt": "Distribuímos refeições a pessoas sem-abrigo."
   },
   {
    "fr": "Comment est-ce que tu as commencé ?",
    "pt": "Como é que começaste?"
   },
   {
    "fr": "Une amie m'en a parlé il y a deux ans.",
    "pt": "Uma amiga falou-me disso há dois anos."
   },
   {
    "fr": "Au début, j'étais un peu timide.",
    "pt": "Ao princípio, era um bocado tímido."
   },
   {
    "fr": "Maintenant, je connais tout le monde par son prénom.",
    "pt": "Agora conheço toda a gente pelo nome."
   },
   {
    "fr": "Ça me donne beaucoup d'énergie pour la semaine.",
    "pt": "Dá-me muita energia para a semana."
   },
   {
    "fr": "Ils cherchent quelqu'un pour aider en cuisine.",
    "pt": "Andam à procura de alguém para ajudar na cozinha."
   },
   {
    "fr": "Je pourrais venir avec toi un samedi ?",
    "pt": "Posso ir contigo num sábado?"
   },
   {
    "fr": "Bien sûr, ils seront ravis.",
    "pt": "Claro, vão ficar contentíssimos."
   }
  ]
 },
 {
  "title": "Un rêve d'enfance",
  "phrases": [
   {
    "fr": "Quand j'étais petit, je voulais jouer au FC Porto.",
    "pt": "Quando era pequeno, queria ser jogador do FC Porto."
   },
   {
    "fr": "Je jouais tous les jours dans la rue avec mes cousins.",
    "pt": "Jogava todos os dias na rua com os meus primos."
   },
   {
    "fr": "Et toi, quel était ton rêve d'enfant ?",
    "pt": "E tu, qual era o teu sonho de criança?"
   },
   {
    "fr": "Je rêvais d'être pêcheur à Matosinhos, comme mon grand-père.",
    "pt": "Sonhava ser pescador em Matosinhos, como o meu avô."
   },
   {
    "fr": "Il m'emmenait au port voir rentrer les bateaux.",
    "pt": "Levava-me ao porto para ver os barcos a chegar."
   },
   {
    "fr": "Aujourd'hui, j'aimerais avoir mon propre bateau.",
    "pt": "Hoje, gostava de ter o meu próprio barco."
   },
   {
    "fr": "Ce serait génial d'aller pêcher le dimanche.",
    "pt": "Era fixe ir pescar ao domingo."
   },
   {
    "fr": "Moi, j'aimerais apprendre à jouer de la guitare portugaise.",
    "pt": "Eu gostava de aprender a tocar guitarra portuguesa."
   },
   {
    "fr": "Il n'est jamais trop tard pour réaliser un rêve.",
    "pt": "Nunca é tarde demais para realizar um sonho."
   },
   {
    "fr": "Tu pourrais me présenter ton professeur ?",
    "pt": "Podias apresentar-me o teu professor?"
   }
  ],
  "tip": {
   "title": "« Gostava de… » : le conditionnel de politesse à la portugaise",
   "example": "Aujourd'hui, j'aimerais avoir mon propre bateau. — Hoje, <b>gostava de</b> ter o meu próprio barco.",
   "body": "À l'oral, au Portugal, on remplace très souvent le conditionnel par l'imparfait : « gostava de » = j'aimerais, « podias » = tu pourrais, « era fixe » = ce serait génial. Les formes « gostaria » et « poderia » existent, mais elles sonnent plus soutenues et s'emploient surtout à l'écrit ou dans un cadre formel : « Gostaria de marcar uma reunião. » Au café, on dit tout simplement : « Queria uma bica, por favor. »"
  }
 },
 {
  "title": "Une journée difficile",
  "phrases": [
   {
    "fr": "Quelle journée, je suis épuisé !",
    "pt": "Que dia, estou exausto!"
   },
   {
    "fr": "Qu'est-ce qui s'est passé ?",
    "pt": "O que é que aconteceu?"
   },
   {
    "fr": "D'abord, j'ai raté le bus de sept heures et quart.",
    "pt": "Primeiro, perdi o autocarro das sete e um quarto."
   },
   {
    "fr": "Ensuite, il pleuvait à verse et j'avais oublié mon parapluie.",
    "pt": "Depois, estava a chover a potes e tinha-me esquecido do guarda-chuva."
   },
   {
    "fr": "Je suis arrivé trempé à la réunion.",
    "pt": "Cheguei encharcado à reunião."
   },
   {
    "fr": "Et l'après-midi, mon ordinateur est tombé en panne.",
    "pt": "E à tarde o computador avariou."
   },
   {
    "fr": "Mon pauvre, tu n'as vraiment pas eu de chance.",
    "pt": "Coitado, tiveste mesmo azar."
   },
   {
    "fr": "Assieds-toi, je te sers un verre de vinho verde.",
    "pt": "Senta-te, vou servir-te um copo de vinho verde."
   },
   {
    "fr": "Merci, j'en avais bien besoin.",
    "pt": "Obrigado, estava mesmo a precisar."
   },
   {
    "fr": "Demain sera une meilleure journée, tu verras.",
    "pt": "Amanhã vai ser um dia melhor, vais ver."
   }
  ]
 },
 {
  "title": "Retrouver un vieil ami",
  "phrases": [
   {
    "fr": "Rui ! Ça fait des années qu'on ne s'est pas vus !",
    "pt": "Rui! Há anos que não nos víamos!"
   },
   {
    "fr": "Tu n'as pas changé du tout !",
    "pt": "Não mudaste nada!"
   },
   {
    "fr": "Ça fait combien de temps que tu habites à Guimarães ?",
    "pt": "Há quanto tempo é que moras em Guimarães?"
   },
   {
    "fr": "Ça fait presque dix ans que j'y vis.",
    "pt": "Há quase dez anos que vivo lá."
   },
   {
    "fr": "Je travaille dans une entreprise textile près du centre historique.",
    "pt": "Trabalho numa empresa têxtil perto do centro histórico."
   },
   {
    "fr": "Tu te souviens de nos soirées d'étudiants à Braga ?",
    "pt": "Lembras-te das nossas noitadas de estudantes em Braga?"
   },
   {
    "fr": "Comment oublier ! On rentrait toujours à l'aube.",
    "pt": "Como esquecer! Voltávamos sempre de madrugada."
   },
   {
    "fr": "Tu as des nouvelles de Sofia ?",
    "pt": "Tens notícias da Sofia?"
   },
   {
    "fr": "Oui, elle s'est mariée l'année dernière.",
    "pt": "Sim, casou-se no ano passado."
   },
   {
    "fr": "Il faut qu'on se voie plus souvent, d'accord ?",
    "pt": "Temos de nos ver mais vezes, combinado?"
   }
  ],
  "tip": {
   "title": "« Há… que » : ça fait… que",
   "example": "Ça fait presque dix ans que j'y vis. — <b>Há</b> quase dez anos <b>que</b> vivo lá.",
   "body": "Pour dire « ça fait… que » ou « depuis », le portugais utilise « há… que » suivi du présent quand l'action continue : « Há dez anos que vivo aqui » (ça fait dix ans que j'habite ici). Pour poser la question : « Há quanto tempo é que…? » (depuis combien de temps… ?). Employé seul avec un passé, « há » veut dire « il y a » : « Vi-o há dois dias » (je l'ai vu il y a deux jours)."
  }
 },
 {
  "title": "Raconter un voyage",
  "phrases": [
   {
    "fr": "Le week-end dernier, on est partis découvrir Braga et Guimarães.",
    "pt": "No fim de semana passado, fomos conhecer Braga e Guimarães."
   },
   {
    "fr": "On a pris le train à la gare de São Bento.",
    "pt": "Apanhámos o comboio na estação de São Bento."
   },
   {
    "fr": "À Braga, on a monté le grand escalier du Bom Jesus.",
    "pt": "Em Braga, subimos o escadório do Bom Jesus."
   },
   {
    "fr": "Il y avait plus de cinq cents marches !",
    "pt": "Havia mais de quinhentos degraus!"
   },
   {
    "fr": "Ensuite, on a mangé un bon chevreau dans une petite tasca.",
    "pt": "Depois, almoçámos um bom cabrito numa tasquinha."
   },
   {
    "fr": "Le lendemain, on a visité le château de Guimarães.",
    "pt": "No dia seguinte, visitámos o castelo de Guimarães."
   },
   {
    "fr": "On dit que c'est là qu'est né le Portugal.",
    "pt": "Diz-se que foi ali que nasceu Portugal."
   },
   {
    "fr": "Le centre historique était magnifique au coucher du soleil.",
    "pt": "O centro histórico estava maravilhoso ao pôr do sol."
   },
   {
    "fr": "Tu y retournerais ?",
    "pt": "Voltavas lá?"
   },
   {
    "fr": "Sans hésiter, surtout pour la cuisine !",
    "pt": "Sem hesitar, sobretudo pela comida!"
   }
  ]
 },
 {
  "title": "Un anniversaire surprise",
  "phrases": [
   {
    "fr": "Marta fête ses trente ans samedi.",
    "pt": "A Marta faz trinta anos no sábado."
   },
   {
    "fr": "On lui prépare une fête surprise sur une terrasse de la Foz.",
    "pt": "Estamos a preparar-lhe uma festa surpresa numa esplanada da Foz."
   },
   {
    "fr": "Son copain va l'y emmener sans rien lui dire.",
    "pt": "O namorado vai levá-la lá sem lhe dizer nada."
   },
   {
    "fr": "C'est toi qui t'occupes du gâteau ?",
    "pt": "Tratas tu do bolo?"
   },
   {
    "fr": "Oui, je vais le commander dans une pâtisserie de la Boavista.",
    "pt": "Sim, vou encomendá-lo numa pastelaria da Boavista."
   },
   {
    "fr": "Surtout, ne dis rien à personne !",
    "pt": "Sobretudo, não digas nada a ninguém!"
   },
   {
    "fr": "Il faut arriver avant sept heures.",
    "pt": "Temos de chegar antes das sete horas."
   },
   {
    "fr": "Quand elle arrivera, on criera tous « Surprise ! ».",
    "pt": "Quando ela chegar, gritamos todos «Surpresa!»."
   },
   {
    "fr": "On lui a acheté un cadeau tous ensemble.",
    "pt": "Comprámos-lhe um presente todos juntos."
   },
   {
    "fr": "J'espère qu'elle ne se doute de rien.",
    "pt": "Espero que ela não desconfie de nada."
   }
  ]
 },
 {
  "title": "Poisson grillé à Matosinhos",
  "phrases": [
   {
    "fr": "Dimanche, on va manger du poisson grillé à Matosinhos ?",
    "pt": "No domingo, vamos comer peixe grelhado a Matosinhos?"
   },
   {
    "fr": "Je connais un restaurant où les grills sont dans la rue.",
    "pt": "Conheço um restaurante onde os grelhadores estão na rua."
   },
   {
    "fr": "Il faut arriver tôt, sinon on attend une heure.",
    "pt": "Temos de chegar cedo, senão esperamos uma hora."
   },
   {
    "fr": "Qu'est-ce que tu nous conseilles ?",
    "pt": "O que é que nos aconselhas?"
   },
   {
    "fr": "Le bar et les rougets sont délicieux.",
    "pt": "O robalo e os salmonetes são deliciosos."
   },
   {
    "fr": "On partage une dorade et une salade de poulpe ?",
    "pt": "Partilhamos uma dourada e uma salada de polvo?"
   },
   {
    "fr": "Avec une bouteille de vinho verde bien frais.",
    "pt": "Com uma garrafa de vinho verde bem fresquinho."
   },
   {
    "fr": "Le poisson arrive directement du port, juste à côté.",
    "pt": "O peixe vem diretamente do porto, mesmo ao lado."
   },
   {
    "fr": "À quatre, ça fait environ quatre-vingts euros.",
    "pt": "Para quatro, fica à volta de oitenta euros."
   },
   {
    "fr": "Après, on fera une promenade sur la plage.",
    "pt": "Depois, damos um passeio na praia."
   }
  ]
 },
 {
  "title": "La Saint-Jean entre amis",
  "phrases": [
   {
    "fr": "Cette année, on fête la Saint-Jean ensemble ?",
    "pt": "Este ano, festejamos o São João juntos?"
   },
   {
    "fr": "Bien sûr, on se retrouve à la Ribeira vers neuf heures.",
    "pt": "Claro, encontramo-nos na Ribeira por volta das nove."
   },
   {
    "fr": "N'oublie pas ton petit marteau en plastique !",
    "pt": "Não te esqueças do martelinho!"
   },
   {
    "fr": "Les gens se tapent sur la tête en riant toute la nuit.",
    "pt": "As pessoas batem na cabeça umas das outras a rir a noite toda."
   },
   {
    "fr": "Les plus âgés préfèrent encore le poireau.",
    "pt": "Os mais velhos ainda preferem o alho-porro."
   },
   {
    "fr": "On va manger des sardines grillées dans une ruelle.",
    "pt": "Vamos comer sardinhas assadas numa ruela."
   },
   {
    "fr": "À minuit, le ciel se remplit de ballons en papier.",
    "pt": "À meia-noite, o céu enche-se de balões."
   },
   {
    "fr": "L'année dernière, on est restés dans la rue jusqu'au matin.",
    "pt": "No ano passado, ficámos na rua até de manhã."
   },
   {
    "fr": "Ma sœur a été ravie de son premier São João.",
    "pt": "A minha irmã ficou encantada com o seu primeiro São João."
   },
   {
    "fr": "Où se trouve le meilleur endroit pour voir le feu d'artifice ?",
    "pt": "Onde é que fica o melhor sítio para ver o fogo de artifício?"
   }
  ],
  "tip": {
   "title": "Les sens de « ficar »",
   "example": "L'année dernière, on est restés dans la rue jusqu'au matin. — No ano passado, <b>ficámos</b> na rua até de manhã.",
   "body": "« Ficar » est un verbe à tout faire en portugais. Il veut dire rester (« Ficámos na rua até de manhã »), se trouver pour un lieu (« Onde fica a Ribeira? »), devenir ou réagir (« Ela ficou contente » : elle a été contente) et aller bien pour un vêtement (« Essa camisola fica-te bem »). Au Portugal, on l'entend à chaque phrase : repérez le sens grâce au contexte."
  }
 },
 {
  "title": "La saudade d'un ami émigré",
  "phrases": [
   {
    "fr": "Mon meilleur ami est parti travailler à l'étranger il y a trois ans.",
    "pt": "O meu melhor amigo foi trabalhar para o estrangeiro há três anos."
   },
   {
    "fr": "Il me manque beaucoup, surtout les jours de match.",
    "pt": "Tenho muitas saudades dele, sobretudo em dia de jogo."
   },
   {
    "fr": "On allait voir le FC Porto ensemble tous les dimanches.",
    "pt": "Íamos ver o FC Porto juntos todos os domingos."
   },
   {
    "fr": "Maintenant, on s'appelle en vidéo une fois par semaine.",
    "pt": "Agora fazemos uma videochamada uma vez por semana."
   },
   {
    "fr": "Il dit que la mer et les tascas lui manquent.",
    "pt": "Diz que tem saudades do mar e das tascas."
   },
   {
    "fr": "Là-bas, il ne trouve pas de bonne morue.",
    "pt": "Lá não encontra bom bacalhau."
   },
   {
    "fr": "Parfois, je lui envoie un colis avec du fromage et du vin.",
    "pt": "Às vezes, mando-lhe uma encomenda com queijo e vinho."
   },
   {
    "fr": "Il pense revenir au Portugal dans quelques années.",
    "pt": "Está a pensar voltar para Portugal daqui a uns anos."
   },
   {
    "fr": "Cet été, il vient passer un mois à Porto.",
    "pt": "Este verão, vem passar um mês ao Porto."
   },
   {
    "fr": "J'ai hâte de lui faire découvrir le nouveau Bolhão.",
    "pt": "Estou ansioso por lhe mostrar o novo Bolhão."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "On arrive au bout de ce module, félicitations !",
    "pt": "Chegámos ao fim deste módulo, parabéns!"
   },
   {
    "fr": "Maintenant, tu sais donner ton avis en portugais.",
    "pt": "Agora já sabes dar a tua opinião em português."
   },
   {
    "fr": "Tu peux parler de foot, de séries et de fado.",
    "pt": "Consegues falar de futebol, de séries e de fado."
   },
   {
    "fr": "Tu sais aussi raconter une journée difficile.",
    "pt": "Também sabes contar um dia difícil."
   },
   {
    "fr": "Et rassurer un ami qui a des soucis.",
    "pt": "E acalmar um amigo que anda preocupado."
   },
   {
    "fr": "Des expressions comme « acho que » te viennent naturellement.",
    "pt": "Expressões como «acho que» já te saem naturalmente."
   },
   {
    "fr": "N'aie pas peur de faire des erreurs en parlant.",
    "pt": "Não tenhas medo de errar quando falas."
   },
   {
    "fr": "Les Portugais apprécient toujours l'effort.",
    "pt": "Os portugueses apreciam sempre o esforço."
   },
   {
    "fr": "La prochaine fois que tu iras à Porto, lance la conversation !",
    "pt": "Da próxima vez que fores ao Porto, mete conversa!"
   },
   {
    "fr": "Rendez-vous au prochain niveau !",
    "pt": "Até ao próximo nível!"
   }
  ]
 }
];

const level3Module1Lessons = [
 {
  "title": "Le bail et le garant",
  "phrases": [
   {
    "fr": "Le propriétaire exige que nous ayons un garant avant de signer.",
    "pt": "O senhorio exige que tenhamos um fiador antes de assinar."
   },
   {
    "fr": "J'espère que mes parents accepteront d'être mes garants.",
    "pt": "Espero que os meus pais aceitem ser meus fiadores."
   },
   {
    "fr": "Il est important que le contrat soit déclaré aux Finanças.",
    "pt": "É importante que o contrato seja comunicado às Finanças."
   },
   {
    "fr": "L'agence demande trois mois de caution et deux loyers d'avance.",
    "pt": "A agência pede três meses de caução e duas rendas adiantadas."
   },
   {
    "fr": "Je doute que les loyers baissent cette année à Lisbonne.",
    "pt": "Duvido que as rendas baixem este ano em Lisboa."
   },
   {
    "fr": "Il faut que tu lises toutes les clauses avant de signer.",
    "pt": "É preciso que leias todas as cláusulas antes de assinares."
   },
   {
    "fr": "Le propriétaire veut que nous payions par virement le premier du mois.",
    "pt": "O senhorio quer que paguemos por transferência no dia um de cada mês."
   },
   {
    "fr": "Le bail dure un an et se renouvelle automatiquement.",
    "pt": "O contrato tem a duração de um ano e renova-se automaticamente."
   },
   {
    "fr": "Je préfère que tout soit écrit noir sur blanc.",
    "pt": "Prefiro que fique tudo preto no branco."
   },
   {
    "fr": "Pourvu que l'appartement soit aussi lumineux que sur les photos !",
    "pt": "Oxalá o apartamento seja tão luminoso como nas fotografias!"
   }
  ],
  "tip": {
   "title": "« Espero que… / É importante que… » : le subjonctif présent",
   "example": "J'espère que mes parents accepteront d'être mes garants. — <b>Espero que</b> os meus pais <b>aceitem</b> ser meus fiadores.",
   "body": "Comme en français, le subjonctif présent suit les verbes de volonté, de doute ou d'obligation et les expressions comme « É importante que » : « É importante que saibas isto ». Attention : « esperar que » demande le subjonctif, alors que « espérer que » prend l'indicatif en français. On le forme à partir de la 1re personne du présent : tenho → tenha, faço → faça, digo → diga. On l'emploie aussi après « talvez » et « oxalá » : « Talvez chova amanhã »."
  }
 },
 {
  "title": "La déclaration IRS aux Finanças",
  "phrases": [
   {
    "fr": "Cette année, je dois remettre ma déclaration IRS avant la fin juin.",
    "pt": "Este ano, tenho de entregar a declaração de IRS até ao fim de junho."
   },
   {
    "fr": "J'ai enfin réussi à me connecter au Portal das Finanças.",
    "pt": "Finalmente consegui entrar no Portal das Finanças."
   },
   {
    "fr": "Le mot de passe est arrivé par la poste au bout de cinq jours.",
    "pt": "A senha chegou pelo correio ao fim de cinco dias."
   },
   {
    "fr": "Il faut vérifier que toutes les factures ont bien été validées.",
    "pt": "É preciso confirmar se todas as faturas foram mesmo validadas."
   },
   {
    "fr": "Les dépenses de santé et d'éducation sont déductibles.",
    "pt": "As despesas de saúde e de educação são dedutíveis."
   },
   {
    "fr": "J'ai toujours demandé une facture avec mon numéro fiscal.",
    "pt": "Pedi sempre fatura com o meu número de contribuinte."
   },
   {
    "fr": "Mon comptable m'a conseillé l'imposition commune avec ma femme.",
    "pt": "O meu contabilista aconselhou-me a tributação conjunta com a minha mulher."
   },
   {
    "fr": "Si tout se passe bien, le remboursement arrivera en juillet.",
    "pt": "Se tudo correr bem, o reembolso chega em julho."
   },
   {
    "fr": "L'an dernier, j'ai dû payer une petite amende pour un oubli.",
    "pt": "No ano passado, tive de pagar uma pequena coima por um esquecimento."
   },
   {
    "fr": "Les Finanças ne pardonnent pas les retards, mieux vaut s'y prendre tôt.",
    "pt": "As Finanças não perdoam atrasos, mais vale tratar disso cedo."
   }
  ]
 },
 {
  "title": "Le médecin de famille et le SNS",
  "phrases": [
   {
    "fr": "Quand j'aurai mon numéro d'utente, je pourrai m'inscrire au centre de santé.",
    "pt": "Quando eu tiver o número de utente, posso inscrever-me no centro de saúde."
   },
   {
    "fr": "Si tu peux, appelle le centre de santé dès huit heures.",
    "pt": "Se puderes, liga para o centro de saúde logo às oito horas."
   },
   {
    "fr": "En théorie, chaque résident a droit à un médecin de famille.",
    "pt": "Em teoria, cada residente tem direito a um médico de família."
   },
   {
    "fr": "Malheureusement, des milliers de personnes attendent encore le leur.",
    "pt": "Infelizmente, milhares de pessoas ainda estão à espera do seu."
   },
   {
    "fr": "En cas de doute, on peut appeler la ligne SNS vingt-quatre avant d'aller aux urgences.",
    "pt": "Em caso de dúvida, pode-se ligar para a linha SNS vinte e quatro antes de ir às urgências."
   },
   {
    "fr": "Dès que le médecin verra les analyses, il t'appellera.",
    "pt": "Assim que o médico vir as análises, liga-te."
   },
   {
    "fr": "La consultation coûte très peu, et parfois rien du tout.",
    "pt": "A consulta custa muito pouco e, às vezes, nada."
   },
   {
    "fr": "Si tu as besoin d'une ordonnance, tu peux la demander en ligne.",
    "pt": "Se precisares de uma receita, podes pedi-la online."
   },
   {
    "fr": "Pour voir un spécialiste, l'attente peut durer plusieurs mois.",
    "pt": "Para uma consulta de especialidade, a espera pode durar vários meses."
   },
   {
    "fr": "Quand nous aurons plus de temps, nous comparerons avec le privé.",
    "pt": "Quando tivermos mais tempo, vamos comparar com o privado."
   }
  ],
  "tip": {
   "title": "« Quando eu tiver… / Se puderes… » : le futur du subjonctif",
   "example": "Quand j'aurai mon numéro d'utente, je pourrai m'inscrire au centre de santé. — Quando eu <b>tiver</b> o número de utente, posso inscrever-me no centro de saúde.",
   "body": "Le portugais a gardé un temps que le français n'a pas : le futur du subjonctif, employé après « quando », « se », « assim que » ou « enquanto » pour une action à venir. Là où le français dit « quand j'aurai » ou « si tu peux », on dit « quando tiver » et « se puderes ». Il se forme sur le passé simple : tiveram → tiver, puderam → puder, viram → vir. Exemples : « Quando chegares, liga-me », « Se fizer sol, vamos à praia »."
  }
 },
 {
  "title": "Choisir une assurance santé",
  "phrases": [
   {
    "fr": "Beaucoup de gens complètent le SNS avec une assurance privée.",
    "pt": "Muita gente complementa o SNS com um seguro de saúde privado."
   },
   {
    "fr": "Mon entreprise offre une assurance santé à tous ses salariés.",
    "pt": "A minha empresa oferece um seguro de saúde a todos os funcionários."
   },
   {
    "fr": "Il faudrait que je lise les exclusions avant de choisir.",
    "pt": "Convinha que eu lesse as exclusões antes de escolher."
   },
   {
    "fr": "Le délai de carence pour les consultations est de trois mois.",
    "pt": "O período de carência para consultas é de três meses."
   },
   {
    "fr": "Les soins dentaires ne sont presque jamais inclus.",
    "pt": "Os tratamentos dentários quase nunca estão incluídos."
   },
   {
    "fr": "Avec cette assurance, une consultation dans le privé me coûte quinze euros.",
    "pt": "Com este seguro, uma consulta no privado custa-me quinze euros."
   },
   {
    "fr": "J'hésite entre deux formules, la différence est de dix euros par mois.",
    "pt": "Estou indeciso entre dois planos, a diferença é de dez euros por mês."
   },
   {
    "fr": "Les primes augmentent souvent avec l'âge de l'assuré.",
    "pt": "Os prémios costumam aumentar com a idade do segurado."
   },
   {
    "fr": "Un collègue m'a recommandé un réseau de cliniques à Porto.",
    "pt": "Um colega recomendou-me uma rede de clínicas no Porto."
   },
   {
    "fr": "Finalement, j'ai signé pour la formule intermédiaire.",
    "pt": "No fim, assinei o plano intermédio."
   }
  ]
 },
 {
  "title": "Chez le notaire",
  "phrases": [
   {
    "fr": "Le notaire nous a convoqués pour que nous signions l'acte.",
    "pt": "O notário convocou-nos para assinarmos a escritura."
   },
   {
    "fr": "Pour signer l'acte, il nous faut les papiers de tout le monde.",
    "pt": "Para fazermos a escritura, precisamos dos papéis de toda a gente."
   },
   {
    "fr": "Il vaut mieux que nous soyons là avant que les vendeurs arrivent.",
    "pt": "É melhor estarmos lá antes de os vendedores chegarem."
   },
   {
    "fr": "Le notaire lit chaque clause à voix haute, c'est interminable.",
    "pt": "O notário lê todas as cláusulas em voz alta, é uma eternidade."
   },
   {
    "fr": "Ma sœur m'a donné une procuration pour que je signe à sa place.",
    "pt": "A minha irmã passou-me uma procuração para eu assinar por ela."
   },
   {
    "fr": "Il est essentiel que nous vérifiions le certificat énergétique.",
    "pt": "É essencial verificarmos o certificado energético."
   },
   {
    "fr": "Une fois que nous aurons signé, nous recevrons enfin les clés.",
    "pt": "Depois de assinarmos, recebemos finalmente as chaves."
   },
   {
    "fr": "Les frais d'acte et l'IMT s'ajoutent au prix de l'appartement.",
    "pt": "Os custos da escritura e o IMT somam-se ao preço do apartamento."
   },
   {
    "fr": "Le notaire a demandé aux vendeurs de montrer leurs cartes d'identité.",
    "pt": "O notário pediu aos vendedores para mostrarem o cartão de cidadão."
   },
   {
    "fr": "En sortant, nous avons fêté ça avec une bica et un pastel de nata.",
    "pt": "À saída, festejámos com uma bica e um pastel de nata."
   }
  ],
  "tip": {
   "title": "« Para fazermos / antes de eles chegarem » : l'infinitif personnel",
   "example": "Pour signer l'acte, il nous faut les papiers de tout le monde. — <b>Para fazermos</b> a escritura, precisamos dos papéis de toda a gente.",
   "body": "Particularité du portugais : l'infinitif peut se conjuguer pour indiquer qui fait l'action. Il remplace souvent le subjonctif français après « para », « antes de », « depois de » ou « sem » : « pour que nous fassions » devient « para fazermos ». Terminaisons : -es (tu), -mos (nós), -em (eles). Exemples : « antes de eles chegarem », « depois de jantarmos », « É melhor saíres já »."
  }
 },
 {
  "title": "L'assemblée de copropriété",
  "phrases": [
   {
    "fr": "L'assemblée de copropriété a lieu jeudi à neuf heures du soir.",
    "pt": "A reunião de condomínio é na quinta-feira às nove da noite."
   },
   {
    "fr": "L'administrateur a présenté les comptes de l'année.",
    "pt": "O administrador apresentou as contas do ano."
   },
   {
    "fr": "Le voisin du troisième refuse de payer sa part de l'ascenseur.",
    "pt": "O vizinho do terceiro recusa-se a pagar a parte dele do elevador."
   },
   {
    "fr": "Nous avons voté pour repeindre la façade au printemps.",
    "pt": "Aprovámos a pintura da fachada para a primavera."
   },
   {
    "fr": "Chaque logement devra verser cent cinquante euros de plus.",
    "pt": "Cada fração vai ter de pagar mais cento e cinquenta euros."
   },
   {
    "fr": "La discussion sur les places de parking a duré une heure.",
    "pt": "A discussão sobre os lugares de garagem durou uma hora."
   },
   {
    "fr": "Certains voisins se plaignent du bruit des travaux le samedi.",
    "pt": "Alguns vizinhos queixam-se do barulho das obras ao sábado."
   },
   {
    "fr": "On a fini par trouver un accord, mais il était minuit passé.",
    "pt": "Acabámos por chegar a acordo, mas já passava da meia-noite."
   },
   {
    "fr": "Le procès-verbal sera envoyé à tout le monde par courriel.",
    "pt": "A ata vai ser enviada a toda a gente por email."
   },
   {
    "fr": "Ces réunions sont épuisantes, mais elles restent nécessaires.",
    "pt": "Estas reuniões são esgotantes, mas continuam a ser necessárias."
   }
  ]
 },
 {
  "title": "Une infiltration d'eau",
  "phrases": [
   {
    "fr": "Une tache d'humidité est apparue au plafond de la salle de bains.",
    "pt": "Apareceu uma mancha de humidade no teto da casa de banho."
   },
   {
    "fr": "L'eau vient sûrement de l'appartement du dessus.",
    "pt": "A água vem de certeza do apartamento de cima."
   },
   {
    "fr": "J'ai frappé chez la voisine, mais elle n'était pas là.",
    "pt": "Bati à porta da vizinha, mas ela não estava."
   },
   {
    "fr": "Le plombier a trouvé un tuyau fissuré derrière le carrelage.",
    "pt": "O canalizador encontrou um cano rachado atrás dos azulejos."
   },
   {
    "fr": "Il a fallu couper l'eau de tout l'immeuble pendant deux heures.",
    "pt": "Foi preciso cortar a água do prédio inteiro durante duas horas."
   },
   {
    "fr": "J'ai pris des photos pour les envoyer à l'assurance.",
    "pt": "Tirei fotografias para mandar ao seguro."
   },
   {
    "fr": "L'expert passera mardi pour évaluer les dégâts.",
    "pt": "O perito passa cá na terça-feira para avaliar os estragos."
   },
   {
    "fr": "Avec les pluies d'hiver, le problème s'est encore aggravé.",
    "pt": "Com as chuvas de inverno, o problema agravou-se ainda mais."
   },
   {
    "fr": "En attendant, nous avons mis une bassine sous la fuite.",
    "pt": "Entretanto, pusemos um alguidar debaixo da fuga."
   },
   {
    "fr": "Heureusement, la voisine a tout de suite accepté de payer la réparation.",
    "pt": "Felizmente, a vizinha aceitou logo pagar o arranjo."
   }
  ]
 },
 {
  "title": "Rénover un vieil appartement",
  "phrases": [
   {
    "fr": "Cet immeuble a été construit dans les années trente.",
    "pt": "Este prédio foi construído nos anos trinta."
   },
   {
    "fr": "Beaucoup d'appartements à rénover sont en vente dans ce quartier.",
    "pt": "Vendem-se muitos apartamentos para remodelar neste bairro."
   },
   {
    "fr": "Les vieux azulejos de l'entrée seront restaurés à la main.",
    "pt": "Os azulejos antigos da entrada vão ser restaurados à mão."
   },
   {
    "fr": "L'installation électrique a été entièrement refaite le mois dernier.",
    "pt": "A instalação elétrica foi toda refeita no mês passado."
   },
   {
    "fr": "Le devis a été accepté après de longues négociations.",
    "pt": "O orçamento foi aceite depois de longas negociações."
   },
   {
    "fr": "Les travaux ont été retardés à cause du permis de la mairie.",
    "pt": "As obras foram adiadas por causa da licença da câmara."
   },
   {
    "fr": "À Porto, on rénove beaucoup d'immeubles du centre historique.",
    "pt": "No Porto, recuperam-se muitos prédios do centro histórico."
   },
   {
    "fr": "Le parquet d'origine a été conservé et poncé.",
    "pt": "O soalho original foi mantido e afagado."
   },
   {
    "fr": "Le chantier devrait être terminé avant Noël.",
    "pt": "A obra deve ficar concluída antes do Natal."
   },
   {
    "fr": "Après tout ce stress, l'appartement est méconnaissable.",
    "pt": "Depois de tanto stress, o apartamento está irreconhecível."
   }
  ],
  "tip": {
   "title": "« Foi construído / vende-se » : la voix passive",
   "example": "Cet immeuble a été construit dans les années trente. — Este prédio <b>foi construído</b> nos anos trinta.",
   "body": "Comme en français, le passif se forme avec « ser » + participe passé accordé : « A casa foi vendida », « Os azulejos vão ser restaurados ». Quand l'auteur de l'action n'a pas d'importance, le portugais préfère souvent le « se » passif, où le verbe s'accorde avec la chose : « Vende-se casa », « Vendem-se apartamentos », « Aluga-se quarto ». C'est l'équivalent de « on vend » ou de « à vendre » sur les panneaux."
  }
 },
 {
  "title": "Acheter un appartement à crédit",
  "phrases": [
   {
    "fr": "Nous avons demandé un crédit immobilier dans trois banques.",
    "pt": "Pedimos crédito à habitação em três bancos."
   },
   {
    "fr": "La banque finance au maximum quatre-vingt-dix pour cent de la valeur.",
    "pt": "O banco financia no máximo noventa por cento do valor."
   },
   {
    "fr": "Il faut donc des économies pour l'apport et pour les frais.",
    "pt": "Por isso, é preciso ter poupanças para a entrada e para as despesas."
   },
   {
    "fr": "Le taux variable dépend de l'Euribor, qui a beaucoup fluctué.",
    "pt": "A taxa variável depende da Euribor, que tem oscilado muito."
   },
   {
    "fr": "Nous préférons un taux mixte pour dormir tranquilles.",
    "pt": "Preferimos uma taxa mista para dormirmos descansados."
   },
   {
    "fr": "L'évaluation de la banque était inférieure au prix demandé.",
    "pt": "A avaliação do banco ficou abaixo do preço pedido."
   },
   {
    "fr": "Le vendeur a accepté de baisser de cinq mille euros.",
    "pt": "O vendedor aceitou baixar cinco mil euros."
   },
   {
    "fr": "Nous avons signé le compromis de vente la semaine dernière.",
    "pt": "Assinámos o contrato-promessa de compra e venda na semana passada."
   },
   {
    "fr": "La mensualité sera d'environ huit cents euros pendant trente ans.",
    "pt": "A prestação vai ser de cerca de oitocentos euros durante trinta anos."
   },
   {
    "fr": "C'est un engagement énorme, mais nous serons enfin chez nous.",
    "pt": "É um compromisso enorme, mas finalmente vamos ter a nossa casa."
   }
  ]
 },
 {
  "title": "Bouchons, péages et Via Verde",
  "phrases": [
   {
    "fr": "Tous les matins, la Segunda Circular est complètement bouchée.",
    "pt": "Todas as manhãs, a Segunda Circular está completamente entupida."
   },
   {
    "fr": "Sur l'IC19, je mets parfois une heure pour faire quinze kilomètres.",
    "pt": "No IC19, às vezes demoro uma hora a fazer quinze quilómetros."
   },
   {
    "fr": "Un accident près de Benfica a bloqué la circulation pendant deux heures.",
    "pt": "Um acidente perto de Benfica parou o trânsito durante duas horas."
   },
   {
    "fr": "Avec la Via Verde, je n'ai plus besoin de m'arrêter aux péages.",
    "pt": "Com a Via Verde, já não preciso de parar nas portagens."
   },
   {
    "fr": "Le montant est débité directement sur mon compte bancaire.",
    "pt": "O valor é debitado diretamente na minha conta bancária."
   },
   {
    "fr": "Sur le pont du 25 Avril, on ne paie le péage que dans le sens nord.",
    "pt": "Na Ponte 25 de Abril, a portagem só se paga no sentido norte."
   },
   {
    "fr": "Certaines autoroutes n'ont que des portiques électroniques.",
    "pt": "Algumas autoestradas só têm pórticos eletrónicos."
   },
   {
    "fr": "Sans Via Verde, il faut aller payer à la poste après quelques jours.",
    "pt": "Sem Via Verde, é preciso ir pagar aos CTT passados uns dias."
   },
   {
    "fr": "Je pense sérieusement à prendre le train de Sintra à la place.",
    "pt": "Estou a pensar seriamente em apanhar o comboio de Sintra em vez disso."
   },
   {
    "fr": "Au moins, dans le train, je peux lire tranquillement.",
    "pt": "Pelo menos, no comboio, posso ler à vontade."
   }
  ]
 },
 {
  "title": "Le télétravail",
  "phrases": [
   {
    "fr": "Depuis la pandémie, je travaille de chez moi trois jours par semaine.",
    "pt": "Desde a pandemia, trabalho a partir de casa três dias por semana."
   },
   {
    "fr": "Mon bureau, c'est un coin du salon près de la fenêtre.",
    "pt": "O meu escritório é um canto da sala junto à janela."
   },
   {
    "fr": "Le plus difficile, c'est de décrocher à la fin de la journée.",
    "pt": "O mais difícil é desligar ao fim do dia."
   },
   {
    "fr": "La loi oblige l'entreprise à compenser les dépenses comme l'électricité et internet.",
    "pt": "A lei obriga a empresa a compensar despesas como a luz e a internet."
   },
   {
    "fr": "Les réunions en visio s'enchaînent toute la matinée.",
    "pt": "As reuniões por videochamada sucedem-se a manhã toda."
   },
   {
    "fr": "Parfois, je vais travailler dans un café de Leiria pour changer d'air.",
    "pt": "Às vezes, vou trabalhar para um café em Leiria para mudar de ares."
   },
   {
    "fr": "Mes collègues de Lisbonne, je ne les vois qu'une fois par mois.",
    "pt": "Os meus colegas de Lisboa, só os vejo uma vez por mês."
   },
   {
    "fr": "Sans les trajets, je gagne presque deux heures par jour.",
    "pt": "Sem as deslocações, ganho quase duas horas por dia."
   },
   {
    "fr": "Mon chat passe ses journées à marcher sur le clavier.",
    "pt": "O meu gato passa os dias a andar em cima do teclado."
   },
   {
    "fr": "Pour rien au monde je ne retournerais au bureau tous les jours.",
    "pt": "Por nada deste mundo voltava a ir ao escritório todos os dias."
   }
  ]
 },
 {
  "title": "Négocier son salaire",
  "phrases": [
   {
    "fr": "Si j'avais plus d'expérience, je demanderais davantage.",
    "pt": "Se eu tivesse mais experiência, pedia mais."
   },
   {
    "fr": "Ici, les salaires restent bas par rapport au prix du logement.",
    "pt": "Cá, os ordenados continuam baixos em comparação com o preço da habitação."
   },
   {
    "fr": "J'ai préparé une liste de mes résultats de l'année.",
    "pt": "Preparei uma lista dos meus resultados do ano."
   },
   {
    "fr": "Si la directrice était de bonne humeur, ce serait plus facile.",
    "pt": "Se a diretora estivesse bem-disposta, era mais fácil."
   },
   {
    "fr": "J'ai demandé une augmentation de deux cents euros bruts par mois.",
    "pt": "Pedi um aumento de duzentos euros brutos por mês."
   },
   {
    "fr": "Elle a répondu que le budget était déjà bouclé.",
    "pt": "Ela respondeu que o orçamento já estava fechado."
   },
   {
    "fr": "Si tu étais à ma place, tu accepterais un jour de télétravail en plus ?",
    "pt": "Se estivesses no meu lugar, aceitavas mais um dia de teletrabalho?"
   },
   {
    "fr": "N'oublie pas qu'au Portugal, on touche quatorze mois de salaire.",
    "pt": "Não te esqueças de que, em Portugal, se recebem catorze meses de ordenado."
   },
   {
    "fr": "Si j'avais su, j'aurais négocié dès mon arrivée dans l'entreprise.",
    "pt": "Se eu soubesse, tinha negociado logo quando entrei na empresa."
   },
   {
    "fr": "Finalement, j'ai obtenu une augmentation et une meilleure prime de repas.",
    "pt": "No fim, consegui um aumento e um subsídio de refeição melhor."
   }
  ],
  "tip": {
   "title": "« Se eu tivesse… comprava » : l'hypothèse irréelle",
   "example": "Si j'avais plus d'expérience, je demanderais davantage. — Se eu <b>tivesse</b> mais experiência, <b>pedia</b> mais.",
   "body": "Pour une hypothèse irréelle, le portugais met l'imparfait du subjonctif après « se », là où le français met l'imparfait de l'indicatif : « Se eu tivesse tempo… ». Dans la principale, le conditionnel (« compraria ») est correct, mais à l'oral, au Portugal, on préfère l'imparfait : « Se tivesse dinheiro, comprava uma casa ». L'imparfait du subjonctif se forme sur le passé simple : tiveram → tivesse, fizeram → fizesse, foram → fosse."
  }
 },
 {
  "title": "S'occuper de ses parents âgés",
  "phrases": [
   {
    "fr": "Depuis sa chute, ma mère ne peut plus vivre seule à Viseu.",
    "pt": "Desde a queda, a minha mãe já não pode viver sozinha em Viseu."
   },
   {
    "fr": "Mon frère et moi, nous nous relayons chaque week-end.",
    "pt": "Eu e o meu irmão revezamo-nos todos os fins de semana."
   },
   {
    "fr": "L'aide à domicile vient tous les matins l'aider pour sa toilette.",
    "pt": "O apoio domiciliário vem todas as manhãs ajudá-la na higiene."
   },
   {
    "fr": "La liste d'attente pour la maison de retraite est très longue.",
    "pt": "A lista de espera para o lar é muito longa."
   },
   {
    "fr": "Mon père refuse catégoriquement de quitter sa maison.",
    "pt": "O meu pai recusa-se terminantemente a sair de casa."
   },
   {
    "fr": "Je lui ai acheté un portable avec de grosses touches.",
    "pt": "Comprei-lhe um telemóvel com teclas grandes."
   },
   {
    "fr": "La pharmacienne du village nous aide beaucoup pour les médicaments.",
    "pt": "A farmacêutica da aldeia ajuda-nos muito com os medicamentos."
   },
   {
    "fr": "Il faut que quelqu'un l'accompagne à ses rendez-vous à l'hôpital.",
    "pt": "É preciso que alguém o acompanhe às consultas no hospital."
   },
   {
    "fr": "Parfois, je me sens coupable de vivre si loin d'eux.",
    "pt": "Às vezes, sinto-me culpado por viver tão longe deles."
   },
   {
    "fr": "Mais chaque dimanche, ma mère me raconte sa semaine au téléphone.",
    "pt": "Mas, todos os domingos, a minha mãe conta-me a semana dela ao telefone."
   }
  ]
 },
 {
  "title": "L'ecoponto et le tri",
  "phrases": [
   {
    "fr": "Au bout de notre rue, il y a un ecoponto avec trois conteneurs.",
    "pt": "Ao fundo da nossa rua, há um ecoponto com três contentores."
   },
   {
    "fr": "Le jaune est pour le plastique et les emballages en métal.",
    "pt": "O amarelo é para o plástico e as embalagens de metal."
   },
   {
    "fr": "Le bleu reçoit le papier et le carton, bien pliés.",
    "pt": "O azul é para o papel e o cartão, bem dobrados."
   },
   {
    "fr": "Le verre va dans le vert, sans les bouchons.",
    "pt": "O vidro vai para o verde, sem as tampas."
   },
   {
    "fr": "Les piles se déposent dans le petit tube rouge.",
    "pt": "As pilhas põem-se no pilhão, o tubinho vermelho."
   },
   {
    "fr": "Mes enfants corrigent mes erreurs de tri tous les soirs.",
    "pt": "Os meus filhos corrigem os meus erros de separação todas as noites."
   },
   {
    "fr": "La mairie a distribué des seaux pour les déchets organiques.",
    "pt": "A câmara distribuiu baldes para os resíduos orgânicos."
   },
   {
    "fr": "Il est interdit de laisser des sacs à côté des conteneurs.",
    "pt": "É proibido deixar sacos ao lado dos contentores."
   },
   {
    "fr": "Les vieux meubles, qu'on appelle ici « monos », la mairie les ramasse gratuitement.",
    "pt": "Os móveis velhos, a que cá se chama «monos», a câmara recolhe-os de graça."
   },
   {
    "fr": "Trier devient vite un réflexe, comme se brosser les dents.",
    "pt": "Separar o lixo torna-se depressa um hábito, como lavar os dentes."
   }
  ]
 },
 {
  "title": "Élections et bureau de vote",
  "phrases": [
   {
    "fr": "Les élections législatives ont lieu dimanche prochain.",
    "pt": "As eleições legislativas são no próximo domingo."
   },
   {
    "fr": "Comme citoyen européen, je peux voter aux élections municipales.",
    "pt": "Como cidadão europeu, posso votar nas autárquicas."
   },
   {
    "fr": "J'ai vérifié en ligne dans quel bureau de vote je suis inscrit.",
    "pt": "Confirmei na internet em que secção de voto estou recenseado."
   },
   {
    "fr": "Le bureau de vote se trouve dans l'école primaire du quartier.",
    "pt": "A assembleia de voto fica na escola primária do bairro."
   },
   {
    "fr": "Il faut montrer sa carte d'identité ou son titre de séjour.",
    "pt": "É preciso mostrar o cartão de cidadão ou o título de residência."
   },
   {
    "fr": "La file avançait vite, malgré le monde.",
    "pt": "A fila andava depressa, apesar de haver muita gente."
   },
   {
    "fr": "Les membres du bureau ont barré mon nom sur la liste.",
    "pt": "Os membros da mesa riscaram o meu nome da lista."
   },
   {
    "fr": "Le soir, toute la famille a suivi les résultats à la télévision.",
    "pt": "À noite, a família toda seguiu os resultados na televisão."
   },
   {
    "fr": "L'abstention a encore été très élevée.",
    "pt": "A abstenção voltou a ser muito elevada."
   },
   {
    "fr": "Voter ici me donne vraiment l'impression de faire partie du pays.",
    "pt": "Votar cá dá-me mesmo a sensação de fazer parte do país."
   }
  ]
 },
 {
  "title": "Un potager urbain",
  "phrases": [
   {
    "fr": "La mairie de Lisbonne attribue de petites parcelles dans les potagers urbains.",
    "pt": "A Câmara de Lisboa atribui pequenos talhões nas hortas urbanas."
   },
   {
    "fr": "Nous avons attendu un an avant d'obtenir notre parcelle.",
    "pt": "Esperámos um ano até nos darem o nosso talhão."
   },
   {
    "fr": "J'y plante des tomates, des courgettes et des haricots verts.",
    "pt": "Planto lá tomates, curgetes e feijão-verde."
   },
   {
    "fr": "L'été, il faut arroser tous les soirs à cause de la chaleur.",
    "pt": "No verão, é preciso regar ao fim da tarde por causa do calor."
   },
   {
    "fr": "Mon voisin de parcelle, un retraité, me donne plein de conseils.",
    "pt": "O vizinho do talhão ao lado, um reformado, dá-me imensos conselhos."
   },
   {
    "fr": "Il m'a appris à planter selon les phases de la lune.",
    "pt": "Ensinou-me a plantar conforme as fases da lua."
   },
   {
    "fr": "Les escargots ont mangé toutes mes laitues en une nuit.",
    "pt": "Os caracóis comeram-me as alfaces todas numa noite."
   },
   {
    "fr": "On partage les outils dans une petite cabane commune.",
    "pt": "Partilhamos as ferramentas numa pequena arrecadação comum."
   },
   {
    "fr": "Rien ne vaut une tomate qu'on a fait pousser soi-même.",
    "pt": "Nada sabe tão bem como um tomate que nós próprios cultivámos."
   },
   {
    "fr": "Ce petit coin de terre est devenu mon refuge du samedi matin.",
    "pt": "Este cantinho de terra tornou-se o meu refúgio ao sábado de manhã."
   }
  ]
 },
 {
  "title": "La Feira da Ladra",
  "phrases": [
   {
    "fr": "La Feira da Ladra a lieu le mardi et le samedi, près du Panthéon national.",
    "pt": "A Feira da Ladra realiza-se à terça e ao sábado, junto ao Panteão Nacional."
   },
   {
    "fr": "Il vaut mieux y aller tôt, avant qu'il fasse trop chaud.",
    "pt": "Convém ir cedo, antes de o calor apertar."
   },
   {
    "fr": "On y trouve de tout : vieux disques, azulejos, outils et vêtements.",
    "pt": "Encontra-se lá de tudo: discos antigos, azulejos, ferramentas e roupa."
   },
   {
    "fr": "J'ai repéré une lampe des années soixante sur un étal.",
    "pt": "Descobri um candeeiro dos anos sessenta numa banca."
   },
   {
    "fr": "Le vendeur en demandait quarante euros, ce qui m'a paru cher.",
    "pt": "O vendedor pedia quarenta euros, o que me pareceu caro."
   },
   {
    "fr": "Après un peu de marchandage, on s'est mis d'accord sur vingt-cinq.",
    "pt": "Depois de regatear um bocado, ficámos nos vinte e cinco."
   },
   {
    "fr": "Méfie-toi des azulejos trop bon marché, ils sont parfois volés.",
    "pt": "Desconfia dos azulejos muito baratos, às vezes são roubados."
   },
   {
    "fr": "On dit que le nom de la foire vient du mot « ladra », voleuse.",
    "pt": "Diz-se que o nome da feira vem da palavra «ladra», ou seja, a que rouba."
   },
   {
    "fr": "Ensuite, nous sommes allés boire une bière avec vue sur le Tage.",
    "pt": "Depois, fomos beber uma imperial com vista para o Tejo."
   },
   {
    "fr": "Je reviens toujours avec quelque chose dont je n'ai pas besoin.",
    "pt": "Volto sempre com alguma coisa de que não preciso."
   }
  ]
 },
 {
  "title": "Réflexions sur la vie au Portugal",
  "phrases": [
   {
    "fr": "Cela fait déjà sept ans que je me suis installé au Portugal.",
    "pt": "Já lá vão sete anos desde que me mudei para Portugal."
   },
   {
    "fr": "Au début, la lenteur de l'administration me rendait fou.",
    "pt": "No início, a lentidão dos serviços deixava-me louco."
   },
   {
    "fr": "Aujourd'hui, j'ai appris à prendre les choses avec calme.",
    "pt": "Hoje, aprendi a levar as coisas com calma."
   },
   {
    "fr": "Ce qui me touche le plus, c'est la gentillesse des gens.",
    "pt": "O que mais me toca é a simpatia das pessoas."
   },
   {
    "fr": "Ici, on trouve toujours le temps de boire un café ensemble.",
    "pt": "Aqui, há sempre tempo para um café."
   },
   {
    "fr": "Les bas salaires restent le grand problème du pays.",
    "pt": "Os ordenados baixos continuam a ser o grande problema do país."
   },
   {
    "fr": "Beaucoup de jeunes Portugais partent travailler à l'étranger.",
    "pt": "Muitos jovens portugueses vão trabalhar para o estrangeiro."
   },
   {
    "fr": "La saudade, je crois que je commence enfin à la comprendre.",
    "pt": "A saudade, acho que finalmente começo a percebê-la."
   },
   {
    "fr": "Je ne sais pas si je resterai ici toute ma vie.",
    "pt": "Não sei se vou ficar cá a vida toda."
   },
   {
    "fr": "Mais pour l'instant, je ne me vois vivre nulle part ailleurs.",
    "pt": "Mas, por agora, não me vejo a viver em mais lado nenhum."
   }
  ]
 },
 {
  "title": "Le déjeuner du dimanche en famille",
  "phrases": [
   {
    "fr": "Chaque dimanche, toute la famille se retrouve chez ma belle-mère.",
    "pt": "Todos os domingos, a família toda junta-se em casa da minha sogra."
   },
   {
    "fr": "Le repas commence rarement avant deux heures de l'après-midi.",
    "pt": "O almoço raramente começa antes das duas da tarde."
   },
   {
    "fr": "Ma belle-mère prépare toujours du cabrito ou de la morue au four.",
    "pt": "A minha sogra faz sempre cabrito assado ou bacalhau no forno."
   },
   {
    "fr": "Il y a toujours de quoi nourrir un régiment.",
    "pt": "Há sempre comida para um regimento."
   },
   {
    "fr": "Les oncles parlent de football et de politique en même temps.",
    "pt": "Os tios discutem futebol e política ao mesmo tempo."
   },
   {
    "fr": "Les enfants jouent dans la cour pendant que les adultes restent à table.",
    "pt": "Os miúdos brincam no quintal enquanto os adultos ficam à mesa."
   },
   {
    "fr": "Comme dessert, il y a toujours un arroz doce à la cannelle.",
    "pt": "De sobremesa, há sempre arroz-doce com canela."
   },
   {
    "fr": "Après le café, mon beau-père sort son aguardente.",
    "pt": "Depois do café, o meu sogro tira a aguardente do armário."
   },
   {
    "fr": "On ne quitte jamais la table avant cinq heures.",
    "pt": "Nunca nos levantamos da mesa antes das cinco."
   },
   {
    "fr": "Ces dimanches m'ont fait me sentir vraiment de la famille.",
    "pt": "Estes domingos fizeram-me sentir mesmo parte da família."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce module nous a plongés dans la vie d'adulte au Portugal.",
    "pt": "Este módulo levou-nos para a vida adulta em Portugal."
   },
   {
    "fr": "Des Finanças au notaire, on a affronté la paperasse portugaise.",
    "pt": "Das Finanças ao notário, enfrentámos a burocracia portuguesa."
   },
   {
    "fr": "Le subjonctif n'est plus une montagne infranchissable.",
    "pt": "O conjuntivo já não é nenhum bicho de sete cabeças."
   },
   {
    "fr": "Le futur du subjonctif et l'infinitif personnel commencent à venir tout seuls.",
    "pt": "O futuro do conjuntivo e o infinitivo pessoal já começam a sair naturalmente."
   },
   {
    "fr": "On sait maintenant parler de salaire, de crédit ou d'infiltrations.",
    "pt": "Agora já sabemos falar de ordenados, de crédito ou de infiltrações."
   },
   {
    "fr": "Si on continuait comme ça, on finirait par rêver en portugais.",
    "pt": "Se continuássemos assim, acabávamos por sonhar em português."
   },
   {
    "fr": "Le prochain module nous emmènera en voyage à travers le pays.",
    "pt": "O próximo módulo vai levar-nos a viajar pelo país."
   },
   {
    "fr": "Il reste encore des nuances à travailler, et c'est normal.",
    "pt": "Ainda há nuances para trabalhar, e é normal."
   },
   {
    "fr": "Fais une pause, tu l'as bien méritée.",
    "pt": "Faz uma pausa, que bem a mereces."
   },
   {
    "fr": "À bientôt pour continuer ensemble cette aventure en portugais.",
    "pt": "Até breve, para continuarmos juntos esta aventura em português."
   }
  ]
 }
];

const level3Module2Lessons = [
 {
  "title": "La traversée entre Pico et Faial",
  "phrases": [
   {
    "fr": "Le ferry pour Faial part tous les matins du port de Madalena.",
    "pt": "O ferry para o Faial parte todas as manhãs do porto da Madalena."
   },
   {
    "fr": "La traversée ne dure qu'une demi-heure, mais la mer est souvent agitée.",
    "pt": "A travessia só dura meia hora, mas o mar está muitas vezes agitado."
   },
   {
    "fr": "Depuis le pont, on voit le volcan du Pico sortir des nuages.",
    "pt": "Do convés, vê-se o vulcão do Pico a sair das nuvens."
   },
   {
    "fr": "Les habitants des deux îles font ce trajet comme on prend le bus.",
    "pt": "Os habitantes das duas ilhas fazem este trajeto como quem apanha o autocarro."
   },
   {
    "fr": "En haute saison, mieux vaut acheter les billets la veille.",
    "pt": "Na época alta, mais vale comprar os bilhetes na véspera."
   },
   {
    "fr": "Quand la houle est trop forte, les départs sont annulés sans préavis.",
    "pt": "Quando a ondulação é demasiado forte, as partidas são canceladas sem aviso prévio."
   },
   {
    "fr": "À l'arrivée à Horta, des voiliers du monde entier remplissent la marina.",
    "pt": "À chegada à Horta, veleiros do mundo inteiro enchem a marina."
   },
   {
    "fr": "Les navigateurs ont l'habitude de peindre le nom de leur bateau sur le quai.",
    "pt": "Os velejadores têm o hábito de pintar o nome do barco no cais."
   },
   {
    "fr": "On dit que partir sans laisser de peinture porte malheur.",
    "pt": "Diz-se que partir sem deixar uma pintura dá azar."
   },
   {
    "fr": "Nous avons bu un verre dans le célèbre café du port avant de rentrer.",
    "pt": "Bebemos um copo no célebre café do porto antes de regressar."
   }
  ]
 },
 {
  "title": "Arrivée à Funchal",
  "phrases": [
   {
    "fr": "Quand nous sommes arrivés à Funchal, la pluie avait déjà cessé.",
    "pt": "Quando chegámos ao Funchal, a chuva já tinha parado."
   },
   {
    "fr": "Nous avions réservé une petite chambre dans la vieille ville.",
    "pt": "Tínhamos reservado um pequeno quarto na zona velha da cidade."
   },
   {
    "fr": "Le propriétaire nous avait laissé les clés dans une boîte près de la porte.",
    "pt": "O dono tinha-nos deixado as chaves numa caixa ao lado da porta."
   },
   {
    "fr": "Je n'avais jamais vu un atterrissage aussi impressionnant.",
    "pt": "Nunca tinha visto uma aterragem tão impressionante."
   },
   {
    "fr": "Une amie m'avait prévenu que la piste était construite au-dessus de la mer.",
    "pt": "Uma amiga tinha-me avisado de que a pista estava construída sobre o mar."
   },
   {
    "fr": "On ne s'était pas rappelé que les magasins fermaient tôt le dimanche.",
    "pt": "Não nos tínhamos lembrado de que as lojas fechavam cedo ao domingo."
   },
   {
    "fr": "Heureusement, nos voisins avaient préparé du bolo do caco pour nous accueillir.",
    "pt": "Felizmente, os nossos vizinhos tinham preparado bolo do caco para nos receber."
   },
   {
    "fr": "Ils l'avaient servi chaud, avec du beurre à l'ail.",
    "pt": "Tinham-no servido quente, com manteiga de alho."
   },
   {
    "fr": "Avant minuit, nous avions déjà goûté notre première poncha.",
    "pt": "Antes da meia-noite, já tínhamos provado a nossa primeira poncha."
   },
   {
    "fr": "Personne ne nous avait dit que Madère était aussi verte.",
    "pt": "Ninguém nos tinha dito que a Madeira era tão verde."
   }
  ],
  "tip": {
   "title": "Le plus-que-parfait : « tinha + particípio »",
   "example": "Quand nous sommes arrivés à Funchal, la pluie avait déjà cessé. — Quando chegámos ao Funchal, a chuva já <b>tinha parado</b>.",
   "body": "Le plus-que-parfait se forme avec l'imparfait de « ter » suivi du participe passé : c'est l'équivalent exact de « j'avais fait ». Ex. : « Eu tinha jantado », « Tu tinhas saído », « Eles já tinham partido ». Le pronom se place après « tinha » avec un trait d'union (« Ela tinha-me avisado »), mais devant après une négation : « Não me tinha dito ». La forme simple (« chegara », « fizera ») existe aussi, mais elle est surtout littéraire."
  }
 },
 {
  "title": "Randonnée le long d'une levada",
  "phrases": [
   {
    "fr": "Les levadas sont d'anciens canaux qui transportaient l'eau à travers l'île.",
    "pt": "As levadas são antigos canais que levavam a água através da ilha."
   },
   {
    "fr": "Le sentier longe le canal sur des kilomètres, presque toujours à plat.",
    "pt": "O trilho acompanha o canal ao longo de vários quilómetros, quase sempre plano."
   },
   {
    "fr": "Par endroits, le chemin n'est pas plus large qu'un pied.",
    "pt": "Em certos sítios, o caminho não é mais largo do que um pé."
   },
   {
    "fr": "Il faut une lampe frontale pour traverser les tunnels creusés dans la roche.",
    "pt": "É preciso uma lanterna frontal para atravessar os túneis escavados na rocha."
   },
   {
    "fr": "La forêt de lauriers qui nous entoure existe depuis des millions d'années.",
    "pt": "A floresta Laurissilva que nos rodeia existe há milhões de anos."
   },
   {
    "fr": "On entend l'eau couler tout au long du parcours.",
    "pt": "Ouve-se a água a correr durante todo o percurso."
   },
   {
    "fr": "Au bout de trois heures, nous avons atteint une cascade magnifique.",
    "pt": "Ao fim de três horas, chegámos a uma cascata magnífica."
   },
   {
    "fr": "Autrefois, les levadeiros entretenaient ces canaux à la main.",
    "pt": "Antigamente, os levadeiros mantinham estes canais à mão."
   },
   {
    "fr": "Mieux vaut porter de bonnes chaussures, car les pierres glissent.",
    "pt": "Convém levar bom calçado, porque as pedras escorregam."
   },
   {
    "fr": "On est rentrés trempés, mais émerveillés par cette balade.",
    "pt": "Voltámos encharcados, mas maravilhados com o passeio."
   }
  ]
 },
 {
  "title": "Négocier avec un guide au Pico do Arieiro",
  "phrases": [
   {
    "fr": "Le guide nous a dit qu'il allait nous emmener au lever du soleil.",
    "pt": "O guia disse-nos que nos ia levar ao nascer do sol."
   },
   {
    "fr": "Il a expliqué que le prix comprenait le transport depuis Funchal.",
    "pt": "Explicou que o preço incluía o transporte a partir do Funchal."
   },
   {
    "fr": "Je lui ai répondu que c'était un peu cher pour deux personnes.",
    "pt": "Respondi-lhe que era um bocado caro para duas pessoas."
   },
   {
    "fr": "Il a assuré qu'il ne pouvait pas baisser davantage son tarif.",
    "pt": "Garantiu que não podia baixar mais o preço."
   },
   {
    "fr": "Finalement, il a proposé qu'on paie le transport à part.",
    "pt": "Acabou por propor que pagássemos o transporte à parte."
   },
   {
    "fr": "Ma femme lui a demandé s'il fournissait aussi des vestes chaudes.",
    "pt": "A minha mulher perguntou-lhe se também fornecia casacos quentes."
   },
   {
    "fr": "Il a dit qu'au sommet il faisait souvent moins de cinq degrés.",
    "pt": "Disse que no cume fazia muitas vezes menos de cinco graus."
   },
   {
    "fr": "Il nous a prévenus que le sentier vers le Pico Ruivo pouvait être fermé.",
    "pt": "Avisou-nos de que o trilho para o Pico Ruivo podia estar fechado."
   },
   {
    "fr": "Nous lui avons promis que nous serions prêts à cinq heures.",
    "pt": "Prometemos-lhe que estaríamos prontos às cinco horas."
   },
   {
    "fr": "En nous quittant, il a avoué qu'il n'avait jamais eu de clients aussi doués pour négocier.",
    "pt": "Ao despedir-se, confessou que nunca tinha tido clientes tão bons a negociar."
   }
  ],
  "tip": {
   "title": "Le discours indirect : « Ele disse que ia… »",
   "example": "Le guide nous a dit qu'il allait nous emmener au lever du soleil. — O guia disse-nos que <b>nos ia levar</b> ao nascer do sol.",
   "body": "Pour rapporter des paroles au passé, le portugais décale les temps comme le français : « vou » devient « ia », « posso » devient « podia », « fiz » devient « tinha feito ». Ex. : « Disse que estava cansado », « Disseram que vinham amanhã ». « Perguntar se » correspond à « demander si » : « Perguntou-me se eu queria ir ». Le futur devient conditionnel : « Prometeu que voltaria »."
  }
 },
 {
  "title": "Sete Cidades dans le brouillard",
  "phrases": [
   {
    "fr": "Aux Açores, on dit qu'on peut connaître les quatre saisons en une seule journée.",
    "pt": "Nos Açores, diz-se que se podem viver as quatro estações num só dia."
   },
   {
    "fr": "Ce matin, le soleil brillait au-dessus de Ponta Delgada.",
    "pt": "Esta manhã, o sol brilhava sobre Ponta Delgada."
   },
   {
    "fr": "Une heure plus tard, un brouillard épais couvrait tout le cratère.",
    "pt": "Uma hora depois, um nevoeiro cerrado cobria a cratera inteira."
   },
   {
    "fr": "Du belvédère, on ne voyait même pas les deux lagunes.",
    "pt": "Do miradouro, nem se viam as duas lagoas."
   },
   {
    "fr": "La légende raconte que l'une est verte et l'autre bleue à cause des larmes de deux amoureux.",
    "pt": "Conta a lenda que uma é verde e a outra azul por causa das lágrimas de dois apaixonados."
   },
   {
    "fr": "Nous avons attendu dans la voiture que le ciel se dégage.",
    "pt": "Esperámos no carro até o céu limpar."
   },
   {
    "fr": "Soudain, le vent a chassé les nuages en quelques minutes.",
    "pt": "De repente, o vento afastou as nuvens em poucos minutos."
   },
   {
    "fr": "Le paysage qui est apparu nous a coupé le souffle.",
    "pt": "A paisagem que apareceu deixou-nos sem fôlego."
   },
   {
    "fr": "Il vaut mieux toujours garder un imperméable dans son sac, même en été.",
    "pt": "Convém ter sempre um impermeável na mochila, mesmo no verão."
   },
   {
    "fr": "Ici, on ne fait jamais confiance aux prévisions de la veille.",
    "pt": "Aqui, nunca se confia na previsão do dia anterior."
   }
  ]
 },
 {
  "title": "Le cozido das Furnas",
  "phrases": [
   {
    "fr": "À Furnas, le sol est si chaud qu'on s'en sert pour cuisiner.",
    "pt": "Nas Furnas, o solo é tão quente que é usado para cozinhar."
   },
   {
    "fr": "Le cozido cuit pendant six heures dans des trous creusés près du lac.",
    "pt": "O cozido coze durante seis horas em buracos escavados junto à lagoa."
   },
   {
    "fr": "Les marmites sont enterrées dès le petit matin.",
    "pt": "As panelas são enterradas logo de manhã cedo."
   },
   {
    "fr": "La chaleur volcanique donne à la viande un goût légèrement soufré.",
    "pt": "O calor vulcânico dá à carne um sabor ligeiramente sulfuroso."
   },
   {
    "fr": "On a vu les cuisiniers sortir les marmites vers midi.",
    "pt": "Vimos os cozinheiros tirar as panelas por volta do meio-dia."
   },
   {
    "fr": "Le plat mélange plusieurs viandes, du chou et du boudin.",
    "pt": "O prato mistura várias carnes, couve e morcela."
   },
   {
    "fr": "Il est conseillé de réserver une table dans un restaurant du village.",
    "pt": "Recomenda-se reservar mesa num restaurante da vila."
   },
   {
    "fr": "Après le repas, nous nous sommes baignés dans une source d'eau ferrugineuse.",
    "pt": "Depois da refeição, tomámos banho numa nascente de água férrea."
   },
   {
    "fr": "L'eau orangée tache les maillots : mieux vaut en prendre un vieux.",
    "pt": "A água cor de laranja mancha os fatos de banho: mais vale levar um velho."
   },
   {
    "fr": "Ces fumerolles nous rappellent que l'île est toujours vivante.",
    "pt": "Estas fumarolas lembram-nos que a ilha continua viva."
   }
  ]
 },
 {
  "title": "Les vendanges dans une quinta du Douro",
  "phrases": [
   {
    "fr": "Bien que le soleil ne soit pas encore levé, les vendangeurs sont déjà dans les vignes.",
    "pt": "Embora o sol ainda não tenha nascido, os vindimadores já estão nas vinhas."
   },
   {
    "fr": "Bien que les terrasses soient très raides, personne ne se plaint.",
    "pt": "Embora os socalcos sejam muito íngremes, ninguém se queixa."
   },
   {
    "fr": "Bien que je n'aie aucune expérience, le chef d'équipe me fait confiance.",
    "pt": "Embora eu não tenha experiência nenhuma, o chefe da equipa confia em mim."
   },
   {
    "fr": "Les paniers sont lourds, mais on les porte en chantant.",
    "pt": "Os cestos são pesados, mas carregamo-los a cantar."
   },
   {
    "fr": "Bien que le travail soit épuisant, on rit beaucoup entre les rangs de vigne.",
    "pt": "Embora o trabalho seja cansativo, rimo-nos muito entre as videiras."
   },
   {
    "fr": "Le soir, on foule encore le raisin aux pieds dans des cuves en granit.",
    "pt": "À noite, ainda se pisam as uvas a pé nos lagares de granito."
   },
   {
    "fr": "Bien que ce soit une tradition ancienne, beaucoup de jeunes y participent.",
    "pt": "Embora seja uma tradição antiga, muitos jovens participam."
   },
   {
    "fr": "Le propriétaire de la quinta nous a fait goûter un porto de vingt ans.",
    "pt": "O dono da quinta deu-nos a provar um vinho do Porto de vinte anos."
   },
   {
    "fr": "Bien que nous ne soyons restés que trois jours, nous nous sentions déjà de la famille.",
    "pt": "Embora só tivéssemos ficado três dias, já nos sentíamos parte da família."
   },
   {
    "fr": "Le petit train historique nous a ramenés le long du fleuve jusqu'à Pinhão.",
    "pt": "O comboio histórico levou-nos ao longo do rio até ao Pinhão."
   }
  ],
  "tip": {
   "title": "« Embora » + subjonctif : bien que",
   "example": "Bien que les terrasses soient très raides, personne ne se plaint. — <b>Embora</b> os socalcos <b>sejam</b> muito íngremes, ninguém se queixa.",
   "body": "« Embora » (bien que) est toujours suivi du subjonctif, exactement comme en français : « Embora esteja cansado, continuo ». Pour parler du passé, on emploie le subjonctif imparfait : « Embora chovesse, saímos ». On peut aussi dire « apesar de » + infinitif : « Apesar de estar cansado, continuo ». « Mesmo que » (même si) suit la même règle : « Mesmo que chova, vamos »."
  }
 },
 {
  "title": "Observer les baleines de façon responsable",
  "phrases": [
   {
    "fr": "Autrefois, l'île de Pico vivait de la chasse à la baleine.",
    "pt": "Antigamente, a ilha do Pico vivia da caça à baleia."
   },
   {
    "fr": "Aujourd'hui, les anciens baleiniers sont devenus guides d'observation.",
    "pt": "Hoje, os antigos baleeiros tornaram-se guias de observação."
   },
   {
    "fr": "Des vigies repèrent les cétacés depuis des tours sur la côte.",
    "pt": "Os vigias avistam os cetáceos a partir de torres na costa."
   },
   {
    "fr": "Ils transmettent leur position au bateau par radio.",
    "pt": "Transmitem a posição ao barco por rádio."
   },
   {
    "fr": "Il est interdit de s'approcher à moins de cinquante mètres d'un animal.",
    "pt": "É proibido aproximar-se a menos de cinquenta metros de um animal."
   },
   {
    "fr": "Le capitaine coupe le moteur dès qu'un cachalot apparaît.",
    "pt": "O comandante desliga o motor assim que aparece um cachalote."
   },
   {
    "fr": "Nous avons choisi une entreprise qui respecte les règles de protection.",
    "pt": "Escolhemos uma empresa que respeita as regras de proteção."
   },
   {
    "fr": "Un groupe de dauphins a suivi le bateau pendant plusieurs minutes.",
    "pt": "Um grupo de golfinhos acompanhou o barco durante vários minutos."
   },
   {
    "fr": "Voir la queue d'un cachalot disparaître sous l'eau est un moment inoubliable.",
    "pt": "Ver a cauda de um cachalote a desaparecer debaixo de água é um momento inesquecível."
   },
   {
    "fr": "Une partie du prix finance la recherche scientifique locale.",
    "pt": "Uma parte do preço financia a investigação científica local."
   }
  ]
 },
 {
  "title": "Le vignoble de Pico",
  "phrases": [
   {
    "fr": "Les vignes de Pico poussent entre des murets de pierre volcanique.",
    "pt": "As vinhas do Pico crescem entre muros de pedra vulcânica."
   },
   {
    "fr": "Ces petits enclos protègent les ceps du vent et des embruns.",
    "pt": "Estes pequenos currais protegem as videiras do vento e da maresia."
   },
   {
    "fr": "Ce paysage est classé au patrimoine mondial depuis deux mille quatre.",
    "pt": "Esta paisagem é Património Mundial desde dois mil e quatro."
   },
   {
    "fr": "Il a fallu des siècles pour construire ce labyrinthe de pierre.",
    "pt": "Foram precisos séculos para construir este labirinto de pedra."
   },
   {
    "fr": "Le vin le plus célèbre de l'île s'appelle le verdelho.",
    "pt": "O vinho mais famoso da ilha é o verdelho."
   },
   {
    "fr": "Le vigneron nous a montré comment la lave garde la chaleur du jour.",
    "pt": "O viticultor mostrou-nos como a lava guarda o calor do dia."
   },
   {
    "fr": "Les vendanges se font entièrement à la main, faute de place pour les machines.",
    "pt": "A vindima é feita toda à mão, porque não há espaço para máquinas."
   },
   {
    "fr": "Nous avons dégusté trois vins blancs face à la mer.",
    "pt": "Provámos três vinhos brancos de frente para o mar."
   },
   {
    "fr": "Ce vin a un goût salé qu'on ne trouve nulle part ailleurs.",
    "pt": "Este vinho tem um sabor salgado que não se encontra em mais lado nenhum."
   },
   {
    "fr": "Nous avons rapporté deux bouteilles, bien emballées dans nos valises.",
    "pt": "Trouxemos duas garrafas, bem embrulhadas nas malas."
   }
  ]
 },
 {
  "title": "La Serra da Estrela et son fromage",
  "phrases": [
   {
    "fr": "La Serra da Estrela est la plus haute montagne du Portugal continental.",
    "pt": "A Serra da Estrela é a montanha mais alta de Portugal continental."
   },
   {
    "fr": "En hiver, il arrive qu'il neige sur les sommets.",
    "pt": "No inverno, às vezes neva nos cumes."
   },
   {
    "fr": "Nous avons visité une fromagerie familiale près de Seia.",
    "pt": "Visitámos uma queijaria familiar perto de Seia."
   },
   {
    "fr": "Le queijo da Serra est fabriqué avec du lait de brebis cru.",
    "pt": "O queijo da Serra é feito com leite de ovelha cru."
   },
   {
    "fr": "On utilise de la fleur de chardon pour faire cailler le lait.",
    "pt": "Usa-se flor de cardo para coalhar o leite."
   },
   {
    "fr": "Quand il est bien crémeux, on coupe le dessus et on mange la pâte à la cuillère.",
    "pt": "Quando está amanteigado, corta-se a tampa e come-se a pasta à colher."
   },
   {
    "fr": "La fromagère travaille avec sa mère depuis quarante ans.",
    "pt": "A queijeira trabalha com a mãe há quarenta anos."
   },
   {
    "fr": "Les chiens de berger de la région sont célèbres dans tout le pays.",
    "pt": "Os cães da Serra da Estrela são famosos em todo o país."
   },
   {
    "fr": "Le soir, il faisait si froid qu'on a allumé la cheminée.",
    "pt": "À noite, estava tanto frio que acendemos a lareira."
   },
   {
    "fr": "Nous sommes repartis avec un fromage entier enveloppé dans un torchon.",
    "pt": "Partimos com um queijo inteiro embrulhado num pano."
   }
  ]
 },
 {
  "title": "Les vagues géantes de Nazaré",
  "phrases": [
   {
    "fr": "En hiver, Nazaré attire les meilleurs surfeurs de vagues géantes.",
    "pt": "No inverno, a Nazaré atrai os melhores surfistas de ondas gigantes."
   },
   {
    "fr": "Un canyon sous-marin explique la hauteur exceptionnelle des vagues.",
    "pt": "Um canhão submarino explica a altura excecional das ondas."
   },
   {
    "fr": "Certaines vagues dépassent la hauteur d'un immeuble de dix étages.",
    "pt": "Algumas ondas ultrapassam a altura de um prédio de dez andares."
   },
   {
    "fr": "Depuis le phare, la foule retient son souffle à chaque descente.",
    "pt": "Do farol, a multidão sustém a respiração a cada descida."
   },
   {
    "fr": "Les surfeurs sont tractés par des jet-skis pour attraper les vagues.",
    "pt": "Os surfistas são rebocados por motas de água para apanhar as ondas."
   },
   {
    "fr": "Les jours de grosse houle, la police ferme l'accès aux rochers.",
    "pt": "Nos dias de grande ondulação, a polícia fecha o acesso às rochas."
   },
   {
    "fr": "En bas, sur la plage, certaines femmes portent encore les sept jupes traditionnelles.",
    "pt": "Lá em baixo, na praia, ainda há mulheres com as sete saias tradicionais."
   },
   {
    "fr": "Elles vendent du poisson séché au soleil sur des claies.",
    "pt": "Vendem peixe seco ao sol em estendais."
   },
   {
    "fr": "Le funiculaire relie la plage au quartier du Sítio, en haut de la falaise.",
    "pt": "O ascensor liga a praia ao Sítio, lá no alto da falésia."
   },
   {
    "fr": "Nous n'oublierons jamais le fracas des vagues contre la falaise.",
    "pt": "Nunca nos vamos esquecer do estrondo das ondas contra a falésia."
   }
  ]
 },
 {
  "title": "Un cours de surf à Peniche",
  "phrases": [
   {
    "fr": "Ce matin, les vagues sont trop fortes : pour les débutants, ce n'est pas possible.",
    "pt": "Esta manhã, as ondas estão fortes demais: para principiantes, não dá."
   },
   {
    "fr": "Le moniteur propose qu'on aille faire un tour à Baleal en attendant.",
    "pt": "O instrutor sugere que vamos dar uma volta ao Baleal enquanto esperamos."
   },
   {
    "fr": "Une combinaison plus épaisse ne serait pas de refus avec cette eau froide.",
    "pt": "Um fato mais grosso dava jeito com esta água fria."
   },
   {
    "fr": "Vers midi, la mer s'est calmée et on a enfin pu entrer dans l'eau.",
    "pt": "Por volta do meio-dia, o mar acalmou e finalmente deu para entrar na água."
   },
   {
    "fr": "Je ne me suis pas rendu compte que le courant m'emportait vers les rochers.",
    "pt": "Não dei conta de que a corrente me estava a levar para as rochas."
   },
   {
    "fr": "Cette séance m'a complètement démoli le dos.",
    "pt": "Esta sessão deu cabo das minhas costas."
   },
   {
    "fr": "Je m'entends très bien avec les autres élèves de l'école.",
    "pt": "Dou-me muito bem com os outros alunos da escola."
   },
   {
    "fr": "En sortant, nous sommes tombés sur une petite gargote de poisson grillé.",
    "pt": "À saída, demos com uma pequena tasca de peixe grelhado."
   },
   {
    "fr": "Nous avons fait un dernier plongeon avant le coucher du soleil.",
    "pt": "Demos um último mergulho antes do pôr do sol."
   },
   {
    "fr": "Peniche vit du surf, mais aussi de la pêche, depuis toujours.",
    "pt": "Peniche vive do surf, mas também da pesca, desde sempre."
   }
  ],
  "tip": {
   "title": "Les expressions avec « dar »",
   "example": "Une combinaison plus épaisse ne serait pas de refus avec cette eau froide. — Um fato mais grosso <b>dava jeito</b> com esta água fria.",
   "body": "« Dar » entre dans une foule d'expressions très courantes au Portugal : « dar jeito » (être pratique, arranger), « dar para » (être possible : « Não dá! »), « dar conta de » (se rendre compte), « dar com » (tomber sur), « dar-se bem com » (bien s'entendre avec). Ex. : « Dava-me jeito sair mais cedo », « Dei com ele no café », « Dás-te bem com a tua irmã? ». Ces tournures donnent tout de suite un portugais plus naturel."
  }
 },
 {
  "title": "Óbidos, sa ginja et ses fêtes",
  "phrases": [
   {
    "fr": "Óbidos est entourée de remparts qu'on peut parcourir à pied.",
    "pt": "Óbidos está rodeada de muralhas que se podem percorrer a pé."
   },
   {
    "fr": "Le chemin de ronde n'a pas de garde-corps, alors il faut faire attention.",
    "pt": "O caminho da muralha não tem corrimão, por isso é preciso ter cuidado."
   },
   {
    "fr": "Dans chaque ruelle, quelqu'un vous propose de goûter la ginja.",
    "pt": "Em cada ruela, há alguém a oferecer ginja para provar."
   },
   {
    "fr": "Cette liqueur de griotte se boit dans un petit gobelet en chocolat.",
    "pt": "Este licor de ginja bebe-se num copinho de chocolate."
   },
   {
    "fr": "On mange le gobelet après l'avoir vidé, évidemment.",
    "pt": "Come-se o copo depois de o esvaziar, claro."
   },
   {
    "fr": "En été, la ville accueille un grand marché médiéval.",
    "pt": "No verão, a vila recebe um grande mercado medieval."
   },
   {
    "fr": "Les habitants se déguisent en chevaliers et en marchands.",
    "pt": "Os habitantes vestem-se de cavaleiros e de mercadores."
   },
   {
    "fr": "Des musiciens jouent de la cornemuse devant la porte de la ville.",
    "pt": "Uns músicos tocam gaita de foles à porta da vila."
   },
   {
    "fr": "Au printemps, c'est le festival du chocolat qui remplit les rues.",
    "pt": "Na primavera, é o festival do chocolate que enche as ruas."
   },
   {
    "fr": "Il y a tellement de monde qu'il vaut mieux arriver avant dix heures.",
    "pt": "Há tanta gente que é melhor chegar antes das dez horas."
   }
  ]
 },
 {
  "title": "Tomar et le couvent du Christ",
  "phrases": [
   {
    "fr": "Le couvent du Christ domine la ville depuis le haut de la colline.",
    "pt": "O Convento de Cristo domina a cidade do alto da colina."
   },
   {
    "fr": "Il a été fondé par les Templiers au douzième siècle.",
    "pt": "Foi fundado pelos Templários no século doze."
   },
   {
    "fr": "La rotonde des Templiers est décorée de peintures dorées.",
    "pt": "A charola dos Templários está decorada com pinturas douradas."
   },
   {
    "fr": "On raconte que les chevaliers assistaient à la messe à cheval.",
    "pt": "Conta-se que os cavaleiros assistiam à missa a cavalo."
   },
   {
    "fr": "La fenêtre manuéline est couverte de cordages, de coraux et d'algues sculptés.",
    "pt": "A janela manuelina está coberta de cordas, corais e algas esculpidos."
   },
   {
    "fr": "Tous les quatre ans, la ville célèbre la fête des Tabuleiros.",
    "pt": "De quatro em quatro anos, a cidade celebra a Festa dos Tabuleiros."
   },
   {
    "fr": "Les jeunes filles portent sur la tête de très hauts plateaux de pain.",
    "pt": "As raparigas levam à cabeça tabuleiros de pão muito altos."
   },
   {
    "fr": "Chaque plateau doit mesurer la taille de la jeune fille qui le porte.",
    "pt": "Cada tabuleiro deve ter a altura da rapariga que o leva."
   },
   {
    "fr": "Les rues sont ornées de fleurs en papier fabriquées par les habitants.",
    "pt": "As ruas são enfeitadas com flores de papel feitas pelos moradores."
   },
   {
    "fr": "Nous avons eu la chance d'être là l'année de la fête.",
    "pt": "Tivemos a sorte de lá estar no ano da festa."
   }
  ]
 },
 {
  "title": "Monsanto, le village entre les rochers",
  "phrases": [
   {
    "fr": "Monsanto a été construit au milieu d'énormes blocs de granit.",
    "pt": "Monsanto foi construída no meio de enormes penedos de granito."
   },
   {
    "fr": "Certaines maisons utilisent un rocher comme toit.",
    "pt": "Algumas casas usam um penedo como telhado."
   },
   {
    "fr": "Les ruelles montent tellement qu'on s'arrête souvent pour reprendre son souffle.",
    "pt": "As ruelas sobem tanto que paramos muitas vezes para recuperar o fôlego."
   },
   {
    "fr": "Il ne reste qu'une centaine d'habitants toute l'année.",
    "pt": "Restam apenas uns cem habitantes durante todo o ano."
   },
   {
    "fr": "Une vieille dame nous a invités à entrer chez elle.",
    "pt": "Uma senhora de idade convidou-nos a entrar em casa dela."
   },
   {
    "fr": "Elle nous a montré les adufes, des tambourins carrés de la région.",
    "pt": "Mostrou-nos os adufes, uns pandeiros quadrados típicos da região."
   },
   {
    "fr": "Du château en ruines, la vue porte jusqu'à la frontière.",
    "pt": "Do castelo em ruínas, a vista alcança a fronteira."
   },
   {
    "fr": "Le village semble figé dans le temps.",
    "pt": "A aldeia parece parada no tempo."
   },
   {
    "fr": "Il vaut mieux éviter de monter au château aux heures les plus chaudes.",
    "pt": "Convém evitar subir ao castelo nas horas de mais calor."
   },
   {
    "fr": "Le soir, seul le vent vient troubler le silence.",
    "pt": "À noite, só o vento quebra o silêncio."
   }
  ]
 },
 {
  "title": "Séjourner dans un village de schiste",
  "phrases": [
   {
    "fr": "Les villages de schiste sont cachés dans les montagnes du centre du pays.",
    "pt": "As aldeias do xisto escondem-se nas serras do centro do país."
   },
   {
    "fr": "Beaucoup avaient été abandonnés avant d'être restaurés.",
    "pt": "Muitas tinham sido abandonadas antes de serem recuperadas."
   },
   {
    "fr": "Nous avons loué une maison rénovée par un couple de la région.",
    "pt": "Alugámos uma casa recuperada por um casal da região."
   },
   {
    "fr": "Pour voyager de façon responsable, nous achetons tout aux producteurs locaux.",
    "pt": "Para viajar de forma responsável, compramos tudo aos produtores locais."
   },
   {
    "fr": "Le miel et les châtaignes viennent directement du village voisin.",
    "pt": "O mel e as castanhas vêm diretamente da aldeia vizinha."
   },
   {
    "fr": "Ici, on laisse la voiture et on se déplace à pied.",
    "pt": "Aqui, deixamos o carro e andamos a pé."
   },
   {
    "fr": "Les sentiers relient les villages entre eux à travers la forêt.",
    "pt": "Os trilhos ligam as aldeias umas às outras através da floresta."
   },
   {
    "fr": "Il est important de ne laisser aucun déchet derrière soi.",
    "pt": "É importante não deixar lixo nenhum para trás."
   },
   {
    "fr": "Le tourisme a redonné vie à ces hameaux presque déserts.",
    "pt": "O turismo devolveu a vida a estes lugarejos quase desertos."
   },
   {
    "fr": "On repart avec l'impression d'avoir aidé, à notre échelle.",
    "pt": "Partimos com a sensação de ter ajudado, à nossa escala."
   }
  ]
 },
 {
  "title": "Une soirée à Madère : poncha et espetada",
  "phrases": [
   {
    "fr": "À Madère, la soirée se termine souvent dans une petite taverne.",
    "pt": "Na Madeira, a noite acaba muitas vezes numa pequena tasca."
   },
   {
    "fr": "La poncha se prépare avec de l'eau-de-vie de canne, du miel et du citron.",
    "pt": "A poncha faz-se com aguardente de cana, mel e limão."
   },
   {
    "fr": "Le barman mélange le tout avec un bâton en bois prévu pour ça.",
    "pt": "O empregado mexe tudo com um pau de madeira próprio."
   },
   {
    "fr": "Elle se boit facilement, mais elle est bien plus forte qu'elle n'en a l'air.",
    "pt": "Bebe-se bem, mas é muito mais forte do que parece."
   },
   {
    "fr": "Ensuite, on nous a servi l'espetada sur une broche suspendue au-dessus de la table.",
    "pt": "Depois, serviram-nos a espetada num espeto pendurado por cima da mesa."
   },
   {
    "fr": "Traditionnellement, la viande est enfilée sur des branches de laurier.",
    "pt": "Tradicionalmente, a carne é espetada em paus de loureiro."
   },
   {
    "fr": "On l'accompagne de bolo do caco et de milho frito.",
    "pt": "Acompanha-se com bolo do caco e milho frito."
   },
   {
    "fr": "Un vieux monsieur a commencé à chanter au fond de la salle.",
    "pt": "Um senhor de idade começou a cantar ao fundo da sala."
   },
   {
    "fr": "Toute la taverne a repris le refrain avec lui.",
    "pt": "A tasca inteira cantou o refrão com ele."
   },
   {
    "fr": "Après une soirée pareille, mieux vaut rentrer à pied.",
    "pt": "Depois de uma noite assim, mais vale voltar a pé."
   }
  ]
 },
 {
  "title": "Préparer une randonnée dans le Gerês",
  "phrases": [
   {
    "fr": "Au cas où il pleuvrait, nous prendrons le sentier le plus court.",
    "pt": "Caso chova, vamos pelo trilho mais curto."
   },
   {
    "fr": "Nous partirons à l'aube, à moins que le guide ne préfère attendre.",
    "pt": "Partimos de madrugada, a não ser que o guia prefira esperar."
   },
   {
    "fr": "Au cas où on se perdrait, chacun a la carte sur son téléphone.",
    "pt": "Caso nos percamos, cada um tem o mapa no telemóvel."
   },
   {
    "fr": "On ne se baignera pas dans les cascades, à moins qu'il fasse vraiment chaud.",
    "pt": "Não vamos nadar nas cascatas, a não ser que esteja mesmo calor."
   },
   {
    "fr": "Le parc national abrite des chevaux sauvages, les garranos.",
    "pt": "O parque nacional abriga cavalos selvagens, os garranos."
   },
   {
    "fr": "Au cas où nous croiserions des vaches, il faudra s'écarter calmement.",
    "pt": "Caso nos cruzemos com vacas, temos de nos afastar com calma."
   },
   {
    "fr": "On ne peut pas camper dans le parc, sauf dans un camping.",
    "pt": "Não se pode acampar no parque, a não ser que seja num parque de campismo."
   },
   {
    "fr": "Prenez une veste au cas où le temps changerait en altitude.",
    "pt": "Levem um casaco, caso o tempo mude lá em cima."
   },
   {
    "fr": "Nous dormirons dans un refuge, à moins qu'il ne soit complet.",
    "pt": "Vamos dormir num abrigo, a não ser que esteja cheio."
   },
   {
    "fr": "Si tout se passe bien, nous arriverons demain soir à Pitões das Júnias.",
    "pt": "Se tudo correr bem, chegamos amanhã à noite a Pitões das Júnias."
   }
  ],
  "tip": {
   "title": "« Caso » et « a não ser que » + subjonctif",
   "example": "Nous partirons à l'aube, à moins que le guide ne préfère attendre. — Partimos de madrugada, <b>a não ser que</b> o guia <b>prefira</b> esperar.",
   "body": "« Caso » (au cas où, si jamais) et « a não ser que » (à moins que) exigent le subjonctif présent : « Caso precises, liga-me », « Vou a pé, a não ser que chova ». Dans un récit au passé, on passe au subjonctif imparfait : « Disse que vinha, a não ser que estivesse cansado ». Avec « se » (si) tourné vers l'avenir, on emploie le futur du subjonctif : « Se chover, fico em casa »."
  }
 },
 {
  "title": "Retour à Madère dix ans après",
  "phrases": [
   {
    "fr": "Nous sommes revenus à Madère dix ans après notre voyage de noces.",
    "pt": "Voltámos à Madeira dez anos depois da nossa lua de mel."
   },
   {
    "fr": "L'aéroport s'est agrandi, mais l'atterrissage reste aussi spectaculaire qu'avant.",
    "pt": "O aeroporto cresceu, mas a aterragem continua tão espetacular como antes."
   },
   {
    "fr": "Le petit hôtel où nous avions dormi est devenu une maison d'hôtes.",
    "pt": "O pequeno hotel onde tínhamos dormido passou a ser uma casa de hóspedes."
   },
   {
    "fr": "Le marché des Lavradores est toujours aussi coloré.",
    "pt": "O Mercado dos Lavradores continua tão colorido como sempre."
   },
   {
    "fr": "La vendeuse de fruits se souvenait vaguement de nous.",
    "pt": "A vendedora de fruta lembrava-se vagamente de nós."
   },
   {
    "fr": "Nous avons refait la descente depuis Monte dans les traîneaux en osier.",
    "pt": "Voltámos a descer do Monte nos carros de cesto."
   },
   {
    "fr": "Les deux conducteurs semblaient ne pas avoir vieilli.",
    "pt": "Os dois carreiros pareciam não ter envelhecido."
   },
   {
    "fr": "Ce qui a le plus changé, finalement, c'est nous.",
    "pt": "Afinal, quem mudou mais fomos nós."
   },
   {
    "fr": "Cette fois, j'ai pu parler portugais avec tout le monde.",
    "pt": "Desta vez, consegui falar português com toda a gente."
   },
   {
    "fr": "Nous nous sommes promis de ne pas attendre encore dix ans.",
    "pt": "Prometemos um ao outro não esperar mais dez anos."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a menés des îles de l'Atlantique aux montagnes du continent.",
    "pt": "Este módulo levou-nos das ilhas do Atlântico às serras do continente."
   },
   {
    "fr": "Nous avons traversé la mer, marché le long des levadas et vendangé dans le Douro.",
    "pt": "Atravessámos o mar, caminhámos ao longo das levadas e vindimámos no Douro."
   },
   {
    "fr": "Le plus-que-parfait et le discours indirect nous sont maintenant familiers.",
    "pt": "O mais-que-perfeito e o discurso indireto já nos são familiares."
   },
   {
    "fr": "Nous savons employer « embora », « caso » et « a não ser que » sans hésiter.",
    "pt": "Já sabemos usar « embora », « caso » e « a não ser que » sem hesitar."
   },
   {
    "fr": "Les expressions avec « dar » rendent notre portugais plus naturel.",
    "pt": "As expressões com « dar » tornam o nosso português mais natural."
   },
   {
    "fr": "Négocier avec un guide en portugais ne nous fait plus peur.",
    "pt": "Negociar com um guia em português já não nos assusta."
   },
   {
    "fr": "Chaque région nous a appris des mots qu'on ne trouve pas dans les livres.",
    "pt": "Cada região ensinou-nos palavras que não vêm nos livros."
   },
   {
    "fr": "On se débrouille désormais seuls, même quand le temps ou les plans changent.",
    "pt": "Agora já nos desenrascamos sozinhos, mesmo quando o tempo ou os planos mudam."
   },
   {
    "fr": "Bravo pour tout ce chemin parcouru ensemble.",
    "pt": "Parabéns por todo este caminho percorrido juntos."
   },
   {
    "fr": "Rendez-vous dans le prochain module pour parler de tout et de rien.",
    "pt": "Encontramo-nos no próximo módulo para conversar sobre tudo e mais alguma coisa."
   }
  ]
 }
];

const level3Module3Lessons = [
 {
  "title": "Les expressions idiomatiques portugaises",
  "phrases": [
   {
    "fr": "Quand mon collègue a fait une gaffe en réunion, tout le monde a ri.",
    "pt": "Quando o meu colega meteu água na reunião, toda a gente se riu."
   },
   {
    "fr": "Il faut avoir du culot pour arriver en retard et se plaindre du service.",
    "pt": "É preciso ter lata para chegar atrasado e queixar-se do serviço."
   },
   {
    "fr": "Ce matin, mon chef était de très mauvaise humeur.",
    "pt": "Esta manhã, o meu chefe estava com os azeites."
   },
   {
    "fr": "Les expressions idiomatiques révèlent beaucoup de choses sur la culture d'un pays.",
    "pt": "As expressões idiomáticas revelam muita coisa sobre a cultura de um país."
   },
   {
    "fr": "Ma grand-mère disait toujours que ça ne sert à rien de pleurer sur le lait renversé.",
    "pt": "A minha avó dizia sempre que não vale a pena chorar sobre leite derramado."
   },
   {
    "fr": "Si quelqu'un t'envoie « peigner des singes », c'est qu'il veut que tu le laisses tranquille.",
    "pt": "Se alguém te mandar pentear macacos, é porque quer que o deixes em paz."
   },
   {
    "fr": "J'ai mis du temps à comprendre que « faire figure d'ours » veut dire se ridiculiser.",
    "pt": "Demorei a perceber que « fazer figura de urso » quer dizer fazer uma figura ridícula."
   },
   {
    "fr": "Traduire ces expressions mot à mot n'a souvent aucun sens.",
    "pt": "Traduzir estas expressões à letra muitas vezes não faz sentido nenhum."
   },
   {
    "fr": "Mon ami portugais m'apprenait une nouvelle expression chaque semaine.",
    "pt": "O meu amigo português ensinava-me uma expressão nova todas as semanas."
   },
   {
    "fr": "Placer ces expressions au bon moment fait toujours sourire les gens.",
    "pt": "Usar estas expressões no momento certo põe sempre as pessoas a sorrir."
   }
  ],
  "tip": {
   "title": "Les expressions idiomatiques : « meter água », « ter lata », « estar com os azeites »",
   "example": "Quand mon collègue a fait une gaffe en réunion, tout le monde a ri. — Quando o meu colega <b>meteu água</b> na reunião, toda a gente se riu.",
   "body": "« Meter água » (littéralement « mettre de l'eau ») veut dire faire une gaffe ou se tromper : « Meti água no exame ». « Ter lata » (« avoir de la boîte de conserve ») correspond à « avoir du culot » : « Que lata! », « Ele tem cá uma lata! ». « Estar com os azeites », c'est être de mauvaise humeur, un peu comme « être mal luné » : « Hoje ela está com os azeites. » Ces expressions sont typiquement portugaises et font toujours plaisir à entendre dans la bouche d'un étranger."
  }
 },
 {
  "title": "Débattre des réseaux sociaux",
  "phrases": [
   {
    "fr": "Je passe beaucoup trop de temps sur mon téléphone à regarder des publications.",
    "pt": "Passo demasiado tempo agarrado ao telemóvel a ver publicações."
   },
   {
    "fr": "Ma sœur pense que les réseaux sociaux rendent les gens plus seuls.",
    "pt": "A minha irmã acha que as redes sociais deixam as pessoas mais sozinhas."
   },
   {
    "fr": "Je ne suis pas tout à fait d'accord avec elle sur ce point.",
    "pt": "Não concordo totalmente com ela nesse ponto."
   },
   {
    "fr": "Grâce à ces plateformes, j'ai retrouvé des amis d'école que j'avais perdus de vue.",
    "pt": "Graças a estas plataformas, reencontrei amigos da escola que tinha perdido de vista."
   },
   {
    "fr": "Le problème, c'est que tout le monde ne montre que le meilleur de sa vie.",
    "pt": "O problema é que toda a gente só mostra o melhor da sua vida."
   },
   {
    "fr": "Les fausses nouvelles circulent beaucoup plus vite que les vraies.",
    "pt": "As notícias falsas circulam muito mais depressa do que as verdadeiras."
   },
   {
    "fr": "Je me demande si mes neveux arriveraient à vivre sans leur téléphone.",
    "pt": "Pergunto-me se os meus sobrinhos conseguiriam viver sem o telemóvel."
   },
   {
    "fr": "Depuis que j'ai supprimé certaines applications, je dors mieux.",
    "pt": "Desde que apaguei algumas aplicações, durmo melhor."
   },
   {
    "fr": "Il faudrait que les écoles apprennent aux élèves à utiliser ces outils avec esprit critique.",
    "pt": "Era preciso que as escolas ensinassem os alunos a usar estas ferramentas com espírito crítico."
   },
   {
    "fr": "Au fond, ce n'est pas l'outil qui pose problème, mais la façon dont on s'en sert.",
    "pt": "No fundo, o problema não é a ferramenta, mas a maneira como a usamos."
   }
  ]
 },
 {
  "title": "Parler de santé mentale sans tabou",
  "phrases": [
   {
    "fr": "Ma collègue m'a avoué qu'elle se sentait épuisée depuis des mois.",
    "pt": "A minha colega confessou-me que se sentia esgotada há meses."
   },
   {
    "fr": "Elle m'a dit qu'elle avait enfin pris rendez-vous avec un psychologue.",
    "pt": "Disse-me que tinha finalmente marcado uma consulta com um psicólogo."
   },
   {
    "fr": "Oui, je me sens un peu mieux ; d'ailleurs, j'arrive enfin à dormir.",
    "pt": "Pois, sinto-me um pouco melhor; aliás, já consigo dormir."
   },
   {
    "fr": "Elle travaillait jour et nuit, donc elle a fini par craquer.",
    "pt": "Trabalhava dia e noite, portanto acabou por ir abaixo."
   },
   {
    "fr": "Bref, elle a compris qu'elle devait ralentir.",
    "pt": "Enfim, percebeu que tinha de abrandar."
   },
   {
    "fr": "Il y a quelques années, presque personne n'osait parler de ces sujets.",
    "pt": "Há uns anos, quase ninguém se atrevia a falar destes assuntos."
   },
   {
    "fr": "Aujourd'hui, de plus en plus de gens demandent de l'aide sans avoir honte.",
    "pt": "Hoje em dia, cada vez mais pessoas pedem ajuda sem terem vergonha."
   },
   {
    "fr": "Je lui ai dit qu'elle pouvait compter sur moi à n'importe quel moment.",
    "pt": "Disse-lhe que podia contar comigo a qualquer momento."
   },
   {
    "fr": "Prendre soin de sa tête est aussi important que prendre soin de son corps.",
    "pt": "Cuidar da cabeça é tão importante como cuidar do corpo."
   },
   {
    "fr": "Je suis content qu'elle ait eu assez confiance en moi pour m'en parler.",
    "pt": "Fico contente por ela ter tido confiança suficiente para me falar disso."
   }
  ],
  "tip": {
   "title": "Les marqueurs de discours : « pois », « aliás », « portanto », « enfim »",
   "example": "Oui, je me sens un peu mieux ; d'ailleurs, j'arrive enfin à dormir. — <b>Pois</b>, sinto-me um pouco melhor; <b>aliás</b>, já consigo dormir.",
   "body": "« Pois » est partout à l'oral au Portugal : il signifie « oui », « eh oui, c'est ça » (« Pois, tens razão », « Pois é »). « Aliás » correspond à « d'ailleurs » ou « ou plutôt » (« Aliás, eu já sabia »), « portanto » à « donc » (« Está a chover, portanto fico em casa ») et « enfim » à « bref » ou « enfin » pour conclure ou soupirer (« Enfim, paciência! »). Bien placés, ces petits mots rendent ton portugais beaucoup plus naturel."
  }
 },
 {
  "title": "Un dilemme moral",
  "phrases": [
   {
    "fr": "Mon cousin a trouvé un portefeuille plein d'argent dans le métro.",
    "pt": "O meu primo encontrou uma carteira cheia de dinheiro no metro."
   },
   {
    "fr": "Il n'y avait aucun papier d'identité, seulement trois cents euros.",
    "pt": "Não havia nenhum documento de identificação, só trezentos euros."
   },
   {
    "fr": "Il m'a demandé ce que j'aurais fait à sa place.",
    "pt": "Perguntou-me o que é que eu teria feito no lugar dele."
   },
   {
    "fr": "Honnêtement, j'ai hésité avant de lui répondre.",
    "pt": "Sinceramente, hesitei antes de lhe responder."
   },
   {
    "fr": "Si ça avait été moi, je l'aurais apporté au commissariat.",
    "pt": "Se tivesse sido eu, tê-la-ia levado à esquadra."
   },
   {
    "fr": "Mais il est au chômage et il a du mal à payer son loyer.",
    "pt": "Mas ele está desempregado e tem dificuldade em pagar a renda."
   },
   {
    "fr": "Ce n'est pas toujours facile de faire ce qui est juste.",
    "pt": "Nem sempre é fácil fazer o que está certo."
   },
   {
    "fr": "Finalement, il a rendu le portefeuille au commissariat le plus proche.",
    "pt": "No fim, entregou a carteira na esquadra mais próxima."
   },
   {
    "fr": "Une semaine plus tard, le propriétaire l'a appelé pour le remercier.",
    "pt": "Uma semana depois, o dono ligou-lhe para lhe agradecer."
   },
   {
    "fr": "Je crois qu'il ne regrettera jamais d'avoir été honnête.",
    "pt": "Acho que ele nunca se vai arrepender de ter sido honesto."
   }
  ]
 },
 {
  "title": "Protéger les forêts des incendies d'été",
  "phrases": [
   {
    "fr": "Chaque été, les incendies détruisent des milliers d'hectares au Portugal.",
    "pt": "Todos os verões, os incêndios destroem milhares de hectares em Portugal."
   },
   {
    "fr": "Les eucalyptus brûlent très vite et laissent les sols appauvris.",
    "pt": "Os eucaliptos ardem muito depressa e deixam os solos empobrecidos."
   },
   {
    "fr": "Beaucoup de terrains ont été abandonnés quand les gens sont partis en ville.",
    "pt": "Muitos terrenos ficaram ao abandono quando as pessoas partiram para as cidades."
   },
   {
    "fr": "Les pompiers volontaires ont lutté jour et nuit pour sauver le village.",
    "pt": "Os bombeiros voluntários lutaram dia e noite para salvar a aldeia."
   },
   {
    "fr": "Mon oncle a arrêté de fumer après avoir vu son terrain brûler.",
    "pt": "O meu tio deixou de fumar depois de ver o terreno dele arder."
   },
   {
    "fr": "Les autorités ne laissent personne faire de barbecue dans la forêt en été.",
    "pt": "As autoridades não deixam ninguém fazer churrascos na floresta no verão."
   },
   {
    "fr": "Il faut débroussailler les terrains autour des maisons avant le mois de mai.",
    "pt": "É preciso limpar os terrenos à volta das casas antes do mês de maio."
   },
   {
    "fr": "Les incendies de Pedrógão Grande ont marqué tout le pays.",
    "pt": "Os incêndios de Pedrógão Grande marcaram o país inteiro."
   },
   {
    "fr": "Replanter des chênes et des chênes-lièges serait une bonne solution.",
    "pt": "Voltar a plantar carvalhos e sobreiros seria uma boa solução."
   },
   {
    "fr": "Protéger la forêt, c'est aussi protéger les gens qui y vivent.",
    "pt": "Proteger a floresta é também proteger as pessoas que lá vivem."
   }
  ],
  "tip": {
   "title": "Les différents sens de « deixar »",
   "example": "Mon oncle a arrêté de fumer après avoir vu son terrain brûler. — O meu tio <b>deixou de</b> fumar depois de ver o terreno dele arder.",
   "body": "« Deixar » signifie d'abord « laisser » : « Deixei as chaves em casa ». Il veut aussi dire « permettre » : « Os meus pais não me deixam sair ». Suivi de « de » + infinitif, il signifie « arrêter de » : « Deixei de fumar », « Deixa de te queixar! ». Enfin, « deixar » + adjectif équivaut à « rendre » : « Essa notícia deixou-me triste »."
  }
 },
 {
  "title": "Les différences entre générations",
  "phrases": [
   {
    "fr": "Mon grand-père a commencé à travailler aux champs à douze ans.",
    "pt": "O meu avô começou a trabalhar no campo aos doze anos."
   },
   {
    "fr": "À son époque, peu d'enfants allaient à l'école jusqu'au bout.",
    "pt": "No tempo dele, poucas crianças andavam na escola até ao fim."
   },
   {
    "fr": "Ma mère ne comprend pas pourquoi je ne veux pas acheter de maison.",
    "pt": "A minha mãe não percebe porque é que eu não quero comprar casa."
   },
   {
    "fr": "Pour sa génération, être propriétaire était une priorité absolue.",
    "pt": "Para a geração dela, ter casa própria era uma prioridade absoluta."
   },
   {
    "fr": "Les jeunes d'aujourd'hui restent chez leurs parents jusqu'à plus de trente ans.",
    "pt": "Os jovens de hoje ficam em casa dos pais até depois dos trinta."
   },
   {
    "fr": "Ce n'est pas un choix : les loyers à Lisbonne sont devenus impossibles.",
    "pt": "Não é por escolha: as rendas em Lisboa tornaram-se impossíveis."
   },
   {
    "fr": "Mes parents ont connu la dictature, alors que nous avons grandi en démocratie.",
    "pt": "Os meus pais viveram a ditadura, ao passo que nós crescemos em democracia."
   },
   {
    "fr": "Le dimanche, toute la famille se retrouve encore autour de la table.",
    "pt": "Ao domingo, a família toda ainda se junta à volta da mesa."
   },
   {
    "fr": "Ma grand-mère m'apprend ses recettes et je lui apprends à envoyer des messages.",
    "pt": "A minha avó ensina-me as receitas dela e eu ensino-a a mandar mensagens."
   },
   {
    "fr": "Chaque génération a quelque chose à apprendre de l'autre.",
    "pt": "Cada geração tem alguma coisa a aprender com a outra."
   }
  ]
 },
 {
  "title": "L'art et les azulejos",
  "phrases": [
   {
    "fr": "Les azulejos font partie de l'identité visuelle du Portugal.",
    "pt": "Os azulejos fazem parte da identidade visual de Portugal."
   },
   {
    "fr": "Au Musée national de l'Azulejo, on peut voir cinq siècles d'histoire.",
    "pt": "No Museu Nacional do Azulejo, podem ver-se cinco séculos de história."
   },
   {
    "fr": "Les façades couvertes de carreaux protègent aussi les maisons de l'humidité.",
    "pt": "As fachadas cobertas de azulejos também protegem as casas da humidade."
   },
   {
    "fr": "Ce qui me touche le plus, ce sont les panneaux bleus et blancs des églises.",
    "pt": "O que mais me toca são os painéis azuis e brancos das igrejas."
   },
   {
    "fr": "La gare de São Bento, à Porto, est un vrai musée à ciel ouvert.",
    "pt": "A estação de São Bento, no Porto, é um verdadeiro museu a céu aberto."
   },
   {
    "fr": "Malheureusement, certains volent des azulejos sur les vieilles façades.",
    "pt": "Infelizmente, há quem roube azulejos das fachadas antigas."
   },
   {
    "fr": "Je me suis inscrit à un cours pour apprendre à peindre mon propre azulejo.",
    "pt": "Inscrevi-me num curso para aprender a pintar o meu próprio azulejo."
   },
   {
    "fr": "Certains artistes contemporains réinventent cette tradition de façon surprenante.",
    "pt": "Alguns artistas contemporâneos reinventam esta tradição de forma surpreendente."
   },
   {
    "fr": "L'art urbain a transformé des quartiers entiers de Lisbonne.",
    "pt": "A arte urbana transformou bairros inteiros de Lisboa."
   },
   {
    "fr": "Pour moi, l'art doit avant tout provoquer une émotion.",
    "pt": "Para mim, a arte deve, antes de mais, provocar uma emoção."
   }
  ]
 },
 {
  "title": "Une amitié de trente ans",
  "phrases": [
   {
    "fr": "Je connais Rita depuis l'école primaire, à Coimbra.",
    "pt": "Conheço a Rita desde a escola primária, em Coimbra."
   },
   {
    "fr": "Nous avons fait nos études ensemble avant que chacun suive son chemin.",
    "pt": "Estudámos juntos antes de cada um seguir o seu caminho."
   },
   {
    "fr": "La vie a beau nous éloigner, nous continuons à nous parler chaque semaine.",
    "pt": "Por mais que a vida nos afaste, continuamos a falar todas as semanas."
   },
   {
    "fr": "C'est la seule personne qui me connaît vraiment.",
    "pt": "Ela é a única pessoa que me conhece mesmo."
   },
   {
    "fr": "Quand on se revoit, c'est comme si le temps ne s'était pas écoulé.",
    "pt": "Quando nos voltamos a ver, é como se o tempo não tivesse passado."
   },
   {
    "fr": "Nous nous sommes déjà fâchés, mais jamais pour longtemps.",
    "pt": "Já nos zangámos, mas nunca por muito tempo."
   },
   {
    "fr": "Tu auras beau chercher, tu ne trouveras jamais une amie comme elle.",
    "pt": "Por mais que procures, nunca vais encontrar uma amiga como ela."
   },
   {
    "fr": "L'été dernier, nous avons fêté nos trente ans d'amitié à Nazaré.",
    "pt": "No verão passado, celebrámos trinta anos de amizade na Nazaré."
   },
   {
    "fr": "Une amitié comme celle-là demande des efforts des deux côtés.",
    "pt": "Uma amizade assim exige esforço de parte a parte."
   },
   {
    "fr": "J'espère que nous vieillirons ensemble en nous racontant nos histoires.",
    "pt": "Espero que envelheçamos juntos a contar as nossas histórias."
   }
  ],
  "tip": {
   "title": "« Por mais que » + subjonctif",
   "example": "La vie a beau nous éloigner, nous continuons à nous parler chaque semaine. — <b>Por mais que</b> a vida nos <b>afaste</b>, continuamos a falar todas as semanas.",
   "body": "« Por mais que » se traduit par « avoir beau » ou « quoi que » : « Por mais que estude, esqueço tudo » (j'ai beau étudier, j'oublie tout). Comme « bien que » en français, il est toujours suivi du subjonctif : présent (« Por mais que tentes ») ou imparfait pour le passé (« Por mais que chovesse, ele saía »). On entend aussi « por muito que », avec exactement le même sens."
  }
 },
 {
  "title": "Parler d'un échec personnel",
  "phrases": [
   {
    "fr": "Il y a cinq ans, j'ai ouvert un restaurant à Braga qui a fermé au bout d'un an.",
    "pt": "Há cinco anos, abri um restaurante em Braga que fechou ao fim de um ano."
   },
   {
    "fr": "Sur le moment, j'avais l'impression que tout s'écroulait.",
    "pt": "Na altura, tinha a sensação de que tudo estava a desabar."
   },
   {
    "fr": "J'avais investi toutes mes économies dans ce projet.",
    "pt": "Tinha investido todas as minhas poupanças nesse projeto."
   },
   {
    "fr": "Ma famille m'a soutenu sans jamais me critiquer.",
    "pt": "A minha família apoiou-me sem nunca me criticar."
   },
   {
    "fr": "Avec le recul, je vois bien les erreurs que j'ai commises.",
    "pt": "Olhando para trás, vejo bem os erros que cometi."
   },
   {
    "fr": "Je n'avais pas assez étudié le marché avant de me lancer.",
    "pt": "Não tinha estudado bem o mercado antes de me lançar."
   },
   {
    "fr": "Cet échec m'a appris à être plus patient et plus humble.",
    "pt": "Este fracasso ensinou-me a ser mais paciente e mais humilde."
   },
   {
    "fr": "Au Portugal, les gens ont parfois honte d'échouer, alors que c'est parfaitement normal.",
    "pt": "Em Portugal, às vezes as pessoas têm vergonha de falhar, quando isso é perfeitamente normal."
   },
   {
    "fr": "Aujourd'hui, je travaille dans une coopérative et je suis heureux.",
    "pt": "Hoje trabalho numa cooperativa e sou feliz."
   },
   {
    "fr": "Si je n'avais pas échoué, je ne serais pas là où j'en suis aujourd'hui.",
    "pt": "Se não tivesse falhado, não estaria onde estou hoje."
   }
  ]
 },
 {
  "title": "L'amour et les relations",
  "phrases": [
   {
    "fr": "Ma sœur et son copain sont ensemble depuis dix ans sans être mariés.",
    "pt": "A minha irmã e o namorado estão juntos há dez anos sem serem casados."
   },
   {
    "fr": "Pour elle, le mariage n'est qu'un bout de papier.",
    "pt": "Para ela, o casamento não passa de um papel."
   },
   {
    "fr": "Mes parents, eux, se sont mariés à l'église à vingt ans.",
    "pt": "Os meus pais, esses, casaram-se pela igreja aos vinte anos."
   },
   {
    "fr": "Je crois qu'une relation repose avant tout sur la confiance.",
    "pt": "Acho que uma relação assenta sobretudo na confiança."
   },
   {
    "fr": "Il est important que chacun garde son espace et ses amis.",
    "pt": "É importante que cada um mantenha o seu espaço e os seus amigos."
   },
   {
    "fr": "Mon meilleur ami a rencontré sa femme sur une application.",
    "pt": "O meu melhor amigo conheceu a mulher numa aplicação."
   },
   {
    "fr": "Au début, il avait un peu honte de le raconter.",
    "pt": "Ao princípio, tinha um bocado de vergonha de contar."
   },
   {
    "fr": "Une rupture peut faire aussi mal qu'un deuil.",
    "pt": "Uma separação pode doer tanto como um luto."
   },
   {
    "fr": "Avec le temps, on apprend à aimer sans vouloir changer l'autre.",
    "pt": "Com o tempo, aprende-se a amar sem querer mudar o outro."
   },
   {
    "fr": "Le plus beau, c'est de vieillir avec quelqu'un qui te fait rire.",
    "pt": "O mais bonito é envelhecer com alguém que te faça rir."
   }
  ]
 },
 {
  "title": "Chercher du sens dans son travail",
  "phrases": [
   {
    "fr": "Je me demande souvent si ce que je fais sert vraiment à quelque chose.",
    "pt": "Pergunto-me muitas vezes se o que faço serve mesmo para alguma coisa."
   },
   {
    "fr": "Beaucoup de jeunes diplômés gagnent à peine plus que le salaire minimum.",
    "pt": "Muitos jovens licenciados ganham pouco mais do que o salário mínimo."
   },
   {
    "fr": "Mon frère a quitté une grande entreprise pour devenir menuisier.",
    "pt": "O meu irmão largou uma grande empresa para ser carpinteiro."
   },
   {
    "fr": "Il gagne moins, mais il dit qu'il ne s'est jamais senti aussi utile.",
    "pt": "Ganha menos, mas diz que nunca se sentiu tão útil."
   },
   {
    "fr": "Pour mes parents, un poste stable dans la fonction publique était le rêve.",
    "pt": "Para os meus pais, um emprego estável na função pública era o sonho."
   },
   {
    "fr": "Aujourd'hui, on cherche plutôt un travail qui ait du sens.",
    "pt": "Hoje em dia, procura-se mais um trabalho que tenha sentido."
   },
   {
    "fr": "Le télétravail a changé mon rapport à mon métier.",
    "pt": "O teletrabalho mudou a minha relação com a profissão."
   },
   {
    "fr": "J'aimerais que mon travail laisse une trace positive.",
    "pt": "Gostava que o meu trabalho deixasse uma marca positiva."
   },
   {
    "fr": "Ce n'est pas facile de concilier sa passion et les factures à payer.",
    "pt": "Não é fácil conciliar a paixão com as contas para pagar."
   },
   {
    "fr": "Au fond, le sens du travail se trouve souvent chez les gens qu'on aide.",
    "pt": "No fundo, o sentido do trabalho está muitas vezes nas pessoas que ajudamos."
   }
  ]
 },
 {
  "title": "Les clichés sur le Portugal",
  "phrases": [
   {
    "fr": "Beaucoup d'étrangers pensent que les Portugais écoutent du fado toute la journée.",
    "pt": "Muitos estrangeiros pensam que os portugueses ouvem fado o dia todo."
   },
   {
    "fr": "On dit aussi que les Portugais mangent de la morue tous les jours.",
    "pt": "Também se diz que os portugueses comem bacalhau todos os dias."
   },
   {
    "fr": "Bon, ce cliché-là n'est pas tout à fait faux !",
    "pt": "Bem, esse cliché não é totalmente falso!"
   },
   {
    "fr": "On imagine un pays toujours ensoleillé, mais il pleut beaucoup dans le Minho.",
    "pt": "Imagina-se um país sempre com sol, mas no Minho chove muito."
   },
   {
    "fr": "Certains croient que tout le pays ressemble à Lisbonne et à l'Algarve.",
    "pt": "Há quem pense que o país inteiro é como Lisboa e o Algarve."
   },
   {
    "fr": "Pourvu que les gens viennent découvrir l'intérieur du pays et pas seulement les plages.",
    "pt": "Oxalá as pessoas venham conhecer o interior e não só as praias."
   },
   {
    "fr": "Si seulement les touristes restaient plus de trois jours !",
    "pt": "Quem me dera que os turistas ficassem mais de três dias!"
   },
   {
    "fr": "Les Portugais ont la réputation d'être accueillants, et c'est souvent vrai.",
    "pt": "Os portugueses têm fama de ser hospitaleiros, e muitas vezes é verdade."
   },
   {
    "fr": "On nous croit tristes, mais il suffit d'aller à une fête de village pour voir le contraire.",
    "pt": "Acham que somos tristes, mas basta ir a uma festa de aldeia para ver o contrário."
   },
   {
    "fr": "Les clichés contiennent souvent un peu de vérité et beaucoup d'exagération.",
    "pt": "Os clichés têm muitas vezes um pouco de verdade e muito exagero."
   }
  ],
  "tip": {
   "title": "« Oxalá » et « quem me dera » : exprimer un souhait",
   "example": "Pourvu que les gens viennent découvrir l'intérieur du pays et pas seulement les plages. — <b>Oxalá</b> as pessoas <b>venham</b> conhecer o interior e não só as praias.",
   "body": "« Oxalá » (pourvu que, mot d'origine arabe signifiant « si Dieu le veut ») est toujours suivi du subjonctif : présent pour un souhait possible (« Oxalá faça sol amanhã »), imparfait pour un souhait peu probable (« Oxalá eu pudesse ir »). « Quem me dera » veut dire « si seulement » ou « j'aimerais tant » : avec un infinitif (« Quem me dera ter férias! ») ou avec « que » + subjonctif imparfait (« Quem me dera que viesses comigo! »)."
  }
 },
 {
  "title": "La saudade",
  "phrases": [
   {
    "fr": "On dit que le mot « saudade » est impossible à traduire.",
    "pt": "Diz-se que a palavra « saudade » é impossível de traduzir."
   },
   {
    "fr": "C'est un mélange de nostalgie, de manque et de tendresse.",
    "pt": "É uma mistura de nostalgia, de falta e de ternura."
   },
   {
    "fr": "Mon village m'a manqué dès ma première semaine à Lisbonne.",
    "pt": "Tive saudades da minha aldeia logo na primeira semana em Lisboa."
   },
   {
    "fr": "On peut même ressentir la saudade de quelque chose qu'on n'a jamais vécu.",
    "pt": "Até se pode ter saudades de algo que nunca se viveu."
   },
   {
    "fr": "Le fado exprime souvent ce sentiment mieux que n'importe quel discours.",
    "pt": "O fado exprime muitas vezes esse sentimento melhor do que qualquer discurso."
   },
   {
    "fr": "Quand j'écoute Amália, je pense toujours à ma grand-mère.",
    "pt": "Quando ouço a Amália, penso sempre na minha avó."
   },
   {
    "fr": "Au téléphone, ma mère finit toujours par me dire que je lui manque.",
    "pt": "Ao telefone, a minha mãe acaba sempre por dizer que tem saudades minhas."
   },
   {
    "fr": "Beaucoup de poètes portugais ont écrit sur ce sentiment.",
    "pt": "Muitos poetas portugueses escreveram sobre este sentimento."
   },
   {
    "fr": "La saudade n'est pas forcément triste, elle peut aussi être douce.",
    "pt": "A saudade não é necessariamente triste, também pode ser doce."
   },
   {
    "fr": "Ressentir de la saudade, c'est la preuve qu'on a aimé quelque chose.",
    "pt": "Ter saudades é a prova de que se amou alguma coisa."
   }
  ]
 },
 {
  "title": "Grande ville ou intérieur du pays",
  "phrases": [
   {
    "fr": "Mon village dans le Trás-os-Montes a perdu la moitié de ses habitants.",
    "pt": "A minha aldeia em Trás-os-Montes perdeu metade dos habitantes."
   },
   {
    "fr": "L'école a fermé il y a dix ans, faute d'enfants.",
    "pt": "A escola fechou há dez anos por falta de crianças."
   },
   {
    "fr": "Aujourd'hui, il n'y reste presque plus que des personnes âgées.",
    "pt": "Hoje em dia, quase só lá ficaram pessoas idosas."
   },
   {
    "fr": "Les jeunes partent à Lisbonne ou à Porto pour chercher du travail.",
    "pt": "Os jovens vão para Lisboa ou para o Porto à procura de trabalho."
   },
   {
    "fr": "Pourtant, la vie en ville coûte de plus en plus cher.",
    "pt": "No entanto, a vida na cidade está cada vez mais cara."
   },
   {
    "fr": "Avec le télétravail, certains couples s'installent à la campagne.",
    "pt": "Com o teletrabalho, alguns casais estão a mudar-se para o campo."
   },
   {
    "fr": "Il faudrait de meilleurs transports pour que l'intérieur ne soit pas oublié.",
    "pt": "Eram precisos melhores transportes para que o interior não fosse esquecido."
   },
   {
    "fr": "Ici, tout le monde se connaît et s'entraide.",
    "pt": "Aqui toda a gente se conhece e se ajuda."
   },
   {
    "fr": "En ville, j'ai tout à portée de main, mais je connais à peine mes voisins.",
    "pt": "Na cidade tenho tudo à mão, mas mal conheço os meus vizinhos."
   },
   {
    "fr": "Si je pouvais travailler à distance, je retournerais vivre dans l'intérieur.",
    "pt": "Se pudesse trabalhar à distância, voltava a viver no interior."
   }
  ]
 },
 {
  "title": "L'émigration et le retour au pays",
  "phrases": [
   {
    "fr": "Dans les années soixante, mon grand-père a émigré en France.",
    "pt": "Nos anos sessenta, o meu avô emigrou para França."
   },
   {
    "fr": "Il est parti clandestinement, à pied, à travers les montagnes.",
    "pt": "Partiu clandestinamente, a pé, pelas montanhas."
   },
   {
    "fr": "Il a travaillé trente ans sur des chantiers pour construire sa maison au pays.",
    "pt": "Trabalhou trinta anos nas obras para construir a sua casa na terra."
   },
   {
    "fr": "Chaque mois d'août, toute la famille revenait au village en voiture.",
    "pt": "Todos os anos, em agosto, a família inteira voltava à aldeia de carro."
   },
   {
    "fr": "Ma cousine, elle, est partie au Luxembourg il y a cinq ans.",
    "pt": "A minha prima, essa, foi para o Luxemburgo há cinco anos."
   },
   {
    "fr": "Elle est infirmière et gagne là-bas trois fois plus qu'ici.",
    "pt": "É enfermeira e lá ganha três vezes mais do que cá."
   },
   {
    "fr": "Elle dit qu'elle rentrera dès que les salaires seront meilleurs au Portugal.",
    "pt": "Diz que volta assim que os salários forem melhores em Portugal."
   },
   {
    "fr": "Beaucoup d'émigrés ne se sentent chez eux ni ici ni là-bas.",
    "pt": "Muitos emigrantes não se sentem em casa nem cá nem lá."
   },
   {
    "fr": "Le gouvernement essaie d'encourager le retour des jeunes qualifiés.",
    "pt": "O governo está a tentar incentivar o regresso dos jovens qualificados."
   },
   {
    "fr": "Rentrer au pays après tant d'années, c'est presque émigrer une deuxième fois.",
    "pt": "Regressar ao país depois de tantos anos é quase emigrar uma segunda vez."
   }
  ]
 },
 {
  "title": "Le 25 Avril et la liberté",
  "phrases": [
   {
    "fr": "En 1974, la révolution des Œillets a mis fin à près de cinquante ans de dictature.",
    "pt": "Em 1974, a Revolução dos Cravos pôs fim a quase cinquenta anos de ditadura."
   },
   {
    "fr": "Mon grand-père raconte qu'on ne pouvait pas parler de politique au café.",
    "pt": "O meu avô conta que não se podia falar de política no café."
   },
   {
    "fr": "La censure contrôlait les journaux, les livres et même les chansons.",
    "pt": "A censura controlava os jornais, os livros e até as canções."
   },
   {
    "fr": "Ce matin-là, les soldats ont reçu des œillets des mains des habitants.",
    "pt": "Nessa manhã, os soldados receberam cravos das mãos da população."
   },
   {
    "fr": "La chanson « Grândola, Vila Morena » a servi de signal à la révolution.",
    "pt": "A canção « Grândola, Vila Morena » serviu de senha para a revolução."
   },
   {
    "fr": "Chaque année, des milliers de personnes défilent sur l'avenue de la Liberté.",
    "pt": "Todos os anos, milhares de pessoas desfilam na Avenida da Liberdade."
   },
   {
    "fr": "Ma génération est née libre et l'a peut-être considérée comme acquise.",
    "pt": "A minha geração nasceu em liberdade e, se calhar, deu-a por garantida."
   },
   {
    "fr": "Il est essentiel que les jeunes connaissent cette partie de l'histoire.",
    "pt": "É essencial que os jovens conheçam esta parte da história."
   },
   {
    "fr": "La liberté d'expression n'est jamais acquise pour toujours.",
    "pt": "A liberdade de expressão nunca está garantida para sempre."
   },
   {
    "fr": "Le 25 Avril, j'accroche toujours un œillet rouge à ma veste.",
    "pt": "No 25 de Abril, ponho sempre um cravo vermelho no casaco."
   }
  ]
 },
 {
  "title": "Des souvenirs d'enfance",
  "phrases": [
   {
    "fr": "Enfant, je passais tous mes étés chez mes grands-parents dans l'Alentejo.",
    "pt": "Em criança, passava os verões todos em casa dos meus avós no Alentejo."
   },
   {
    "fr": "Nous jouions dans la rue jusqu'au coucher du soleil.",
    "pt": "Brincávamos na rua até ao pôr do sol."
   },
   {
    "fr": "Ma grand-mère faisait du pain dans un four à bois tous les samedis.",
    "pt": "A minha avó fazia pão no forno a lenha todos os sábados."
   },
   {
    "fr": "L'odeur des sardines grillées me ramène toujours à mon enfance.",
    "pt": "O cheiro a sardinhas assadas leva-me sempre de volta à infância."
   },
   {
    "fr": "Je me souviens encore du goût des premières cerises de la saison.",
    "pt": "Ainda me lembro do sabor das primeiras cerejas da época."
   },
   {
    "fr": "On allait à la plage de Comporta dans la vieille voiture de mon père.",
    "pt": "Íamos à praia da Comporta no carro velho do meu pai."
   },
   {
    "fr": "Le soir, mon grand-père nous racontait des histoires de loups.",
    "pt": "À noite, o meu avô contava-nos histórias de lobos."
   },
   {
    "fr": "Nous n'avions pas grand-chose, mais il ne nous manquait rien d'important.",
    "pt": "Não tínhamos grande coisa, mas não nos faltava nada de importante."
   },
   {
    "fr": "Quand je suis revenu au village l'an dernier, tout m'a semblé plus petit.",
    "pt": "Quando voltei à aldeia no ano passado, tudo me pareceu mais pequeno."
   },
   {
    "fr": "J'aimerais que mes enfants aient des souvenirs aussi simples et heureux.",
    "pt": "Gostava que os meus filhos tivessem memórias tão simples e felizes."
   }
  ]
 },
 {
  "title": "Un au revoir difficile",
  "phrases": [
   {
    "fr": "Mon meilleur ami part s'installer aux Açores la semaine prochaine.",
    "pt": "O meu melhor amigo vai viver para os Açores na próxima semana."
   },
   {
    "fr": "Nous avons organisé un dîner surprise dans notre tasca préférée.",
    "pt": "Organizámos um jantar surpresa na nossa tasca preferida."
   },
   {
    "fr": "Personne ne voulait que la soirée se termine.",
    "pt": "Ninguém queria que a noite acabasse."
   },
   {
    "fr": "Il a promis qu'il viendrait nous voir à Noël.",
    "pt": "Prometeu que vinha visitar-nos no Natal."
   },
   {
    "fr": "Je sais que c'est une belle occasion pour lui, mais ça me rend triste.",
    "pt": "Sei que é uma boa oportunidade para ele, mas isso deixa-me triste."
   },
   {
    "fr": "À l'aéroport, nous nous sommes serrés dans les bras sans rien dire.",
    "pt": "No aeroporto, abraçámo-nos sem dizer nada."
   },
   {
    "fr": "Certains adieux sont plus durs que d'autres.",
    "pt": "Há despedidas mais difíceis do que outras."
   },
   {
    "fr": "Il m'a dit de ne pas faire cette tête, que ce n'était qu'un « à tout de suite ».",
    "pt": "Disse-me para não fazer essa cara, que era só um « até já »."
   },
   {
    "fr": "Heureusement, aujourd'hui on peut se voir en appel vidéo tous les jours.",
    "pt": "Felizmente, hoje em dia podemos ver-nos por videochamada todos os dias."
   },
   {
    "fr": "Une vraie amitié résiste à la distance et au temps.",
    "pt": "Uma verdadeira amizade resiste à distância e ao tempo."
   }
  ]
 },
 {
  "title": "Regarder en arrière sur ce parcours en portugais",
  "phrases": [
   {
    "fr": "Au début, je confondais tout le temps « ser » et « estar ».",
    "pt": "No início, confundia sempre o « ser » e o « estar »."
   },
   {
    "fr": "Les sons nasaux du portugais me semblaient impossibles à prononcer.",
    "pt": "Os sons nasais do português pareciam-me impossíveis de pronunciar."
   },
   {
    "fr": "Je me souviens de ma première conversation avec un serveur à Lisbonne.",
    "pt": "Lembro-me da minha primeira conversa com um empregado de mesa em Lisboa."
   },
   {
    "fr": "Aujourd'hui, je comprends presque tout quand les gens parlent lentement.",
    "pt": "Hoje percebo quase tudo quando as pessoas falam devagar."
   },
   {
    "fr": "Le subjonctif futur m'a fait souffrir, mais maintenant je l'utilise sans y penser.",
    "pt": "O futuro do conjuntivo fez-me sofrer, mas agora uso-o sem pensar."
   },
   {
    "fr": "Écouter du fado m'a beaucoup aidé à améliorer ma prononciation.",
    "pt": "Ouvir fado ajudou-me muito a melhorar a pronúncia."
   },
   {
    "fr": "J'ai osé faire des erreurs et c'est comme ça que j'ai progressé.",
    "pt": "Atrevi-me a errar e foi assim que progredi."
   },
   {
    "fr": "Mes amis portugais disent que mon accent s'est beaucoup amélioré.",
    "pt": "Os meus amigos portugueses dizem que o meu sotaque melhorou muito."
   },
   {
    "fr": "Chaque trajet passé à écouter ces phrases m'a rapproché du Portugal.",
    "pt": "Cada viagem passada a ouvir estas frases aproximou-me de Portugal."
   },
   {
    "fr": "Je suis fier du chemin parcouru depuis la toute première leçon.",
    "pt": "Tenho orgulho do caminho que percorri desde a primeira lição."
   }
  ]
 },
 {
  "title": "Fin du parcours : un dernier bilan",
  "phrases": [
   {
    "fr": "Ce dernier module nous a fait parler de sujets profonds en portugais.",
    "pt": "Este último módulo pôs-nos a falar de temas profundos em português."
   },
   {
    "fr": "Nous avons débattu de liberté, d'amour, de travail et de saudade.",
    "pt": "Debatemos a liberdade, o amor, o trabalho e a saudade."
   },
   {
    "fr": "Je peux maintenant exprimer mes opinions avec nuance.",
    "pt": "Agora consigo exprimir as minhas opiniões com nuance."
   },
   {
    "fr": "Les expressions idiomatiques me font beaucoup moins peur qu'avant.",
    "pt": "As expressões idiomáticas já me assustam muito menos do que antes."
   },
   {
    "fr": "Je ne parle pas encore parfaitement, mais je me débrouille vraiment bien.",
    "pt": "Ainda não falo na perfeição, mas desenrasco-me muito bem."
   },
   {
    "fr": "Mon prochain objectif est de lire un roman de Saramago en version originale.",
    "pt": "O meu próximo objetivo é ler um romance do Saramago no original."
   },
   {
    "fr": "Je compte passer quelques mois au Portugal pour pratiquer tous les jours.",
    "pt": "Conto passar uns meses em Portugal para praticar todos os dias."
   },
   {
    "fr": "On n'a jamais fini d'apprendre une langue, et c'est tant mieux.",
    "pt": "Uma língua nunca se aprende por completo, e ainda bem."
   },
   {
    "fr": "Merci de m'avoir accompagné pendant tous ces trajets.",
    "pt": "Obrigado por me teres acompanhado em todas estas viagens."
   },
   {
    "fr": "Ce n'est pas un adieu, juste un « à bientôt ».",
    "pt": "Isto não é um adeus, é só um « até breve »."
   }
  ]
 }
];

const LEVEL1_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"La vie de tous les jours au Portugal, en route et à la maison.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Se déplacer, découvrir et gérer les imprévus au Portugal.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Faire connaissance, se présenter, échanger avec aisance.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module3Lessons
  }
];
const LEVEL1_FREE_LESSONS = { 1: 10, 2: 0, 3: 0 }; // seul le module 1 a des leçons gratuites

const LEVEL2_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"La vie de tous les jours, avec un vocabulaire plus riche.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Des situations de voyage plus variées et plus complexes.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Des échanges sociaux plus nuancés et plus naturels.",
    totalPhrases:200, lessonsCount:20,
    lessons: level2Module3Lessons
  }
];
const LEVEL2_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // à partir du niveau 2, seulement 3 leçons gratuites

const LEVEL3_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"Une vie quotidienne installée au Portugal, avec ses subtilités.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Des aventures de voyage plus poussées et plus authentiques.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module2Lessons
  },
  {
    id:3, name:"Conversation sociale",
    desc:"Des conversations profondes : opinions, débats, émotions.",
    totalPhrases:200, lessonsCount:20,
    lessons: level3Module3Lessons
  }
];
const LEVEL3_FREE_LESSONS = { 1: 3, 2: 0, 3: 0 }; // comme au niveau 2 : seulement 3 leçons gratuites dans le premier module

const LEVELS = [
  { id:1, name:"Niveau 1", modules: LEVEL1_MODULES, freeLessonsPerModule: LEVEL1_FREE_LESSONS },
  { id:2, name:"Niveau 2", modules: LEVEL2_MODULES, freeLessonsPerModule: LEVEL2_FREE_LESSONS },
  { id:3, name:"Niveau 3", modules: LEVEL3_MODULES, freeLessonsPerModule: LEVEL3_FREE_LESSONS }
];
let MODULES = LEVELS[0].modules;
let FREE_LESSONS_PER_MODULE = LEVELS[0].freeLessonsPerModule;
