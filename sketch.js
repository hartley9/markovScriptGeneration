var input, inp, submit, clearStuff, markov, data, out, x=160, y=240;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	noCanvas();
	background(250, 255, 200);
	textFont('times', 18);

	textInput = select("#textfield")

	submit = select("#submit");
	submit.mousePressed(markovRita);

	clearStuff = select("#clear");
	clearStuff.mousePressed(clearCanvas);

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
	createP(out);
}

function clearCanvas(){
	clear();
	setup();
}


function markovRita() {

	//data = document.getElementById("form1");
	//input = data.elements["input"].value;

	markov = new RiMarkov(2);

	markov.loadText(textInput.value());

	out = markov.generateSentences(5);
	console.log(out);

	drawText();

}
