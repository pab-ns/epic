// Commercial Accumen (COM-ACCU)

// </b>
// </i> 
// <br>


// 
// PAGE TITLE
// 
const hookText = document.getElementById('hook-text');
const newHookTitle = "Make better bets, impress everyone, and sleep well at night";
hookText.innerHTML = newHookTitle;


//
// WHY CONTAINER
//
const whyContainer = document.getElementById('why');
const bulletPoints = [
    "<b>Commercial acumen is critical for organisations to make profitable decisions.</b>", 
    "<b>However it is often lacking in decision making at multiple levels of an organisation.</b>", 
    "<b>This MC teaches how to apply a commercial lens in everything people do, with a focus on products roadmaps and releases.</b>", 
    "<b>Product leadership is about owning the strategy, shaping value, and unlocking a ROI.</b>", 
    "<b>This four week Masterclass builds commercial muscle and gives you the tools, language, and confidence to lead products that deliver real impact.</b>", 
    "<b>You'll learn how to calculate ROI for the work you do and the features released in a product.</b>", 
    "<b>This is achieved by crafting a vision, run purposeful discovery, and align teams around outcomes - not just outputs.</b>", 
    "With EPiC's practical frameworks, templates, and playbooks, you'll walk away ready to influence stakeholders, make smarter bets, and lead product strategy that moves the needle and maximises ROI."];
bulletPoints.forEach(text => {
  const div = document.createElement('div');
  div.className = "flex p-6 text-left mx-auto space-x-6";
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅";
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text;
  div.appendChild(emoji);
  div.appendChild(p);
  whyContainer.appendChild(div);
});


//
// PROBLEM CONTAINER
//
const newProblems = [
    "<b>I am a leader, product owner or product manager who wants to move beyond backlog management and link day-to-day work to strategy, customer outcomes, and commercial impact.</b>", 
    "I want to lead the business conversations, not just react to them.", 
    "I'm stuck in an endless loop of discovery or delivery - but not both in sync.", 
    "I want to move beyond output metrics and lead with outcomes that matter.", 
    "I'm new to product leadership and want to hit the ground running with the right tools, mindset, and strategy.", 
    "I want practical tools and playbooks to influence stakeholders and make smarter product bets."
];
const ul = document.getElementById("problems");
newProblems.forEach(problem => {
  const li = document.createElement("li");
  li.innerHTML = problem;
  ul.appendChild(li);
});


//
// WHAT CONTAINER
//
const whatContainer = document.getElementById('what');
const whatbulletPoints = [
    "A repeatable approach for crafting product vision and strategic narratives", 
    "Tools and templates for value proposition design, discovery plans, and stakeholder alignment including validating ideas through real experiments and customer signals", 
    "Skills to effectively drive continuous discovery and delivery activities", 
    "Confidence to lead product conversations that drive business decisions", 
    "Dashboards, canvases, and playbooks to track product performance and tell the value story", 
    "A practical product leadership playbook that you can put to work immediately - in any team, at any stage of the product lifecycle."
];
whatbulletPoints.forEach(text => {
  const div = document.createElement('div');
  div.className = "flex p-6 text-left space-x-6";
  const emoji = document.createElement('div');
  emoji.className = "text-2xl mb-5";
  emoji.textContent = "✅";
  const p = document.createElement('p');
  p.className = "text-epicBlue";
  p.innerHTML = text;
  div.appendChild(emoji);
  div.appendChild(p);
  whatContainer.appendChild(div);
});


//
// WEEK BREAKDOWN CONTAINER
//
const weekData = [
    {
      number:"Before",
      title: "Get ready for the journey ahead",
      desc: "Meet your peers, share your context, and ask any burning questions so we can hit the ground running on Week 1! You'll also get a short pre-class mission to set you up for the first class."
    },
    {
      number:"Week 1",
      title: "Start With Strategy",
      desc: "Shape a compelling product vision and strategic position that your teams and stakeholders can rally behind - anchored in real business drivers and metrics. You'll define your product's unique bet and learn how to calculate ROI for your roadmap and the features within it."
    },
    {
        number:"Week 2",
        title: "Build (and Back) the Right Team",
        desc: "Explore how team structures, decision flows, and ways of working shape product outcomes. Align cross-functional teams to lifecycle stages and strategy zones to support ownership, clarity, and momentum."
      },
      {
        number:"Week 3",
        title: "Spikey Products",
        desc: "Validate what matters. Learn modern discovery practices like hypothesis-led inceptions, validation loops, and stakeholder walk-throughs. We'll focus on doing just enough to de-risk decisions without falling into analysis paralysis."
      },
      {
        number:"Week 4",
        title: "Manage the Journey",
        desc: "Turn insight into action. Build dashboards, OKRs, and value tracking tools that connect product effort to business outcomes. Learn how to tell a product story with benefit hypothesis every step of the way, that lands. Set up the rhythms, roadmaps, and habits that drive continuous alignment and improvement across your portfolio."
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
const firstText = document.getElementById('first-text');
const list = document.getElementById('list');
const secondText = document.getElementById('second-text');
const content = {
  first: "You'll get a nudge from us (and your peers) to share:",
  listItems: [
    "What did you test?",
    "What landed?",
    "What's your next commercial bet?"
  ],
  second: "Because there's a lot we can learn from each other when stepping out into a complex world."
};

firstText.innerHTML = content.first;
list.innerHTML = "";
content.listItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
secondText.innerHTML = content.second;


// 
// CTA CONTENT
//
const ctaText = document.getElementById('cta-text');
const newCtaContent = "Need help levelling up your product strategy across a whole portfolio or tribe? Let us help you with with our Product Strategy Accelerator - focused on alignment, value creation, and stronger leadership habits across the organisation.<br><br> <i>The Masterclass sharpens the product leader. The Accelerator sharpens the product ecosystem.</i>";
ctaText.innerHTML = newCtaContent;