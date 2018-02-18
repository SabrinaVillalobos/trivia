$(document).ready(function() {
  $('#start').click(function() {
    $('.startcontainer').html('');
    //$('.questionContainer').append(`<div class="row"><div class="col-xs-12" id="question"></div></div><div class="row"><div class="col-xs-12" id="answers"></div></div>`)    
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
      var info = info.results;
    
      for (var i in info) {
        var allinfo = info[i];
        var question = allinfo.question;
        var correct_answer = allinfo.correct_answer;
        var incorrect_answers = allinfo.incorrect_answers;
        var allanswer = correct_answer+ ',' + incorrect_answers;
        var arrayAnswer = allanswer.split(',');
        console.log(arrayAnswer);

        var questionList = $(`<div class="result"></div>`);
        var onequestion = $(`<h3> ${question} </h3>`);
        var answersList = $(`<ul class="list-group-item answersList"></ul>`);
        for (var i = 0; i < arrayAnswer.length; i++) {
          var oneListAnswer = $(`<li><button class="btn btn-primary">${arrayAnswer[i]}</button></li>`);
          answersList.append(oneListAnswer);
        }
        
        questionList.append(onequestion);
        
        questionList.append(answersList);
        $('.questionsContainer').append(questionList);
        $('.questionsContainer').append(`<div class="text-center"><button class="btn btn-primary">Next</button></div>`);
      }
    }



});
})
/*
*/