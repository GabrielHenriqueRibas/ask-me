async function carregarDuvidas() {
    const res = await fetch("/v1/duvidas");
    const duvidas = await res.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    duvidas.forEach(d => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-50";

        card.innerHTML = `
          <h2 class="text-xl font-bold">${d.titulo}</h2>
          <p class="text-gray-700">${d.descricao}</p>
          <p class="text-sm text-gray-500 mt-2">Respostas: ${d.respostas?.length || 0}</p>
        `;

        card.onclick = () => {
          window.location.href = "/detalhe.html?id=" + d.id;
        };

        lista.appendChild(card);
      });
    }

carregarDuvidas();