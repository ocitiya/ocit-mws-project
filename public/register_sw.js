if(navigator.serviceWorker){
    navigator.serviceWorker.register(`/sw.js`).then(reg => {
        console.log(`Service worker terdaftar, berada di ${reg.scope}`);
    }).catch(err => {
        console.log(`Service worker gagal di daftarkan, error: ${err}`);
    });

    navigator.serviceWorker.register(`/manifest.json`).then(reg => {
        console.log(`Berhasil menambahkan manifest`);
    }).catch(err => {
        console.log(`Gagal menambahkan manifest`);
    });


}

if(!navigator.onLine){
    document.querySelector('#offline').style.display = 'block';
} else {
    document.querySelector('#offline').style.display = 'none';
}