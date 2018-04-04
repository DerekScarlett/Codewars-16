//take a string
//replace every letter with its position in the alphabet
//if anything isn't a letter, ignore it and don't return it
function alphabetPosition(text) {
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//split apart the string
	return text.toLowerCase().split("").filter(function(x){
		if (x.toLowerCase().match(/[a-z]/)) {
			return x;
		}
	}).map(function(y){
		//check if y is in the alphabet list
		if (alphabet.includes(y)) {
			return (alphabet.indexOf(y)+1);
		}
		//if it is, return the index for that alphabet + 1
	}).join(" ");
	//use filter to only include letters and ignore numbers
	//return result
	//then take the returned list and convert it back to string
}
