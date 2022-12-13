window.addEventListener("load", () => {
  getAllData();
});

function getAllData() {
  $.ajax({
    type: "GET",
    url: "/api/load",
    data: {},
    success: function (response) {
      let imageElement = document.querySelector(".main-wedding-img");
      imageElement.style.backgroundImage = response["image_url"];

      $("#main-title").text(response["main_title"]);
      console.log("!@#!@#123123123,", response["main_title"]);

      $(".groom-name").text(response["groom_name"]);
      $(".bride-name").text(response["bride_name"]);
      $("#groom-name").val(response["groom_name"]);
      $("#bride-name").val(response["bride_name"]);

      $("#floating-input-detail-date").text(response["wedding_date"]);
      $("#floating-input-detail-location").text(
        response["wedding_detail_location"]
      );
      $("#invite-phrases-textarea").text(response["invitation_parases"]);
      $("#groom-father-name").text(response["groom_father_name"]);
      $("#groom-mother-name").text(response["groom_mother_name"]);
      $("#bride-father-name").text(response["bride_father_name"]);
      $("#bride-mother-name").text(response["bride_mother_name"]);

      $("#wedding-hall-name").val(response["wedding_hall_name"]);
      $("#wedding-hall-address").val(response["wedding_hall_address"]);

      $("#wedding-hall-phone").on("click", () => {
        call(response["wedding_hall_contact"]);
      });

      $("#tel-groom-contact").on("click", () => {
        call(response["groom_contact"]);
      });

      $("#tel-groom-contact").on("click", () => {
        call(response["groom_contact"]);
      });
      $("#message-groom-contact").on("click", () => {
        message(response["groom_contact"]);
      });
      $("#tel-bride-contact").on("click", () => {
        call(response["bride_contact"]);
      });
      $("#message-bride-contact").on("click", () => {
        message(response["bride_contact"]);
      });
    },
  });
}

function call(phoneNumber) {
  location.href = "tel:" + phoneNumber;
}


function shareMessage() {
    Kakao.Share.sendScrap({
      requestUrl: 'http://localhost:5000/',
    });
  }




