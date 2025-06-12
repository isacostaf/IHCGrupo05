# Introdução: Heurísticas de Nielsen no Site do MEC  

A **Interação Humano-Computador (IHC)** utiliza as **Heurísticas de Nielsen** como diretrizes para avaliar a usabilidade de sistemas. Nesta análise, abordaremos três princípios críticos aplicáveis ao site do **Ministério da Educação (MEC)**:  
### 1. Visibilidade do status do sistema
**Heurística:** O sistema deve sempre manter o usuário informado.  
**Análise:** 
- A navegação principal é clara e com menus visíveis.
- Há carregamento rápido de páginas.
- Mas não há indicações visuais para usuários de leitor de tela sobre mudança de contexto (ex: quando abre um PDF ou novo link externo).

**Melhoria possível:** adicionar avisos auditivos ou visuais de mudança de página.

### 2. Correspondência entre o sistema e o mundo real
**Heurística:** A linguagem deve ser familiar ao usuário.  
**Análise:**
- A linguagem é formal e técnica, adequada ao público institucional.
- Porém, algumas seções usam termos burocráticos pouco acessíveis (ex: "Diário Oficial", "programas educacionais" sem explicações claras).

**Melhoria possível:** incluir glossário ou textos mais explicativos e em linguagem simples.

### 3. Controle e liberdade do usuário
**Heurística:** O usuário precisa desfazer ações ou sair de situações inesperadas.  
**Análise:**
- Há pouco controle via teclado – a navegação por tab funciona, mas falta um foco visual claro em alguns elementos.
- Não há "atalhos de teclado" acessíveis.

**Melhoria possível:** implementar atalhos e foco visível para navegação com teclado.

### 4. Consistência e padrões
**Heurística:** O site deve manter padrões de navegação.  
**Análise:**
- O site segue o padrão visual do portal gov.br, o que é bom.
- Os menus e ícones seguem convenções comuns.

### 5. Prevenção de erros
Sistemas eficientes devem **minimizar erros** por meio de:  
- Validações em tempo real (ex.: formulários com feedback claro).  
- Confirmações para ações irreversíveis (ex.: envio de documentos).
**Heurística:** Evitar situações em que o usuário possa errar.  
**Análise:**
- Formulários não apresentam feedback claro em caso de erro.
- Alguns campos não possuem descrição acessível via aria-label ou label.

**Melhoria possível:** adicionar mensagens de erro claras, e descrição nos campos de formulário.

### 6. Reconhecimento em vez de memorização
Boas interfaces substituem a necessidade de memorização por:  
- Menus e ícones autoexplicativos.  
- Organização hierárquica da informação (ex.: seções bem categorizadas).
**Heurística:** Mostrar opções em vez de exigir memorização.  
**Análise:**
- Menus principais são bons, mas submenus desaparecem rapidamente, dificultando o uso por pessoas com dificuldades motoras.

**Melhoria possível:** aumentar o tempo de exibição e dar suporte via teclado.

### 7. Flexibilidade e eficiência de uso
Devem ser oferecidos:  
- Atalhos para usuários experientes (ex.: teclas de acesso rápido).  
- Personalização de funções frequentes (ex.: favoritos ou histórico). 
**Heurística:** O sistema deve atender iniciantes e avançados.  
**Análise:**
- Não há opções de aumentar o contraste, mudar o tamanho da fonte ou modo alto contraste diretamente na interface.

**Melhoria possível:** oferecer um menu de acessibilidade visual direto no site.

### 8. Estética e design minimalista 
**Heurística:** Não sobrecarregar com informações irrelevantes.  
**Análise:**
- Layout é limpo e padronizado, sem excesso de informação.
- Bom uso de hierarquia visual.

### 9. Ajudar usuários a reconhecer, diagnosticar e recuperar de erros
**Heurística:** Mensagens de erro devem ser claras.  
**Análise:**
- Páginas de erro (como 404) são genéricas.
- Formulários não indicam com clareza onde está o erro.

**Melhoria possível:** personalizar mensagens de erro e orientações.

### 10. Ajuda e documentação
**Heurística:** Instruções devem estar facilmente acessíveis.  
**Análise:**
- Há páginas institucionais explicando programas.
- Porém, não há seção dedicada à acessibilidade ou ajuda para usuários com deficiência.

**Melhoria possível:** criar uma página de acessibilidade e incluir um "mapa do site".

## Tabela Geral

|Heurística | Avaliação|
|-----------|----------|
|1          |Regular   |
|2          |Boa       |
|3          |Regular   |
|4          |Boa       |
|5          |Fraca     |
|6          |Regular   |
|7          |Fraca     |
|8          |Boa       |
|9          |Fraca     |
|10         |Fraca     |
