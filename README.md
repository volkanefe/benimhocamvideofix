# Benim Hocam Video Fix

**Benim Hocam video oynatıcısının masaüstü tarayıcılarında yaşadığı CORS kaynaklı yükleme sorunlarını gidermek amacıyla geliştirilmiş bir Chrome uzantısıdır.**

## 📌 Proje Hakkında

Benim Hocam Video platformunda bazı video çözümleri mobil cihazlarda sorunsuz çalışırken masaüstü tarayıcılarında yüklenme sorunları yaşanabilmektedir.

Bu sorunların başlıca nedenlerinden biri, video oynatıcısının farklı bir alan adında çalışması ve içerik dosyalarının başka bir sunucudan yüklenmesi sırasında ortaya çıkan **CORS (Cross-Origin Resource Sharing)** kısıtlamalarıdır.

Benim Hocam Video Fix, bu sorunu aşmaya yardımcı olmak için ilgili sunucudan gelen HTTP yanıtlarına gerekli CORS başlığını ekler.

## ✨ Özellikler

- Benim Hocam Video platformuna yönelik geliştirilmiştir.
- CORS kaynaklı içerik yükleme sorunlarını gidermeye yardımcı olur.
- Video oynatıcısının ilgili sunucudan gelen AJAX (XMLHttpRequest) isteklerini düzenler.
- Yalnızca belirlenen video oynatıcı ve içerik sunucuları arasındaki ilgili isteklere müdahale eder.
- Chrome Manifest V3 altyapısını kullanır.
- Tarayıcının genel web güvenliğini devre dışı bırakmaz.

## 🛠️ Kullanılan Teknolojiler

- JavaScript
- Chrome Extensions API
- Manifest V3
- Declarative Net Request API

## 📥 Kurulum

Uzantıyı Chrome tarayıcısına yüklemek için aşağıdaki adımları izleyin.

**1. Projeyi indirin**

GitHub deposunu bilgisayarınıza indirin veya klonlayın:

```bash
git clone https://github.com/volkanefe/benimhocamvideofix.git
```

**2. Chrome uzantılar sayfasını açın**

Chrome adres çubuğuna aşağıdaki adresi yazın:

```text
chrome://extensions
```

**3. Geliştirici modunu etkinleştirin**

Uzantılar sayfasının sağ üst köşesindeki Geliştirici modu seçeneğini açın.

**4. Uzantıyı yükleyin**

- Paketlenmemiş öğe yükle seçeneğine tıklayın.
- İndirdiğiniz `benimhocamvideofix` klasörünü seçin.
- Uzantının Chrome'a eklenmesini bekleyin.

**5. Kullanmaya başlayın**

Benim Hocam Video platformunu açın:

https://benimhocamvideo.frns.in/

Video çözümlerini masaüstü tarayıcınızda tekrar deneyin.

## 📁 Proje Dosyaları

| Dosya | Açıklama |
|---|---|
| `manifest.json` | Uzantının yapılandırma ve izin bilgileri |
| `background.js` | CORS yanıt başlığı düzenleme işlemleri |
| `content.js` | Video sitesi açıldığında arka plan servisini etkinleştirir |

## 🔍 Nasıl Çalışır?

Video oynatıcısı `vvplayer.fernus.net` alan adı üzerinden çalışırken içerik dosyalarını `benimhocam.frns.in` sunucusundan talep eder.

Sunucunun gerekli CORS yanıt başlığını göndermemesi durumunda tarayıcı, isteğin JavaScript tarafından okunmasını engeller.

Benim Hocam Video Fix, Chrome'un `declarativeNetRequest` API'sini kullanarak yalnızca ilgili sekmedeki ve belirlenen alan adları arasındaki XMLHttpRequest yanıtlarına aşağıdaki başlığı ekler:

```http
Access-Control-Allow-Origin: https://vvplayer.fernus.net
```

Böylece ilgili çapraz kaynak isteğinin tarayıcı tarafından okunabilmesi amaçlanır.

## ⚠️ Önemli Notlar

- Uzantı, Benim Hocam platformunun resmî bir ürünü değildir.
- Proje bağımsız olarak geliştirilmiştir.
- Mevcut sürüm yalnızca belirlenen XMLHttpRequest isteklerine müdahale eder.
- Farklı kaynak türlerinden gelen CORS hataları, Mixed Content engelleri veya sunucuda bulunmayan dosyalar ayrıca çözüm gerektirebilir.
- Uzantı, Chrome'un tüm güvenlik mekanizmalarını devre dışı bırakmaz.

## 🔐 Gizlilik

Uzantı, kişisel kullanıcı verilerini toplamak veya harici bir sunucuya göndermek üzere tasarlanmamıştır.

İşlemler Chrome tarayıcısının yerel uzantı API'leri üzerinden gerçekleştirilir.

## 👨‍💻 Geliştirici

**Volkan EFE**

GitHub: https://github.com/volkanefe

## 📄 Lisans ve Kullanım

Proje kaynak kodları açık olarak paylaşılmaktadır. Yeniden kullanım ve dağıtım koşulları için depoya uygun bir lisans dosyası eklenmelidir.

---

**Benim Hocam Video Fix — Masaüstünde daha sorunsuz video deneyimi için.**
