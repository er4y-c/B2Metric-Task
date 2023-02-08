# B2Metric Jr Frontend Developer Task
## Açıklama
Bu proje React kullanılarak NextJs yapısına uygun olarak geliştirilmiştir.
## Kullanılan Kütüphaneler

| Kütüphane | Versiyon |
| --------- | -------- |
| React | 18.2.0 |
| MaterialUI | ^5.11.7 |
| MaterialUI Icons| ^5.11.0 |
| NextJS | ^13.1.6 |
| Formik | ^2.2.9 |
| Yup | ^0.32.11 |
| ChartJs | ^4.2.0 |
| @Reduxjs/toolkit | ^1.9.2 |
| React Redux | ^8.0.5 |
| Faker | ^7.6.0 |

## Login Sayfası
Login sayfasında form validasyonu Formik kütüphanesiyle sağlanmıştır. Göz ikonuna sahip bir buton ile şifrenin görünüp görünememesi ayarlanabilmektedir.
<img src="https://i.ibb.co/By8zbjK/login.png"/>
<img src="https://i.ibb.co/tXCjMnQ/login2.png"/>

## Overview Sayfası
Overview sayfasındaki tüm komponentler MaterialUI kütüphanesi komponentlerinin düz CSS ile özelleştirilmesi ile elde edilmiştir. Sayfa metriklerinin üstüne imleç 
ile gelindiğinde istenilen hover efekti gerçekleşmektedir. İkinci resimde yer alan grafik Chart.Js kütüphanesi ve ona bağlı olan React-ChartJs-2 kütüphanesi ile 
oluşturulmuştur. Grafik için gerekli veriler Faker kütüphanesiyle rastgele oluşturulmaktadır.
<img src="https://i.ibb.co/Tm2kJnv/overview.png"/>
<img src="https://i.ibb.co/wN14gDY/overview2.png"/>
## Users Sayfası
Users sayfasındaki tablo MaterialUI kütüphanesi ile oluşturulmuştur. Kullanıcı verileri public bir API'dan çekilmiştir. İlgili state yönetimi için Redux kütüphanesi
kullanılmıştır.
<img src="https://i.ibb.co/8NGYRmR/users.png"/>
