/* ============================================================
   MON TRAJET EN PORTUGAIS (BRÉSIL) — données de contenu
   3 niveaux × 3 modules × 20 leçons × 10 phrases = 1800 phrases,
   45 points de grammaire. Champ cible : "pt" (TTS pt-BR).
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
  "title": "Arrivée à Rio de Janeiro",
  "phrases": [
   {
    "fr": "Bienvenue au Brésil !",
    "pt": "Bem-vindo ao Brasil!"
   },
   {
    "fr": "Nous venons d'atterrir à l'aéroport du Galeão.",
    "pt": "A gente acabou de pousar no aeroporto do Galeão."
   },
   {
    "fr": "Votre passeport, s'il vous plaît.",
    "pt": "Seu passaporte, por favor."
   },
   {
    "fr": "C'est votre première visite au Brésil ?",
    "pt": "É a sua primeira vez no Brasil?"
   },
   {
    "fr": "Oui, je viens pour un mois.",
    "pt": "Sim, eu vim para ficar um mês."
   },
   {
    "fr": "Où est-ce que je prends un taxi ?",
    "pt": "Onde eu pego um táxi?"
   },
   {
    "fr": "La sortie est tout droit, à gauche.",
    "pt": "A saída é em frente, à esquerda."
   },
   {
    "fr": "Il fait déjà très chaud ici.",
    "pt": "Já está muito calor aqui."
   },
   {
    "fr": "Je vais à Copacabana, s'il vous plaît.",
    "pt": "Eu vou para Copacabana, por favor."
   },
   {
    "fr": "Merci, et bonne journée !",
    "pt": "Obrigado, e tenha um bom dia!"
   }
  ]
 },
 {
  "title": "Un jus de fruits à Copacabana",
  "phrases": [
   {
    "fr": "Bonjour, une table près de la plage ?",
    "pt": "Bom dia, uma mesa perto da praia?"
   },
   {
    "fr": "Qu'est-ce que vous avez comme jus ?",
    "pt": "Que sucos vocês têm?"
   },
   {
    "fr": "Je voudrais un jus d'orange.",
    "pt": "Eu queria um suco de laranja."
   },
   {
    "fr": "Et pour moi, une eau de coco.",
    "pt": "E para mim, uma água de coco."
   },
   {
    "fr": "Le menu est en portugais seulement ?",
    "pt": "O cardápio é só em português?"
   },
   {
    "fr": "Une petite pause bien méritée.",
    "pt": "Uma pausa merecida."
   },
   {
    "fr": "La vue sur la mer est superbe.",
    "pt": "A vista do mar é linda."
   },
   {
    "fr": "C'est combien, le jus ?",
    "pt": "Quanto é o suco?"
   },
   {
    "fr": "Je prends aussi un pão de queijo.",
    "pt": "Eu também quero um pão de queijo."
   },
   {
    "fr": "Le serveur est très gentil.",
    "pt": "O garçom é muito simpático."
   }
  ],
  "tip": {
   "title": "« O, a, um, uma » : les articles",
   "example": "Le serveur est très gentil. — <b>O</b> garçom é muito simpático.",
   "body": "Le portugais a deux genres, comme le français : « o » (le) et « a » (la) sont les articles définis, « um » (un) et « uma » (une) les articles indéfinis. Au pluriel : os, as, uns, umas. Attention, le genre ne correspond pas toujours au français : o leite (le lait), mais a viagem (le voyage)."
  }
 },
 {
  "title": "Le Pain de Sucre en téléphérique",
  "phrases": [
   {
    "fr": "Voici le Pain de Sucre !",
    "pt": "Olha o Pão de Açúcar!"
   },
   {
    "fr": "On prend le téléphérique ?",
    "pt": "A gente pega o bondinho?"
   },
   {
    "fr": "Deux billets, s'il vous plaît.",
    "pt": "Dois ingressos, por favor."
   },
   {
    "fr": "Il y a beaucoup de monde aujourd'hui.",
    "pt": "Tem muita gente hoje."
   },
   {
    "fr": "La vue d'en haut est magnifique.",
    "pt": "A vista lá de cima é maravilhosa."
   },
   {
    "fr": "On voit toute la baie.",
    "pt": "Dá para ver a baía inteira."
   },
   {
    "fr": "Prends une photo de moi, s'il te plaît.",
    "pt": "Tira uma foto minha, por favor."
   },
   {
    "fr": "N'oublie pas ta crème solaire.",
    "pt": "Não esquece o protetor solar."
   },
   {
    "fr": "J'ai un peu le vertige.",
    "pt": "Eu tenho um pouco de medo de altura."
   },
   {
    "fr": "On redescend au coucher du soleil ?",
    "pt": "A gente desce no pôr do sol?"
   }
  ]
 },
 {
  "title": "Une nuit à l'hôtel d'Ipanema",
  "phrases": [
   {
    "fr": "J'ai une réservation au nom de Nizard.",
    "pt": "Eu tenho uma reserva no nome de Nizard."
   },
   {
    "fr": "Pour combien de nuits ?",
    "pt": "Para quantas noites?"
   },
   {
    "fr": "Pour trois nuits.",
    "pt": "Para três noites."
   },
   {
    "fr": "Votre chambre est au cinquième étage.",
    "pt": "O seu quarto fica no quinto andar."
   },
   {
    "fr": "Le petit-déjeuner est inclus ?",
    "pt": "O café da manhã está incluído?"
   },
   {
    "fr": "Oui, de six heures à dix heures.",
    "pt": "Sim, das seis às dez horas."
   },
   {
    "fr": "Quel est le mot de passe du wifi ?",
    "pt": "Qual é a senha do wi-fi?"
   },
   {
    "fr": "La climatisation ne marche pas.",
    "pt": "O ar-condicionado não está funcionando."
   },
   {
    "fr": "Je vous envoie quelqu'un tout de suite.",
    "pt": "Vou mandar alguém agora mesmo."
   },
   {
    "fr": "Bonne nuit et bon séjour.",
    "pt": "Boa noite e boa estadia."
   }
  ]
 },
 {
  "title": "Monter au Christ Rédempteur",
  "phrases": [
   {
    "fr": "Le Christ Rédempteur est tout en haut.",
    "pt": "O Cristo Redentor fica lá no alto."
   },
   {
    "fr": "On monte en petit train ?",
    "pt": "A gente sobe de trenzinho?"
   },
   {
    "fr": "Le train part toutes les demi-heures.",
    "pt": "O trem sai a cada meia hora."
   },
   {
    "fr": "La statue est immense.",
    "pt": "A estátua é enorme."
   },
   {
    "fr": "Aujourd'hui, le ciel est dégagé.",
    "pt": "Hoje o céu está limpo."
   },
   {
    "fr": "Nous sommes très fatigués.",
    "pt": "A gente está muito cansado."
   },
   {
    "fr": "Ce point de vue est incroyable.",
    "pt": "Este mirante é incrível."
   },
   {
    "fr": "Je suis français, et toi ?",
    "pt": "Eu sou francês, e você?"
   },
   {
    "fr": "Le guide est très sympathique.",
    "pt": "O guia é muito simpático."
   },
   {
    "fr": "On est contents d'être ici.",
    "pt": "A gente está feliz de estar aqui."
   }
  ],
  "tip": {
   "title": "« Ser » ou « estar » ?",
   "example": "Nous sommes très fatigués. — A gente <b>está</b> muito cansado.",
   "body": "Le verbe être se dit de deux façons. « Ser » exprime ce qui est permanent ou définit quelqu'un : eu sou francês (je suis français), a estátua é enorme. « Estar » exprime un état passager : estou cansado (je suis fatigué), o céu está limpo (le ciel est dégagé aujourd'hui)."
  }
 },
 {
  "title": "Une balade dans Santa Teresa",
  "phrases": [
   {
    "fr": "Santa Teresa est un quartier charmant.",
    "pt": "Santa Teresa é um bairro charmoso."
   },
   {
    "fr": "Les rues montent beaucoup.",
    "pt": "As ruas são muito íngremes."
   },
   {
    "fr": "Regarde ce vieux tramway jaune !",
    "pt": "Olha esse bondinho amarelo antigo!"
   },
   {
    "fr": "Il y a plein d'ateliers d'artistes.",
    "pt": "Tem vários ateliês de artistas."
   },
   {
    "fr": "J'adore les maisons colorées.",
    "pt": "Eu adoro as casas coloridas."
   },
   {
    "fr": "On s'arrête boire quelque chose ?",
    "pt": "A gente para para beber alguma coisa?"
   },
   {
    "fr": "Ce café a une jolie terrasse.",
    "pt": "Esse café tem um terraço bonito."
   },
   {
    "fr": "Je suis un peu perdu.",
    "pt": "Eu estou um pouco perdido."
   },
   {
    "fr": "Tu as une carte du quartier ?",
    "pt": "Você tem um mapa do bairro?"
   },
   {
    "fr": "Quelle belle après-midi !",
    "pt": "Que tarde linda!"
   }
  ]
 },
 {
  "title": "Un déjeuner brésilien",
  "phrases": [
   {
    "fr": "On mange dans ce restaurant au kilo ?",
    "pt": "A gente come nesse restaurante por quilo?"
   },
   {
    "fr": "Ici, on paie au poids de l'assiette.",
    "pt": "Aqui a gente paga pelo peso do prato."
   },
   {
    "fr": "Je prends du riz et des haricots noirs.",
    "pt": "Eu vou pegar arroz e feijão preto."
   },
   {
    "fr": "Tu veux de la farofa ?",
    "pt": "Você quer farofa?"
   },
   {
    "fr": "Le poulet a l'air délicieux.",
    "pt": "O frango parece delicioso."
   },
   {
    "fr": "Je ne mange pas de viande.",
    "pt": "Eu não como carne."
   },
   {
    "fr": "Il y a beaucoup de salades.",
    "pt": "Tem muitas saladas."
   },
   {
    "fr": "Une limonade, s'il vous plaît.",
    "pt": "Uma limonada, por favor."
   },
   {
    "fr": "C'est vraiment bon et pas cher.",
    "pt": "É muito bom e barato."
   },
   {
    "fr": "On paie à la caisse en sortant.",
    "pt": "A gente paga no caixa na saída."
   }
  ]
 },
 {
  "title": "Louer un appartement à Rio",
  "phrases": [
   {
    "fr": "Je cherche un appartement à louer.",
    "pt": "Eu estou procurando um apartamento para alugar."
   },
   {
    "fr": "Il est dans le quartier de Botafogo.",
    "pt": "Ele fica no bairro de Botafogo."
   },
   {
    "fr": "Combien de chambres il y a ?",
    "pt": "Quantos quartos tem?"
   },
   {
    "fr": "Deux chambres et une petite cuisine.",
    "pt": "Dois quartos e uma cozinha pequena."
   },
   {
    "fr": "L'appartement est près du métro ?",
    "pt": "O apartamento fica perto do metrô?"
   },
   {
    "fr": "La station est au bout de la rue.",
    "pt": "A estação fica no fim da rua."
   },
   {
    "fr": "Le loyer est de deux mille reais.",
    "pt": "O aluguel é de dois mil reais."
   },
   {
    "fr": "Les charges sont comprises ?",
    "pt": "O condomínio está incluído?"
   },
   {
    "fr": "Il y a un gardien dans l'immeuble.",
    "pt": "Tem porteiro no prédio."
   },
   {
    "fr": "Je peux le visiter demain ?",
    "pt": "Eu posso visitar amanhã?"
   }
  ],
  "tip": {
   "title": "Les contractions « no, na, do, da »",
   "example": "L'appartement est près du métro ? — O apartamento fica perto <b>do</b> metrô?",
   "body": "Les prépositions « em » (dans, à) et « de » (de) se collent à l'article, comme « du » en français. Em + o = no, em + a = na : no bairro (dans le quartier), na rua (dans la rue). De + o = do, de + a = da : perto do metrô (près du métro), o fim da rua (le bout de la rue)."
  }
 },
 {
  "title": "S'installer dans le nouvel appartement",
  "phrases": [
   {
    "fr": "Les cartons sont dans le salon.",
    "pt": "As caixas estão na sala."
   },
   {
    "fr": "On met le canapé où ?",
    "pt": "Onde a gente coloca o sofá?"
   },
   {
    "fr": "Près de la fenêtre, c'est mieux.",
    "pt": "Perto da janela é melhor."
   },
   {
    "fr": "Le réfrigérateur ne marche pas encore.",
    "pt": "A geladeira ainda não está funcionando."
   },
   {
    "fr": "Il faut acheter des rideaux.",
    "pt": "Precisa comprar cortinas."
   },
   {
    "fr": "Le ventilateur est indispensable ici.",
    "pt": "O ventilador é essencial aqui."
   },
   {
    "fr": "Où sont les draps ?",
    "pt": "Onde estão os lençóis?"
   },
   {
    "fr": "Dans le grand carton bleu.",
    "pt": "Na caixa grande azul."
   },
   {
    "fr": "La salle de bains est très propre.",
    "pt": "O banheiro está muito limpo."
   },
   {
    "fr": "Je me sens déjà chez moi.",
    "pt": "Eu já me sinto em casa."
   }
  ]
 },
 {
  "title": "Les courses au supermarché",
  "phrases": [
   {
    "fr": "Il nous faut du lait et du café.",
    "pt": "A gente precisa de leite e café."
   },
   {
    "fr": "Où est le rayon des boissons ?",
    "pt": "Onde fica a seção de bebidas?"
   },
   {
    "fr": "C'est au fond, à droite.",
    "pt": "Fica no fundo, à direita."
   },
   {
    "fr": "Je cherche du pain de mie.",
    "pt": "Eu estou procurando pão de forma."
   },
   {
    "fr": "Ce paquet de riz est en promotion.",
    "pt": "Esse pacote de arroz está em promoção."
   },
   {
    "fr": "Prends aussi du savon.",
    "pt": "Pega também sabonete."
   },
   {
    "fr": "Tu as un sac ?",
    "pt": "Você tem uma sacola?"
   },
   {
    "fr": "Vous payez par carte ou en espèces ?",
    "pt": "Vai pagar no cartão ou em dinheiro?"
   },
   {
    "fr": "Par carte, s'il vous plaît.",
    "pt": "No cartão, por favor."
   },
   {
    "fr": "Vous voulez votre ticket de caisse ?",
    "pt": "Quer a nota fiscal?"
   }
  ]
 },
 {
  "title": "Un matin à la feira",
  "phrases": [
   {
    "fr": "La feira a lieu tous les mercredis.",
    "pt": "A feira é toda quarta-feira."
   },
   {
    "fr": "Je voudrais un kilo de mangues.",
    "pt": "Eu queria um quilo de manga."
   },
   {
    "fr": "Ces papayes sont bien mûres ?",
    "pt": "Esses mamões estão bem maduros?"
   },
   {
    "fr": "Goûtez, c'est très sucré.",
    "pt": "Prova, é muito doce."
   },
   {
    "fr": "Combien coûtent les ananas ?",
    "pt": "Quanto custa o abacaxi?"
   },
   {
    "fr": "Cinq reais pièce.",
    "pt": "Cinco reais cada um."
   },
   {
    "fr": "J'en prends deux, alors.",
    "pt": "Então eu levo dois."
   },
   {
    "fr": "Il y a aussi un stand de pastéis.",
    "pt": "Também tem uma barraca de pastel."
   },
   {
    "fr": "Un pastel au fromage, s'il vous plaît.",
    "pt": "Um pastel de queijo, por favor."
   },
   {
    "fr": "Et un jus de canne à sucre bien frais.",
    "pt": "E um caldo de cana bem gelado."
   }
  ]
 },
 {
  "title": "La météo du jour",
  "phrases": [
   {
    "fr": "Quel temps fait-il aujourd'hui ?",
    "pt": "Como está o tempo hoje?"
   },
   {
    "fr": "Il fait trente-cinq degrés.",
    "pt": "Está fazendo trinta e cinco graus."
   },
   {
    "fr": "Le soleil tape très fort.",
    "pt": "O sol está muito forte."
   },
   {
    "fr": "Il va pleuvoir cet après-midi.",
    "pt": "Vai chover hoje à tarde."
   },
   {
    "fr": "Les orages d'été sont courts.",
    "pt": "As chuvas de verão são rápidas."
   },
   {
    "fr": "Prends un parapluie, au cas où.",
    "pt": "Leva um guarda-chuva, por via das dúvidas."
   },
   {
    "fr": "C'est très humide aujourd'hui.",
    "pt": "Está muito úmido hoje."
   },
   {
    "fr": "En hiver, il fait plus doux.",
    "pt": "No inverno, o tempo fica mais ameno."
   },
   {
    "fr": "Demain, il va faire beau.",
    "pt": "Amanhã vai fazer sol."
   },
   {
    "fr": "Parfait pour aller à la plage !",
    "pt": "Perfeito para ir à praia!"
   }
  ]
 },
 {
  "title": "Prendre le bus et le métro",
  "phrases": [
   {
    "fr": "Comment on va au centre-ville ?",
    "pt": "Como a gente vai para o centro?"
   },
   {
    "fr": "Tu peux prendre le métro.",
    "pt": "Você pode pegar o metrô."
   },
   {
    "fr": "Ce bus va à Ipanema ?",
    "pt": "Esse ônibus vai para Ipanema?"
   },
   {
    "fr": "Non, il faut prendre le suivant.",
    "pt": "Não, precisa pegar o próximo."
   },
   {
    "fr": "Le ticket coûte combien ?",
    "pt": "Quanto custa a passagem?"
   },
   {
    "fr": "Je descends au prochain arrêt.",
    "pt": "Eu desço no próximo ponto."
   },
   {
    "fr": "Il faut faire signe au chauffeur.",
    "pt": "Precisa dar sinal para o motorista."
   },
   {
    "fr": "Le métro est climatisé.",
    "pt": "O metrô tem ar-condicionado."
   },
   {
    "fr": "Je recharge ma carte de transport.",
    "pt": "Eu vou recarregar meu cartão de transporte."
   },
   {
    "fr": "Le trajet dure vingt minutes.",
    "pt": "A viagem leva vinte minutos."
   }
  ]
 },
 {
  "title": "Demander son chemin",
  "phrases": [
   {
    "fr": "Excusez-moi, vous pouvez m'aider ?",
    "pt": "Com licença, você pode me ajudar?"
   },
   {
    "fr": "Je cherche la plage de Leblon.",
    "pt": "Eu estou procurando a praia do Leblon."
   },
   {
    "fr": "Vous êtes à pied ?",
    "pt": "Você está a pé?"
   },
   {
    "fr": "Oui, je marche.",
    "pt": "Sim, estou andando."
   },
   {
    "fr": "Continuez tout droit sur cette avenue.",
    "pt": "Segue reto nessa avenida."
   },
   {
    "fr": "Ensuite, tournez à gauche.",
    "pt": "Depois, vira à esquerda."
   },
   {
    "fr": "C'est loin d'ici ?",
    "pt": "É longe daqui?"
   },
   {
    "fr": "Non, c'est à dix minutes.",
    "pt": "Não, fica a dez minutos."
   },
   {
    "fr": "Vous parlez très bien portugais !",
    "pt": "Você fala português muito bem!"
   },
   {
    "fr": "Merci beaucoup pour votre aide.",
    "pt": "Muito obrigado pela ajuda."
   }
  ],
  "tip": {
   "title": "« Você » : le tu et le vous brésiliens",
   "example": "Excusez-moi, vous pouvez m'aider ? — Com licença, <b>você</b> pode me ajudar?",
   "body": "Au Brésil, « você » sert à la fois de « tu » et de « vous » de politesse courant, et se conjugue comme « il » ou « elle » : você fala (tu parles, vous parlez). Avec une personne âgée ou dans un cadre très formel, on dit plutôt « o senhor » ou « a senhora ». Le pluriel est « vocês » (vous, à plusieurs)."
  }
 },
 {
  "title": "La routine du matin",
  "phrases": [
   {
    "fr": "Je me lève à six heures.",
    "pt": "Eu acordo às seis horas."
   },
   {
    "fr": "Je prends une douche froide.",
    "pt": "Eu tomo um banho frio."
   },
   {
    "fr": "Ensuite, je prépare le café.",
    "pt": "Depois, eu passo o café."
   },
   {
    "fr": "Je mange des fruits au petit-déjeuner.",
    "pt": "Eu como frutas no café da manhã."
   },
   {
    "fr": "J'adore le pain beurré au petit matin.",
    "pt": "Eu adoro pão com manteiga de manhã cedo."
   },
   {
    "fr": "Je vais courir sur la plage.",
    "pt": "Eu vou correr na praia."
   },
   {
    "fr": "À huit heures, je pars au travail.",
    "pt": "Às oito horas, eu saio para o trabalho."
   },
   {
    "fr": "Je ne veux pas être en retard.",
    "pt": "Eu não quero chegar atrasado."
   },
   {
    "fr": "J'écoute de la musique dans le bus.",
    "pt": "Eu escuto música no ônibus."
   },
   {
    "fr": "Le matin, c'est mon moment préféré.",
    "pt": "De manhã é o meu momento favorito."
   }
  ]
 },
 {
  "title": "Les tâches ménagères",
  "phrases": [
   {
    "fr": "Aujourd'hui, je fais le ménage.",
    "pt": "Hoje eu vou fazer faxina."
   },
   {
    "fr": "Tu peux passer le balai ?",
    "pt": "Você pode varrer o chão?"
   },
   {
    "fr": "Je fais la vaisselle après le dîner.",
    "pt": "Eu lavo a louça depois do jantar."
   },
   {
    "fr": "Le linge sèche vite au soleil.",
    "pt": "A roupa seca rápido no sol."
   },
   {
    "fr": "Il faut sortir la poubelle.",
    "pt": "Precisa levar o lixo para fora."
   },
   {
    "fr": "Je range ma chambre.",
    "pt": "Eu arrumo o meu quarto."
   },
   {
    "fr": "Qui fait les courses cette semaine ?",
    "pt": "Quem faz as compras essa semana?"
   },
   {
    "fr": "Moi, je m'occupe de la cuisine.",
    "pt": "Eu cuido da cozinha."
   },
   {
    "fr": "La maison est enfin propre.",
    "pt": "A casa está limpa, finalmente."
   },
   {
    "fr": "On mérite une pause, non ?",
    "pt": "A gente merece uma pausa, né?"
   }
  ]
 },
 {
  "title": "Les vêtements et les couleurs",
  "phrases": [
   {
    "fr": "Il fait trop chaud pour un jean.",
    "pt": "Está quente demais para usar calça jeans."
   },
   {
    "fr": "Je mets un short et des tongs.",
    "pt": "Eu vou de bermuda e chinelo."
   },
   {
    "fr": "Tu aimes cette chemise verte ?",
    "pt": "Você gosta dessa camisa verde?"
   },
   {
    "fr": "Je préfère la jaune.",
    "pt": "Eu prefiro a amarela."
   },
   {
    "fr": "Cette robe est très jolie.",
    "pt": "Esse vestido é muito bonito."
   },
   {
    "fr": "Vous l'avez en taille moyenne ?",
    "pt": "Vocês têm no tamanho médio?"
   },
   {
    "fr": "Je peux l'essayer ?",
    "pt": "Posso experimentar?"
   },
   {
    "fr": "La cabine est au fond.",
    "pt": "O provador fica no fundo."
   },
   {
    "fr": "C'est un peu trop grand.",
    "pt": "Está um pouco grande demais."
   },
   {
    "fr": "Je vais prendre ce maillot de bain bleu.",
    "pt": "Eu vou levar esse biquíni azul."
   }
  ]
 },
 {
  "title": "Dire l'heure et les nombres",
  "phrases": [
   {
    "fr": "Quelle heure est-il ?",
    "pt": "Que horas são?"
   },
   {
    "fr": "Il est midi pile.",
    "pt": "É meio-dia em ponto."
   },
   {
    "fr": "Il est trois heures et demie.",
    "pt": "São três e meia."
   },
   {
    "fr": "Le magasin ouvre à neuf heures.",
    "pt": "A loja abre às nove horas."
   },
   {
    "fr": "Il y a douze personnes dans la file.",
    "pt": "Tem doze pessoas na fila."
   },
   {
    "fr": "J'ai vingt-huit ans.",
    "pt": "Eu tenho vinte e oito anos."
   },
   {
    "fr": "Mon numéro, c'est le neuf, huit, sept.",
    "pt": "Meu número é nove, oito, sete."
   },
   {
    "fr": "Tu as l'heure, s'il te plaît ?",
    "pt": "Você tem horas, por favor?"
   },
   {
    "fr": "Nous avons rendez-vous à quatre heures.",
    "pt": "A gente tem um encontro às quatro horas."
   },
   {
    "fr": "Il reste cinq minutes.",
    "pt": "Faltam cinco minutos."
   }
  ],
  "tip": {
   "title": "« Ter » et « tem » (= il y a)",
   "example": "Il y a douze personnes dans la file. — <b>Tem</b> doze pessoas na fila.",
   "body": "« Ter » veut dire avoir : eu tenho, você tem, a gente tem, vocês têm. Au Brésil, on l'utilise aussi à l'oral pour dire « il y a » : tem muita gente (il y a beaucoup de monde), tem um ônibus às dez (il y a un bus à dix heures). Et pour l'âge, comme en français : eu tenho trinta anos (j'ai trente ans)."
  }
 },
 {
  "title": "Un appel téléphonique",
  "phrases": [
   {
    "fr": "Allô, c'est bien le cabinet du dentiste ?",
    "pt": "Alô, é do consultório do dentista?"
   },
   {
    "fr": "Oui, je peux vous aider ?",
    "pt": "Sim, posso ajudar?"
   },
   {
    "fr": "Je voudrais prendre un rendez-vous.",
    "pt": "Eu queria marcar uma consulta."
   },
   {
    "fr": "Quel jour vous convient ?",
    "pt": "Qual dia é melhor para você?"
   },
   {
    "fr": "Jeudi matin, si possible.",
    "pt": "Quinta de manhã, se possível."
   },
   {
    "fr": "Nous avons de la place à dix heures.",
    "pt": "Tem horário às dez horas."
   },
   {
    "fr": "C'est parfait pour moi.",
    "pt": "Para mim está perfeito."
   },
   {
    "fr": "Vous pouvez répéter votre nom ?",
    "pt": "Pode repetir o seu nome?"
   },
   {
    "fr": "Je vous envoie une confirmation par message.",
    "pt": "Vou te mandar uma confirmação por mensagem."
   },
   {
    "fr": "Merci, à jeudi !",
    "pt": "Obrigado, até quinta!"
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce premier module est terminé.",
    "pt": "Este primeiro módulo terminou."
   },
   {
    "fr": "Nous avons appris beaucoup de choses.",
    "pt": "A gente aprendeu muita coisa."
   },
   {
    "fr": "La vie à Rio devient plus simple.",
    "pt": "A vida no Rio está ficando mais fácil."
   },
   {
    "fr": "Je sais commander un jus.",
    "pt": "Eu sei pedir um suco."
   },
   {
    "fr": "Je peux prendre le bus tout seul.",
    "pt": "Eu consigo pegar ônibus sozinho."
   },
   {
    "fr": "Mon portugais progresse chaque jour.",
    "pt": "O meu português melhora a cada dia."
   },
   {
    "fr": "C'est important de pratiquer souvent.",
    "pt": "É importante praticar sempre."
   },
   {
    "fr": "Les Brésiliens sont très patients avec moi.",
    "pt": "Os brasileiros são muito pacientes comigo."
   },
   {
    "fr": "Je suis fier de mes progrès.",
    "pt": "Eu estou orgulhoso do meu progresso."
   },
   {
    "fr": "Rendez-vous au prochain module !",
    "pt": "Até o próximo módulo!"
   }
  ]
 }
];

const level1Module2Lessons = [
 {
  "title": "À l'aéroport de Guarulhos",
  "phrases": [
   {
    "fr": "Où est le comptoir de la compagnie aérienne ?",
    "pt": "Onde fica o balcão da companhia aérea?"
   },
   {
    "fr": "Il est au fond du terminal deux.",
    "pt": "Fica no fundo do terminal dois."
   },
   {
    "fr": "Vous avez une valise à enregistrer ?",
    "pt": "O senhor tem uma mala para despachar?"
   },
   {
    "fr": "Oui, une seule grande valise.",
    "pt": "Sim, só uma mala grande."
   },
   {
    "fr": "Je préfère une place côté hublot.",
    "pt": "Eu prefiro um lugar na janela."
   },
   {
    "fr": "L'embarquement commence à quelle heure ?",
    "pt": "O embarque começa a que horas?"
   },
   {
    "fr": "Votre porte d'embarquement est la numéro douze.",
    "pt": "O seu portão de embarque é o número doze."
   },
   {
    "fr": "Je dois passer par le contrôle de sécurité.",
    "pt": "Eu preciso passar pela segurança."
   },
   {
    "fr": "Le vol pour Rio est à l'heure.",
    "pt": "O voo para o Rio está no horário."
   },
   {
    "fr": "Bon voyage et à bientôt !",
    "pt": "Boa viagem e até logo!"
   }
  ]
 },
 {
  "title": "Un billet de bus à la rodoviária",
  "phrases": [
   {
    "fr": "Je voudrais un billet pour Paraty.",
    "pt": "Eu queria uma passagem para Paraty."
   },
   {
    "fr": "Aller simple ou aller-retour ?",
    "pt": "Só ida ou ida e volta?"
   },
   {
    "fr": "Aller-retour, s'il vous plaît.",
    "pt": "Ida e volta, por favor."
   },
   {
    "fr": "Le prochain bus part à dix heures.",
    "pt": "O próximo ônibus sai às dez horas."
   },
   {
    "fr": "J'aimerais une place près de la fenêtre.",
    "pt": "Eu gostaria de um lugar perto da janela."
   },
   {
    "fr": "Le voyage dure combien de temps ?",
    "pt": "A viagem dura quanto tempo?"
   },
   {
    "fr": "Environ six heures, avec un arrêt.",
    "pt": "Mais ou menos seis horas, com uma parada."
   },
   {
    "fr": "De quel quai part le bus ?",
    "pt": "O ônibus sai de qual plataforma?"
   },
   {
    "fr": "Je peux payer par carte ?",
    "pt": "Posso pagar com cartão?"
   },
   {
    "fr": "Voici votre billet, bon voyage.",
    "pt": "Aqui está a sua passagem, boa viagem."
   }
  ],
  "tip": {
   "title": "« Eu queria » et « Eu gostaria » : demander poliment",
   "example": "J'aimerais une place près de la fenêtre. — Eu <b>gostaria</b> de um lugar perto da janela.",
   "body": "Pour demander quelque chose poliment, les Brésiliens disent très souvent « Eu queria… » (littéralement « je voulais »), qui sonne plus doux que « Eu quero » (je veux). « Eu gostaria de… » (j'aimerais) est encore un peu plus formel. Exemples : Eu queria um café. Eu gostaria de reservar uma mesa."
  }
 },
 {
  "title": "Une promenade sur l'Avenida Paulista",
  "phrases": [
   {
    "fr": "L'Avenida Paulista est très animée le dimanche.",
    "pt": "A Avenida Paulista fica muito animada no domingo."
   },
   {
    "fr": "Le dimanche, elle est fermée aux voitures.",
    "pt": "No domingo, ela fica fechada para os carros."
   },
   {
    "fr": "Il y a des musiciens partout.",
    "pt": "Tem músicos por todo lado."
   },
   {
    "fr": "Le MASP est juste là, à droite.",
    "pt": "O MASP fica bem ali, à direita."
   },
   {
    "fr": "C'est le musée d'art le plus connu de la ville.",
    "pt": "É o museu de arte mais famoso da cidade."
   },
   {
    "fr": "Le bâtiment est rouge et suspendu.",
    "pt": "O prédio é vermelho e suspenso."
   },
   {
    "fr": "On entre voir les tableaux ?",
    "pt": "A gente entra para ver os quadros?"
   },
   {
    "fr": "L'entrée est gratuite le mardi.",
    "pt": "A entrada é grátis na terça-feira."
   },
   {
    "fr": "Le trottoir est noir de monde ce matin.",
    "pt": "A calçada está lotada hoje de manhã."
   },
   {
    "fr": "Faisons une pause sur ce banc.",
    "pt": "Vamos fazer uma pausa neste banco."
   }
  ]
 },
 {
  "title": "Au Mercado Municipal de São Paulo",
  "phrases": [
   {
    "fr": "Le marché municipal ouvre tôt le matin.",
    "pt": "O Mercado Municipal abre cedo de manhã."
   },
   {
    "fr": "Regarde tous ces fruits colorés !",
    "pt": "Olha todas essas frutas coloridas!"
   },
   {
    "fr": "Je n'ai jamais vu ce fruit.",
    "pt": "Eu nunca vi essa fruta."
   },
   {
    "fr": "Vous voulez goûter une mangue ?",
    "pt": "Você quer provar uma manga?"
   },
   {
    "fr": "Elle est très sucrée.",
    "pt": "Ela é muito doce."
   },
   {
    "fr": "On doit essayer le sandwich à la mortadelle.",
    "pt": "A gente tem que provar o sanduíche de mortadela."
   },
   {
    "fr": "Il est énorme, on le partage ?",
    "pt": "Ele é enorme, vamos dividir?"
   },
   {
    "fr": "Je prends aussi un jus de fruits.",
    "pt": "Eu também vou pegar um suco."
   },
   {
    "fr": "Un jus d'orange sans sucre, s'il vous plaît.",
    "pt": "Um suco de laranja sem açúcar, por favor."
   },
   {
    "fr": "Ce marché est vraiment magnifique.",
    "pt": "Esse mercado é muito lindo."
   }
  ]
 },
 {
  "title": "Réserver une pousada à Paraty",
  "phrases": [
   {
    "fr": "Je vais réserver une chambre pour ce soir.",
    "pt": "Eu vou reservar um quarto para hoje à noite."
   },
   {
    "fr": "Vous avez une chambre libre ?",
    "pt": "Vocês têm um quarto livre?"
   },
   {
    "fr": "Pour deux personnes et trois nuits.",
    "pt": "Para duas pessoas e três noites."
   },
   {
    "fr": "Le petit-déjeuner est compris ?",
    "pt": "O café da manhã está incluído?"
   },
   {
    "fr": "Oui, il est servi jusqu'à dix heures.",
    "pt": "Sim, é servido até as dez horas."
   },
   {
    "fr": "La pousada est dans le centre historique.",
    "pt": "A pousada fica no centro histórico."
   },
   {
    "fr": "Les rues sont en pavés anciens.",
    "pt": "As ruas são de pedras antigas."
   },
   {
    "fr": "Nous allons arriver vers midi.",
    "pt": "Nós vamos chegar por volta do meio-dia."
   },
   {
    "fr": "Il y a la climatisation dans la chambre ?",
    "pt": "Tem ar-condicionado no quarto?"
   },
   {
    "fr": "Pouvez-vous m'envoyer une confirmation ?",
    "pt": "Pode me mandar uma confirmação?"
   }
  ],
  "tip": {
   "title": "« Vou + infinitif » : le futur proche",
   "example": "Nous allons arriver vers midi. — Nós <b>vamos chegar</b> por volta do meio-dia.",
   "body": "Comme en français avec « aller + infinitif », le portugais du Brésil exprime le futur avec le verbe « ir » au présent suivi d'un infinitif : eu vou, você vai, a gente vai, nós vamos, eles vão. À l'oral, c'est de loin la façon la plus courante de parler du futur. Exemples : Eu vou viajar amanhã. Ela vai comer na pousada."
  }
 },
 {
  "title": "Une valise perdue",
  "phrases": [
   {
    "fr": "Ma valise n'est pas sortie sur le tapis.",
    "pt": "A minha mala não saiu na esteira."
   },
   {
    "fr": "Où est le guichet des bagages perdus ?",
    "pt": "Onde fica o balcão de bagagem extraviada?"
   },
   {
    "fr": "Elle est de quelle couleur ?",
    "pt": "Ela é de que cor?"
   },
   {
    "fr": "Elle est bleue avec une étiquette jaune.",
    "pt": "Ela é azul com uma etiqueta amarela."
   },
   {
    "fr": "Voici mon ticket de bagage.",
    "pt": "Aqui está o meu comprovante de bagagem."
   },
   {
    "fr": "Nous allons la chercher dans le système.",
    "pt": "Nós vamos procurar no sistema."
   },
   {
    "fr": "Elle est restée à São Paulo.",
    "pt": "Ela ficou em São Paulo."
   },
   {
    "fr": "Elle arrive demain matin.",
    "pt": "Ela chega amanhã de manhã."
   },
   {
    "fr": "Pouvez-vous la livrer à mon hôtel ?",
    "pt": "Vocês podem entregar no meu hotel?"
   },
   {
    "fr": "Notez mon numéro de téléphone, s'il vous plaît.",
    "pt": "Anota o meu número de celular, por favor."
   }
  ]
 },
 {
  "title": "Payer en reais",
  "phrases": [
   {
    "fr": "Où est-ce que je peux retirer de l'argent ?",
    "pt": "Onde eu posso sacar dinheiro?"
   },
   {
    "fr": "Il y a un distributeur dans la galerie.",
    "pt": "Tem um caixa eletrônico na galeria."
   },
   {
    "fr": "La monnaie du Brésil, c'est le real.",
    "pt": "A moeda do Brasil é o real."
   },
   {
    "fr": "Vous acceptez les cartes étrangères ?",
    "pt": "Vocês aceitam cartão estrangeiro?"
   },
   {
    "fr": "Ici, beaucoup de gens paient avec le Pix.",
    "pt": "Aqui, muita gente paga com Pix."
   },
   {
    "fr": "Je n'ai que des gros billets.",
    "pt": "Eu só tenho notas grandes."
   },
   {
    "fr": "Vous avez de la monnaie ?",
    "pt": "Você tem troco?"
   },
   {
    "fr": "Gardez la monnaie.",
    "pt": "Pode ficar com o troco."
   },
   {
    "fr": "Il me faut un reçu, s'il vous plaît.",
    "pt": "Eu preciso de um recibo, por favor."
   },
   {
    "fr": "Merci, vous êtes très aimable.",
    "pt": "Obrigado, o senhor é muito gentil."
   }
  ]
 },
 {
  "title": "À l'office du tourisme de Paraty",
  "phrases": [
   {
    "fr": "Bonjour, vous avez un plan de la ville ?",
    "pt": "Bom dia, vocês têm um mapa da cidade?"
   },
   {
    "fr": "Combien coûte la promenade en bateau ?",
    "pt": "Quanto custa o passeio de barco?"
   },
   {
    "fr": "Elle coûte quatre-vingts reais par personne.",
    "pt": "Custa oitenta reais por pessoa."
   },
   {
    "fr": "Le bateau s'arrête sur trois plages.",
    "pt": "O barco para em três praias."
   },
   {
    "fr": "Le départ est à onze heures, au port.",
    "pt": "A saída é às onze horas, no cais."
   },
   {
    "fr": "Le déjeuner n'est pas compris.",
    "pt": "O almoço não está incluído."
   },
   {
    "fr": "Il y a aussi une visite guidée du centre.",
    "pt": "Também tem uma visita guiada pelo centro."
   },
   {
    "fr": "Elle dure deux heures et demie.",
    "pt": "Ela dura duas horas e meia."
   },
   {
    "fr": "C'est gratuit pour les enfants.",
    "pt": "É de graça para as crianças."
   },
   {
    "fr": "Parfait, je prends deux billets.",
    "pt": "Perfeito, eu vou levar dois ingressos."
   }
  ],
  "tip": {
   "title": "« Quanto custa ? » et les nombres",
   "example": "Combien coûte la promenade en bateau ? — <b>Quanto custa</b> o passeio de barco?",
   "body": "« Quanto custa ? » veut dire « combien ça coûte ? » ; au pluriel on dit « Quanto custam ? ». Les dizaines sont régulières : vinte (20), trinta (30), quarenta (40), cinquenta (50), sessenta (60), setenta (70), oitenta (80), noventa (90), et on relie avec « e » : vinte e cinco (25). Les prix se disent en reais : um real, dois reais, cem reais."
  }
 },
 {
  "title": "Une urgence à la pharmacie",
  "phrases": [
   {
    "fr": "Je ne me sens pas bien depuis hier.",
    "pt": "Eu não estou me sentindo bem desde ontem."
   },
   {
    "fr": "Qu'est-ce que vous avez ?",
    "pt": "O que o senhor está sentindo?"
   },
   {
    "fr": "J'ai mal au ventre.",
    "pt": "Eu estou com dor de barriga."
   },
   {
    "fr": "J'ai pris trop de soleil à la plage.",
    "pt": "Eu tomei sol demais na praia."
   },
   {
    "fr": "Vous avez de la crème pour les coups de soleil ?",
    "pt": "Vocês têm creme para queimadura de sol?"
   },
   {
    "fr": "Il faut boire beaucoup d'eau.",
    "pt": "Tem que beber muita água."
   },
   {
    "fr": "Prenez un comprimé trois fois par jour.",
    "pt": "Tome um comprimido três vezes por dia."
   },
   {
    "fr": "Il y a un médecin près d'ici ?",
    "pt": "Tem algum médico aqui perto?"
   },
   {
    "fr": "La pharmacie est ouverte toute la nuit.",
    "pt": "A farmácia fica aberta a noite toda."
   },
   {
    "fr": "Merci, je me sens déjà mieux.",
    "pt": "Obrigado, já estou me sentindo melhor."
   }
  ]
 },
 {
  "title": "Le bateau pour Ilha Grande",
  "phrases": [
   {
    "fr": "Le bateau pour Ilha Grande part d'Angra dos Reis.",
    "pt": "O barco para a Ilha Grande sai de Angra dos Reis."
   },
   {
    "fr": "La traversée dure une heure et demie.",
    "pt": "A travessia dura uma hora e meia."
   },
   {
    "fr": "Il n'y a pas de voitures sur l'île.",
    "pt": "Não tem carro na ilha."
   },
   {
    "fr": "On se déplace à pied ou en bateau.",
    "pt": "A gente anda a pé ou de barco."
   },
   {
    "fr": "Mets ton gilet de sauvetage.",
    "pt": "Coloca o seu colete salva-vidas."
   },
   {
    "fr": "La mer est un peu agitée aujourd'hui.",
    "pt": "O mar está um pouco agitado hoje."
   },
   {
    "fr": "Regarde, des dauphins à côté du bateau !",
    "pt": "Olha, golfinhos do lado do barco!"
   },
   {
    "fr": "L'eau est d'un vert incroyable.",
    "pt": "A água é de um verde incrível."
   },
   {
    "fr": "On arrive au village dans dix minutes.",
    "pt": "A gente chega na vila em dez minutos."
   },
   {
    "fr": "N'oublie pas ton sac à dos.",
    "pt": "Não esquece a sua mochila."
   }
  ]
 },
 {
  "title": "Une journée de plage à Ilha Grande",
  "phrases": [
   {
    "fr": "Lopes Mendes est une des plus belles plages du Brésil.",
    "pt": "Lopes Mendes é uma das praias mais bonitas do Brasil."
   },
   {
    "fr": "Le sable est blanc et très fin.",
    "pt": "A areia é branca e bem fininha."
   },
   {
    "fr": "On loue un parasol pour la journée ?",
    "pt": "Vamos alugar um guarda-sol para o dia?"
   },
   {
    "fr": "N'oublie pas la crème solaire.",
    "pt": "Não esquece o protetor solar."
   },
   {
    "fr": "L'eau est un peu froide, mais agréable.",
    "pt": "A água está um pouco fria, mas gostosa."
   },
   {
    "fr": "Je vais nager un peu.",
    "pt": "Eu vou nadar um pouco."
   },
   {
    "fr": "Fais attention aux vagues.",
    "pt": "Cuidado com as ondas."
   },
   {
    "fr": "Un vendeur passe avec des noix de coco.",
    "pt": "Um vendedor está passando com coco."
   },
   {
    "fr": "Une eau de coco bien fraîche, s'il vous plaît.",
    "pt": "Uma água de coco bem gelada, por favor."
   },
   {
    "fr": "Je pourrais rester ici toute la journée.",
    "pt": "Eu poderia ficar aqui o dia inteiro."
   }
  ]
 },
 {
  "title": "Un problème avec la voiture de location",
  "phrases": [
   {
    "fr": "La voiture fait un bruit bizarre.",
    "pt": "O carro está fazendo um barulho estranho."
   },
   {
    "fr": "Le voyant du moteur est allumé.",
    "pt": "A luz do motor está acesa."
   },
   {
    "fr": "Je crois qu'on a un pneu crevé.",
    "pt": "Acho que a gente está com um pneu furado."
   },
   {
    "fr": "Il y a une roue de secours dans le coffre ?",
    "pt": "Tem estepe no porta-malas?"
   },
   {
    "fr": "J'appelle l'agence de location.",
    "pt": "Eu vou ligar para a locadora."
   },
   {
    "fr": "Où êtes-vous exactement ?",
    "pt": "Onde vocês estão exatamente?"
   },
   {
    "fr": "Nous sommes sur la route de Paraty.",
    "pt": "Nós estamos na estrada de Paraty."
   },
   {
    "fr": "Un mécanicien arrive dans une heure.",
    "pt": "Um mecânico chega em uma hora."
   },
   {
    "fr": "On peut attendre dans ce petit café.",
    "pt": "A gente pode esperar nesse barzinho."
   },
   {
    "fr": "Heureusement, tout le monde va bien.",
    "pt": "Ainda bem que está todo mundo bem."
   }
  ]
 },
 {
  "title": "Un bus en retard",
  "phrases": [
   {
    "fr": "Le bus a quarante minutes de retard.",
    "pt": "O ônibus está quarenta minutos atrasado."
   },
   {
    "fr": "Vous savez pourquoi ?",
    "pt": "Você sabe por quê?"
   },
   {
    "fr": "Il y a beaucoup d'embouteillages sur la route.",
    "pt": "Tem muito trânsito na estrada."
   },
   {
    "fr": "À cause de la pluie, tout est lent.",
    "pt": "Por causa da chuva, tudo está devagar."
   },
   {
    "fr": "On va rater notre correspondance.",
    "pt": "A gente vai perder a conexão."
   },
   {
    "fr": "Il y a un autre bus plus tard ?",
    "pt": "Tem outro ônibus mais tarde?"
   },
   {
    "fr": "Oui, le dernier part à minuit.",
    "pt": "Tem, o último sai à meia-noite."
   },
   {
    "fr": "Je vais prévenir la pousada.",
    "pt": "Eu vou avisar a pousada."
   },
   {
    "fr": "On achète quelque chose à manger en attendant ?",
    "pt": "Vamos comprar alguma coisa para comer enquanto isso?"
   },
   {
    "fr": "Enfin, le voilà qui arrive !",
    "pt": "Finalmente, ele está chegando!"
   }
  ]
 },
 {
  "title": "Faire connaissance dans le bus",
  "phrases": [
   {
    "fr": "Excusez-moi, cette place est libre ?",
    "pt": "Com licença, esse lugar está livre?"
   },
   {
    "fr": "Oui, vous pouvez vous asseoir.",
    "pt": "Sim, pode sentar."
   },
   {
    "fr": "Vous allez à Florianópolis aussi ?",
    "pt": "Você também vai para Florianópolis?"
   },
   {
    "fr": "Non, je descends à Curitiba.",
    "pt": "Não, eu desço em Curitiba."
   },
   {
    "fr": "Je viens de Belo Horizonte.",
    "pt": "Eu sou de Belo Horizonte."
   },
   {
    "fr": "Et vous, vous êtes d'où ?",
    "pt": "E você, é de onde?"
   },
   {
    "fr": "Je suis français, je viens de Lyon.",
    "pt": "Eu sou francês, sou de Lyon."
   },
   {
    "fr": "J'habite à Rio depuis un mois.",
    "pt": "Eu moro no Rio há um mês."
   },
   {
    "fr": "Votre portugais est déjà très bon !",
    "pt": "O seu português já está muito bom!"
   },
   {
    "fr": "Merci, j'apprends un peu chaque jour.",
    "pt": "Obrigado, eu aprendo um pouco todo dia."
   }
  ],
  "tip": {
   "title": "« Em », « para », « de » avec les villes",
   "example": "J'habite à Rio depuis un mois. — Eu moro <b>no</b> Rio há um mês.",
   "body": "Pour dire où l'on est, on utilise « em » (à, dans) : eu moro em Curitiba. Pour la destination, on utilise « para » : eu vou para Florianópolis. Pour l'origine, « de » : eu sou de Belo Horizonte. Certaines villes prennent un article et la préposition se contracte : no Rio, para o Rio, do Rio (em + o = no, de + o = do)."
  }
 },
 {
  "title": "Les chutes d'Iguaçu",
  "phrases": [
   {
    "fr": "Les chutes d'Iguaçu sont à la frontière.",
    "pt": "As Cataratas do Iguaçu ficam na fronteira."
   },
   {
    "fr": "On prend le bus du parc à l'entrée.",
    "pt": "A gente pega o ônibus do parque na entrada."
   },
   {
    "fr": "Écoute le bruit de l'eau !",
    "pt": "Escuta o barulho da água!"
   },
   {
    "fr": "Il y a plus de deux cents cascades.",
    "pt": "Tem mais de duzentas quedas-d'água."
   },
   {
    "fr": "La plus grande s'appelle la Gorge du Diable.",
    "pt": "A maior se chama Garganta do Diabo."
   },
   {
    "fr": "On va être complètement mouillés.",
    "pt": "A gente vai ficar todo molhado."
   },
   {
    "fr": "Tu as pris un imperméable ?",
    "pt": "Você trouxe uma capa de chuva?"
   },
   {
    "fr": "Attention aux coatis, ils volent la nourriture.",
    "pt": "Cuidado com os quatis, eles roubam comida."
   },
   {
    "fr": "Regarde, il y a un arc-en-ciel !",
    "pt": "Olha, tem um arco-íris!"
   },
   {
    "fr": "C'est le plus beau paysage du voyage.",
    "pt": "É a paisagem mais bonita da viagem."
   }
  ]
 },
 {
  "title": "Goûter les spécialités brésiliennes",
  "phrases": [
   {
    "fr": "Qu'est-ce qu'il faut absolument goûter ici ?",
    "pt": "O que a gente tem que provar aqui?"
   },
   {
    "fr": "Le pão de queijo est délicieux le matin.",
    "pt": "O pão de queijo é uma delícia de manhã."
   },
   {
    "fr": "C'est un petit pain au fromage tout chaud.",
    "pt": "É um pãozinho de queijo bem quentinho."
   },
   {
    "fr": "Je voudrais aussi une coxinha.",
    "pt": "Eu queria também uma coxinha."
   },
   {
    "fr": "Elle est farcie au poulet.",
    "pt": "Ela é recheada de frango."
   },
   {
    "fr": "Le samedi, on mange la feijoada.",
    "pt": "No sábado, a gente come feijoada."
   },
   {
    "fr": "C'est un plat de haricots noirs et de viande.",
    "pt": "É um prato de feijão-preto com carne."
   },
   {
    "fr": "Comme dessert, je prends un açaí.",
    "pt": "De sobremesa, eu vou pegar um açaí."
   },
   {
    "fr": "C'est un peu sucré, mais très bon.",
    "pt": "É um pouco doce, mas muito bom."
   },
   {
    "fr": "Je pourrais manger ça tous les jours.",
    "pt": "Eu poderia comer isso todo dia."
   }
  ]
 },
 {
  "title": "Se déplacer à Florianópolis",
  "phrases": [
   {
    "fr": "Florianópolis est une île avec quarante plages.",
    "pt": "Florianópolis é uma ilha com quarenta praias."
   },
   {
    "fr": "Comment on va à la plage de Joaquina ?",
    "pt": "Como é que a gente vai para a praia da Joaquina?"
   },
   {
    "fr": "Il faut changer de bus au terminal.",
    "pt": "Tem que trocar de ônibus no terminal."
   },
   {
    "fr": "On peut aussi louer un vélo.",
    "pt": "Também dá para alugar uma bicicleta."
   },
   {
    "fr": "C'est plus simple de prendre un taxi.",
    "pt": "É mais fácil pegar um táxi."
   },
   {
    "fr": "Le trajet dure environ trente minutes.",
    "pt": "O trajeto leva uns trinta minutos."
   },
   {
    "fr": "Le pont relie l'île au continent.",
    "pt": "A ponte liga a ilha ao continente."
   },
   {
    "fr": "Il y a beaucoup de circulation le week-end.",
    "pt": "Tem muito trânsito no fim de semana."
   },
   {
    "fr": "Partons tôt pour éviter les bouchons.",
    "pt": "Vamos sair cedo para fugir do trânsito."
   },
   {
    "fr": "Le chauffeur nous dépose devant la dune.",
    "pt": "O motorista deixa a gente na frente da duna."
   }
  ]
 },
 {
  "title": "Une randonnée vers une plage sauvage",
  "phrases": [
   {
    "fr": "Le sentier commence derrière la petite église.",
    "pt": "A trilha começa atrás da igrejinha."
   },
   {
    "fr": "Il faut marcher environ une heure.",
    "pt": "Tem que andar mais ou menos uma hora."
   },
   {
    "fr": "Mets de bonnes chaussures.",
    "pt": "Coloca um tênis bom."
   },
   {
    "fr": "Le chemin monte beaucoup au début.",
    "pt": "O caminho sobe bastante no começo."
   },
   {
    "fr": "Tu as assez d'eau ?",
    "pt": "Você tem água suficiente?"
   },
   {
    "fr": "Faisons une pause à l'ombre.",
    "pt": "Vamos parar um pouco na sombra."
   },
   {
    "fr": "D'ici, on voit toute la côte.",
    "pt": "Daqui, dá para ver todo o litoral."
   },
   {
    "fr": "Il n'y a presque personne sur cette plage.",
    "pt": "Quase não tem ninguém nessa praia."
   },
   {
    "fr": "Ça valait vraiment la peine.",
    "pt": "Valeu muito a pena."
   },
   {
    "fr": "Rentrons avant le coucher du soleil.",
    "pt": "Vamos voltar antes do pôr do sol."
   }
  ]
 },
 {
  "title": "Un vol annulé",
  "phrases": [
   {
    "fr": "Notre vol vient d'être annulé.",
    "pt": "O nosso voo acabou de ser cancelado."
   },
   {
    "fr": "Les avions ne décollent pas à cause de la tempête.",
    "pt": "Os aviões não estão decolando por causa da tempestade."
   },
   {
    "fr": "Toutes les informations sont sur l'écran.",
    "pt": "Todas as informações estão na tela."
   },
   {
    "fr": "Il y a un autre vol demain matin.",
    "pt": "Tem outro voo amanhã de manhã."
   },
   {
    "fr": "La compagnie paie l'hôtel cette nuit ?",
    "pt": "A companhia paga o hotel hoje à noite?"
   },
   {
    "fr": "Oui, et aussi les repas.",
    "pt": "Sim, e as refeições também."
   },
   {
    "fr": "Il faut garder tous les reçus.",
    "pt": "Tem que guardar todos os recibos."
   },
   {
    "fr": "Les hôtels près de l'aéroport sont pleins.",
    "pt": "Os hotéis perto do aeroporto estão cheios."
   },
   {
    "fr": "On peut être remboursés ?",
    "pt": "A gente pode ser reembolsado?"
   },
   {
    "fr": "Bon, on a une nuit de plus au Brésil !",
    "pt": "Bom, a gente ganhou mais uma noite no Brasil!"
   }
  ],
  "tip": {
   "title": "Les pluriels en « -ões », « -ães » et « -éis / -ais »",
   "example": "Les avions ne décollent pas à cause de la tempête. — Os <b>aviões</b> não estão decolando por causa da tempestade.",
   "body": "En général, on ajoute simplement un « s » : voo, voos. Mais les mots en « -ão » font le plus souvent « -ões » (avião, aviões ; informação, informações), parfois « -ães » (pão, pães) ou « -ãos » (mão, mãos). Les mots en « -l » changent aussi : hotel donne hotéis, animal donne animais, jornal donne jornais."
  }
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a fait voyager dans tout le Brésil.",
    "pt": "Esse módulo fez a gente viajar pelo Brasil inteiro."
   },
   {
    "fr": "On a commencé à São Paulo, sur l'Avenida Paulista.",
    "pt": "A gente começou em São Paulo, na Avenida Paulista."
   },
   {
    "fr": "Puis on est allés à Paraty et à Ilha Grande.",
    "pt": "Depois a gente foi para Paraty e para a Ilha Grande."
   },
   {
    "fr": "On a vu les chutes d'Iguaçu et les plages de Florianópolis.",
    "pt": "A gente viu as Cataratas do Iguaçu e as praias de Florianópolis."
   },
   {
    "fr": "Tu sais maintenant acheter un billet et réserver une chambre.",
    "pt": "Agora você sabe comprar uma passagem e reservar um quarto."
   },
   {
    "fr": "Tu sais aussi demander de l'aide en cas de problème.",
    "pt": "Você também sabe pedir ajuda quando tem algum problema."
   },
   {
    "fr": "Un retard ou une valise perdue ne te font plus peur.",
    "pt": "Um atraso ou uma mala perdida não te assustam mais."
   },
   {
    "fr": "Ton portugais progresse vraiment bien.",
    "pt": "O seu português está melhorando muito."
   },
   {
    "fr": "Continue comme ça, un peu chaque jour.",
    "pt": "Continua assim, um pouco todo dia."
   },
   {
    "fr": "Le prochain module t'attend, bon voyage !",
    "pt": "O próximo módulo está te esperando, boa viagem!"
   }
  ]
 }
];

const level1Module3Lessons = [
 {
  "title": "Se présenter à un voisin",
  "phrases": [
   {
    "fr": "Salut, je m'appelle Julien.",
    "pt": "Oi, meu nome é Julien."
   },
   {
    "fr": "Enchanté, moi c'est Mariana.",
    "pt": "Prazer, eu sou a Mariana."
   },
   {
    "fr": "Je viens de France.",
    "pt": "Eu sou da França."
   },
   {
    "fr": "J'habite au troisième étage.",
    "pt": "Eu moro no terceiro andar."
   },
   {
    "fr": "Ça fait combien de temps que tu vis ici ?",
    "pt": "Faz quanto tempo que você mora aqui?"
   },
   {
    "fr": "Je suis arrivé la semaine dernière.",
    "pt": "Eu cheguei semana passada."
   },
   {
    "fr": "Je parle encore un peu mal portugais.",
    "pt": "Eu ainda falo português meio mal."
   },
   {
    "fr": "Pas de souci, tu parles très bien !",
    "pt": "Imagina, você fala muito bem!"
   },
   {
    "fr": "Si tu as besoin de quelque chose, frappe à ma porte.",
    "pt": "Se precisar de alguma coisa, é só bater na minha porta."
   },
   {
    "fr": "Ravi de te rencontrer, à bientôt !",
    "pt": "Prazer em te conhecer, até logo!"
   }
  ]
 },
 {
  "title": "Présenter sa famille",
  "phrases": [
   {
    "fr": "Voici ma famille.",
    "pt": "Esta é a minha família."
   },
   {
    "fr": "Mon frère s'appelle Thomas.",
    "pt": "Meu irmão se chama Thomas."
   },
   {
    "fr": "Ma sœur habite à Lyon.",
    "pt": "Minha irmã mora em Lyon."
   },
   {
    "fr": "Mes parents sont à la retraite.",
    "pt": "Meus pais são aposentados."
   },
   {
    "fr": "Tu as des frères et sœurs ?",
    "pt": "Você tem irmãos?"
   },
   {
    "fr": "J'ai deux sœurs et un frère.",
    "pt": "Eu tenho duas irmãs e um irmão."
   },
   {
    "fr": "Ta mère est vraiment sympathique.",
    "pt": "Sua mãe é muito simpática."
   },
   {
    "fr": "Mon grand-père adore raconter des histoires.",
    "pt": "Meu avô adora contar histórias."
   },
   {
    "fr": "Ma tante prépare le meilleur gâteau du monde.",
    "pt": "Minha tia faz o melhor bolo do mundo."
   },
   {
    "fr": "On se réunit tous les dimanches.",
    "pt": "A gente se reúne todo domingo."
   }
  ],
  "tip": {
   "title": "Les possessifs « meu, minha, seu, sua »",
   "example": "Ta mère est vraiment sympathique. — <b>Sua</b> mãe é muito simpática.",
   "body": "Le possessif s'accorde avec l'objet possédé, pas avec le possesseur : meu irmão (mon frère), minha irmã (ma sœur), meus pais (mes parents). Au Brésil, « seu / sua » veut surtout dire « ton / ta » (à côté de você), et on met souvent l'article devant : a minha família. Pour « son / sa » (à lui, à elle), on préfère dire dele, dela : a mãe dele (sa mère à lui)."
  }
 },
 {
  "title": "Parler de son travail",
  "phrases": [
   {
    "fr": "Qu'est-ce que tu fais dans la vie ?",
    "pt": "O que você faz da vida?"
   },
   {
    "fr": "Je suis infirmière dans un hôpital.",
    "pt": "Eu sou enfermeira num hospital."
   },
   {
    "fr": "Je travaille dans l'informatique.",
    "pt": "Eu trabalho com informática."
   },
   {
    "fr": "Je commence à huit heures du matin.",
    "pt": "Eu começo às oito horas da manhã."
   },
   {
    "fr": "Mon bureau est près de la plage.",
    "pt": "Meu escritório fica perto da praia."
   },
   {
    "fr": "Mes collègues sont très sympas.",
    "pt": "Meus colegas são muito legais."
   },
   {
    "fr": "Tu aimes ton travail ?",
    "pt": "Você gosta do seu trabalho?"
   },
   {
    "fr": "Oui, mais c'est fatigant parfois.",
    "pt": "Gosto, mas às vezes cansa."
   },
   {
    "fr": "Je travaille depuis chez moi le vendredi.",
    "pt": "Eu trabalho de casa às sextas."
   },
   {
    "fr": "Je cherche un nouveau travail.",
    "pt": "Estou procurando um emprego novo."
   }
  ]
 },
 {
  "title": "Les loisirs du week-end",
  "phrases": [
   {
    "fr": "Qu'est-ce que tu fais le week-end ?",
    "pt": "O que você faz no fim de semana?"
   },
   {
    "fr": "Le samedi, je vais à la plage.",
    "pt": "No sábado, eu vou à praia."
   },
   {
    "fr": "J'aime bien lire au soleil.",
    "pt": "Eu curto ler no sol."
   },
   {
    "fr": "Je prends des cours de surf.",
    "pt": "Eu faço aula de surfe."
   },
   {
    "fr": "Mon amie fait du yoga dans le parc.",
    "pt": "Minha amiga faz ioga no parque."
   },
   {
    "fr": "Le dimanche, je me repose.",
    "pt": "No domingo, eu descanso."
   },
   {
    "fr": "Tu joues d'un instrument ?",
    "pt": "Você toca algum instrumento?"
   },
   {
    "fr": "J'apprends la guitare depuis un an.",
    "pt": "Estou aprendendo violão faz um ano."
   },
   {
    "fr": "Je fais du vélo au bord de la mer.",
    "pt": "Eu ando de bicicleta na orla."
   },
   {
    "fr": "On fait une randonnée ensemble ?",
    "pt": "Vamos fazer uma trilha juntos?"
   }
  ]
 },
 {
  "title": "Inviter à un churrasco",
  "phrases": [
   {
    "fr": "On fait un churrasco dimanche.",
    "pt": "A gente vai fazer um churrasco no domingo."
   },
   {
    "fr": "Tu veux venir ?",
    "pt": "Você quer vir?"
   },
   {
    "fr": "Avec plaisir, à quelle heure ?",
    "pt": "Com prazer, que horas?"
   },
   {
    "fr": "Vers midi, chez moi.",
    "pt": "Lá pelo meio-dia, na minha casa."
   },
   {
    "fr": "Je peux apporter quelque chose ?",
    "pt": "Posso levar alguma coisa?"
   },
   {
    "fr": "Apporte juste des boissons.",
    "pt": "Traz só a bebida."
   },
   {
    "fr": "On mange de la picanha et du pain à l'ail.",
    "pt": "A gente come picanha e pão de alho."
   },
   {
    "fr": "Il y aura aussi une option végétarienne.",
    "pt": "Também vai ter opção vegetariana."
   },
   {
    "fr": "Mon cousin vient avec sa copine.",
    "pt": "Meu primo vem com a namorada dele."
   },
   {
    "fr": "Super, on se voit dimanche !",
    "pt": "Ótimo, a gente se vê no domingo!"
   }
  ],
  "tip": {
   "title": "« A gente » : le « on » brésilien",
   "example": "On fait un churrasco dimanche. — <b>A gente</b> vai fazer um churrasco no domingo.",
   "body": "À l'oral, les Brésiliens disent très souvent « a gente » à la place de « nós » (nous), exactement comme le « on » français. Attention : le verbe se conjugue à la troisième personne du singulier : a gente vai (on va), a gente come (on mange). « Nós vamos » reste correct, mais sonne plus formel."
  }
 },
 {
  "title": "Faire connaissance à une fête",
  "phrases": [
   {
    "fr": "Tu connais l'hôte de la soirée ?",
    "pt": "Você conhece o dono da festa?"
   },
   {
    "fr": "Oui, c'est mon ami d'enfance.",
    "pt": "Conheço, ele é meu amigo de infância."
   },
   {
    "fr": "Je ne connais personne ici.",
    "pt": "Eu não conheço ninguém aqui."
   },
   {
    "fr": "Je te présente ma colocataire.",
    "pt": "Deixa eu te apresentar a minha colega de apartamento."
   },
   {
    "fr": "Tu veux une caipirinha ?",
    "pt": "Quer uma caipirinha?"
   },
   {
    "fr": "Non merci, je préfère un jus.",
    "pt": "Não, obrigado, prefiro um suco."
   },
   {
    "fr": "La musique est super ce soir.",
    "pt": "A música está ótima hoje."
   },
   {
    "fr": "Tu danses le forró ?",
    "pt": "Você dança forró?"
   },
   {
    "fr": "Pas vraiment, mais je veux bien essayer.",
    "pt": "Não muito, mas topo tentar."
   },
   {
    "fr": "Je vais te montrer les pas de base.",
    "pt": "Vou te mostrar os passos básicos."
   }
  ]
 },
 {
  "title": "Parler de la météo",
  "phrases": [
   {
    "fr": "Quelle chaleur aujourd'hui !",
    "pt": "Que calor hoje!"
   },
   {
    "fr": "Le thermomètre affiche trente-huit degrés.",
    "pt": "O termômetro está marcando trinta e oito graus."
   },
   {
    "fr": "On annonce un gros orage pour ce soir.",
    "pt": "Estão prevendo uma tempestade forte para hoje à noite."
   },
   {
    "fr": "En été, il y a souvent des orages.",
    "pt": "No verão, tem muita tempestade."
   },
   {
    "fr": "Je n'aime pas l'humidité.",
    "pt": "Eu não gosto da umidade."
   },
   {
    "fr": "Ne sors pas sans ton parapluie.",
    "pt": "Não sai sem o seu guarda-chuva."
   },
   {
    "fr": "Le ciel est tout bleu.",
    "pt": "O céu está todo azul."
   },
   {
    "fr": "Il fait plus frais le soir.",
    "pt": "À noite fica mais fresco."
   },
   {
    "fr": "Dans le Sud, il fait froid en juillet.",
    "pt": "No Sul, faz frio em julho."
   },
   {
    "fr": "C'est un temps parfait pour la plage.",
    "pt": "É um tempo perfeito para a praia."
   }
  ]
 },
 {
  "title": "Parler d'une novela",
  "phrases": [
   {
    "fr": "Tu regardes la novela de vingt et une heures ?",
    "pt": "Você assiste à novela das nove?"
   },
   {
    "fr": "Oui, j'adore cette histoire.",
    "pt": "Assisto, eu adoro essa história."
   },
   {
    "fr": "J'aime beaucoup l'actrice principale.",
    "pt": "Eu gosto muito da atriz principal."
   },
   {
    "fr": "Le méchant est vraiment terrible.",
    "pt": "O vilão é terrível mesmo."
   },
   {
    "fr": "Je n'aime pas les fins tristes.",
    "pt": "Eu não gosto de final triste."
   },
   {
    "fr": "Hier, l'épisode était incroyable.",
    "pt": "Ontem o capítulo foi incrível."
   },
   {
    "fr": "Ne me raconte pas la fin !",
    "pt": "Não me conta o final!"
   },
   {
    "fr": "Ma mère ne rate aucun épisode.",
    "pt": "Minha mãe não perde nenhum capítulo."
   },
   {
    "fr": "Je regarde ça pour apprendre le portugais.",
    "pt": "Eu assisto para aprender português."
   },
   {
    "fr": "Tu aimes les séries brésiliennes ?",
    "pt": "Você gosta das séries brasileiras?"
   }
  ],
  "tip": {
   "title": "« Gostar de » : aimer quelque chose",
   "example": "J'aime beaucoup l'actrice principale. — Eu <b>gosto</b> muito <b>da</b> atriz principal.",
   "body": "En portugais, on n'aime pas « quelque chose » mais « de quelque chose » : gostar de. La préposition « de » se contracte avec l'article : de + o = do, de + a = da, de + os = dos. Eu gosto do filme (j'aime le film), eu gosto da praia (j'aime la plage), eu gosto de dançar (j'aime danser)."
  }
 },
 {
  "title": "Préparer les vacances",
  "phrases": [
   {
    "fr": "Où est-ce que tu pars en vacances ?",
    "pt": "Para onde você vai nas férias?"
   },
   {
    "fr": "Je vais à Salvador en janvier.",
    "pt": "Eu vou para Salvador em janeiro."
   },
   {
    "fr": "Je veux voir le Pelourinho.",
    "pt": "Eu quero conhecer o Pelourinho."
   },
   {
    "fr": "Tu pars seul ou avec des amis ?",
    "pt": "Você vai sozinho ou com amigos?"
   },
   {
    "fr": "Je pars avec ma copine.",
    "pt": "Eu vou com a minha namorada."
   },
   {
    "fr": "On va rester une semaine.",
    "pt": "A gente vai ficar uma semana."
   },
   {
    "fr": "On a déjà réservé une pousada.",
    "pt": "A gente já reservou uma pousada."
   },
   {
    "fr": "Tu as de la chance !",
    "pt": "Que sorte a sua!"
   },
   {
    "fr": "Envoie-moi des photos.",
    "pt": "Me manda fotos."
   },
   {
    "fr": "Bonnes vacances !",
    "pt": "Boas férias!"
   }
  ]
 },
 {
  "title": "Un appel à un ami",
  "phrases": [
   {
    "fr": "Allô, c'est Pedro ?",
    "pt": "Alô, é o Pedro?"
   },
   {
    "fr": "Oui, c'est moi. Ça va ?",
    "pt": "Sou eu. Tudo bem?"
   },
   {
    "fr": "Ça va, et toi ?",
    "pt": "Tudo, e você?"
   },
   {
    "fr": "Je t'appelle pour ce soir.",
    "pt": "Estou te ligando por causa de hoje à noite."
   },
   {
    "fr": "Tu es libre vers sept heures ?",
    "pt": "Você está livre lá pelas sete?"
   },
   {
    "fr": "Je suis encore au travail.",
    "pt": "Eu ainda estou no trabalho."
   },
   {
    "fr": "Je te rappelle dans dix minutes.",
    "pt": "Te ligo de volta em dez minutos."
   },
   {
    "fr": "Je n'entends pas bien, ça coupe.",
    "pt": "Não estou ouvindo direito, está cortando."
   },
   {
    "fr": "Je t'envoie un message sur le téléphone.",
    "pt": "Te mando uma mensagem no celular."
   },
   {
    "fr": "D'accord, bisous, à plus tard !",
    "pt": "Combinado, beijo, até mais tarde!"
   }
  ]
 },
 {
  "title": "Parler de son animal",
  "phrases": [
   {
    "fr": "Tu as un animal de compagnie ?",
    "pt": "Você tem algum bicho de estimação?"
   },
   {
    "fr": "J'ai un chien qui s'appelle Bob.",
    "pt": "Eu tenho um cachorro que se chama Bob."
   },
   {
    "fr": "Il a trois ans.",
    "pt": "Ele tem três anos."
   },
   {
    "fr": "Il est très joueur.",
    "pt": "Ele é muito brincalhão."
   },
   {
    "fr": "Je le promène tous les matins.",
    "pt": "Eu passeio com ele toda manhã."
   },
   {
    "fr": "Ma sœur a deux chats.",
    "pt": "Minha irmã tem dois gatos."
   },
   {
    "fr": "Les chats dorment toute la journée.",
    "pt": "Os gatos dormem o dia inteiro."
   },
   {
    "fr": "Je suis allergique aux chats.",
    "pt": "Eu tenho alergia a gato."
   },
   {
    "fr": "Il peut venir avec nous à la plage ?",
    "pt": "Ele pode ir com a gente à praia?"
   },
   {
    "fr": "Il est trop mignon !",
    "pt": "Ele é uma graça!"
   }
  ]
 },
 {
  "title": "Décrire son appartement",
  "phrases": [
   {
    "fr": "J'habite dans un petit appartement.",
    "pt": "Eu moro num apartamento pequeno."
   },
   {
    "fr": "Il y a deux chambres.",
    "pt": "Tem dois quartos."
   },
   {
    "fr": "La cuisine est petite mais pratique.",
    "pt": "A cozinha é pequena, mas prática."
   },
   {
    "fr": "J'ai un balcon avec vue sur la mer.",
    "pt": "Eu tenho uma varanda com vista para o mar."
   },
   {
    "fr": "L'immeuble a une piscine.",
    "pt": "O prédio tem piscina."
   },
   {
    "fr": "Le gardien est très gentil.",
    "pt": "O porteiro é muito gentil."
   },
   {
    "fr": "La salle de bains est neuve.",
    "pt": "O banheiro é novo."
   },
   {
    "fr": "Le loyer est un peu cher.",
    "pt": "O aluguel é um pouco caro."
   },
   {
    "fr": "C'est près du métro.",
    "pt": "Fica perto do metrô."
   },
   {
    "fr": "Viens dîner chez moi un de ces jours.",
    "pt": "Vem jantar lá em casa qualquer dia."
   }
  ]
 },
 {
  "title": "Parler de football",
  "phrases": [
   {
    "fr": "Tu es supporter de quelle équipe ?",
    "pt": "Você torce para qual time?"
   },
   {
    "fr": "Je suis supporter de Flamengo.",
    "pt": "Eu sou flamenguista."
   },
   {
    "fr": "Mon père préfère Fluminense.",
    "pt": "Meu pai prefere o Fluminense."
   },
   {
    "fr": "Il y a un match ce soir au Maracanã.",
    "pt": "Tem jogo hoje à noite no Maracanã."
   },
   {
    "fr": "On regarde le match au bar ?",
    "pt": "Vamos ver o jogo no bar?"
   },
   {
    "fr": "Qui a gagné hier ?",
    "pt": "Quem ganhou ontem?"
   },
   {
    "fr": "On a perdu deux à un.",
    "pt": "A gente perdeu de dois a um."
   },
   {
    "fr": "Quel beau but !",
    "pt": "Que golaço!"
   },
   {
    "fr": "Je joue au foot le jeudi soir.",
    "pt": "Eu jogo bola na quinta à noite."
   },
   {
    "fr": "Tu veux jouer avec nous ?",
    "pt": "Quer jogar com a gente?"
   }
  ]
 },
 {
  "title": "Inviter un collègue au cafezinho",
  "phrases": [
   {
    "fr": "On prend un café ?",
    "pt": "Vamos tomar um cafezinho?"
   },
   {
    "fr": "Quand est-ce que tu as une pause ?",
    "pt": "Quando você tem um intervalo?"
   },
   {
    "fr": "Je suis libre dans un quart d'heure.",
    "pt": "Estou livre daqui a quinze minutos."
   },
   {
    "fr": "Où est le meilleur café du quartier ?",
    "pt": "Onde fica o melhor café do bairro?"
   },
   {
    "fr": "Il y a une boulangerie juste en face.",
    "pt": "Tem uma padaria bem em frente."
   },
   {
    "fr": "Qu'est-ce que tu prends ?",
    "pt": "O que você vai querer?"
   },
   {
    "fr": "Un café au lait et un pão de queijo.",
    "pt": "Um café com leite e um pão de queijo."
   },
   {
    "fr": "Comment s'est passée ta réunion ?",
    "pt": "Como foi a sua reunião?"
   },
   {
    "fr": "Quel est ton projet en ce moment ?",
    "pt": "Qual é o seu projeto agora?"
   },
   {
    "fr": "C'est moi qui invite aujourd'hui.",
    "pt": "Hoje quem paga sou eu."
   }
  ],
  "tip": {
   "title": "Les mots interrogatifs « O que, Qual, Como, Onde, Quando »",
   "example": "Où est le meilleur café du quartier ? — <b>Onde</b> fica o melhor café do bairro?",
   "body": "Les questions commencent par un mot interrogatif, sans inversion du sujet : o que (quoi, qu'est-ce que), qual (quel, lequel), como (comment), onde (où), quando (quand). Attention : devant « é », « quel » se dit « qual » : Qual é o seu nome ? À l'oral, on ajoute souvent « é que » : O que é que você quer ?"
  }
 },
 {
  "title": "Parler de musique",
  "phrases": [
   {
    "fr": "Quelle musique est-ce que tu écoutes ?",
    "pt": "Que tipo de música você escuta?"
   },
   {
    "fr": "J'adore la bossa nova.",
    "pt": "Eu adoro bossa nova."
   },
   {
    "fr": "Mon frère préfère le rock.",
    "pt": "Meu irmão prefere rock."
   },
   {
    "fr": "Il y a un concert de samba samedi.",
    "pt": "Tem uma roda de samba no sábado."
   },
   {
    "fr": "On y va ensemble ?",
    "pt": "Vamos juntos?"
   },
   {
    "fr": "L'entrée est gratuite.",
    "pt": "A entrada é grátis."
   },
   {
    "fr": "Cette chanson me rappelle mon enfance.",
    "pt": "Essa música me lembra a minha infância."
   },
   {
    "fr": "Je chante très mal.",
    "pt": "Eu canto muito mal."
   },
   {
    "fr": "Elle joue du cavaquinho dans un groupe.",
    "pt": "Ela toca cavaquinho numa banda."
   },
   {
    "fr": "Mets le son plus fort !",
    "pt": "Aumenta o som!"
   }
  ]
 },
 {
  "title": "Les goûts culinaires",
  "phrases": [
   {
    "fr": "Quel est ton plat préféré ?",
    "pt": "Qual é o seu prato preferido?"
   },
   {
    "fr": "J'adore la feijoada.",
    "pt": "Eu adoro feijoada."
   },
   {
    "fr": "Je mange du riz et des haricots tous les jours.",
    "pt": "Eu como arroz e feijão todo dia."
   },
   {
    "fr": "Tu aimes la nourriture épicée ?",
    "pt": "Você gosta de comida apimentada?"
   },
   {
    "fr": "Un peu, mais pas trop.",
    "pt": "Um pouco, mas não muito."
   },
   {
    "fr": "Je suis végétarien depuis deux ans.",
    "pt": "Eu sou vegetariano há dois anos."
   },
   {
    "fr": "Les fruits ici sont délicieux.",
    "pt": "As frutas aqui são deliciosas."
   },
   {
    "fr": "Mon jus préféré, c'est le jus de mangue.",
    "pt": "Meu suco preferido é o de manga."
   },
   {
    "fr": "Tu sais cuisiner ?",
    "pt": "Você sabe cozinhar?"
   },
   {
    "fr": "Je fais des brigadeiros pour la fête.",
    "pt": "Eu faço brigadeiro para a festa."
   }
  ]
 },
 {
  "title": "Faire un compliment",
  "phrases": [
   {
    "fr": "Ta robe est très jolie.",
    "pt": "Seu vestido é muito bonito."
   },
   {
    "fr": "Merci, je l'ai achetée hier.",
    "pt": "Obrigada, comprei ontem."
   },
   {
    "fr": "Ta maison est magnifique.",
    "pt": "Sua casa é linda."
   },
   {
    "fr": "Tu cuisines vraiment bien.",
    "pt": "Você cozinha muito bem."
   },
   {
    "fr": "Ce gâteau est délicieux.",
    "pt": "Esse bolo está uma delícia."
   },
   {
    "fr": "Tu as l'air en pleine forme.",
    "pt": "Você está com uma cara ótima."
   },
   {
    "fr": "J'aime beaucoup ta coupe de cheveux.",
    "pt": "Eu gostei muito do seu corte de cabelo."
   },
   {
    "fr": "Tes photos sont superbes.",
    "pt": "Suas fotos estão incríveis."
   },
   {
    "fr": "Tu es très gentil.",
    "pt": "Você é muito gentil."
   },
   {
    "fr": "Tu me flattes !",
    "pt": "Assim você me deixa sem graça!"
   }
  ]
 },
 {
  "title": "Exprimer un désaccord gentiment",
  "phrases": [
   {
    "fr": "Je ne suis pas tout à fait d'accord.",
    "pt": "Eu não concordo muito."
   },
   {
    "fr": "Je pense un peu différemment.",
    "pt": "Eu penso um pouquinho diferente."
   },
   {
    "fr": "Tu as peut-être raison.",
    "pt": "Talvez você tenha razão."
   },
   {
    "fr": "Mais je préfère la plage à la montagne.",
    "pt": "Mas eu prefiro praia a montanha."
   },
   {
    "fr": "Attends un petit moment, s'il te plaît.",
    "pt": "Espera um minutinho, por favor."
   },
   {
    "fr": "Ce n'est pas grave.",
    "pt": "Não tem problema."
   },
   {
    "fr": "On peut en parler plus tard.",
    "pt": "A gente pode conversar depois."
   },
   {
    "fr": "Je comprends ton point de vue.",
    "pt": "Eu entendo o seu ponto de vista."
   },
   {
    "fr": "Chacun ses goûts.",
    "pt": "Cada um com seu gosto."
   },
   {
    "fr": "On prend un petit café pour en discuter ?",
    "pt": "Vamos tomar um cafezinho para conversar?"
   }
  ],
  "tip": {
   "title": "Les diminutifs en « -inho / -inha »",
   "example": "Attends un petit moment, s'il te plaît. — Espera um <b>minutinho</b>, por favor.",
   "body": "Les Brésiliens adorent les diminutifs : on ajoute « -inho » (masculin) ou « -inha » (féminin) à la fin du mot. Ils servent à dire « petit », mais surtout à adoucir une phrase ou à la rendre affectueuse : um minutinho (une petite minute), um cafezinho (un petit café), devagarinho (tout doucement). C'est une façon très naturelle de paraître aimable."
  }
 },
 {
  "title": "Se dire au revoir après une soirée",
  "phrases": [
   {
    "fr": "Il est déjà minuit !",
    "pt": "Já é meia-noite!"
   },
   {
    "fr": "Je dois y aller, je travaille demain.",
    "pt": "Eu preciso ir, amanhã eu trabalho."
   },
   {
    "fr": "Merci pour la soirée.",
    "pt": "Obrigado pela noite."
   },
   {
    "fr": "C'était vraiment génial.",
    "pt": "Foi muito legal mesmo."
   },
   {
    "fr": "Tu rentres comment ?",
    "pt": "Como você vai voltar?"
   },
   {
    "fr": "Je vais appeler un taxi.",
    "pt": "Vou chamar um táxi."
   },
   {
    "fr": "Envoie-moi un message quand tu arrives.",
    "pt": "Me manda mensagem quando chegar."
   },
   {
    "fr": "On se revoit bientôt ?",
    "pt": "A gente se vê logo?"
   },
   {
    "fr": "Bien sûr, avec plaisir.",
    "pt": "Claro, com certeza."
   },
   {
    "fr": "Bonne nuit et rentre bien !",
    "pt": "Boa noite e vai com Deus!"
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Bravo, tu as terminé ce module !",
    "pt": "Parabéns, você terminou este módulo!"
   },
   {
    "fr": "Maintenant, tu sais te présenter.",
    "pt": "Agora você sabe se apresentar."
   },
   {
    "fr": "Tu peux parler de ta famille et de ton travail.",
    "pt": "Você consegue falar da sua família e do seu trabalho."
   },
   {
    "fr": "Tu sais inviter quelqu'un à un churrasco.",
    "pt": "Você sabe convidar alguém para um churrasco."
   },
   {
    "fr": "Tu peux donner ton avis gentiment.",
    "pt": "Você consegue dar a sua opinião com jeitinho."
   },
   {
    "fr": "Ton portugais progresse vite.",
    "pt": "Seu português está melhorando rápido."
   },
   {
    "fr": "N'aie pas peur de faire des erreurs.",
    "pt": "Não tenha medo de errar."
   },
   {
    "fr": "Les Brésiliens sont très patients.",
    "pt": "Os brasileiros são muito pacientes."
   },
   {
    "fr": "Continue à parler tous les jours.",
    "pt": "Continue falando todo dia."
   },
   {
    "fr": "Rendez-vous au niveau suivant !",
    "pt": "Até o próximo nível!"
   }
  ]
 }
];

const level2Module1Lessons = [
 {
  "title": "Obtenir son CPF",
  "phrases": [
   {
    "fr": "Pour presque tout ici, on te demande ton CPF.",
    "pt": "Pra quase tudo aqui, pedem o seu CPF."
   },
   {
    "fr": "Où est-ce que je peux faire ce numéro fiscal ?",
    "pt": "Onde eu posso tirar esse número?"
   },
   {
    "fr": "Tu peux le demander en ligne sur le site de la Receita Federal.",
    "pt": "Você pode pedir pela internet, no site da Receita Federal."
   },
   {
    "fr": "Il faut juste apporter son passeport et un justificatif de domicile.",
    "pt": "É só levar o passaporte e um comprovante de residência."
   },
   {
    "fr": "Je n'ai pas encore de facture à mon nom.",
    "pt": "Eu ainda não tenho nenhuma conta no meu nome."
   },
   {
    "fr": "Le contrat de location suffit, ne t'inquiète pas.",
    "pt": "O contrato de aluguel já basta, não se preocupe."
   },
   {
    "fr": "Combien de temps faut-il pour l'obtenir ?",
    "pt": "Quanto tempo demora pra sair?"
   },
   {
    "fr": "En général, c'est prêt en quelques jours.",
    "pt": "Em geral, fica pronto em poucos dias."
   },
   {
    "fr": "Sans CPF, impossible d'acheter une puce de téléphone.",
    "pt": "Sem CPF, não dá pra comprar um chip de celular."
   },
   {
    "fr": "Enfin, j'ai mon numéro, je suis officiellement installé !",
    "pt": "Finalmente tenho o meu número, agora estou oficialmente instalado!"
   }
  ]
 },
 {
  "title": "Ouvrir un compte en banque",
  "phrases": [
   {
    "fr": "Bonjour, je voudrais ouvrir un compte courant.",
    "pt": "Bom dia, eu gostaria de abrir uma conta corrente."
   },
   {
    "fr": "Vous avez déjà rempli le formulaire en ligne ?",
    "pt": "O senhor já preencheu o formulário on-line?"
   },
   {
    "fr": "Oui, je l'ai rempli hier soir.",
    "pt": "Sim, eu preenchi ontem à noite."
   },
   {
    "fr": "J'ai aussi envoyé une photo de mes documents.",
    "pt": "Eu também mandei uma foto dos meus documentos."
   },
   {
    "fr": "Parfait, le directeur a déjà approuvé votre demande.",
    "pt": "Perfeito, o gerente já aprovou o seu pedido."
   },
   {
    "fr": "La carte arrive chez vous en une semaine.",
    "pt": "O cartão chega na sua casa em uma semana."
   },
   {
    "fr": "Et en attendant, vous pouvez payer avec Pix.",
    "pt": "E enquanto isso, você pode pagar com Pix."
   },
   {
    "fr": "J'ai déjà enregistré ma clé Pix dans l'application.",
    "pt": "Eu já cadastrei a minha chave Pix no aplicativo."
   },
   {
    "fr": "Ma collègue m'a conseillé cette banque.",
    "pt": "A minha colega me indicou esse banco."
   },
   {
    "fr": "Merci, vous m'avez beaucoup aidé.",
    "pt": "Obrigado, o senhor me ajudou muito."
   }
  ],
  "tip": {
   "title": "Le « pretérito perfeito » des verbes réguliers",
   "example": "Oui, je l'ai rempli hier soir. — Sim, eu <b>preenchi</b> ontem à noite.",
   "body": "Pour une action terminée dans le passé, là où le français utilise le passé composé, le portugais emploie un temps simple : le pretérito perfeito. Pour les verbes en -ar : eu falei, você falou, a gente falou, eles falaram. En -er et -ir : eu comi, você comeu ; eu abri, você abriu. Pas d'auxiliaire : « j'ai mangé » se dit simplement « eu comi »."
  }
 },
 {
  "title": "Au poste de santé",
  "phrases": [
   {
    "fr": "Je me sens mal depuis trois jours.",
    "pt": "Estou me sentindo mal há três dias."
   },
   {
    "fr": "Il y a un poste de santé tout près d'ici.",
    "pt": "Tem um posto de saúde bem perto daqui."
   },
   {
    "fr": "Les consultations sont gratuites, grâce au système public.",
    "pt": "As consultas são gratuitas, graças ao SUS."
   },
   {
    "fr": "Il faut prendre un numéro à l'accueil.",
    "pt": "Tem que pegar uma senha na recepção."
   },
   {
    "fr": "Quels sont vos symptômes ?",
    "pt": "Quais são os seus sintomas?"
   },
   {
    "fr": "J'ai mal à la gorge et un peu de fièvre.",
    "pt": "Estou com dor de garganta e um pouco de febre."
   },
   {
    "fr": "Vous êtes allergique à un médicament ?",
    "pt": "Você tem alergia a algum remédio?"
   },
   {
    "fr": "Non, à aucun, pour autant que je sache.",
    "pt": "Não, a nenhum, que eu saiba."
   },
   {
    "fr": "Buvez beaucoup d'eau et reposez-vous bien.",
    "pt": "Beba bastante água e descanse bem."
   },
   {
    "fr": "Revenez si la fièvre ne baisse pas.",
    "pt": "Volte aqui se a febre não baixar."
   }
  ]
 },
 {
  "title": "Le petit bar du coin le soir",
  "phrases": [
   {
    "fr": "On se retrouve au bar du coin après le travail ?",
    "pt": "Vamos nos encontrar no boteco da esquina depois do trabalho?"
   },
   {
    "fr": "Bonne idée, il fait encore chaud ce soir.",
    "pt": "Boa ideia, ainda está calor hoje à noite."
   },
   {
    "fr": "Toutes les tables sur le trottoir sont déjà prises.",
    "pt": "Todas as mesas na calçada já estão ocupadas."
   },
   {
    "fr": "On peut s'asseoir au comptoir en attendant.",
    "pt": "A gente pode sentar no balcão enquanto isso."
   },
   {
    "fr": "Une bière bien fraîche, s'il vous plaît.",
    "pt": "Uma cerveja bem gelada, por favor."
   },
   {
    "fr": "Et une portion de frites pour partager.",
    "pt": "E uma porção de batata frita pra dividir."
   },
   {
    "fr": "Ici, on mange les meilleures coxinhas du quartier.",
    "pt": "Aqui tem as melhores coxinhas do bairro."
   },
   {
    "fr": "Le match commence à la télévision dans dix minutes.",
    "pt": "O jogo começa na televisão daqui a dez minutos."
   },
   {
    "fr": "Tout le monde ici soutient la même équipe.",
    "pt": "Todo mundo aqui torce pro mesmo time."
   },
   {
    "fr": "On se partage l'addition à la fin ?",
    "pt": "A gente racha a conta no final?"
   }
  ]
 },
 {
  "title": "Hier au travail",
  "phrases": [
   {
    "fr": "Hier, je suis allé au bureau très tôt.",
    "pt": "Ontem eu fui pro escritório bem cedo."
   },
   {
    "fr": "Qu'est-ce que tu as fait toute la journée ?",
    "pt": "O que você fez o dia inteiro?"
   },
   {
    "fr": "J'ai fait une présentation pour toute l'équipe.",
    "pt": "Eu fiz uma apresentação pra equipe toda."
   },
   {
    "fr": "J'ai eu trois réunions à la suite.",
    "pt": "Eu tive três reuniões seguidas."
   },
   {
    "fr": "Le patron était de très bonne humeur.",
    "pt": "O chefe estava de muito bom humor."
   },
   {
    "fr": "Le soir, je suis resté coincé dans les embouteillages.",
    "pt": "À noite, eu fiquei preso no trânsito."
   },
   {
    "fr": "J'ai mis presque deux heures pour rentrer.",
    "pt": "Eu levei quase duas horas pra voltar pra casa."
   },
   {
    "fr": "Tu as pu dîner tranquillement ensuite ?",
    "pt": "Você conseguiu jantar com calma depois?"
   },
   {
    "fr": "Non, j'étais trop fatigué, je suis allé dormir.",
    "pt": "Não, eu estava cansado demais, fui dormir."
   },
   {
    "fr": "J'ai été très occupé toute la semaine.",
    "pt": "Eu estive muito ocupado a semana toda."
   }
  ],
  "tip": {
   "title": "Les passés irréguliers « fui, fiz, tive, estive »",
   "example": "Hier, je suis allé au bureau très tôt. — Ontem eu <b>fui</b> pro escritório bem cedo.",
   "body": "Quelques verbes très fréquents ont un pretérito perfeito irrégulier qu'il faut apprendre par cœur : ir et ser donnent tous les deux « fui, foi » (je suis allé / j'ai été), fazer donne « fiz, fez », ter donne « tive, teve », estar donne « estive, esteve ». Le contexte permet de distinguer « eu fui ao mercado » (je suis allé au marché) de « foi ótimo » (c'était super)."
  }
 },
 {
  "title": "Un dimanche à la maison",
  "phrases": [
   {
    "fr": "Qu'est-ce que tu es en train de faire ?",
    "pt": "O que você está fazendo?"
   },
   {
    "fr": "Je suis en train de ranger le salon.",
    "pt": "Estou arrumando a sala."
   },
   {
    "fr": "Mon mari est en train de préparer le déjeuner.",
    "pt": "O meu marido está preparando o almoço."
   },
   {
    "fr": "Les enfants regardent un dessin animé.",
    "pt": "As crianças estão assistindo um desenho."
   },
   {
    "fr": "Ça sent très bon dans la cuisine.",
    "pt": "Está cheirando muito bem na cozinha."
   },
   {
    "fr": "Nous attendons ma belle-mère pour le repas.",
    "pt": "A gente está esperando a minha sogra pro almoço."
   },
   {
    "fr": "Elle est en train de traverser toute la ville en bus.",
    "pt": "Ela está atravessando a cidade inteira de ônibus."
   },
   {
    "fr": "Il commence à pleuvoir dehors.",
    "pt": "Está começando a chover lá fora."
   },
   {
    "fr": "Je suis en train d'apprendre à faire du pão de queijo.",
    "pt": "Estou aprendendo a fazer pão de queijo."
   },
   {
    "fr": "Ce dimanche se passe vraiment bien.",
    "pt": "Esse domingo está sendo muito gostoso."
   }
  ],
  "tip": {
   "title": "« Estar + gerúndio » : être en train de",
   "example": "Je suis en train de ranger le salon. — <b>Estou arrumando</b> a sala.",
   "body": "Au Brésil, pour une action en cours, on utilise « estar » suivi du gérondif, formé en remplaçant la terminaison de l'infinitif par -ando, -endo ou -indo : falar devient falando, comer devient comendo, dormir devient dormindo. C'est beaucoup plus fréquent que « être en train de » en français : « o que você está fazendo ? » est la façon normale de demander « qu'est-ce que tu fais ? »."
  }
 },
 {
  "title": "Une coupure de courant",
  "phrases": [
   {
    "fr": "Le courant vient de couper dans tout l'immeuble.",
    "pt": "Acabou a luz no prédio inteiro."
   },
   {
    "fr": "Tu as une lampe de poche quelque part ?",
    "pt": "Você tem uma lanterna em algum lugar?"
   },
   {
    "fr": "J'utilise la lumière de mon téléphone.",
    "pt": "Estou usando a lanterna do celular."
   },
   {
    "fr": "C'est à cause de l'orage de cet après-midi.",
    "pt": "É por causa da tempestade de hoje à tarde."
   },
   {
    "fr": "Toute la rue est dans le noir.",
    "pt": "A rua inteira está no escuro."
   },
   {
    "fr": "J'espère que la nourriture du frigo ne va pas s'abîmer.",
    "pt": "Espero que a comida da geladeira não estrague."
   },
   {
    "fr": "J'ai appelé la compagnie d'électricité.",
    "pt": "Eu liguei pra companhia de energia."
   },
   {
    "fr": "Ils disent que ça revient dans deux heures.",
    "pt": "Eles disseram que volta em duas horas."
   },
   {
    "fr": "L'ascenseur ne marche pas, on monte à pied.",
    "pt": "O elevador não está funcionando, a gente sobe de escada."
   },
   {
    "fr": "Ah, la lumière est revenue !",
    "pt": "Ah, a luz voltou!"
   }
  ]
 },
 {
  "title": "Le portier et la copropriété",
  "phrases": [
   {
    "fr": "Le portier de l'immeuble s'appelle Seu Antônio.",
    "pt": "O porteiro do prédio se chama Seu Antônio."
   },
   {
    "fr": "Il connaît tous les habitants par leur prénom.",
    "pt": "Ele conhece todos os moradores pelo nome."
   },
   {
    "fr": "Bonsoir, un colis est arrivé pour moi ?",
    "pt": "Boa noite, chegou alguma encomenda pra mim?"
   },
   {
    "fr": "Oui, je l'ai gardé ici, à la loge.",
    "pt": "Chegou sim, eu guardei aqui na portaria."
   },
   {
    "fr": "La réunion de copropriété a lieu jeudi.",
    "pt": "A reunião de condomínio é na quinta."
   },
   {
    "fr": "On va parler des travaux de la piscine.",
    "pt": "A gente vai falar da reforma da piscina."
   },
   {
    "fr": "Les charges ont encore augmenté ce mois-ci.",
    "pt": "O condomínio aumentou de novo esse mês."
   },
   {
    "fr": "Le voisin du cinquième fait trop de bruit la nuit.",
    "pt": "O vizinho do quinto andar faz barulho demais à noite."
   },
   {
    "fr": "Je vais en parler au syndic.",
    "pt": "Vou falar com o síndico."
   },
   {
    "fr": "Merci, Seu Antônio, bonne nuit !",
    "pt": "Obrigado, Seu Antônio, boa noite!"
   }
  ]
 },
 {
  "title": "Au marché de rue",
  "phrases": [
   {
    "fr": "Le marché a lieu dans notre rue tous les mercredis.",
    "pt": "A feira é na nossa rua toda quarta-feira."
   },
   {
    "fr": "Les fruits sont bien moins chers qu'au supermarché.",
    "pt": "As frutas são bem mais baratas que no supermercado."
   },
   {
    "fr": "Combien coûte le kilo de mangues ?",
    "pt": "Quanto é o quilo da manga?"
   },
   {
    "fr": "Cinq reais le kilo, et elles sont bien sucrées.",
    "pt": "Cinco reais o quilo, e estão bem docinhas."
   },
   {
    "fr": "Vous pouvez m'en faire goûter une ?",
    "pt": "Posso provar uma?"
   },
   {
    "fr": "Je vais prendre aussi des papayes et des fruits de la passion.",
    "pt": "Vou levar também mamão e maracujá."
   },
   {
    "fr": "À la fin du marché, les prix baissent.",
    "pt": "No fim da feira, os preços caem."
   },
   {
    "fr": "On va manger un pastel avec un jus de canne ?",
    "pt": "Vamos comer um pastel com caldo de cana?"
   },
   {
    "fr": "C'est une vraie tradition à São Paulo.",
    "pt": "É uma tradição de verdade em São Paulo."
   },
   {
    "fr": "Je peux payer par Pix ?",
    "pt": "Posso pagar no Pix?"
   }
  ]
 },
 {
  "title": "La boulangerie du coin",
  "phrases": [
   {
    "fr": "Chaque matin, je passe à la boulangerie du coin.",
    "pt": "Toda manhã eu passo na padaria da esquina."
   },
   {
    "fr": "Je voudrais six petits pains, s'il vous plaît.",
    "pt": "Me vê seis pãezinhos, por favor."
   },
   {
    "fr": "Ils sortent tout juste du four.",
    "pt": "Acabaram de sair do forno."
   },
   {
    "fr": "Et un café au lait au comptoir.",
    "pt": "E um café com leite no balcão."
   },
   {
    "fr": "Le pain beurré grillé est délicieux ici.",
    "pt": "O pão na chapa daqui é uma delícia."
   },
   {
    "fr": "Vous avez du fromage minas frais ?",
    "pt": "Vocês têm queijo minas frescal?"
   },
   {
    "fr": "Il en reste un peu, je vous en coupe combien ?",
    "pt": "Ainda tem um pouco, quanto eu corto?"
   },
   {
    "fr": "Deux cents grammes, ça ira très bien.",
    "pt": "Duzentos gramas está ótimo."
   },
   {
    "fr": "La boulangère connaît déjà ma commande par cœur.",
    "pt": "A moça da padaria já sabe o meu pedido de cor."
   },
   {
    "fr": "À demain, et bonne journée !",
    "pt": "Até amanhã, e bom dia pra você!"
   }
  ]
 },
 {
  "title": "Rénover la cuisine",
  "phrases": [
   {
    "fr": "On veut refaire complètement notre cuisine.",
    "pt": "A gente quer reformar a cozinha inteira."
   },
   {
    "fr": "Vous avez déjà un budget en tête ?",
    "pt": "Vocês já têm um orçamento em mente?"
   },
   {
    "fr": "Environ quinze mille reais, pas plus.",
    "pt": "Mais ou menos quinze mil reais, no máximo."
   },
   {
    "fr": "Il faut changer le carrelage et l'évier.",
    "pt": "Tem que trocar o piso e a pia."
   },
   {
    "fr": "Le maçon peut commencer lundi prochain.",
    "pt": "O pedreiro pode começar na segunda que vem."
   },
   {
    "fr": "Les travaux vont durer combien de semaines ?",
    "pt": "A obra vai durar quantas semanas?"
   },
   {
    "fr": "Trois semaines, si tout se passe bien.",
    "pt": "Três semanas, se tudo der certo."
   },
   {
    "fr": "Pendant ce temps, on mangera chez ma mère.",
    "pt": "Enquanto isso, a gente vai comer na casa da minha mãe."
   },
   {
    "fr": "Je préfère des placards blancs, c'est plus lumineux.",
    "pt": "Prefiro armários brancos, fica mais claro."
   },
   {
    "fr": "Ça va être magnifique une fois terminé.",
    "pt": "Vai ficar lindo quando estiver pronto."
   }
  ]
 },
 {
  "title": "Quand j'étais enfant à Belo Horizonte",
  "phrases": [
   {
    "fr": "Quand j'étais petit, j'habitais à Belo Horizonte.",
    "pt": "Quando eu era pequeno, eu morava em Belo Horizonte."
   },
   {
    "fr": "Le dimanche, nous allions chez ma grand-mère.",
    "pt": "Aos domingos, a gente ia pra casa da minha avó."
   },
   {
    "fr": "Elle préparait toujours du pão de queijo maison.",
    "pt": "Ela sempre fazia pão de queijo caseiro."
   },
   {
    "fr": "Mes cousins et moi jouions au foot dans la rue.",
    "pt": "Eu e os meus primos jogávamos bola na rua."
   },
   {
    "fr": "Il n'y avait presque pas de voitures à l'époque.",
    "pt": "Quase não tinha carro naquela época."
   },
   {
    "fr": "Mon grand-père racontait des histoires après le déjeuner.",
    "pt": "O meu avô contava histórias depois do almoço."
   },
   {
    "fr": "Je détestais aller à l'école le lundi.",
    "pt": "Eu odiava ir pra escola na segunda-feira."
   },
   {
    "fr": "En été, il pleuvait tous les après-midi.",
    "pt": "No verão, chovia toda tarde."
   },
   {
    "fr": "Nous regardions le feuilleton tous ensemble le soir.",
    "pt": "A gente assistia a novela todo mundo junto à noite."
   },
   {
    "fr": "C'était une enfance très heureuse.",
    "pt": "Era uma infância muito feliz."
   }
  ],
  "tip": {
   "title": "Le « pretérito imperfeito » pour les habitudes passées",
   "example": "Quand j'étais petit, j'habitais à Belo Horizonte. — Quando eu <b>era</b> pequeno, eu <b>morava</b> em Belo Horizonte.",
   "body": "Comme l'imparfait français, le pretérito imperfeito décrit les habitudes et le décor du passé. Les verbes en -ar prennent -ava (eu morava, a gente jogava), ceux en -er et -ir prennent -ia (eu comia, ela dormia). Seuls quatre verbes sont irréguliers : ser (era), ter (tinha), vir (vinha) et pôr (punha)."
  }
 },
 {
  "title": "La salle de sport du quartier",
  "phrases": [
   {
    "fr": "Je viens de m'inscrire à la salle de sport du coin.",
    "pt": "Acabei de me matricular na academia da esquina."
   },
   {
    "fr": "Quel abonnement tu as choisi ?",
    "pt": "Que plano você escolheu?"
   },
   {
    "fr": "Un abonnement mensuel, sans engagement.",
    "pt": "Um plano mensal, sem fidelidade."
   },
   {
    "fr": "La salle est ouverte jusqu'à onze heures du soir.",
    "pt": "A academia fica aberta até as onze da noite."
   },
   {
    "fr": "Il y a beaucoup de monde vers dix-neuf heures.",
    "pt": "Fica muito cheio por volta das sete da noite."
   },
   {
    "fr": "Le coach m'a préparé un programme d'entraînement.",
    "pt": "O professor montou um treino pra mim."
   },
   {
    "fr": "Aujourd'hui, c'est le jour des jambes.",
    "pt": "Hoje é dia de perna."
   },
   {
    "fr": "J'ai des courbatures partout depuis hier.",
    "pt": "Estou todo dolorido desde ontem."
   },
   {
    "fr": "Après la séance, je bois un jus d'açaí.",
    "pt": "Depois do treino, eu tomo um suco de açaí."
   },
   {
    "fr": "Tu veux venir t'entraîner avec moi demain ?",
    "pt": "Quer treinar comigo amanhã?"
   }
  ]
 },
 {
  "title": "Un jour férié à São Paulo",
  "phrases": [
   {
    "fr": "Demain, c'est férié, on ne travaille pas.",
    "pt": "Amanhã é feriado, a gente não trabalha."
   },
   {
    "fr": "Et vendredi, beaucoup de gens font le pont.",
    "pt": "E na sexta, muita gente emenda."
   },
   {
    "fr": "La moitié de la ville part vers la plage.",
    "pt": "Metade da cidade desce pro litoral."
   },
   {
    "fr": "La route va être complètement bouchée.",
    "pt": "A estrada vai ficar completamente parada."
   },
   {
    "fr": "Moi, je préfère rester en ville et me reposer.",
    "pt": "Eu prefiro ficar na cidade e descansar."
   },
   {
    "fr": "Les rues sont enfin calmes et vides.",
    "pt": "As ruas ficam finalmente calmas e vazias."
   },
   {
    "fr": "On peut faire du vélo sur l'avenue Paulista.",
    "pt": "Dá pra andar de bicicleta na Avenida Paulista."
   },
   {
    "fr": "Les centres commerciaux restent ouverts quand même.",
    "pt": "Os shoppings continuam abertos mesmo assim."
   },
   {
    "fr": "On va voir une exposition au musée ?",
    "pt": "Vamos ver uma exposição no museu?"
   },
   {
    "fr": "Profite bien de ton long week-end !",
    "pt": "Aproveita bem o seu feriadão!"
   }
  ]
 },
 {
  "title": "La fête de la Saint-Jean",
  "phrases": [
   {
    "fr": "En juin, il y a des fêtes de la Saint-Jean partout.",
    "pt": "Em junho, tem festa junina em todo lugar."
   },
   {
    "fr": "L'école de ma fille organise la sienne samedi.",
    "pt": "A escola da minha filha vai fazer a dela no sábado."
   },
   {
    "fr": "Il faut venir habillé comme à la campagne.",
    "pt": "Tem que ir vestido de caipira."
   },
   {
    "fr": "Je vais mettre une chemise à carreaux et un chapeau de paille.",
    "pt": "Vou colocar uma camisa xadrez e um chapéu de palha."
   },
   {
    "fr": "On mange du maïs, de la canjica et du gâteau de maïs.",
    "pt": "A gente come milho, canjica e bolo de fubá."
   },
   {
    "fr": "Le vin chaud aux épices est délicieux quand il fait frais.",
    "pt": "O quentão é uma delícia quando está friozinho."
   },
   {
    "fr": "Les enfants vont danser la quadrille.",
    "pt": "As crianças vão dançar a quadrilha."
   },
   {
    "fr": "Il y a des petits drapeaux colorés partout.",
    "pt": "Tem bandeirinhas coloridas por toda parte."
   },
   {
    "fr": "Fais attention au feu de joie au milieu de la cour.",
    "pt": "Cuidado com a fogueira no meio do pátio."
   },
   {
    "fr": "C'est ma période préférée de l'année.",
    "pt": "É a minha época preferida do ano."
   }
  ]
 },
 {
  "title": "Une pluie d'été qui inonde la rue",
  "phrases": [
   {
    "fr": "Le ciel est devenu noir en quelques minutes.",
    "pt": "O céu ficou preto em poucos minutos."
   },
   {
    "fr": "Il pleut des cordes depuis une heure.",
    "pt": "Está chovendo canivete há uma hora."
   },
   {
    "fr": "La rue est complètement inondée.",
    "pt": "A rua está completamente alagada."
   },
   {
    "fr": "Les voitures ne peuvent plus passer.",
    "pt": "Os carros não conseguem mais passar."
   },
   {
    "fr": "Je vais attendre que ça passe ici, au café.",
    "pt": "Vou esperar passar aqui no café."
   },
   {
    "fr": "En été, ça arrive presque tous les jours.",
    "pt": "No verão, isso acontece quase todo dia."
   },
   {
    "fr": "Ces pluies ne durent jamais très longtemps.",
    "pt": "Essas chuvas nunca duram muito."
   },
   {
    "fr": "Le métro, lui, fonctionne normalement.",
    "pt": "O metrô está funcionando normalmente."
   },
   {
    "fr": "Prends toujours un parapluie dans ton sac.",
    "pt": "Leve sempre um guarda-chuva na bolsa."
   },
   {
    "fr": "Voilà, le soleil revient déjà !",
    "pt": "Pronto, o sol já está voltando!"
   }
  ]
 },
 {
  "title": "Déjeuner au restaurant au poids",
  "phrases": [
   {
    "fr": "Pour le déjeuner, on va au restaurant au poids ?",
    "pt": "Pro almoço, vamos no restaurante por quilo?"
   },
   {
    "fr": "On se sert soi-même au buffet.",
    "pt": "A gente mesmo se serve no bufê."
   },
   {
    "fr": "Ensuite, on pèse l'assiette à la caisse.",
    "pt": "Depois, a gente pesa o prato no caixa."
   },
   {
    "fr": "Il y a du riz, des haricots et de la farofa.",
    "pt": "Tem arroz, feijão e farofa."
   },
   {
    "fr": "Aujourd'hui, ils servent de la feijoada.",
    "pt": "Hoje eles estão servindo feijoada."
   },
   {
    "fr": "J'ai pris trop de nourriture, mon assiette est pleine.",
    "pt": "Eu peguei comida demais, o meu prato está cheio."
   },
   {
    "fr": "Ça fait trente-deux reais avec la boisson.",
    "pt": "Deu trinta e dois reais com a bebida."
   },
   {
    "fr": "Le dessert est compris dans le prix ?",
    "pt": "A sobremesa está incluída no preço?"
   },
   {
    "fr": "Non, mais le petit café est offert.",
    "pt": "Não, mas o cafezinho é por conta da casa."
   },
   {
    "fr": "C'est rapide, pas cher et très bon.",
    "pt": "É rápido, barato e muito gostoso."
   }
  ]
 },
 {
  "title": "Organiser un anniversaire",
  "phrases": [
   {
    "fr": "On organise une fête surprise pour Juliana.",
    "pt": "A gente vai fazer uma festa surpresa pra Juliana."
   },
   {
    "fr": "Qui s'occupe d'inviter tout le monde ?",
    "pt": "Quem fica responsável por convidar todo mundo?"
   },
   {
    "fr": "J'ai déjà créé un groupe de discussion pour les amis.",
    "pt": "Eu já criei um grupo pros amigos."
   },
   {
    "fr": "On fait une cagnotte pour le cadeau ?",
    "pt": "A gente faz uma vaquinha pro presente?"
   },
   {
    "fr": "J'ai commandé un gâteau au chocolat et des brigadeiros.",
    "pt": "Eu encomendei um bolo de chocolate e brigadeiros."
   },
   {
    "fr": "Il faut aussi des boissons et des petits salés.",
    "pt": "Também precisa de bebida e salgadinhos."
   },
   {
    "fr": "Rendez-vous chez moi à vingt heures précises.",
    "pt": "Todo mundo na minha casa às oito em ponto."
   },
   {
    "fr": "Surtout, ne dis rien à Juliana !",
    "pt": "Mas não conta nada pra Juliana, hein!"
   },
   {
    "fr": "Quand elle arrive, on éteint toutes les lumières.",
    "pt": "Quando ela chegar, a gente apaga todas as luzes."
   },
   {
    "fr": "Ensuite, tout le monde chante joyeux anniversaire.",
    "pt": "Depois, todo mundo canta parabéns."
   }
  ]
 },
 {
  "title": "Changer d'appartement",
  "phrases": [
   {
    "fr": "On a décidé de déménager dans un plus grand appartement.",
    "pt": "A gente decidiu se mudar pra um apartamento maior."
   },
   {
    "fr": "Tu peux m'aider à porter les cartons samedi ?",
    "pt": "Você pode me ajudar a carregar as caixas no sábado?"
   },
   {
    "fr": "Bien sûr, je t'aide avec plaisir.",
    "pt": "Claro, eu te ajudo com prazer."
   },
   {
    "fr": "Appelle-moi quand le camion arrive.",
    "pt": "Me liga quando o caminhão chegar."
   },
   {
    "fr": "Je te prête ma voiture pour les petites choses.",
    "pt": "Eu te empresto o meu carro pras coisas pequenas."
   },
   {
    "fr": "Le nouveau quartier est très calme et arboré.",
    "pt": "O bairro novo é bem tranquilo e arborizado."
   },
   {
    "fr": "Il y a une station de métro à deux rues.",
    "pt": "Tem uma estação de metrô a duas quadras."
   },
   {
    "fr": "Le propriétaire m'a envoyé les clés hier.",
    "pt": "O proprietário me mandou as chaves ontem."
   },
   {
    "fr": "Je t'envoie la nouvelle adresse par message.",
    "pt": "Eu te mando o endereço novo por mensagem."
   },
   {
    "fr": "Alors à samedi, on se voit là-bas !",
    "pt": "Então até sábado, a gente se vê lá!"
   }
  ],
  "tip": {
   "title": "Les pronoms compléments à la brésilienne : « me liga », « te ajudo »",
   "example": "Appelle-moi quand le camion arrive. — <b>Me liga</b> quando o caminhão chegar.",
   "body": "À l'oral, les Brésiliens placent presque toujours le pronom complément avant le verbe, même en début de phrase : « me liga » (appelle-moi), « te ajudo » (je t'aide), « me passa o sal » (passe-moi le sel). « Te » s'emploie couramment avec « você », et « a gente se vê » (on se voit) utilise « se » comme pronom de « a gente ». La forme écrite très soignée « ligue-me » existe, mais sonne très formelle au Brésil."
  }
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce module nous a plongés dans le vrai quotidien brésilien.",
    "pt": "Esse módulo mergulhou a gente no verdadeiro dia a dia brasileiro."
   },
   {
    "fr": "On sait maintenant obtenir un CPF et ouvrir un compte.",
    "pt": "Agora a gente sabe tirar o CPF e abrir uma conta."
   },
   {
    "fr": "On peut parler au portier et aux voisins sans stress.",
    "pt": "A gente consegue falar com o porteiro e com os vizinhos sem estresse."
   },
   {
    "fr": "Faire ses courses au marché n'a plus de secret.",
    "pt": "Fazer compras na feira não tem mais segredo."
   },
   {
    "fr": "On sait raconter ce qu'on a fait hier.",
    "pt": "A gente sabe contar o que fez ontem."
   },
   {
    "fr": "Et décrire nos habitudes d'enfance.",
    "pt": "E descrever os nossos hábitos de infância."
   },
   {
    "fr": "Le gérondif est devenu un réflexe naturel.",
    "pt": "O gerúndio virou um reflexo natural."
   },
   {
    "fr": "Mon portugais devient de plus en plus fluide.",
    "pt": "O meu português está ficando cada vez mais fluente."
   },
   {
    "fr": "Je comprends même les blagues du boulanger.",
    "pt": "Eu entendo até as piadas do moço da padaria."
   },
   {
    "fr": "On continue, la suite sera encore plus intéressante !",
    "pt": "Bora continuar, o que vem por aí vai ser ainda mais interessante!"
   }
  ]
 }
];

const level2Module2Lessons = [
 {
  "title": "Arrivée à Salvador de Bahia",
  "phrases": [
   {
    "fr": "Notre avion vient d'atterrir à Salvador.",
    "pt": "Nosso avião acabou de pousar em Salvador."
   },
   {
    "fr": "Il fait déjà très chaud alors qu'il est tôt.",
    "pt": "Já está fazendo muito calor, e ainda é cedo."
   },
   {
    "fr": "On prend un taxi ou l'application de transport ?",
    "pt": "A gente pega um táxi ou chama um carro pelo aplicativo?"
   },
   {
    "fr": "Notre pousada se trouve près du centre historique.",
    "pt": "Nossa pousada fica perto do centro histórico."
   },
   {
    "fr": "Le chauffeur nous a conseillé quelques restaurants.",
    "pt": "O motorista nos indicou alguns restaurantes."
   },
   {
    "fr": "La ville est bien plus grande que je ne l'imaginais.",
    "pt": "A cidade é bem maior do que eu imaginava."
   },
   {
    "fr": "Regarde la mer de l'autre côté de la baie.",
    "pt": "Olha o mar do outro lado da baía."
   },
   {
    "fr": "On dépose les valises et on part se promener.",
    "pt": "A gente deixa as malas e sai para passear."
   },
   {
    "fr": "La réceptionniste nous a offert un jus de fruits frais.",
    "pt": "A recepcionista ofereceu para a gente um suco de fruta natural."
   },
   {
    "fr": "Je sens que ce voyage va être inoubliable.",
    "pt": "Estou sentindo que essa viagem vai ser inesquecível."
   }
  ]
 },
 {
  "title": "Une promenade dans le Pelourinho",
  "phrases": [
   {
    "fr": "Les maisons colorées du Pelourinho sont magnifiques.",
    "pt": "As casas coloridas do Pelourinho são lindas."
   },
   {
    "fr": "Ce quartier date de l'époque coloniale.",
    "pt": "Esse bairro é da época colonial."
   },
   {
    "fr": "Les rues pavées montent et descendent sans arrêt.",
    "pt": "As ruas de pedra sobem e descem sem parar."
   },
   {
    "fr": "Entendez-vous les tambours au loin ?",
    "pt": "Vocês estão ouvindo os tambores ao longe?"
   },
   {
    "fr": "Un groupe répète sur la place tous les mardis.",
    "pt": "Um grupo ensaia na praça toda terça-feira."
   },
   {
    "fr": "Cette église est entièrement décorée d'or à l'intérieur.",
    "pt": "Essa igreja é toda decorada com ouro por dentro."
   },
   {
    "fr": "On a pris des dizaines de photos ce matin.",
    "pt": "A gente tirou dezenas de fotos hoje de manhã."
   },
   {
    "fr": "Fais attention à ton sac dans la foule.",
    "pt": "Cuidado com a sua bolsa no meio da multidão."
   },
   {
    "fr": "Un vendeur nous a proposé des rubans colorés.",
    "pt": "Um vendedor ofereceu umas fitinhas coloridas para a gente."
   },
   {
    "fr": "On les attache au poignet en faisant trois vœux.",
    "pt": "A gente amarra no pulso fazendo três pedidos."
   }
  ]
 },
 {
  "title": "Prendre l'Elevador Lacerda",
  "phrases": [
   {
    "fr": "Nous venons de descendre vers la ville basse.",
    "pt": "A gente acabou de descer para a Cidade Baixa."
   },
   {
    "fr": "L'ascenseur relie les deux parties de la ville.",
    "pt": "O elevador liga as duas partes da cidade."
   },
   {
    "fr": "Le trajet ne dure qu'une trentaine de secondes.",
    "pt": "A viagem dura só uns trinta segundos."
   },
   {
    "fr": "Le billet coûte presque rien.",
    "pt": "A passagem custa quase nada."
   },
   {
    "fr": "Le Mercado Modelo vient d'ouvrir ses portes.",
    "pt": "O Mercado Modelo acabou de abrir as portas."
   },
   {
    "fr": "J'ai acheté un petit berimbau en souvenir.",
    "pt": "Eu comprei um berimbau pequeno de lembrança."
   },
   {
    "fr": "La vue sur la baie de tous les Saints est superbe.",
    "pt": "A vista da Baía de Todos os Santos é maravilhosa."
   },
   {
    "fr": "Le bateau pour l'île vient de partir.",
    "pt": "O barco para a ilha acabou de sair."
   },
   {
    "fr": "Le prochain part dans une heure.",
    "pt": "O próximo sai daqui a uma hora."
   },
   {
    "fr": "En attendant, on boit une eau de coco.",
    "pt": "Enquanto isso, a gente toma uma água de coco."
   }
  ],
  "tip": {
   "title": "« Acabar de » + infinitif : venir de",
   "example": "Le bateau pour l'île vient de partir. — O barco para a ilha <b>acabou de</b> sair.",
   "body": "Pour dire qu'une action vient tout juste de se produire, le portugais utilise « acabar de » suivi de l'infinitif, là où le français dit « venir de ». On conjugue « acabar » au passé : eu acabei de chegar (je viens d'arriver), ela acabou de ligar (elle vient d'appeler). Attention : au présent, « acabar » seul veut dire « finir »."
  }
 },
 {
  "title": "Dîner bahianais",
  "phrases": [
   {
    "fr": "Ce soir, on goûte la cuisine de Bahia.",
    "pt": "Hoje à noite a gente vai provar a comida baiana."
   },
   {
    "fr": "La moqueca est préparée avec du lait de coco.",
    "pt": "A moqueca é feita com leite de coco."
   },
   {
    "fr": "On la sert dans une marmite en terre cuite.",
    "pt": "Ela é servida numa panela de barro."
   },
   {
    "fr": "Elle est accompagnée de riz et de farofa.",
    "pt": "Ela vem acompanhada de arroz e farofa."
   },
   {
    "fr": "Faites attention, le piment est très fort.",
    "pt": "Cuidado, a pimenta é muito forte."
   },
   {
    "fr": "Sur la place, une dame vend des acarajés.",
    "pt": "Na praça, uma senhora vende acarajé."
   },
   {
    "fr": "Elle porte une longue robe blanche traditionnelle.",
    "pt": "Ela está com um vestido branco comprido e tradicional."
   },
   {
    "fr": "Je le veux sans piment, s'il vous plaît.",
    "pt": "Eu quero sem pimenta, por favor."
   },
   {
    "fr": "Je n'ai jamais mangé quelque chose d'aussi bon.",
    "pt": "Eu nunca comi nada tão gostoso."
   },
   {
    "fr": "En dessert, on a pris une cocada.",
    "pt": "De sobremesa, a gente pediu uma cocada."
   }
  ]
 },
 {
  "title": "Une plage près de Salvador",
  "phrases": [
   {
    "fr": "Cette plage est bien plus calme que celle d'hier.",
    "pt": "Essa praia é bem mais tranquila do que a de ontem."
   },
   {
    "fr": "L'eau est plus chaude que je ne le pensais.",
    "pt": "A água está mais quente do que eu pensava."
   },
   {
    "fr": "Ici, le sable est plus fin et plus blanc.",
    "pt": "Aqui a areia é mais fina e mais branca."
   },
   {
    "fr": "Le soleil tape plus fort qu'en France.",
    "pt": "O sol é mais forte do que na França."
   },
   {
    "fr": "Remets de la crème solaire toutes les deux heures.",
    "pt": "Passa protetor solar de novo a cada duas horas."
   },
   {
    "fr": "On loue un parasol et deux chaises.",
    "pt": "A gente aluga um guarda-sol e duas cadeiras."
   },
   {
    "fr": "Le vendeur passe avec du fromage grillé.",
    "pt": "O vendedor passa com queijo coalho na brasa."
   },
   {
    "fr": "Cette noix de coco est meilleure que celle d'hier.",
    "pt": "Esse coco está melhor do que o de ontem."
   },
   {
    "fr": "Les vagues sont moins hautes le matin.",
    "pt": "As ondas são menos altas de manhã."
   },
   {
    "fr": "Cette plage est la plus belle du voyage.",
    "pt": "Essa praia é a mais bonita da viagem."
   }
  ],
  "tip": {
   "title": "Les comparatifs « mais… do que », « melhor », « pior »",
   "example": "Cette plage est bien plus calme que celle d'hier. — Essa praia é bem <b>mais</b> tranquila <b>do que</b> a de ontem.",
   "body": "Pour comparer, on utilise « mais… do que » (plus… que) et « menos… do que » (moins… que) : mais caro do que, menos quente do que. Comme en français, « bon » et « mauvais » ont des formes irrégulières : « melhor » (meilleur, mieux) et « pior » (pire). On ne dit donc jamais « mais bom » : esse coco é melhor."
  }
 },
 {
  "title": "Un cours de capoeira",
  "phrases": [
   {
    "fr": "J'ai réservé un cours de capoeira pour débutants.",
    "pt": "Eu reservei uma aula de capoeira para iniciantes."
   },
   {
    "fr": "Le maître nous a accueillis avec un grand sourire.",
    "pt": "O mestre recebeu a gente com um sorrisão."
   },
   {
    "fr": "On forme un cercle autour des deux joueurs.",
    "pt": "A gente faz uma roda em volta dos dois jogadores."
   },
   {
    "fr": "Tout le monde frappe dans les mains en chantant.",
    "pt": "Todo mundo bate palma cantando."
   },
   {
    "fr": "C'est à la fois une danse et un art martial.",
    "pt": "É ao mesmo tempo uma dança e uma luta."
   },
   {
    "fr": "Mes jambes tremblaient après dix minutes.",
    "pt": "Minhas pernas estavam tremendo depois de dez minutos."
   },
   {
    "fr": "Le maître m'a montré comment esquiver.",
    "pt": "O mestre me mostrou como fazer a esquiva."
   },
   {
    "fr": "Je n'arrivais pas à suivre le rythme.",
    "pt": "Eu não conseguia acompanhar o ritmo."
   },
   {
    "fr": "On a appris deux chansons traditionnelles.",
    "pt": "A gente aprendeu duas músicas tradicionais."
   },
   {
    "fr": "Je suis épuisé, mais très content.",
    "pt": "Estou exausto, mas muito feliz."
   }
  ]
 },
 {
  "title": "Le bus de nuit vers la Chapada Diamantina",
  "phrases": [
   {
    "fr": "On a acheté les billets à la gare routière.",
    "pt": "A gente comprou as passagens na rodoviária."
   },
   {
    "fr": "Le bus part à vingt-deux heures.",
    "pt": "O ônibus sai às dez da noite."
   },
   {
    "fr": "Le voyage dure environ sept heures.",
    "pt": "A viagem dura umas sete horas."
   },
   {
    "fr": "Les sièges s'inclinent presque complètement.",
    "pt": "As poltronas reclinam quase totalmente."
   },
   {
    "fr": "Prends une veste, la climatisation est glaciale.",
    "pt": "Leva um casaco, o ar-condicionado é gelado."
   },
   {
    "fr": "Le bus fait une pause dans une station-service.",
    "pt": "O ônibus faz uma parada num posto de gasolina."
   },
   {
    "fr": "J'ai réussi à dormir quelques heures.",
    "pt": "Eu consegui dormir algumas horas."
   },
   {
    "fr": "On arrive à Lençóis au lever du soleil.",
    "pt": "A gente chega em Lençóis ao nascer do sol."
   },
   {
    "fr": "Le petit village est entouré de montagnes.",
    "pt": "A vila é cercada de montanhas."
   },
   {
    "fr": "Je meurs d'envie d'un bon café.",
    "pt": "Estou morrendo de vontade de tomar um café bem gostoso."
   }
  ]
 },
 {
  "title": "Randonnée dans la Chapada Diamantina",
  "phrases": [
   {
    "fr": "Prenez le sentier à gauche après le pont.",
    "pt": "Peguem a trilha à esquerda depois da ponte."
   },
   {
    "fr": "Suivez le guide et ne sortez pas du chemin.",
    "pt": "Sigam o guia e não saiam do caminho."
   },
   {
    "fr": "Buvez beaucoup d'eau pendant la montée.",
    "pt": "Bebam bastante água durante a subida."
   },
   {
    "fr": "Montez doucement, les rochers glissent.",
    "pt": "Subam devagar, as pedras escorregam."
   },
   {
    "fr": "Regardez, voilà la cascade !",
    "pt": "Olhem, lá está a cachoeira!"
   },
   {
    "fr": "L'eau a la couleur du thé à cause des plantes.",
    "pt": "A água tem cor de chá por causa das plantas."
   },
   {
    "fr": "Le guide nous a raconté l'histoire des chercheurs de diamants.",
    "pt": "O guia contou para a gente a história dos garimpeiros."
   },
   {
    "fr": "Du sommet, on voit toute la vallée.",
    "pt": "Lá de cima, dá para ver o vale inteiro."
   },
   {
    "fr": "Ne laissez aucun déchet sur le chemin.",
    "pt": "Não deixem nenhum lixo na trilha."
   },
   {
    "fr": "On est rentrés juste avant la nuit.",
    "pt": "A gente voltou bem antes de escurecer."
   }
  ],
  "tip": {
   "title": "L'impératif poli à la brésilienne : « Pegue », « Siga », « Vire »",
   "example": "Prenez le sentier à gauche après le pont. — <b>Peguem</b> a trilha à esquerda depois da ponte.",
   "body": "Pour donner une consigne polie, le portugais du Brésil utilise les formes du subjonctif : pegue / peguem (prenez), siga / sigam (suivez), vire (tournez), suba (montez). C'est ce qu'on entend dans les indications : « Siga reto e vire à direita » (continuez tout droit et tournez à droite). Entre amis, on entend aussi la forme familière : « Pega », « Olha »."
  }
 },
 {
  "title": "Recife, la Venise brésilienne",
  "phrases": [
   {
    "fr": "Recife est traversée par beaucoup de rivières et de ponts.",
    "pt": "Recife é cortada por muitos rios e pontes."
   },
   {
    "fr": "On l'appelle parfois la Venise brésilienne.",
    "pt": "Às vezes ela é chamada de Veneza brasileira."
   },
   {
    "fr": "Le vieux Recife a été restauré récemment.",
    "pt": "O Recife Antigo foi restaurado há pouco tempo."
   },
   {
    "fr": "On a visité un atelier de céramique géant.",
    "pt": "A gente visitou um ateliê de cerâmica enorme."
   },
   {
    "fr": "La plage de Boa Viagem est très longue.",
    "pt": "A praia de Boa Viagem é muito comprida."
   },
   {
    "fr": "Il est interdit de nager à certains endroits.",
    "pt": "É proibido nadar em alguns lugares."
   },
   {
    "fr": "Les panneaux signalent la présence de requins.",
    "pt": "As placas avisam que tem tubarão."
   },
   {
    "fr": "On préfère se baigner dans les piscines naturelles.",
    "pt": "A gente prefere tomar banho nas piscinas naturais."
   },
   {
    "fr": "Le soir, on a mangé une tapioca au fromage.",
    "pt": "À noite, a gente comeu uma tapioca de queijo."
   },
   {
    "fr": "Demain, on traverse jusqu'à Olinda.",
    "pt": "Amanhã a gente vai até Olinda."
   }
  ]
 },
 {
  "title": "Olinda et le frevo",
  "phrases": [
   {
    "fr": "Olinda est perchée sur une colline près de la mer.",
    "pt": "Olinda fica no alto de um morro perto do mar."
   },
   {
    "fr": "Ses églises et ses maisons sont classées au patrimoine mondial.",
    "pt": "As igrejas e as casas são patrimônio mundial."
   },
   {
    "fr": "Pendant le carnaval, les rues sont pleines de monde.",
    "pt": "No carnaval, as ruas ficam lotadas."
   },
   {
    "fr": "Des poupées géantes défilent dans les ruelles.",
    "pt": "Bonecos gigantes desfilam pelas ladeiras."
   },
   {
    "fr": "Le frevo est une musique très rapide et joyeuse.",
    "pt": "O frevo é uma música muito rápida e alegre."
   },
   {
    "fr": "Les danseurs tiennent de petites ombrelles colorées.",
    "pt": "Os dançarinos seguram sombrinhas coloridas."
   },
   {
    "fr": "Un musicien nous a appris quelques pas.",
    "pt": "Um músico ensinou alguns passos para a gente."
   },
   {
    "fr": "Je transpirais comme jamais.",
    "pt": "Eu estava suando como nunca."
   },
   {
    "fr": "Le coucher de soleil depuis le haut de la ville est splendide.",
    "pt": "O pôr do sol lá do alto da cidade é maravilhoso."
   },
   {
    "fr": "Je reviendrai pour le carnaval, c'est promis.",
    "pt": "Eu vou voltar no carnaval, prometo."
   }
  ]
 },
 {
  "title": "Porto de Galinhas en jangada",
  "phrases": [
   {
    "fr": "On a pris une jangada pour aller aux piscines naturelles.",
    "pt": "A gente pegou uma jangada para ir às piscinas naturais."
   },
   {
    "fr": "C'est un bateau traditionnel à voile en bois.",
    "pt": "É um barco tradicional de madeira, com vela."
   },
   {
    "fr": "Il faut y aller à marée basse.",
    "pt": "Tem que ir na maré baixa."
   },
   {
    "fr": "L'eau est si claire qu'on voit les poissons.",
    "pt": "A água é tão clara que dá para ver os peixes."
   },
   {
    "fr": "Le pêcheur connaît chaque rocher par cœur.",
    "pt": "O jangadeiro conhece cada pedra de cor."
   },
   {
    "fr": "Il ne faut pas marcher sur le corail.",
    "pt": "Não pode pisar no coral."
   },
   {
    "fr": "J'ai loué un masque et un tuba.",
    "pt": "Eu aluguei uma máscara e um snorkel."
   },
   {
    "fr": "Un petit poisson jaune nous a suivis.",
    "pt": "Um peixinho amarelo seguiu a gente."
   },
   {
    "fr": "La marée monte vite, il faut rentrer.",
    "pt": "A maré sobe rápido, tem que voltar."
   },
   {
    "fr": "Le village est plein de statues de poules.",
    "pt": "A vila é cheia de estátuas de galinha."
   }
  ]
 },
 {
  "title": "Fortaleza et les jangadas du soir",
  "phrases": [
   {
    "fr": "On est déjà arrivés à Fortaleza ?",
    "pt": "A gente já chegou em Fortaleza?"
   },
   {
    "fr": "Non, il reste encore une heure de route.",
    "pt": "Não, ainda falta uma hora de estrada."
   },
   {
    "fr": "J'ai déjà réservé l'hôtel en bord de mer.",
    "pt": "Eu já reservei o hotel na beira-mar."
   },
   {
    "fr": "Le marché d'artisanat est encore ouvert.",
    "pt": "A feirinha de artesanato ainda está aberta."
   },
   {
    "fr": "Tu as déjà goûté le crabe d'ici ?",
    "pt": "Você já provou o caranguejo daqui?"
   },
   {
    "fr": "Pas encore, mais j'en ai très envie.",
    "pt": "Ainda não, mas estou com muita vontade."
   },
   {
    "fr": "Le jeudi, tout le monde mange du crabe sur la plage.",
    "pt": "Na quinta-feira, todo mundo come caranguejo na praia."
   },
   {
    "fr": "Il ne sait pas encore casser les pinces.",
    "pt": "Ele ainda não sabe quebrar as patas."
   },
   {
    "fr": "On utilise un petit marteau en bois.",
    "pt": "A gente quebra com um martelinho de madeira."
   },
   {
    "fr": "Il est déjà minuit, mais la plage est encore animée.",
    "pt": "Já é meia-noite, mas a praia ainda está animada."
   }
  ],
  "tip": {
   "title": "« Já » et « ainda » : déjà et encore",
   "example": "Pas encore, mais j'en ai très envie. — <b>Ainda</b> não, mas estou com muita vontade.",
   "body": "« Já » signifie « déjà » : você já provou? (tu as déjà goûté ?). « Ainda » signifie « encore, toujours » : ainda está aberta (c'est encore ouvert). Pour répondre « pas encore », on dit « ainda não », et pour « plus maintenant », « não… mais » : não chove mais (il ne pleut plus)."
  }
 },
 {
  "title": "En buggy sur les dunes",
  "phrases": [
   {
    "fr": "On a loué un buggy avec chauffeur pour la journée.",
    "pt": "A gente alugou um bugue com motorista para o dia todo."
   },
   {
    "fr": "Avec ou sans émotion ?",
    "pt": "Com emoção ou sem emoção?"
   },
   {
    "fr": "Avec émotion, bien sûr !",
    "pt": "Com emoção, claro!"
   },
   {
    "fr": "Le buggy descend les dunes à toute vitesse.",
    "pt": "O bugue desce as dunas a toda velocidade."
   },
   {
    "fr": "Accroche-toi bien à la barre.",
    "pt": "Segura firme na barra."
   },
   {
    "fr": "On a glissé sur une planche jusqu'à la lagune.",
    "pt": "A gente desceu de prancha até a lagoa."
   },
   {
    "fr": "Le vent soulève le sable partout.",
    "pt": "O vento levanta areia para todo lado."
   },
   {
    "fr": "J'ai du sable jusque dans les oreilles.",
    "pt": "Estou com areia até dentro das orelhas."
   },
   {
    "fr": "Le chauffeur conduit comme un pilote de course.",
    "pt": "O motorista dirige como um piloto de corrida."
   },
   {
    "fr": "C'était le meilleur moment de la journée.",
    "pt": "Foi o melhor momento do dia."
   }
  ]
 },
 {
  "title": "Les Lençóis Maranhenses",
  "phrases": [
   {
    "fr": "Les Lençóis Maranhenses ressemblent à un désert.",
    "pt": "Os Lençóis Maranhenses parecem um deserto."
   },
   {
    "fr": "Pourtant, il y a des lagunes entre les dunes.",
    "pt": "Mas tem lagoas no meio das dunas."
   },
   {
    "fr": "Elles se remplissent pendant la saison des pluies.",
    "pt": "Elas enchem na época das chuvas."
   },
   {
    "fr": "La meilleure période, c'est entre juin et septembre.",
    "pt": "A melhor época é entre junho e setembro."
   },
   {
    "fr": "On y accède seulement en véhicule tout-terrain.",
    "pt": "Só dá para chegar de carro quatro por quatro."
   },
   {
    "fr": "Le sable est blanc comme des draps.",
    "pt": "A areia é branca como lençol."
   },
   {
    "fr": "C'est de là que vient le nom du parc.",
    "pt": "É daí que vem o nome do parque."
   },
   {
    "fr": "L'eau des lagunes est tiède et transparente.",
    "pt": "A água das lagoas é morna e transparente."
   },
   {
    "fr": "Il faut marcher pieds nus sur les dunes.",
    "pt": "Tem que andar descalço nas dunas."
   },
   {
    "fr": "Je n'ai jamais vu un paysage pareil.",
    "pt": "Eu nunca vi uma paisagem assim."
   }
  ]
 },
 {
  "title": "Un échange de langues à l'auberge",
  "phrases": [
   {
    "fr": "On a rencontré un couple de Brésiliens à l'auberge.",
    "pt": "A gente conheceu um casal de brasileiros no albergue."
   },
   {
    "fr": "Ils apprennent le français depuis un an.",
    "pt": "Eles estão aprendendo francês há um ano."
   },
   {
    "fr": "Ils voulaient pratiquer avec nous.",
    "pt": "Eles queriam praticar com a gente."
   },
   {
    "fr": "On a parlé une heure en français, une heure en portugais.",
    "pt": "A gente conversou uma hora em francês e uma hora em português."
   },
   {
    "fr": "Ils corrigeaient gentiment mes erreurs.",
    "pt": "Eles corrigiam meus erros com carinho."
   },
   {
    "fr": "Ils m'ont appris des expressions du Nordeste.",
    "pt": "Eles me ensinaram umas expressões do Nordeste."
   },
   {
    "fr": "Ici, on dit « oxente » quand on est surpris.",
    "pt": "Aqui, a gente fala « oxente » quando fica surpreso."
   },
   {
    "fr": "Mon accent les faisait beaucoup rire.",
    "pt": "Meu sotaque fazia eles rirem muito."
   },
   {
    "fr": "On a échangé nos numéros de téléphone.",
    "pt": "A gente trocou o número de celular."
   },
   {
    "fr": "Ils vont peut-être nous rendre visite en France.",
    "pt": "Talvez eles venham visitar a gente na França."
   }
  ]
 },
 {
  "title": "Une grève des bus",
  "phrases": [
   {
    "fr": "Les chauffeurs de bus sont en grève aujourd'hui.",
    "pt": "Os motoristas de ônibus estão em greve hoje."
   },
   {
    "fr": "On cherche une autre solution pour aller à l'aéroport.",
    "pt": "A gente está procurando outro jeito para ir ao aeroporto."
   },
   {
    "fr": "Je passe par l'application pour commander une voiture.",
    "pt": "Eu vou pelo aplicativo para chamar um carro."
   },
   {
    "fr": "Le prix a doublé à cause de la grève.",
    "pt": "O preço dobrou por causa da greve."
   },
   {
    "fr": "On a payé cent reais pour la course.",
    "pt": "A gente pagou cem reais pela corrida."
   },
   {
    "fr": "Le chauffeur est passé par la route de la plage.",
    "pt": "O motorista passou pela estrada da praia."
   },
   {
    "fr": "On part pour Fernando de Noronha ce soir.",
    "pt": "A gente vai para Fernando de Noronha hoje à noite."
   },
   {
    "fr": "J'ai acheté un cadeau pour ma sœur.",
    "pt": "Eu comprei um presente para a minha irmã."
   },
   {
    "fr": "Merci pour votre patience.",
    "pt": "Obrigado pela paciência."
   },
   {
    "fr": "On est arrivés à temps, par miracle.",
    "pt": "A gente chegou a tempo, por milagre."
   }
  ],
  "tip": {
   "title": "« Por » ou « para » ?",
   "example": "On a payé cent reais pour la course. — A gente pagou cem reais <b>pela</b> corrida.",
   "body": "« Para » indique la destination ou le but : vou para Noronha (je vais à Noronha), um presente para a minha irmã (un cadeau pour ma sœur). « Por » indique le passage, la cause, l'échange ou le prix : passou pela estrada (il est passé par la route), obrigado pela paciência (merci pour votre patience). « Por » se contracte avec l'article : pelo, pela."
  }
 },
 {
  "title": "Fernando de Noronha",
  "phrases": [
   {
    "fr": "L'archipel est un parc national protégé.",
    "pt": "O arquipélago é um parque nacional protegido."
   },
   {
    "fr": "Il faut payer une taxe pour chaque jour passé sur l'île.",
    "pt": "Tem que pagar uma taxa por cada dia na ilha."
   },
   {
    "fr": "Le nombre de visiteurs est limité.",
    "pt": "O número de visitantes é limitado."
   },
   {
    "fr": "Ce matin, on a vu des dauphins depuis la falaise.",
    "pt": "Hoje de manhã, a gente viu golfinhos lá do mirante."
   },
   {
    "fr": "Ils sautaient hors de l'eau en groupe.",
    "pt": "Eles pulavam para fora da água em grupo."
   },
   {
    "fr": "J'ai nagé à côté d'une tortue de mer.",
    "pt": "Eu nadei do lado de uma tartaruga marinha."
   },
   {
    "fr": "Il est interdit de toucher les animaux.",
    "pt": "É proibido tocar nos animais."
   },
   {
    "fr": "La Baía do Sancho est souvent élue la plus belle plage du monde.",
    "pt": "A Baía do Sancho é sempre eleita a praia mais bonita do mundo."
   },
   {
    "fr": "On descend jusqu'à la plage par une échelle dans la roche.",
    "pt": "A gente desce até a praia por uma escada na pedra."
   },
   {
    "fr": "Cet endroit est un vrai paradis.",
    "pt": "Esse lugar é um verdadeiro paraíso."
   }
  ]
 },
 {
  "title": "Un passeport égaré",
  "phrases": [
   {
    "fr": "Je ne trouve plus mon passeport nulle part.",
    "pt": "Não estou achando meu passaporte em lugar nenhum."
   },
   {
    "fr": "Tu l'avais encore à l'hôtel ce matin ?",
    "pt": "Você ainda estava com ele no hotel hoje de manhã?"
   },
   {
    "fr": "Je crois que je l'ai laissé dans le taxi.",
    "pt": "Acho que eu esqueci no táxi."
   },
   {
    "fr": "On a appelé la compagnie de taxis tout de suite.",
    "pt": "A gente ligou para a empresa de táxi na hora."
   },
   {
    "fr": "Personne ne l'a encore rapporté.",
    "pt": "Ninguém devolveu ainda."
   },
   {
    "fr": "Il faut faire une déclaration au commissariat.",
    "pt": "Tem que fazer um boletim de ocorrência na delegacia."
   },
   {
    "fr": "Ensuite, on contactera le consulat de France.",
    "pt": "Depois, a gente entra em contato com o consulado da França."
   },
   {
    "fr": "Le chauffeur vient de me rappeler !",
    "pt": "O motorista acabou de me ligar de volta!"
   },
   {
    "fr": "Il l'a trouvé sous le siège arrière.",
    "pt": "Ele achou embaixo do banco de trás."
   },
   {
    "fr": "Quel soulagement, je lui dois une fière chandelle.",
    "pt": "Que alívio, eu devo essa para ele."
   }
  ]
 },
 {
  "title": "Les derniers souvenirs",
  "phrases": [
   {
    "fr": "Il nous reste encore deux heures avant le vol.",
    "pt": "A gente ainda tem duas horas antes do voo."
   },
   {
    "fr": "On passe une dernière fois au marché ?",
    "pt": "Vamos dar uma última passada na feira?"
   },
   {
    "fr": "Je voudrais rapporter du café et de la cachaça.",
    "pt": "Eu queria levar café e cachaça."
   },
   {
    "fr": "Ce hamac est fait à la main dans la région.",
    "pt": "Essa rede é feita à mão aqui na região."
   },
   {
    "fr": "Vous pouvez me faire un prix si j'en prends deux ?",
    "pt": "O senhor faz um desconto se eu levar duas?"
   },
   {
    "fr": "Je vous fais les deux pour cent cinquante reais.",
    "pt": "Eu faço as duas por cento e cinquenta reais."
   },
   {
    "fr": "Marché conclu, je les prends.",
    "pt": "Fechado, vou levar."
   },
   {
    "fr": "Ma valise est presque pleine à craquer.",
    "pt": "Minha mala está quase explodindo."
   },
   {
    "fr": "Il faudra peut-être payer un supplément bagage.",
    "pt": "Talvez a gente tenha que pagar bagagem extra."
   },
   {
    "fr": "Tant pis, ça en vaut la peine.",
    "pt": "Paciência, vale a pena."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a fait découvrir tout le Nordeste.",
    "pt": "Esse módulo fez a gente conhecer o Nordeste inteiro."
   },
   {
    "fr": "On a voyagé en bus, en bateau et en buggy.",
    "pt": "A gente viajou de ônibus, de barco e de bugue."
   },
   {
    "fr": "On sait maintenant gérer les imprévus en portugais.",
    "pt": "Agora a gente sabe lidar com imprevistos em português."
   },
   {
    "fr": "Raconter ce qu'on a fait au passé devient naturel.",
    "pt": "Contar o que a gente fez no passado está ficando natural."
   },
   {
    "fr": "Je fais la différence entre « por » et « para ».",
    "pt": "Eu já sei a diferença entre « por » e « para »."
   },
   {
    "fr": "Je comprends mieux les accents du Nordeste.",
    "pt": "Eu entendo melhor os sotaques do Nordeste."
   },
   {
    "fr": "Mon vocabulaire de voyage s'est bien enrichi.",
    "pt": "Meu vocabulário de viagem ficou bem mais rico."
   },
   {
    "fr": "J'ose parler davantage avec les gens.",
    "pt": "Eu tenho mais coragem de conversar com as pessoas."
   },
   {
    "fr": "Le portugais me paraît de moins en moins difficile.",
    "pt": "O português está me parecendo cada vez menos difícil."
   },
   {
    "fr": "Bravo, on continue l'aventure !",
    "pt": "Parabéns, vamos continuar a aventura!"
   }
  ]
 }
];

const level2Module3Lessons = [
 {
  "title": "Commenter les nouvelles du jour",
  "phrases": [
   {
    "fr": "Tu as vu les infos à la télé ce matin ?",
    "pt": "Você viu o jornal na televisão hoje de manhã?"
   },
   {
    "fr": "Oui, ils ont parlé de la nouvelle ligne de métro.",
    "pt": "Vi, sim, falaram da nova linha de metrô."
   },
   {
    "fr": "Les travaux vont durer encore deux ans.",
    "pt": "As obras vão durar mais dois anos."
   },
   {
    "fr": "Franchement, ça va beaucoup aider les habitants.",
    "pt": "Sinceramente, isso vai ajudar muito os moradores."
   },
   {
    "fr": "Mon voisin dit que c'est une perte d'argent.",
    "pt": "Meu vizinho diz que é dinheiro jogado fora."
   },
   {
    "fr": "Il y avait aussi une alerte de fortes pluies.",
    "pt": "Também teve um alerta de chuva forte."
   },
   {
    "fr": "Dans le sud, il a fait très froid cette semaine.",
    "pt": "No Sul, fez muito frio esta semana."
   },
   {
    "fr": "Je lis surtout les nouvelles sur mon téléphone.",
    "pt": "Eu leio as notícias mais no celular."
   },
   {
    "fr": "Il faut toujours vérifier la source d'une information.",
    "pt": "É sempre bom conferir a fonte de uma notícia."
   },
   {
    "fr": "On en reparle ce soir au dîner ?",
    "pt": "A gente conversa mais sobre isso no jantar?"
   }
  ]
 },
 {
  "title": "Donner son avis sur un projet",
  "phrases": [
   {
    "fr": "Je pense que ton idée est vraiment bonne.",
    "pt": "Eu acho que a sua ideia é muito boa."
   },
   {
    "fr": "Tu crois que ça peut marcher au Brésil ?",
    "pt": "Você acha que isso pode dar certo no Brasil?"
   },
   {
    "fr": "À mon avis, il faut commencer petit.",
    "pt": "Na minha opinião, tem que começar pequeno."
   },
   {
    "fr": "Ma sœur trouve que le prix est trop élevé.",
    "pt": "A minha irmã acha que o preço está alto demais."
   },
   {
    "fr": "Je ne pense pas que ce soit le bon moment.",
    "pt": "Eu acho que não é o momento certo."
   },
   {
    "fr": "Pourquoi tu dis ça ?",
    "pt": "Por que você está dizendo isso?"
   },
   {
    "fr": "Les clients ont déjà donné leur avis en ligne.",
    "pt": "Os clientes já deram a opinião deles na internet."
   },
   {
    "fr": "La plupart ont beaucoup aimé le concept.",
    "pt": "A maioria gostou muito da proposta."
   },
   {
    "fr": "Je suis d'accord avec toi sur ce point.",
    "pt": "Eu concordo com você nesse ponto."
   },
   {
    "fr": "Réfléchis encore un peu avant de décider.",
    "pt": "Pensa mais um pouco antes de decidir."
   }
  ],
  "tip": {
   "title": "« Achar que » : donner son avis",
   "example": "Je pense que ton idée est vraiment bonne. — Eu <b>acho que</b> a sua ideia é muito boa.",
   "body": "Au Brésil, pour dire « je pense que » ou « je trouve que », on utilise presque toujours « achar que », bien plus que « pensar que ». Pour la négation, on dit très souvent « eu acho que não » (je ne crois pas) en plaçant le « não » après. Exemples : « Você acha que vai chover? » (Tu crois qu'il va pleuvoir ?), « Acho que sim » (je crois que oui)."
  }
 },
 {
  "title": "Changer de travail",
  "phrases": [
   {
    "fr": "J'ai envie de changer de travail depuis un moment.",
    "pt": "Faz um tempo que estou com vontade de mudar de emprego."
   },
   {
    "fr": "Qu'est-ce qui ne va pas dans ton poste actuel ?",
    "pt": "O que não está bom no seu emprego atual?"
   },
   {
    "fr": "Je passe trois heures par jour dans les embouteillages.",
    "pt": "Eu passo três horas por dia no trânsito."
   },
   {
    "fr": "Et le salaire n'a pas augmenté depuis deux ans.",
    "pt": "E o salário não aumenta há dois anos."
   },
   {
    "fr": "J'ai reçu une proposition d'une entreprise à Curitiba.",
    "pt": "Recebi uma proposta de uma empresa em Curitiba."
   },
   {
    "fr": "Le problème, c'est que toute ma famille vit ici.",
    "pt": "O problema é que a minha família toda mora aqui."
   },
   {
    "fr": "Tu pourrais demander à travailler à distance.",
    "pt": "Você podia pedir para trabalhar de casa."
   },
   {
    "fr": "J'ai déjà posé la question à mon chef.",
    "pt": "Eu já fiz essa pergunta para o meu chefe."
   },
   {
    "fr": "Il m'a répondu qu'il allait y réfléchir.",
    "pt": "Ele me respondeu que ia pensar no assunto."
   },
   {
    "fr": "Quoi que tu décides, je te soutiens.",
    "pt": "Seja qual for a sua decisão, eu te apoio."
   }
  ]
 },
 {
  "title": "Parler de l'environnement",
  "phrases": [
   {
    "fr": "La plage était pleine de déchets dimanche dernier.",
    "pt": "A praia estava cheia de lixo no domingo passado."
   },
   {
    "fr": "Des volontaires ont tout ramassé le lendemain.",
    "pt": "Uns voluntários recolheram tudo no dia seguinte."
   },
   {
    "fr": "Chacun devrait remporter ses ordures.",
    "pt": "Cada um devia levar o próprio lixo embora."
   },
   {
    "fr": "Dans mon immeuble, on trie enfin le plastique.",
    "pt": "No meu prédio, a gente finalmente separa o plástico."
   },
   {
    "fr": "J'ai arrêté d'acheter des bouteilles d'eau.",
    "pt": "Eu parei de comprar garrafa de água."
   },
   {
    "fr": "Maintenant, j'ai toujours ma gourde avec moi.",
    "pt": "Agora eu sempre ando com a minha garrafinha."
   },
   {
    "fr": "La déforestation en Amazonie m'inquiète beaucoup.",
    "pt": "O desmatamento na Amazônia me preocupa muito."
   },
   {
    "fr": "Les petits gestes comptent aussi, je crois.",
    "pt": "Eu acho que os pequenos gestos também contam."
   },
   {
    "fr": "Tu viens à vélo au travail parfois ?",
    "pt": "Você vem de bicicleta para o trabalho às vezes?"
   },
   {
    "fr": "Oui, depuis qu'il y a une piste cyclable.",
    "pt": "Venho, sim, desde que fizeram uma ciclovia."
   }
  ]
 },
 {
  "title": "Le grand derby du dimanche",
  "phrases": [
   {
    "fr": "Tu es pour quelle équipe, toi ?",
    "pt": "Você torce para qual time?"
   },
   {
    "fr": "Je suis pour l'équipe de mon père, évidemment.",
    "pt": "Eu torço para o time do meu pai, claro."
   },
   {
    "fr": "Ce derby est toujours très tendu.",
    "pt": "Esse clássico é sempre muito tenso."
   },
   {
    "fr": "Le stade était plein à craquer.",
    "pt": "O estádio estava lotadíssimo."
   },
   {
    "fr": "Le deuxième but était vraiment très beau.",
    "pt": "O segundo gol foi lindíssimo."
   },
   {
    "fr": "Mon beau-frère était furieux contre l'arbitre.",
    "pt": "O meu cunhado ficou furioso com o juiz."
   },
   {
    "fr": "On a regardé le match chez lui avec des amis.",
    "pt": "A gente assistiu ao jogo na casa dele com uns amigos."
   },
   {
    "fr": "Il avait préparé des brochettes et des boissons fraîches.",
    "pt": "Ele tinha preparado espetinho e bebida gelada."
   },
   {
    "fr": "Après le match, tout le monde chantait dans la rue.",
    "pt": "Depois do jogo, todo mundo cantava na rua."
   },
   {
    "fr": "La semaine prochaine, c'est la revanche.",
    "pt": "Semana que vem tem a revanche."
   }
  ],
  "tip": {
   "title": "Le superlatif en « -íssimo »",
   "example": "Le deuxième but était vraiment très beau. — O segundo gol foi <b>lindíssimo</b>.",
   "body": "Pour dire « très, extrêmement », le portugais ajoute souvent le suffixe « -íssimo » (ou « -íssima ») à l'adjectif, au lieu de « muito ». On enlève la voyelle finale : lindo devient lindíssimo, cheio devient cheíssimo, caro devient caríssimo. Les Brésiliens l'utilisent beaucoup à l'oral pour insister : « O show foi ótimo, estava lotadíssimo! »"
  }
 },
 {
  "title": "Une soirée devant la novela",
  "phrases": [
   {
    "fr": "Tu as vu le dernier épisode de la novela ?",
    "pt": "Você viu o último capítulo da novela?"
   },
   {
    "fr": "Non, ne me raconte pas la fin !",
    "pt": "Não, não me conta o final!"
   },
   {
    "fr": "Ma grand-mère la regarde tous les soirs à vingt et une heures.",
    "pt": "A minha avó assiste todas as noites às nove horas."
   },
   {
    "fr": "Toute la famille s'assoit devant la télé.",
    "pt": "A família inteira senta na frente da televisão."
   },
   {
    "fr": "Le méchant de l'histoire est très bien joué.",
    "pt": "O vilão da história é muito bem interpretado."
   },
   {
    "fr": "Au début, je trouvais ça un peu exagéré.",
    "pt": "No começo, eu achava meio exagerado."
   },
   {
    "fr": "Maintenant, je n'arrive plus à m'arrêter.",
    "pt": "Agora eu não consigo mais parar."
   },
   {
    "fr": "Ça m'aide aussi à comprendre le portugais parlé.",
    "pt": "Isso também me ajuda a entender o português falado."
   },
   {
    "fr": "Les acteurs parlent avec l'accent de Rio.",
    "pt": "Os atores falam com sotaque carioca."
   },
   {
    "fr": "On regarde l'épisode de demain ensemble ?",
    "pt": "Vamos assistir ao capítulo de amanhã juntos?"
   }
  ]
 },
 {
  "title": "Bossa nova et MPB",
  "phrases": [
   {
    "fr": "Quel genre de musique tu écoutes en ce moment ?",
    "pt": "Que tipo de música você está ouvindo agora?"
   },
   {
    "fr": "Je redécouvre la bossa nova des années soixante.",
    "pt": "Estou redescobrindo a bossa nova dos anos sessenta."
   },
   {
    "fr": "C'est une musique douce, parfaite pour le soir.",
    "pt": "É uma música suave, perfeita para a noite."
   },
   {
    "fr": "Mon père avait plein de vieux vinyles.",
    "pt": "O meu pai tinha um monte de discos de vinil antigos."
   },
   {
    "fr": "Il les écoutait chaque dimanche matin.",
    "pt": "Ele ouvia todo domingo de manhã."
   },
   {
    "fr": "Les paroles de la MPB sont souvent très poétiques.",
    "pt": "As letras da MPB costumam ser muito poéticas."
   },
   {
    "fr": "J'essaie de chanter, mais je me trompe de mots.",
    "pt": "Eu tento cantar, mas erro as palavras."
   },
   {
    "fr": "Il y a un concert gratuit sur la place samedi.",
    "pt": "Vai ter um show de graça na praça no sábado."
   },
   {
    "fr": "Je vais apprendre à jouer de la guitare.",
    "pt": "Eu vou aprender a tocar violão."
   },
   {
    "fr": "Tu me prêtes tes vieux disques ?",
    "pt": "Você me empresta os seus discos antigos?"
   }
  ]
 },
 {
  "title": "Conseiller un ami stressé",
  "phrases": [
   {
    "fr": "Tu as l'air fatigué ces derniers jours.",
    "pt": "Você está com cara de cansado esses dias."
   },
   {
    "fr": "Je dors mal à cause du travail.",
    "pt": "Estou dormindo mal por causa do trabalho."
   },
   {
    "fr": "Tu devrais prendre quelques jours de repos.",
    "pt": "Você devia tirar uns dias de folga."
   },
   {
    "fr": "Je ne peux pas, on a un gros projet à rendre.",
    "pt": "Não dá, a gente tem um projeto grande para entregar."
   },
   {
    "fr": "Au moins, déconnecte ton téléphone le soir.",
    "pt": "Pelo menos desliga o celular à noite."
   },
   {
    "fr": "L'année dernière, j'ai vécu la même chose.",
    "pt": "No ano passado, eu passei pela mesma coisa."
   },
   {
    "fr": "Ce qui m'a aidé, c'est de marcher au bord de la mer.",
    "pt": "O que me ajudou foi caminhar na beira do mar."
   },
   {
    "fr": "Et parler avec quelqu'un, ça soulage beaucoup.",
    "pt": "E conversar com alguém alivia muito."
   },
   {
    "fr": "Merci, ça me fait du bien de t'écouter.",
    "pt": "Obrigado, me faz bem te ouvir."
   },
   {
    "fr": "Appelle-moi quand tu veux, d'accord ?",
    "pt": "Me liga quando quiser, tá bom?"
   }
  ]
 },
 {
  "title": "Les collègues de bureau à São Paulo",
  "phrases": [
   {
    "fr": "Ici, tout le monde se tutoie dès le premier jour.",
    "pt": "Aqui todo mundo se chama de você desde o primeiro dia."
   },
   {
    "fr": "Les collègues m'ont très bien accueilli.",
    "pt": "Os colegas me receberam muito bem."
   },
   {
    "fr": "On prend souvent un petit café ensemble l'après-midi.",
    "pt": "A gente sempre toma um cafezinho junto à tarde."
   },
   {
    "fr": "Les réunions commencent rarement à l'heure.",
    "pt": "As reuniões quase nunca começam na hora."
   },
   {
    "fr": "À midi, on déjeune au restaurant au kilo.",
    "pt": "No almoço, a gente come no restaurante por quilo."
   },
   {
    "fr": "On se sert soi-même et on paie au poids.",
    "pt": "A gente se serve e paga pelo peso."
   },
   {
    "fr": "Le vendredi, il y a souvent un apéro après le travail.",
    "pt": "Na sexta, sempre tem um happy hour depois do trabalho."
   },
   {
    "fr": "Ma collègue m'a invité à son mariage.",
    "pt": "A minha colega me convidou para o casamento dela."
   },
   {
    "fr": "Les Brésiliens sont très chaleureux au travail.",
    "pt": "Os brasileiros são muito calorosos no trabalho."
   },
   {
    "fr": "Je me sens déjà comme chez moi.",
    "pt": "Eu já me sinto em casa."
   }
  ]
 },
 {
  "title": "Les réseaux sociaux",
  "phrases": [
   {
    "fr": "Tu passes combien de temps sur ton téléphone par jour ?",
    "pt": "Quanto tempo por dia você passa no celular?"
   },
   {
    "fr": "Beaucoup trop, je l'avoue.",
    "pt": "Tempo demais, eu confesso."
   },
   {
    "fr": "Au Brésil, tout le monde utilise les messageries vocales.",
    "pt": "No Brasil, todo mundo manda mensagem de voz."
   },
   {
    "fr": "Ma mère m'envoie des audios de cinq minutes.",
    "pt": "A minha mãe me manda áudios de cinco minutos."
   },
   {
    "fr": "Le groupe de la famille ne s'arrête jamais.",
    "pt": "O grupo da família não para nunca."
   },
   {
    "fr": "J'ai publié des photos de mon voyage hier.",
    "pt": "Eu postei umas fotos da minha viagem ontem."
   },
   {
    "fr": "Elles ont eu beaucoup de commentaires.",
    "pt": "Elas tiveram muitos comentários."
   },
   {
    "fr": "Parfois, je me compare trop aux autres.",
    "pt": "Às vezes eu me comparo demais com os outros."
   },
   {
    "fr": "Le mois dernier, j'ai fait une pause d'une semaine.",
    "pt": "No mês passado, eu dei uma pausa de uma semana."
   },
   {
    "fr": "J'ai dormi beaucoup mieux sans écran.",
    "pt": "Eu dormi muito melhor sem tela."
   }
  ]
 },
 {
  "title": "Faire du bénévolat",
  "phrases": [
   {
    "fr": "Je fais du bénévolat dans une ONG du quartier.",
    "pt": "Eu faço trabalho voluntário numa ONG do bairro."
   },
   {
    "fr": "On donne des cours de soutien aux enfants.",
    "pt": "A gente dá aula de reforço para as crianças."
   },
   {
    "fr": "Comment tu as connu cette association ?",
    "pt": "Como você conheceu essa associação?"
   },
   {
    "fr": "Une amie m'en a parlé à l'université.",
    "pt": "Uma amiga me falou dela na faculdade."
   },
   {
    "fr": "Le samedi, on prépare des repas pour les familles.",
    "pt": "No sábado, a gente prepara refeições para as famílias."
   },
   {
    "fr": "Il y a toujours besoin de bras en plus.",
    "pt": "Sempre precisa de mais gente para ajudar."
   },
   {
    "fr": "Je pourrais venir avec toi la semaine prochaine ?",
    "pt": "Eu posso ir com você na semana que vem?"
   },
   {
    "fr": "Bien sûr, ils seront ravis de te rencontrer.",
    "pt": "Claro, eles vão adorar te conhecer."
   },
   {
    "fr": "Ça m'a appris à voir la ville autrement.",
    "pt": "Isso me ensinou a ver a cidade de outro jeito."
   },
   {
    "fr": "Je reçois beaucoup plus que je ne donne.",
    "pt": "Eu recebo muito mais do que eu dou."
   }
  ]
 },
 {
  "title": "Un rêve d'enfance",
  "phrases": [
   {
    "fr": "Quand j'étais petit, je voulais être pilote.",
    "pt": "Quando eu era pequeno, eu queria ser piloto."
   },
   {
    "fr": "Et toi, quel était ton rêve ?",
    "pt": "E você, qual era o seu sonho?"
   },
   {
    "fr": "Je rêvais de vivre près de la plage.",
    "pt": "Eu sonhava em morar perto da praia."
   },
   {
    "fr": "J'aimerais beaucoup ouvrir un petit café un jour.",
    "pt": "Eu gostaria muito de abrir um cafezinho um dia."
   },
   {
    "fr": "Ce serait un endroit simple et accueillant.",
    "pt": "Seria um lugar simples e aconchegante."
   },
   {
    "fr": "Tu pourrais vendre du pain au fromage maison.",
    "pt": "Você poderia vender pão de queijo caseiro."
   },
   {
    "fr": "Ce serait génial, mais il faut de l'argent.",
    "pt": "Seria ótimo, mas precisa de dinheiro."
   },
   {
    "fr": "Tu pourrais commencer par une petite foire.",
    "pt": "Você poderia começar numa feirinha."
   },
   {
    "fr": "Mes parents ne croyaient pas beaucoup à mes rêves.",
    "pt": "Os meus pais não acreditavam muito nos meus sonhos."
   },
   {
    "fr": "Il n'est jamais trop tard pour essayer.",
    "pt": "Nunca é tarde demais para tentar."
   }
  ],
  "tip": {
   "title": "Le conditionnel : « gostaria, seria, poderia »",
   "example": "J'aimerais beaucoup ouvrir un petit café un jour. — Eu <b>gostaria</b> muito de abrir um cafezinho um dia.",
   "body": "Le conditionnel (« futuro do pretérito ») se forme comme en français, avec la terminaison « -ia » ajoutée à l'infinitif : gostar donne gostaria, ser donne seria, poder donne poderia. Il sert à exprimer un souhait poli ou une hypothèse : « Seria legal » (ce serait sympa), « Você poderia me ajudar? » (tu pourrais m'aider ?). À l'oral, les Brésiliens le remplacent souvent par l'imparfait : « Você podia me ajudar? »"
  }
 },
 {
  "title": "Une journée difficile",
  "phrases": [
   {
    "fr": "Aujourd'hui, tout est allé de travers.",
    "pt": "Hoje deu tudo errado."
   },
   {
    "fr": "Raconte-moi ce qui s'est passé.",
    "pt": "Me conta o que aconteceu."
   },
   {
    "fr": "Le bus est tombé en panne sur l'avenue.",
    "pt": "O ônibus quebrou no meio da avenida."
   },
   {
    "fr": "Je suis arrivé en retard à la réunion.",
    "pt": "Eu cheguei atrasado na reunião."
   },
   {
    "fr": "En plus, il pleuvait des cordes.",
    "pt": "E ainda por cima estava chovendo muito."
   },
   {
    "fr": "J'ai oublié mon parapluie dans le taxi.",
    "pt": "Eu esqueci o guarda-chuva no táxi."
   },
   {
    "fr": "Ma batterie était à plat toute l'après-midi.",
    "pt": "A bateria do meu celular acabou a tarde inteira."
   },
   {
    "fr": "Viens, je t'offre un bon jus de fruit.",
    "pt": "Vem, eu te pago um suco bem gostoso."
   },
   {
    "fr": "Demain sera sûrement une meilleure journée.",
    "pt": "Amanhã com certeza vai ser um dia melhor."
   },
   {
    "fr": "Merci, j'en avais vraiment besoin.",
    "pt": "Obrigado, eu estava precisando mesmo."
   }
  ]
 },
 {
  "title": "Retrouver un vieil ami",
  "phrases": [
   {
    "fr": "Ça fait combien de temps qu'on ne s'est pas vus ?",
    "pt": "Faz quanto tempo que a gente não se vê?"
   },
   {
    "fr": "Ça fait au moins cinq ans, je crois.",
    "pt": "Faz pelo menos cinco anos, eu acho."
   },
   {
    "fr": "Tu n'as presque pas changé.",
    "pt": "Você quase não mudou."
   },
   {
    "fr": "Ça fait trois ans que j'habite à Florianópolis.",
    "pt": "Faz três anos que eu moro em Florianópolis."
   },
   {
    "fr": "Je me suis marié l'année dernière.",
    "pt": "Eu me casei no ano passado."
   },
   {
    "fr": "Félicitations, je ne savais pas du tout !",
    "pt": "Parabéns, eu não sabia de nada!"
   },
   {
    "fr": "Tu as encore des nouvelles des autres de l'école ?",
    "pt": "Você ainda tem notícias do pessoal da escola?"
   },
   {
    "fr": "Seulement par le groupe de messages.",
    "pt": "Só pelo grupo de mensagens."
   },
   {
    "fr": "On devrait organiser des retrouvailles.",
    "pt": "A gente devia organizar um reencontro."
   },
   {
    "fr": "Promis, on ne laisse plus passer autant de temps.",
    "pt": "Prometo, a gente não deixa passar tanto tempo de novo."
   }
  ],
  "tip": {
   "title": "« Faz… que » : ça fait… que",
   "example": "Ça fait trois ans que j'habite à Florianópolis. — <b>Faz</b> três anos <b>que</b> eu moro em Florianópolis.",
   "body": "Pour exprimer une durée qui continue jusqu'à maintenant, on utilise « faz + durée + que », exactement comme « ça fait… que » en français. Le verbe qui suit reste au présent : « Faz dois meses que eu estudo português » (ça fait deux mois que j'étudie le portugais). On peut aussi dire « há » : « Eu moro aqui há três anos » (j'habite ici depuis trois ans)."
  }
 },
 {
  "title": "Raconter un voyage marquant",
  "phrases": [
   {
    "fr": "Quel voyage t'a le plus marqué ?",
    "pt": "Qual viagem mais te marcou?"
   },
   {
    "fr": "Sans doute les chutes d'Iguaçu, il y a deux ans.",
    "pt": "Sem dúvida as Cataratas do Iguaçu, há dois anos."
   },
   {
    "fr": "Le bruit de l'eau était impressionnant.",
    "pt": "O barulho da água era impressionante."
   },
   {
    "fr": "On était complètement trempés après la passerelle.",
    "pt": "A gente ficou encharcado depois da passarela."
   },
   {
    "fr": "J'ai pris plus de trois cents photos.",
    "pt": "Eu tirei mais de trezentas fotos."
   },
   {
    "fr": "Le soir, on a mangé dans une petite auberge.",
    "pt": "À noite, a gente jantou numa pousadinha."
   },
   {
    "fr": "Le propriétaire nous a raconté l'histoire de la région.",
    "pt": "O dono nos contou a história da região."
   },
   {
    "fr": "C'est là que j'ai vraiment commencé à parler portugais.",
    "pt": "Foi lá que eu comecei a falar português de verdade."
   },
   {
    "fr": "Je rêve d'y retourner avec mes enfants.",
    "pt": "Eu sonho em voltar lá com os meus filhos."
   },
   {
    "fr": "Tu me donneras l'adresse de l'auberge ?",
    "pt": "Você me passa o endereço da pousada?"
   }
  ]
 },
 {
  "title": "Préparer un anniversaire surprise",
  "phrases": [
   {
    "fr": "Samedi, c'est l'anniversaire de Juliana.",
    "pt": "Sábado é o aniversário da Juliana."
   },
   {
    "fr": "On lui prépare une fête surprise ?",
    "pt": "Vamos fazer uma festa surpresa para ela?"
   },
   {
    "fr": "Bonne idée, mais il ne faut rien lui dire.",
    "pt": "Boa ideia, mas não pode contar nada para ela."
   },
   {
    "fr": "Je m'occupe des petits gâteaux au chocolat.",
    "pt": "Eu cuido dos brigadeiros."
   },
   {
    "fr": "Et moi, j'apporte les amuse-gueules salés.",
    "pt": "E eu levo os salgadinhos."
   },
   {
    "fr": "Son copain va l'emmener se promener pendant ce temps.",
    "pt": "O namorado dela vai levar ela para passear enquanto isso."
   },
   {
    "fr": "Tout le monde doit arriver avant dix-neuf heures.",
    "pt": "Todo mundo tem que chegar antes das sete da noite."
   },
   {
    "fr": "On éteindra la lumière quand elle ouvrira la porte.",
    "pt": "A gente apaga a luz quando ela abrir a porta."
   },
   {
    "fr": "Ensuite on chantera « Joyeux anniversaire » tous ensemble.",
    "pt": "Depois a gente canta « Parabéns pra você » todo mundo junto."
   },
   {
    "fr": "J'espère qu'elle ne va pas pleurer !",
    "pt": "Espero que ela não chore!"
   }
  ]
 },
 {
  "title": "Une festa junina entre amis",
  "phrases": [
   {
    "fr": "En juin, il y a des fêtes juninas partout.",
    "pt": "Em junho tem festa junina em todo lugar."
   },
   {
    "fr": "Il faut venir habillé en tenue de campagne.",
    "pt": "Tem que ir vestido de caipira."
   },
   {
    "fr": "J'ai acheté une chemise à carreaux pour l'occasion.",
    "pt": "Eu comprei uma camisa xadrez para a ocasião."
   },
   {
    "fr": "Il y aura du maïs grillé et du vin chaud.",
    "pt": "Vai ter milho assado e quentão."
   },
   {
    "fr": "J'adore la canjica de ta mère.",
    "pt": "Eu adoro a canjica da sua mãe."
   },
   {
    "fr": "Tout le monde danse la quadrille autour du feu.",
    "pt": "Todo mundo dança quadrilha em volta da fogueira."
   },
   {
    "fr": "L'année dernière, j'ai gagné à la pêche aux canards.",
    "pt": "No ano passado, eu ganhei na pescaria."
   },
   {
    "fr": "Les enfants ont adoré les jeux traditionnels.",
    "pt": "As crianças adoraram as brincadeiras típicas."
   },
   {
    "fr": "C'est ma fête brésilienne préférée.",
    "pt": "É a minha festa brasileira favorita."
   },
   {
    "fr": "On se retrouve à l'entrée de la place à vingt heures ?",
    "pt": "A gente se encontra na entrada da praça às oito da noite?"
   }
  ]
 },
 {
  "title": "Le Carnaval et les blocos de rua",
  "phrases": [
   {
    "fr": "Tu restes en ville pendant le Carnaval ?",
    "pt": "Você vai ficar na cidade no Carnaval?"
   },
   {
    "fr": "Oui, je vais suivre les blocos de rua.",
    "pt": "Vou, sim, vou sair nos blocos de rua."
   },
   {
    "fr": "L'année dernière, je suis resté chez moi malade.",
    "pt": "No ano passado, eu fiquei em casa doente."
   },
   {
    "fr": "Cette fois, je veux profiter de tout.",
    "pt": "Dessa vez, eu quero aproveitar tudo."
   },
   {
    "fr": "Ma voisine est devenue très amie avec les musiciens.",
    "pt": "A minha vizinha ficou muito amiga dos músicos."
   },
   {
    "fr": "Le bloco part de la place à huit heures du matin.",
    "pt": "O bloco sai da praça às oito da manhã."
   },
   {
    "fr": "Le parcours se trouve près de la plage.",
    "pt": "O percurso fica perto da praia."
   },
   {
    "fr": "N'oublie pas la crème solaire et beaucoup d'eau.",
    "pt": "Não esquece o protetor solar e muita água."
   },
   {
    "fr": "J'ai été très content de ton invitation.",
    "pt": "Eu fiquei muito feliz com o seu convite."
   },
   {
    "fr": "Ne t'inquiète pas, ça va bien se passer.",
    "pt": "Fica tranquilo, vai dar tudo certo."
   }
  ],
  "tip": {
   "title": "Les sens de « ficar »",
   "example": "J'ai été très content de ton invitation. — Eu <b>fiquei</b> muito feliz com o seu convite.",
   "body": "« Ficar » est un verbe passe-partout au Brésil. Il veut dire « rester » (ficar em casa), « se trouver » (a praia fica perto), mais aussi « devenir » ou « être » suite à un changement (fiquei feliz, ficou furioso). On le retrouve dans des expressions très courantes : « Fica tranquilo » (ne t'inquiète pas), « Fica à vontade » (fais comme chez toi)."
  }
 },
 {
  "title": "La saudade d'un ami parti",
  "phrases": [
   {
    "fr": "Mon meilleur ami est parti vivre à l'étranger.",
    "pt": "O meu melhor amigo foi morar no exterior."
   },
   {
    "fr": "Il me manque beaucoup.",
    "pt": "Estou com muita saudade dele."
   },
   {
    "fr": "On s'appelle en vidéo tous les dimanches.",
    "pt": "A gente faz chamada de vídeo todo domingo."
   },
   {
    "fr": "Il dit que la cuisine d'ici lui manque.",
    "pt": "Ele diz que sente falta da comida daqui."
   },
   {
    "fr": "Surtout le haricot noir de sa mère.",
    "pt": "Principalmente do feijão da mãe dele."
   },
   {
    "fr": "La saudade, c'est un mot difficile à traduire.",
    "pt": "Saudade é uma palavra difícil de traduzir."
   },
   {
    "fr": "C'est un mélange de manque et de tendresse.",
    "pt": "É uma mistura de falta e de carinho."
   },
   {
    "fr": "Il va revenir pour les fêtes de fin d'année.",
    "pt": "Ele vai voltar para as festas de fim de ano."
   },
   {
    "fr": "On va lui préparer une grande feijoada.",
    "pt": "A gente vai preparar uma feijoada enorme para ele."
   },
   {
    "fr": "J'ai hâte de le serrer dans mes bras.",
    "pt": "Não vejo a hora de dar um abraço nele."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Dans ce module, on a appris à donner notre avis.",
    "pt": "Neste módulo, a gente aprendeu a dar a nossa opinião."
   },
   {
    "fr": "On peut parler de foot, de musique et de novelas.",
    "pt": "A gente pode falar de futebol, de música e de novela."
   },
   {
    "fr": "Raconter un souvenir devient de plus en plus facile.",
    "pt": "Contar uma lembrança está ficando cada vez mais fácil."
   },
   {
    "fr": "Les verbes au passé commencent à être naturels.",
    "pt": "Os verbos no passado estão começando a ficar naturais."
   },
   {
    "fr": "Je comprends mieux les blagues de mes amis brésiliens.",
    "pt": "Eu entendo melhor as piadas dos meus amigos brasileiros."
   },
   {
    "fr": "Je n'ai plus peur de faire des erreurs.",
    "pt": "Eu não tenho mais medo de errar."
   },
   {
    "fr": "Le portugais du Brésil me paraît de plus en plus familier.",
    "pt": "O português do Brasil está ficando cada vez mais familiar para mim."
   },
   {
    "fr": "Je suis fier du chemin parcouru.",
    "pt": "Eu estou orgulhoso do caminho que eu fiz."
   },
   {
    "fr": "Continue comme ça, tu fais de beaux progrès.",
    "pt": "Continua assim, você está progredindo muito."
   },
   {
    "fr": "Rendez-vous au prochain niveau !",
    "pt": "Até o próximo nível!"
   }
  ]
 }
];

const level3Module1Lessons = [
 {
  "title": "Le contrat de location et le fiador",
  "phrases": [
   {
    "fr": "Le propriétaire exige que nous présentions un garant avant de signer.",
    "pt": "O proprietário exige que a gente apresente um fiador antes de assinar."
   },
   {
    "fr": "Au Brésil, le garant doit souvent posséder un bien dans la même ville.",
    "pt": "No Brasil, o fiador muitas vezes precisa ter um imóvel na mesma cidade."
   },
   {
    "fr": "J'espère que l'agence acceptera une assurance caution à la place.",
    "pt": "Espero que a imobiliária aceite um seguro-fiança no lugar."
   },
   {
    "fr": "Il est important que vous lisiez chaque clause attentivement.",
    "pt": "É importante que você leia cada cláusula com atenção."
   },
   {
    "fr": "Le contrat prévoit un réajustement annuel du loyer.",
    "pt": "O contrato prevê um reajuste anual do aluguel."
   },
   {
    "fr": "Je préfère qu'on négocie une durée de trente mois.",
    "pt": "Prefiro que a gente negocie um prazo de trinta meses."
   },
   {
    "fr": "L'appartement se trouve dans un quartier calme de Curitiba.",
    "pt": "O apartamento fica num bairro tranquilo de Curitiba."
   },
   {
    "fr": "Il faut que nous fassions l'état des lieux ensemble.",
    "pt": "É preciso que a gente faça a vistoria juntos."
   },
   {
    "fr": "Je doute que le propriétaire baisse encore le prix.",
    "pt": "Duvido que o proprietário abaixe ainda mais o preço."
   },
   {
    "fr": "Pourvu que tout soit signé avant la fin du mois !",
    "pt": "Tomara que tudo esteja assinado antes do fim do mês!"
   }
  ],
  "tip": {
   "title": "« Espero que… / É importante que… » : le subjonctif présent",
   "example": "Il est important que vous lisiez chaque clause attentivement. — É importante que você <b>leia</b> cada cláusula com atenção.",
   "body": "Comme en français, le portugais emploie le subjonctif après les verbes de souhait, de doute ou d'obligation : espero que, é importante que, duvido que, é preciso que. On le forme à partir de la première personne du présent : eu leio donne que eu leia, eu faço donne que eu faça. Les irréguliers à retenir : seja (ser), esteja (estar), vá (ir), tenha (ter)."
  }
 },
 {
  "title": "La déclaration de l'impôt sur le revenu",
  "phrases": [
   {
    "fr": "Cette année, je dois faire ma déclaration d'impôt sur le revenu avant fin mai.",
    "pt": "Este ano, preciso fazer minha declaração do Imposto de Renda antes do fim de maio."
   },
   {
    "fr": "Le logiciel de l'administration fiscale est assez simple à utiliser.",
    "pt": "O programa da Receita Federal é bem simples de usar."
   },
   {
    "fr": "Mes dépenses de santé peuvent être entièrement déduites.",
    "pt": "Meus gastos com saúde podem ser totalmente deduzidos."
   },
   {
    "fr": "J'ai rassemblé tous mes justificatifs dans un dossier.",
    "pt": "Juntei todos os meus comprovantes numa pasta."
   },
   {
    "fr": "Mon comptable m'a conseillé de choisir la déclaration complète.",
    "pt": "Meu contador me aconselhou a escolher a declaração completa."
   },
   {
    "fr": "Si tout va bien, je recevrai un remboursement en juillet.",
    "pt": "Se tudo der certo, vou receber a restituição em julho."
   },
   {
    "fr": "Il ne faut surtout pas oublier le numéro de CPF des personnes à charge.",
    "pt": "Não se pode esquecer de jeito nenhum o CPF dos dependentes."
   },
   {
    "fr": "Une erreur peut faire tomber la déclaration dans le filet de contrôle.",
    "pt": "Um erro pode fazer a declaração cair na malha fina."
   },
   {
    "fr": "J'ai attendu le dernier moment, comme d'habitude.",
    "pt": "Deixei para a última hora, como sempre."
   },
   {
    "fr": "La prochaine fois, je m'organiserai dès janvier.",
    "pt": "Da próxima vez, vou me organizar desde janeiro."
   }
  ]
 },
 {
  "title": "Choisir un plan de santé",
  "phrases": [
   {
    "fr": "Quand j'aurai un contrat fixe, je prendrai un plan de santé privé.",
    "pt": "Quando eu tiver um contrato fixo, vou contratar um plano de saúde particular."
   },
   {
    "fr": "Le système public de santé est gratuit pour tout le monde.",
    "pt": "O SUS é gratuito para todo mundo."
   },
   {
    "fr": "Mais les délais pour voir un spécialiste peuvent être longs.",
    "pt": "Mas a espera para ver um especialista pode ser longa."
   },
   {
    "fr": "Si vous pouvez, comparez au moins trois offres.",
    "pt": "Se você puder, compare pelo menos três propostas."
   },
   {
    "fr": "Ce plan inclut les consultations, les examens et l'hospitalisation.",
    "pt": "Esse plano inclui consultas, exames e internação."
   },
   {
    "fr": "Il y a un délai de carence de six mois pour certaines interventions.",
    "pt": "Tem uma carência de seis meses para algumas cirurgias."
   },
   {
    "fr": "Dès que je recevrai ma carte, je prendrai rendez-vous chez le dentiste.",
    "pt": "Assim que eu receber minha carteirinha, vou marcar consulta no dentista."
   },
   {
    "fr": "Mon entreprise paie une partie de la mensualité.",
    "pt": "Minha empresa paga uma parte da mensalidade."
   },
   {
    "fr": "Quand vous voudrez changer de plan, prévenez-nous un mois avant.",
    "pt": "Quando você quiser trocar de plano, avise a gente com um mês de antecedência."
   },
   {
    "fr": "La santé, c'est vraiment la dernière chose sur laquelle économiser.",
    "pt": "Saúde é realmente a última coisa em que se deve economizar."
   }
  ],
  "tip": {
   "title": "« Quando eu tiver… / Se você puder… » : le futur du subjonctif",
   "example": "Quand j'aurai un contrat fixe, je prendrai un plan de santé privé. — Quando eu <b>tiver</b> um contrato fixo, vou contratar um plano de saúde particular.",
   "body": "Ce temps n'existe pas en français : après quando, se, assim que ou enquanto, pour parler d'une action future, le portugais utilise le futur du subjonctif là où le français met un futur ou un présent. On le forme à partir du passé simple à la troisième personne du pluriel, sans -am : tiveram donne tiver, puderam donne puder, quiseram donne quiser. Exemples : se você puder (si tu peux), quando ele chegar (quand il arrivera)."
  }
 },
 {
  "title": "Une matinée au cartório",
  "phrases": [
   {
    "fr": "Je dois faire authentifier ma signature au cartório.",
    "pt": "Preciso reconhecer firma no cartório."
   },
   {
    "fr": "Au Brésil, beaucoup de démarches exigent encore des copies certifiées.",
    "pt": "No Brasil, muitos trâmites ainda exigem cópias autenticadas."
   },
   {
    "fr": "La file d'attente était énorme dès huit heures du matin.",
    "pt": "A fila já estava enorme às oito horas da manhã."
   },
   {
    "fr": "On m'a donné un ticket avec un numéro et j'ai attendu une heure.",
    "pt": "Me deram uma senha e eu esperei uma hora."
   },
   {
    "fr": "Le guichetier m'a demandé de revenir avec un justificatif de domicile.",
    "pt": "O atendente pediu para eu voltar com um comprovante de residência."
   },
   {
    "fr": "Cette bureaucratie me rend parfois complètement fou.",
    "pt": "Essa burocracia às vezes me deixa completamente louco."
   },
   {
    "fr": "Heureusement, certains services sont désormais disponibles en ligne.",
    "pt": "Felizmente, alguns serviços agora estão disponíveis on-line."
   },
   {
    "fr": "Il faut payer une petite taxe pour chaque document.",
    "pt": "É preciso pagar uma pequena taxa por cada documento."
   },
   {
    "fr": "Mon voisin m'a conseillé d'y aller juste après le déjeuner.",
    "pt": "Meu vizinho me aconselhou a ir logo depois do almoço."
   },
   {
    "fr": "Finalement, je suis reparti avec tous mes papiers en règle.",
    "pt": "No fim, saí de lá com todos os documentos em ordem."
   }
  ]
 },
 {
  "title": "La réunion du condomínio",
  "phrases": [
   {
    "fr": "Le syndic a convoqué une réunion pour nous, les copropriétaires, jeudi soir.",
    "pt": "O síndico convocou uma reunião para nós, condôminos, na quinta à noite."
   },
   {
    "fr": "Il faut voter avant de commencer les travaux de la façade.",
    "pt": "É preciso votar antes de começarem as obras da fachada."
   },
   {
    "fr": "Le gardien a demandé une augmentation pour que nous la discutions.",
    "pt": "O porteiro pediu um aumento para nós discutirmos."
   },
   {
    "fr": "Il est temps que les voisins participent davantage.",
    "pt": "Está na hora de os vizinhos participarem mais."
   },
   {
    "fr": "Certains se plaignent du bruit dans la salle des fêtes.",
    "pt": "Alguns reclamam do barulho no salão de festas."
   },
   {
    "fr": "La proposition a été approuvée à la majorité.",
    "pt": "A proposta foi aprovada pela maioria."
   },
   {
    "fr": "Les charges vont augmenter un peu l'année prochaine.",
    "pt": "O condomínio vai ficar um pouco mais caro no ano que vem."
   },
   {
    "fr": "J'ai suggéré d'installer des panneaux solaires sur le toit.",
    "pt": "Sugeri instalar placas solares no telhado."
   },
   {
    "fr": "Le syndic nous a demandé de voter avant de partir.",
    "pt": "O síndico pediu para a gente votar antes de ir embora."
   },
   {
    "fr": "Comme toujours, la réunion a duré bien plus longtemps que prévu.",
    "pt": "Como sempre, a reunião durou bem mais do que o previsto."
   }
  ],
  "tip": {
   "title": "« Para a gente fazer / antes de eles chegarem » : l'infinitif personnel",
   "example": "Il faut voter avant de commencer les travaux de la façade. — É preciso votar antes de <b>começarem</b> as obras da fachada.",
   "body": "Particularité du portugais : l'infinitif peut se conjuguer pour préciser qui fait l'action. On ajoute -mos pour nós (fazermos), -em pour eles (fazerem), et rien pour eu, você, a gente. On l'emploie surtout après une préposition : para nós discutirmos (pour que nous discutions), antes de eles chegarem (avant qu'ils arrivent). Là où le français doit utiliser « que » + subjonctif, le portugais reste à l'infinitif."
  }
 },
 {
  "title": "Le trafic sur l'Eixo Monumental",
  "phrases": [
   {
    "fr": "Brasília a été pensée pour la voiture, et ça se sent tous les jours.",
    "pt": "Brasília foi pensada para o carro, e isso se sente todos os dias."
   },
   {
    "fr": "Aux heures de pointe, les grands axes sont complètement saturés.",
    "pt": "No horário de pico, os eixos principais ficam completamente engarrafados."
   },
   {
    "fr": "Je mets presque une heure pour traverser la ville.",
    "pt": "Levo quase uma hora para atravessar a cidade."
   },
   {
    "fr": "À São Paulo, la circulation alternée interdit certaines plaques selon le jour.",
    "pt": "Em São Paulo, o rodízio proíbe algumas placas dependendo do dia."
   },
   {
    "fr": "Ma voiture ne peut pas circuler le mardi dans le centre.",
    "pt": "Meu carro não pode rodar na terça no centro."
   },
   {
    "fr": "J'ai fini par adopter le vélo pour les petits trajets.",
    "pt": "Acabei adotando a bicicleta para os trajetos curtos."
   },
   {
    "fr": "Les amendes pour excès de vitesse arrivent directement par courrier.",
    "pt": "As multas por excesso de velocidade chegam direto pelo correio."
   },
   {
    "fr": "On parle depuis longtemps d'agrandir le réseau de métro.",
    "pt": "Faz tempo que se fala em ampliar a rede de metrô."
   },
   {
    "fr": "Le covoiturage avec des collègues nous fait gagner du temps.",
    "pt": "A carona com os colegas faz a gente ganhar tempo."
   },
   {
    "fr": "Avec un peu de musique, les embouteillages passent plus vite.",
    "pt": "Com uma musiquinha, o trânsito passa mais rápido."
   }
  ]
 },
 {
  "title": "Négocier une augmentation",
  "phrases": [
   {
    "fr": "J'ai demandé un rendez-vous à ma responsable pour parler de mon salaire.",
    "pt": "Pedi uma reunião com a minha gestora para falar do meu salário."
   },
   {
    "fr": "Elle m'a dit qu'elle analyserait ma demande avec les ressources humaines.",
    "pt": "Ela me disse que ia analisar meu pedido com o RH."
   },
   {
    "fr": "J'ai préparé une liste de mes résultats de l'année.",
    "pt": "Preparei uma lista dos meus resultados do ano."
   },
   {
    "fr": "Mes responsabilités ont beaucoup augmenté depuis mon arrivée.",
    "pt": "Minhas responsabilidades aumentaram muito desde que eu cheguei."
   },
   {
    "fr": "Je pense mériter une revalorisation au-dessus de l'inflation.",
    "pt": "Acho que mereço um reajuste acima da inflação."
   },
   {
    "fr": "Si l'augmentation n'est pas possible, j'accepterais plus de jours de télétravail.",
    "pt": "Se o aumento não for possível, eu aceitaria mais dias de home office."
   },
   {
    "fr": "Elle a reconnu que mon travail était excellent.",
    "pt": "Ela reconheceu que o meu trabalho era excelente."
   },
   {
    "fr": "La réponse définitive arrivera à la fin du trimestre.",
    "pt": "A resposta definitiva vai sair no fim do trimestre."
   },
   {
    "fr": "Il ne faut jamais avoir honte de défendre sa valeur.",
    "pt": "Nunca se deve ter vergonha de defender o próprio valor."
   },
   {
    "fr": "Je suis sorti de la réunion plutôt confiant.",
    "pt": "Saí da reunião bem confiante."
   }
  ]
 },
 {
  "title": "La rénovation de la cuisine",
  "phrases": [
   {
    "fr": "Notre cuisine a été entièrement refaite le mois dernier.",
    "pt": "Nossa cozinha foi totalmente reformada no mês passado."
   },
   {
    "fr": "Le vieux carrelage a été retiré en une seule journée.",
    "pt": "O piso antigo foi retirado em um dia só."
   },
   {
    "fr": "Les meubles ont été fabriqués sur mesure par un menuisier du quartier.",
    "pt": "Os móveis foram feitos sob medida por um marceneiro do bairro."
   },
   {
    "fr": "Ici, on loue souvent les appartements sans meubles de cuisine.",
    "pt": "Aqui, alugam-se muitos apartamentos sem armários na cozinha."
   },
   {
    "fr": "Le devis a été approuvé après une longue négociation.",
    "pt": "O orçamento foi aprovado depois de uma longa negociação."
   },
   {
    "fr": "Malheureusement, les travaux ont pris deux semaines de retard.",
    "pt": "Infelizmente, a obra atrasou duas semanas."
   },
   {
    "fr": "La poussière s'est installée partout dans la maison.",
    "pt": "A poeira se espalhou pela casa inteira."
   },
   {
    "fr": "Le plan de travail en granit a été posé hier.",
    "pt": "A bancada de granito foi instalada ontem."
   },
   {
    "fr": "On vend ce genre de matériaux beaucoup moins cher en périphérie.",
    "pt": "Vende-se esse tipo de material bem mais barato na periferia."
   },
   {
    "fr": "Le résultat a dépassé toutes nos attentes.",
    "pt": "O resultado superou todas as nossas expectativas."
   }
  ],
  "tip": {
   "title": "« Foi construído / vende-se » : la voix passive",
   "example": "Notre cuisine a été entièrement refaite le mois dernier. — Nossa cozinha <b>foi</b> totalmente <b>reformada</b> no mês passado.",
   "body": "Le passif se forme comme en français, avec ser + participe passé accordé : a cozinha foi reformada, os móveis foram feitos. Le portugais utilise aussi beaucoup le passif avec « se », très courant sur les panneaux : vende-se (à vendre), aluga-se (à louer), precisa-se de funcionário (on recherche un employé). À l'oral brésilien, on dit souvent simplement « se aluga » ou on utilise une tournure active."
  }
 },
 {
  "title": "Un désaccord avec un collègue",
  "phrases": [
   {
    "fr": "Un malentendu est apparu avec un collègue sur un projet important.",
    "pt": "Surgiu um mal-entendido com um colega sobre um projeto importante."
   },
   {
    "fr": "Nous avons décidé d'en parler seul à seul autour d'un café.",
    "pt": "Decidimos conversar a sós, tomando um cafezinho."
   },
   {
    "fr": "Il pensait que je voulais m'attribuer tout le mérite.",
    "pt": "Ele achava que eu queria levar todo o crédito."
   },
   {
    "fr": "Je lui ai expliqué calmement mon point de vue.",
    "pt": "Expliquei para ele, com calma, o meu ponto de vista."
   },
   {
    "fr": "Il m'a écouté sans m'interrompre une seule fois.",
    "pt": "Ele me ouviu sem me interromper nenhuma vez."
   },
   {
    "fr": "Au Brésil, on évite souvent les confrontations directes au travail.",
    "pt": "No Brasil, a gente costuma evitar confrontos diretos no trabalho."
   },
   {
    "fr": "On a fini par trouver un compromis qui convenait à tous les deux.",
    "pt": "Acabamos encontrando um meio-termo bom para os dois."
   },
   {
    "fr": "Depuis, notre collaboration s'est nettement améliorée.",
    "pt": "Desde então, nossa parceria melhorou bastante."
   },
   {
    "fr": "Parler franchement évite que les tensions s'accumulent.",
    "pt": "Falar com franqueza evita que as tensões se acumulem."
   },
   {
    "fr": "Aujourd'hui, on déjeune même ensemble le vendredi.",
    "pt": "Hoje a gente até almoça junto na sexta-feira."
   }
  ]
 },
 {
  "title": "Le télétravail au quotidien",
  "phrases": [
   {
    "fr": "Je travaille de chez moi trois jours par semaine.",
    "pt": "Trabalho de casa três dias por semana."
   },
   {
    "fr": "J'ai aménagé un petit bureau dans la chambre d'amis.",
    "pt": "Montei um pequeno escritório no quarto de hóspedes."
   },
   {
    "fr": "Le plus difficile, c'est de séparer la vie privée du travail.",
    "pt": "O mais difícil é separar a vida pessoal do trabalho."
   },
   {
    "fr": "Je m'impose des horaires fixes pour ne pas déborder.",
    "pt": "Eu me imponho horários fixos para não passar do limite."
   },
   {
    "fr": "Les coupures d'internet pendant les orages sont mon pire cauchemar.",
    "pt": "A queda da internet durante as tempestades é o meu pior pesadelo."
   },
   {
    "fr": "Je profite de la pause déjeuner pour aller marcher au parc Barigui.",
    "pt": "Aproveito a hora do almoço para caminhar no Parque Barigui."
   },
   {
    "fr": "Les visioconférences me fatiguent plus que les réunions en personne.",
    "pt": "As videochamadas me cansam mais do que as reuniões presenciais."
   },
   {
    "fr": "Mon chat adore apparaître à l'écran pendant les appels.",
    "pt": "Meu gato adora aparecer na tela durante as chamadas."
   },
   {
    "fr": "Je gagne deux heures de transport chaque jour.",
    "pt": "Ganho duas horas de deslocamento por dia."
   },
   {
    "fr": "Malgré tout, mes collègues me manquent parfois.",
    "pt": "Mesmo assim, às vezes sinto falta dos meus colegas."
   }
  ]
 },
 {
  "title": "Un dégât des eaux",
  "phrases": [
   {
    "fr": "Une fuite chez le voisin du dessus a abîmé notre plafond.",
    "pt": "Um vazamento no apartamento de cima estragou o nosso teto."
   },
   {
    "fr": "Nous avons tout de suite prévenu le syndic de l'immeuble.",
    "pt": "Avisamos o síndico do prédio na mesma hora."
   },
   {
    "fr": "Un plombier est venu couper l'eau en urgence.",
    "pt": "Um encanador veio fechar o registro com urgência."
   },
   {
    "fr": "L'assurance habitation enverra un expert cette semaine.",
    "pt": "O seguro residencial vai mandar um perito esta semana."
   },
   {
    "fr": "Il faut prendre des photos de tous les dégâts.",
    "pt": "É preciso tirar fotos de todos os estragos."
   },
   {
    "fr": "Le voisin s'est excusé et a promis de tout payer.",
    "pt": "O vizinho pediu desculpas e prometeu pagar tudo."
   },
   {
    "fr": "La peinture devra être refaite dans tout le salon.",
    "pt": "A pintura vai ter que ser refeita na sala inteira."
   },
   {
    "fr": "En attendant, nous avons déplacé les meubles dans la chambre.",
    "pt": "Enquanto isso, levamos os móveis para o quarto."
   },
   {
    "fr": "L'humidité a laissé une odeur désagréable pendant des jours.",
    "pt": "A umidade deixou um cheiro ruim por vários dias."
   },
   {
    "fr": "Au final, tout a été réglé sans dispute.",
    "pt": "No fim, tudo foi resolvido sem briga."
   }
  ]
 },
 {
  "title": "Rêver d'acheter un appartement",
  "phrases": [
   {
    "fr": "Si j'avais assez d'économies, j'achèterais un appartement à Brasília.",
    "pt": "Se eu tivesse economias suficientes, compraria um apartamento em Brasília."
   },
   {
    "fr": "Les taux du crédit immobilier sont encore très élevés.",
    "pt": "Os juros do financiamento imobiliário ainda estão muito altos."
   },
   {
    "fr": "Si les taux baissaient, nous demanderions un prêt tout de suite.",
    "pt": "Se os juros baixassem, a gente pediria um financiamento na hora."
   },
   {
    "fr": "La banque exige un apport d'au moins vingt pour cent.",
    "pt": "O banco exige uma entrada de pelo menos vinte por cento."
   },
   {
    "fr": "On pourrait aussi utiliser notre épargne salariale pour l'apport.",
    "pt": "A gente também poderia usar o FGTS para a entrada."
   },
   {
    "fr": "Si j'étais toi, je visiterais au moins dix appartements.",
    "pt": "Se eu fosse você, visitaria pelo menos dez apartamentos."
   },
   {
    "fr": "Un appartement près du lac Paranoá serait un rêve.",
    "pt": "Um apartamento perto do Lago Paranoá seria um sonho."
   },
   {
    "fr": "Si nous trouvions le bon bien, nous signerions sans hésiter.",
    "pt": "Se a gente encontrasse o imóvel certo, assinaria sem pensar duas vezes."
   },
   {
    "fr": "Un courtier nous aide à comparer les offres des banques.",
    "pt": "Um corretor está ajudando a gente a comparar as propostas dos bancos."
   },
   {
    "fr": "Être propriétaire, ce serait enfin se sentir chez soi.",
    "pt": "Ter a casa própria seria finalmente se sentir em casa."
   }
  ],
  "tip": {
   "title": "« Se eu tivesse… eu compraria » : l'hypothèse irréelle",
   "example": "Si j'avais assez d'économies, j'achèterais un appartement à Brasília. — Se eu <b>tivesse</b> economias suficientes, <b>compraria</b> um apartamento em Brasília.",
   "body": "Pour une hypothèse peu probable ou imaginaire, le portugais met le subjonctif imparfait après « se », là où le français met l'imparfait : se eu tivesse (si j'avais), se eu fosse (si j'étais), se os juros baixassem (si les taux baissaient). La conséquence est au conditionnel, comme en français : compraria, pediria, seria. À l'oral, beaucoup de Brésiliens remplacent le conditionnel par l'imparfait : se eu tivesse dinheiro, comprava uma casa."
  }
 },
 {
  "title": "Le tri sélectif à Curitiba",
  "phrases": [
   {
    "fr": "Curitiba est connue depuis longtemps pour son programme de recyclage.",
    "pt": "Curitiba é conhecida há muito tempo pelo seu programa de reciclagem."
   },
   {
    "fr": "Chez nous, on sépare le recyclable des déchets organiques.",
    "pt": "Lá em casa, a gente separa o lixo reciclável do orgânico."
   },
   {
    "fr": "Le camion de collecte sélective passe le mercredi matin.",
    "pt": "O caminhão da coleta seletiva passa na quarta de manhã."
   },
   {
    "fr": "Il existait autrefois un échange de déchets contre des fruits et légumes.",
    "pt": "Antigamente existia uma troca de lixo por frutas e verduras."
   },
   {
    "fr": "Les ramasseurs de matériaux recyclables jouent un rôle essentiel.",
    "pt": "Os catadores de materiais recicláveis têm um papel essencial."
   },
   {
    "fr": "Nous avons installé un composteur sur la terrasse.",
    "pt": "Instalamos uma composteira na varanda."
   },
   {
    "fr": "Les huiles de cuisson usagées se déposent dans un point de collecte.",
    "pt": "O óleo de cozinha usado deve ser levado a um ponto de coleta."
   },
   {
    "fr": "Les enfants apprennent à recycler dès l'école primaire.",
    "pt": "As crianças aprendem a reciclar desde o ensino fundamental."
   },
   {
    "fr": "Réduire le plastique demande un vrai changement d'habitudes.",
    "pt": "Reduzir o plástico exige uma verdadeira mudança de hábitos."
   },
   {
    "fr": "Chaque petit geste compte vraiment pour la planète.",
    "pt": "Cada pequeno gesto realmente conta para o planeta."
   }
  ]
 },
 {
  "title": "Prendre soin de ses parents",
  "phrases": [
   {
    "fr": "Depuis que ma mère s'est cassé la jambe, nous nous relayons auprès d'elle.",
    "pt": "Desde que minha mãe quebrou a perna, a gente se reveza para cuidar dela."
   },
   {
    "fr": "Mon frère s'occupe des rendez-vous médicaux.",
    "pt": "Meu irmão cuida das consultas médicas."
   },
   {
    "fr": "Moi, je fais les courses et je l'appelle tous les soirs.",
    "pt": "Eu faço as compras e ligo para ela todas as noites."
   },
   {
    "fr": "Au Brésil, il est courant que plusieurs générations vivent ensemble.",
    "pt": "No Brasil, é comum várias gerações morarem juntas."
   },
   {
    "fr": "Nous avons engagé une aide-soignante pour les après-midi.",
    "pt": "Contratamos uma cuidadora para as tardes."
   },
   {
    "fr": "Ma mère refuse catégoriquement d'aller en maison de retraite.",
    "pt": "Minha mãe se recusa terminantemente a ir para uma casa de repouso."
   },
   {
    "fr": "Il faut respecter son désir d'autonomie autant que possible.",
    "pt": "É preciso respeitar o desejo de independência dela o máximo possível."
   },
   {
    "fr": "Ces moments difficiles ont rapproché toute la famille.",
    "pt": "Esses momentos difíceis aproximaram a família inteira."
   },
   {
    "fr": "Le dimanche, nous déjeunons tous chez elle.",
    "pt": "No domingo, a gente almoça todo mundo na casa dela."
   },
   {
    "fr": "Elle dit que nous la gâtons beaucoup trop.",
    "pt": "Ela diz que a gente a mima demais."
   }
  ]
 },
 {
  "title": "Le vote obligatoire",
  "phrases": [
   {
    "fr": "Au Brésil, le vote est obligatoire de dix-huit à soixante-dix ans.",
    "pt": "No Brasil, o voto é obrigatório dos dezoito aos setenta anos."
   },
   {
    "fr": "Celui qui ne vote pas doit justifier son absence.",
    "pt": "Quem não vota precisa justificar a ausência."
   },
   {
    "fr": "Les urnes électroniques donnent les résultats en quelques heures.",
    "pt": "As urnas eletrônicas dão o resultado em poucas horas."
   },
   {
    "fr": "Mes voisins discutent politique avec beaucoup de passion.",
    "pt": "Meus vizinhos discutem política com muita paixão."
   },
   {
    "fr": "Les débats télévisés attirent des millions de spectateurs.",
    "pt": "Os debates na televisão atraem milhões de espectadores."
   },
   {
    "fr": "Certains pensent que le vote devrait être facultatif.",
    "pt": "Alguns acham que o voto deveria ser facultativo."
   },
   {
    "fr": "D'autres estiment qu'il renforce la participation citoyenne.",
    "pt": "Outros acham que ele fortalece a participação cidadã."
   },
   {
    "fr": "Le jour du scrutin, les écoles servent de bureaux de vote.",
    "pt": "No dia da eleição, as escolas funcionam como seções eleitorais."
   },
   {
    "fr": "Mieux vaut éviter de parler politique au déjeuner de famille.",
    "pt": "É melhor evitar falar de política no almoço de família."
   },
   {
    "fr": "En tant qu'étranger, j'observe tout cela avec curiosité.",
    "pt": "Como estrangeiro, observo tudo isso com curiosidade."
   }
  ]
 },
 {
  "title": "Le jardin potager du quartier",
  "phrases": [
   {
    "fr": "Notre association de quartier a créé un potager communautaire.",
    "pt": "A associação do nosso bairro criou uma horta comunitária."
   },
   {
    "fr": "Chaque famille cultive sa petite parcelle de légumes.",
    "pt": "Cada família cultiva o seu canteiro de verduras."
   },
   {
    "fr": "On y plante du manioc, des herbes aromatiques et des tomates.",
    "pt": "Lá a gente planta mandioca, temperos e tomate."
   },
   {
    "fr": "Les outils sont partagés entre tous les voisins.",
    "pt": "As ferramentas são compartilhadas entre todos os vizinhos."
   },
   {
    "fr": "Le samedi matin, on organise des corvées collectives.",
    "pt": "No sábado de manhã, a gente organiza mutirões."
   },
   {
    "fr": "Les plus âgés transmettent leurs connaissances aux enfants.",
    "pt": "Os mais velhos passam o seu conhecimento para as crianças."
   },
   {
    "fr": "Avec le soleil, tout pousse incroyablement vite ici.",
    "pt": "Com esse sol, tudo cresce incrivelmente rápido aqui."
   },
   {
    "fr": "Nous échangeons souvent nos récoltes contre des confitures maison.",
    "pt": "A gente costuma trocar a colheita por doces caseiros."
   },
   {
    "fr": "Ce jardin a transformé un terrain vague abandonné.",
    "pt": "Essa horta transformou um terreno baldio abandonado."
   },
   {
    "fr": "Je n'aurais jamais cru aimer autant jardiner.",
    "pt": "Nunca imaginei que fosse gostar tanto de mexer com a terra."
   }
  ]
 },
 {
  "title": "Le bazar solidaire",
  "phrases": [
   {
    "fr": "L'église du quartier organise un bazar solidaire deux fois par an.",
    "pt": "A igreja do bairro organiza um bazar beneficente duas vezes por ano."
   },
   {
    "fr": "On y vend des vêtements, des livres et des objets d'occasion.",
    "pt": "Lá se vendem roupas, livros e objetos usados."
   },
   {
    "fr": "Tout l'argent récolté va à une crèche du quartier.",
    "pt": "Todo o dinheiro arrecadado vai para uma creche do bairro."
   },
   {
    "fr": "J'ai enfin vidé mon placard des vêtements que je ne mettais plus.",
    "pt": "Finalmente esvaziei meu armário das roupas que eu não usava mais."
   },
   {
    "fr": "Ma voisine a trouvé un vieux tourne-disque pour presque rien.",
    "pt": "Minha vizinha achou uma vitrola antiga por quase nada."
   },
   {
    "fr": "Ici, marchander fait partie du jeu.",
    "pt": "Aqui, pechinchar faz parte da brincadeira."
   },
   {
    "fr": "Il y avait aussi des gâteaux et du café pour les visiteurs.",
    "pt": "Também tinha bolo e café para os visitantes."
   },
   {
    "fr": "Les enfants vendaient eux-mêmes leurs anciens jouets.",
    "pt": "As crianças vendiam elas mesmas os brinquedos antigos."
   },
   {
    "fr": "C'est une belle occasion de rencontrer les gens du quartier.",
    "pt": "É uma ótima oportunidade de conhecer o pessoal do bairro."
   },
   {
    "fr": "Je suis reparti avec plus d'objets que je n'en avais apporté.",
    "pt": "Voltei para casa com mais coisas do que eu tinha levado."
   }
  ]
 },
 {
  "title": "Réflexions sur la vie au Brésil",
  "phrases": [
   {
    "fr": "S'installer dans un nouveau pays demande beaucoup de patience.",
    "pt": "Se mudar para um país novo exige muita paciência."
   },
   {
    "fr": "La langue reste la clé pour vraiment comprendre les gens.",
    "pt": "A língua continua sendo a chave para entender as pessoas de verdade."
   },
   {
    "fr": "Les Brésiliens sont accueillants, mais l'amitié profonde prend du temps.",
    "pt": "Os brasileiros são acolhedores, mas a amizade profunda leva tempo."
   },
   {
    "fr": "J'ai dû m'habituer à ce qu'on arrive en retard aux fêtes.",
    "pt": "Tive que me acostumar com o pessoal chegando atrasado nas festas."
   },
   {
    "fr": "Le fameux « jeitinho » m'a surpris au début.",
    "pt": "O famoso jeitinho brasileiro me surpreendeu no começo."
   },
   {
    "fr": "Aujourd'hui, je ne pourrais plus vivre sans le pão de queijo du matin.",
    "pt": "Hoje, eu não conseguiria mais viver sem o pão de queijo de manhã."
   },
   {
    "fr": "Il y a des jours où ma famille me manque terriblement.",
    "pt": "Tem dias em que sinto uma falta enorme da minha família."
   },
   {
    "fr": "Les Brésiliens ont même un mot pour ce sentiment : la saudade.",
    "pt": "Os brasileiros têm até uma palavra para esse sentimento: saudade."
   },
   {
    "fr": "Je me sens désormais un peu d'ici et un peu de là-bas.",
    "pt": "Agora me sinto um pouco daqui e um pouco de lá."
   },
   {
    "fr": "Si c'était à refaire, je recommencerais sans hésiter.",
    "pt": "Se fosse para fazer de novo, eu faria tudo outra vez sem hesitar."
   }
  ]
 },
 {
  "title": "Un churrasco entre voisins",
  "phrases": [
   {
    "fr": "Nos voisins ont organisé un churrasco dans la salle des fêtes de l'immeuble.",
    "pt": "Nossos vizinhos organizaram um churrasco no salão de festas do prédio."
   },
   {
    "fr": "Chacun a apporté quelque chose à manger ou à boire.",
    "pt": "Cada um levou alguma coisa para comer ou beber."
   },
   {
    "fr": "Le voisin du troisième étage s'est chargé du barbecue.",
    "pt": "O vizinho do terceiro andar ficou responsável pela churrasqueira."
   },
   {
    "fr": "La picanha était cuite à la perfection.",
    "pt": "A picanha estava no ponto perfeito."
   },
   {
    "fr": "On a cotisé pour acheter la viande et le charbon.",
    "pt": "A gente fez uma vaquinha para comprar a carne e o carvão."
   },
   {
    "fr": "Quelqu'un a sorti une guitare et tout le monde s'est mis à chanter.",
    "pt": "Alguém pegou um violão e todo mundo começou a cantar."
   },
   {
    "fr": "Les enfants couraient partout autour de la piscine.",
    "pt": "As crianças corriam para todo lado em volta da piscina."
   },
   {
    "fr": "Nous avons ri en nous rappelant nos débuts dans l'immeuble.",
    "pt": "A gente riu lembrando dos nossos primeiros tempos no prédio."
   },
   {
    "fr": "La fête s'est terminée bien après minuit.",
    "pt": "A festa terminou bem depois da meia-noite."
   },
   {
    "fr": "On a promis de recommencer au prochain anniversaire.",
    "pt": "A gente prometeu repetir no próximo aniversário."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan",
  "phrases": [
   {
    "fr": "Ce module nous a fait entrer dans un quotidien brésilien bien plus profond.",
    "pt": "Este módulo fez a gente entrar num cotidiano brasileiro bem mais profundo."
   },
   {
    "fr": "Nous avons abordé des sujets administratifs et sociaux plutôt complexes.",
    "pt": "Tratamos de assuntos administrativos e sociais bem complexos."
   },
   {
    "fr": "Le subjonctif commence enfin à devenir naturel.",
    "pt": "O subjuntivo está finalmente começando a ficar natural."
   },
   {
    "fr": "Quand tu entendras « quando eu tiver », tu sauras l'utiliser.",
    "pt": "Quando você ouvir « quando eu tiver », vai saber usar."
   },
   {
    "fr": "La voix passive n'a plus de secret pour toi.",
    "pt": "A voz passiva não tem mais segredo para você."
   },
   {
    "fr": "Tu peux maintenant parler d'impôts, de loyer et de travaux en portugais.",
    "pt": "Agora você consegue falar de impostos, aluguel e obras em português."
   },
   {
    "fr": "Il est normal que certaines tournures demandent encore de la pratique.",
    "pt": "É normal que algumas construções ainda exijam prática."
   },
   {
    "fr": "Si tu continues à ce rythme, tu parleras comme un vrai Brésilien.",
    "pt": "Se você continuar nesse ritmo, vai falar como um brasileiro de verdade."
   },
   {
    "fr": "Prends le temps de réécouter les leçons les plus difficiles.",
    "pt": "Tire um tempo para ouvir de novo as lições mais difíceis."
   },
   {
    "fr": "Bravo pour tout ce chemin parcouru en portugais !",
    "pt": "Parabéns por todo esse caminho percorrido em português!"
   }
  ]
 }
];

const level3Module2Lessons = [
 {
  "title": "Remonter le rio Negro en bateau",
  "phrases": [
   {
    "fr": "Nous quittons Manaus à l'aube pour remonter le rio Negro.",
    "pt": "Saímos de Manaus de madrugada para subir o rio Negro."
   },
   {
    "fr": "Plus on s'éloigne de la ville, plus la forêt devient dense.",
    "pt": "Quanto mais a gente se afasta da cidade, mais a floresta fica densa."
   },
   {
    "fr": "L'eau est si sombre qu'on dirait du thé très fort.",
    "pt": "A água é tão escura que parece um chá bem forte."
   },
   {
    "fr": "Notre guide a grandi dans une communauté au bord du fleuve.",
    "pt": "O nosso guia cresceu numa comunidade na beira do rio."
   },
   {
    "fr": "Il connaît chaque bras du fleuve comme sa poche.",
    "pt": "Ele conhece cada braço do rio como a palma da mão."
   },
   {
    "fr": "Pendant la saison des pluies, la forêt est en partie inondée.",
    "pt": "Na época das chuvas, a floresta fica parcialmente alagada."
   },
   {
    "fr": "On navigue parfois entre la cime des arbres.",
    "pt": "Às vezes a gente navega entre as copas das árvores."
   },
   {
    "fr": "Il n'y a presque pas de moustiques sur ce fleuve, c'est surprenant.",
    "pt": "Quase não tem mosquito neste rio, é surpreendente."
   },
   {
    "fr": "Le réseau téléphonique a disparu depuis plusieurs heures.",
    "pt": "O sinal do celular sumiu faz várias horas."
   },
   {
    "fr": "Ce silence absolu est exactement ce que nous étions venus chercher.",
    "pt": "Esse silêncio absoluto é exatamente o que a gente veio buscar."
   }
  ]
 },
 {
  "title": "Le Teatro Amazonas de Manaus",
  "phrases": [
   {
    "fr": "Ce théâtre a été construit au cœur de la forêt à l'époque du caoutchouc.",
    "pt": "Esse teatro foi construído no coração da floresta na época da borracha."
   },
   {
    "fr": "Je n'avais jamais imaginé un opéra aussi luxueux en pleine Amazonie.",
    "pt": "Eu nunca tinha imaginado uma ópera tão luxuosa no meio da Amazônia."
   },
   {
    "fr": "Une grande partie des matériaux avait été importée par bateau.",
    "pt": "Grande parte dos materiais tinha sido importada de navio."
   },
   {
    "fr": "Quand nous sommes arrivés, la visite guidée avait déjà commencé.",
    "pt": "Quando a gente chegou, a visita guiada já tinha começado."
   },
   {
    "fr": "Le guide nous a montré la coupole aux couleurs du drapeau brésilien.",
    "pt": "O guia mostrou para a gente a cúpula com as cores da bandeira do Brasil."
   },
   {
    "fr": "Le sol de la place devant le théâtre imite les vagues du fleuve.",
    "pt": "O calçadão da praça em frente ao teatro imita as ondas do rio."
   },
   {
    "fr": "La ville était devenue très riche en quelques décennies seulement.",
    "pt": "A cidade tinha ficado muito rica em poucas décadas."
   },
   {
    "fr": "Puis tout s'est effondré quand le prix du caoutchouc a chuté.",
    "pt": "Depois tudo desabou quando o preço da borracha despencou."
   },
   {
    "fr": "Ce soir, il y a un concert gratuit de l'orchestre local.",
    "pt": "Hoje à noite tem um concerto gratuito da orquestra local."
   },
   {
    "fr": "Cette visite donne une tout autre image de l'Amazonie.",
    "pt": "Essa visita dá uma imagem totalmente diferente da Amazônia."
   }
  ],
  "tip": {
   "title": "Le plus-que-parfait : « tinha + particípio »",
   "example": "Je n'avais jamais imaginé un opéra aussi luxueux en pleine Amazonie. — Eu nunca <b>tinha imaginado</b> uma ópera tão luxuosa no meio da Amazônia.",
   "body": "Pour exprimer une action antérieure à une autre action passée, le portugais du Brésil utilise surtout « ter » à l'imparfait + participe passé, exactement comme notre « avais + participe ». On dit : eu tinha visto (j'avais vu), ela tinha chegado (elle était arrivée), a gente tinha saído (nous étions sortis). Attention : là où le français utilise « être », le portugais garde toujours « ter »."
  }
 },
 {
  "title": "Bénévolat dans une communauté riveraine",
  "phrases": [
   {
    "fr": "Nous passons une semaine dans une communauté riveraine du fleuve.",
    "pt": "A gente vai passar uma semana numa comunidade ribeirinha."
   },
   {
    "fr": "Le matin, nous aidons à rénover l'école du village.",
    "pt": "De manhã, a gente ajuda a reformar a escola da comunidade."
   },
   {
    "fr": "Les enfants viennent en classe en canoë.",
    "pt": "As crianças vêm para a aula de canoa."
   },
   {
    "fr": "Tout le village vit au rythme de la crue et de la décrue.",
    "pt": "A comunidade inteira vive no ritmo da cheia e da vazante."
   },
   {
    "fr": "Les maisons sont construites sur pilotis pour résister aux inondations.",
    "pt": "As casas são construídas sobre palafitas para aguentar as enchentes."
   },
   {
    "fr": "Une habitante m'a appris à préparer la farine de manioc.",
    "pt": "Uma moradora me ensinou a fazer farinha de mandioca."
   },
   {
    "fr": "On mange du poisson grillé presque à chaque repas.",
    "pt": "A gente come peixe assado em quase todas as refeições."
   },
   {
    "fr": "J'ai l'impression de recevoir bien plus que ce que je donne.",
    "pt": "Tenho a impressão de receber muito mais do que eu dou."
   },
   {
    "fr": "Ici, personne ne regarde l'heure, et pourtant tout se fait.",
    "pt": "Aqui ninguém olha o relógio, e mesmo assim tudo acontece."
   },
   {
    "fr": "Cette expérience a changé ma façon de voir le voyage.",
    "pt": "Essa experiência mudou o meu jeito de ver as viagens."
   }
  ]
 },
 {
  "title": "La rencontre des eaux",
  "phrases": [
   {
    "fr": "Le guide nous a dit qu'on allait voir deux fleuves qui ne se mélangent pas.",
    "pt": "O guia disse para a gente que a gente ia ver dois rios que não se misturam."
   },
   {
    "fr": "Il a expliqué que l'eau du rio Negro était plus chaude et plus lente.",
    "pt": "Ele explicou que a água do rio Negro era mais quente e mais lenta."
   },
   {
    "fr": "L'eau du Solimões, elle, est couleur café au lait.",
    "pt": "A água do Solimões, por sua vez, tem cor de café com leite."
   },
   {
    "fr": "Les deux eaux coulent côte à côte sur plusieurs kilomètres.",
    "pt": "As duas águas correm lado a lado por vários quilômetros."
   },
   {
    "fr": "Le capitaine a demandé si quelqu'un voulait toucher l'eau.",
    "pt": "O comandante perguntou se alguém queria tocar na água."
   },
   {
    "fr": "Ma fille m'a dit qu'elle n'oublierait jamais cette ligne parfaite.",
    "pt": "A minha filha me disse que nunca ia esquecer aquela linha perfeita."
   },
   {
    "fr": "On nous avait prévenus que des dauphins roses vivaient par ici.",
    "pt": "Tinham avisado a gente que botos-cor-de-rosa viviam por aqui."
   },
   {
    "fr": "Le guide a promis qu'il nous montrerait un endroit pour les observer.",
    "pt": "O guia prometeu que ia mostrar para a gente um lugar para observá-los."
   },
   {
    "fr": "Il a ajouté qu'il ne fallait surtout pas les nourrir.",
    "pt": "Ele acrescentou que não era para alimentá-los de jeito nenhum."
   },
   {
    "fr": "C'est un spectacle naturel qu'aucune photo ne peut vraiment rendre.",
    "pt": "É um espetáculo natural que nenhuma foto consegue mostrar de verdade."
   }
  ],
  "tip": {
   "title": "Le discours indirect : « ele disse que ia… »",
   "example": "Le guide nous a dit qu'on allait voir deux fleuves qui ne se mélangent pas. — O guia <b>disse</b> para a gente <b>que</b> a gente <b>ia ver</b> dois rios que não se misturam.",
   "body": "Pour rapporter des paroles au passé, on utilise « disse que » + un temps décalé, comme en français. Le futur devient souvent « ia + infinitif » à l'oral brésilien : « Vou voltar » devient « Ele disse que ia voltar » (il a dit qu'il allait revenir). Le présent devient imparfait : « Está frio » devient « Ela disse que estava frio »."
  }
 },
 {
  "title": "Une nuit en hamac sur un bateau régional",
  "phrases": [
   {
    "fr": "Pour descendre le fleuve, nous prenons un bateau régional.",
    "pt": "Para descer o rio, a gente pega um barco regional."
   },
   {
    "fr": "Il faut acheter son hamac avant d'embarquer.",
    "pt": "Tem que comprar a rede antes de embarcar."
   },
   {
    "fr": "Les passagers accrochent leurs hamacs les uns à côté des autres.",
    "pt": "Os passageiros penduram as redes uma do lado da outra."
   },
   {
    "fr": "Le voyage jusqu'à Santarém dure presque deux jours.",
    "pt": "A viagem até Santarém dura quase dois dias."
   },
   {
    "fr": "Au début, je n'arrivais pas à dormir avec le bruit du moteur.",
    "pt": "No começo, eu não conseguia dormir com o barulho do motor."
   },
   {
    "fr": "Mon voisin de hamac m'a raconté toute sa vie.",
    "pt": "O meu vizinho de rede me contou a vida inteira dele."
   },
   {
    "fr": "À chaque escale, des vendeurs montent avec des fruits et des gâteaux.",
    "pt": "Em cada parada, sobem vendedores com frutas e bolos."
   },
   {
    "fr": "Le coucher de soleil sur le fleuve est à couper le souffle.",
    "pt": "O pôr do sol no rio é de tirar o fôlego."
   },
   {
    "fr": "On apprend vite à vivre sans aucune intimité.",
    "pt": "A gente aprende rápido a viver sem nenhuma privacidade."
   },
   {
    "fr": "C'est la façon la plus authentique de traverser l'Amazonie.",
    "pt": "É o jeito mais autêntico de atravessar a Amazônia."
   }
  ]
 },
 {
  "title": "Observer les animaux au Pantanal",
  "phrases": [
   {
    "fr": "Le Pantanal est la plus grande plaine inondable du monde.",
    "pt": "O Pantanal é a maior planície alagável do mundo."
   },
   {
    "fr": "Ici, les animaux sont beaucoup plus faciles à voir qu'en forêt.",
    "pt": "Aqui os bichos são muito mais fáceis de ver do que na floresta."
   },
   {
    "fr": "Regarde ces dizaines de caïmans qui se chauffent au soleil.",
    "pt": "Olha aquelas dezenas de jacarés tomando sol."
   },
   {
    "fr": "Le tuiuiú est l'oiseau symbole de la région.",
    "pt": "O tuiuiú é a ave símbolo da região."
   },
   {
    "fr": "Nous dormons dans une fazenda transformée en auberge.",
    "pt": "A gente está dormindo numa fazenda transformada em pousada."
   },
   {
    "fr": "Les cow-boys locaux s'appellent les « peões pantaneiros ».",
    "pt": "Os vaqueiros da região se chamam peões pantaneiros."
   },
   {
    "fr": "Ce matin, nous avons accompagné un troupeau à cheval.",
    "pt": "Hoje de manhã, a gente acompanhou uma boiada a cavalo."
   },
   {
    "fr": "Le soir, on part en safari de nuit avec une lampe torche.",
    "pt": "À noite, a gente sai para uma focagem com lanterna."
   },
   {
    "fr": "Les capybaras traversent la piste sans même nous regarder.",
    "pt": "As capivaras atravessam a estrada sem nem olhar para a gente."
   },
   {
    "fr": "Je n'ai jamais vu autant d'animaux en une seule journée.",
    "pt": "Eu nunca vi tantos bichos num dia só."
   }
  ]
 },
 {
  "title": "À la recherche du jaguar",
  "phrases": [
   {
    "fr": "Bien que le jaguar soit très discret, on en voit souvent par ici.",
    "pt": "Embora a onça seja muito discreta, a gente vê várias por aqui."
   },
   {
    "fr": "Nous partons à l'aube en petit bateau sur le fleuve.",
    "pt": "A gente sai de madrugada num barquinho pelo rio."
   },
   {
    "fr": "Le guide reste optimiste, même si personne n'en a vu hier.",
    "pt": "O guia continua otimista, mesmo que ninguém tenha visto nenhuma ontem."
   },
   {
    "fr": "Après trois heures d'attente, quelqu'un murmure : « Là, sur la berge ! »",
    "pt": "Depois de três horas de espera, alguém sussurra: « Ali, na margem! »"
   },
   {
    "fr": "Un jaguar énorme se repose tranquillement à l'ombre.",
    "pt": "Uma onça enorme está descansando tranquila na sombra."
   },
   {
    "fr": "Même si nous étions très près, il ne semblait pas du tout dérangé.",
    "pt": "Embora a gente estivesse bem perto, ela não parecia nem um pouco incomodada."
   },
   {
    "fr": "Personne n'ose parler, de peur de le faire fuir.",
    "pt": "Ninguém tem coragem de falar, com medo de espantar a onça."
   },
   {
    "fr": "Bien qu'il fasse une chaleur écrasante, personne ne veut partir.",
    "pt": "Embora esteja um calor de rachar, ninguém quer ir embora."
   },
   {
    "fr": "Le guide nous rappelle de garder nos distances.",
    "pt": "O guia lembra a gente de manter distância."
   },
   {
    "fr": "Je tremblais encore d'émotion en rentrant à l'auberge.",
    "pt": "Eu ainda estava tremendo de emoção quando voltei para a pousada."
   }
  ],
  "tip": {
   "title": "« Embora » + subjonctif : bien que",
   "example": "Bien que le jaguar soit très discret, on en voit souvent par ici. — <b>Embora</b> a onça <b>seja</b> muito discreta, a gente vê várias por aqui.",
   "body": "« Embora » (bien que, quoique) est toujours suivi du subjonctif, comme en français : embora seja tarde (bien qu'il soit tard). Au passé, on passe au subjonctif imparfait : embora estivesse cansado (bien qu'il fût fatigué). À l'oral, les Brésiliens disent aussi « mesmo que » avec le même sens et la même règle."
  }
 },
 {
  "title": "Ouro Preto, l'ancienne ville de l'or",
  "phrases": [
   {
    "fr": "Ouro Preto a été la ville la plus riche du pays au dix-huitième siècle.",
    "pt": "Ouro Preto foi a cidade mais rica do país no século dezoito."
   },
   {
    "fr": "Les rues pavées sont tellement raides qu'on avance lentement.",
    "pt": "As ruas de pedra são tão íngremes que a gente anda devagar."
   },
   {
    "fr": "Chaque colline possède son église baroque.",
    "pt": "Cada morro tem a sua igreja barroca."
   },
   {
    "fr": "L'intérieur de cette église est entièrement couvert d'or.",
    "pt": "O interior dessa igreja é todo coberto de ouro."
   },
   {
    "fr": "Les sculptures ont été réalisées par un artiste local très célèbre.",
    "pt": "As esculturas foram feitas por um artista local muito famoso."
   },
   {
    "fr": "Nous avons visité une ancienne mine creusée à la main.",
    "pt": "A gente visitou uma mina antiga cavada à mão."
   },
   {
    "fr": "Le guide nous a parlé des conditions terribles des esclaves.",
    "pt": "O guia falou com a gente sobre as condições terríveis dos escravizados."
   },
   {
    "fr": "C'est une histoire magnifique et douloureuse à la fois.",
    "pt": "É uma história linda e dolorosa ao mesmo tempo."
   },
   {
    "fr": "Le soir, la brume descend sur les toits de la ville.",
    "pt": "À noite, a neblina desce sobre os telhados da cidade."
   },
   {
    "fr": "On comprend pourquoi la ville est classée au patrimoine mondial.",
    "pt": "Dá para entender por que a cidade é patrimônio mundial."
   }
  ]
 },
 {
  "title": "La cuisine mineira à Tiradentes",
  "phrases": [
   {
    "fr": "À Tiradentes, on vient surtout pour bien manger.",
    "pt": "Em Tiradentes, a gente vem principalmente para comer bem."
   },
   {
    "fr": "La cuisine du Minas Gerais se cuisine au feu de bois.",
    "pt": "A comida mineira é feita no fogão a lenha."
   },
   {
    "fr": "Je vous conseille le poulet au gombo avec de la polenta.",
    "pt": "Eu recomendo o frango com quiabo com angu."
   },
   {
    "fr": "Les plats arrivent dans de lourdes marmites en pierre.",
    "pt": "Os pratos chegam em panelas pesadas de pedra-sabão."
   },
   {
    "fr": "Le fromage du Minas se mange avec de la confiture de goyave.",
    "pt": "O queijo minas se come com goiabada."
   },
   {
    "fr": "Ce mélange s'appelle « Roméo et Juliette » ici.",
    "pt": "Essa combinação se chama Romeu e Julieta aqui."
   },
   {
    "fr": "Le serveur insiste pour qu'on goûte la cachaça artisanale.",
    "pt": "O garçom insiste para a gente provar a cachaça artesanal."
   },
   {
    "fr": "Je ne pourrai plus rien avaler jusqu'à demain.",
    "pt": "Eu não vou conseguir comer mais nada até amanhã."
   },
   {
    "fr": "Les gens d'ici disent que le secret, c'est la patience.",
    "pt": "O pessoal daqui diz que o segredo é a paciência."
   },
   {
    "fr": "C'est sans doute le meilleur repas de tout notre voyage.",
    "pt": "É sem dúvida a melhor refeição da nossa viagem inteira."
   }
  ]
 },
 {
  "title": "Une route coupée par la pluie",
  "phrases": [
   {
    "fr": "Une pluie torrentielle est tombée toute la nuit.",
    "pt": "Caiu uma chuva torrencial a noite inteira."
   },
   {
    "fr": "La route en terre est devenue une véritable rivière de boue.",
    "pt": "A estrada de terra virou um verdadeiro rio de lama."
   },
   {
    "fr": "Notre voiture est restée embourbée au milieu du chemin.",
    "pt": "O nosso carro atolou no meio do caminho."
   },
   {
    "fr": "Un fermier est venu nous sortir de là avec son tracteur.",
    "pt": "Um fazendeiro veio tirar a gente de lá com o trator dele."
   },
   {
    "fr": "Il a refusé d'être payé et nous a offert un café.",
    "pt": "Ele não quis receber nada e ainda ofereceu um cafezinho."
   },
   {
    "fr": "Le pont plus loin est fermé jusqu'à nouvel ordre.",
    "pt": "A ponte mais à frente está fechada até segunda ordem."
   },
   {
    "fr": "Nous allons devoir passer la nuit dans le village voisin.",
    "pt": "A gente vai ter que passar a noite no povoado vizinho."
   },
   {
    "fr": "Il n'y a qu'une petite auberge, mais elle est très accueillante.",
    "pt": "Só tem uma pousadinha, mas ela é muito acolhedora."
   },
   {
    "fr": "Finalement, ce contretemps nous a fait découvrir un endroit magnifique.",
    "pt": "No fim, esse imprevisto fez a gente descobrir um lugar maravilhoso."
   },
   {
    "fr": "Voyager ici demande de la souplesse et beaucoup de patience.",
    "pt": "Viajar por aqui exige jogo de cintura e muita paciência."
   }
  ]
 },
 {
  "title": "Les rivières transparentes de Bonito",
  "phrases": [
   {
    "fr": "Les rivières de Bonito sont parmi les plus transparentes du monde.",
    "pt": "Os rios de Bonito estão entre os mais transparentes do mundo."
   },
   {
    "fr": "Toutes les excursions doivent être réservées à l'avance.",
    "pt": "Todos os passeios precisam ser reservados com antecedência."
   },
   {
    "fr": "Le nombre de visiteurs par jour est strictement limité.",
    "pt": "O número de visitantes por dia é rigorosamente limitado."
   },
   {
    "fr": "Il est interdit de mettre de la crème solaire avant d'entrer dans l'eau.",
    "pt": "É proibido passar protetor solar antes de entrar na água."
   },
   {
    "fr": "On se laisse porter par le courant en flottant à la surface.",
    "pt": "A gente se deixa levar pela correnteza boiando na superfície."
   },
   {
    "fr": "Des centaines de poissons nagent juste sous nos yeux.",
    "pt": "Centenas de peixes nadam bem debaixo dos nossos olhos."
   },
   {
    "fr": "Il ne faut surtout pas toucher le fond pour ne pas troubler l'eau.",
    "pt": "Não pode encostar no fundo de jeito nenhum, para não turvar a água."
   },
   {
    "fr": "Le guide nous a montré une grotte au lac d'un bleu incroyable.",
    "pt": "O guia mostrou para a gente uma gruta com um lago de um azul incrível."
   },
   {
    "fr": "Cette région prouve que le tourisme peut protéger la nature.",
    "pt": "Essa região mostra que o turismo pode proteger a natureza."
   },
   {
    "fr": "On aurait voulu rester dans l'eau toute la journée.",
    "pt": "A gente queria ter ficado na água o dia inteiro."
   }
  ]
 },
 {
  "title": "Négocier avec un guide au Jalapão",
  "phrases": [
   {
    "fr": "Pour explorer le Jalapão, il faut absolument un véhicule tout-terrain.",
    "pt": "Para explorar o Jalapão, precisa de um carro com tração nas quatro rodas."
   },
   {
    "fr": "Le premier guide nous a proposé un prix beaucoup trop élevé.",
    "pt": "O primeiro guia ofereceu um preço alto demais."
   },
   {
    "fr": "Est-ce qu'il y aurait moyen de faire un petit effort sur le prix ?",
    "pt": "Será que dá para fazer um precinho melhor?"
   },
   {
    "fr": "Si nous sommes six, ça vous arrangerait de baisser le tarif ?",
    "pt": "Se a gente for em seis, dá para baixar o valor?"
   },
   {
    "fr": "Le guide a réfléchi un moment, puis il a accepté.",
    "pt": "O guia pensou um pouco e depois topou."
   },
   {
    "fr": "Finalement, tout s'est bien passé et tout le monde était content.",
    "pt": "No fim, deu tudo certo e todo mundo ficou satisfeito."
   },
   {
    "fr": "Le premier jour, nous sommes allés faire un tour vers les dunes orange.",
    "pt": "No primeiro dia, a gente foi dar uma volta pelas dunas alaranjadas."
   },
   {
    "fr": "Dans les sources, l'eau remonte si fort qu'il est impossible de couler.",
    "pt": "Nos fervedouros, a água sobe com tanta força que não dá para afundar."
   },
   {
    "fr": "Le guide a tout fait pour que le voyage se passe bien.",
    "pt": "O guia fez de tudo para a viagem dar certo."
   },
   {
    "fr": "Il ne faut pas avoir peur de négocier, mais toujours avec respect.",
    "pt": "Não precisa ter medo de negociar, mas sempre com respeito."
   }
  ],
  "tip": {
   "title": "Les expressions avec « dar »",
   "example": "Finalement, tout s'est bien passé et tout le monde était content. — No fim, <b>deu tudo certo</b> e todo mundo ficou satisfeito.",
   "body": "Le verbe « dar » (donner) sert à former des dizaines d'expressions très courantes au Brésil. « Dar certo » signifie réussir, bien se passer ; « dar errado », mal tourner. « Dar uma volta », c'est faire un tour, et « dá para » + infinitif veut dire « c'est possible de » : dá para ir a pé ? (on peut y aller à pied ?)."
  }
 },
 {
  "title": "La Route des Émotions en tout-terrain",
  "phrases": [
   {
    "fr": "La Rota das Emoções relie trois États du nord-est.",
    "pt": "A Rota das Emoções liga três estados do Nordeste."
   },
   {
    "fr": "Une grande partie du trajet se fait directement sur la plage.",
    "pt": "Boa parte do trajeto é feita direto na praia."
   },
   {
    "fr": "Le chauffeur doit connaître les horaires des marées par cœur.",
    "pt": "O motorista precisa saber de cor os horários da maré."
   },
   {
    "fr": "À marée haute, certains passages deviennent impossibles.",
    "pt": "Na maré cheia, alguns trechos ficam impossíveis."
   },
   {
    "fr": "Nous avons traversé une rivière sur un radeau en bois.",
    "pt": "A gente atravessou um rio numa balsa de madeira."
   },
   {
    "fr": "Le delta du Parnaíba est un labyrinthe d'îles et de mangroves.",
    "pt": "O delta do Parnaíba é um labirinto de ilhas e manguezais."
   },
   {
    "fr": "À Jericoacoara, tout le monde se retrouve sur la dune au coucher du soleil.",
    "pt": "Em Jericoacoara, todo mundo se encontra na duna na hora do pôr do sol."
   },
   {
    "fr": "Les gens applaudissent quand le soleil disparaît dans la mer.",
    "pt": "As pessoas batem palmas quando o sol some no mar."
   },
   {
    "fr": "Le vent souffle si fort que le sable nous fouette les jambes.",
    "pt": "O vento é tão forte que a areia chicoteia as nossas pernas."
   },
   {
    "fr": "Ce voyage porte vraiment bien son nom.",
    "pt": "Essa viagem faz jus ao nome mesmo."
   }
  ]
 },
 {
  "title": "Le festival de Parintins",
  "phrases": [
   {
    "fr": "Chaque année, l'île de Parintins accueille un immense festival folklorique.",
    "pt": "Todo ano, a ilha de Parintins recebe um festival folclórico enorme."
   },
   {
    "fr": "Deux groupes rivaux s'affrontent pendant trois nuits.",
    "pt": "Dois grupos rivais se enfrentam durante três noites."
   },
   {
    "fr": "Les supporters de l'un sont en rouge, ceux de l'autre en bleu.",
    "pt": "A torcida de um é vermelha, a do outro é azul."
   },
   {
    "fr": "Même la banque locale peint sa façade aux deux couleurs.",
    "pt": "Até o banco da cidade pinta a fachada com as duas cores."
   },
   {
    "fr": "Les chars allégoriques sont gigantesques et bougent dans tous les sens.",
    "pt": "Os carros alegóricos são gigantes e se mexem para todos os lados."
   },
   {
    "fr": "Le spectacle raconte des légendes de la forêt amazonienne.",
    "pt": "O espetáculo conta lendas da floresta amazônica."
   },
   {
    "fr": "Il est très difficile de trouver un logement pendant le festival.",
    "pt": "É muito difícil achar hospedagem durante o festival."
   },
   {
    "fr": "Beaucoup de visiteurs dorment directement dans les bateaux.",
    "pt": "Muitos visitantes dormem nos próprios barcos."
   },
   {
    "fr": "L'énergie dans l'arène est absolument incroyable.",
    "pt": "A energia no bumbódromo é absolutamente incrível."
   },
   {
    "fr": "Je n'ai jamais vu une fête populaire d'une telle ampleur.",
    "pt": "Eu nunca vi uma festa popular desse tamanho."
   }
  ]
 },
 {
  "title": "Voyager de manière responsable",
  "phrases": [
   {
    "fr": "Nous essayons de choisir des agences qui emploient des guides locaux.",
    "pt": "A gente tenta escolher agências que contratam guias locais."
   },
   {
    "fr": "Une partie du prix est reversée directement aux communautés.",
    "pt": "Uma parte do valor vai direto para as comunidades."
   },
   {
    "fr": "Il vaut mieux acheter l'artisanat directement aux artisans.",
    "pt": "É melhor comprar o artesanato direto dos artesãos."
   },
   {
    "fr": "Nous emportons toujours une gourde pour éviter les bouteilles en plastique.",
    "pt": "A gente sempre leva uma garrafinha para evitar garrafas de plástico."
   },
   {
    "fr": "Il ne faut jamais rapporter de plantes ou de plumes comme souvenir.",
    "pt": "Nunca se deve levar plantas ou penas como lembrança."
   },
   {
    "fr": "Avant de photographier quelqu'un, on lui demande toujours la permission.",
    "pt": "Antes de fotografar alguém, a gente sempre pede licença."
   },
   {
    "fr": "Le tourisme de masse menace certains endroits fragiles.",
    "pt": "O turismo de massa ameaça alguns lugares frágeis."
   },
   {
    "fr": "Rester plus longtemps au même endroit réduit aussi notre impact.",
    "pt": "Ficar mais tempo no mesmo lugar também diminui o nosso impacto."
   },
   {
    "fr": "Les habitants apprécient qu'on fasse l'effort de parler portugais.",
    "pt": "Os moradores gostam quando a gente se esforça para falar português."
   },
   {
    "fr": "Voyager autrement, c'est aussi voyager plus lentement.",
    "pt": "Viajar de outro jeito também é viajar mais devagar."
   }
  ]
 },
 {
  "title": "Un bus de nuit vers la Chapada dos Veadeiros",
  "phrases": [
   {
    "fr": "Nous prenons le bus de nuit depuis la gare routière de Brasília.",
    "pt": "A gente pega o ônibus noturno na rodoviária de Brasília."
   },
   {
    "fr": "Les sièges sont presque complètement inclinables.",
    "pt": "As poltronas reclinam quase totalmente."
   },
   {
    "fr": "La climatisation est si forte qu'il faut une couverture.",
    "pt": "O ar-condicionado é tão forte que precisa de cobertor."
   },
   {
    "fr": "Le bus s'arrête au milieu de la nuit dans une station-service.",
    "pt": "O ônibus para no meio da noite num posto de gasolina."
   },
   {
    "fr": "Au réveil, le paysage du cerrado s'étend à perte de vue.",
    "pt": "Quando a gente acorda, a paisagem do cerrado se estende a perder de vista."
   },
   {
    "fr": "Le village d'Alto Paraíso est réputé pour son ambiance mystique.",
    "pt": "O vilarejo de Alto Paraíso é famoso pelo clima místico."
   },
   {
    "fr": "Les cascades du parc sont parmi les plus belles du pays.",
    "pt": "As cachoeiras do parque estão entre as mais bonitas do país."
   },
   {
    "fr": "Certains sentiers ne peuvent se faire qu'avec un guide agréé.",
    "pt": "Algumas trilhas só podem ser feitas com guia credenciado."
   },
   {
    "fr": "Les cristaux de quartz brillent un peu partout sur le chemin.",
    "pt": "Os cristais de quartzo brilham por todo lado no caminho."
   },
   {
    "fr": "Après cette nuit de bus, un bain dans la cascade fait un bien fou.",
    "pt": "Depois dessa noite de ônibus, um banho de cachoeira faz um bem danado."
   }
  ]
 },
 {
  "title": "En canoë sur un igarapé",
  "phrases": [
   {
    "fr": "Un igarapé est un petit bras de rivière au milieu de la forêt.",
    "pt": "Um igarapé é um pequeno braço de rio no meio da floresta."
   },
   {
    "fr": "Nous pagayons lentement pour ne pas faire de bruit.",
    "pt": "A gente rema devagar para não fazer barulho."
   },
   {
    "fr": "Le guide imite le cri des singes pour les faire répondre.",
    "pt": "O guia imita o grito dos macacos para eles responderem."
   },
   {
    "fr": "Une famille de singes hurleurs passe juste au-dessus de nous.",
    "pt": "Uma família de bugios passa bem em cima da gente."
   },
   {
    "fr": "Les racines des arbres plongent directement dans l'eau.",
    "pt": "As raízes das árvores mergulham direto na água."
   },
   {
    "fr": "Le guide nous montre une plante qui soigne les piqûres.",
    "pt": "O guia mostra uma planta que serve para picada de inseto."
   },
   {
    "fr": "Les Indigènes l'utilisent depuis des générations.",
    "pt": "Os povos indígenas usam essa planta há gerações."
   },
   {
    "fr": "La lumière filtre à peine à travers les feuilles.",
    "pt": "A luz mal passa por entre as folhas."
   },
   {
    "fr": "On se sent tout petit face à cette nature immense.",
    "pt": "A gente se sente pequenininho diante dessa natureza imensa."
   },
   {
    "fr": "Ce moment de calme restera l'un de mes plus beaux souvenirs.",
    "pt": "Esse momento de calma vai ser uma das minhas lembranças mais bonitas."
   }
  ]
 },
 {
  "title": "Un orage surprend notre randonnée",
  "phrases": [
   {
    "fr": "Le ciel s'est assombri à peine une heure après le départ.",
    "pt": "O céu escureceu mal uma hora depois da saída."
   },
   {
    "fr": "Au cas où l'orage éclaterait, le guide nous a montré un abri.",
    "pt": "Caso a tempestade caísse, o guia mostrou para a gente um abrigo."
   },
   {
    "fr": "Nous continuerons, à moins que la rivière ne monte trop vite.",
    "pt": "A gente vai continuar, a não ser que o rio suba rápido demais."
   },
   {
    "fr": "Le tonnerre résonnait dans tout le canyon.",
    "pt": "O trovão ecoava pelo cânion inteiro."
   },
   {
    "fr": "Au cas où quelqu'un se perdrait, nous avons fixé un point de rendez-vous.",
    "pt": "Caso alguém se perdesse, a gente combinou um ponto de encontro."
   },
   {
    "fr": "Le guide a décidé de rebrousser chemin par prudence.",
    "pt": "O guia decidiu voltar por precaução."
   },
   {
    "fr": "En quelques minutes, le petit ruisseau était devenu un torrent.",
    "pt": "Em poucos minutos, o riozinho tinha virado uma correnteza."
   },
   {
    "fr": "Nous nous sommes tenus par la main pour traverser.",
    "pt": "A gente se deu as mãos para atravessar."
   },
   {
    "fr": "Personne ne repartira demain, à moins que le temps ne s'améliore.",
    "pt": "Ninguém vai sair amanhã, a não ser que o tempo melhore."
   },
   {
    "fr": "On repense souvent au sang-froid de notre guide ce jour-là.",
    "pt": "A gente sempre lembra do sangue-frio do nosso guia naquele dia."
   }
  ],
  "tip": {
   "title": "« Caso » et « a não ser que » + subjonctif",
   "example": "Nous continuerons, à moins que la rivière ne monte trop vite. — A gente vai continuar, <b>a não ser que</b> o rio <b>suba</b> rápido demais.",
   "body": "« Caso » (au cas où) et « a não ser que » (à moins que) sont toujours suivis du subjonctif. Au présent : caso chova (au cas où il pleuvrait), a não ser que você prefira (à moins que tu préfères). Pour une hypothèse dans le passé, on utilise le subjonctif imparfait : caso ele chegasse tarde (au cas où il arriverait tard). Attention, « caso » ne s'emploie jamais avec « se »."
  }
 },
 {
  "title": "Retour à Manaus, dix ans après",
  "phrases": [
   {
    "fr": "Nous revenons à Manaus exactement dix ans après notre premier voyage.",
    "pt": "A gente volta a Manaus exatamente dez anos depois da primeira viagem."
   },
   {
    "fr": "Le port est toujours aussi animé qu'à l'époque.",
    "pt": "O porto continua tão movimentado quanto naquela época."
   },
   {
    "fr": "Le marché municipal a été entièrement rénové.",
    "pt": "O mercado municipal foi todo reformado."
   },
   {
    "fr": "Nous avons retrouvé le guide qui nous avait emmenés la première fois.",
    "pt": "A gente reencontrou o guia que tinha levado a gente da primeira vez."
   },
   {
    "fr": "Il s'est souvenu de nous immédiatement, c'était très émouvant.",
    "pt": "Ele lembrou da gente na hora, foi muito emocionante."
   },
   {
    "fr": "Il a maintenant sa propre petite agence de voyage.",
    "pt": "Agora ele tem a própria agenciazinha de turismo."
   },
   {
    "fr": "Certaines choses ont changé, mais le fleuve, lui, est toujours là.",
    "pt": "Algumas coisas mudaram, mas o rio continua lá."
   },
   {
    "fr": "Cette fois, je comprends presque tout ce que les gens me disent.",
    "pt": "Desta vez, eu entendo quase tudo o que as pessoas me falam."
   },
   {
    "fr": "Il y a dix ans, je ne savais même pas commander un café.",
    "pt": "Dez anos atrás, eu nem sabia pedir um café."
   },
   {
    "fr": "On repart avec le sentiment d'avoir bouclé une belle histoire.",
    "pt": "A gente vai embora com a sensação de ter fechado uma bela história."
   }
  ]
 },
 {
  "title": "Fin du module : un bilan de voyage",
  "phrases": [
   {
    "fr": "Ce module nous a emmenés au cœur du Brésil le plus sauvage.",
    "pt": "Este módulo levou a gente ao coração do Brasil mais selvagem."
   },
   {
    "fr": "Tu peux maintenant raconter un voyage avec beaucoup de nuances.",
    "pt": "Agora você consegue contar uma viagem com muitas nuances."
   },
   {
    "fr": "Tu sais rapporter ce que quelqu'un t'a dit.",
    "pt": "Você sabe contar o que alguém te disse."
   },
   {
    "fr": "Tu sais exprimer une hypothèse et une concession.",
    "pt": "Você sabe expressar uma hipótese e uma concessão."
   },
   {
    "fr": "Tu peux négocier un prix avec politesse et assurance.",
    "pt": "Você consegue negociar um preço com educação e segurança."
   },
   {
    "fr": "Tu es capable de faire face à un imprévu en portugais.",
    "pt": "Você é capaz de enfrentar um imprevisto em português."
   },
   {
    "fr": "Le portugais devient pour toi un véritable outil de découverte.",
    "pt": "O português está virando para você uma verdadeira ferramenta de descoberta."
   },
   {
    "fr": "Chaque voyage sera désormais une occasion de pratiquer.",
    "pt": "A partir de agora, cada viagem vai ser uma chance de praticar."
   },
   {
    "fr": "Sois fier du chemin parcouru depuis le début.",
    "pt": "Tenha orgulho do caminho que você percorreu desde o começo."
   },
   {
    "fr": "À très bientôt pour le dernier module de ce niveau.",
    "pt": "Até muito em breve no último módulo deste nível."
   }
  ]
 }
];

const level3Module3Lessons = [
 {
  "title": "Une soirée pleine d'expressions brésiliennes",
  "phrases": [
   {
    "fr": "Hier soir, j'ai complètement raté mon discours devant tout le monde.",
    "pt": "Ontem à noite, eu paguei o maior mico na frente de todo mundo."
   },
   {
    "fr": "Ne t'inquiète pas, tout le monde se ridiculise un jour ou l'autre.",
    "pt": "Relaxa, todo mundo paga mico um dia ou outro."
   },
   {
    "fr": "On fait une cagnotte pour offrir un cadeau à Mariana ?",
    "pt": "Vamos fazer uma vaquinha para dar um presente para a Mariana?"
   },
   {
    "fr": "Il a parlé pendant une heure sans rien dire d'intéressant.",
    "pt": "Ele ficou uma hora enchendo linguiça sem dizer nada de interessante."
   },
   {
    "fr": "Arrête de tourner autour du pot et dis-moi la vérité.",
    "pt": "Para de enrolar e me fala a verdade."
   },
   {
    "fr": "Ce projet est tombé à l'eau au dernier moment.",
    "pt": "Esse projeto foi por água abaixo no último minuto."
   },
   {
    "fr": "Avec lui, c'est toujours la même chanson.",
    "pt": "Com ele é sempre a mesma ladainha."
   },
   {
    "fr": "Elle a trouvé une solution en un clin d'œil.",
    "pt": "Ela achou uma solução num piscar de olhos."
   },
   {
    "fr": "Franchement, ce n'est pas la mer à boire.",
    "pt": "Sinceramente, não é nenhum bicho de sete cabeças."
   },
   {
    "fr": "Ces expressions rendent la conversation tellement plus vivante.",
    "pt": "Essas expressões deixam a conversa muito mais viva."
   }
  ],
  "tip": {
   "title": "Les expressions idiomatiques : « pagar mico », « fazer uma vaquinha », « encher linguiça »",
   "example": "Hier soir, j'ai complètement raté mon discours devant tout le monde. — Ontem à noite, eu <b>paguei o maior mico</b> na frente de todo mundo.",
   "body": "Le portugais du Brésil est riche en expressions imagées qu'on ne peut pas traduire mot à mot. « Pagar mico » (littéralement « payer le singe ») signifie se ridiculiser, « fazer uma vaquinha » (« faire une petite vache ») veut dire organiser une cagnotte, et « encher linguiça » (« remplir la saucisse ») désigne le fait de parler pour ne rien dire. Les utiliser au bon moment fait tout de suite sonner votre portugais beaucoup plus naturel."
  }
 },
 {
  "title": "Débattre des réseaux sociaux",
  "phrases": [
   {
    "fr": "Les réseaux sociaux ont bouleversé la manière dont on se parle.",
    "pt": "As redes sociais mudaram completamente o jeito como a gente se comunica."
   },
   {
    "fr": "Certains pensent qu'ils nous poussent à nous comparer sans cesse.",
    "pt": "Tem gente que acha que elas fazem a gente se comparar o tempo todo."
   },
   {
    "fr": "Pour d'autres, ils permettent de garder le contact avec la famille éloignée.",
    "pt": "Para outros, elas permitem manter contato com a família que mora longe."
   },
   {
    "fr": "Au Brésil, presque tout le monde s'organise par des groupes de messages.",
    "pt": "No Brasil, quase todo mundo se organiza por grupos de mensagem."
   },
   {
    "fr": "Le groupe de la famille ne s'arrête jamais, même à trois heures du matin.",
    "pt": "O grupo da família não para nunca, nem às três da manhã."
   },
   {
    "fr": "Il est devenu difficile de distinguer une vraie information d'une rumeur.",
    "pt": "Ficou difícil distinguir uma informação verdadeira de um boato."
   },
   {
    "fr": "Je vérifie toujours la source avant de partager une nouvelle.",
    "pt": "Eu sempre confiro a fonte antes de compartilhar uma notícia."
   },
   {
    "fr": "J'ai décidé de passer moins de temps sur mon téléphone le soir.",
    "pt": "Eu decidi passar menos tempo no celular à noite."
   },
   {
    "fr": "Le problème n'est peut-être pas l'outil, mais l'usage qu'on en fait.",
    "pt": "Talvez o problema não seja a ferramenta, mas o uso que a gente faz dela."
   },
   {
    "fr": "Sur ce sujet, je crois qu'il n'existe pas de réponse simple.",
    "pt": "Sobre esse assunto, acho que não existe uma resposta simples."
   }
  ]
 },
 {
  "title": "Parler de santé mentale ouvertement",
  "phrases": [
   {
    "fr": "Mon cousin m'a avoué qu'il traversait une phase très compliquée.",
    "pt": "Meu primo me contou que estava passando por uma fase muito complicada."
   },
   {
    "fr": "Il s'est senti épuisé pendant des mois, d'ailleurs il a dû s'arrêter de travailler.",
    "pt": "Ele se sentiu esgotado durante meses, aliás, teve que parar de trabalhar."
   },
   {
    "fr": "Eh oui, ça arrive à beaucoup plus de gens qu'on ne le croit.",
    "pt": "Pois é, isso acontece com muito mais gente do que a gente imagina."
   },
   {
    "fr": "Il a fini par consulter une psychologue près de chez lui.",
    "pt": "Ele acabou procurando uma psicóloga perto da casa dele."
   },
   {
    "fr": "Au début, il avait genre honte d'en parler.",
    "pt": "No começo, ele tinha tipo vergonha de falar sobre isso."
   },
   {
    "fr": "Bref, aujourd'hui il va beaucoup mieux.",
    "pt": "Enfim, hoje ele está bem melhor."
   },
   {
    "fr": "Je trouve courageux de demander de l'aide quand on en a besoin.",
    "pt": "Eu acho corajoso pedir ajuda quando a gente precisa."
   },
   {
    "fr": "Parler de ses émotions ne devrait plus être un tabou.",
    "pt": "Falar das próprias emoções não deveria mais ser um tabu."
   },
   {
    "fr": "Parfois, il suffit d'écouter sans donner de conseils.",
    "pt": "Às vezes, basta escutar sem dar conselho."
   },
   {
    "fr": "Prendre soin de son esprit est aussi important que prendre soin de son corps.",
    "pt": "Cuidar da mente é tão importante quanto cuidar do corpo."
   }
  ],
  "tip": {
   "title": "Les marqueurs de discours : « aliás, pois é, enfim, tipo »",
   "example": "Bref, aujourd'hui il va beaucoup mieux. — <b>Enfim</b>, hoje ele está bem melhor.",
   "body": "Ces petits mots rythment la conversation brésilienne. « Aliás » signifie « d'ailleurs » ou « au fait », « pois é » exprime l'accord (« eh oui », « c'est bien ça »), « enfim » sert à conclure (« bref », « enfin bref »). « Tipo », très fréquent chez les jeunes, équivaut à « genre » ou « du style » : « Ele tinha tipo vergonha ». À doser avec modération, mais indispensables pour parler comme un Brésilien."
  }
 },
 {
  "title": "Un dilemme moral entre amis",
  "phrases": [
   {
    "fr": "Ma meilleure amie m'a demandé conseil sur un choix vraiment délicat.",
    "pt": "Minha melhor amiga me pediu conselho sobre uma escolha bem delicada."
   },
   {
    "fr": "Elle a découvert que son collègue mentait à toute l'équipe.",
    "pt": "Ela descobriu que o colega dela estava mentindo para a equipe inteira."
   },
   {
    "fr": "Si elle le dénonce, il risque de perdre son emploi.",
    "pt": "Se ela denunciar, ele corre o risco de perder o emprego."
   },
   {
    "fr": "Si elle se tait, elle a l'impression d'être complice.",
    "pt": "Se ela ficar calada, vai sentir que é cúmplice."
   },
   {
    "fr": "Je lui ai conseillé de lui parler en tête-à-tête d'abord.",
    "pt": "Eu aconselhei que ela conversasse com ele a sós primeiro."
   },
   {
    "fr": "Il mérite peut-être une chance de s'expliquer.",
    "pt": "Talvez ele mereça uma chance de se explicar."
   },
   {
    "fr": "Il n'y a pas toujours de bonne réponse dans ce genre de situation.",
    "pt": "Nem sempre existe uma resposta certa nesse tipo de situação."
   },
   {
    "fr": "Ce qui compte, c'est de pouvoir se regarder dans le miroir.",
    "pt": "O que importa é conseguir se olhar no espelho."
   },
   {
    "fr": "Elle m'a remercié de l'avoir écoutée sans la juger.",
    "pt": "Ela me agradeceu por eu ter escutado sem julgar."
   },
   {
    "fr": "Les vrais amis sont là aussi pour les décisions difficiles.",
    "pt": "Os amigos de verdade estão aí também para as decisões difíceis."
   }
  ]
 },
 {
  "title": "Préserver l'Amazonie",
  "phrases": [
   {
    "fr": "La déforestation de l'Amazonie m'inquiète de plus en plus.",
    "pt": "O desmatamento da Amazônia me preocupa cada vez mais."
   },
   {
    "fr": "On ne peut pas laisser la forêt disparaître sous nos yeux.",
    "pt": "A gente não pode deixar a floresta desaparecer diante dos nossos olhos."
   },
   {
    "fr": "Les peuples autochtones protègent ce territoire depuis des siècles.",
    "pt": "Os povos indígenas protegem esse território há séculos."
   },
   {
    "fr": "Il faudrait les laisser décider de l'avenir de leurs terres.",
    "pt": "Seria preciso deixar que eles decidissem o futuro das suas terras."
   },
   {
    "fr": "Mon frère a arrêté de manger de la viande pour cette raison.",
    "pt": "Meu irmão deixou de comer carne por esse motivo."
   },
   {
    "fr": "Je crois qu'il faut agir même quand on se sent impuissant.",
    "pt": "Eu acho que é preciso agir mesmo quando a gente se sente impotente."
   },
   {
    "fr": "Chaque geste compte, mais les grandes décisions restent politiques.",
    "pt": "Cada atitude conta, mas as grandes decisões continuam sendo políticas."
   },
   {
    "fr": "Les fleuves de l'Amazonie influencent les pluies de tout le pays.",
    "pt": "Os rios da Amazônia influenciam as chuvas do país inteiro."
   },
   {
    "fr": "Laisse-moi te montrer un documentaire sur ce sujet.",
    "pt": "Deixa eu te mostrar um documentário sobre esse assunto."
   },
   {
    "fr": "Les générations futures nous demanderont ce que nous avons fait.",
    "pt": "As próximas gerações vão perguntar o que a gente fez."
   }
  ],
  "tip": {
   "title": "Les différents sens de « deixar »",
   "example": "Mon frère a arrêté de manger de la viande pour cette raison. — Meu irmão <b>deixou de</b> comer carne por esse motivo.",
   "body": "« Deixar » est un verbe aux multiples visages. Il signifie « laisser » (« Deixei a chave em casa »), « permettre » (« Deixa eu te mostrar », laisse-moi te montrer) et, suivi de « de » + infinitif, « arrêter de » (« Deixei de fumar », j'ai arrêté de fumer). Il sert aussi à exprimer un changement d'état : « Isso me deixa feliz » (ça me rend heureux)."
  }
 },
 {
  "title": "Les différences entre générations",
  "phrases": [
   {
    "fr": "Ma grand-mère a grandi dans une petite ville du Minas Gerais.",
    "pt": "Minha avó cresceu numa cidadezinha de Minas Gerais."
   },
   {
    "fr": "Elle allait à l'école à pied, à plusieurs kilomètres de chez elle.",
    "pt": "Ela ia para a escola a pé, a vários quilômetros de casa."
   },
   {
    "fr": "À son époque, on écoutait les feuilletons à la radio en famille.",
    "pt": "Na época dela, a família ouvia novela no rádio junta."
   },
   {
    "fr": "Les jeunes d'aujourd'hui ont le monde entier dans leur poche.",
    "pt": "Os jovens de hoje têm o mundo inteiro no bolso."
   },
   {
    "fr": "Pourtant, beaucoup se sentent plus seuls que leurs grands-parents.",
    "pt": "Mesmo assim, muitos se sentem mais sozinhos do que os avós."
   },
   {
    "fr": "Chaque génération critique un peu celle qui la suit.",
    "pt": "Cada geração critica um pouco a geração seguinte."
   },
   {
    "fr": "J'apprends énormément en écoutant les histoires de ma grand-mère.",
    "pt": "Eu aprendo muito ouvindo as histórias da minha avó."
   },
   {
    "fr": "Elle, de son côté, me demande de lui apprendre à envoyer des photos.",
    "pt": "Ela, por sua vez, me pede para ensinar a mandar fotos."
   },
   {
    "fr": "Ces échanges nous rapprochent plus qu'on ne l'aurait cru.",
    "pt": "Essas trocas aproximam a gente mais do que imaginávamos."
   },
   {
    "fr": "Au fond, nous cherchons tous la même chose : être compris.",
    "pt": "No fundo, todos nós buscamos a mesma coisa: ser compreendidos."
   }
  ]
 },
 {
  "title": "Discuter d'art et de créativité",
  "phrases": [
   {
    "fr": "Les fresques de rue de São Paulo m'ont vraiment marqué.",
    "pt": "Os grafites de rua de São Paulo me marcaram muito."
   },
   {
    "fr": "Dans certains quartiers, chaque mur raconte une histoire.",
    "pt": "Em alguns bairros, cada muro conta uma história."
   },
   {
    "fr": "L'art permet de dire ce que les mots n'arrivent pas à exprimer.",
    "pt": "A arte permite dizer o que as palavras não conseguem expressar."
   },
   {
    "fr": "J'ai visité un musée d'art contemporain en pleine nature, dans le Minas Gerais.",
    "pt": "Eu visitei um museu de arte contemporânea no meio da natureza, em Minas Gerais."
   },
   {
    "fr": "Certaines œuvres m'ont dérouté, d'autres m'ont ému aux larmes.",
    "pt": "Algumas obras me deixaram confuso, outras me emocionaram até as lágrimas."
   },
   {
    "fr": "Je ne comprends pas toujours l'art abstrait, mais je le ressens.",
    "pt": "Nem sempre eu entendo a arte abstrata, mas eu sinto."
   },
   {
    "fr": "La bossa nova est née d'un mélange de samba et de jazz.",
    "pt": "A bossa nova nasceu de uma mistura de samba e jazz."
   },
   {
    "fr": "Pour moi, la créativité naît souvent des contraintes.",
    "pt": "Para mim, a criatividade muitas vezes nasce das limitações."
   },
   {
    "fr": "J'aimerais reprendre la guitare, que j'ai abandonnée adolescent.",
    "pt": "Eu queria voltar a tocar violão, que eu larguei na adolescência."
   },
   {
    "fr": "Il n'est jamais trop tard pour créer quelque chose de beau.",
    "pt": "Nunca é tarde demais para criar algo bonito."
   }
  ]
 },
 {
  "title": "Une amitié qui dure depuis vingt ans",
  "phrases": [
   {
    "fr": "Nous nous sommes rencontrés à la fac, à Recife.",
    "pt": "A gente se conheceu na faculdade, em Recife."
   },
   {
    "fr": "Nos vies ont pris des chemins très différents depuis.",
    "pt": "Nossas vidas tomaram caminhos muito diferentes desde então."
   },
   {
    "fr": "Il vit à Porto Alegre, moi je suis resté dans le Nordeste.",
    "pt": "Ele mora em Porto Alegre, e eu fiquei no Nordeste."
   },
   {
    "fr": "Nous nous voyons à peine deux fois par an.",
    "pt": "A gente se vê mal e mal duas vezes por ano."
   },
   {
    "fr": "Pourtant, à chaque retrouvaille, c'est comme si on s'était quittés la veille.",
    "pt": "Mesmo assim, cada vez que a gente se reencontra, parece que se despediu ontem."
   },
   {
    "fr": "Il a beau être très occupé, il m'appelle toujours pour mon anniversaire.",
    "pt": "Por mais que ele esteja muito ocupado, ele sempre me liga no meu aniversário."
   },
   {
    "fr": "Même si on se dispute parfois, notre complicité reste intacte.",
    "pt": "Por mais que a gente brigue às vezes, nossa cumplicidade continua intacta."
   },
   {
    "fr": "Il connaît mes défauts mieux que personne.",
    "pt": "Ele conhece meus defeitos melhor do que ninguém."
   },
   {
    "fr": "Une amitié comme celle-là, ça se cultive avec patience.",
    "pt": "Uma amizade assim se cultiva com paciência."
   },
   {
    "fr": "Je lui dois une bonne partie de ce que je suis devenu.",
    "pt": "Eu devo a ele boa parte do que eu me tornei."
   }
  ],
  "tip": {
   "title": "« Por mais que » + subjonctif",
   "example": "Il a beau être très occupé, il m'appelle toujours pour mon anniversaire. — <b>Por mais que</b> ele <b>esteja</b> muito ocupado, ele sempre me liga no meu aniversário.",
   "body": "« Por mais que » correspond à « avoir beau » ou « même si… autant que », et il est toujours suivi du subjonctif : « Por mais que eu tente, não consigo » (j'ai beau essayer, je n'y arrive pas). Au passé, on utilise le subjonctif imparfait : « Por mais que ele tentasse… ». C'est une tournure élégante pour exprimer une concession."
  }
 },
 {
  "title": "Parler d'un échec personnel marquant",
  "phrases": [
   {
    "fr": "Il y a quelques années, j'ai ouvert un petit restaurant à Belo Horizonte.",
    "pt": "Alguns anos atrás, eu abri um restaurantezinho em Belo Horizonte."
   },
   {
    "fr": "Malgré tous mes efforts, j'ai dû le fermer au bout de deux ans.",
    "pt": "Apesar de todo o meu esforço, tive que fechar depois de dois anos."
   },
   {
    "fr": "Sur le moment, j'ai eu l'impression que tout s'écroulait.",
    "pt": "Na hora, eu tive a impressão de que tudo estava desmoronando."
   },
   {
    "fr": "J'avais honte de croiser les gens du quartier.",
    "pt": "Eu tinha vergonha de encontrar o pessoal do bairro."
   },
   {
    "fr": "Ma famille m'a soutenu sans jamais me faire de reproches.",
    "pt": "Minha família me apoiou sem nunca me criticar."
   },
   {
    "fr": "Avec le recul, cet échec m'a appris énormément de choses.",
    "pt": "Olhando para trás, esse fracasso me ensinou muita coisa."
   },
   {
    "fr": "J'ai compris l'importance de bien m'entourer.",
    "pt": "Eu entendi a importância de me cercar de boas pessoas."
   },
   {
    "fr": "Aujourd'hui, je n'ai plus peur de me tromper.",
    "pt": "Hoje eu não tenho mais medo de errar."
   },
   {
    "fr": "Échouer ne fait pas de nous des perdants.",
    "pt": "Fracassar não faz da gente um perdedor."
   },
   {
    "fr": "Ce qui compte, c'est la façon dont on se relève.",
    "pt": "O que importa é o jeito como a gente se levanta."
   }
  ]
 },
 {
  "title": "Discuter de l'amour et des relations",
  "phrases": [
   {
    "fr": "Construire une relation solide demande bien plus que de l'attirance.",
    "pt": "Construir um relacionamento sólido exige muito mais do que atração."
   },
   {
    "fr": "Selon moi, le dialogue sincère est la base de tout.",
    "pt": "Na minha opinião, o diálogo sincero é a base de tudo."
   },
   {
    "fr": "Mes parents sont mariés depuis plus de quarante ans.",
    "pt": "Meus pais são casados há mais de quarenta anos."
   },
   {
    "fr": "Ils disent que le secret, c'est de rire ensemble tous les jours.",
    "pt": "Eles dizem que o segredo é rir juntos todos os dias."
   },
   {
    "fr": "Chaque couple traverse forcément des moments plus difficiles.",
    "pt": "Todo casal passa, com certeza, por momentos mais difíceis."
   },
   {
    "fr": "Il faut accepter que l'autre ne pense pas toujours comme nous.",
    "pt": "É preciso aceitar que o outro nem sempre pensa como a gente."
   },
   {
    "fr": "La jalousie peut détruire même les plus belles histoires.",
    "pt": "O ciúme pode destruir até as histórias mais bonitas."
   },
   {
    "fr": "Être seul n'est pas un échec, c'est parfois un choix.",
    "pt": "Estar sozinho não é um fracasso, às vezes é uma escolha."
   },
   {
    "fr": "Je crois qu'on doit d'abord apprendre à s'aimer soi-même.",
    "pt": "Eu acho que a gente precisa primeiro aprender a se amar."
   },
   {
    "fr": "L'amour, au fond, c'est choisir l'autre chaque jour.",
    "pt": "O amor, no fundo, é escolher o outro todos os dias."
   }
  ]
 },
 {
  "title": "Chercher du sens dans son travail",
  "phrases": [
   {
    "fr": "Je me demande souvent si mon travail sert vraiment à quelque chose.",
    "pt": "Eu me pergunto muitas vezes se o meu trabalho serve mesmo para alguma coisa."
   },
   {
    "fr": "Le salaire ne suffit plus à me motiver.",
    "pt": "O salário já não é suficiente para me motivar."
   },
   {
    "fr": "J'ai besoin de sentir que mes efforts aident quelqu'un.",
    "pt": "Eu preciso sentir que o meu esforço ajuda alguém."
   },
   {
    "fr": "Une amie a quitté une grande entreprise pour enseigner dans une école publique.",
    "pt": "Uma amiga largou uma grande empresa para dar aula numa escola pública."
   },
   {
    "fr": "Elle gagne moins, mais elle se sent beaucoup plus utile.",
    "pt": "Ela ganha menos, mas se sente muito mais útil."
   },
   {
    "fr": "Tout le monde ne peut pas se permettre ce genre de changement.",
    "pt": "Nem todo mundo pode se dar ao luxo de fazer esse tipo de mudança."
   },
   {
    "fr": "Parfois, le sens se trouve aussi en dehors du travail.",
    "pt": "Às vezes, o sentido também está fora do trabalho."
   },
   {
    "fr": "Je fais du bénévolat dans une association de mon quartier le samedi.",
    "pt": "Eu faço trabalho voluntário numa ONG do meu bairro aos sábados."
   },
   {
    "fr": "Ces quelques heures me remplissent d'énergie pour toute la semaine.",
    "pt": "Essas poucas horas me enchem de energia para a semana inteira."
   },
   {
    "fr": "Trouver l'équilibre est sans doute le vrai défi.",
    "pt": "Encontrar o equilíbrio é, sem dúvida, o verdadeiro desafio."
   }
  ]
 },
 {
  "title": "Dépasser les clichés sur le Brésil",
  "phrases": [
   {
    "fr": "Beaucoup d'étrangers imaginent que le Brésil, c'est seulement la plage et le carnaval.",
    "pt": "Muitos estrangeiros imaginam que o Brasil é só praia e carnaval."
   },
   {
    "fr": "En réalité, le pays est d'une diversité incroyable.",
    "pt": "Na verdade, o país tem uma diversidade incrível."
   },
   {
    "fr": "Il fait même froid l'hiver dans le Sud.",
    "pt": "No Sul, faz até frio no inverno."
   },
   {
    "fr": "Pourvu que les gens viennent découvrir le pays avec curiosité.",
    "pt": "Tomara que as pessoas venham conhecer o país com curiosidade."
   },
   {
    "fr": "Si seulement on parlait davantage de notre littérature à l'étranger !",
    "pt": "Quem dera falassem mais da nossa literatura lá fora!"
   },
   {
    "fr": "Tous les Brésiliens ne savent pas danser la samba, loin de là.",
    "pt": "Nem todo brasileiro sabe sambar, longe disso."
   },
   {
    "fr": "Moi, par exemple, je danse comme un pied.",
    "pt": "Eu, por exemplo, danço muito mal."
   },
   {
    "fr": "Les clichés contiennent parfois un peu de vérité, mais jamais toute la vérité.",
    "pt": "Os clichês às vezes têm um fundo de verdade, mas nunca a verdade inteira."
   },
   {
    "fr": "J'espère que tu reviendras voir le pays sous un autre angle.",
    "pt": "Tomara que você volte para ver o país de outro ângulo."
   },
   {
    "fr": "Si seulement tout le monde voyageait avec un esprit aussi ouvert !",
    "pt": "Quem dera todo mundo viajasse com a mente tão aberta!"
   }
  ],
  "tip": {
   "title": "« Tomara que » et « quem dera » : exprimer un souhait",
   "example": "Pourvu que les gens viennent découvrir le pays avec curiosité. — <b>Tomara que</b> as pessoas <b>venham</b> conhecer o país com curiosidade.",
   "body": "« Tomara que » (pourvu que, j'espère que) exprime un souhait réalisable et se construit avec le subjonctif présent : « Tomara que chova » (pourvu qu'il pleuve). « Quem dera » (si seulement) exprime plutôt un rêve ou un regret, souvent avec le subjonctif imparfait : « Quem dera eu tivesse mais tempo ! » (si seulement j'avais plus de temps !). Deux tournures très courantes à l'oral au Brésil."
  }
 },
 {
  "title": "La saudade, ce mot intraduisible",
  "phrases": [
   {
    "fr": "On dit que la saudade n'existe dans aucune autre langue.",
    "pt": "Dizem que a palavra saudade não existe em nenhuma outra língua."
   },
   {
    "fr": "C'est un mélange de nostalgie, de manque et de tendresse.",
    "pt": "É uma mistura de nostalgia, falta e carinho."
   },
   {
    "fr": "Tu me manques énormément depuis que tu es parti.",
    "pt": "Estou morrendo de saudade desde que você foi embora."
   },
   {
    "fr": "Elle ressent souvent le manque de sa ville natale, dans le Ceará.",
    "pt": "Ela sente muita saudade da cidade natal dela, no Ceará."
   },
   {
    "fr": "Même les bons souvenirs peuvent laisser un peu de mélancolie.",
    "pt": "Até as boas lembranças podem deixar um pouco de melancolia."
   },
   {
    "fr": "Beaucoup de chansons brésiliennes parlent de ce sentiment.",
    "pt": "Muitas músicas brasileiras falam desse sentimento."
   },
   {
    "fr": "La saudade prouve qu'on a vécu quelque chose de précieux.",
    "pt": "A saudade prova que a gente viveu algo precioso."
   },
   {
    "fr": "Je crois que j'aurai la nostalgie de ces années au Brésil.",
    "pt": "Acho que eu vou sentir saudade desses anos no Brasil."
   },
   {
    "fr": "Quand on se reverra, on va fêter ça comme il se doit.",
    "pt": "Quando a gente se reencontrar, vamos comemorar como se deve."
   },
   {
    "fr": "Certains mots en disent plus long qu'un poème entier.",
    "pt": "Certas palavras dizem mais do que um poema inteiro."
   }
  ]
 },
 {
  "title": "Grande ville ou vie à la campagne ?",
  "phrases": [
   {
    "fr": "Après dix ans à São Paulo, j'ai envie de calme.",
    "pt": "Depois de dez anos em São Paulo, estou com vontade de sossego."
   },
   {
    "fr": "Je passe presque trois heures par jour dans les embouteillages.",
    "pt": "Eu passo quase três horas por dia no trânsito."
   },
   {
    "fr": "Ma sœur s'est installée dans une petite ville de l'intérieur du pays.",
    "pt": "Minha irmã se mudou para uma cidadezinha do interior."
   },
   {
    "fr": "Là-bas, tout le monde se connaît et se dit bonjour.",
    "pt": "Lá, todo mundo se conhece e se cumprimenta."
   },
   {
    "fr": "En contrepartie, il y a moins d'options culturelles.",
    "pt": "Em compensação, tem menos opções culturais."
   },
   {
    "fr": "La grande ville offre des opportunités qu'on ne trouve nulle part ailleurs.",
    "pt": "A cidade grande oferece oportunidades que não se encontram em nenhum outro lugar."
   },
   {
    "fr": "Avec le télétravail, beaucoup de gens repensent leur mode de vie.",
    "pt": "Com o trabalho remoto, muita gente está repensando o estilo de vida."
   },
   {
    "fr": "Je rêve d'une maison avec un jardin et quelques arbres fruitiers.",
    "pt": "Eu sonho com uma casa com quintal e algumas árvores frutíferas."
   },
   {
    "fr": "Mais je sais que l'animation de la ville me manquerait.",
    "pt": "Mas eu sei que eu sentiria falta do agito da cidade."
   },
   {
    "fr": "Peut-être que l'idéal, c'est un peu des deux.",
    "pt": "Talvez o ideal seja um pouco dos dois."
   }
  ]
 },
 {
  "title": "Inégalités et solidarité",
  "phrases": [
   {
    "fr": "Les inégalités sociales sautent aux yeux dans les grandes villes.",
    "pt": "As desigualdades sociais saltam aos olhos nas cidades grandes."
   },
   {
    "fr": "Un quartier luxueux peut se trouver juste à côté d'une favela.",
    "pt": "Um bairro de luxo pode ficar logo ao lado de uma favela."
   },
   {
    "fr": "Pourtant, la solidarité entre voisins y est souvent très forte.",
    "pt": "Mesmo assim, a solidariedade entre vizinhos costuma ser muito forte."
   },
   {
    "fr": "Pendant les inondations, tout le quartier s'est mobilisé.",
    "pt": "Durante as enchentes, o bairro inteiro se mobilizou."
   },
   {
    "fr": "Les gens ont apporté des vêtements, de la nourriture et de l'eau.",
    "pt": "As pessoas levaram roupa, comida e água."
   },
   {
    "fr": "Je crois que l'éducation est la clé pour réduire ces écarts.",
    "pt": "Eu acredito que a educação é a chave para diminuir essas diferenças."
   },
   {
    "fr": "Un projet de musique transforme la vie des enfants de la communauté.",
    "pt": "Um projeto de música está transformando a vida das crianças da comunidade."
   },
   {
    "fr": "Il ne suffit pas de critiquer, il faut aussi s'engager.",
    "pt": "Não basta criticar, também é preciso se envolver."
   },
   {
    "fr": "Chacun peut contribuer à sa manière, même modestement.",
    "pt": "Cada um pode contribuir do seu jeito, mesmo que seja pouco."
   },
   {
    "fr": "Une société se juge à la façon dont elle traite les plus fragiles.",
    "pt": "Uma sociedade se mede pela forma como trata os mais vulneráveis."
   }
  ]
 },
 {
  "title": "Identité et métissage culturel",
  "phrases": [
   {
    "fr": "Le Brésil est né de la rencontre de nombreux peuples.",
    "pt": "O Brasil nasceu do encontro de muitos povos."
   },
   {
    "fr": "Les influences indigènes, africaines et européennes se mélangent partout.",
    "pt": "As influências indígenas, africanas e europeias se misturam em todo lugar."
   },
   {
    "fr": "On le sent dans la musique, la cuisine et même dans la langue.",
    "pt": "Dá para sentir isso na música, na comida e até na língua."
   },
   {
    "fr": "Beaucoup de mots du portugais brésilien viennent du tupi.",
    "pt": "Muitas palavras do português brasileiro vêm do tupi."
   },
   {
    "fr": "À Salvador, la culture afro-brésilienne est présente à chaque coin de rue.",
    "pt": "Em Salvador, a cultura afro-brasileira está presente em cada esquina."
   },
   {
    "fr": "Mes arrière-grands-parents sont arrivés du Japon dans les années trente.",
    "pt": "Meus bisavós chegaram do Japão nos anos trinta."
   },
   {
    "fr": "Je me sens à la fois très brésilien et attaché à ces racines.",
    "pt": "Eu me sinto ao mesmo tempo muito brasileiro e ligado a essas raízes."
   },
   {
    "fr": "Vivre entre plusieurs cultures enrichit autant que ça complique.",
    "pt": "Viver entre várias culturas enriquece tanto quanto complica."
   },
   {
    "fr": "Je me demande parfois à quel endroit je me sens vraiment chez moi.",
    "pt": "Às vezes eu me pergunto em que lugar eu me sinto realmente em casa."
   },
   {
    "fr": "Peut-être que l'identité, ce n'est pas un lieu, mais un chemin.",
    "pt": "Talvez a identidade não seja um lugar, mas um caminho."
   }
  ]
 },
 {
  "title": "Souvenirs d'enfance",
  "phrases": [
   {
    "fr": "Quand j'étais petit, je passais mes vacances chez mes grands-parents.",
    "pt": "Quando eu era pequeno, passava as férias na casa dos meus avós."
   },
   {
    "fr": "Ils avaient une petite ferme près de Goiânia.",
    "pt": "Eles tinham um sitiozinho perto de Goiânia."
   },
   {
    "fr": "On grimpait aux arbres pour cueillir des mangues.",
    "pt": "A gente subia nas árvores para pegar manga."
   },
   {
    "fr": "Ma grand-mère préparait des pamonhas tous les après-midi.",
    "pt": "Minha avó fazia pamonha todas as tardes."
   },
   {
    "fr": "En fin d'après-midi, on jouait au ballon dans la rue jusqu'à la nuit tombée.",
    "pt": "No fim da tarde, a gente jogava bola na rua até escurecer."
   },
   {
    "fr": "Il n'y avait pas d'écrans, mais on ne s'ennuyait jamais.",
    "pt": "Não tinha tela nenhuma, mas a gente nunca ficava entediado."
   },
   {
    "fr": "L'odeur du café frais me ramène toujours à cette époque.",
    "pt": "O cheiro de café fresquinho sempre me leva de volta para essa época."
   },
   {
    "fr": "Je n'avais pas conscience de la chance que j'avais.",
    "pt": "Eu não tinha noção da sorte que eu tinha."
   },
   {
    "fr": "Aujourd'hui, la ferme a été vendue, mais les souvenirs restent.",
    "pt": "Hoje o sítio foi vendido, mas as lembranças ficaram."
   },
   {
    "fr": "J'aimerais offrir des moments comme ceux-là à mes propres enfants.",
    "pt": "Eu queria proporcionar momentos assim para os meus filhos."
   }
  ]
 },
 {
  "title": "Un au revoir difficile",
  "phrases": [
   {
    "fr": "Mon meilleur ami part s'installer à l'étranger la semaine prochaine.",
    "pt": "Meu melhor amigo vai se mudar para o exterior semana que vem."
   },
   {
    "fr": "Nous avons organisé une dernière soirée sur la plage de Florianópolis.",
    "pt": "A gente organizou uma última noite na praia, em Florianópolis."
   },
   {
    "fr": "On a passé des heures à se rappeler nos bêtises de jeunesse.",
    "pt": "A gente passou horas lembrando das nossas besteiras de juventude."
   },
   {
    "fr": "Personne n'osait vraiment prononcer le mot adieu.",
    "pt": "Ninguém tinha coragem de dizer a palavra adeus."
   },
   {
    "fr": "Je suis heureux pour lui, mais j'ai le cœur serré.",
    "pt": "Eu estou feliz por ele, mas estou com o coração apertado."
   },
   {
    "fr": "Il m'a promis de revenir pour le carnaval.",
    "pt": "Ele me prometeu voltar para o carnaval."
   },
   {
    "fr": "Aujourd'hui, la distance n'empêche plus de rester proches.",
    "pt": "Hoje em dia, a distância não impede mais a gente de continuar perto."
   },
   {
    "fr": "Les vraies amitiés résistent au temps et aux kilomètres.",
    "pt": "As amizades de verdade resistem ao tempo e à distância."
   },
   {
    "fr": "Malgré tout, je garde l'espoir qu'on se reverra bientôt.",
    "pt": "Apesar de tudo, eu tenho esperança de que a gente se veja logo."
   },
   {
    "fr": "Ce n'est pas un adieu, c'est juste un à bientôt.",
    "pt": "Não é um adeus, é só um até logo."
   }
  ]
 },
 {
  "title": "Regarder en arrière sur ce parcours en portugais",
  "phrases": [
   {
    "fr": "Quand j'ai commencé le portugais, je ne savais même pas dire bonjour.",
    "pt": "Quando eu comecei a estudar português, eu não sabia nem dizer bom dia."
   },
   {
    "fr": "Les sons nasals me semblaient impossibles à prononcer.",
    "pt": "Os sons nasais me pareciam impossíveis de pronunciar."
   },
   {
    "fr": "Aujourd'hui, il m'arrive de rêver directement en portugais.",
    "pt": "Hoje, às vezes eu sonho direto em português."
   },
   {
    "fr": "Ce changement s'est fait petit à petit, presque sans que je m'en rende compte.",
    "pt": "Essa mudança aconteceu aos poucos, quase sem eu perceber."
   },
   {
    "fr": "Chaque trajet est devenu une occasion d'apprendre.",
    "pt": "Cada trajeto virou uma oportunidade de aprender."
   },
   {
    "fr": "J'ai fait beaucoup d'erreurs, et c'était tant mieux.",
    "pt": "Eu cometi muitos erros, e ainda bem."
   },
   {
    "fr": "Ce sont ces erreurs qui m'ont fait progresser.",
    "pt": "Foram esses erros que me fizeram progredir."
   },
   {
    "fr": "Le subjonctif ne me fait plus peur du tout.",
    "pt": "O subjuntivo não me assusta mais de jeito nenhum."
   },
   {
    "fr": "Je suis fier du chemin parcouru depuis la première leçon.",
    "pt": "Eu tenho orgulho do caminho que percorri desde a primeira lição."
   },
   {
    "fr": "Apprendre une langue, c'est s'ouvrir une nouvelle porte sur le monde.",
    "pt": "Aprender uma língua é abrir uma nova porta para o mundo."
   }
  ]
 },
 {
  "title": "Fin du parcours : un dernier bilan",
  "phrases": [
   {
    "fr": "Ce dernier module a abordé les sujets les plus profonds de tout le parcours.",
    "pt": "Este último módulo tratou dos assuntos mais profundos de todo o percurso."
   },
   {
    "fr": "Identité, amitié, saudade : nous avons tout exploré en portugais.",
    "pt": "Identidade, amizade, saudade: a gente explorou tudo em português."
   },
   {
    "fr": "Le subjonctif et les expressions idiomatiques nous sont maintenant familiers.",
    "pt": "O subjuntivo e as expressões idiomáticas agora são familiares para a gente."
   },
   {
    "fr": "Tu peux désormais exprimer une opinion nuancée avec aisance.",
    "pt": "Agora você consegue expressar uma opinião cheia de nuances com facilidade."
   },
   {
    "fr": "Tu sais aussi parler de tes émotions et de tes souvenirs.",
    "pt": "Você também sabe falar das suas emoções e das suas lembranças."
   },
   {
    "fr": "Le portugais fait désormais vraiment partie de toi.",
    "pt": "O português agora faz parte de você de verdade."
   },
   {
    "fr": "Continue à écouter de la musique et à regarder des films brésiliens.",
    "pt": "Continue ouvindo música e assistindo a filmes brasileiros."
   },
   {
    "fr": "Et surtout, n'aie pas peur de parler avec des Brésiliens.",
    "pt": "E, acima de tudo, não tenha medo de conversar com brasileiros."
   },
   {
    "fr": "Merci de nous avoir accompagnés sur chacun de tes trajets.",
    "pt": "Obrigado por nos acompanhar em cada um dos seus trajetos."
   },
   {
    "fr": "Bravo, et à bientôt sur les routes du Brésil !",
    "pt": "Parabéns, e até breve nas estradas do Brasil!"
   }
  ]
 }
];

const LEVEL1_MODULES = [
  {
    id:1, name:"Le quotidien",
    desc:"La vie de tous les jours au Brésil, en route et à la maison.",
    totalPhrases:200, lessonsCount:20,
    lessons: level1Module1Lessons
  },
  {
    id:2, name:"En voyage",
    desc:"Se déplacer, découvrir et gérer les imprévus au Brésil.",
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
    desc:"Une vie quotidienne installée au Brésil, avec ses subtilités.",
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
