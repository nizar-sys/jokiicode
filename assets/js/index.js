var data = [
  {
    srcImg: "assets/img/services/s1.png",
    titleService: "Dev Web Aplikasi",
  },
  {
    srcImg: "assets/img/services/s4.png",
    titleService: "Perbaiki Fitur Web Aplikasi",
  },
  {
    srcImg: "assets/img/services/s2.png",
    titleService: "Membuat Program Dengan Java, C & C++",
  },
];

data.forEach((services) => {
  return $("#data-service").append(`
    <div class="col-md-4 mx-auto">
    <div class="box-services active">
      <div class="box-header">
        <img src="${services.srcImg}" alt="${services.titleService}">
      </div>
      <div class="box-body">
        <h3>${services.titleService}</h3>
      </div>
    </div>
  </div>
    `);
});

$(document).ready(function () {
  var btnChat = $("#button-addon2");

  btnChat.click(function () {
    var inputWa = $("#wa-input").val();
    var waText = inputWa.split(" ").join("%20");

    window.open(`https://wa.me/6282124721853/?text=${waText}`);
  });
});
