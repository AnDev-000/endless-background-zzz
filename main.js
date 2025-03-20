const marqueeContainer = document.getElementById("marquee-container");

const words = [
  { class: "text-span-en", text: "Biography" },
  { class: "text-span-es", text: "Biografía" },
  { class: "text-span-jp", text: "バイオグラフィー" }
];

function generateMarqueeContent() {
  const totalColumns = 50;

  for (let i = 0; i < totalColumns * 2; i++) {
    const column = document.createElement("div");
    column.className = "column";

    words.forEach(word => {
      const span = document.createElement("span");
      span.className = `text-span ${word.class}`;
      span.textContent = word.text;
      column.appendChild(span);
    });

    marqueeContainer.appendChild(column);
  }
}

generateMarqueeContent();
