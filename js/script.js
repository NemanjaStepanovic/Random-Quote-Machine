$(document).ready(function() {
    var quotes = [
        "It always seems impossible until it's done", // 0
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams", // 1
        "Don't cry because it's over, smile because it happened", // 2
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best", // 3
        "Be yourself, everyone else is already taken", // 4
        "Two things are infinite: The universe and human stupidity, and I'm not sure about the universe", // 5
        "You only live once, but if you do it right, once is enough", // 6
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind", // 7
        "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth", // 8
        "Be the change that you wish to see in the world", // 9
        "In three words I can sum up everything I've learned about life: It goes on", // 10
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals", // 11
        "Friendship... is born at the moment when one man says to another: What! You too? I thought that no one but myself...", // 12
        "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend", // 13
        "No one can make you feel inferior without your consent", // 14
        "If you tell the truth, you don't have to remember anything", // 15
        "A friend is someone who knows all about you and still loves you", // 16
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel", // 17
        "Always forgive your enemies, nothing annoys them so much", // 18
        "Live as if you were to die tomorrow. Learn as if you were to live forever", // 19
        "To live is the rarest thing in the world. Most people exist, that is all", // 20
        "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that", // 21
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment", // 22
        "We accept the love we think we deserve", // 23
        "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together", // 24
        "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover", // 25
        "Fear cuts deeper than swords", // 26
        "Do one thing every day that scares you", // 27
        "There is only one thing that makes a dream impossible to achieve: The fear of failure", // 28
        "Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it", // 29
        "We can easily forgive a child who is afraid of the dark. The real tragedy of life is when men are afraid of the light", // 30
        "Have no fear of perfection, you'll never reach it", // 31
        "Expose yourself to your deepest fear, after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free", // 32
        "Scared is what you're feeling. Brave is what you're doing", // 33
        "Don't give in to your fears. If you do, you won't be able to talk to your heart", // 34
        "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear", // 35
        "It is better to be hated for what you are than to be loved for what you are not", // 36
        "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring", // 37
        "We are all in the gutter, but some of us are looking at the stars", // 38
        "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present", // 39
        "Fairy tales are more than true, not because they tell us that dragons exist, but because they tell us that dragons can be beaten", // 40
        "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living", // 41
        "Happiness is not something ready made, it comes from your own actions", // 42
        "If you think you are too small to make a difference, try sleeping with a mosquito", // 43
        "There is a saying in Tibetan: 'Tragedy should be utilized as a source of strength.' No matter what sort of difficulties, how painful experience is, if we lose our hope, that's our real disaster", // 44
        "Choose to be optimistic, it feels better", // 45
        "Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now", // 46
        "If you can't get a miracle, become one", // 47
        "If I fail, I try again, and again, and again. If you fail, are you going to try again? The human spirit can handle much worse than we realize. It matters how you are going to finish. Are you going to finish strong?", // 48
        "I encourage you to accept that you may not be able to see a path right now, but that doesn't mean it's not there" // 49
    ];
    var authors = [
        "Nelson Mandela", // 0
        "Dr. Seuss", // 1
        "Dr. Seuss", // 2
        "Marilyn Monroe", // 3
        "Oscar Wilde", // 4
        "Albert Einstein", // 5
        "Mae West", // 6
        "Bernard M. Baruch", // 7
        "William W. Purkey", // 8
        "Mahatma Gandhi", // 9
        "Robert Frost", // 10
        "J.K. Rowling", // 11
        "C.S. Lewis", // 12
        "Albert Camus", // 13
        "Eleanor Roosevelt", // 14
        "Mark Twain", // 15
        "Elbert Hubbard", // 16
        "Maya Angelou", // 17
        "Oscar Wilde", // 18
        "Mahatma Gandhi", // 19
        "Oscar Wilde", // 20
        "Martin Luther King Jr.", // 21
        "Ralph Waldo Emerson", // 22
        "Stephen Chbosky", // 23
        "Marilyn Monroe", // 24
        "H. Jackson Brown Jr.", // 25
        "George R. R. Martin", // 26
        "Eleanor Roosevelt", // 27
        "Paulo Coelho", // 28
        "C. JoyBell C.", // 29
        "Plato", // 30
        "Salvador Dali", // 31
        "Jim Morrison", // 32
        "Emma Donoghue", // 33
        "Paulo Coelho", // 34
        "Nelson Mandela", // 35
        "André Gide", // 36
        "Marilyn Monroe", // 37
        "Oscar Wilde", // 38
        "Bil Keane", // 39
        "Neil Gaiman", // 40
        "Dr. Seuss", // 41
        "Dalai Lama", // 42
        "Dalai Lama", // 43
        "Dalai Lama", // 44
        "Dalai Lama", // 45
        "Roy T. Bennett", // 46
        "Nick Vujičić", // 47
        "Nick Vujičić", // 48
        "Nick Vujičić" // 49
    ];
    var elementPos; // Variable for storing position of the element in the arrays

    $("#quoteButton").on("click", function() {
        $("#quoteButton").html("Next quote");
        $("#logo").css("visibility", "visible");

        if(quotes.length === 0) {
            $("#quote").html("You read all quotes!");
            $("#author").html("");
            $("#logo").css("visibility", "hidden");
            $("#quoteButton").html("Read again");

            $("#quoteButton").on("click", function() {
                history.go(0); // Refresh the page
            });
        }
        else {
            elementPos = Math.floor(Math.random() * authors.length);

            $("#quote").html("<q>" + quotes[elementPos] + "</q>");
            $("#author").html(authors[elementPos]);

            quotes.splice(elementPos, 1); // Eliminate already shown quote
            authors.splice(elementPos, 1); // Eliminate already shown author
        }
    });

    $("#logo").on("click", function() {
        $("a").attr("href", "https://twitter.com/intent/tweet?text=" + $("#quote").text() + ". (" + $("#author").text() + ")");
    });
});
