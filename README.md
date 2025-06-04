# 🚀 TirarVisto - Seu Passaporte para o Mundo! 🌍✈️

Bem-vindo ao repositório do **TirarVisto**! Este é o código-fonte de uma landing page moderna e atraente, projetada para uma agência de vistos. O objetivo é apresentar os serviços da agência, destinos populares e pacotes, incentivando os usuários a darem o próximo passo para realizar seus sonhos de viagem internacional.

Este projeto foi construído com foco em uma experiência de usuário fluida, design responsivo e animações elegantes para tornar a navegação agradável e informativa.

## ✨ Funcionalidades Principais

* **🎨 Design Moderno e Responsivo**: Interface limpa e adaptável a diversos tamanhos de tela (desktops, tablets e celulares).
* **🤸‍♂️ Animações Suaves com Framer Motion**: Elementos que surgem e se movem de forma elegante, guiando o olhar do usuário e tornando a interação mais dinâmica.
* **🌟 Seção Hero Impactante**: Com um título chamativo e um Call-to-Action (CTA) claro para engajar o visitante desde o início.
* **📊 Números que Impressionam (Stats Section)**: Mostra a credibilidade da agência com dados como vistos aprovados e taxa de sucesso.
* **🚶‍♀️ Processo Simplificado (Consultation Steps)**: Detalha as etapas da consultoria de visto de forma clara e visual.
* **🗺️ Destinos em Destaque**:
    * Uma seção especial com uma imagem grande e descrição para um destino em alta.
    * Grid de cartões interativos com os destinos mais procurados.
* **📦 Pacotes de Serviços Detalhados**: Apresentação dos diferentes pacotes de visto oferecidos, com preços e detalhes.
* **❓ FAQ & Newsletter (CTA Section)**: Uma área para responder dúvidas frequentes e capturar leads através de uma inscrição para newsletter.
* **🧭 Navbar Inteligente**: Menu de navegação fixo no topo que aparece e desaparece suavemente conforme o scroll do usuário, otimizando o espaço da tela.
* **🔗 Links Internos Suaves**: Navegação fluida entre as seções da página.
* **🦶 Rodapé Informativo**: Com links úteis e informações de copyright.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com um stack moderno de front-end:

* **⚛️ React**: Biblioteca JavaScript para construir interfaces de usuário.
* **🔷 TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **⚡ Vite**: Ferramenta de build extremamente rápida para desenvolvimento front-end.
* **🌬️ Tailwind CSS**: Framework CSS utility-first para estilização rápida e customizável.
* **🤸 Framer Motion**: Biblioteca de animação para React, poderosa e fácil de usar.
* **🦸 Heroicons**: Conjunto de ícones SVG de alta qualidade.

## 🚀 Como Começar

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone https://SEU_LINK_DE_REPOSITORIO_AQUI/TirarVisto.git
    cd TirarVisto
    ```

2.  **Instale as Dependências:**
    Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada) e o npm/yarn instalados.
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Rode o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    Isso iniciará o servidor de desenvolvimento Vite, geralmente em `http://localhost:5173`. Abra este endereço no seu navegador para ver o projeto! 🔥

4.  **Build para Produção:**
    Para gerar a versão otimizada para produção:
    ```bash
    npm run build
    # ou
    yarn build
    ```
    Os arquivos de build estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

A estrutura de pastas principal é organizada da seguinte forma:

```
TirarVisto/
├── public/             # Arquivos estáticos públicos
├── src/
│   ├── assets/         # Imagens, logos, etc.
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── core/       # Componentes base (Botão, Card, Input, SectionTitle)
│   │   ├── layout/     # Componentes de layout (Navbar, Footer)
│   │   └── sections/   # Componentes de cada seção da landing page
│   ├── pages/          # Componentes de página (LandingPage.tsx)
│   ├── styles/         # Arquivos CSS globais e configuração do Tailwind
│   ├── types/          # Definições de tipos TypeScript
│   ├── App.tsx         # Componente raiz da aplicação
│   └── main.tsx        # Ponto de entrada da aplicação React
├── index.html          # Template HTML principal
├── tailwind.config.js  # Configuração do Tailwind CSS
├── vite.config.ts      # Configuração do Vite
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo que você está lendo 😊
```

## 🎨 Customização com Tailwind CSS

A maior parte da estilização é feita com Tailwind CSS. Você pode customizar o tema (cores, fontes, espaçamentos, etc.) diretamente no arquivo `tailwind.config.js`.

Por exemplo, para adicionar ou modificar as cores da marca:
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FFC107', // Amarelo/Laranja vibrante para CTAs
          primaryHover: '#FFA000',
          secondary: '#2563EB', // Azul para elementos secundários
          secondaryHover: '#1D4ED8',
          dark: '#1F2937',    // Cinza escuro para texto principal
          light: '#F9FAFB',   // Cinza claro para fundos de seção
          muted: '#6B7280',   // Cinza para texto secundário/descrições
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg-placeholder.webp')",
      }
    },
  },
  // plugins: [], // Removido conforme configuração do projeto
}
```


## 🎬 Animações com Framer Motion

As animações são implementadas utilizando a biblioteca `framer-motion`. Geralmente, envolvemos os componentes que queremos animar com `motion.{elemento_html}` e definimos suas propriedades de animação (como `initial`, `animate`, `whileInView`, `variants`, `transition`).

Um exemplo simples de animação de "fade in para cima" que você verá no código:
```jsx
import { motion } from 'framer-motion';

// Dentro de um componente React
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Tipo de transição
      stiffness: 100, // Rigidez da mola
      damping: 12,    // Amortecimento
      duration: 0.5   // Duração (pode ser redundante com spring)
    }
  }
};

// ...
<motion.div
  variants={fadeInUpVariants}
  initial="hidden"       // Estado inicial
  whileInView="visible"  // Anima para 'visible' quando o elemento entra na tela
  viewport={{ once: true, amount: 0.3 }} // Configurações da visualização
>
  Conteúdo que será animado! ✨
</motion.div>
```
Explorei diferentes tipos de animações, como `staggerChildren` para animar listas ou grids de forma sequencial, e animações baseadas no scroll para a Navbar.

---

Espero que essa documentação te ajude você a entender e navegar pelo projeto TirarVisto! Se tiver alguma dúvida, explore o código, ele foi feito com carinho! 😉
