var countDownDate = new Date().getTime() + 30000;
var plainWord = '';
var score = 0;

function shuffleString(str) {
	var arrStr = str.split(''),
		n = arrStr.length;

	for (var i = n - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		if (arrStr[i] != ' ' || arrStr[j] != ' ') {
			var temp = arrStr[i];
			arrStr[i] = arrStr[j];
			arrStr[j] = temp;
		}
	}

	return arrStr.join('');
}

function getQuestion() {
	var index = Math.floor((Math.random() * (vocabulary.length - 1) + 0));
	plainWord = vocabulary[index].word;
	var cryptWord = shuffleString(plainWord);

	document.getElementById("question").innerHTML = cryptWord;
}

var x = setInterval(function(){ timer(countDownDate) }, 1000);

function timer(nextDate) {
    var now = new Date().getTime();
    var distance = nextDate - now;
    
    document.getElementById("time").innerHTML = Math.round((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) {
        clearInterval(x);
        alert('Waktu Habis, Score anda ' + score);
        location.reload();
    }
}

function submit() {
	
	if (document.getElementById('answer').value == plainWord) {
		// console.log(document.getElementById('answer').value);
		score += plainWord.length;
		document.getElementById('answer').value = '';
		clearInterval(x);
		countDownDate = new Date().getTime() + 30000;
		x = setInterval(function(){ timer(countDownDate) }, 1000);
		getQuestion();
	} else {
		alert('Jawaban Salah');
	}
	return false;
}

document.getElementById("answer")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

getQuestion();
timer(countDownDate);