// api url
const api_url ="https://api.thingspeak.com/channels/1983366/feeds.json?api_key=FGIXMB39EV90R7JO&results=2";

setInterval(() => { //Mengatur interval untuk menjalankan fungsi yang terdapat di dalamnya setiap 1 detik
  fetch(api_url) //melakukan permintaan HTTP ke UR
    .then((hasil) => hasil.json()) //menangani hasil dari permintaan fetch dan mengonversinya ke format JSON
    .then((res) => { //promise lain untuk menangani objek JSON yang telah diperoleh dari langkah sebelumnya.
      var field = JSON.stringify(res.feeds[0]); //Mengonversi objek JSON menjadi string
      var obj = JSON.parse(field); //Mengonversi string JSON kembali ke objek
      document.getElementById("field-1").innerHTML = obj.field1; //Memperbarui konten HTML dari elemen dengan ID "field-1"
      document.getElementById("field-2").innerHTML = obj.field2; //Memperbarui konten HTML dari elemen dengan ID "field-2"
    });
}, 1000); 
