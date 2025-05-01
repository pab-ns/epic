//
// WHY CONTAINER
//
// 1. Get the parent container
const whyContainer = document.getElementById('why');

// 2. Create an array of 10 bullet point texts
const bulletPoints = [
  "One with a <b>bold word</b> in it",
  "Two",
];

// 3. Loop through the array and create the bullet point elements
bulletPoints.forEach(text => {
  // Create the main wrapper
  const div = document.createElement('div');
  div.className = "flex p-6 text-left mx-auto space-x-6";
  // Create the emoji part
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅"; // You can change the emoji if you want
  // Create the text part
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text;
  // Append emoji and text into the wrapper
  div.appendChild(emoji);
  div.appendChild(p);
  // Append the wrapper into the main container
  whyContainer.appendChild(div);
});


//
// PROBLEM CONTAINER
//
const newProblems = [
  "Our strategy has evolved, but our structure hasn't - it's holding us back - we need a future-fit structure.",
  "I'm a leader, strategist, or coach constantly working around structural friction.",
  "I'm preparing for a restructure or scale-up and I need ready-to-use templates and a method I can trust.",
  "I've done OD before, but I want a repeatable, industry-leading, human-centered approach.",
  "I've tried to tweak ways of working - now I'm ready to fix the system.",
  "I want to grow my confidence in shaping structures and leading change."
];

const ul = document.getElementById("problems");

newProblems.forEach(problem => {
  const li = document.createElement("li");
  li.textContent = problem;
  ul.appendChild(li);
});


//
// WHAT CONTAINER
//
const whatContainer = document.getElementById('what');

// 2. Create an array of 10 bullet point texts (now with <b> allowed)
const whatbulletPoints = [
  "Four with a <b>bold word</b> in it",
  "Another point with <b>bold text</b> inside",
];

// 3. Loop through the array and create the bullet point elements
whatbulletPoints.forEach(text => {
  // Create the main wrapper
  const div = document.createElement('div');
  div.className = "flex p-6 text-left space-x-6";

  // Create the emoji part
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅"; // You can change the emoji if you want

  // Create the text part
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text; // <-- changed from textContent to innerHTML

  // Append emoji and text into the wrapper
  div.appendChild(emoji);
  div.appendChild(p);

  // Append the wrapper into the main container
  whatContainer.appendChild(div);
});



//
// WEEK BREAKDOWN CONTAINER
//
const weekData = [
    {
      number:"Before",
      title: "Get ready for the journey ahead",
      desc: "You’ll meet your peers, share your context, and ask any burning questions so we can hit the ground running on Week 1!"
    },
    {
      number:"Week 1",
      title: "Taking Design Seriouslys",
      desc: "We’ll explore why many structures don't support organisational strategy - and what to do about it. You’ll define your drivers for change, clarify your role in the design process, and explore the mindset shifts needed to lead through  complexity."
    },
  ];

  const container = document.getElementById("week-container");

  weekData.forEach((week) => {
    const weekEl = document.createElement("div");
    weekEl.className = "py-8 border-b";

    weekEl.innerHTML = `
      <h4 class="text-xl font-bold text-epicOrange mb-2" id="week-number">${week.number}</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <h4 class="input-card-title text-epicBlue" id="week-title">${week.title}</h4>
        <div class="md:text-lg text-gray-700 mt-2 md:mt-0">
          <p id="week-desc">${week.desc}</p>
        </div>
      </div>
    `;

    container.appendChild(weekEl);
  });

//
// 30-DAY CONTENT
//
// 1. Select your main elements
const firstText = document.getElementById('first-text');
const list = document.getElementById('list');
const secondText = document.getElementById('second-text');

// 2. Define your content in an object
const content = {
  first: "Here's your new first paragraph!",
  listItems: [
    "First dynamic bullet point",
    "Second awesome bullet point",
    "Third great bullet point"
  ],
  second: "This is the new second paragraph, with <i>custom moves</i>."
};

// 3. Update the first paragraph
firstText.innerHTML = content.first; // using innerHTML in case you want to add <b> tags too

// 4. Update the list
list.innerHTML = ""; // clear old list items first
content.listItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});

// 5. Update the second paragraph
secondText.innerHTML = content.second; // innerHTML for flexibility


// CTA CONTENT
// Get the cta-text element
const ctaText = document.getElementById('cta-text');

// New HTML content you want to insert
const newCtaContent = `
  Ready to transform your organisation? <b>Join our EPiC Transformation Bootcamp</b> for a hands-on experience.<br><br>
  <i>Sharpen your strategy, ignite your culture.</i>
`;

// Replace the existing content
ctaText.innerHTML = newCtaContent;



