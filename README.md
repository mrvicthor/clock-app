# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/mrvicthor/clock-app]
- Live Site URL: [https://clock-app-livid-nine.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

This project helped reinforced my knowledge of callbacks and async programming. Also, building with TypeScript without using any framework highlighted the importance of good foundational programming knowledge.

Below is an example of a callback function i used and how i used it.

```js
const fetchQuote = async () => {
  const response = await fetch("https://thequoteshub.com/api/");
  if (!response.ok) {
    throw new Error("Failed to fetch Quotes");
  }
  return await response.json();
};

export function generateQuote(
  element: HTMLImageElement,
  callback: (quote: string, author: string) => void
) {
  const loadQuote = async () => {
    try {
      const { text, author } = await fetchQuote();
      callback(shortenQuote(text), author);
    } catch (error) {
      console.log(error);
    }
  };
  element.addEventListener("click", () => loadQuote());
  loadQuote();
}

function shortenQuote(value: string): string {
  const lengthToUse = 137;
  return value.length > lengthToUse
    ? value.slice(0, lengthToUse).trim() + "..."
    : value;
}

generateQuote(
  document.querySelector<HTMLImageElement>("#refreshQuotes")!,
  (quote, author) => {
    const clockQuote = document.querySelector(".clock-quote-text")!;
    const clockAuthor = document.querySelector(".clock-author")!;
    clockQuote.textContent = `“${quote}“`;
    clockAuthor.textContent = `${author}`;
  }
);
```

### Continued development

My goal is to practice study more about Promises and event loop

## Author

- Website - [https://t.co/GyuJhbPKuM]
- Frontend Mentor - [@mrvicthor](https://www.frontendmentor.io/profile/@mrvicthor)
- Twitter - [@eva_skillz](https://x.com/eva_skillz)
