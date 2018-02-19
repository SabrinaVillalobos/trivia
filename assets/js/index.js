var questionNumber = 0;
var correct = 0;
var incorrect = 0;
var userAnswers= [];

$('#start').click(function() {
    $.ajax({
      url: `https://opentdb.com/api.php?amount=15&category=23&difficulty=medium`,
      method: 'GET',
      datatype: 'json'
    })
    .done(function(response) {
      console.log(response);
      $('.startcontainer').remove();
    })
    .fail(function(error) {
      console.log('Error');
    })
})