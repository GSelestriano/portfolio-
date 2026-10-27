# Documentação de Design — Portfólio Full Stack Developer

**Projeto:** Portfólio pessoal de desenvolvedor Full Stack  
**Identidade visual:** Dark Tech  
**Stack prevista:** React + Vite + TypeScript + CSS  
**Idioma:** Português brasileiro  
**Objetivo:** Apresentar habilidades técnicas, projetos e experiência de forma profissional, facilitando a avaliação por recrutadores.

> Os valores desta documentação são especificações iniciais para reproduzir o mockup visual. Pequenos ajustes poderão ser necessários durante a implementação.

---

# 1. Conceito visual

O portfólio deve apresentar uma interface escura, tecnológica, organizada e moderna.

A identidade visual utiliza três elementos principais:

- **Fundo grafite:** cria uma aparência profissional e reduz o brilho da interface.
- **Verde neon:** destaca botões, títulos, ícones, indicadores e elementos interativos.
- **Elementos inspirados em código:** reforçam a identidade de desenvolvedor sem deixar a interface excessivamente carregada.

A página deve priorizar o conteúdo, especialmente os projetos desenvolvidos. Efeitos visuais devem complementar a experiência, não competir com as informações.

## 1.1 Referências de estilo

- Interface de ferramentas de desenvolvimento.
- Painéis administrativos modernos.
- Tipografia semelhante à utilizada em produtos SaaS.
- Cards com bordas finas e fundos escuros.
- Gradientes verdes discretos.
- Animações curtas e suaves.

# 2. Paleta de cores

Todas as cores devem ser centralizadas em variáveis CSS. Isso facilita alterações globais e mantém a identidade visual consistente.

| Token | Valor | Aplicação |
|---|---|---|
| `--color-bg` | `#05090D` | Fundo principal da página |
| `--color-surface` | `#080F14` | Fundo das seções |
| `--color-card` | `#0A1218` | Cards e painéis |
| `--color-card-hover` | `#0D1A20` | Fundo de cards no hover |
| `--color-primary` | `#00F59B` | Verde neon principal |
| `--color-primary-hover` | `#35FFB0` | Hover de botões e links |
| `--color-primary-muted` | `#123C30` | Fundos verdes discretos |
| `--color-text` | `#F3F7FA` | Títulos e textos principais |
| `--color-text-secondary` | `#B3C0CC` | Descrições e parágrafos |
| `--color-text-muted` | `#7E8B97` | Informações secundárias |
| `--color-border` | `#24333D` | Bordas e divisórias |
| `--color-code` | `#70E8FF` | Destaques de código em ciano |
| `--color-success` | `#36E58C` | Indicadores positivos |

O verde deve ser utilizado com moderação. Evite transformar todos os textos, bordas e superfícies em verde.

## 2.1 Gradiente principal

Utilize o gradiente em áreas específicas, principalmente no botão principal e no fundo do hero.

```css
--gradient-primary: linear-gradient(
  110deg,
  #00F59B 0%,
  #00D98A 100%
);

--gradient-hero: radial-gradient(
  ellipse at 75% 45%,
  rgba(0, 245, 155, 0.13) 0%,
  rgba(0, 245, 155, 0.04) 35%,
  transparent 70%
);
```

O gradiente do hero deve ficar atrás do conteúdo e não prejudicar a leitura dos textos.

# 3. Tipografia

Utilize a família **Inter**, com alternativa para fontes sans-serif do sistema.

```css
@import url(
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
);

:root {
  --font-primary: 'Inter', sans-serif;
}
```

Para evitar dependência de um serviço externo, a fonte também pode ser instalada localmente no projeto.

## 3.1 Escala tipográfica

| Elemento | Desktop | Peso |
|---|---:|---:|
| Nome principal do hero | 42–48 px | 800 |
| Subtítulo do hero | 27–32 px | 500 |
| Títulos das seções | 23–27 px | 700 |
| Títulos dos projetos | 16–19 px | 600 |
| Títulos dos cards de tecnologia | 14–16 px | 600 |
| Texto de descrição | 14–16 px | 400 |
| Navegação | 13–14 px | 500 |
| Etiquetas e metadados | 11–12 px | 500 |

