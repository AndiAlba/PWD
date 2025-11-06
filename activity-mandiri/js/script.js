function fn_ValForm() {
    var sMsg = "";
  
    // Ambil nilai input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validasi kosong
    if (name == "") {
      sMsg += "\n* Anda belum mengisikan nama";
    }
  
    if (email == "") {
      sMsg += "\n* Anda belum mengisikan email";
    } else {
      // Validasi format email menggunakan RegExp
      var emailRegex = /^[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
      if (!emailRegex.test(email.toLowerCase())) {
        sMsg += "\n* Format email tidak valid";
      }
    }
  
    if (message == "") {
      sMsg += "\n* Anda belum mengisikan pesan";
    }
  
    // Tampilkan pesan jika ada kesalahan
    if (sMsg != "") {
      alert("Peringatan:\n" + sMsg);
      return false;
    } else {
      return true;
    }
  }
  