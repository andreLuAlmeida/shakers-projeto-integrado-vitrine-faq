# Shakers - Projeto Integrado Vitrine com FAQ

## Desafio final

Projeto Integrado - Vitrine com FAQ Dinâmico na PDP (Shakers University)

---

## O que foi implementado

Este projeto consiste na criação de uma vitrine simples em Shopify, com foco em organização, componentização e uso de dados dinâmicos da plataforma.

### Home Page

* Menu de navegação entre páginas
* Hero Slider configurável via schema (título, texto, botão e imagem)
* Listagem de produtos baseada em coleção
* CTA final com redirecionamento para página de produto

### Página de Produto (PDP)

* Exibição de:

  * Imagem principal e galeria
  * Título do produto
  * Preço (incluindo variações)
  * Descrição
* Seleção de variantes (ex: cor, tamanho)
* Botão **Add to Cart** com integração via JavaScript

### FAQ Dinâmico

* Implementação de FAQ utilizando:

  * Metaobjetos
  * Metafields
* Renderização dinâmica na PDP
* Estrutura em formato de lista/accordion
* Validação de dados antes da exibição

---

## Como testar localmente (Shopify CLI)

1. Clone o repositório:

```bash
git clone https://github.com/andreLuAlmeida/shakers-projeto-integrado-vitrine-faq.git
```

2. Acesse a pasta do projeto:

```bash
cd shakers-projeto-integrado-vitrine-faq
```

3. Acesse a branch de desenvolvimento:

```bash
git checkout feat/projeto-integrado-vitrine-faq
```

4. Inicie o servidor local:

```bash
shopify theme dev
```

5. Abra o link gerado no navegador

---

## Como configurar a Home Page no Admin

1. Acesse **Loja Online → Temas**
2. Clique em **Personalizar**
3. Configure as seções:

* Header Navigation
* Hero Slider
* Lista de produtos (selecionando uma coleção)
* CTA final (texto + link)

Todos os campos são configuráveis via schema dentro do editor do Shopify.

---

## Como criar o Metaobjeto de FAQ

1. Acesse **Configurações → Dados personalizados → Metaobjetos**
2. Clique em **Adicionar definição**
3. Crie o metaobjeto `faq_item` com os campos:

   * Pergunta (texto)
   * Resposta (texto)
4. Salve a definição

---

## Como criar o Metafield e associar ao produto

1. Acesse **Configurações -> Dados personalizados -> Produtos**
2. Adicione um novo Metafield:

   * Tipo: Metaobject
   * Referência: `faq_item`
   * Permitir múltiplos valores (lista)
3. Vá até um produto no Admin
4. Adicione pelo menos 3 itens de FAQ ao Metafield criado

---

## Pull Request

Link do PR: **https://github.com/andreLuAlmeida/shakers-projeto-integrado-vitrine-faq/pull/1**

---

## Repositório 

Link do vídeo: **https://github.com/andreLuAlmeida/shakers-projeto-integrado-vitrine-faq.git**

---

## Estrutura do projeto

* Sections reutilizáveis e configuráveis via schema
* Separação de responsabilidades (layout, templates, sections)
* Assets organizados para JS e CSS
