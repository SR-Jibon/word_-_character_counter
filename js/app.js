
let textInput = document.getElementById('text_input'); // Target the text-area input.

textInput.addEventListener('input', function(){
	var text = this.value;  // Value will come from whatever is typing on the text-area input.

	// console.log(text) | This code is for testing purpose.

	let characters = text.length;
	document.getElementById('js-character').innerHTML = characters; // This will count and show the character.

	text = text.trim(); // This will remove the extra spaces from before and end parts.

	let words = text.split(' '); // This will create a word by spliting spaces.

	let pureList = words.filter(function(elm){
		return elm != ' '; // This function will prevent to count extra spaces as a word from middle of the line.
	});

	// console.log(words); | This code is for testing purpose.
	// console.log(pureList); | This code is for testing purpose.

	document.getElementById('js-word').innerHTML = pureList.length;

})
