# tarot-learner

### Exercise 1: Warm Up Your Foot(er)

Now that we have a site skeleton set up, we are ready to start adding functionality! But first let's start with a warmup.

The site has a beautiful bootstrap footer that says "Created by Kayla and Naoreen". But our visitors don't know who Kayla and Naoreen are!

Your first challenge is to update the footer so that the text "Kayla" links to your Github page https://github.com/urkweenkayla, and
the text "Naoreen" links to mine https://github.com/knaoreen

**Feedback**
Great job! You added two anchor links to the page. This might sound like a small feat, but links are actually one of the
greatest innovations of the Internet.

Currently, the anchor links will open our Github pages within the same tab. I have added `target="_blank` to the anchor links so
that they will open in new tabs when clicked.

### Exercise 2: Fun with Flexbox

Right now, the layout of the 4 answer boxes is that they are all beside each other, like this:

[ Card ] [ Answer 1 ] [ Answer 2 ] [ Answer 3 ] [ Answer 4 ]

I want the layout to be such that the 4 answers are on top of each other, but the entire answer section is still to the right of the card! Like this:

![Screen Shot 2023-09-07 at 11 15 32 PM](https://github.com/kNaoreen/tarot-learner/assets/41240830/41c5e417-e898-4bbf-ac7e-a540f6589286)


Your second challenge is to implement this UI using Flexbox!

**Hint**

Use these as guides:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://getbootstrap.com/docs/5.3/utilities/flex/

**Feedback**

Great job on using flexbox to get those buttons in a column!

One thing I noticed is that you have each button wrapped in a `div` with `p-2` to add space in between each button.

```
 <div class="d-flex flex-column mb-3">
    <div class="p-2"><button id="button1">Answer 1</button></div>
    <div class="p-2"><button id="button2">Answer 2</button></div>
    <div class="p-2"><button id="button3">Answer 3</button></div>
    <div class="p-2"><button id="button4">Answer 4</button></div>
</div>

```

There is actually a way to add space in between elements using flexbox! It's with the [gap](https://css-tricks.com/almanac/properties/g/gap/) property.

This property is set on the parent flex container, and lets you set a consistent amount of space between all of the flex children.

I have gone ahead and updated this. Using `gap` allows us to repeat ourselves less - instead of specifying a padding on 4 different elements, we define the spacing on a single parent element.

```
 <div class="d-flex flex-column gap-5">
    <button id="button1">Answer 1</button>
    <button id="button2">Answer 2</button>
    <button id="button3">Answer 3</button>
    <button id="button4">Answer 4</button>
</div>

```

That way, if we ever want to change the spacing between each button to be larger or smaller, we only have to change the class on one element, instead of 4. That's at the heart of one of us programmers' favourite principles, DRY - Don't Repeat Yourself.

https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

One other thing to note, is the difference between margin and padding. I imagine that you wrapped each button in a `div` with `p-2` because if you set `p-2` on the actual button, the button would get larger. If you want to set space between the buttons without using flex `gap`, setting the _margin_ (using bootstrap classes such as `m-2` directly on the button) would have worked and prevented needing that outer div.

```
<div class="d-flex flex-column mb-3">
    <button class="m-2" id="button1">Answer 1</button>
    <button class="m-2" id="button2">Answer 2</button>
    <button class="m-2" id="button3">Answer 3</button>
    <button class="m-2" id="button4">Answer 4</button>
</div>
```

This is because padding sets the amount of space _within_ an element, whereas margins set the amount of space _around_ the element.

### Exercise 3: Nifty and Scripty

You see that there is already a tarot card on display. It's The Fool!

In our app, we'll need the ability to update the image that is displayed on that card. It won't always be the fool.

In `script.js`, I have already hooked up the "Answer 1" and "Answer 2" buttons to trigger calling a function that will update the card image. But the function I want doesn't exist!

Your third challenge is to write a function that will update the image displayed on the card!

When your function is working, clicking the "Answer 1" and "Answer 2" buttons should cause the card to display the Magician and High Priestess respectively.

**Hint**

Looking at the rest of the `script.js` file, can you see another example of how we are already using javascript to access and update elements on web page?

Looking at the HTML, can you identify which element we want to update in this case, and what property we want to update on it, to change the image?

**Feedback**

Your function is looking great! I made some very minor changes:

```
function updateCardImage (link) {
  let startcard = document.getElementById("startcard") 
  startcard.src = link 
}
```

- I updated the `let` to be a `const`, since we will never update the value of `startcard` within the scope of that function
- I changed some variable names