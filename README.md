# tarot-learner

### Exercise 1: Warm Up Your Foot(er)

Now that we have a site skeleton set up, we are ready to start adding functionality! But first let's start with a warmup.

The site has a beautiful bootstrap footer that says "Created by Kayla and Naoreen". But our visitors don't know who Kayla and Naoreen are!

Your first challenge is to update the footer so that the text "Kayla" links to your Github page https://github.com/urkweenkayla, and
the text "Naoreen" links to mine https://github.com/knaoreen


### Exercise 2: Fun with Flexbox

Right now, the layout of the 4 answer boxes is that they are all beside each other, like this:

[ Card ] [ Answer 1 ] [ Answer 2 ] [ Answer 3 ] [ Answer 4 ]

I want the layout to be such that the 4 answers are on top of each other, but the entire answer section is still to the right of the card! Like this:

|--------|   
|        |   [ Answer 1 ]
|        |   [ Answer 2 ]
|  Card  |   [ Answer 3 ]
|        |   [ Answer 4 ]
|________|  

Your second challenge is to implement this UI using Flexbox!

**Hint**
Use these as guides:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://getbootstrap.com/docs/5.3/utilities/flex/


### Exercise 3: Nifty and Scripty

You see that there is already a tarot card on display. It's The Fool!

In our app, we'll need the ability to update the image that is displayed on that card. It won't always be the fool.

In `script.js`, I have already hooked up the "Answer 1" and "Answer 2" buttons to trigger calling a function that will update the card image. But the function I want doesn't exist!

Your third challenge is to write a function that will update the image displayed on the card!

When your function is working, clicking the "Answer 1" and "Answer 2" buttons should cause the card to display the Magician and High Priestess respectively.

**Hint**
Looking at the rest of the `script.js` file, can you see another example of how we are already using javascript to access and update elements on web page?

Looking at the HTML, can you identify which element we want to update in this case, and what property we want to update on it, to change the image?
