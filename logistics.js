var btn=document.getElementById('press');
var element = document.getElementById('print');
    var opt = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
     
   
    var btn=document.getElementById('press');
    btn.addEventListener('click',function(){
    html2pdf().from(element).set(opt).save();
    });
//html2pdf().from(element).set(opt).save();

var target_div = document.getElementById('preview')
   console.log(target_div);
   target_div.addEventListener('click',function() {
   $('#myform').previewForm();
   });

// $(document).ready(function() {

//      $('#myform').previewForm();

// });
//-----------------------------------------------------------------
function onSignIn(googleUser) {
    console.log("usersigned in");
    
    
  var profile = googleUser.getBasicProfile();
    console.log($('#docId');
    console.log($('#docName');
  $('#docId').innerHTML=profile.getId()); // Do not send to your backend! Use an ID token instead.
  $('#docName').innerHTML=profile.getName();
    $("#docImg").src=getImageUrl();
    $("#docImg").style.display=inline;
  //$(#docImg).style.=getImageUrl());
  //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}



//-----------------------------------------------------------------
    var commands = {
   // annyang will capture anything after a splat (*) and pass it to the function.
   // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
   'name *tag': funcName,
   'age *tag': funcAge,
   'gender *tag': funcGender,
   'symptoms *tag':funcSymptom,
   'precaution *tag': funcPrecaution,
   'disease *tag': funcDisease,
   'medicine *tag':funcMedicine,
   'preview': prev,
   'PDF': done,
   'email': mailing,
   // A named variable is a one word variable, that can fit anywhere in your command.
   // e.g. saying "calculate October stats" will call calculateStats('October');
   //'calculate :month stats': calculateStats,

   // By defining a part of the following command as optional, annyang will respond to both:
   // "say hello to my little friend" as well as "say hello friend"
   //'say hello (to my little) friend': greeting
};

// var showFlickr = function(tag) {
//   var url = 'http://api.flickr.com/services/rest/?tags='+tag;
//   $.getJSON(url);
// }

// var calculateStats = function(month) {
//   $('#stats').text('Statistics for '+month);
// }

// var greeting = function() {
//   $('#greeting').text('Hello!');
// }
function mailing(tag) {
console.log($('#mail'));
$('#mail').click();
}


function prev(tag) {
console.log("lol");
console.log($('#preview'));
$('#preview').click();
}
function funcName(tag){
   console.log("from the function")
   $('#name').val(' '+tag);
   
}
function funcDisease(tag){
   $('#disease').val(' '+tag);
}
function funcMedicine(tag){
   $('#medicine').val(' '+tag);
}


function funcPrecaution(tag){
   console.log("from the function")
   $('#precaution').val(' '+tag);
   

}
function funcSymptom(tag){
   console.log("from the function")
   $('#symptom').val(' '+tag);
   
}
function funcAge(tag){
   console.log("from the age function")
   $('#age').val(' '+tag);
   
}
function funcGender(tag){
   console.log("from the function")
   $('#gender').val(' '+tag);
   
}
function done(tag){
    console.log("PDF MADE");
html2pdf().from(element).set(opt).save();
}
// function funcPreview(tag){
//    console.log("PREVIEW AAGYA RE");
//    console.log($('#myform'));
//    $('#myform').previewForm();
// }
annyang.addCommands(commands);
annyang.debug();
annyang.start();
