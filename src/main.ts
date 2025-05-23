import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import viteLogo from "/vite.svg";
import sunLogo from "/assets/desktop/icon-sun.svg";
import moonLogo from "/assets/desktop/icon-moon.svg";
// import arrowDown from "/assets/desktop/icon-arrow-down.svg";
// import arrowUp from "/assets/desktop/icon-arrow-up.svg";
// import { setupCounter } from "./counter.ts";
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
 <main class="${
   hour < 17
     ? "lg:bg-[url('/assets/desktop/bg-image-daytime.jpg')] md:bg-[url('/assets/tablet/bg-image-daytime.jpg')] bg-[url('/assets/mobile/bg-image-daytime.jpg')]"
     : "lg:bg-[url('/assets/desktop/bg-image-nighttime.jpg')] md:bg-[url('/assets/tablet/bg-image-nighttime.jpg')] bg-[url('/assets/mobile/bg-image-nighttime.jpg')]"
 } bg-cover h-dvh w-full">
<section class="@container flex justify-center pt-14 pb-24 h-full">
<div class="flex flex-col justify-between h-full px-4 md:px-16 lg:px-0 w-[23.4375rem] sm:w-[48rem] lg:w-[69.375rem] lg:max-w-[69.375rem]">
<article class="clock-quote md:h-[25rem]">
<p class="text-white custom-shadow clock-quote">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
<p class="text-white custom-shadow font-bold">victor</p>
</article>
<section class="flex flex-col lg:justify-between h-[17rem] md:h-[22.9375rem] lg:h-[25rem]">
<div class="text-white h-full">
<div class="flex gap-2 lg:gap-4 items-center"><img src="${
  hour < 17 ? sunLogo : moonLogo
}" alt="${
  hour < 17 ? "sun" : "moon"
} logo" class="clock-weather-logo"/> <p class="uppercase text-sm tracking-[4px] custom-shadow">${greeting}<span class="hidden md:inline-block">, it's currently</span></p></div>
<h1 class="font-bold text-[6.25rem] md:text-[6.9375rem] lg:text-[12.5rem] custom-shadow">${time} <span class="text-[1.75rem] font-thin">${abbr}</span></h1>
<p class="uppercase font-bold text-sm md:text-2xl custom-shadow">in ${city}, ${country_code}</p>
</div>
<div class="relative">
<button id="toggle" type="button" class="absolute cursor-pointer bottom-0 lg:right-0 w-[9.125rem] h-[2.4375rem] md:h-14 bg-white rounded-4xl flex justify-between pl-[1.3125rem] items-center pr-[0.5rem] text-[#303030] font-bold tracking-[0.3125rem] uppercase"></button>
</div>
</section>
<section id="clock-info" class="clock-info w-full h-[16rem] md:h-[27.5rem] lg:h-[25rem] ${
  hour < 17
    ? "bg-white/70 backdrop-blur-sm text-[#303030]"
    : "bg-[#000000]/70 backdrop-blur-sm text-white"
} fixed left-0 right-0 bottom-0 transform translate-y-full transition-transform duration-700 ease-in-out">
<div class="px-4 lg:px-[10.3125rem] gap-4 grid md:grid-cols-2 md:justify-items-center content-center h-full">
<div class="flex flex-col gap-4 md:gap-[2.625rem]">
<div class="flex items-center justify-between md:flex-col md:items-start">
<h2 class="text-[0.625rem] sm:text-xs uppercase tracking-[2px] md:tracking-[2.6px] lg:tracking-[3px]">current timezone</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${time_zone.name}</p>
</div>
<div class="flex items-center justify-between md:flex-col md:items-start">
<h2 class="text-[0.625rem] sm:text-xs uppercase tracking-[2.6px] lg:tracking-[3px]">day of the year</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${presentDay}</p>
</div>
</div>
<div class="flex flex-col gap-4 md:gap-[2.625rem] lg:border-l-[1px] ${
  hour < 17 ? "border-[#303030]" : "border-white"
} lg:pl-[5.875rem]">
<div class="flex items-center justify-between md:flex-col md:items-start">
<h2 class="text-[0.625rem] md:text-xs uppercase tracking-[1.6px] lg:tracking-[3px]">day of the week</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${dayOfTheWeek}</p>
</div>
<div class="flex items-center justify-between md:flex-col md:items-start">
<h2 class="text-[0.625rem] sm:text-xs uppercase tracking-[2.6px] lg:tracking-[3px]">week number</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${weekNumber}</p>
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