No mobile, o título principal deve ficar entre 30 e 36 px, dependendo da largura disponível.

## 3.2 Hierarquia visual

A ordem de importância dos textos deve ser:

1. Nome do desenvolvedor.
2. Cargo de desenvolvedor Full Stack.
3. Títulos das seções.
4. Nomes dos projetos.
5. Descrições.
6. Informações auxiliares.

Utilize verde para destacar partes específicas dos títulos, como o sobrenome ou palavras-chave. Não aplique a cor de destaque em parágrafos inteiros.

# 4. Espaçamento e dimensões

Adote uma escala de espaçamento consistente, baseada em múltiplos de quatro.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

## 4.1 Bordas e arredondamentos

| Elemento | Raio |
|---|---:|
| Botões | 6–8 px |
| Cards | 7–10 px |
| Campos de contato | 5–7 px |
| Etiquetas de tecnologia | 999 px, formato pill |
| Painéis grandes | 8–12 px |

Utilize bordas de 1 px com a cor `--color-border`.

Evite sombras grandes e muito claras. A profundidade deve ser criada principalmente pela diferença entre fundos, bordas e pequenas mudanças de luminosidade.

# 5. Layout geral da página

A página deve ser dividida nas seguintes áreas:

1. Header com navegação.
2. Hero com apresentação.
3. Seção Sobre Mim.
4. Seção Tecnologias.
5. Seção Projetos.
6. Seção Experiência.
7. Seção Contato.
8. Footer.

No desktop, o conteúdo deve utilizar praticamente toda a largura disponível, mantendo margens laterais consistentes.

## 5.1 Container principal

```css
.container {
  width: min(100% - 64px, 1440px);
  margin-inline: auto;
}
```

Em telas menores, as margens devem diminuir:

```css
@media (max-width: 768px) {
  .container {
    width: min(100% - 32px, 1440px);
  }
}
```

# 6. Header e navegação

## 6.1 Estrutura

O header deve ocupar toda a largura da tela e apresentar:

- Logotipo com símbolo de código.
- Nome do desenvolvedor.
- Cargo abaixo do nome.
- Menu de navegação centralizado.
- Botão para baixar currículo.

Altura de referência no desktop: **60–72 px**.

## 6.2 Estilização

- Fundo: `--color-bg`.
- Borda inferior: 1 px em `--color-border`.
- Padding horizontal: 32–44 px.
- Logotipo em verde neon.
- Nome em branco, com destaque verde no sobrenome.
- Cargo em cinza secundário.
- Menu com espaçamento entre 22 e 30 px.

O item da seção ativa deve ter uma linha verde na parte inferior.

### Comportamento dos links

No estado normal, os links ficam em cinza claro.

No hover:

- A cor do texto muda para verde.
- A transição dura aproximadamente 180 ms.
- A linha inferior aparece com uma animação de largura.

O botão de currículo deve possuir fundo transparente, borda verde e ícone de download.

## 6.3 Comportamento responsivo

Em telas com largura inferior a 768 px:

- Ocultar a navegação horizontal.
- Manter logotipo e nome.
- Substituir o menu por um botão de menu acessível.
- Exibir os links em um painel ou menu lateral.
- Manter o currículo acessível no menu mobile.

# 7. Hero — apresentação principal

Esta é a seção visualmente mais importante do portfólio.

## 7.1 Layout desktop

Utilize duas colunas:

- **Coluna esquerda:** apresentação, descrição e botões.
- **Coluna direita:** composição visual com código, tecnologias e imagem ou ilustração temática.

Proporção sugerida: 42% para o texto e 58% para a composição visual.

Altura de referência: 350–430 px.

## 7.2 Coluna esquerda

Ordem dos elementos:

1. Texto introdutório: “Olá, eu sou”.
2. Nome completo em destaque.
3. Cargo: “Desenvolvedor Full Stack”.
4. Parágrafo de apresentação.
5. Botões “Ver meus projetos” e “Entrar em contato”.
6. Ícones de GitHub, LinkedIn e e-mail.

