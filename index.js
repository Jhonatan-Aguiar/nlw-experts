const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "alert()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se refere a um elemento HTML usando JavaScript?",
      respostas: [
        "document.find()",
        "document.getElement()",
        "document.querySelector()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de iniciar um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i <= 5; i++)",
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "def myFunction() {}",
        "fun myFunction() {}",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent =corretas.size + ' de ' +totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
         corretas.add(item) 
        }
        
        mostrarTotal.textContent =corretas.size + ' de ' +totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }