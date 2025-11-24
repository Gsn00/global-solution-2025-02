# Global Solution 2025-02: Conectando Pessoas, Competências e Propósito

## Visão Geral do Projeto

Este projeto é uma **Single Page Application (SPA)** desenvolvida como parte da **Global Solution 2025-02**, com o tema **"O Futuro do Trabalho – Conectando pessoas, competências e propósito por meio da tecnologia"**.

A aplicação simula uma **rede profissional colaborativa**, inspirada em plataformas como o LinkedIn, focada em conectar profissionais de diversas áreas, promover o desenvolvimento de competências e incentivar a troca de experiências.

## Funcionalidades Principais

O projeto foi desenvolvido seguindo as diretrizes de criação de uma plataforma de perfis profissionais, com a adição de uma funcionalidade inovadora de chat com Inteligência Artificial:

### 1. Plataforma de Perfis Profissionais (Requisito da GS)

*   **Listagem de Profissionais:** Exibição de cards com dados básicos (nome, foto, cargo e principais *skills*) de pelo menos 60 perfis simulados a partir de um arquivo JSON local.
*   **Modal Detalhada:** Ao clicar em um card, uma modal interativa exibe informações completas do profissional, incluindo dados pessoais, acadêmicos, experiências, habilidades técnicas (*Hard Skills*), habilidades comportamentais (*Soft Skills*) e hobbies.
*   **Interatividade:** Botões de ação "Recomendar profissional" e "Enviar mensagem" estão presentes na modal.
*   **Busca e Filtros:** Sistema funcional de busca e filtros por área, cidade ou tecnologia para facilitar a navegação.
*   **Design:** Design moderno, responsivo e com suporte a **Dark Mode**, utilizando **Tailwind CSS** para estilização.

### 2. Chat com Inteligência Artificial (Funcionalidade Inovadora)

O diferencial do projeto é a integração de um sistema de chat que utiliza IA para simular conversas dinâmicas e personalizadas:

*   **Simulação de Personalidade:** A IA é instruída a **agir como se fosse o usuário clicado** na lista de contatos.
*   **Personalidades Distintas:** Cada usuário possui um *prompt* de personalidade único e coerente com seu perfil, garantindo que as respostas da IA sejam variadas e contextuais (ex: formal, técnico, informal, humorístico).
*   **Tecnologia de IA:** A funcionalidade utiliza a **Groq API** para um processamento rápido e eficiente das interações.

## Membros do Grupo

O projeto foi desenvolvido pelos seguintes alunos:

| Nome | RM |
| :--- | :--- |
| Artur Rodrigues Trindade Paes | 564309 |
| Gabriel Silva Novais | 566370 |
| Marcos Vinicius Aquino Prado | 562775 |

## Desafios e Soluções

### Gerenciamento da Latência da Groq API

A escolha da Groq API foi estratégica para mitigar o desafio de latência, crucial em aplicações de chat em tempo real. A Groq é conhecida por sua alta velocidade de inferência, o que garante que as respostas da IA sejam quase instantâneas, proporcionando uma experiência de usuário fluida e natural, mesmo com a complexidade da simulação de personalidade.

### Implementação das Personalidades dos Usuários

A A simulação de personalidades foi implementada através de um sistema de *prompt engineering* robusto, construído dinamicamente no código. Cada usuário no arquivo JSON de perfis possui um campo extra chamado **`personality`**. No código, este campo é lido e combinado com outros dados do perfil (como cargo, habilidades e histórico) para montar um **prompt de sistema** detalhado, que é então injetado na chamada da API da Groq. Este prompt instrui o modelo de linguagem a adotar:

*   **Tom de Voz:** Formal, informal, técnico, etc.
*   **Contexto:** Histórico profissional, hobbies e área de interesse.
*   **Restrições:** Regras de comunicação específicas para aquele personagem.

Ao clicar em um usuário, o frontend envia o histórico da conversa e o prompt de sistema específico daquele usuário para a Groq API, garantindo que a IA **impersonifique** o perfil selecionado com alta fidelidade.

## Tecnologias Utilizadas

| Categoria | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Frontend** | React | Construção da interface de usuário (SPA). |
| **Estilização** | Tailwind CSS | Framework CSS para design responsivo e utilitário. |
| **Build Tool** | Vite | Empacotamento e servidor de desenvolvimento rápido. |
| **Linguagem** | JavaScript | Linguagem principal de desenvolvimento. |
| **IA/LLM** | Groq API | Processamento de linguagem natural e simulação de chat. |

## Acesso à Aplicação

A aplicação está **hospedada e acessível** publicamente, não sendo necessário clonar o repositório para visualização:

**Link da Aplicação no Vercel:**
[https://global-solution-2025-02.vercel.app/](https://global-solution-2025-02.vercel.app/)

**Link do repositório no GitHub:**
[https://github.com/Gsn00/global-solution-2025-02](https://github.com/Gsn00/global-solution-2025-02)

## Configuração e Instalação (Para Desenvolvimento)

Caso deseje clonar o projeto para fins de desenvolvimento ou análise do código, siga os passos abaixo:

### Pré-requisitos

*   Node.js (versão recomendada 18+)
*   pnpm (ou npm/yarn)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Gsn00/global-solution-2025-02.git
    cd global-solution-2025-02
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    # ou npm install
    ```

3.  **Configure a Chave de API da Groq:**
    Para que a funcionalidade de chat com IA funcione, é necessário configurar sua chave de API da Groq. Crie um arquivo chamado `.env` na raiz do projeto e adicione a seguinte variável:
    ```
    VITE_REACT_APP_GROQ_API_KEY="SUA_CHAVE_AQUI"
    ```
    ***Nota:** O nome da variável de ambiente é `VITE_REACT_APP_GROQ_API_KEY` para ser corretamente exposta pelo Vite ao código do frontend.*

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm run dev
    # ou npm run dev
    ```

O aplicativo estará acessível em `http://localhost:5173` (ou outra porta disponível).

## Referências

[1] Proposta do Desafio Global Solution 2025-02 - FIAP.
