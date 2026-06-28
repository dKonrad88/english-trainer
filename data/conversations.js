/* Mini-conversas imersivas por tema (geradas e verificadas). */

const CONVERSATIONS = {
 "shopping": {
  "title_pt": "Caçando descontos no outlet",
  "setting_pt": "Domingo de manhã num outlet em Orlando. Você está numa loja de roupas tentando aproveitar uma liquidação de fim de temporada e conversa com o atendente sobre tamanhos, descontos e a política de troca.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "text": "Hey there, welcome in! Just so you know, everything on that back rack is an extra 30% off at the register.",
    "voice": "us_male",
    "translation_pt": "Oi, seja bem-vindo! Só pra você saber, tudo naquela arara do fundo sai com 30% extra de desconto no caixa."
   },
   {
    "speaker": "you",
    "text": "Oh nice, thanks for the heads-up. Do you have this hoodie in a medium? The rack's pretty picked over.",
    "choices": [
     {
      "text": "Oh nice, thanks for the heads-up. Do you have this hoodie in a medium? The rack's pretty picked over.",
      "ok": true,
      "why": "Natural e idiomático: 'thanks for the heads-up' e 'picked over' soam como nativo numa loja."
     },
     {
      "text": "Oh nice, thanks for the advise. Do you have this hoodie in a medium number?",
      "ok": false,
      "why": "'advise' é verbo (o substantivo é 'advice', incontável: 'thanks for the advice') e tamanho de roupa não é 'number', é 'size'."
     },
     {
      "text": "Oh nice, that's good to know. Do you have this hoodie on a medium?",
      "ok": false,
      "why": "Near-miss sutil: a frase em si é boa, mas tamanho de roupa pede 'in a medium', não 'on a medium' (preposição errada)."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Let me check the back for you. We just got a fresh shipment, so we might have your size in the stockroom.",
    "voice": "us_female",
    "translation_pt": "Deixa eu dar uma olhada no estoque pra você. Acabou de chegar mercadoria nova, então pode ser que a gente tenha seu tamanho no depósito."
   },
   {
    "speaker": "you",
    "text": "That'd be great. And is there a fitting room around? I'd like to try it on before I commit.",
    "voice": "uk_male",
    "translation_pt": "Seria ótimo. E tem um provador por aqui? Queria experimentar antes de me decidir."
   },
   {
    "speaker": "them",
    "text": "Sure, the fitting rooms are right behind you. Take in as many as you like.",
    "voice": "us_female",
    "translation_pt": "Claro, os provadores ficam logo atrás de você. Pode levar quantas peças quiser lá pra dentro."
   },
   {
    "speaker": "you",
    "text": "Perfect. One more thing, what's your return policy if I change my mind back home?",
    "choices": [
     {
      "text": "Perfect. One more thing, what's your return policy if I change my mind back home?",
      "ok": true,
      "why": "'return policy' e 'change my mind' são exatamente o que um nativo diz numa loja."
     },
     {
      "text": "Perfect. One more thing, what's your devolution policy if I regret it back home?",
      "ok": false,
      "why": "'devolution' é falso cognato (significa transferência de poderes político, não devolução de produto); o certo é 'return policy'."
     },
     {
      "text": "Perfect. One more thing, can I give the clothes back if they don't work out at home?",
      "ok": false,
      "why": "Near-miss: gramatical e quase natural, mas 'give back' soa mais informal/infantil que 'return' nesse contexto de política de loja."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "No worries at all. Keep the tags on and bring your receipt within 60 days, and you're golden for a full refund.",
    "voice": "us_male",
    "translation_pt": "Sem problema nenhum. Mantenha as etiquetas e traga o recibo dentro de 60 dias, e está tudo certo pra um reembolso integral."
   },
   {
    "speaker": "you",
    "text": "Honestly, at this price it's a steal. I'll take two then, ring me up.",
    "voice": "uk_male",
    "translation_pt": "Sinceramente, por esse preço é uma pechincha. Vou levar dois então, pode passar no caixa."
   },
   {
    "speaker": "them",
    "text": "You got it. Head over to register two whenever you're ready and I'll get you checked out.",
    "voice": "us_female",
    "translation_pt": "Pode deixar. Vá até o caixa dois quando estiver pronto que eu finalizo sua compra."
   }
  ],
  "theme": "shopping"
 },
 "hotel": {
  "title_pt": "Problema no quarto e cobrança extra no check-out",
  "setting_pt": "Você fez check-in num hotel perto da Universal em Orlando. O ar-condicionado do quarto não funciona direito e, no dia do check-out, aparece uma cobrança estranha na conta. Você liga e depois vai até a recepção (front desk) para resolver.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Good morning, front desk, this is Mariah. How can I help you?",
    "translation_pt": "Bom dia, recepção, aqui é a Mariah. Como posso ajudar?"
   },
   {
    "speaker": "you",
    "text": "Hi, I'm in room 412 and the AC has been on the fritz since last night. The room's still really warm.",
    "choices": [
     {
      "text": "Hi, I'm in room 412 and the AC has been on the fritz since last night. The room's still really warm.",
      "ok": true,
      "why": "Natural e idiomático. 'on the fritz' (com defeito) soa como falante nativo e descreve bem um aparelho que para de funcionar."
     },
     {
      "text": "Hi, I'm in room 412 and the AC is on the fritz since yesterday night. The room stays really warm.",
      "ok": false,
      "why": "Dois erros: 'since yesterday night' (o certo é 'since last night') e 'is on the fritz since' deveria estar no present perfect ('has been on the fritz since')."
     },
     {
      "text": "Hi, I'm in room 412 and the AC is broke since last night. The room is very warm yet.",
      "ok": false,
      "why": "'is broke' é gíria para 'sem dinheiro', não para aparelho quebrado; e 'warm yet' está mal posicionado (o certo seria 'still warm')."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Oh, I'm so sorry about that. Let me get maintenance up there right away. Would you like us to move you to another room in the meantime?",
    "translation_pt": "Ah, sinto muito por isso. Vou mandar a manutenção subir agora mesmo. Você gostaria que a gente te transferisse para outro quarto enquanto isso?"
   },
   {
    "speaker": "you",
    "text": "If it's not too much trouble, yeah. I'd rather not sweat it out all night.",
    "choices": [
     {
      "text": "If it's not too much trouble, yeah. I'd rather not sweat it out all night.",
      "ok": true,
      "why": "'If it's not too much trouble' é educado e natural; 'sweat it out' encaixa bem com o calor e soa coloquial e nativo."
     },
     {
      "text": "If it doesn't disturb you, yeah. I'd rather not pass the night in this heat.",
      "ok": false,
      "why": "'doesn't disturb you' soa estranho aqui (use 'if it's not too much trouble'); 'pass the night' é calque do português ('passar a noite'), o natural é 'spend the night'."
     },
     {
      "text": "Yes, please. I don't want to stay in the heat all the night.",
      "ok": false,
      "why": "Compreensível, mas 'all the night' não é idiomático em inglês (o certo é 'all night'); soa a tradução literal."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "No trouble at all. I'll put you in 518 — it's a king with a better view anyway. Just swing by the desk and I'll have your new keys ready.",
    "translation_pt": "Não é incômodo nenhum. Vou te colocar no 518, é um quarto de cama king e com vista melhor, aliás. É só dar uma passada na recepção que deixo suas chaves novas prontas."
   },
   {
    "speaker": "you",
    "text": "Perfect, I'll be right down. Oh, and one more thing — there's a charge on my bill I don't recognize.",
    "translation_pt": "Perfeito, já desço. Ah, e mais uma coisa: tem uma cobrança na minha conta que eu não reconheço."
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Let me pull up your account. Ah, I see — that's the resort fee. It's twenty-five a night and it covers the Wi-Fi and the pool area. It's all spelled out in the booking, but I know it's easy to miss.",
    "translation_pt": "Deixa eu abrir sua conta. Ah, entendi: é a taxa de resort. São vinte e cinco por noite e cobre o Wi-Fi e a área da piscina. Está tudo detalhado na reserva, mas eu sei que é fácil passar batido."
   },
   {
    "speaker": "you",
    "text": "Got it, that makes sense. Thanks for clearing that up — I'll head down for the keys now.",
    "translation_pt": "Entendi, faz sentido. Obrigado por esclarecer, vou descer pegar as chaves agora."
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Sounds good. See you in a bit, and again, so sorry for the hassle!",
    "translation_pt": "Combinado. Te vejo daqui a pouco e, de novo, desculpa pelo transtorno!"
   }
  ],
  "theme": "hotel"
 },
 "dining": {
  "title_pt": "Jantar de família em Orlando",
  "setting_pt": "Você chega sem reserva a um restaurante movimentado na International Drive, em Orlando, numa sexta-feira à noite. Você está com a família e precisa de uma mesa, tem uma dúvida sobre alergia no cardápio e, no fim, vai resolver a conta.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Hi there, welcome! Do you have a reservation tonight?",
    "translation_pt": "Oi, bem-vindos! Vocês têm reserva para hoje?"
   },
   {
    "speaker": "you",
    "text": "No, we don't, sorry. Do you have a table for four?",
    "choices": [
     {
      "text": "No, we don't, sorry. Do you have a table for four?",
      "ok": true,
      "why": "Natural e educado; usa o chunk fixo 'a table for four' corretamente."
     },
     {
      "text": "No. Do you have a table to four?",
      "ok": false,
      "why": "Preposição errada: é 'a table FOR four', não 'to four' (decalque de 'para')."
     },
     {
      "text": "No. I want a table of four right now.",
      "ok": false,
      "why": "'A table OF four' = um grupo de quatro, não o pedido; e 'right now' soa exigente."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Let me check… We're pretty packed tonight, but I can seat you in about fifteen minutes. Is that okay?",
    "translation_pt": "Deixa eu ver… Estamos bem lotados hoje, mas consigo acomodar vocês em uns quinze minutos. Pode ser?"
   },
   {
    "speaker": "you",
    "text": "That's fine, thanks. Quick question — does the chicken pad thai have peanuts? My daughter's allergic to nuts.",
    "translation_pt": "Tudo bem, obrigado. Uma pergunta rápida — o pad thai de frango tem amendoim? Minha filha é alérgica a oleaginosas."
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Good thing you mentioned it. The pad thai does have peanuts, but the kitchen can make it nut-free. I'll flag it as an allergy on the order.",
    "translation_pt": "Que bom que você mencionou. O pad thai tem amendoim, sim, mas a cozinha pode fazer sem oleaginosas. Vou marcar como alergia no pedido."
   },
   {
    "speaker": "you",
    "text": "Perfect, thank you. And later, could we get the check all together, or do you do separate checks?",
    "choices": [
     {
      "text": "Perfect, thank you. And later, could we get the check all together, or do you do separate checks?",
      "ok": true,
      "why": "Usa 'the check' (americano) e 'separate checks' de forma natural e educada."
     },
     {
      "text": "Perfect. And later, could we get the account all together?",
      "ok": false,
      "why": "Falso amigo: 'account' é conta bancária; no restaurante é 'check' (EUA) ou 'bill' (RU)."
     },
     {
      "text": "Perfect. Later you bring me the bill divided, okay?",
      "ok": false,
      "why": "Soa como ordem e 'the bill divided' não é idiomático; melhor 'separate checks'."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Whatever works for you — we can split it however you like. I'll grab some menus and call you when your table's ready.",
    "translation_pt": "Como preferirem — a gente divide do jeito que vocês quiserem. Vou pegar uns cardápios e chamo vocês quando a mesa estiver pronta."
   },
   {
    "speaker": "you",
    "text": "Sounds great. We'll wait right by the bar.",
    "translation_pt": "Ótimo. A gente espera ali do lado do bar."
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Awesome. And hey — since you've got a bit of a wait, the first round of sodas is on the house. Sit tight!",
    "translation_pt": "Maravilha. E olha — já que vão esperar um pouquinho, a primeira rodada de refrigerantes é por conta da casa. Aguardem aí!"
   }
  ],
  "theme": "dining"
 },
 "parks": {
  "title_pt": "Comprando ingressos e furando filas no Magic Kingdom",
  "setting_pt": "Você está na bilheteria (ticket window) do Magic Kingdom, em Orlando, numa manhã de feriado. A fila já está enorme e você conversa com a atendente do parque sobre ingressos, o Lightning Lane (fast pass pago) e a altura mínima dos brinquedos para o seu filho.",
  "cefr": "C1",
  "turns": [
   {
    "speaker": "them",
    "text": "Morning! Welcome to the Magic Kingdom. Heads up — it's a zoo in here today, so you'll want to plan your day a bit. How many tickets can I get you?",
    "voice": "us_female",
    "translation_pt": "Bom dia! Bem-vindo ao Magic Kingdom. Aviso logo: está um caos aqui hoje, então é bom você planejar o dia. Quantos ingressos vou separar pra você?"
   },
   {
    "speaker": "you",
    "text": "Two adults and one child, please. And honestly, with crowds like this, is the Lightning Lane worth it?",
    "translation_pt": "Dois adultos e uma criança, por favor. E sinceramente, com essa multidão toda, o Lightning Lane vale a pena?",
    "choices": [
     {
      "text": "Two adults and one child, please. And honestly, with crowds like this, is the Lightning Lane worth it?",
      "ok": true,
      "why": "Natural e fluente: 'with crowds like this' e 'worth it' são exatamente o que um nativo diria nesse contexto."
     },
     {
      "text": "Two adults and one child, please. With this quantity of people, does the Lightning Lane pay the pain?",
      "ok": false,
      "why": "'Quantity of people' é não idiomático (diga 'crowds' ou 'this many people') e 'pay the pain' não existe — o idiom é 'worth it'."
     },
     {
      "text": "Two adults and one kid, please. Is the Lightning Lane valuable with this full of crowd?",
      "ok": false,
      "why": "'Full of crowd' está errado (use 'crowded'/'packed') e 'valuable' tem nuance errada (valor intrínseco, não 'valer a pena gastar')."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "On a packed day like today? Absolutely. You'd be lining up for an hour-plus on the big rides otherwise. Most folks say it's worth every penny.",
    "voice": "us_female",
    "translation_pt": "Num dia lotado como hoje? Com certeza. Sem ele, você ficaria mais de uma hora na fila dos brinquedos grandes. A maioria diz que vale cada centavo."
   },
   {
    "speaker": "you",
    "text": "All right, let's splurge on it then. Quick question — my son's pretty small. Will he meet the height requirement for the bigger coasters?",
    "translation_pt": "Beleza, então vamos nessa e gastar um pouco mais. Uma pergunta rápida: meu filho é bem pequeno. Ele vai ter a altura mínima pras montanhas-russas maiores?",
    "choices": [
     {
      "text": "All right, let's splurge on it then. Quick question — my son's pretty small. Will he meet the height requirement for the bigger coasters?",
      "ok": true,
      "why": "Perfeito: 'splurge on it' e 'meet the height requirement' são as colocações nativas exatas para a situação."
     },
     {
      "text": "All right, let's splurge it then. My son is little. Will he reach the height requirement for the coasters?",
      "ok": false,
      "why": "Dois deslizes sutis: 'splurge' exige 'on' ('splurge on it'), e a colocação fixa é 'meet', não 'reach', the height requirement."
     },
     {
      "text": "All right, let's splurge on it then. My son is small. Will he attend the height requirement for the coasters?",
      "ok": false,
      "why": "Falso cognato: 'attend' significa comparecer, não cumprir. O verbo certo com 'height requirement' é 'meet'."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Most of the big coasters need riders to be at least 40 inches. There's a chart by each ride, so just check the sign before you line up. Plenty of stuff he can still go on, though!",
    "voice": "us_female",
    "translation_pt": "A maioria das montanhas-russas grandes exige pelo menos 40 polegadas. Tem um quadro de altura em cada brinquedo, então é só conferir a placa antes de entrar na fila. Mas tem bastante coisa que ele ainda pode ir!"
   },
   {
    "speaker": "you",
    "text": "Got it. We'll probably beat the crowds at the kiddie rides first, then. One last thing — any tips for the end of the day?",
    "voice": "us_male",
    "translation_pt": "Entendi. Então a gente provavelmente vai sair na frente da multidão nos brinquedos infantis primeiro. Uma última coisa: alguma dica pro fim do dia?"
   },
   {
    "speaker": "them",
    "text": "Smart plan. By evening you'll all be wiped out, so don't push it — grab a good fireworks spot, soak it in, and call it a day. Enjoy, folks!",
    "voice": "us_female",
    "translation_pt": "Plano esperto. Lá pra noite vocês vão estar acabados, então não force a barra: pegue um bom lugar pros fogos, aproveite o momento e encerre o dia. Divirtam-se, pessoal!"
   }
  ],
  "theme": "parks"
 },
 "transport": {
  "title_pt": "Retirando o carro alugado e pegando direções",
  "setting_pt": "Você acabou de desembarcar no Aeroporto Internacional de Orlando (MCO) e vai até o balcão da locadora para retirar o carro reservado. O atendente confirma os detalhes, tenta oferecer extras e, no fim, te dá direções para sair do aeroporto.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "voice": "us_male",
    "text": "Welcome to Orlando! Do you have a reservation with us, or are you booking a car today?",
    "translation_pt": "Bem-vindo a Orlando! Você tem uma reserva conosco ou vai alugar um carro hoje?"
   },
   {
    "speaker": "you",
    "text": "Hi, yes, I've got a reservation under Konrad. I prepaid online, so I think everything's covered.",
    "choices": [
     {
      "text": "Hi, yes, I've got a reservation under Konrad. I prepaid online, so I think everything's covered.",
      "ok": true,
      "why": "Natural e claro: 'reservation under [nome]' e 'prepaid online' são exatamente o que o nativo diz no balcão."
     },
     {
      "text": "Hi, yes, I have a marking in the name of Konrad. I paid before in the internet.",
      "ok": false,
      "why": "'Marking' é falso cognato de 'marcação' (reserva é 'reservation/booking'); 'in the internet' deveria ser 'online' ou 'on the internet'."
     },
     {
      "text": "Hi, yes, I did a reserve for Konrad. I already completed the payment in advance.",
      "ok": false,
      "why": "'Did a reserve' não é idiomático ('made a reservation'); 'completed the payment' soa formal/traduzido demais para o balcão."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_male",
    "text": "Got it, found you right here. Now, would you like to add the collision damage waiver? Without it, you'd be liable for any scratches.",
    "translation_pt": "Achei você aqui. Então, gostaria de adicionar o seguro contra colisão? Sem ele, você ficaria responsável por qualquer arranhão."
   },
   {
    "speaker": "you",
    "text": "I'll pass on that, thanks — my credit card already covers rental insurance. But I do want to watch out for any hidden fees. Is the price I see the final price?",
    "choices": [
     {
      "text": "I'll pass on that, thanks — my credit card already covers rental insurance. But I do want to watch out for any hidden fees. Is the price I see the final price?",
      "ok": true,
      "why": "'I'll pass on that' (recusar educadamente) e 'watch out for hidden fees' usam itens do pacote com naturalidade total."
     },
     {
      "text": "No, thank you, I don't want. My card covers it. But I'm scared of the occult fees.",
      "ok": false,
      "why": "'I don't want' fica truncado (falta objeto: 'I don't want it'); 'occult fees' é o falso cognato — o certo é 'hidden fees'."
     },
     {
      "text": "I'll pass that, thanks. I'm afraid you can take me for a ride with secret charges.",
      "ok": false,
      "why": "'Pass that' sem 'on' soa errado; e acusar o atendente de 'take me for a ride' na cara é rude demais para o contexto."
     }
    ]
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "No surprises — what you see is what you pay; the taxes are already included. You're all set. Here are your keys, the car's in space 24.",
    "translation_pt": "Sem surpresas — o que você vê é o que você paga; os impostos já estão incluídos. Está tudo certo. Aqui estão as chaves, o carro está na vaga 24."
   },
   {
    "speaker": "you",
    "text": "Perfect. One last thing — how do I get onto the highway toward International Drive from here?",
    "translation_pt": "Perfeito. Uma última coisa — como eu pego a rodovia em direção à International Drive a partir daqui?"
   },
   {
    "speaker": "them",
    "voice": "us_female",
    "text": "Easy — follow the exit signs, merge onto 417, and the on-ramp for I-4 is just around the corner. Heads up, though: you'll probably hit traffic near the parks this time of day.",
    "translation_pt": "Fácil — siga as placas de saída, entre na 417, e o acesso para a I-4 é logo ali. Mas fica o aviso: você provavelmente vai pegar trânsito perto dos parques a esta hora."
   },
   {
    "speaker": "you",
    "text": "Good to know — I'll leave a bit of a buffer then. Thanks so much for the heads-up!",
    "translation_pt": "Bom saber — vou deixar uma folga no tempo então. Muito obrigado pelo aviso!"
   }
  ],
  "theme": "transport"
 },
 "sightseeing": {
  "title_pt": "Planejando o dia no balcão de informações do parque",
  "setting_pt": "Você chega cedo ao balcão de informações (Guest Services) de um parque temático em Orlando para pegar dicas de como aproveitar o dia e evitar filas.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "text": "Morning! Welcome to the park. Is this your first time here with us?",
    "voice": "us_female",
    "translation_pt": "Bom dia! Bem-vindo ao parque. É a sua primeira vez aqui com a gente?"
   },
   {
    "speaker": "you",
    "text": "Yeah, first time. We've got just one day, so I'm trying to figure out how to make the most of it.",
    "translation_pt": "É, primeira vez. A gente só tem um dia, então estou tentando descobrir como aproveitar ao máximo.",
    "choices": [
     {
      "text": "Yeah, first time. We've got just one day, so I'm trying to figure out how to make the most of it.",
      "ok": true,
      "why": "Natural e fluente; 'make the most of it' é a colocação idiomática para aproveitar ao máximo."
     },
     {
      "text": "Yes, first time. We have only one day, so I want to enjoy it at the maximum.",
      "ok": false,
      "why": "'Enjoy it at the maximum' é calque do português; o natural é 'make the most of it'."
     },
     {
      "text": "Yeah, first time. We stay one day only, so I search how to use it the best.",
      "ok": false,
      "why": "'We stay' (tempo verbal) e 'search how to use it the best' soam traduzidos e errados."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Smart thinking. If I were you, I'd head straight to the big coasters first — by lunchtime the place is absolutely packed.",
    "voice": "us_female",
    "translation_pt": "Boa ideia. Se eu fosse você, iria direto para as montanhas-russas grandes primeiro — na hora do almoço o lugar fica completamente lotado."
   },
   {
    "speaker": "you",
    "text": "Good to know. Is there any way to skip the line on the popular rides?",
    "translation_pt": "Bom saber. Tem alguma forma de furar a fila nas atrações mais populares?",
    "choices": [
     {
      "text": "Good to know. Is there any way to skip the line on the popular rides?",
      "ok": true,
      "why": "'Skip the line' é exatamente o verbo idiomático para fila prioritária."
     },
     {
      "text": "Good to know. Is there any way to escape the line on the popular rides?",
      "ok": false,
      "why": "'Escape the line' não é colocação; o certo é 'skip the line'."
     },
     {
      "text": "Good to know. Is there any way to avoid the row on the popular rides?",
      "ok": false,
      "why": "'Row' é fileira de assentos, não fila de espera; e 'avoid' é menos idiomático que 'skip'."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Absolutely. You can grab an express pass — it costs a little extra, but on a busy day like today it's well worth it.",
    "voice": "us_female",
    "translation_pt": "Com certeza. Você pode pegar um passe expresso — custa um pouco mais, mas num dia movimentado como hoje vale muito a pena."
   },
   {
    "speaker": "you",
    "text": "If it saves us a couple of hours of queuing, that's a steal. We'll take two.",
    "translation_pt": "Se economizar umas duas horas de fila, isso é uma pechincha. Vamos levar dois.",
    "voice": "uk_male"
   },
   {
    "speaker": "them",
    "text": "Great choice. And don't bother with the food court right by the entrance — total tourist trap. There's a much better spot tucked away near the lake.",
    "voice": "us_female",
    "translation_pt": "Ótima escolha. E nem perca tempo com a praça de alimentação logo na entrada — pura cilada para turista. Tem um lugar bem melhor escondido perto do lago."
   },
   {
    "speaker": "you",
    "text": "Perfect, that's exactly the kind of off-the-beaten-path tip I was after. Thanks so much!",
    "translation_pt": "Perfeito, é exatamente o tipo de dica fora do circuito turístico que eu queria. Muito obrigado!",
    "voice": "uk_male"
   },
   {
    "speaker": "them",
    "text": "My pleasure. Have an amazing day, and don't try to do everything — if you're worn out by mid-afternoon, just call it a day and come back fresh tomorrow!",
    "voice": "us_female",
    "translation_pt": "Imagina, foi um prazer. Tenham um dia incrível, e não tentem fazer tudo — se estiverem exaustos no meio da tarde, é só encerrar o dia e voltar renovados amanhã!"
   }
  ],
  "theme": "sightseeing"
 },
 "smalltalk": {
  "title_pt": "Conversa no bar do hotel em Orlando",
  "setting_pt": "Você está sozinho no bar do lobby de um hotel em Orlando depois de um dia nos parques. Uma pessoa do bar (local/atendente que também puxa papo) começa a conversar com você.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "text": "Hey, you look wiped out. Long day at the parks?",
    "voice": "us_female",
    "translation_pt": "Ei, você parece exausto. Dia longo nos parques?"
   },
   {
    "speaker": "you",
    "text": "Yeah, we did Magic Kingdom all day. The place was packed.",
    "translation_pt": "É, ficamos no Magic Kingdom o dia todo. Estava lotado.",
    "choices": [
     {
      "text": "Yeah, we did Magic Kingdom all day. The place was packed.",
      "ok": true,
      "why": "Natural e idiomático: 'the place was packed' soa exatamente como nativo descrevendo lotação."
     },
     {
      "text": "Yeah, we did Magic Kingdom all day. The place was full of people.",
      "ok": false,
      "why": "Gramaticalmente correto, mas plano e de livro escolar; um nativo casual diria 'packed' ou 'mobbed'."
     },
     {
      "text": "Yeah, we did Magic Kingdom all day. The place was very crowded of people.",
      "ok": false,
      "why": "Erro de colocação: 'crowded of people' não existe; o certo seria 'crowded with people' (ou só 'packed')."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Tell me about it. It gets crazy this time of year. So, where are you guys from?",
    "voice": "us_female",
    "translation_pt": "Nem me fale. Fica uma loucura nessa época do ano. Então, de onde vocês são?"
   },
   {
    "speaker": "you",
    "text": "We're from Brazil. First time in Orlando, actually.",
    "translation_pt": "Somos do Brasil. Primeira vez em Orlando, na verdade.",
    "choices": [
     {
      "text": "We're from Brazil. First time in Orlando, actually.",
      "ok": true,
      "why": "Natural; 'actually' aqui suaviza e adiciona a informação de forma fluida, como nativo."
     },
     {
      "text": "We're from Brazil. It's our first time in Orlando, in fact.",
      "ok": false,
      "why": "'in fact' soa mais formal/argumentativo; num papo casual de bar, 'actually' encaixa muito melhor."
     },
     {
      "text": "We're from the Brazil. First time in Orlando.",
      "ok": false,
      "why": "Erro de artigo: nomes de países como Brazil não levam 'the' ('the Brazil' está errado)."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Brazil! No wonder you've got such great energy. Love it. You should hit Universal tomorrow if you've got the time.",
    "voice": "us_female",
    "translation_pt": "Brasil! Com razão você tem essa energia toda. Adoro. Vocês deveriam dar um pulo na Universal amanhã se tiverem tempo."
   },
   {
    "speaker": "you",
    "text": "We'd love to, but we're shattered. We might take a rain check on it and just chill by the pool.",
    "translation_pt": "Adoraríamos, mas estamos acabados. A gente talvez deixe pra outra hora e só relaxe na piscina.",
    "choices": [
     {
      "text": "We'd love to, but we're shattered. We might take a rain check on it and just chill by the pool.",
      "ok": true,
      "why": "Natural: 'take a rain check on it' recusa o convite de hoje mas sinaliza interesse futuro, e encaixa com 'chill by the pool'."
     },
     {
      "text": "We'd love to, but we're shattered. Maybe we'll pass on Universal and just chill by the pool.",
      "ok": false,
      "why": "Correto e idiomático, mas 'pass on' soa mais definitivo; 'take a rain check' combina melhor com o 'We'd love to' (fica pra próxima)."
     },
     {
      "text": "We'd love to, but we're shattered. Maybe we'll take a rain check of the rides and just chill by the pool.",
      "ok": false,
      "why": "Erro de preposição: é 'rain check ON something', nunca 'of'."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Totally fair. The pool's gorgeous at sunset. Well, I'm off in ten, but it was really nice chatting with you. Enjoy the rest of your trip!",
    "voice": "us_female",
    "translation_pt": "Justíssimo. A piscina fica linda no pôr do sol. Bom, eu saio daqui a dez minutos, mas foi muito bom conversar com você. Aproveitem o resto da viagem!"
   },
   {
    "speaker": "you",
    "text": "You too, take care! Thanks for the tips.",
    "translation_pt": "Você também, se cuida! Obrigado pelas dicas."
   }
  ],
  "theme": "smalltalk"
 },
 "health": {
  "title_pt": "Mal-estar na farmácia em Orlando",
  "setting_pt": "Você está numa drugstore (tipo Walgreens) perto dos parques em Orlando. Acordou se sentindo mal e foi pedir ajuda ao farmacêutico no balcão.",
  "cefr": "B2",
  "turns": [
   {
    "speaker": "them",
    "text": "Hi there, what can I help you with today?",
    "voice": "us_female",
    "translation_pt": "Oi, em que posso te ajudar hoje?"
   },
   {
    "speaker": "you",
    "text": "Hi, I've been feeling a bit under the weather since this morning — kind of a sore throat and a headache.",
    "translation_pt": "Oi, estou meio adoentado desde de manhã — uma dor de garganta e dor de cabeça.",
    "choices": [
     {
      "text": "Hi, I've been feeling a bit under the weather since this morning — kind of a sore throat and a headache.",
      "ok": true,
      "why": "Natural e educado; usa o idiom corretamente para descrever mal-estar leve."
     },
     {
      "text": "Hi, I've been under the climate since this morning, with a throat pain and a headache.",
      "ok": false,
      "why": "'Under the climate' é tradução errada do idiom (é 'weather') e 'a throat pain' soa traduzido — o natural é 'a sore throat'."
     },
     {
      "text": "Hi, I feel like death warmed up — I think I'm coming down with cancer or something.",
      "ok": false,
      "why": "A gíria é forte demais para o balcão e 'come down with' não se usa para doença grave como câncer."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "Sounds like you might be coming down with something. Are you looking for something over-the-counter, or do you think you need to see a doctor?",
    "voice": "us_female",
    "translation_pt": "Parece que você pode estar pegando alguma coisa. Você quer algo sem receita, ou acha que precisa ver um médico?"
   },
   {
    "speaker": "you",
    "text": "Just something over-the-counter for now, I think. I'd rather not let it put a damper on our trip.",
    "translation_pt": "Só algo sem receita por enquanto, acho. Prefiro não deixar isso estragar nossa viagem.",
    "choices": [
     {
      "text": "Just something over-the-counter for now, I think. I'd rather not let it put a damper on our trip.",
      "ok": true,
      "why": "Encaixa dois itens do pacote de forma natural e com o tom certo de viagem."
     },
     {
      "text": "Just something off-the-counter for now. I don't want it to put a damper in our trip.",
      "ok": false,
      "why": "'Off-the-counter' não existe (é 'over-the-counter') e a preposição certa é 'a damper on', não 'in'."
     },
     {
      "text": "Just some medicine without a recipe. I don't want to put a damp on our trip.",
      "ok": false,
      "why": "'Recipe' é falso cognato (receita de cozinha; o certo é 'prescription') e 'a damp' está errado — o fixo é 'a damper'."
     }
    ]
   },
   {
    "speaker": "them",
    "text": "No problem. This one works well for colds and sore throats. Did you want to stock up on anything else while you're here — tissues, vitamin C?",
    "voice": "us_female",
    "translation_pt": "Sem problema. Este aqui funciona bem para resfriados e dor de garganta. Quer aproveitar para se abastecer de mais alguma coisa enquanto está aqui — lenços, vitamina C?"
   },
   {
    "speaker": "you",
    "text": "Good idea — I'll stock up on tissues too. Oh, and one more thing: if I do end up needing a doctor, am I covered for that on travel insurance?",
    "voice": "us_male",
    "translation_pt": "Boa ideia — vou pegar lenços também. Ah, e mais uma coisa: se eu acabar precisando de médico, estou coberto para isso pelo seguro de viagem?"
   },
   {
    "speaker": "them",
    "text": "That depends on your policy, hon. We can give you a receipt with all the details so you can claim it back later.",
    "voice": "us_female",
    "translation_pt": "Isso depende da sua apólice, querido. A gente pode te dar um recibo com todos os detalhes para você pedir reembolso depois."
   },
   {
    "speaker": "you",
    "text": "Perfect, a detailed receipt would be great. Thanks so much for your help.",
    "voice": "us_male",
    "translation_pt": "Perfeito, um recibo detalhado seria ótimo. Muito obrigado pela ajuda."
   }
  ],
  "theme": "health"
 }
};
