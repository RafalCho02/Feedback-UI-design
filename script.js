$(document).ready(function () {
  let selectedRating = "Satisfied";

  $(".ratings-container").on("click", ".rating", function () {
    $(".rating").removeClass("active");
    $(this).addClass("active");
    selectedRating = $(this).find("small").text();
  });

  $("#send").on("click", function () {
    $("#panel").fadeOut(500, function () {
      $(this)
        .html(
          `
        <div class="thank-you">👍</div>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
      `
        )
        .fadeIn(500);
    });
  });
});
