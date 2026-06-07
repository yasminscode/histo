const flashcards = [
  ["O que é equidade?", "Tratar pessoas conforme necessidades específicas para reduzir desigualdades e alcançar resultados justos."],
  ["Território em saúde é só mapa?", "Não. É espaço social vivo: relações, riscos, serviços, cultura, fluxos e vulnerabilidades."],
  ["Diferença entre risco e barreira?", "Risco é evento incerto que pode acontecer; barreira é obstáculo já existente."],
  ["O que é intraempreendedorismo?", "Inovar dentro de uma organização existente, como propor novo fluxo em um hospital."],
  ["Alcance é impacto?", "Não. Alcance é quantos foram atingidos; impacto é o que mudou de fato."],
  ["Conflito de interesse é sempre antiético?", "Não. O problema é esconder ou deixar influenciar a decisão clínica/científica."],
  ["O que viola dignidade humana?", "Tratar paciente como objeto, ignorar autonomia, expor dados, desrespeitar nome social ou consentimento."],
  ["Publicidade médica indevida inclui o quê?", "Promessa de cura, garantia de resultado, sensacionalismo, antes/depois promocional e exposição de paciente."]
];

const flashcardContainer = document.getElementById("flashcardContainer");

flashcards.forEach(([front, back]) => {
  const card = document.createElement("div");
  card.className = "flashcard";
  card.innerHTML = `
    <div class="flashcard-inner">
      <div class="flash-front">${front}</div>
      <div class="flash-back">${back}</div>
    </div>
  `;
  card.addEventListener("click", () => card.classList.toggle("flipped"));
  flashcardContainer.appendChild(card);
});

const quiz = [
  {
    q: "Uma UBS oferece o mesmo horário de atendimento para todos, mas trabalhadores não conseguem comparecer. Criar horário estendido é exemplo de:",
    options: ["Igualdade", "Equidade", "Publicidade", "Conflito de interesse"],
    answer: 1,
    feedback: "Equidade: ajusta o serviço conforme necessidades específicas."
  },
  {
    q: "Paciente abandona tratamento porque a UBS fica longe, não há transporte e o remédio falta. Isso mostra principalmente:",
    options: ["Apenas vulnerabilidade individual", "Vulnerabilidade social e programática", "Somente falta de vontade", "Marketing social"],
    answer: 1,
    feedback: "Há barreira social, como transporte, e programática, como falta de medicamento."
  },
  {
    q: "Um médico propõe novo fluxo de triagem dentro do hospital onde trabalha. Isso é:",
    options: ["Intraempreendedorismo", "Marketing comercial", "Conferência de saúde", "Racismo institucional"],
    answer: 0,
    feedback: "Intraempreendedorismo é inovar dentro de organização já existente."
  },
  {
    q: "Uma campanha teve 500 participantes, mas não mediu mudança de comportamento ou desfecho. O que ela demonstrou?",
    options: ["Impacto comprovado", "Alcance", "Cura", "Eficiência clínica"],
    answer: 1,
    feedback: "Participação mede alcance, não necessariamente impacto."
  },
  {
    q: "Post médico dizendo 'resultado garantido em 30 dias' é problema porque:",
    options: ["É muito didático", "Promete resultado e pode induzir falsa expectativa", "É comunicação institucional", "É diagnóstico territorial"],
    answer: 1,
    feedback: "Promessa de resultado é publicidade indevida e antiética."
  },
  {
    q: "No modelo social da deficiência, o problema principal está:",
    options: ["Apenas no corpo da pessoa", "Nas barreiras sociais, físicas e comunicacionais", "Na falta de medicamentos", "Na genética"],
    answer: 1,
    feedback: "O modelo social não nega limitações, mas destaca as barreiras impostas pela sociedade."
  },
  {
    q: "Necessidade definida por especialista ou parâmetro técnico, como cobertura vacinal abaixo de 95%, é:",
    options: ["Sentida", "Expressa", "Normativa", "Comparativa"],
    answer: 2,
    feedback: "Necessidade normativa vem de critérios técnicos."
  },
  {
    q: "Um laboratório paga viagem a um médico que depois prescreve medicamento da marca. O conceito envolvido é:",
    options: ["Conflito de interesse", "Territorialização", "Igualdade", "PDCA"],
    answer: 0,
    feedback: "Há interesse secundário financeiro que pode influenciar decisão clínica."
  }
];

const quizContainer = document.getElementById("quizContainer");
let answered = {};

quiz.forEach((item, idx) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<h3>${idx + 1}. ${item.q}</h3>`;
  item.options.forEach((opt, optIdx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      answered[idx] = optIdx === item.answer;
      const old = div.querySelector(".feedback");
      if (old) old.remove();
      const fb = document.createElement("p");
      fb.className = "feedback " + (answered[idx] ? "correct" : "wrong");
      fb.textContent = (answered[idx] ? "✅ Certo. " : "❌ Quase. ") + item.feedback;
      div.appendChild(fb);
    });
    div.appendChild(btn);
  });
  quizContainer.appendChild(div);
});

document.getElementById("scoreBtn").addEventListener("click", () => {
  const total = quiz.length;
  const done = Object.keys(answered).length;
  const correct = Object.values(answered).filter(Boolean).length;
  document.getElementById("score").textContent =
    `Você respondeu ${done}/${total} e acertou ${correct}. ${correct >= 6 ? "Tá bonita na fita." : "Revisa o tabelão e tenta de novo, sem drama."}`;
});

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
