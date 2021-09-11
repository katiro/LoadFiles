$(document).ready(function () {
   $("#iptFile").fileinput({

   });
});


$("#btnSend").on("click", function () {
   var fdFiles = new FormData();
   var listFiles = $("#iptFile")[0].files;
   $.each(listFiles, function (index, value) {  
      fdFiles.append(index, value);
   });

   for (var key of fdFiles.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }

// despues de migrar a un server
   /*$.ajax({
      type: 'POST',
      url: 
   });*/
});