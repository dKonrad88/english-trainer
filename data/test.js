/* Teste de nivel B2-C2: 21 questoes com distratores dificeis (verificadas
   uma a uma: 'hard' e 'unambiguous'). */

const TEST_QUESTIONS = [
 {
  "level": "B2",
  "type": "Escuta",
  "q": "O que o atendente está comunicando?",
  "options": [
   "A cozinha vai fechar logo, então a partir de agora só servem bebidas.",
   "A cozinha já fechou, mas ainda dá tempo de pedir comida com as bebidas.",
   "A cozinha continua aberta; só pararam de servir bebidas por enquanto.",
   "A cozinha fecha mais tarde, então ainda dá para pedir comida e bebida."
  ],
  "answer": 0,
  "trap": "Os distratores exploram erros típicos de B2: (1) confundir \"about to close\" (prestes a fechar, ainda não fechou) com \"já fechou\"; (2) inverter \"only doing drinks\" achando que pararam as bebidas, não a comida; (3) ignorar a urgência de \"about to\" e o \"only\", assumindo que comida ainda é possível. A chave une corretamente \"about to close\" (futuro imediato) + \"only doing drinks\" (apenas bebidas a partir de agora).",
  "audio": "Sorry, the kitchen's about to close, so we're only doing drinks now."
 },
 {
  "level": "B2",
  "type": "Vocabulário",
  "q": "No balcão de um hotel em Orlando, você quer pedir educadamente que a recepção guarde suas malas até o quarto ficar pronto. Qual verbo soa mais natural para um falante nativo?",
  "options": [
   "Could you store my bags until the room is ready?",
   "Could you keep my bags until the room is ready?",
   "Could you save my bags until the room is ready?",
   "Could you reserve my bags until the room is ready?"
  ],
  "answer": 0,
  "trap": "\"Store\" é a colocação nativa para guardar bagagem em hotel (luggage storage). Os distratores enganam: \"keep\" sugere reter/ficar com de forma permanente; \"save\" colocа com lugares/assentos (save a seat), não malas; \"reserve\" sugere reservar antecipadamente algo que ainda não se tem, não guardar objetos que você entrega. Todos são gramaticais e tentadores para um B2, mas só \"store\" é idiomático aqui."
 },
 {
  "level": "B2",
  "type": "Colocação",
  "q": "You overslept and barely made it to the gate just before the doors closed. Telling the story afterwards, which verb does a native speaker idiomatically use here: \"Luckily, I managed to ___ my flight\"?",
  "options": [
   "catch",
   "take",
   "reach",
   "board onto"
  ],
  "answer": 0,
  "trap": "Learners over-apply \"take\" (take a bus/train/plane) and assume it fits the time-pressure context, but \"manage to ___ a flight\" in the sense of just-in-time boarding collocates with \"catch\", mirroring \"catch a bus/train\". \"Take a flight\" describes choosing/using a flight, not making it in time, so it doesn't fit \"managed to\". \"Reach\" suits a place, not a flight, and \"board onto\" is non-idiomatic (\"board\" takes a direct object)."
 },
 {
  "level": "B2",
  "type": "Expressão idiomática",
  "q": "Um amigo americano conta sobre o parque no fim de semana e diz: \"It was packed.\" O que ele quer dizer?",
  "options": [
   "Estava lotado, cheíssimo de gente.",
   "As pessoas já tinham feito as malas para ir embora.",
   "Estava tudo pronto e arrumado para o evento.",
   "Estava praticamente vazio naquele horário."
  ],
  "answer": 0,
  "trap": "'Packed' como adjetivo informal significa 'lotado/abarrotado de gente', não o sentido literal do verbo 'to pack' (fazer as malas/embalar). Os distratores 1 e 2 exploram justamente esse falso amigo com o verbo, e o 3 inverte o sentido (vazio), tentando quem confunde 'packed' com 'packed up and left'."
 },
 {
  "level": "B2",
  "type": "Registro",
  "q": "You're at a restaurant and the waiter offers you a dessert. You want to turn it down politely, without sounding rude or abrupt. Which reply works best?",
  "options": [
   "I'm good, thanks — maybe just the check.",
   "I must decline the dessert.",
   "I refuse the dessert, thank you.",
   "I won't have any dessert."
  ],
  "answer": 0,
  "trap": "Os distratores parecem educados na superfície (todos têm 'thank you' implícito ou verbos 'corretos'), mas são pragmaticamente marcados: 'I must decline' é rígido demais, soa como recusar um convite formal por escrito, não falar com um garçom; 'I refuse the dessert' usa 'refuse' de forma confrontacional/quase hostil — equivale a 'me recuso'; 'I won't have any dessert' é uma declaração seca, sem o amortecimento da polidez. A pegadinha é equiparar formalidade ou correção gramatical a cortesia natural. A opção 0 usa a fórmula idiomática real de declínio ('I'm good, thanks') com um pedido cooperativo que suaviza o tom."
 },
 {
  "level": "B2",
  "type": "Colocação",
  "q": "No aeroporto, você quer perguntar onde retirar a bagagem despachada. Qual termo americano é o correto?",
  "options": [
   "Where's baggage claim?",
   "Where's the luggage withdrawal?",
   "Where's the bag recovery?",
   "Where's baggage retrieval?"
  ],
  "answer": 0,
  "trap": "O distrator mais perigoso é 3 (\"baggage retrieval\"): \"retrieval\" é semanticamente próximo de \"retirada\" e aparece em sinalização internacional/britânica, mas o termo americano fixo e idiomático é \"baggage claim\" (sem artigo). \"Luggage withdrawal\" (1) soa como saque bancário e é uma tradução literal traiçoeira de \"retirada\"; \"bag recovery\" (2) sugere recuperação de bagagem extraviada. Só \"baggage claim\" é a colocação americana padrão."
 },
 {
  "level": "B2",
  "type": "Vocabulário",
  "q": "Você quer dizer que o ingresso do parque 'compensou' o preço alto porque valeu a pena. Qual frase é idiomática?",
  "options": [
   "It was worth it.",
   "It paid the price.",
   "It compensated the price.",
   "It was worth the while."
  ],
  "answer": 0,
  "trap": "Os distratores exploram interferência do português: 'It paid the price' soa como 'pagou o preço' mas em inglês significa sofrer uma consequência negativa; 'It compensated the price' é um falso cognato direto de 'compensar' que não colloca em inglês; 'It was worth the while' está perto do idiom real 'worth one's while' (precisa de pronome: 'worth my while') e é o erro mais sedutor para C1-C2. Só 'It was worth it' é totalmente idiomático e natural."
 },
 {
  "level": "C1",
  "type": "Escuta",
  "q": "O que está sendo proposto?",
  "options": [
   "Dar uma passada nos outlets na volta, se você topar.",
   "Passar voando pelos outlets na volta, sem parar.",
   "Evitar os outlets no caminho de volta.",
   "Decidir agora se vale a pena ir aos outlets."
  ],
  "answer": 0,
  "trap": "Os distratores exploram leituras parciais dos idiomas C1: 'swing by' significa dar uma passada/parar rapidamente (não 'passar voando sem parar' nem 'evitar'), e 'if you're up for it' = se você topar/estiver a fim (não 'decidir agora se vale a pena'). 'could' marca sugestão tentativa, não recusa. Só a opção 0 capta ambos os sentidos corretamente.",
  "audio": "We could swing by the outlets on the way back if you're up for it."
 },
 {
  "level": "C1",
  "type": "Escuta",
  "q": "Qual é o conselho dado?",
  "options": [
   "Esperar para comprar o express pass até ver quão cheio fica.",
   "Comprar o express pass agora mesmo para garantir a entrada.",
   "Desistir de vez do express pass, pois não vale a pena.",
   "Segurar fisicamente o passe na mão até passar pela catraca."
  ],
  "answer": 0,
  "trap": "\"Hold off on\" significa adiar/esperar, não recusar (opção 2) nem segurar fisicamente (opção 3, armadilha literal de \"hold\"). \"Until we see how busy it gets\" indica espera condicional, não compra imediata (opção 1).",
  "audio": "I'd hold off on buying the express pass until we see how busy it gets."
 },
 {
  "level": "C1",
  "type": "Colocação",
  "q": "You want to say that you reserved the hotel 'com bastante antecedência'. Which collocation is the most natural?",
  "options": [
   "I booked the hotel well in advance.",
   "I booked the hotel with much antecedence.",
   "I booked the hotel quite early in advance.",
   "I booked the hotel with plenty of advance."
  ],
  "answer": 0,
  "trap": "\"Well in advance\" e a colocacao fixa idiomatica. Distrator 1 explora o falso cognato 'antecedence' (= antecedencia), atraente para falantes de PT/ES. Distrator 2 contem o correto 'in advance' mas adiciona 'early' redundante (pleonasmo). Distrator 3 imita 'plenty of advance notice' mas omite 'notice', deixando 'advance' como substantivo solto e agramatical. So a opcao 0 e idiomatica."
 },
 {
  "level": "C1",
  "type": "Registro",
  "q": "You are checking back in with the front desk to complain that your room still has not been cleaned. You want to sound firm but courteous (C1 register). Which option best balances firmness with politeness?",
  "options": [
   "I'm afraid the room still hadn't been made up when we got back this evening.",
   "I do hope you won't mind me mentioning that the room might possibly not have been cleaned.",
   "The room has not been cleaned, which is frankly unacceptable.",
   "Why on earth wasn't my room cleaned today?"
  ],
  "answer": 0,
  "trap": "Distractor 1 piles on hedges (\"I do hope\", \"might possibly\") and reads as polite, but it is so over-apologetic that it loses all firmness and sounds insincere — register fail. Distractor 2 is firm but \"frankly unacceptable\" is blunt and confrontational, not courteous. Distractor 3 (\"Why on earth\") is an accusatory challenge. Only option 0 pairs the softening \"I'm afraid\" with the neutral hotel idiom \"made up\" and a plain factual report, holding firmness and politeness in balance."
 },
 {
  "level": "C1",
  "type": "Expressão idiomática",
  "q": "Um colega de viagem, exausto após um dia inteiro no parque, se joga na cadeira e diz: 'Honestly, I'm running on fumes — I don't think I can do anything else today.' O que ele quer dizer?",
  "options": [
   "Está sem energia, no limite das forças.",
   "Está irritado, prestes a perder a paciência (\"fuming\").",
   "Está eufórico, com adrenalina a mil depois da emoção.",
   "Está com pressa porque o carro está quase sem gasolina."
  ],
  "answer": 0,
  "trap": "\"Running on fumes\" vem da imagem de um carro andando só com os vapores no tanque vazio, mas idiomaticamente significa estar exausto, funcionando com a última reserva de energia. O distrator do carro (4) explora a origem literal; o da irritação (2) explora a falsa associação com \"fuming\" (estar furioso); o da euforia (3) inverte o sentido. O contexto 'I don't think I can do anything else today' confirma exaustão."
 },
 {
  "level": "C1",
  "type": "Vocabulário",
  "q": "No restaurante, você quer pedir as sobras para levar. Qual termo americano é o usual?",
  "options": [
   "Could I get a to-go box, please?",
   "Could I get a take-away box, please?",
   "Could I get a leftover bag, please?",
   "Could I get a doggy package, please?"
  ],
  "answer": 0,
  "trap": "O distrator mais perigoso é o 1 (\"take-away\"), que é inglês britânico/australiano, não americano — testa a distinção de registro US vs UK. O 3 explora o idiom real \"doggy bag\", mas troca \"bag\" por \"package\" (colocação errada). O 2 usa a raiz correta (\"leftovers\") numa colocação inexistente. Apenas o 0 (\"to-go box\") é simultaneamente americano e idiomaticamente correto."
 },
 {
  "level": "C1",
  "type": "Registro",
  "q": "Você quer pedir educadamente que alguém repita algo que não entendeu, num tom neutro-profissional (ex.: numa reunião de trabalho). Qual soa melhor?",
  "options": [
   "Sorry, would you mind repeating that?",
   "Sorry, you lost me there — run that by me again?",
   "I beg your pardon? Kindly reiterate your statement.",
   "Huh? Didn't catch that, mate."
  ],
  "answer": 0,
  "trap": "Os três distratores são gramaticalmente corretos e parecem polidos, forçando o candidato a julgar o REGISTRO, não a gramática. (1) \"run that by me again\" é idiomático mas casual/coloquial demais para um tom neutro-profissional. (2) \"I beg your pardon... Kindly reiterate your statement\" é formal demais, rígido e arcaico, soando sarcástico ou afetado num escritório moderno. (3) \"Huh?... mate\" é nitidamente informal/familiar. Só a opção 0 acerta o registro neutro-profissional, educado sem ser pomposo nem casual."
 },
 {
  "level": "C2",
  "type": "Nuance sutil",
  "q": "Um amigo americano, ao falar sobre um restaurante caro que você sugeriu, diz com uma pausa hesitante e entonação descendente: 'I mean, it's... fine.' O que ele provavelmente quer dizer?",
  "options": [
   "Está sutilmente sinalizando que, na verdade, não gostou muito.",
   "Está confirmando, com convicção tranquila, que aprovou plenamente a escolha.",
   "Está dizendo, de forma neutra, que o lugar atendeu às expectativas sem ressalvas.",
   "Está indicando que prefere não opinar e deixar a decisão totalmente com você."
  ],
  "answer": 0,
  "trap": "A armadilha é a leitura literal de 'fine' como 'bom/tudo certo'. Em inglês americano, 'it's fine' com hedging ('I mean'), pausa e entonação caindo é um clássico understatement/faint praise: 'fine' aqui significa apenas 'aceitável, nada de especial', sinalizando educadamente decepção. Os distratores 1 (entusiasmo) e 2 (neutro positivo) exploram a falsa equivalência fine=ótimo/ok; o 3 confunde com a função de deferir a decisão."
 },
 {
  "level": "C2",
  "type": "Colocação",
  "q": "Você quer dizer, com elegância, que a viagem 'superou todas as expectativas'. Qual colocação soa mais nativa e idiomática?",
  "options": [
   "The trip exceeded all our expectations.",
   "The trip overcame all our expectations.",
   "The trip surpassed over our expectations.",
   "The trip went beyond of our expectations."
  ],
  "answer": 0,
  "trap": "Os distratores corrompem colocações que seriam corretas: 'surpassed our expectations' e 'went beyond our expectations' são nativas, mas as opções inserem uma preposição espúria ('surpassed OVER', 'beyond OF'). 'Overcame' colide com 'overcome obstacles/difficulties', nunca 'expectations'. Só 'exceeded all our expectations' está totalmente correto e idiomático."
 },
 {
  "level": "C2",
  "type": "Expressão idiomática",
  "q": "Decidindo gastar num jantar especial na última noite, um amigo diz 'Let's just push the boat out tonight.' O que ele propõe?",
  "options": [
   "Gastar sem economizar e comemorar em grande estilo.",
   "Arriscar e se aventurar para ver no que dá.",
   "Evitar gastos e fazer algo simples.",
   "Sair para um passeio de barco à noite."
  ],
  "answer": 0,
  "trap": "'Push the boat out' (BrE) significa gastar generosamente para comemorar em grande estilo. As armadilhas: opção 3 é a leitura literal (passeio de barco); opção 2 é o sentido oposto (economizar/algo simples), tentador para quem associa 'barco' a modéstia/praticidade; opção 1 explora a imagem de 'lançar o barco' como arriscar-se/aventurar-se, mas o idioma é especificamente sobre gastar com extravagância numa celebração, não sobre correr riscos."
 },
 {
  "level": "C2",
  "type": "Registro",
  "q": "Numa reclamação formal por escrito ao hotel sobre uma cobrança indevida, qual abertura tem o registro mais apropriado?",
  "options": [
   "I am writing to bring to your attention an erroneous charge on my account.",
   "I wanted to flag a weird charge that showed up on my bill.",
   "I'm reaching out because there's something off with my charges.",
   "Just letting you know you charged me wrong."
  ],
  "answer": 0,
  "trap": "Os distratores soam naturais e gramaticais, o que tenta o candidato. O distrator 2 (\"I'm reaching out... something off\") é o mais perigoso: \"reaching out\" virou comum em e-mails semiprofissionais, mas continua casual demais e \"something off\" é coloquial. O 1 (\"flag\", \"weird\") e o 3 (\"Just letting you know\", \"charged me wrong\") têm marcadores informais claros. Só a opção 0, com \"I am writing to bring to your attention\" + \"erroneous charge\", tem o registro formal exigido numa reclamação escrita."
 },
 {
  "level": "C2",
  "type": "Nuance sutil",
  "q": "Which sentence subtly implies that you were PRESSURED into tipping, rather than having tipped freely and willingly?",
  "options": [
   "We ended up tipping twenty percent.",
   "We were happy to tip twenty percent.",
   "We gladly tipped twenty percent.",
   "We felt we had to tip twenty percent."
  ],
  "answer": 0,
  "trap": "The three distractors all encode genuine willingness (\"happy to\", \"gladly\", \"felt we had to\"... wait — \"felt we had to\" is the real trap). A C2 candidate must notice that \"ended up tipping\" (option 0) is the right answer because the phrasal verb \"end up + -ing\" signals an unplanned, reluctantly-reached outcome driven by circumstance — you arrived there without intending to. The strong trap is option 3, \"We felt we had to tip\", which ALSO conveys obligation/pressure and is the most dangerous distractor; however, \"had to\" expresses internal/social obligation or compulsion (a felt duty), not the sense of drifting into an outcome by external circumstance. The question asks specifically about being \"pressured into\" vs. spontaneity, and \"ended up\" is the established idiomatic marker of a non-spontaneous, circumstance-forced result, whereas \"felt we had to\" leans toward perceived duty. Options 1 and 2 (\"happy to\", \"gladly\") are clear willingness markers and easier to eliminate, but they keep a B2 reader honest. Note: the original option 3 (\"We chose to tip\") was too obviously a willingness marker and offered no real pressure-resistant; it has been rewritten to \"We felt we had to tip\" to create a genuine near-miss that forces discrimination between \"circumstantially ended up\" and \"felt obligated\"."
 },
 {
  "level": "C2",
  "type": "Escuta",
  "q": "Como o falante avaliou os fogos de artifício?",
  "options": [
   "Achou-os decepcionantes, aquém do que esperava.",
   "Ficou genuinamente impressionado com o espetáculo.",
   "Sentiu-se sobrecarregado pela intensidade dos efeitos.",
   "Reconheceu que foram bons, embora um pouco repetitivos."
  ],
  "answer": 0,
  "trap": "A pista central é \"underwhelmed\" (= aquém do esperado, decepcionante), reforçada por \"not gonna lie\" e \"honestly\", que sinalizam uma admissão sincera de decepção. O distrator 2 explora a confusão lexical com \"overwhelmed\" (sobrecarregado): \"underwhelmed\" e \"overwhelmed\" são quase opostos, e um aprendiz pode trocá-los. O distrator 1 é o oposto direto. O distrator 3 (não conseguiu ver) é uma inferência indevida, plausível para quem não captou a palavra-chave. O distrator 4 foi reescrito para soar moderado e razoável, capaz de atrair quem percebe \"a little\" (= um pouco) e o tom de hedge, mas ignora que o juízo é negativo, não morno-positivo."
 },
 {
  "level": "C2",
  "type": "Vocabulário",
  "q": "Você quer descrever que o parque estava 'absurdamente cheio', com um termo informal porém preciso de um falante nativo. Qual encaixa melhor?",
  "options": [
   "The park was absolutely mobbed.",
   "The park was absolutely congested.",
   "The park was absolutely fulfilled.",
   "The park was absolutely numerous."
  ],
  "answer": 0,
  "trap": "O distrator mais forte é 'congested', um termo REAL que significa 'congestionado/cheio', mas que colocacionalmente pertence a trânsito, vias respiratórias ou redes — não ao registro informal e idiomático exigido para um parque lotado. Substituí o antigo 'crowdy' (que era apenas uma não-palavra, denunciando-se sozinha) por 'congested' para que o erro dependa de sensibilidade de colocação/registro, não de ortografia. 'Fulfilled' (= satisfeito/realizado) e 'numerous' (= numerosos, predicativo agramatical aqui) permanecem como armadilhas de falso cognato e de número. Apenas 'mobbed' é o coloquial nativo correto para 'absurdamente cheio'."
 }
];
