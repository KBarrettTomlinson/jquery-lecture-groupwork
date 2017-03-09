var timesClicked = 0;

$(document).ready(function(){
  console.log("I'm here with you");

  $(".container").append("<button>"+"I'm A Button!"+"</button>");
  $(".container").on("click","button",function(){
      console.log('Youve Clicked Me!');
      timesClicked += 1;
      console.log(timesClicked);
      var divideByThree = timesClicked % 3;
      if (divideByThree === 0){
          $(".container").append("<p>SUSHI</p>");
      }
      
    });


});
