var hardcore_alphabet = {"A":"4", "B":"8", "C":"(", "D":"|)", "E":"3", "F":"ph", "G":"6", "H":"|-|", "I":"!",
				"J":"_|", "K":"|<", "L":"1", "M":"|\\/|", "N":"|\\|", "O":"0", "P":"|D", "Q":"(,)", "R":"|2", 
				"S":"5", "T":"7", "U":"|_|", "V":"\\/", "W":"|/\\|", "X":"><", "Y":"`/", "Z":"2"};
var numbers_alphabet = {"A":"4", "B":"8", "C":"C", "D":"D", "E":"3", "F":"F", "G":"6", "H":"H", "I":"I",
				"J":"J", "K":"K", "L":"1", "M":"M", "N":"N", "O":"0", "P":"P", "Q":"Q", "R":"R", 
				"S":"5", "T":"7", "U":"U", "V":"V", "W":"W", "X":"X", "Y":"Y", "Z":"2"};
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function translateToLeet(){
	var inputMode = document.getElementById('inputmode').value;

	if(inputMode == 'toleet'){
		var string = document.getElementById('input').value.toUpperCase();
		var option = document.getElementById('mode').value;
		var output = '';
		for(var i = 0; i < string.length; i++){
			if(alphabet.indexOf(string[i]) <= -1){
				output += string[i];
			}else{
				if(option == 'numbers'){
					output += numbers_alphabet[string[i]];
				}else if(option == 'allchrs'){
					output += hardcore_alphabet[string[i]];
				}else{
					output = 'Y0U CR4CK3D 7HI5 F0RM! C0N6R47U147I0N5!';
				}
			}
		}
	}else if(inputMode == 'fromleet'){
		var string = document.getElementById('input').value;
		var option = document.getElementById('mode').value;
		var reversedNumbersAlphabet = invert(numbers_alphabet);
		var reversedHardcoreAlphabet = invert(hardcore_alphabet);
		var output = '';

		for(var i = 0; i < string.length; i++){
			if(option == 'numbers'){
				if(reversedNumbersAlphabet[string[i]] != undefined){
					output += reversedNumbersAlphabet[string[i]];
				}else{
					output += string[i];
				}
			}else if(option == 'allchrs'){
				if(string[i] == '('){
					if(string[i + 1] == ','){
						if(string[i + 2] == ')'){
							output += 'Q';
						}else{continue;}
					}else{output += 'C';}
				}else if(string[i] == '_'){
					if(string[i - 1] == '|'){
						if(string[i + 1] == '|'){
							output += '';
						}else{continue;}
					}else if(string[i + 1] == '|'){
						output += 'J';
					}else{continue;}
				}else if(string[i] == '|'){
					if(string[i - 1] == '-'){
						if(string[i - 2] == '|'){
							output += '';
						}else{continue;}
					}else if(string[i + 1] == '_'){
						if(string[i + 2] == '|'){
							output += 'U';
						}else{continue;}
					}else if(string[i + 1] == '/'){
						if(string[i + 2] == '\\'){
							if(string[i + 3] == '|'){
								output += 'W';
							}else{continue;}
						}else{continue;}
					}else if(string[i - 1] == '_'){
						if(string[i - 2] == '|'){
							output += '';
						}else{continue;}
					}else if(string[i + 1] == ')'){
						output += 'D';
					}else if(string[i + 1] == '2'){
						output += 'R';
					}else if(string[i + 1] == 'D'){
						output += 'P';
					}else if(string[i + 1] == '-'){
						if(string[i + 2] == '|'){
							output += 'H';
						}else{continue;}
					}else if(string[i + 1] == '<'){
						output += 'K';
					}else if(string[i + 1] == '\\'){
						if(string[i + 2] == '/'){
							if(string[i + 3] == '|'){
								output += 'M';
							}else{continue;}
						}else if(string[i + 2] == '|'){
							output += 'N';
						}else{continue;}
					}else{continue;}
				}else if(string[i] == ')'){
					if(string[i - 1] == '|'){
						output += '';
					}else if(string[i - 1] == ','){
						if(string[i - 2] == '('){
							output += '';
						}else{continue;}
					}else{continue;}
				}else if(string[i] == ','){
					if(string[i - 1] == '('){
						if(string[i + 1] == ')'){
							output += '';
						}else{continue;}
					}else{continue;}
				}else if(string[i] == '`'){
					if(string[i + 1] == '/'){
						output += 'Y';
					}else{continue;}
				}else if(string[i] == 'D'){
					if(string[i - 1] == '|'){
						output += '';
					}else{continue;}
				}else if(string[i] == '>'){
					if(string[i + 1] == '<'){
						output += 'X';
					}else{continue;}
				}else if(string[i] == '<'){
					if(string[i - 1] == '>'){
						output += '';
					}else{continue;}
				}else if(string[i] == '2'){
					if(string[i - 1] == '|'){
						output += '';
					}else{output += 'Z';}
				}else if(string[i] == '/'){
					if(string[i - 1] == '\\'){
						if(string[i - 2] == '|'){
							if(string[i + 1] == '|'){
								output += '';
							}else{continue;}
						}else{output += '';}
					}else{continue;}
				}else if(string[i] == '<'){
					if(string[i - 1] == '|'){
						output += '';
					}else{continue;}
				}else if(string[i] == '\\'){
					if(string[i - 1] == '|'){
						if(string[i + 1] == '/'){
							if(string[i + 2] == '|'){
								output += '';
							}else{continue;}
						}else{continue;}
					}else if(string[i + 1] == '/'){
						output += 'V';
					}else{continue;}
				}else if(string[i] == '-'){
					if(string[i - 1] == '|'){
						if(string[i + 1] == '|'){
							output += '';
						}else{continue;}
					}else{continue;}
				}else if(string[i] == 'p'){
					if(string[i + 1] == 'h'){
						output += 'F';
					}else{continue;}
				}else if(string[i] == 'h'){
					if(string[i - 1] == 'p'){
						output += '';
					}else{continue;}
				}else if(reversedHardcoreAlphabet[string[i]] != undefined){
					output += reversedHardcoreAlphabet[string[i]];
				}else{
					output += string[i];
				}
			}else{
				output = 'Y0U CR4CK3D 7HI5 F0RM! C0N6R47U147I0N5!';
			}
		}
	}

	document.getElementById('output').value = output;
	output = '';
	// Simulate click on output textarea
	fireEvent(document.getElementById('output'), 'click');
}

function fireEvent(el, etype){
	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

function setHeight(){
	this.style.height = '1px'; 
    this.style.height = this.scrollHeight + 'px'; 
}

var invert = function (obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};