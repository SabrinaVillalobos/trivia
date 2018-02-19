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