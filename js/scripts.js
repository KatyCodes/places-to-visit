//business logic
function Cityinfo (country, tempurature, language) {
  this.cityCountry = country;
  this.cityTemp = tempurature;
  this.cityLang = language;
}

var Penang = new Cityinfo("Malaysia", "high", "Malay");

//ui logic
$(document).ready(function(){
  $("ul").click(function(event){
    $("#moreInfo").show();
    $("#country").append(Penang.cityCountry);
  })
});
