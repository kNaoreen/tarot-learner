### Set 2: I Get What I Want Like Click

Previously, when we clicked a button, it switched the card images. What we actually want to happen when the user clicks the button is something like this:

- Check if the user clicked the correct answer
- If they did click the correct answer, tell them they're correct and let them move on to the next question
- If they did not click the correct answer, tell them they're incorrect and let them guess again

This involves a lot of steps, but we can do it one by one.

Let's start with goal 1: seeing if the user clicked the correct button!

### Exercise 1. What Do I Mean?

Computer science can be surprisingly abstract, and even philosophical.

In order to create our app, it will be beneficial for us to have an abstract way to represent what a "tarot card" is. When you think of a real tarot card, what attributes would you say it has?

Tarot cards tend to have names (like "The Fool"), and they have images. They have sizes, and designs on the back. They have certain meanings they're associated with, and they can have different meanings when they show up reversed, in other words, they have an orientation. They have a smell, and a texture, and a shape. They have vibes (some cards have bad vibes).

Of all of these properties, only some will actually be useful for us to represent in our program. In particular:

- The card's name
- The card's image (or in our case, the image URL)
- The card's associations/meanings
  - For now let's stick to the "upright" associations/meanings

We can represent the general "form" of a tarot card using a class! A class is like a general template that represents a kind of object we work with
in our program. In this case, tarot cards. On the class, we can specify what properties we expect that kind of object to have.

An _instantiation_ of that class is a _specific instance_ or object created within that class. In JavaScript, you instantiate an object of a class using the `new` keyword.

On lines 17-23, I have created a list of tarot card instantiations.

**Your task**

Your first mission is to add an "uprightMeaning" property to the TarotCard class, and then update the existing tarot card instantiations to set each card's specific meaning. (In the HTML I am currently using the upright card meanings provided on Biddy Tarot, but we can always update this later).

**Hint**

Right now, if you click any of the buttons, two things will be printed to the console:

- The event (more on this in the next exercise)
- The list called ALL_CARDS
- The currently shown card (`currentCard`)

You can look into the ALL_CARDS list or at the current card in your console to verify that you were successfully able to add your new property!

### Exercise 2: Everyone Needs Validation

Now that we have a way to get what the correct meaning of each card is, we can check if the user guessed correctly!

In order to do this, we need to know the exact string of the button that the user clicked. For example, if they clicked button 2, we need to get the string "Beginnings, innocence, spontaneity, a free spirit".

As mentioned above, I have printed the `event` object on each button click. You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/Event),
but basically this is a little gift that the Web Gods have given us for free when an event (such as a button click) is fired in our web page. It has all sorts of properties on it, but the most useful one to use is `event.target`, which represents the element on which the event was fired.

Try clicking any of the buttons, then unpacking the `event` object that is in your console to find the `target` property, and see if you can find that answer string that we want!

**Your Task**

Your second mission is to update the `validateAnswer` function to check if the user's answer is correct. If it is correct, add a console log saying something like "CORRECT!". If they're wrong, add a console log saying something like "OH NO!".

**Hints**

You have probably already guessed that you'll need to use the value of the `uprightMeaning` property you created in Exercise 1. Can you find an example in the script of where I've already accessed a tarot card class property?