O texto de apresentação deve ter aproximadamente duas a quatro linhas no desktop, evitando blocos longos.

### Botão principal

Texto: “Ver meus projetos”.

- Fundo verde neon.
- Texto grafite escuro.
- Ícone opcional.
- Padding vertical de 11–14 px.
- Padding horizontal de 18–22 px.
- Raio de 6–8 px.

Hover:

- Aumentar levemente a luminosidade.
- Aplicar `transform: translateY(-2px)`.
- Exibir uma sombra verde discreta.

### Botão secundário

Texto: “Entrar em contato”.

- Fundo transparente.
- Borda verde.
- Texto branco.
- Mesmo tamanho do botão principal.

No hover, utilizar um fundo verde muito sutil e texto verde neon.

## 7.3 Coluna direita

A composição deve conter três elementos visuais:

**Painel de código**

- Fundo grafite.
- Bordas finas.
- Barra superior simulando uma janela de editor.
- Pequenos círculos coloridos na barra.
- Numeração de linhas opcional.
- Código ilustrativo com realce de sintaxe.

**Ilustração temática**

Pode ser uma ilustração original ou um elemento visual abstrato inspirado em tecnologia. Deve ocupar o fundo ou uma área lateral do painel, sem esconder o conteúdo.

**Painel de tecnologias**

Um pequeno card com tecnologias utilizadas no desenvolvimento, como React, Node.js, TypeScript e PostgreSQL.

A ilustração e o painel de código devem ser decorativos ou complementares. Não devem impedir o acesso às informações principais.

No mobile, essa composição deve ser simplificada ou posicionada abaixo da apresentação textual.

# 8. Seção Sobre Mim

A seção deve utilizar fundo escuro e uma composição em duas colunas no desktop.

- Coluna esquerda: apresentação pessoal.
- Coluna direita: tecnologias.

No layout de referência, uma linha vertical discreta separa as duas áreas.

## 8.1 Conteúdo

Adicionar uma pequena etiqueta verde com a numeração da seção, como “01. SOBRE MIM”.

Abaixo, apresentar:

- Título: “Prazer, eu sou o Guilherme”.
- Texto curto sobre a trajetória profissional.
- Texto sobre interesses técnicos e objetivos.
- Três blocos de informações complementares.

Os blocos complementares podem conter:

**Formação:** curso e instituição.

**Localização:** cidade e estado ou apenas região.

**Objetivo:** resumo do foco profissional.

Cada bloco deve apresentar um ícone verde, título pequeno e descrição.

Não é necessário informar idade, endereço completo ou outras informações pessoais sem relevância profissional.

# 9. Seção Tecnologias

Esta seção apresenta as ferramentas com as quais o desenvolvedor trabalha.

## 9.1 Organização dos cards

No desktop, utilizar uma grade de três colunas e duas linhas.

Cada card deve apresentar:

- Ícone da categoria.
- Nome da categoria.
- Lista de tecnologias.
- Borda fina.
- Fundo grafite.

Categorias sugeridas:

| Categoria | Tecnologias possíveis |
|---|---|
| Frontend | React, Next.js, TypeScript, HTML, CSS |
| Backend | Node.js, Express, APIs REST |
| Banco de dados | PostgreSQL, MySQL, Supabase |
| Ferramentas e DevOps | Docker, Git, GitHub, CI/CD |
| Testes | Vitest, Jest, testes de integração |
| Ferramentas gerais | VS Code, Postman, Linux |

A lista deve refletir apenas tecnologias que você realmente conhece ou utiliza.

## 9.2 Dimensões e aparência

- Padding interno: 14–18 px.
- Altura mínima: 110–125 px.
- Espaçamento entre cards: 12–16 px.
- Ícone: 24–32 px.
- Título: 14–16 px.
- Descrição: 12–13 px.

No hover, o fundo deve clarear levemente, a borda pode ganhar um tom verde e o card pode subir 2 px.

