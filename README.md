# Alfa Beta Ação

Landing page institucional da **Alfa Beta Ação**, focada em apresentar serviços de alfabetização, seção sobre a metodologia e formulário de contato.

## Tecnologias

- HTML5
- CSS3
- JavaScript (jQuery)
- Bibliotecas front-end via arquivos locais (`css/libs.min.css` e `js/libs.min.js`)

## Estrutura do projeto

```text
alfabetaacao2/
├─ index.html
├─ css/
│  ├─ libs.min.css
│  └─ main.css
├─ js/
│  ├─ libs.min.js
│  └─ main.js
├─ images/
└─ fonts/
```

## Funcionalidades

- Header com menu mobile (toggle)
- Navegação com rolagem suave para seções da página
- Layout responsivo com breakpoints para desktop/tablet/mobile
- Formulário de contato que abre conversa no WhatsApp com mensagem pré-preenchida
- Máscara de telefone no campo de contato

## Como rodar localmente

Como é um projeto estático, você pode abrir o `index.html` diretamente no navegador.

Se preferir um servidor local:

1. Com VS Code + Live Server, clique em **Go Live**.
2. Ou use Python:

```bash
python -m http.server 5500
```

Depois acesse: `http://localhost:5500`

## Configurações importantes

### 1. Número do WhatsApp (envio do formulário)

Arquivo: `js/main.js`

Procure por:

```js
let mobileNumber = 5511981916080;
```

Troque para o número desejado no formato internacional (DDI + DDD + número, sem símbolos).

### 2. Dados de contato exibidos na página

Arquivo: `index.html`

Atualize os dados em:

- Telefone (`href="tel:..."`)
- E-mail (`href="mailto:..."`)
- Endereço (rodapé)

## Observação sobre o formulário

Embora o `<form>` tenha `action` para o FormSubmit, o JavaScript intercepta o envio e abre o WhatsApp (`preventDefault()`), então o fluxo principal de contato atual é via WhatsApp.

## Licença

Este projeto está sem licença definida no momento.
