
//////////////////////////////////////
/// for drop menu
$('.profil_imgMin').click(function (event) {
  event.stopPropagation();
  $('.profile_menu').toggleClass('hidden');
});

$(window).click(function () {
  $('.profile_menu').addClass('hidden');
});

$('.profile_menu').click(function (event) {
  event.stopPropagation();
});
//////////////////////////////////////




//////////////////////////////////////
/// for ratting stars
// var starRatings = 3.5;
// var starTotal = 5;

// // Run getRatings when DOM loads
// document.addEventListener('DOMContentLoaded', getRatings);

// // Get ratings
// function getRatings() {
//   var starPercentage = (starRatings / starTotal) * 100;
//   var starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
//   document.querySelector(".stars-inner").style.width = starPercentageRounded;
// }
//////////////////////////////////////



//////////////////////////////////////
//add & remove edu skill etc
$('#eduAddLabel').click(function(){
  $('#edus').append(copyElement('#edu'));
})

$('#expAddLabel').click(function(){
  $('#exps').append(copyElement('#exp'));
})

$('#skillAddLabel').click(function(){
  $('#skills').append(copyElement('#skill'));
})

$('#languageAddLabel').click(function(){
  $('#languages').append(copyElement('#language'));
})

function copyElement(x) {

  var element = $(x).clone(true);

  var del = $("<label class='delete'></label>").text('Delete')

  var ln = $("<hr class='line'>");

  $(element).prepend(ln);

  $(del).click(function(e){
    $(this).parent().remove();
  });

  $(element).append(del);

  return element;
}

//////////////////////////////////////


//////////////////////////////////////
/////////review replaced imgs/////////
function set_img(input, id) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      //alert(e.target.result);
      document.getElementById(id).setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }

}
//////////////////////////////////////

//////////////////////////////////////
//////////tabbing/////////////////////

$('.bodyTab').click(function(){
  $(".bodyTab").removeClass("activeLabel");
  $(this).addClass('activeLabel');

  var index = $(".bodyTab").index(this);
  var targetTab = ".tabA" + ":eq(" + index + ")";

  $(".tabA" ).addClass('hidden');
  $(targetTab).removeClass('hidden');
});

$('.tab').click(function(){
  $(".tab").removeClass("activeLabel");
  $(this).addClass('activeLabel');

  var index = $(".tab").index(this);

  switch (index) {
    case 3:
      index = 0;
      break;
    case 4:
      index = 1;
      break;
    case 5:
      index = 2;
      break;
    default:
      break;
  }
  
  var targetTab = ".profileBody" + ":eq(" + index + ")";
  
  $(".profileBody" ).addClass('hidden');
  $(targetTab).removeClass('hidden');
});

//////////////////////////////////////
