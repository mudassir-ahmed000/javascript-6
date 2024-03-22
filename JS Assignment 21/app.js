//ASSIGNMENT 21 JS

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " " + lastName;
// document.write(fullName);


// var favPhone = prompt("Enter your favourite phone");
// var strlength = favPhone.length;
// document.write("Your favourite phone is : " + favPhone + "<br>" + "The length is : " + strlength);



// var string = "Pakistani";
// var index = string.indexOf("n");
// document.write("String : " + string + "<br>" + " The index of `n` is : " + index);



// var word = "Hello World";
// var lastIndex = word.lastIndexOf('l');
// document.write("String : " + word + "<br>" + " The lastindex of `l` is : " + lastIndex)



// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("The value at third index is : " + character);




// var fname = "Mudassir";
// var lname = "Ahmed";
// var fulName = fname + " " + lname;
// document.write(fulName);




// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br>");
// document.write("After replacement: " + replacedWord);



//  // Define the original message
//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  // Replace all occurrences of "and" with "&"
//  var replacedMessage = message.split("and").join("&");
//  // Display the result in the browser
//  document.write("Original message: " + message + "<br>");
//  document.write("After replacement: " + replacedMessage);




// // Define the string
// var str = "472";
// // Convert the string to a number
// var num = parseInt(str);
// // Display the value and type in the browser
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);




// var userInput = prompt("Enter some text:");
//   // Convert the input to uppercase
//   var uppercaseInput = userInput.toUpperCase();
//   // Display the converted input
//   alert("Your input in uppercase: " + uppercaseInput);




// var inputText = prompt("Enter message")
//     var excludedWords = ["a", "an", "the", "in", "on", "at", "for", "to", "with", "by", "and", "but", "is", "are", "was", "am" , "were", "has", "have", "had", "do", "does", "did", "can", "could", "shall", "should", "will", "would", "may", "might", "must"];

//     var words = inputText.toLowerCase().split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (!excludedWords.includes(words[i])) {
//             words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//         }
//     }
//     var outputText = words.join(" ");
//     document.write(outputText);




//  // Define the variable num
//  var num = 35.36;
//  // Convert num to a string
//  var strNum = num.toString();
//  // Remove the dot from the string
//  var result = strNum.replace(".", "");
//  // Display the result in the browser
//  document.write("Original number: " + num + "<br>");
//  document.write("Number without dot: " + result);





//  // Take user input for username
//  var username = prompt("Enter your username:");

//  // Check if username contains any special symbols
//  if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
//    // Prompt the user to enter a valid username
//    alert("Please enter a valid username without special symbols like @, ., ,, or !");
//  } else {
//    // Display the username if it's valid
//    alert("Welcome, " + username + "!");
//  }
    



// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:").toLowerCase();

// var found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("The item is found in the list.");
// } else {
//     alert("The item is not found in the list.");
// }


// var university = "University of Karachi";
// var universityArray = university.split("");

// // document.write("<h2>Array Elements:</h2>");
// // document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write( universityArray[i] + "<br>");
// }
// // document.write("</ul>");




// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("The last character of your input is: " + lastCharacter);



// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToFind = "the";
// var count = 0;

// // Convert both the sentence and the word to lowercase for case-insensitive comparison
// var lowerCaseSentence = sentence.toLowerCase();
// var lowerCaseWord = wordToFind.toLowerCase();

// // Split the sentence into words and count occurrences of the word
// var words = lowerCaseSentence.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === lowerCaseWord) {
//         count++;
//     }
// }

// document.write("Number of occurrences of '" + wordToFind + "': " + count);






// pdf





// var allLower =userInput.toLowerCase;
// var allLower = userInput.toLowerCase();



// var x = "MUDASSIR AHMED"
// x = x.toLowerCase();
// document.write(x)



// var y = "mudassir ahmed"
// y = y.toUpperCase();
// document.write(y)



// var String = "MUDASSIR"; // Assuming this is the variable containing the original string
// var lowerCaseString = String.toLowerCase();
// document.write(lowerCaseString)



// var array = ["MUDASSIR"];
// var index = 0;
// var lowerCaseString = array[index].toLowerCase();
// document.write(lowerCaseString)



// var String = "mudassir"; // Assuming this is the variable containing your string
// var upperCaseString = String.toUpperCase();
// alert("Uppercase version of the string: " + upperCaseString);



// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()
// document.write(capitalizedCityName); // Output: Karachi



// var sameWords = "captain";
// var slicedPortion = sameWords.slice(1, 3);
// document.write(slicedPortion); // Output: "ap"



// var String = "captain";
// var numberOfCharacters = myString.length;
// document.write(numberOfCharacters); // Output: 7



// var animal = "elephant";
// var seg = animal.slice(2, 6);
// document.write(seg); 



// var myString = "mudassir ahmed"; 
// var numberOfCharacters = myString.length;
// var slicedPortion = myString.slice(1, -3);
// document.write("Number of characters:", numberOfCharacters + "<br>");
// document.write("Sliced portion:", slicedPortion);



// var text ="To be or not to be.";
// var index = text.indexOf("be");
// document.write(index);



// var text ="To be or not to be.";
// var index = text.lastIndexOf("be");
// document.write(index);



// var text = "To go or not to go.";
// var lastInstanceIndex = text.lastIndexOf("go"); // Get the index of the last instance of "go"
// var firstCharIndex = text.indexOf("go", lastInstanceIndex); // Get the index of the first character of the last instance of "go"
// var index = firstCharIndex;
// document.write("Index of the first character of the last instance of 'go':", index);



// var string = "abcde"
// var secondCharacter = string.charAt(2);
// document.write(secondCharacter)



// var text = "The quick brown fox jumps over the lazy dog."; // Assuming this is the variable representing your string
// var char = text.charAt(10); // Index 9 corresponds to the 10th character (indexing starts from 0)
// document.write("The 10th character in the string:" + char);



// var str = "mudaSSIR"; // Assuming this is the variable representing your string
// var x = str.charAt(str.length - 1); // Get the last character using the length of the string
// document.write("The last character in the string:", x);



// var input = "mudassirahmed"; // Assuming this is the variable representing your string
// var cha = input.charAt(4); // Index 4 corresponds to the 5th character (indexing starts from 0)
// document.write("The 5th character in the string:", cha);
