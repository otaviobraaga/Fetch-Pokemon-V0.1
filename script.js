document.querySelector('#search').addEventListener("click", getPokemon);
document.querySelector('#pokemonName').addEventListener("keypress", function(e) {
  if(e.key == "Enter"){
    getPokemon();
  }
})

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(url) {
  const name = document.querySelector("#pokemonName").value
  const pokemonName = lowerCaseName(name);
  const url_cors = `https://cors-anywhere.herokuapp.com/https://bulbapedia.bulbagarden.net/wiki/${pokemonName}_(Pok%C3%A9mon)`

  fetch(url_cors)
    .then((response) => response.text())
    .then((data) => parse_data(data));

}
function getData() {

}
function parse_data(data) {

  var roundy = data.indexOf('class="roundy"')

  geracao = data.indexOf('On Smogon Pokédex:', roundy)
  geracao = data.indexOf('>Generation ', geracao) + '>Generation '.length
  geracaoend = data.indexOf('</', geracao)

  poke_num = data.indexOf('Pokédex number', roundy)
  poke_num = data.indexOf('>#', poke_num) + ">#".length
  pokend = data.indexOf('</', poke_num)

  image = data.indexOf('<img alt="', roundy);
  image = data.indexOf('src="', image) + 'src="'.length
  image_end = data.indexOf('"', image);


  japones = data.indexOf('lang="ja"', roundy)
  japones = data.indexOf('<i>', japones) + '<i>'.length
  japo_end = data.indexOf('>', japones) - 3;


  tipo = data.indexOf('Type', roundy)  //Fire, Flying
  tipo = data.indexOf('<b>', tipo) + 3;
  end = data.indexOf('<', tipo)

  // --------
  lista_tipos = []
  Type = data.indexOf('Type', roundy)  //Fire, Flying
  table_end = data.indexOf("</table>", Type)
  tabela_tipos = data.substring(Type, table_end)

  tipo = tabela_tipos.indexOf(" (type)", Type)
  tipo = tabela_tipos.indexOf('<b>', tipo) + 3
  end = tabela_tipos.indexOf('</b>', tipo)
  tipo_nome = tabela_tipos.substring(tipo, end)
  lista_tipos.push(tipo_nome)

  tipo = tabela_tipos.indexOf('_(type)" title="', end + 4) //title="Unknown
  if (tipo != -1) {
    tipo = tabela_tipos.indexOf('<b>', tipo) + 3
    end = tabela_tipos.indexOf('</b>', tipo)
    tipo_nome = tabela_tipos.substring(tipo, end)
    lista_tipos.push(tipo_nome)
  }
  // --------
  nome = data.indexOf('big', roundy);
  nome = data.indexOf('<b>', nome) + 3;
  nome_end = data.indexOf('<', nome)

  document.querySelector(".pokemonBox").innerHTML = `
  <div>
  <img
    src="${data.substring(image, image_end)}"
    alt="Pokemon name"
  />
</div>
  <div class="pokemonInfos">
  <h1>Nome: ${data.substring(nome, nome_end)}</h3>
  <p>Romaji: ${data.substring(japones, japo_end)}</p>
  <p>Tipo: ${lista_tipos.join(', ')}</p>
  <p>Numero: ${data.substring(poke_num, pokend)}</p>
  <p>Geração: ${data.substring(geracao, geracaoend)}</p>


  </div>
  `;
  console.log("Romaji: " + data.substring(japones, japo_end))
  console.log("Nome: " + data.substring(nome, nome_end));
  console.log("Numero: " + data.substring(poke_num, pokend))
  console.log("Imagem: " + data.substring(image, image_end))
  console.log("Geração: " + data.substring(geracao, geracaoend))

}

