//Defining of the interval;
var animmation;

//Defining i;
var i = 0;

//Changing the content of the textboxes.
function change() {
	stopButtonEvent();
	var getSelected = document.getElementById('animation');
	var getTextBox = document.getElementById('text-area');
	if(getSelected.value === 'Blank'){
		getTextBox.value = "BLANK";
	} else {
		getTextBox.value = ANIMATIONS[getSelected.value];
	}
}

//The function for starting the animation.
function startButton(){
	var getSelected = document.getElementById('animation');
	if(getSelected.value === 'Blank'){
// 
} else {
	startAnimation(getSelected.value);
}
}

//The function for starting the exercise animation.
function startAnimation(str){
	exerciseAnimation = ANIMATIONS[str];
	exerciseAnimation = exerciseAnimation.split('=====\n');

	animmation = setInterval(assignTextBox, 350, exerciseAnimation);
	animationCheck();
}

//The function for adding events listeners and managing the stop/start operations;
function animationCheck(){
	var stopButton = document.getElementById('stop');
	var startButton = document.getElementById('start');
	var turbo = document.getElementById('turbo');
	if(animmation){
		var started = true;
		startButton.disabled = true;
		stopButton.disabled = false;
		stopButton.addEventListener('click', stopButtonEvent);

		turbo.addEventListener('click', function(){
			if(turbo.checked && startButton.disabled != false){
				clearInterval(animmation);
				animmation = setInterval(assignTextBox, 100, exerciseAnimation);
			} else if(startButton.disabled != false){
				clearInterval(animmation);
				animmation = setInterval(assignTextBox, 350, exerciseAnimation);
				started = false;
			}
		});
	}
}

//The function for Stoping the Animation;
function stopButtonEvent() {
	var startButton = document.getElementById('start');
	var stopButton = document.getElementById('stop');
	clearInterval(animmation);
	startButton.disabled = false;
	stopButton.disabled = true;
}

//The function for Assigning the text to the textbox;
function assignTextBox(arr) {
	var getTextBox = document.getElementById('text-area');
	getTextBox.value = '';
	if(exerciseAnimation[i] == null) i = 0;
	if(getTextBox.value === exerciseAnimation[i]){
		getTextBox.value = exerciseAnimation[i+1];
	} else {
		getTextBox.value = exerciseAnimation[i];
		i++;
	}
}

//The function for Changing the textarea font size;
function changeTextSize() {
	var getTextBox = document.getElementById('text-area');
	var getFontBox = document.getElementById('fontsize');
	if(getFontBox.value === 'Tiny'){
		getTextBox.style.fontSize = '50%';
	} else if(getFontBox.value === 'Small'){
		getTextBox.style.fontSize = '60%';
	} else if(getFontBox.value === 'Medium'){
		getTextBox.style.fontSize = '70%';
	} else if(getFontBox.value === 'Large'){
		getTextBox.style.fontSize = '80%';
	} else if(getFontBox.value === 'Extra Large'){
		getTextBox.style.fontSize = '90%';
	} else if(getFontBox.value === 'XXL'){
		getTextBox.style.fontSize = '120%';
	}
}