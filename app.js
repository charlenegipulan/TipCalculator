function calculate() {
    var total = document.getElementById('bill-amount').value;
    var tipPercent = document.getElementById('tip-percent').value / 100;
    var numPeople = document.getElementById('num-people').value;
    var answer = total * tipPercent;
    var perPerson = answer / numPeople;
    var checkTotal = +total + +answer;

    document.getElementById('total-answer').innerHTML = answer;
    document.getElementById('per-person').innerHTML = perPerson;
    document.getElementById('check-total').innerHTML = checkTotal;
}
