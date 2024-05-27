
var qouteList = [
    "Do not take life too seriously. You will not get out alive. --Elbert Hubbard",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi",
    "“It is our choices, Harry, that show what we truly are, far more than our abilities.” ― J.K. Rowling, Harry Potter and the Chamber of Secrets",
    "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” ― Albert Einstein",
    "“We are all in the gutter, but some of us are looking at the stars.” ― Oscar Wilde",
    "“Life is what happens to us while we are making other plans.” ― Allen Saunders",
    "“I have not failed. I've just found 10,000 ways that won't work.” ― Thomas A. Edison",
    "“That which does not kill us makes us stronger.” ― Friedrich Nietzsche",
    "“It is never too late to be what you might have been.” ― George Eliot",
    "“We don't see things as they are, we see them as we are.” ― Anaïs Nin",
    "“We read to know we're not alone.” ― William Nicholson"
];


var generateQoute = document.getElementById ('createQoute');
var QouteEl = document.getElementById ('Qoute');

generateQoute.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {

    var randomIndex = Math.floor(Math.random() * qouteList.length);

    QouteEl.textContent = qouteList[randomIndex];

}

