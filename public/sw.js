const namaCache = 'ocitmws';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(namaCache).then(async cache => {
            return cache.addAll([
                '/register_sw.js',
                '/main.js',
                '/main.css',
                '/main576.css',
                '/index.html',
                '/404.html',
                '/images/offline/no_image.jpg',
                '/images/blooming-blur-close-up-459059_720.jpg',
                '/kalkulator/index.html',
                '/peta/peta576.css',
                '/peta/peta.js',
                '/peta/peta.css',
                '/peta/index.html',
                '/peta/dbhelper.js',
                '/peta/data.json',
                '/kalkulator/kalkulator.js',
                '/kalkulator/kalkulator.css',
            ]).catch(err => {
                console.log(`Gagal membuka cache, error: ${err}`);
            });
        })
    )
});

self.addEventListener('fetch', e => {
    if(navigator.onLine === false){
        console.log('offline');
        offline = true;
    }

    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request).then(async fetchResponse => {
                return caches.open(namaCache).then(cache => {
                    cache.put(e.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(err => {
            if(e.request.url.includes('.jpg')){
                return caches.match('/images/offline/no_image.jpg');
            }
            
            return new Promise('Tidak terkoneksi ke internet', {
                status: 404,
                statusText: 'Tidak terkoneksi ke internet'
            });
        })
    )
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(namaCacheBaru => {
            return Promise.all(
                namaCacheBaru.filter(namaCacheBaru2 => {
                    return namaCacheBaru2.startsWith('mwsocit-')&& namaCacheBaru2 !== namaCache;
                }).map(namaCache => {
                    return caches.delete(namaCache);
                })
            )
        })
    )
});