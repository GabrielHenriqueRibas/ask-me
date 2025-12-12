const id = new URLSearchParams(window.location.search).get("id");

async function carregar() {
    const res = await fetch("/v1/duvidas/" + id);
    const d = await res.json();

    document.getElementById("duvida").innerHTML = `
        <h1 class="text-3xl font-bold">${d.titulo}</h1>
        <p class="mt-3">${d.descricao}</p>
    `;

    const respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";

    d.respostas?.forEach(r => {
        const card = document.createElement("div");
        card.className = "bg-white p-3 rounded shadow";
        card.innerHTML = `<p>${r.texto}</p>`;
        respostasDiv.appendChild(card);
      });
    }

    document.getElementById("form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const texto = new FormData(e.target).get("texto");

      await fetch("/v1/respostas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto, duvidaId: Number(id) })
        });

      e.target.reset();
      carregar();
    });

carregar();