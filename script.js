/* START */
$(document).ready(function () {
    const startButton = $("#start-button");
    const quizContainer = $("#quiz-container");

    startButton.on("click", function () {
        startButton.hide();
        quizContainer.show();

            setTimeout(function () {
            quizContainer.css("right", "25%");
        }, 0);
    });
});


/* QUIZ */

$(document).ready(function () {
   
    var questions = [
        {
            question:
                "Question 1. What is the official name of the time machine in 'Back to the Future'?",
            options: [
                "The DeLorean",
                "The TARDIS",
                "The Millennium Falcon",
                "The Batmobile"
            ],
            answer: 0
        },
        {
            question:
                "Question 2. In which decade does Marty McFly travel back in time to in the first film?",
            options: ["1970s", "1950s", "1980s", "1960s"],
            answer: 1
        },
        {
            question:
                "Question 3. What is the name of the eccentric scientist who invents the time machine?",
            options: ["Dr. Strangelove", "Dr. Brown", "Dr. Who", "Dr. Jekyll"],
            answer: 1
        },
        {
            question:
                "Question 4. Which iconic sports event does Marty need to change in the past to ensure his future?",
            options: [
                "The Super Bowl",
                "The World Series",
                "The Olympics",
                "The Stanley Cup"
            ],
            answer: 1
        },
        {
            question:
                "Question 5. What is the catchphrase written on the DeLorean's license plate?",
            options: [
                "Time Traveler",
                "Flux Capacitor",
                "1.21 Gigawatts",
                "Outatime"
            ],
            answer: 3
        },
        {
            question:
                "Question 6. In which city is the main location of the film 'Back to the Future'?",
            options: ["Los Angeles", "Hill Valley", "New York", "Chicago"],
            answer: 1
        },
        {
            question:
                "Question 7. What car did Doc Brown use in the original timeline before creating the DeLorean Time Machine?",
            options: [
                "Ford Mustang",
                "Chevrolet Impala",
                "DeLorean DMC-12",
                "Volkswagen Beetle"
            ],
            answer: 1
        },
        {
            question:
                "Question 8. What device did Doc Brown use to power the time machine in the second part of the film?",
            options: [
                "Nuclear reactor",
                "Computer battery",
                "Mr. Fusion",
                "Atomic generator"
            ],
            answer: 2
        },
        {
            question:
                "Question 9. In which year did Jennifer Parker travel to the future in the second part of the film?",
            options: ["2015", "2025", "2035", "2045"],
            answer: 0
        },

        {
            question:
                "Question 10. What name did Marty McFly use when he traveled to the past and introduced himself as 'Doctor Brown'?",
            options: [
                "Doctor McFly",
                "Doctor Smith",
                "Doctor Jones",
                "Doctor Fraser"
            ],
            answer: 1
        }
    ];

    var currentQuestion = 0;
    var currentQuestionNumber = 1;
    var score = 0;
    var answered = false;

        function displayQuestion() {
        var questionData = questions[currentQuestion];
        $("#question").text(questionData.question);

        var optionsList = $("#options");
        optionsList.empty();

        for (var i = 0; i < questionData.options.length; i++) {
            var option = questionData.options[i];
            var listItem = $("<li>").addClass("option").text(option);
            optionsList.append(listItem);

            $("#question_number").text(
                "Question number " + currentQuestionNumber + " of " + questions.length
            );
        }

        answered = false;
    }

    function checkAnswer(selectedIndex) {
        var correctAnswer = questions[currentQuestion].answer;

        var options = $("li.option");

        $("li.option").removeClass("option").addClass("disabled").off("click");

        if (!answered) {
            answered = true;

            if (selectedIndex === correctAnswer) {
                score++;
                $("#feedback").text("That's right!").css("color", "green");
                options.eq(selectedIndex).addClass("disabled_correct");
            } else {
                $("#feedback")
                    .text(
                        "Incorrect. The correct answer is " +
                        questions[currentQuestion].options[correctAnswer]
                    )
                    .css("color", "red");
                options.eq(selectedIndex).addClass("disabled_incorrect");
            }

            $("#next-btn").removeClass("hidden");
            $("#results-btn").addClass("hidden");
        }
    }

    $("ul#options").on("click", "li.option", function () {
        var selectedIndex = $(this).index();
        checkAnswer(selectedIndex);
    });

    $("#next-btn").click(function () {
        currentQuestion++;
        currentQuestionNumber++;
        if (currentQuestion < questions.length) {
            $("#feedback").text("");
            displayQuestion();
            $(this).addClass("hidden");
            $("#results-btn").addClass("hidden");
        } else {
            $("#next-btn").addClass("hidden");
            $("#results-btn").removeClass("hidden").text("Show results");
        }
    });

    $("#results-btn").click(function () {
        $("#feedback")
            .text("Your result: " + score + " of " + questions.length)
            .css("color", "blue");
        $(this).addClass("hidden");
        $("#reset-btn").removeClass("hidden");
    });

    $("#reset-btn").click(function () {
        currentQuestion = 0;
        score = 0;
        currentQuestionNumber = 1;
        displayQuestion();
        $("#feedback").text("");
        $("#question_number").text(
            "Question number " + currentQuestionNumber + " of " + questions.length
        );
        $("#next-btn").removeClass("hidden");
        $(this).addClass("hidden");
    });

    displayQuestion();
});

/* MUSIC */
$(document).ready(function () {
    const audio = $("#audio");
    const audioToggle = $("#audio-toggle");
    const audioToggleMuted = $("#audio-toggle-muted");

    audioToggle.on("click", function () {
        audio[0].play();
        audioToggle.hide();
        audioToggleMuted.show();
    });

    audioToggleMuted.on("click", function () {
        audio[0].pause();
        audioToggle.show();
        audioToggleMuted.hide();
    });
});