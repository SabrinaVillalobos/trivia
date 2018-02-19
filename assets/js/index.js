$(document).ready(function() {
  $('#start').click(function() {
    $('.startcontainer').html('');
    
    $.ajax({
      url: `https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple`,
      method: 'GET',
      datatype: 'json'
    })
    .done(function(response) {
      console.log(response);
      showQuestions(response);
    })
    .fail(function(error) {
      console.log('Error');
    })

    var correct = 0;
    var incorrect = 0;
    function showQuestions(info) {
      var info = info.results;
      console.log(info);    
      for (var i in info) {
        var questions = info[i].question;
        var correct_answer = info[i].correct_answer;
        var incorrect_1 = info[i].incorrect_answers[0];
        var incorrect_2 = info[i].incorrect_answers[1];
        var incorrect_3 = info[i].incorrect_answers[2];
        $('.questionsContainer').append(`<div class="row"><div class="col-xs-12"id="question">
                                        <h3>${questions}</h3></div></div>`);
        $('.questionsContainer').append(`<div class="row"><div class="col-xs-12"id="question">
                                        <li><button class="btn btn-primary alternative" 
                                        value="${correct_answer}">${correct_answer}</li>
                                        <li><button class="btn btn-primary alternative" 
                                        value="${incorrect_1}">${incorrect_1}</li><li>
                                        <button class="btn btn-primary alternative" 
                                        value="${incorrect_2}">${incorrect_2}</li><li>
                                        <button class="btn btn-primary alternative" 
                                        value="${incorrect_3}">${incorrect_3}</li></div></div>`);
         $('.alternative').click(function() {
          var content = $(this).val();
          if (content === info[i].correct_answer) {
            $(this).css('background-color', 'green');
            correct++
          }
        });
      }
    } // funcion showQuestionsAnswers
  }); // click start
}); // document.ready  
      
      
      
        //        $('.questionsContainer').append(`<div class="row"><div class="col-xs-4"><button class="btn btn-primary" id="next">Next question</button></div></div>`);

        //$('.questionsContainer').empty();
        //$('.questionsContainer').append(`<div class="row"><div class="col-md-8 nextQuestion"><img src="assets/img/pencilandpaper.png"></div></div><div class="row"><div class="col-xs-12"><button class="btn btn-primary" id="next">Next question</button></div></div>`);
        


        /*$('#next').click(function(response) {
          console.log(info[i].question)
        });*/
       // click en alternativas
   



/*1RA IDEA

if ($(this).textContent === info[i].correct_answer) {
          $(this).css('background-color', 'green')
        } else {
          $(this).css('background-color', 'red')



 for (var i in info) {
        /*var allinfo = info[i];
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
      }










$('.questionsContainer').append(`<div class="row"><div class="col-xs-12"id="question"><h3>${questions}</h3></div></div>`);
        
        for (var j in alternatives) {
          $('.questionsContainer').append(`<div class="row"><div class="col-xs-12" id="answers"><li><button class="btn btn-primary alternative" value="${alternatives[j]}">${alternatives[j]}</button></li></div></div>`)
        }
                
        $('.alternative').click(function() {
          var content = $(this).val();
          if (content === correct_answer) {
            $(this).css('background-color', 'green');
          } 
          if (content === incorrect_1 || content === incorrect_2 || content === incorrect_3) {
            $(this).css('background-color', 'red');
          }
          $('.questionsContainer').append(`<div class="row"><div class="col-xs-4"><button class="btn btn-primary" id="next">Next question</button></div></div>`);
          $('#next').click(function() {
            if (info.length < 1) {
              $('.questionsContainer').empty();
            } else {
              showQuestionsAnswers(info)
            }
          });
        });
*/