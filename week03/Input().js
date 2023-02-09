import * as random from 'random';
var correct, guess, problemNumber, quiz;
quiz = [{
  "question": "How tall is the worlds tallest tower? ",
  "choices": ["100ft", "600ft", "2,716ft", "3,143ft"],
  "answer": "2,716ft"
}, {
  "question": "Who is the worlds richest person? ",
  "choices": ["Bill Gates ", "Elon Musk ", "Jeff Bezos ", "Your Mom"],
  "answer": "Your Mom"
}, {
  "question": "What is the most commenly looked up thing? ",
  "choices": ["Facebook ", "Youtube ", "Amazon ", "Weather "],
  "answer": "Facebook"
}];
random.shuffle(quiz);
problemNumber = 0;
correct = 0;

for (var problem, _pj_c = 0, _pj_a = quiz, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  problem = _pj_a[_pj_c];
  problemNumber += 1;
  console.log(`Question ${problemNumber}: ${problem["question"]}`);

  for (var choice, _pj_f = 0, _pj_d = problem["choices"], _pj_e = _pj_d.length; _pj_f < _pj_e; _pj_f += 1) {
    choice = _pj_d[_pj_f];
    console.log(` ${choice}`);
  }

  guess = input("Your guess: ");

  if (guess === problem["answer"]) {
    correct += 1;
    console.log(`You are correct!`);
  } else {
    console.log(`Incorrect`);
  }

  console.log();
}

console.log(`Correct: ${correct} of ${problemNumber} (${correct * 100 / problemNumber}&)`);
