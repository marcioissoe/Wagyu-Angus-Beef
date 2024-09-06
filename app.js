function pesquisar() {
    // Obtem a seçao de HTML onde os resultados serao exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    // Se o campo pesquisa for NULL(String), nao mostrara nada
    if (!campoPesquisa){
        section.innerHTML = "Nada foi encontrado."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma String vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao =  "";
    let tags = "";

    // para cada dado(for) dentro(of) da lista de dados(dados), Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // se dado titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Crie um novo elemento HTML para cada resultado
            resultados +=
                `
        <div class="item-resultado">
        <h2>
            
            <a href="#" target="_blank">${dado.titulo} </a>
            
        </h2>

        <p class="descricao-meta">${dado.descricao} </p>

        <img src="Picanha-Peca-Wagyu.jpg" alt="Picanha-Peca-Wagyu">

        <a href=${dado.link} target="_blank"> Mais Informações </a>

        </div>
        
        `;
        }

    }

    if (!resultados) { 
        resultados = "Nada foi encontrado";
    }

    section.innerHTML = resultados
}


