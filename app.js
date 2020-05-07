

function calculate() {
    var total = document.getElementById('bill-amount').value;
    var tipPercent = document.getElementById('tip-percent').value / 100;
    var numPeople = document.getElementById('num-people').value;
    var answer = total * tipPercent;

    document.getElementById('total-answer').innerHTML = answer;
}
