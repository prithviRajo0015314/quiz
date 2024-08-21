let incorrect1 = document.getElementById('ans1');
let correct = document.getElementById('ans12');
let incorrect2 = document.getElementById('ans13');
let incorrect3 = document.getElementById('ans14');

function cor()
{
correct.setAttribute("style","border:solid 3px; color:white;  background-color:green; border-color:green;");
incorrect1.setAttribute("style","border:solid 3px; color:white; background-color:red; border-color:red;");
incorrect2.setAttribute("style","border:solid 3px; color:white; background-color:red; border-color:red;");
incorrect3.setAttribute("style","border:solid 3px; color:white;  background-color:red; border-color:red;");

}

function inc()
{
    correct.setAttribute("style","border:solid 3px; color:white;  background-color:green; border-color:green;");
    incorrect1.setAttribute("style","border:solid 3px; color:white; background-color:red; border-color:red;");
    incorrect2.setAttribute("style","border:solid 3px; color:white; background-color:red; border-color:red;");
    incorrect3.setAttribute("style","border:solid 3px; color:white;  background-color:red; border-color:red;");

}