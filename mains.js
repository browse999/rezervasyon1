

let islem = prompt( '1- Yeni kayıt, 2-Masa Boşaldı , 3-Çıkış')

if(islem==1){

        let adSoyad = prompt( 'Misafirin Adı Soyadı')
        alert (`${adSoyad} İsimli misafir kaydı alınmıştır.`)
}

else if(islem ==2) {

        alert('Yeni Randevu alınabilir.')
}

else if(islem==3) {

        alert('Dükkan kapandı ')
}

else {

        alert('Hatalı giriş yaptınız.')
}
