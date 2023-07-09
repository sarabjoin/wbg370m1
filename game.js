if(jQuery){  
    var checkAnswers = function(){
        var answerString = "";
        var answers = $(":checked");
        answers.each(function(i) {
            answerString = answerString + answers[i].value;
        });
        // $(":checked").each(function(i) {
        //      var answerString = answerString + answers[i].value;
        // });
        checkIfCorrect(answerString);
        // checkIfCorrect(theString);
    };

    var checkIfCorrect = function(theString){
        if($('input[name=question1]:checked').val() == "b") {
            $("#correct1").show();
            $("#question1").css("background-color", "green");
            $("#question1").css("color", "white"); 
        }
        if($('input[name=question2]:checked').val() == "c"){
            $("#correct2").show();
            $("#question2").css("background-color", "green");
            $("#question2").css("color", "white"); 
        }
        if($('input[name=question3]:checked').val() == "d"){
            $("#correct3").show();
            $("#question3").css("background-color", "green");
            $("#question3").css("color", "white"); 
        }
        if($('input[name=question4]:checked').val() == "a"){
            $("#correct4").show();
            $("#question4").css("background-color", "green");
            $("#question4").css("color", "white"); 
        }
        if($('input[name=question5]:checked').val() == "c"){
            $("#correct5").show();
            $("#question5").css("background-color", "green");
            $("#question5").css("color", "white"); 
        }
        if($('input[name=question6]:checked').val() == "a"){
            $("#correct6").show();
            $("#question6").css("background-color", "green");
            $("#question6").css("color", "white"); 
        }
        if($('input[name=question7]:checked').val() == "a"){
            $("#correct7").show();
            $("#question7").css("background-color", "green");
            $("#question7").css("color", "white"); 
        }
        if($('input[name=question8]:checked').val() == "b"){
            $("#correct8").show();
            $("#question8").css("background-color", "green");
            $("#question8").css("color", "white"); 
        }
        if($('input[name=question9]:checked').val() == "b"){
            $("#correct9").show();
            $("#question9").css("background-color", "green");
            $("#question9").css("color", "white"); 
        }
        if($('input[name=question10]:checked').val() == "d"){
            $("#correct10").show();
            $("#question10").css("background-color", "green");
            $("#question10").css("color", "white"); 
        }
        if(parseInt(theString, 16) === 811124566973){
            $("body").addClass("correct");
            $("h1").text("You Win!");
            $("canvas").show();
        }
    };
    $("#question1").show();
    $("#question1").css("background-color", "#dbdad5");
   
};
if(impress){
    $("#question2").show();
    $("#question2").css("background-color", "#c1d6d9");
};
if(atom){
    $("#question3").show();
    $("#question3").css("background-color", "#dbdad5");
};
if(createjs){
    $("#question4").show();
    $("#question4").css("background-color", "#c1d6d9");
};
if(me){
    $("#question5").show();
    $("#question5").css("background-color", "#dbdad5");
};
if(require){
    $("#question6").show();
    $("#question6").css("background-color", "#c1d6d9");
};
if($().playground){
    $("#question7").show();
    $("#question7").css("background-color", "#dbdad5");
};
if(jaws){
    $("#question8").show();
    $("#question8").css("background-color", "#c1d6d9");
};
if(enchant){
    $("#question9").show();
    $("#question9").css("background-color", "#dbdad5");
};
if(Crafty){
    $("#question10").show();
    $("#question10").css("background-color", "#c1d6d9");
};