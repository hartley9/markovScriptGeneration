var myCanvas;
var submit, clearStuff;
var ngrams, sentenceNumber, markov, out;
var imgPingu, imgJosh
var x=160, y=240;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('container');


	imgPingu = loadImage("pingu.jpg");
	imgJosh = loadImage("josh.jpg");

	//img.parent('container');


	textFont('times', 18);

	textInput = select("#textfield")

	submit = select("#submit");
	submit.mousePressed(markovRita);

}

function draw()
{

}

function mouseWheel(event)
{
	var randX = random(0, windowWidth);
	var randY = random(0, windowHeight);

	var ping = image(imgPingu, randX, randY, imgPingu.width/2, imgPingu.height/2);
	ping.parent('#header');

	var josh = image (imgJosh, randX, randY, imgJosh.width/2, imgJosh.height/2);
	josh.parent('#input');

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
