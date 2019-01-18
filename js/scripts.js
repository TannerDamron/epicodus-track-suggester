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
      $("#myModalcss").fadeIn();
      $("#ruby").hide();
      $("#java").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (end === "front" && interest != "styling" && device === "android" && environment != "solo"){
      $("#myModalruby").fadeIn();
      $("#css").hide();
      $("#java").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (end === "back" && interest != "styling" && device === "android"){
      $("#myModaljava").fadeIn();
      $("#ruby").hide();
      $("#css").hide();
      $("#csharp").hide();
      $("#php").hide();
    } else if (interest != "styling" && device != "android" && company != "freelance"){
      $("#myModalcsharp").fadeIn();
      $("#ruby").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    } else if (interest != "styling" && device != "android" && environment != "pair" && company != "startup") {
      $("#myModalruby").fadeIn();
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#php").hide();
    } else {
      $("#myModalphp").fadeIn();
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
      $("#ruby").hide();
    }
     $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  $(".closeModal").click(function(){
      $(".modal").hide();
  });
  $(".xModal").click(function(){
    $(".modal").hide();
  });
});
