class DBHelper{

    static get DATABASE_URL(){
        return `data.json`;
    }

    static ambilRestoran(callback){
        fetch(DBHelper.DATABASE_URL, {
            method: 'GET'
        }).then((res) => {
            if(res.status != 200){
                let error = (`Permintaan gagal. Status ${xhr.status}`);
                callback(error, null);
            } else if(res.status === 200){
                return res.json();
            }
        }).then((data) => {
            let restoran = data.restoran;
            callback(null, restoran);
        }).catch((err) => {
            callback(err, null);
        });
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