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
