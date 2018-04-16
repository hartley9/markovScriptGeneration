//ovar myCanvas;
var submit, clearStuff;
var ngrams, sentenceNumber, markov, out;
var imgPingu, imgJosh
var x=160, y=240;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('container');


	//imgPingu = loadImage("pingu.jpg");
	imgJosh = loadImage("josh.jpg");

	//img.parent('container');


	textFont('times', 18);

	textInput = select("#textfield")

	submit = select("#submit");

	submit.mousePressed(markovRita);

}
//Do i need this????
function draw()
{

}

function inputCheck(textInput)
{
	console.log(textInput.value);
	if (textInput.value == null)
	{
		console.log("Please enter some text");
	}
	else
	{
		markovRita();
	}
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


	markov = new RiMarkov(ngrams);


	markov.loadText(textInput.value());
	console.log(textInput.value);



	out = markov.generateSentences(sentenceNumber);
	console.log(out);

	drawText();

}
