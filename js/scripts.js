//business logic
function Cityinfo (city, language, activity) {
  this.cityName = city;
  this.cityLang = language;
  this.cityActivity = activity;
}



//ui logic
$(document).ready(function(){
 $("form").submit(function(event){
   event.preventDefault();

   var inputCity = $("input#city").val();
   var inputLanguage = $("input#language").val();
   var inputActivity = $("input#activity").val();

   var newCity = new Cityinfo(inputCity, inputLanguage, inputActivity);

   $("#list").append("<li><span class='clickable'>" + newCity.cityName + "</span></li>");

   $(".clickable").last().click(function(){
     $("#moreInfo").show();
     $("#userCity").text(newCity.cityName);
     $("#userLang").append(newCity.cityLang);
     $("#userActivity").append(newCity.cityActivity);
   });

 });
});
