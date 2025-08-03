# rhythmiq

[![Deploy](https://github.com/Hakawa2/rhythmiq/actions/workflows/deploy.yml/badge.svg)](https://github.com/Hakawa2/rhythmiq/actions)

Um projeto moderno com React, Vite, Typescript e TailwindCSS para criação de experiências ricas e rápidas.

## Requisitos

- **Node.js**: versão mínima recomendada **22.17.0**
- **npm**: 9+

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Hakawa2/rhythmiq.git
cd rhythmiq
npm install
```

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento com Vite.
- `npm run build`: compila o projeto para produção (TypeScript + Vite).
- `npm run preview`: serve o build de produção localmente na porta 8080.
- `npm run lint`: executa o linter (ESLint) para garantir a qualidade do código.
- `npm run test`: executa os testes automatizados com o Vitest.
- `npm run test:ui`: executa os testes no modo interface gráfica do Vitest.
- `npm run test:coverage`: executa os testes e gera relatório de cobertura.

## Rodando os Testes

```bash
npm run test         # Executa todos os testes
npm run test:ui      # Interface visual dos testes (Vitest UI)
npm run test:coverage # Relatório de cobertura dos testes
npm run cypress:open # Abrir a interface do cypress
npm run cypress:run # Relatório de cobertura dos testes e2e
```

Os testes utilizam o [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/).

## Workflow de Deploy no GitHub Actions

O deploy é realizado automaticamente via **GitHub Actions**. O fluxo típico é:

1. Ao realizar um push na branch principal (geralmente `main` ou `master`), o workflow é acionado.
2. O workflow instala as dependências, executa os testes, faz o build e publica a aplicação.
3. O site é publicado automaticamente via GitHub Pages, ficando disponível em:  
   [https://hakawa2.github.io/rhythmiq/](https://hakawa2.github.io/rhythmiq/)

Você pode acompanhar o status dos deploys na aba **Actions** do repositório.

---

**Desenvolvido por Hakawa2**

Qualquer dúvida, sugestão ou bug, abra uma [issue](https://github.com/Hakawa2/rhythmiq/issues).
