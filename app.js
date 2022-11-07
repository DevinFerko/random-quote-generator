const projectName = 'random-quote-machine';

// Various 'pastel' colors to be randomized
var colors = [
  '#4dc3ff',
  '#ffff4d',
  '#66ff66',
  '#cc66ff',
  '#ff9966',
  '#ff6699',
  '#6666ff',
  '#00cc99'
];
// Array with quotes and authors
var Quotes = [
  ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],
  ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  ["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost"],
  ["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale"],
  ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
  ["An unexamined life is not worth living.", "Socrates"],
  ["Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "Johann Wolfgang von Goethe"],
  ["Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "Jesus"],
  ["If you can dream it, you can achieve it.", "Zig Ziglar"]
];

// Declare variables
var currentQuote = "";
var currentAuthor = "";
var currentColor= '';
var randomQuote = "";
var randomColor = "";

function getQuote (){
  // Random number functions
  randomQuote = Math.floor(Math.random() * Quotes.length);
  randomColor = Math.floor(Math.random() * colors.length);
  
  // Assigns Values for quotes, authors, and color
  currentQuote = Quotes[randomQuote][0];
  currentAuthor = Quotes[randomQuote][1];
  currentColor = colors[randomColor];
  
  $(document).ready(function () {
  
   // Changes background color when called 
   document.body.style.background = currentColor;
    
    // Changes quote when called
    $('#text').animate({opacity: 0}, 500, function(){
      $(this).animate({
        opacity: 1
      }, 500);
      $(this).text(currentQuote);
    });
    $('#author').animate({opacity:0}, 500, function(){
      $(this).animate({opacity: 1}, 500);
      $(this).text('- ' + currentAuthor);
    });
  console.log(currentColor);       
  })
};

getQuote();

// Calls getQuote function 'on click'
$(document).ready(function() {
  $('#new-quote').on('click', getQuote);
});

// Needs to be completed on a further date
$(document).ready(function() {
  $('#twitter').on('click', 'https://twitter.com/intent/tweet/?text=')
});
