# Quiz de Lâminas Histológicas

Quiz estático em HTML, CSS e JavaScript. Funciona direto no navegador e pode ser hospedado no GitHub Pages.

## Como usar localmente

Abra o arquivo `index.html` no navegador.

## Como hospedar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a raiz do repositório:
   - `index.html`
   - `styles.css`
   - `script.js`
   - pasta `assets/`
   - `.nojekyll`
3. No GitHub, entre em **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve. O GitHub vai gerar o link do site.

## Estrutura

- Uma imagem por questão.
- Questões embaralhadas a cada rodada.
- Alternativas embaralhadas a cada questão.
- Carcinomas aparecem como alternativas entre si.
- Lâminas de pulmão usam opções com tuberculose, hemorragia e carcinoma de pulmão quando aplicável.
- Lâminas renais colocam pielonefrite e inchaço renal como alternativas concorrentes.
- Lâminas hepáticas colocam esteatose hepática e hepatite viral como alternativas concorrentes.
