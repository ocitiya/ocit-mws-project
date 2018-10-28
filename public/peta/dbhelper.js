class DBHelper{

    static get DATABASE_URL(){
        return `data.json`;
    }

    static ambilRestoran(callback){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", DBHelper.DATABASE_URL);
        xhr.onload = () => {
            if(xhr.status === 200){
                const json = JSON.parse(xhr.responseText);
                const restoran = json.restoran;
                callback(null, restoran);
            } else {
                const error = (`Permintaan gagal. Status ${xhr.status}`);
                callback(error, null);
            }
        };
        xhr.send();
    }

    static ambilRestoranByID(id, callback){
        DBHelper.ambilRestoran((error, restoran) => {
            if(error){
                callback(error, null);
            } else {
                let data = restoran.filter((r) => r.id == id);
                callback(null, data);
            }
        });
    }
}