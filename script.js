const QUESTIONS = [
  {
    "id": 1,
    "image": "assets/esteatose_1.png",
    "answer": "Esteatose hepática",
    "options": [
      "Esteatose hepática",
      "Hepatite viral",
      "Pielonefrite",
      "Aterosclerose"
    ]
  },
  {
    "id": 2,
    "image": "assets/esteatose_2.png",
    "answer": "Esteatose hepática",
    "options": [
      "Esteatose hepática",
      "Hepatite viral",
      "Pielonefrite",
      "Aterosclerose"
    ]
  },
  {
    "id": 3,
    "image": "assets/hepatite_1.png",
    "answer": "Hepatite viral",
    "options": [
      "Esteatose hepática",
      "Hepatite viral",
      "Pielonefrite",
      "Aterosclerose"
    ]
  },
  {
    "id": 4,
    "image": "assets/hemorragia_1.png",
    "answer": "Hemorragia pulmonar",
    "options": [
      "Hemorragia pulmonar",
      "Tuberculose",
      "Carcinoma de pulmão",
      "Pielonefrite"
    ]
  },
  {
    "id": 5,
    "image": "assets/hemorragia_2.png",
    "answer": "Hemorragia pulmonar",
    "options": [
      "Hemorragia pulmonar",
      "Tuberculose",
      "Carcinoma de pulmão",
      "Pielonefrite"
    ]
  },
  {
    "id": 6,
    "image": "assets/tuberculose_1.png",
    "answer": "Tuberculose",
    "options": [
      "Hemorragia pulmonar",
      "Tuberculose",
      "Carcinoma de pulmão",
      "Pielonefrite"
    ]
  },
  {
    "id": 7,
    "image": "assets/tuberculose_2.png",
    "answer": "Tuberculose",
    "options": [
      "Hemorragia pulmonar",
      "Tuberculose",
      "Carcinoma de pulmão",
      "Pielonefrite"
    ]
  },
  {
    "id": 8,
    "image": "assets/inchaco_1.png",
    "answer": "Inchaço renal",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 9,
    "image": "assets/inchaco_2.png",
    "answer": "Inchaço renal",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 10,
    "image": "assets/inchaco_3.png",
    "answer": "Inchaço renal",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 11,
    "image": "assets/pielonefrite_1.png",
    "answer": "Pielonefrite",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 12,
    "image": "assets/pielonefrite_2.png",
    "answer": "Pielonefrite",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 13,
    "image": "assets/pielonefrite_3.png",
    "answer": "Pielonefrite",
    "options": [
      "Inchaço renal",
      "Pielonefrite",
      "Hiperplasia de próstata",
      "Aterosclerose"
    ]
  },
  {
    "id": 14,
    "image": "assets/aterosclerose_1.png",
    "answer": "Aterosclerose",
    "options": [
      "Aterosclerose",
      "Hiperplasia de próstata",
      "Pielonefrite",
      "Carcinoma do cólon"
    ]
  },
  {
    "id": 15,
    "image": "assets/hiperplasia_1.png",
    "answer": "Hiperplasia de próstata",
    "options": [
      "Hiperplasia de próstata",
      "Carcinoma de esôfago",
      "Aterosclerose",
      "Pielonefrite"
    ]
  },
  {
    "id": 16,
    "image": "assets/hiperplasia_2.png",
    "answer": "Hiperplasia de próstata",
    "options": [
      "Hiperplasia de próstata",
      "Carcinoma de esôfago",
      "Aterosclerose",
      "Pielonefrite"
    ]
  },
  {
    "id": 17,
    "image": "assets/esofago_1.png",
    "answer": "Carcinoma de esôfago",
    "options": [
      "Carcinoma de esôfago",
      "Carcinoma de pulmão",
      "Carcinoma gástrico",
      "Carcinoma do cólon"
    ]
  },
  {
    "id": 18,
    "image": "assets/esofago_2.png",
    "answer": "Carcinoma de esôfago",
    "options": [
      "Carcinoma de esôfago",
      "Carcinoma de pulmão",
      "Carcinoma gástrico",
      "Carcinoma do cólon"
    ]
  },
  {
    "id": 19,
    "image": "assets/pulmao_ca_1.png",
    "answer": "Carcinoma de pulmão",
    "options": [
      "Carcinoma de pulmão",
      "Carcinoma de esôfago",
      "Carcinoma gástrico",
      "Carcinoma do cólon",
      "Tuberculose",
      "Hemorragia pulmonar"
    ]
  },
  {
    "id": 20,
    "image": "assets/pulmao_ca_2.png",
    "answer": "Carcinoma de pulmão",
    "options": [
      "Carcinoma de pulmão",
      "Carcinoma de esôfago",
      "Carcinoma gástrico",
      "Carcinoma do cólon",
      "Tuberculose",
      "Hemorragia pulmonar"
    ]
  },
  {
    "id": 21,
    "image": "assets/gastrico_1.png",
    "answer": "Carcinoma gástrico",
    "options": [
      "Carcinoma de esôfago",
      "Carcinoma de pulmão",
      "Carcinoma gástrico",
      "Carcinoma do cólon"
    ]
  },
  {
    "id": 22,
    "image": "assets/gastrico_2.png",
    "answer": "Carcinoma gástrico",
    "options": [
      "Carcinoma de esôfago",
      "Carcinoma de pulmão",
      "Carcinoma gástrico",
      "Carcinoma do cólon"
    ]
  },
  {
    "id": 23,
    "image": "assets/colon_1.png",
    "answer": "Carcinoma do cólon",
    "options": [
      "Carcinoma de esôfago",
      "Carcinoma de pulmão",
      "Carcinoma gástrico",
      "Carcinoma do cólon"
    ]
  }
];

