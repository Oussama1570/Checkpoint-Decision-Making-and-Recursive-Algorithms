// I Decision Making (if-else and switch): ( choose at least 2 tasks from below) //

//  1 - Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400. //

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true; // C'est une année bissextile
  } else {
      return false; // Ce n'est pas une année bissextile
  }
}

// Exemple d'utilisation
let year = 2020;
if (isLeapYear(year)) {
  console.log(year + " est une année bissextile.");
} else {
  console.log(year + " n'est pas une année bissextile.");
}


 //  2 - Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:



// Demander à l'utilisateur d'entrer son âge
let age = prompt("Entrez votre âge: ");

// Déterminer le prix du billet en fonction de l'âge
let prix;

if (age <= 12) {
    prix = 10;
} else if (age >= 13 && age <= 17) {
    prix = 15;
} else {
    prix = 20;
}

// Afficher le prix du billet
console.log("Le prix du billet est de $" + prix);




// 3 -  Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear. //


let temperature = prompt("Quelle est la température actuelle en degrés Celsius?");
let isRaining = prompt("Est-ce qu'il pleut actuellement? (Oui/Non)").toLowerCase();

let advice = "";

switch(true) {
  case temperature < 10:
    advice = "Il fait froid! Portez un manteau épais, une écharpe et des gants.";
    break;
  case temperature >= 10 && temperature < 20:
    advice = "Il fait frais. Une veste légère serait idéale.";
    break;
  case temperature >= 20:
    advice = "Il fait chaud! Optez pour des vêtements légers.";
    break;
}

if(isRaining === "oui") {
  advice += " N'oubliez pas votre parapluie ou un imperméable!";
}

console.log(advice);


// II Recursion: ( choose at least 2 tasks from below) // 

// 1 - Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...) //

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
console.log(fibonacci(6)); // Output: 8




// 2 - Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization. // 

function isPalindrome(str) {
    // Fonction pour nettoyer la chaîne en enlevant les espaces, la ponctuation et en mettant tout en minuscules
    function cleanString(str) {
      return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
  
    // Fonction récursive pour vérifier si la chaîne est un palindrome
    function checkPalindrome(str) {
      if (str.length <= 1) {
        return true;
      } else if (str[0] !== str[str.length - 1]) {
        return false;
      } else {
        return checkPalindrome(str.slice(1, -1));
      }
    }
  
    // Appel de la fonction récursive avec la chaîne nettoyée
    return checkPalindrome(cleanString(str));
  }
  
  // Exemple d'utilisation de la fonction
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Renvoie true





  // 3 - Power Function: Write a recursive function to calculate the result of raising a number to a given power // 

  function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  console.log(power(2, 3)); // Résultat : 8