No mobile, utilizar duas colunas quando houver espaço suficiente e uma coluna em telas estreitas.

# 10. Seção Projetos

Esta deve ser a principal seção de demonstração técnica.

O objetivo é mostrar aplicações reais, a arquitetura utilizada e a capacidade de desenvolver frontend e backend.

## 10.1 Layout

No desktop, utilizar três colunas para os cards de projeto.

Cada card deve conter:

1. Imagem ou screenshot da aplicação.
2. Etiquetas das tecnologias.
3. Nome do projeto.
4. Descrição curta.
5. Botão para visualizar o projeto.
6. Link para o repositório GitHub.

## 10.2 Estilização dos cards

- Fundo: `--color-card`.
- Borda: 1 px em `--color-border`.
- Raio: 8–10 px.
- Padding interno: 14–16 px.
- Imagem ocupando toda a largura interna.
- Proporção da imagem: aproximadamente 16:9.
- Espaçamento vertical entre elementos: 10–14 px.

As imagens devem ter dimensões consistentes para evitar desalinhamento entre os cards.

As descrições devem possuir tamanho semelhante, preferencialmente entre duas e quatro linhas.

## 10.3 Etiquetas de tecnologias

As tecnologias devem aparecer em pequenas etiquetas arredondadas.

Exemplos:

- React.
- Node.js.
- TypeScript.
- PostgreSQL.
- Docker.

Estilização:

- Fundo verde muito escuro ou grafite.
- Borda verde discreta.
- Texto verde claro.
- Fonte de 10–12 px.
- Padding de 4–6 px na vertical e 7–9 px na horizontal.

Quando houver muitas tecnologias, mostrar somente as principais.

## 10.4 Interação dos cards

No hover:

- A borda fica levemente mais verde.
- O fundo clareia discretamente.
- O card sobe entre 2 e 4 px.
- A imagem pode aumentar ligeiramente, sem ultrapassar os limites do card.

Utilize `overflow: hidden` na área da imagem para evitar que o zoom ultrapasse as bordas arredondadas.

## 10.5 Projetos que podem ser apresentados

Você pode utilizar projetos como:

**Sistema de Gestão de Lojas**

Aplicação de gerenciamento de produtos, estoque, vendas e usuários.

**Logix Sphere**

Projeto de sistema empresarial, apresentado conforme sua participação real, funcionalidades implementadas e tecnologias utilizadas.

**Tereré Store**

Aplicação de loja virtual com catálogo, carrinho e gerenciamento de produtos, caso o projeto esteja funcional ou seja apresentado claramente como projeto acadêmico.

Para cada projeto, informe o que foi desenvolvido por você. Não apresente funcionalidades planejadas como se já estivessem implementadas.

## 10.6 Botões dos projetos

“Ver projeto” deve ser o botão principal, com fundo verde.

“GitHub” deve ser um link secundário, com ícone e texto claro.

Se o projeto não estiver publicado, priorize o repositório e informe que a demonstração online ainda não está disponível.

# 11. Seção Experiência

A seção de experiência deve ficar ao lado dos projetos no desktop, quando houver espaço suficiente.

## 11.1 Linha do tempo

Utilize uma linha vertical verde fina, com círculos marcando cada evento.

Cada item deve conter:

- Período.
- Cargo ou atividade.
- Empresa, instituição ou contexto.
- Descrição breve.
- Principais tecnologias ou responsabilidades, quando relevante.

Os eventos devem aparecer em ordem cronológica inversa.

Não invente experiências profissionais. Projetos acadêmicos e pessoais podem ser apresentados separadamente da experiência profissional.

## 11.2 Estilo

- Linha: 1–2 px.
- Marcadores: 8–10 px.
- Data: verde claro ou cinza.
- Título: branco.
- Descrição: cinza secundário.
- Espaçamento entre eventos: 18–24 px.

Em telas pequenas, a experiência deve ficar abaixo dos projetos, ocupando toda a largura disponível.

# 12. Seção Contato

A seção deve ser simples e objetiva, preferencialmente ao lado da experiência no desktop.

