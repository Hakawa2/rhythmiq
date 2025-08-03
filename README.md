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

## Link do projeto publicado

Link: [Rhythmiq](https://hakawa2.github.io/rhythmiq/)

## Alguns prints do projeto

<img width="1321" height="1308" alt="image" src="https://github.com/user-attachments/assets/059f043e-d139-4dfa-8210-29e9fc3bf910" />
<img width="1263" height="1305" alt="image" src="https://github.com/user-attachments/assets/f89dc1f2-728f-4747-bbbc-cc67dbaa6782" />
<img width="1382" height="1299" alt="image" src="https://github.com/user-attachments/assets/65194520-d40e-4a8d-9656-9794c9d559f7" />
<img width="455" height="930" alt="image" src="https://github.com/user-attachments/assets/47c4eee1-3e45-4447-859e-894c4094316b" />
<img width="456" height="955" alt="image" src="https://github.com/user-attachments/assets/41525c4d-1c69-4f12-90ba-3d9aa802e626" />
<img width="466" height="951" alt="image" src="https://github.com/user-attachments/assets/c0aa371d-b8a5-4325-8501-a952ee88736e" />


**Desenvolvido por Hakawa2**

Qualquer dúvida, sugestão ou bug, abra uma [issue](https://github.com/Hakawa2/rhythmiq/issues).
