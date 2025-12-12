document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const res = await fetch("/v1/duvidas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: form.get("titulo"),
          descricao: form.get("descricao")
        })
    });

    if (res.ok) {
        window.location.href = "/duvidas.html";
    } else {
        alert("Erro ao criar!");
    }
});