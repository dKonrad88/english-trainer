# Base pedagógica (gerada na pesquisa do workflow)

Princípios de design — app de inglês C1–C2 (guia de implementação)

- **Unidade base = chunk, não palavra isolada.** Armazene e ensine colocações, fixed/semi-fixed expressions e padrões ("a daunting prospect", "it goes without saying"). No C1–C2 o ganho está em precisão e naturalidade, não em vocabulário avulso. Cada card deve ter um chunk + co-texto, nunca lema solto.

- **Recuperação espaçada com algoritmo (SRS).** Implemente SM-2/FSRS por item: o intervalo cresce a cada acerto e colapsa no erro. Agende por chunk, e re-exponha o mesmo chunk em contextos diferentes (não a mesma frase) para evitar memorização cega do cartão.

- **Testing effect: produzir antes de ver a resposta.** A tela default é recuperação ativa (cloze, tradução reversa, completar a colocação), não reconhecimento passivo. Mostrar a resposta só após a tentativa. Reconhecimento múltipla-escolha é exceção, não regra.

- **Input compreensível e rico (i+1).** Cada chunk vive dentro de texto/áudio autêntico levemente acima do nível, com sentido recuperável pelo contexto. Forneça transcrição + áudio nativo; o glossário é secundário ao entendimento global.

- **Ordem da sessão: input → noticing → produção.** Comece expondo o chunk em contexto (ler/ouvir), force o "noticing" (destacar o padrão), e só depois peça produção ativa. Nunca abra a sessão pedindo recall de algo nunca visto naquele bloco.

- **Interleaving entre tipos/temas.** Misture colocações, phrasal verbs, conectores e registros numa mesma sessão em vez de blocos homogêneos. Embaralhe domínios (trabalho, social, acadêmico) para forçar discriminação e transferência.

- **Dificuldades desejáveis, calibradas.** Prefira o esforço produtivo: cloze sem dicas, recall com leve delay, variação de contexto. Calibre para ~80–85% de acerto — desafiador mas não frustrante; erro frequente vira ruído, não aprendizado.

- **Feedback imediato e corretivo.** Após cada tentativa, mostre a forma correta, o porquê (collocational/registro) e um exemplo contrastante. Marque "quase certo" (chunk certo, preposição errada) diferente de erro total para alimentar o SRS com granularidade.

- **Produção com restrição crescente.** Escale: completar → reformular → usar o chunk em frase própria → usar em fala livre cronometrada. Output forçado (pushed output) é onde o chunk consolida; reserve as últimas telas da sessão para isso.

- **Gírias/idioms ensinados com registro e frequência.** No C1–C2 o risco é uso inadequado, não desconhecimento. Cada expressão idiomática leva tag de registro (formal/informal/slang), região (US/UK) e frequência; ensine quando NÃO usar tanto quanto o significado.

- **Sessões curtas, diárias, com teto.** Limite itens novos por dia (ex.: 8–12 chunks) e priorize reviews vencidos sobre conteúdo novo. Consistência diária > sessões longas esparsas; o agendador deve sempre liquidar a dívida de revisão primeiro.

- **Personalização por corpus do usuário.** Deixe o usuário capturar chunks do próprio input real (séries, e-mails de trabalho, artigos) e injetá-los no SRS. Relevância pessoal aumenta retenção e garante i+1 sob medida ao domínio de cada um.
