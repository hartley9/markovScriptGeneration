var myCanvas, input, submit, clearStuff, ngrams, sentenceNumber, markov, out;
var x=160, y=240;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('container');


	textFont('times', 18);

	textInput = select("#textfield")

	submit = select("#submit");
	submit.mousePressed(markovRita);

	//clearStuff = select("#clear");
	//clearStuff.mousePressed(clearCanvas)

	/*
	subBut = createButton('submit');
  subBut.position(x, y);
  subBut.mousePressed(markovRita);

	clearBut = createButton('clear');
	clearBut.position(x+subBut.width, y);
	clearBut.mousePressed(clearCanvas);
	*/

}


function drawText() {
	//text(out, x, y, windowWidth/2, windowHeight/2);
	console.log(ngrams);
	var elt = document.getElementById('output');
	var myP = createP(out);
	myP.parent(elt);
}

function clearCanvas(){
	clear();
	setup();
}


function markovRita() {


	sentenceNumber = select("#sentNumber");
	sentenceNumber = parseInt(sentenceNumber.value());
	ngrams = select("#ngrams");
	ngrams = parseInt(ngrams.value());

	//data = document.getElementById("form1");
	//input = data.elements["input"].value;

	markov = new RiMarkov(ngrams);

	markov.loadText(textInput.value());

	out = markov.generateSentences(sentenceNumber);
	console.log(out);

	drawText();

}