let order = [];
let current = 0;
let score = 0;
let answered = false;
let mistakes = [];

const $ = (id) => document.getElementById(id);

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  order = shuffleArray(QUESTIONS);
  current = 0;
  score = 0;
  mistakes = [];
  $('final').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = order[current];
  $('counter').textContent = `Questão ${current + 1} de ${order.length}`;
  $('score').textContent = `Acertos: ${score}`;
  $('progressFill').style.width = `${(current / order.length) * 100}%`;
  $('slideImage').src = q.image;
  $('slideImage').alt = `Lâmina histológica da questão ${current + 1}`;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('nextBtn').disabled = true;

  const options = shuffleArray(q.options);
  const box = $('options');
  box.innerHTML = '';
  options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.type = 'button';
    btn.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.onclick = () => chooseOption(btn, option, q.answer);
    box.appendChild(btn);
  });
}

function chooseOption(button, selected, answer) {
  if (answered) return;
  answered = true;
  const all = document.querySelectorAll('.option');
  all.forEach(btn => btn.disabled = true);

  if (selected === answer) {
    score++;
    button.classList.add('correct');
    $('feedback').textContent = 'Acertou, doutora. Essa lâmina te respeitou hoje.';
    $('feedback').classList.add('ok');
  } else {
    button.classList.add('wrong');
    all.forEach(btn => {
      if (btn.textContent.includes(answer)) btn.classList.add('correct');
    });
    mistakes.push({question: current + 1, image: order[current].image, selected, answer});
    $('feedback').textContent = `Errou: era ${answer}. Sem drama, histologia também tem seus dias de vilã.`;
    $('feedback').classList.add('bad');
  }
  $('score').textContent = `Acertos: ${score}`;
  $('nextBtn').disabled = false;
}

function nextQuestion() {
  current++;
  if (current >= order.length) return finishQuiz();
  renderQuestion();
}

function finishQuiz() {
  $('quiz').classList.add('hidden');
  $('final').classList.remove('hidden');
  $('progressFill').style.width = '100%';
  const pct = Math.round((score / order.length) * 100);
  $('finalScore').textContent = `${score}/${order.length} (${pct}%)`;
  const review = $('review');
  review.innerHTML = '';
  if (mistakes.length === 0) {
    review.innerHTML = '<p class="perfect">Gabaritou. Pode entrar no laboratório em câmera lenta.</p>';
  } else {
    const title = document.createElement('h3');
    title.textContent = 'Revisar erros';
    review.appendChild(title);
    mistakes.forEach(m => {
      const item = document.createElement('div');
      item.className = 'mistake';
      item.innerHTML = `<img src="${m.image}" alt="Lâmina errada"><div><b>Sua resposta:</b> ${m.selected}<br><b>Correta:</b> ${m.answer}</div>`;
      review.appendChild(item);
    });
  }
}

$('nextBtn').addEventListener('click', nextQuestion);
$('restartBtn').addEventListener('click', startQuiz);
$('restartBtn2').addEventListener('click', startQuiz);
startQuiz();