Conteúdo:

- Título: “Vamos conversar?”
- Texto curto convidando recrutadores a entrar em contato.
- E-mail.
- LinkedIn.
- GitHub.
- Botão para baixar currículo.

## 12.1 Estilização

Os links devem ser apresentados em linhas individuais:

- Ícone à esquerda.
- Texto ou endereço à direita.
- Fundo escuro.
- Borda fina.
- Altura aproximada de 32–40 px.
- Espaçamento de 4–6 px entre linhas.

No hover, a borda deve ficar verde e o texto pode mudar para a cor de destaque.

Os links devem utilizar endereços reais e válidos. O e-mail deve abrir o cliente de e-mail e os perfis devem abrir suas respectivas páginas.

# 13. Footer

O rodapé deve ser separado por uma borda superior.

No desktop, utilizar três áreas:

- Logotipo, nome e cargo.
- Mensagem curta de agradecimento.
- Ícones de redes sociais.

Utilizar fundo igual ao fundo principal, texto secundário e ícones discretos.

No mobile, reorganizar os elementos verticalmente, mantendo alinhamento e espaçamento consistentes.

# 14. Animações e transições

O portfólio deve utilizar animações moderadas, sem exageros.

## 14.1 Variáveis

```css
:root {
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

## 14.2 Aplicações

| Elemento | Efeito |
|---|---|
| Links de navegação | Mudança de cor e linha inferior |
| Botões | Mudança de cor e elevação de 2 px |
| Cards | Elevação de 2–4 px e borda mais clara |
| Imagens de projetos | Zoom discreto |
| Menu mobile | Abertura e fechamento suaves |
| Entrada das seções | Fade-in e deslocamento vertical curto |

A animação de entrada deve utilizar aproximadamente 300–500 ms.

Evite animações contínuas em todos os elementos. O fundo do hero pode ter um brilho muito discreto, mas ele não deve distrair o usuário.

## 14.3 Exemplo de CSS

```css
.project-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition:
    transform var(--transition-normal),
    border-color var(--transition-normal),
    background-color var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-3px);
  border-color: var(--color-primary);
  background: var(--color-card-hover);
}

.button-primary {
  background: var(--gradient-primary);
  color: var(--color-bg);
  transition:
    transform var(--transition-normal),
    filter var(--transition-normal);
}

.button-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

# 15. Responsividade

O layout deve funcionar em celulares, tablets e computadores.

## 15.1 Breakpoints sugeridos

| Largura | Comportamento |
|---|---|
| Até 480 px | Layout mobile compacto |
| 481–768 px | Mobile amplo e tablets pequenos |
| 769–1024 px | Tablet e notebook compacto |
| Acima de 1024 px | Layout desktop |

Os breakpoints são pontos de partida. Ajuste-os conforme o conteúdo realmente precisar mudar de organização.

## 15.2 Regras por dispositivo

**Desktop**

- Header horizontal.
- Hero com duas colunas.
- Sobre Mim e Tecnologias lado a lado.
- Projetos em três colunas.
- Experiência e Contato na coluna lateral, quando houver espaço.

**Tablet**

- Reduzir margens.
- Hero com colunas mais equilibradas.
- Tecnologias em duas colunas.
- Projetos em duas colunas.
- Reduzir tamanhos de títulos.

**Mobile**

- Navegação compacta.
- Hero em uma coluna.
- Botões empilhados se não couberem na mesma linha.
- Tecnologias em uma ou duas colunas.
- Projetos em uma coluna.
- Experiência e Contato empilhados.
- Rodapé vertical.
- Nenhuma rolagem horizontal.

# 16. Acessibilidade

O design deve ser utilizável por pessoas com diferentes necessidades.

Requisitos:

- Contraste suficiente entre texto e fundo.
- Botões e links com estados de foco visíveis.
- Navegação por teclado.
- Texto alternativo para imagens relevantes.
- Ícones decorativos ocultos dos leitores de tela.
- Menu mobile acessível por teclado e leitor de tela.
- Respeito à preferência por movimento reduzido.
- Uso de HTML semântico: `header`, `nav`, `main`, `section`, `article` e `footer`.

