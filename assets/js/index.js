$(document).ready(function() {
  $('#start').click(function() {
    $('.startcontainer').html('');
    $('.questionsContainer').append(`<div class="row"><div class="col-xs-12" id="question"></div></div><div class="row"><div class="col-xs-12" id="answers"></div></div>`)
    
    $.ajax({
      url: `https://opentdb.com/api.php?amount=15&category=23&difficulty=medium`,
      method: 'GET',
      datatype: 'json'
    })
    .done(function(response) {
      console.log(response);
      showQuestionsAnswers(response);
    })
    .fail(function(error) {
      console.log('Error');
    })

    function showQuestionsAnswers(info) {
      console.log(info);
      var info = info.results;

      for(i in info) {
        var allinfo = info[i];
        var question = allinfo.question;
        var correct_answer = allinfo.correct_answer;
        var incorrect_answers = allinfo.incorrect_answers;
        console.log(question, correct_answer, incorrect_answers);

        var questionContainer = $('#question');
        var answersContainer = $('#answers');

        questionContainer.append(`<h3>${question}</h3>`);
      }
    }
  });
});
