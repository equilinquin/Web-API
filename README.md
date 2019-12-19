# Web-API: Code Quiz
This quiz was made for a homework assignment.  The code starts off with the first page where it intorduces the quiz and gives a brief description of what will happen if you get an answer wrong.  It is supposed to deduct 5 sec when an answer is wrong.

Once the start button is pushed, the quiz begins with its first question.  Answer correctly and time will not deduct, but answer wrongly, 5 seconds is taking away.

After the quiz is over, a form will show up and tell you what your score is: which is the time remaining.  Even if you answer all questions correctly, if you allow the time to run out, your score will be zero.

You will be given the chance to record your score and will be displayed on the page.

Bootstrap was lightly used in this code.  You will notice the links and and scripts on the HTML file.

Some issue with the code:
    -Not all questions are displayed till the very end.  If you notice, only 9 questions pop up when in the questions.js there are 10.  Still haven't been able to fix it.
    -The localStorage is not remembering all highscores, and only lists what was last inputed (at the very end of the quiz only).
    -There is no button to return to the quiz home page.
    -The View High Score button does not work (Only can view high score at end of game).

This assignment helped me understand the basis and structure of native javascript and showed an introduction of jQuery.

Link to deployable site: https://equilinquin.github.io/Web-API/