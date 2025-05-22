import arrowDown from "/assets/desktop/icon-arrow-down.svg";
import arrowUp from "/assets/desktop/icon-arrow-up.svg";
export let toggle: boolean = false;

export function handleToggle(element: HTMLButtonElement) {
  const quote = document.querySelector(".clock-quote")!;
  const span = document.createElement("span")!;
  const clockInfo = document.getElementById("clock-info")!;
  span.classList =
    "bg-[#303030] h-10 w-10 rounded-full flex items-center justify-center";
  const setToggle = () => {
    toggle = !toggle;
    span.innerHTML = toggle
      ? `<img src="${arrowUp}" alt="toggle-button-icon" /> `
      : `<img src="${arrowDown}" alt="toggle-button-icon" /> `;
    element.innerHTML = toggle ? "more" : "less";
    element.appendChild(span);
  };

  element.addEventListener("click", () => {
    quote.classList.toggle("hidden");
    if (toggle) {
      clockInfo.classList.remove("translate-y-full");
      clockInfo.classList.add("translate-y-0");
    } else {
      clockInfo.classList.add("translate-y-full");
      clockInfo.classList.remove("translate-y-0");
    }

    setToggle();
  });
  setToggle();
}
