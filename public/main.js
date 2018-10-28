// Created by Muhammad Rasyidi

document.addEventListener("DOMContentLoaded", (e) => {
    buatKonten();
});

buatKonten = () => {
    const container = document.getElementById("container");
    container.className = "container";

        const menu = document.createElement("div");
        menu.className = "menu";
        container.append(menu);

            const menu_img = document.createElement("img");
            menu_img.src = "images/icon.png";
            menu_img.alt = "icon"
            menu_img.height = "40";
            menu_img.width = "40";
            menu.append(menu_img);

        const sidebar = document.createElement("div");
        sidebar.className = "sidebar";
        container.append(sidebar);

            const sidebar_img = document.createElement("img");
            sidebar_img.src = "images/foto.jpg";
            sidebar_img.alt = "foto";
            sidebar.append(sidebar_img);

        const konten1 = document.createElement("div");
        konten1.className = "konten";
        container.append(konten1);

            const a_konten1 = document.createElement("a");
            a_konten1.className = "button-konten";
            a_konten1.innerHTML = "Kalkulator";
            a_konten1.href = "kalkulator"
            konten1.append(a_konten1);

        const konten2 = document.createElement("div");
        konten2.className = "konten";
        container.append(konten2);

            const a_konten2 = document.createElement("a");
            a_konten2.className = "button-konten";
            a_konten2.innerHTML = "Restoran Review (Peta)";
            a_konten2.href = "peta"
            konten2.append(a_konten2);

        const footer = document.createElement("footer");
        footer.className = "footer";
        container.append(footer);

            const a1 = document.createElement("a");
            a1.target = "__blank";
            a1.href = "https://www.linkedin.com/in/muhammad-rasyidi-b531ab107/";
            a1.title = "Linkedin";
            footer.append(a1);

                const img_a1 = document.createElement("img");
                img_a1.src = "images/In-2C-28px-TM.png";
                img_a1.alt = "LinkedIn";
                img_a1.width = "28";
                img_a1.height = "20";
                a1.append(img_a1);

            const a2 = document.createElement("a");
            a2.target = "__blank";
            a2.href = "https://github.com/ocitiya";
            a2.title = "Linkedin";
            footer.append(a2);

                const img_a2 = document.createElement("img");
                img_a2.src = "images/GitHub-Mark-32px.png";
                img_a2.alt = "GitHub";
                img_a2.width = "20";
                img_a2.height = "20";
                a2.append(img_a2);

        footer.append(innerHTML = "Muhammad Rasyidi");
}