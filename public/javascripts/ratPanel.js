const form = document.querySelector("form");
const output = document.querySelector("div.output");

form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      console.log(formData.get("shellCode"));
      fetch("/ratShell", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json",
            },
            body: JSON.stringify({
                  shellCode: formData.get("shellCode"),
            }),
      })
            .then((data) => data.json())
            .then((data) => {
                  output.innerHTML = "";
                  data = JSON.parse(data);

                  data.data.forEach((line) => {
                        const el = document.createElement("div");
                        el.textContent = line;
                        output.appendChild(el);
                  });
            });
});
