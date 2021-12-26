 https://react.semantic-ui.com/usage/
REACT TOSTIFY
https://fkhadra.github.io/react-toastify/introduction/
https://firebase.google.com/

 
 app js de  name ve value array olarak tanimlanir ADD CONTACT e girilen veriler forma aktarilir.
props olarak akatrip value degerlerinie atama yapilir.
segment?
utils kalsorune database islemleri kaydet.select options olan veriler de burdsn cagrilip secuilir

onchange ile inputa girilen her degerin forma aktilrmasi gerceklestirilir. info daki id key degerleri ile . her bir input icin bir name ve value degeri gelmeli obje halinde yeni gelen degerler uzerine akttarilir, select input icin farkli fonksiyon uygulamali hem semanticUI dan gelen e ve value degeri geliyor. console  ile kontroledip inputa girilen veriler aktarili8dighindan emin ol 
formu submit etmlei handle sumbit ile  app js de fonskiyonu tanimliyoruz props yolu ile 

0firebese ile database proje olusturuyoruz.
add project realtime database ile create test mode sureekli kullanacadimiz bir database ismi vermeli congiguration kismindaki linkleri utils altinda firebase dosyasina kopyaliyiruz initializeApp imprt from firebase/app
utils altindaki functions dosyasinda db e ait butun islemler yapilacak getdatabase ile ulasiyrouz. ref() ile db deki verdigimiz ismi kullaniyoruz new userRef  push ile useRef a yeni gelen bilgileri aktaririyoruz 
usefetch ile verileri sayfaya geri yuklme islemi yapilir.anasyfadaki table da gorunmesi saglanir ekran ilk yuklendigi anda table a verikler gelmesi beklniyor

contacts sayfasinbda table cell uzerinde functions ta yazilan fonsiyonlari sirasiyla cagiriyouz.
dokumasyon daki bilgileri takip ederek snapshot onvalue kullanimlari  usefetch icinde uygulanir veriler contactys de oldugu icin snapshoot ile ordan cagitriyoruz.   
onValue(query(userRef), snapshot => {
        const contacts=snapshot.val()

gelen veriler ici bos degilse db deki arrayden verileri map ile hucrelere yerlestircek optional chining


veriyi silerken

function dosyasinda dleteinfo foknsiyonu olustur. remove (ref(db,"contact/"+id)) contact in icine giriyor
onclickte fonksiyounu cagir, 


update ederken once import etmeli

veriye tiklayinca forma gelsin ve degisiklik yapabilelim.db calistir child arattirdigimiz veriyi simgeler yyeni  bir key olusturup contacts de cagirip yeni veri ile gonderilir  edit Handlerfonksiyuou app.js de olusturulup contacts a iletilri


tostfy kullanimi
utils altinda bir dosya acilir, burdan bize mesajlar gelecek basari veya basarisizlik durumunda her yaptigimiz islemde gelip gitmeli appjs ten componenty olarak import edilir. functions da her yapilan islemin sonuna message eklenir 
REACT TOSTIFY sitesinden dokumasyonu bulabu=ilirsin

.env (environment)dosyasi process gitignore gibi bir dosya bos hali ile readme ile olusturullmali REACT_APP_APP_KEY = 
diye ffirebase de aldigimiz key vs tirnak icindekileri kopyaliyoruz. saonra buyuk harfli yazilri firebase icine basina process.env. ekleyerek karsilarina yazilir. 
neden  verilerimi gizlyerek gonderiyorum netlify veya github ayuklerken .env eklenmeli

REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=