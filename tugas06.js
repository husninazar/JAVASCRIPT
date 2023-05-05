<!-- Contoh satu gambar -->
<img id="gambar1" src="gambar1.jpg">

<!-- Contoh tiga gambar -->
<div>
   <img id="gambar1" src="gambar1.jpg">
   <img id="gambar2" src="gambar2.jpg">
   <img id="gambar3" src="gambar3.jpg">
</div>
// Untuk satu gambar
$(document).ready(function() {
   $("#gambar1").click(function() {
      $(this).hide();
   });
});

// Untuk tiga gambar
$(document).ready(function() {
   $("div img").click(function() {
      $(this).hide();
   });
});