Não dependa apenas da cor verde para indicar que um link está ativo ou que uma ação foi concluída.

# 17. Estrutura de pastas sugerida

Uma organização inicial para React + Vite + TypeScript:

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Header/
│   ├── Button/
│   ├── SectionTitle/
│   ├── TechCard/
│   ├── ProjectCard/
│   ├── TimelineItem/
│   └── SocialLinks/
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Technologies/
│   ├── Projects/
│   ├── Experience/
│   ├── Contact/
│   └── Footer/
├── data/
│   ├── projects.ts
│   ├── technologies.ts
│   └── experience.ts
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── animations.css
├── App.tsx
└── main.tsx
```

Os componentes podem ser organizados de maneira diferente conforme o tamanho do projeto. Essa estrutura é uma sugestão para manter o código organizado e facilitar a reutilização.

# 18. Organização dos dados

Os projetos, tecnologias e experiências devem ser separados do JSX sempre que possível.

Exemplo de estrutura de dados:

```ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}
```

Depois, os projetos podem ser armazenados em `projects.ts` e renderizados com `.map()` dentro de `ProjectCard`.

Isso facilita adicionar, remover ou atualizar projetos sem alterar toda a estrutura da página.

# 19. Arquivos CSS iniciais

## tokens.css

```css
:root {
  --color-bg: #05090d;
  --color-surface: #080f14;
  --color-card: #0a1218;
  --color-card-hover: #0d1a20;

  --color-primary: #00f59b;
  --color-primary-hover: #35ffb0;
  --color-primary-muted: #123c30;

  --color-text: #f3f7fa;
  --color-text-secondary: #b3c0cc;
  --color-text-muted: #7e8b97;
  --color-border: #24333d;
  --color-code: #70e8ff;

  --font-primary: "Inter", sans-serif;

  --radius-button: 8px;
  --radius-card: 8px;

  --container-max: 1440px;

  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
  --transition-slow: 300ms ease;
}
```

## global.css

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

.container {
  width: min(calc(100% - 64px), var(--container-max));
  margin-inline: auto;
}

.section {
  padding-block: 40px;
  border-bottom: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .container {
    width: min(calc(100% - 32px), var(--container-max));
  }

  .section {
    padding-block: 32px;
  }
}
```

# 20. Ordem de implementação

Para desenvolver sem se perder em detalhes, siga esta sequência.

- [ ] Criar o projeto React + Vite + TypeScript.
- [ ] Configurar a fonte, os tokens de cor e os estilos globais.
- [ ] Implementar o Header e a navegação.
- [ ] Implementar o Hero.
- [ ] Criar o componente de título de seção.
- [ ] Implementar Sobre Mim e Tecnologias.
- [ ] Criar o componente reutilizável ProjectCard.
- [ ] Implementar a grade de projetos.
- [ ] Criar a linha do tempo de experiência.
- [ ] Implementar Contato e Footer.
- [ ] Adicionar os efeitos de hover e as transições.
- [ ] Ajustar o layout para mobile e tablet.
- [ ] Testar acessibilidade, navegação e links.
- [ ] Revisar textos, imagens e dados reais.

# 21. Critérios de conclusão

O portfólio estará pronto para publicação quando:

- Todas as seções estiverem implementadas.
- A identidade visual for consistente.
- Os projetos apresentarem informações verdadeiras.
- Os links para GitHub, LinkedIn e contato funcionarem.
- O currículo estiver disponível para download.
- A interface funcionar em diferentes tamanhos de tela.
- Os efeitos de hover e as animações não prejudicarem a navegação.
- Não houver rolagem horizontal indevida.
- Os textos forem legíveis e houver contraste suficiente.
- O projeto puder ser executado e compilado sem erros.

**Resultado esperado:** um portfólio Full Stack com aparência Dark Tech, hierarquia visual clara, projetos em destaque, código organizado e uma experiência consistente em desktop e mobile.
