let pokemonAtualId = 1;

function consultarPokeAPI(identificador) {
    let container = document.getElementById("pokedexContainer");
    
    container.innerHTML = "<p class='mensagem'>Carregando...</p>";

    let busca = String(identificador).toLowerCase().trim();

    fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`)
        .then(function(resposta) {
            if (!resposta.ok) {
                throw new Error("Pokémon não encontrado");
            }
            return resposta.json();
        })
        .then(function(pokemon) {
            pokemonAtualId = pokemon.id;

            let tipos = pokemon.types.map(function(item) {
                return item.type.name;
            });

            let estatisticasHtml = pokemon.stats.map(function(item) {
                return `<li>${item.stat.name.toUpperCase()}: ${item.base_stat}</li>`;
            }).join("");

            let tipoPrincipal = tipos[0];

            container.innerHTML = `
                <div class="card-pokemon ${tipoPrincipal}">
                    <span class="numero">#${pokemon.id}</span>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h3>${pokemon.name.toUpperCase()}</h3>
                    
                    <div class="tipos-container">
                        ${tipos.map(t => `<span class="badge-tipo">${t}</span>`).join("")}
                    </div>

                    <ul class="status-lista">
                        ${estatisticasHtml}
                    </ul>
                </div>
            `;
        })
        .catch(function(erro) {
            container.innerHTML = `<p class="mensagem erro">❌ Pokémon não encontrado! Tente outro nome ou número.</p>`;
        });
}

function buscarPokemonPeloInput() {
    let valorInput = document.getElementById("inputPokemon").value;
    if (valorInput !== "") {
        consultarPokeAPI(valorInput);
    }
}

function pokemonAnterior() {
    if (pokemonAtualId > 1) {
        pokemonAtualId--;
        consultarPokeAPI(pokemonAtualId);
        document.getElementById("inputPokemon").value = pokemonAtualId;
    }
}

function proximoPokemon() {
    pokemonAtualId++;
    consultarPokeAPI(pokemonAtualId);
    document.getElementById("inputPokemon").value = pokemonAtualId;
}

consultarPokeAPI(pokemonAtualId);