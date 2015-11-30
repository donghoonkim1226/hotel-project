// $(document).ready(function() {
//   $("#myModal1").on("hide.bs.modal", function() {
//     $("[data-target='#myModal1']").fadeTo("slow", 0.25);
//   });
// });

$(document).ready(function() {
	$(".row-delete").hide();

  $(".hide-listing").on("click", function() {
      $(this).closest(".row-delete").remove();
      $(".modal-backdrop").hide();
  });

$(".btn-success").click(function(e) {
	e.preventDefault();
  var location = $("#location").val();
  if (location !== "") {
  	$(".row-delete").show();
    }
});



});