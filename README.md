# Fetch-Pokemon-V0.1
Primeira implementação do uso do método Fetch para requisição de dados.

# Pokémon Information Web Scraper

Este é um projeto de web scraper para obter informações sobre Pokémon diretamente do site Bulbapedia da comunidade Bulbagarden. O código JavaScript interage com a página web para buscar e extrair informações sobre um Pokémon específico a partir do seu nome.

## Funcionalidades

### Obtendo Informações do Pokémon

O código realiza as seguintes ações:

- **Pesquisar Pokémon:** Digite o nome do Pokémon desejado no campo de pesquisa e clique no botão ou pressione "Enter" para buscar as informações.
- **Exibir Detalhes:** As informações obtidas do Bulbapedia são processadas e exibidas na tela, incluindo:
  - Nome em inglês e romaji.
  - Número no Pokédex.
  - Geração do Pokémon.
  - Imagem ilustrativa.
  - Tipos do Pokémon.

### Web Scraping com Fetch

O código utiliza o método `fetch` para buscar dados do Bulbapedia. Ele é capaz de interpretar o HTML retornado e encontrar informações relevantes usando a função `parse_data`.

## Utilização

1. **Clonar o repositório:**

    ```
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Abrir o arquivo `index.html` em um navegador web.**

3. **Buscar Pokémon:**

   - Insira o nome do Pokémon desejado no campo de busca.
   - Clique no botão de busca ou pressione "Enter".

4. **Visualizar as Informações:**

   Os detalhes do Pokémon serão exibidos na tela.

## Estrutura do Código

- **Busca por Pokémon:** O código usa `document.querySelector` para capturar os eventos de clique no botão de busca e tecla "Enter" no campo de pesquisa.
- **Extração de Dados:** A função `getPokemon` realiza a busca, processamento e extração dos dados relevantes do HTML retornado.

## Contribuições

Contribuições são bem-vindas! Para contribuir para este projeto:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua contribuição.
3. Realize suas alterações e melhorias.
4. Abra um pull request para revisão.
