import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import sunLogo from "/assets/desktop/icon-sun.svg";
import moonLogo from "/assets/desktop/icon-moon.svg";
import arrowDown from "/assets/desktop/icon-arrow-down.svg";
import arrowUp from "/assets/desktop/icon-arrow-up.svg";
import { setupCounter } from "./counter.ts";
import { presentDay, dayOfTheWeek, weekNumber } from "./formatDate.ts";
import {
  time,
  greeting,
  hour,
  city,
  country_code,
  abbr,
  time_zone,
} from "./geolocation-api.ts";
import { handleToggle } from "./toggle.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 <main class="bg-[url('/assets/desktop/bg-image-daytime.jpg')] bg-cover h-screen w-full">
<section class="container mx-auto px-[10.3125rem] pt-14 pb-24 h-full">
<div class="h-full flex flex-col justify-between">
<article class="clock-quote">
<p class="text-white clock-quote">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
<p class="text-white font-bold">victor</p>
</article>
<section class="flex justify-between">
<div class="text-white">
<div class="flex gap-4 items-center"><img src="${
  hour < 17 ? sunLogo : moonLogo
}" alt="${
  hour < 17 ? "sun" : "moon"
} logo" class="clock-weather-logo"/> <p class="uppercase tracking-[4px]">${greeting}, it's currently</p></div>
<h1 class="font-bold text-[12.5rem]">${time} <span class="text-[1.75rem] font-thin">${abbr}</span></h1>
<p class="uppercase font-bold text-2xl">in ${city}, ${country_code}</p>
</div>
<div class="relative">
<button id="toggle" type="button" class="absolute cursor-pointer bottom-0 right-0 w-[9.125rem] h-14 bg-white rounded-4xl flex justify-between pl-[1.3125rem] items-center pr-[0.5rem] text-[#303030] font-bold tracking-[0.3125rem] uppercase"></button>
</div>
</section>
<section id="clock-info" class="clock-info w-full h-[25rem] bg-[#c6c6c6] absolute left-0 right-0 bottom-0 transform translate-y-full transition-transform duration-700 ease-in-out">
<div class="container mx-auto px-[10.3125rem] grid grid-cols-2 pt-14 pb-24">
<div class="flex flex-col gap-[2.625rem]">
<div class="space-y-[9px]">
<h2 class="text-xs uppercase text-[#303030] tracking-[3px]">current timezone</h2>
<p class="font-bold text-[3.5rem] text-[#303030]">${time_zone.name}</p>
</div>
<div>
<h2 class="text-xs uppercase text-[#303030] tracking-[3px]">day of the year</h2>
<p class="font-bold text-[3.5rem] text-[#303030]">${presentDay}</p>
</div>
</div>
<div class="flex flex-col gap-[2.625rem] border-l-[1px] border-[#303030] pl-[5.875rem]">
<div class="space-y-[9px]">
<h2 class="text-xs uppercase text-[#303030] tracking-[3px]">day of the week</h2>
<p class="font-bold text-[3.5rem] text-[#303030]">${dayOfTheWeek}</p>
</div>
<div>
<h2 class="text-xs uppercase text-[#303030] tracking-[3px]">week number</h2>
<p class="font-bold text-[3.5rem] text-[#303030]">${weekNumber}</p>
</div>
</div>
</div>

</section>
</div>
</section>

 </main>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
handleToggle(document.querySelector<HTMLButtonElement>("#toggle")!);

// <div>
//   // <h1 class="text-3xl text-red-400 font-bold underline">Hello world!</h1>
//   //{" "}
//   <a href="https://vite.dev" target="_blank">
//     // <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     //{" "}
//   </a>
//   //{" "}
//   <a href="https://www.typescriptlang.org/" target="_blank">
//     //{" "}
//     <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     //{" "}
//   </a>
//   // <h1>Vite + TypeScript</h1>
//   //{" "}
//   <div class="card">
//     // <button id="counter" type="button"></button>
//     //{" "}
//   </div>
//   //{" "}
//   <p class="read-the-docs">
//     // Click on the Vite and TypeScript logos to learn more //{" "}
//   </p>
// </div>;
