# 🌙 Decifrando o Enigma Lunar ✨

Uma aplicação web interativa que resolve o desafio matemático das combinações válidas de parênteses usando os famosos Números de Catalan. 
Ambientado em um tema mágico de inverno, onde uma bruxa caminha pela neve sob a lua cheia, tecendo feitiços e desvendando enigmas ancestrais.

## 📖 Sobre o Desafio

Em uma noite fria e de lua cheia, uma poderosa bruxa enfrenta desafios para proteger segredos ancestrais da floresta oculta. 
Entre a neve e o luar, cada combinação perfeita de parênteses revela encantamentos certos. O desafio consiste em encontrar todas as combinações válidas que podem ser formadas com n pares de parênteses.

**Exemplo:**

Para 3 pares de parênteses: ``()()(), ()((())), (())(), ((())), (()())``

Total: **5 combinações válidas**

## 🚀 Funcionalidades

✨ **Interface Mágica**: Design moderno com tema lunar e cores vibrantes

🎬 **Background Dinâmico**: Suporte para vídeo de fundo em tela cheia

🌈 **Botões Animados**: Efeito glow colorido com gradientes em movimento

📱 **Totalmente Responsivo**: Adapta perfeitamente para desktop, tablet e mobile

🧮 **Cálculo Detalhado**: Mostra o processo completo de validação

📊 **Visualização de Combinações**: Lista todas as combinações para números pequenos

⚡ **Algoritmo Otimizado**: Usa programação dinâmica para máxima eficiência

## 🛠️ Tecnologias Utilizadas

**HTML5:** Estrutura semântica e acessível
**CSS3:** Animações avançadas, glassmorphism e gradientes
**JavaScript ES6+:** Algoritmos otimizados e manipulação do DOM
**Responsive Design:** Flexbox e media queries

## 📁 Estrutura do Projeto
```
desafio_coderbyte2/
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do algoritmo
├── assets/
│   └── background.mp4  # Vídeo de fundo (adicionar aqui)
└── README.md
```

## 🔧 Instalação e Uso

Clone ou baixe o projeto
```
bash
git clone https://github.com/luizfxdev/desafio_coderbyte2.git
cd enigma-lunar
```

Abra no navegador

Abra o arquivo index.html diretamente no navegador
Ou use um servidor local como Live Server (VSCode)



## 🎮 Como Usar

Digite um número no campo de entrada (número de pares de parênteses)
Clique em DESVENDAR para calcular o resultado
Veja o resultado detalhado com:

Método de cálculo usado
Processo de validação passo a passo
Lista de combinações (para números ≤ 5)
Resultado final destacado


Clique em RETORNAR para limpar e começar novamente

## 🧮 Algoritmo Matemático
A solução utiliza os **Números de Catalan**, que representam o número de formas válidas de combinar parênteses:

``C(n) = Σ(k=0 to n-1) C(k) × C(n-1-k)``

Casos Base:
```
C(0) = 1 (string vazia)
C(1) = 1 (apenas "()")
```
Implementação:

Programação dinâmica para otimização
Complexidade: O(n²) tempo, O(n) espaço
Suporta números grandes com eficiência

## 📱 Responsividade

**Desktop**: Container fixo no lado esquerdo, botões horizontais
**Tablet**: Ajuste de tamanhos e espaçamentos
**Mobile**: Botões em stack vertical, container adaptável

## 🎨 Design e UX

**Tema Mágico**: Cores inspiradas na noite lunar
**Glassmorphism**: Efeito de vidro fosco no container principal
**Animações Suaves**: Transições fluidas e efeitos visuais
**Acessibilidade**: Contraste adequado, navegação por teclado, labels claros

## 📊 Exemplos de Uso
```
EntradaSaídaCombinações01"" (string vazia)11()22()(), (())35()()(), ()(()), (())(), (()()), ((()))41414 combinações diferentes
```
##⚡ Performance

Otimizado para números até 20 (recomendado)
Aviso automático para números muito grandes
Geração de combinações apenas para n ≤ 5 (por questões de UX)
Algoritmo eficiente com memoização

## 🐛 Tratamento de Erros

Validação de entrada (números inteiros ≥ 0)
Alertas informativos para entradas inválidas
Limitação automática para evitar travamentos
Mensagens de erro amigáveis

## 🔮 Futuras Melhorias

 Animação de loading para números grandes
 Exportação de resultados em PDF
 Modo escuro/claro
 Suporte a múltiplos idiomas
 Visualização gráfica das combinações

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para:

Fazer fork do projeto

Criar uma branch para sua feature (``git checkout -b feature/nova-feature``)

Commit suas mudanças (``git commit -m 'Adiciona nova feature'``)

Push para a branch (``git push origin feature/nova-feature``)

Abrir um Pull Request

## ✨ Autor [Luizfxdev](https://www.linkedin.com/in/luizfxdev)

Desenvolvido com 💜 para desvendar os mistérios matemáticos da noite lunar.


"*Entre a neve e o luar, cada passo da bruxa é um teste de sabedoria e equilíbrio — e desvendar a lógica das combinações é a chave para vencer o desafio e conquistar a magia da noite.*" 🌙✨
