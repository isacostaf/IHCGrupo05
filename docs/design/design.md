# Design

"Existe uma lenda de que a acessibilidade torna um sítio web muito simples ou feio. Não é verdade: um sítio web bem estruturado pode ser bonito e criativo. É possível, inclusive, criar apresentações visuais diferentes para a mesma estrutura HTML de um sítio web com o uso de CSS e atender a diferentes necessidades". Dessa forma, nessa seção encontra-se checklist que garantam a acessibilidade no design.

## Aparência
- [ ] **Adicionar instrução** que não **dependa exclusivamente da cor**. [1](#RP1)
- [ ] **Adicionar informação** (como gráficos e diagramas) que não **dependa exclusivamente da cor**. [1](#RP1)
- [ ] **Tamanho do texto ajustável** para permitir ampliação. [2](#RP2)
- [ ] **Descrever os controles** pelo nome, não apenas pela aparência ou localização. [3](#RP3)
- [ ] **Garantir que dicas visuais** significativas atinjam 3:1 em relação ao fundo. [4](#RP4)
- [ ] **Fazer com que as linhas** de texto se ajustem ao viewport. [5](#RP5)
- [ ] Oferece uma **opção de alto contraste** (dark-mode) de suas páginas web e aumento de fontes.
- [ ] Parágrafos com no **máximo 80 caracteres por linha**.
- [ ] **Evita** o uso de **textos longos em caixa alta ou condensados**.
- [ ] Evita o alinhamento justificado.
- [ ] **Fontes são fluidas** e de fácil entendimento.
- [ ] Toma o devido cuidado com ```display:none``` e ```visibility:hidden``` para os recursos de tecnologia assistiva.
- [ ] Preferir **botões com texto e ícone**. E botões apenas com ícones tem o nome acessível.
- [ ] **Tipografia legível** com fontes de fácil leitura.
- [ ] **Tipografia legível** com fontes de tamanho adequado.
- [ ] **Evita elementos** visuais muito próximos, dificultando toque ou leitura.
- [ ] **Evita dependencia** de instruções posicionais, como "clique no botão à direita".
- [ ] **Evita textos animados,** cintilantes ou movimentação constante.

## Animação

- [ ] **Evitar conteúdo que pisque**, ou mantenha-o abaixo dos limites. [6](#RP6)
- [ ] **Permitir que os usuários controlem as alterações de conteúdo** que ocorrem em paralelo com outro conteúdo. [7](#RP7)
- [ ] **Toda a animação** deve obedecer à `prefers-reduced-motion` consulta de mídia. [8](#RP8)
- [ ] **Toda animação** possui descrição em áudio, para pessoas cegas.
- [ ] **Evitar loops infinitos** em vídeos ou gifs animados.
- [ ] **Evitar transições rápidas ou abruptas**, que podem causar desconforto sensorial.

## Contraste de Cores

- [ ] **Verificar o contraste** de todo texto tamanho normal. [9](#RP9)
- [ ] **Verificar o contraste** de todo texto tamanho grande. [9](#RP9)
- [ ] **Verificar o contraste** de todos os ícones. [4](#RP4)
- [ ] **Verificar o contraste** das bordas dos elementos de entrada (entrada de texto, botões de opção, caixas de seleção, etc.). [4](#RP4)
- [ ] **Verificar o texto** que se sobrepõe a imagens ou vídeos. [9](#RP9)
- [ ] **Verificar `::selection` cores** personalizadas. [9](#RP9)
- [ ] **Verificar o contraste** de todo o texto de acordo com o fundo.
- [ ] **Verificar o contraste** de todo o texto sob uma imagem.
- [ ] **Verificar uso exclusivo de cores** não dependendo apenas de cores para transmitir informações.
- [ ] **Verificar o contraste** do layout em conjunto.


## Referências Bibliograficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Acesso em: 9 Mai. 2024.

> <a id="RP2" href="#TEC2">2.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html). Acesso em: 9 Mai. 2024.

> <a id="RP3" href="#TEC3">3.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html). Acesso em: 9 Mai. 2024.

> <a id="RP4" href="#TEC4">4.</a> WCAG 2.2 Understanding Docs. SC 1.4.11 Non-text Contrast (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). Acesso em: 9 Mai. 2024.

> <a id="RP5" href="#TEC5">5.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Acesso em: 9 Mai. 2024.

> <a id="RP6" href="#TEC6">6.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html). Acesso em: 9 Mai. 2024.

> <a id="RP7" href="#TEC7">7.</a> WCAG 2.2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Acesso em: 9 Mai. 2024.

> <a id="RP8" href="#TEC8">8.</a> WCAG 2.2 Understanding Docs. SC 2.3.3 Animation from Interactions (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html). Acesso em: 9 Mai. 2024.

> <a id="RP9" href="#TEC9">9.</a> WCAG 2.2 Understanding Docs. SC 1.4.3 Contrast (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Acesso em: 9 Mai. 2024.

## Bibliografia
> </a> ABNT NBR 17225:2025, Acessibilidade em conteúdo e aplicações web – Requisitos. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 03 Jun. 2025

> </a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. Guia de Boas Práticas para Acessibilidade Digital. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024.
