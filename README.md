## Node.JS Nedir ?

Node.js, açık kaynaklı bir çalışma zamanı ortamıdır ve özellikle sunucu taraflı uygulama geliştirme için kullanılır. JavaScript dilini kullanarak yüksek performanslı, ölçeklenebilir ve verimli ağ uygulamaları oluşturmayı sağlar.

## Senkron Programlama (Synchronous Programming):

Senkron programlama en basit tanımıyla işlemlerin sırasıyla yapılmasıdır. Önce bir dosya okuyalım, sonra bir veritabanı işlemi yapalım ve sonrasında da bir http isteği gönderelim şeklinde basit bir şekilde çalışır. Beklemekten sıkılmaz, başka işlerin aciliyetiyle ilgilenmez. Bir işlem yapılırken diğer işlemler bloklanır.

## Asenkron Programlama (Asynchronous Programming):

Asenkron programlama ise uzun süren bir işlemi beklemeden diğer işlemlere devam edebilmektir, işlemlerin sırasıyla devam etme zorunluluğu yoktur. Önce bir dosya okuyalım, aaa ama bu dosya okumak uzun sürüyor, eee ne yapalım o zaman? Bu işlemin bitmesini beklemeden diğer işleme geçebiliriz. Bir işlem yapılırken diğer işlemler bloklanmaz.

## Olay Döngüsü (Event-Loop):

Event-Loop, callback, single thread.. Nasıl hiçbir şey anlamıyoruz değil mi? Özellikle aşağıdaki grafiği açıklayayım hiç işleri zorlaştırmaya gerek yok. Restoran - garson metaforumuza tekrar döneceğim burada. Restoranımız çalışma ortamı ve yalnızca tek bir garson çalışıyor (Single Thread) bu garsonumuz önce 1. masaya ait siparişleri aldı ve siparişi mutfağa bildirdi (Thread Pool). O siparişlerin hazır olmasını beklemeden (Non-Blocking) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi. Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi (callback).

### Process Object

Şu an için tamamıyla kavramak bizi zorlasa da process nesnesi, node.js çalışma ortamında o an yapılan iş ile ilgili bilgiler içerir. Bizim için önemli olan kısım ise process.argv özelliğidir. process.argv bize node.js programı çalıştığında komut satırından girilen argümanları bir array olarak bize sunar.

### Node.js REPL Ortamı

Nasıl ki Windows işletim sistemimizin terminal ekranı "Komut Sistemi" ise benzer şekilde Node.js Javascript çalışma ortamının da bir terminal ekranı vardır ve Node REPL olarak adlandırılır. REPL, Read - Eval - Print - Loop kelimelerinin baş harflerinden oluşmaktadır ve bizlere Node.js Javascript çalışma ortamında Javascript kodlarını çalıştırabileceğimiz bir komut satırı ortamı sunar.

---

### ANAHTAR NOTLAR

#### REPL Komutları - Açıklamaları

help - Tüm komutları listeler.

break - Çok satırlı ifadeden çıkar.

ctrl + c - Çalışan komutu durdurur.

ctrl + d - REPL ortamını sonlandırır.

save dosya_adi - REPL ortamındaki kodları dosyaya kaydeder.

load dosya_adi - Dosyadaki kodları REPL ortamına alır.

---