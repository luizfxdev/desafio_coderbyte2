// Função principal para calcular combinações de parênteses (Números de Catalan)
function BracketCombinations(num) {
  // Se o número for 0, existe apenas uma forma: string vazia
  if (num === 0) return 1;

  // Fórmula dos Números de Catalan: C(n) = (2n)! / ((n+1)! * n!)
  // Também pode ser calculada usando: C(n) = Σ(k=0 to n-1) C(k) * C(n-1-k)

  // Array para armazenar valores já calculados (programação dinâmica)
  const catalan = new Array(num + 1).fill(0);

  // Casos base
  catalan[0] = 1; // C(0) = 1
  catalan[1] = 1; // C(1) = 1

  // Calcular os números de Catalan usando programação dinâmica
  for (let i = 2; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      catalan[i] += catalan[j] * catalan[i - 1 - j];
    }
  }

  return catalan[num];
}

// Função para gerar todas as combinações válidas (para mostrar exemplos)
function generateAllCombinations(n) {
  if (n === 0) return [''];

  const result = [];

  function backtrack(current, open, close) {
    // Se completamos todos os pares de parênteses
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Adicionar parêntese de abertura se ainda temos disponíveis
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }

    // Adicionar parêntese de fechamento se não ultrapassar os de abertura
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
}

// Função para exibir o resultado detalhado
function displayDetailedResult(num, combinations, allCombinations) {
  const resultSection = document.getElementById('result-section');
  const resultContent = document.getElementById('result-content');

  let html = `
        <div class="calculation-steps">
            <h4>🧮 Cálculo Detalhado</h4>
            <p><strong>Entrada:</strong> ${num} pares de parênteses</p>
            <p><strong>Método:</strong> Números de Catalan usando Programação Dinâmica</p>
            <p><strong>Fórmula:</strong> C(n) = Σ(k=0 to n-1) C(k) × C(n-1-k)</p>
        </div>
        
        <div class="calculation-steps">
            <h4>📝 Processo de Validação</h4>
            <p><strong>Passo 1:</strong> Inicializar casos base - C(0) = 1, C(1) = 1</p>
            <p><strong>Passo 2:</strong> Calcular iterativamente usando a recorrência</p>
            <p><strong>Passo 3:</strong> Cada C(i) representa o número de formas de organizar i pares de parênteses</p>
        </div>
    `;

  if (num <= 5 && num > 0) {
    html += `
            <div class="calculation-steps">
                <h4>✨ Combinações Válidas Encontradas</h4>
                <p><strong>Total de ${combinations} combinações:</strong></p>
                <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
        `;

    allCombinations.forEach((combo, index) => {
      html += `<li style="margin-bottom: 0.3rem; color: #a78bfa;">${index + 1}. ${combo}</li>`;
    });

    html += `</ul></div>`;
  } else if (num > 5) {
    html += `
            <div class="calculation-steps">
                <h4>📊 Informações Adicionais</h4>
                <p>Para ${num} pares de parênteses, existem <strong>${combinations}</strong> combinações válidas.</p>
                <p><em>Nota: Devido ao grande número de combinações, não é prático listar todas aqui.</em></p>
            </div>
        `;
  }

  html += `
        <div class="final-result">
            🌙 Saída Esperada: <strong>${combinations}</strong> combinações mágicas descobertas!
        </div>
    `;

  resultContent.innerHTML = html;
  resultSection.classList.add('show');
}

// Função para limpar o resultado
function clearResult() {
  const resultSection = document.getElementById('result-section');
  const numberInput = document.getElementById('number-input');

  resultSection.classList.remove('show');
  numberInput.value = '';
  numberInput.focus();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
  const solveBtn = document.getElementById('solve-btn');
  const resetBtn = document.getElementById('reset-btn');
  const numberInput = document.getElementById('number-input');

  // Botão DESVENDAR
  solveBtn.addEventListener('click', function () {
    const input = numberInput.value.trim();

    // Validação da entrada
    if (input === '') {
      alert('Por favor, digite um número válido!');
      numberInput.focus();
      return;
    }

    const num = parseInt(input);

    if (isNaN(num) || num < 0) {
      alert('Por favor, digite um número inteiro maior ou igual a zero!');
      numberInput.focus();
      return;
    }

    if (num > 20) {
      alert('Para melhor experiência, use números até 20. Números muito grandes podem ser muito lentos para calcular!');
      return;
    }

    // Calcular o resultado
    const combinations = BracketCombinations(num);
    const allCombinations = num <= 5 ? generateAllCombinations(num) : [];

    // Exibir resultado detalhado
    displayDetailedResult(num, combinations, allCombinations);
  });

  // Botão RETORNAR
  resetBtn.addEventListener('click', clearResult);

  // Enter no input para resolver
  numberInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      solveBtn.click();
    }
  });

  // Focar no input ao carregar a página
  numberInput.focus();
});
