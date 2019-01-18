$(document).ready(function() {
  $("form#form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var end = $("input:radio[name=end]:checked").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var device =  $("input:radio[name=device]:checked").val();
    var company =  $("input:radio[name=company]:checked").val();
    var environment =  $("input:radio[name=environment]:checked").val();
    $('.name').text(name);
    if (!name){
      alert("Please enter your name");
    } else if (!end || !interest || !device || !company || !environment){
      alert("Please fill in all choices")
    } else if (end === "front"  && interest === "styling"){
      $("#css").fadeIn(2000);
      $("#ruby").hide();
      $("#java").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (end === "front" && interest != "styling" && device === "android" && environment != "solo"){
      $("#ruby").fadeIn(2000);
      $("#css").hide();
      $("#java").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (end === "back" && interest != "styling" && device === "android"){
      $("#java").fadeIn(2000);
      $("#ruby").hide();
      $("#css").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (interest != "styling" && device != "android" && company != "freelance"){
      $("#csharp").fadeIn(2000);
      $("#ruby").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    } else if (interest != "styling" && device != "android" && environment != "pair" && company != "startup") {
      $("#ruby").fadeIn(2000);
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    } else {
      $("#php").fadeIn(2000);
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#ruby").hide();
    }
  });
});
