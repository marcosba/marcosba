// Función para cargar las entradas de un año específico
function loadEntriesByYear(year) {
    fetch(`entries/${year}/`)
        .then(response => response.text())
        .then(data => {
            // Crear un contenedor para el año
            const container = document.getElementById("blog-entries");
            const yearContainer = document.createElement("div");
            yearContainer.innerHTML = `<h2>${year}</h2>`;
            container.appendChild(yearContainer);

            // Usar una expresión regular para encontrar los archivos .md
            const fileRegex = /href="(.*?\.md)"/g;
            let match;
            const entryList = document.createElement("ul");

            while ((match = fileRegex.exec(data)) !== null) {
                const fileName = match[1];
                const filePath = `entries/${year}/${fileName}`;
                const fileDate = fileName.substring(0, 10).replace(/-/g, ".");
                const fileTitle = fileName.substring(11, fileName.length - 3).replace(/-/g, " ");

                const listItem = document.createElement("li");
                listItem.innerHTML = `${fileDate} - <a href="${filePath}">${fileTitle}</a>`;
                entryList.appendChild(listItem);
            }

            yearContainer.appendChild(entryList);
        });
}

// Cargar entradas de los años 2023 y 2024 (podés agregar más)
loadEntriesByYear(2023);
loadEntriesByYear(2024);
