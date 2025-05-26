import "./style.css";
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
import { generateQuote } from "./quote.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 <main class="${
   hour < 17
     ? "lg:bg-[url('/assets/desktop/bg-image-daytime.jpg')] md:bg-[url('/assets/tablet/bg-image-daytime.jpg')] bg-[url('/assets/mobile/bg-image-daytime.jpg')]"
     : "lg:bg-[url('/assets/desktop/bg-image-nighttime.jpg')] md:bg-[url('/assets/tablet/bg-image-nighttime.jpg')] bg-[url('/assets/mobile/bg-image-nighttime.jpg')]"
 } bg-cover h-dvh w-full">
<section class=" flex justify-center pt-14 pb-24 h-full">
<div class="flex flex-col justify-between h-full px-4 md:px-16 lg:px-[10.3125rem] w-full">
<article class="clock-quote space-y-[13px]">
<div class="flex gap-2"><p class="text-white custom-shadow clock-quote-text leading-5"></p><img id="refreshQuotes" class="h-4 w-4 cursor-pointer" src="/assets/desktop/icon-refresh.svg" alt="refresh-logo"/></div>
<p class="text-white custom-shadow clock-author font-bold"></p>
</article>
<div class="text-white">
<div class="flex gap-2 lg:gap-4 items-center"><img src="${
  hour < 17 ? "/assets/desktop/icon-sun.svg" : "/assets/desktop/icon-moon.svg"
}" alt="${
  hour < 17 ? "sun" : "moon"
} logo" class="clock-weather-logo"/> <p class="uppercase text-sm tracking-[4px] custom-shadow">${greeting}<span class="hidden md:inline-block">, it's currently</span></p></div>
<p class="font-bold text-[6.25rem] md:text-[10.9375rem] lg:text-[12.5rem] custom-shadow">${time} <span class="text-[1.75rem] font-thin">${abbr}</span></p>
<div class="flex justify-between flex-col lg:flex-row gap-12 md:gap-20">
<p class="uppercase font-bold text-sm md:text-[1.125rem] lg:text-2xl custom-shadow">in ${city}, ${country_code}</p>
<button id="toggle" type="button" class="group cursor-pointer w-[9.125rem] h-[2.4375rem] md:h-14 bg-white rounded-4xl flex justify-between pl-[1.3125rem] items-center pr-[0.5rem] text-[#000000] hover:text-[#999999] font-bold tracking-[0.3125rem] uppercase"></button>
</div>
</div>
</section>
<section id="clock-info" class="clock-info w-full h-[16rem] md:h-[20rem] lg:h-[25rem] ${
  hour < 17
    ? "bg-white/70 backdrop-blur-sm text-[#303030]"
    : "bg-[#000000]/70 backdrop-blur-sm text-white"
} fixed left-0 right-0 bottom-0 transform translate-y-full transition-transform duration-700 ease-in-out">
<div class="px-4 gap-4 grid md:grid-cols-2 md:justify-items-center content-center h-full w-full">
<div class="flex flex-col gap-4 md:gap-[2.625rem]">
<div class="flex items-center justify-between md:flex-col md:items-start md:gap-[9px]">
<h2 class="text-[0.625rem] sm:text-xs uppercase tracking-[2px] md:tracking-[2.6px] lg:tracking-[3px]">current timezone</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${time_zone.name}</p>
</div>
<div class="flex items-center justify-between md:flex-col md:items-start md:gap-[9px]">
<h2 class="text-[0.625rem] sm:text-xs uppercase tracking-[2.6px] lg:tracking-[3px]">day of the year</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${presentDay}</p>
</div>
</div>
<div class="flex flex-col gap-4 md:gap-[2.625rem] lg:border-l-[1px] ${
  hour < 17 ? "border-[#303030]" : "border-white"
} lg:pl-[5.875rem] w-full">
<div class="flex items-center justify-between md:flex-col md:items-start md:gap-[9px]">
<h2 class="text-[0.625rem] md:text-xs uppercase tracking-[1.6px] lg:tracking-[3px]">day of the week</h2>
<p class="font-bold md:text-[2.5rem] lg:text-[3.5rem]">${dayOfTheWeek}</p>
</div>
<div class="flex items-center justify-between md:flex-col md:items-start md:gap-[9px]">
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

handleToggle(document.querySelector<HTMLButtonElement>("#toggle")!);
generateQuote(
  document.querySelector<HTMLImageElement>("#refreshQuotes")!,
  (quote, author) => {
    const clockQuote = document.querySelector(".clock-quote-text")!;
    const clockAuthor = document.querySelector(".clock-author")!;
    clockQuote.textContent = `“${quote}“`;
    clockAuthor.textContent = `${author}`;
  }
);
