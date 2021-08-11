let questions = [
  {
    id: 1,
    question: "Which one is NOT a synonym for happy? ",
    answer: "Haughty",
    options: ["Delighted", "Joyful", "Haughty", "Glad"],
  },
  {
    id: 2,
    question: "What is the past tense of put? ",
    answer: "Put",
    options: ["Put", "Puted", "Putted", "Puts"],
  },
  {
    id: 3,
    question: "I eat ___ apple every morning.",
    answer: "An",
    options: ["A", "An", "The", "None"],
  },
  {
    id: 4,
    question: "Which one is NOT a type of sentence? ",
    answer: "Derogatory sentence",
    options: [
      "Imperative sentence",
      "Exclamatory sentence",
      "Interrogative sentence",
      "Derogatory sentence",
    ],
  },
  {
    id: 5,
    question: "Unscramble 'ulipp'",
    answer: "Pupil",
    options: ["Pipul", "Lipup", "Liupp", "Pupil"],
  },
  {
    id: 6,
    question: "Pick the correct spelling.",
    answer: "Selfish",
    options: ["Selvish", "Selfish", "Selffish", "Sellfish"],
  },
  {
    id: 7,
    question: "Make (someone) a little angry",
    answer: "Annoy",
    options: ["Annoy", "Anger", "Slant", "Curse"],
  },
  {
    id: 8,
    question: "Pick the correct spelling.",
    answer: "Patrol",
    options: ["Patkol", "Patyol", "Pateol", "Patrol"],
  },
  {
    id: 9,
    question:
      "Select the appropriate noun for the blank. Lily has one little _____. ",
    answer: "Sister",
    options: ["Puppies", "Brothers", "Coins", "Sister"],
  },
  {
    id: 10,
    question: "Pass me ___ salt, please",
    answer: "the",
    options: ["the", "an", "a", "our"],
  },
];

let value = JSON.stringify(questions);
localStorage.setItem("question", value);

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function next() {
  if (question_count == questions.length - 1) {
    location.href = "./end.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  } else {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  question_count++;
  show(question_count);
}
