// Created by Muhammad Rasyidi
var base_url = document.location.host;

document.addEventListener("DOMContentLoaded", (e) => {
    buatKonten();
    buatPeta();
});

buatKonten = () => {
    const konten = document.getElementById("konten");
    konten.className = "konten";

        const peta = document.createElement("div");
        peta.id = "peta";
        peta.className = "peta";
        konten.append(peta);

        const tempat_gambar = document.createElement("div");
        tempat_gambar.id = "tempat-gambar"
        tempat_gambar.className = "tempat-gambar";
        tempat_gambar.innerHTML = "Gambar disini";
        konten.append(tempat_gambar);

        const tempat_review = document.createElement("div");
        tempat_review.id = "tempat-review";
        tempat_review.className = "tempat-review";
        tempat_review.innerHTML = "Review disini";
        konten.append(tempat_review);

        const footer = document.createElement('div');
        footer.className = 'footer';
        konten.append(footer);
        footer.innerText = 'Muhammad Rasyidi';
}

buatPeta = () => {
    peta = L.map("peta", {
        center: [-2.3198179, 120.419005],
        zoom: 4,
        scrollWheelZoom: false
    });

    var circle = "";
    
    // Mapbox ----------------------------------
    let mapboxToken = CONFIG.mapBoxToken();

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token=${mapboxToken}`, {
        maxZoom: 18,
        attribution:
            "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, "+
            "<a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, "+
            "Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>, "+
            "Muhammad Rasyidi",
        id: "mapbox.streets"
    }).addTo(peta);

    // Openstreet Map ---------------------------
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attribution:
    //         "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, "+
    //         "<a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, "+
    //         "Muhammad Rasyidi"
    // }).addTo(peta);

    var markersLayer = new L.LayerGroup();
    peta.addLayer(markersLayer);

    DBHelper.ambilRestoran((error, restoran) => {
        if(error){
            alert(`Ambil koordinat gagal dengan pesan '${error}'`);
        } else {
            Array.from(restoran).forEach((e) => {
                let marker = new L.marker(e.latlng, {
                    title: e.nama,
                    bubblingMouseEvent: true
                }).addEventListener("click", () => {
                    if(peta.getZoom() < 15){
                        peta.setView(e.latlng, 15);
                    } else {
                        peta.setView(e.latlng);
                    }

                    if(circle === ""){
                        circle = L.circleMarker(e.latlng).addTo(peta);
                    } else {
                        circle.setLatLng(e.latlng);
                    }

                    tampilDataRestoran(e.id);
                });
        
                markersLayer.addLayer(marker);
            });
        }
    });
}

tampilDataRestoran = (id) => {
    DBHelper.ambilRestoranByID(id, (error, restoran) => {
        if(error){
            alert(`Gagal mengambil gambar dengan status '${error}'`);
        } else {
            const tempat_review = document.querySelector("#tempat-review");
            tempat_review.innerHTML =
                `<b>Nama tempat: ${restoran[0].nama}</b>`+
                `<hr>`+
                `Review:<br/>`+
                `${restoran[0].review}`;

            const tempat_gambar = document.querySelector("#tempat-gambar");
            tempat_gambar.innerHTML = "";

                const gambar = document.createElement("img");
                gambar.className = "gambar";
                setTimeout(() => {
                    gambar.src = `../images/peta/${restoran[0].gambar}`;
                }, 100);
                tempat_gambar.append(gambar);

                const footerImage = document.createElement("div");
                footerImage.className = "footer-image";
                footerImage.innerHTML = "<small>*Google Image</small>";
                tempat_gambar.append(footerImage);
        }
    });
}