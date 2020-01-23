function createPdf(){
   var name=document.querySelector('#name').value;
   var age=document.querySelector('#age').value;
   var gender=document.querySelector('#gender').value;
   var dis=document.querySelector('#disease').value;
   var prescription=document.querySelector('#prescription').value;
   var doc=new jsPDF();
   doc.text(name);
   doc.text(age);
   doc.text(gender);
   doc.text(dis);
   doc.text(prescription);
   doc.save('a4.pdf'); 
   
}
var target_div = document.getElementById('preview')
   console.log(target_div);
   target_div.addEventListener('click',function() {
   $('#myform').previewForm();
   });

// $(document).ready(function() {

//      $('#myform').previewForm();

// });


    var commands = {
   // annyang will capture anything after a splat (*) and pass it to the function.
   // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
   'name *tag': funcName,
   'age *tag': funcAge,
   'gender *tag': funcGender,
   'prescription *tag': funcPrescription,
   'disease *tag': funcDisease,
   'preview': prev

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
function funcPrescription(tag){
   console.log("from the function")
   $('#prescription').val(' '+tag);
   
}
function funcAge(tag){
   console.log("from the age function")
   $('#age').val(' '+tag);
   
}
function funcGender(tag){
   console.log("from the function")
   $('#gender').val(' '+tag);
   
}
// function funcPreview(tag){
//    console.log("PREVIEW AAGYA RE");
//    console.log($('#myform'));
//    $('#myform').previewForm();
// }
annyang.addCommands(commands);
annyang.debug();
annyang.start();
