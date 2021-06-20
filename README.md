# Conceito 1 - Pilha de chamadas

O que é uma **pilha de chamadas**? É uma pilha de todas as funções que estão sendo executadas naquele determinado momento.

Em algoritmos, existem 2 conceitos:

FIFO *(first in first out)* - O primeiro que entrou é o primeiro a sair. Igual uma **fila** de supermercado. 

LIFO *(last in first out)* - O último que entra é o primeiro que sai. Igual a uma **pilha**, uma **coluna** de pneus.

Se uma função no JS chama outra função, essa segunda função será executada primeiro antes de executar a primeira função. 

````js
function funcao1() {
  funcao2()
  console.log('executou a função 1')
}

function funcao2() {
  funcao3()
  console.log('executou a função 2')
}

function funcao3() {
  console.log('executou a função 3')
}

funcao1()

// "executou a função 3"
// "executou a função 2"
// "executou a função 1"
````

Ao chamar a função 1, ela adiciona a função 2 na pilha, ao chamar a função 2, ele chama a função 3. 

````js
funcao3()
funcao2()
funcao1()
````

Depois ele vem executando as funções de cima para baixo e tirando elas da pilha. 

Não só para funções, se tiver qualquer outra estrutura como um `if else`, ou um `for`, ele também adiciona na pilha.

# Conceito 2 - Tipos Primitivos

Existem apenas 6 tipos primitivos no JavaScript. 

Boolean, string, number, null, undefined, symbol.

Todo o resto no JS são objetos. Funções são objetos, arrays...

Tipos primitivos são valores únicos. Não tem propriedades como objetos tem.

````js
typeof true // boolean
typeof Boolean(true) // boolean
typeof new Boolean(true) // Object
typeof (new Boolean(true)).valueOf() // boolean
typeof 'nome' // string
typeof 28 // number
````

Se os tipos primitivos não tem propriedades, como conseguimos pegar `.length` para ver o tamanho por exemplo?

O JavaScript tem os construtores de tipos primitivos. 

Como por exemplo o `new Boolean(true)` que usa uma função construtora que devolve um objeto com o valor passado no construtor `true`. 

O JS tem construtores para tipos primitivos como `boolean`, `string` e `number`. Esse construtor quando é usado, retorna um objeto contendo todos os métodos para manipulação do tipo que foi utilizado. 

Ao criar um tipo primitivo e usar uma propriedade como `.length`, por uma fração de segundos cria uma cópia desse valor em um objeto utilizando um construtor, chama o método `.length`, retorna o valor e joga o objeto fora da memória.

Ou seja, ele consegue transformar um tipo primitivo em um objeto para ser utilizado. 

É possível transformar um objeto em tipo primitivo para usar de alguma outra forma. Ao criar um objeto a partir de um construtor do tipo primitivo, esse objeto é uma "casca" em volta do valor, então é possível manipular esse objeto e retornar um primitivo. 

````js
var doze = new Number(12)
var quinze = doze + 3

console.log(quinze) // 15

console.log(typeof doze) // "object"
console.log(typeof quinze) // "number"
````

Quando crio um objeto a partir de um construtor de um tipo primitivo, se for necessário usar o tipo primitivo ao invés do objeto, é possível. 

Ele pega o valor, cria uma cópia desse valor, usa da forma que deve ser usado e depois descarta o valor que foi criado apenas para ser usado.

# Conceito 3 - Tipos de valores e tipos de referência

No JS temos tipos primitivos, e o resto são objetos. 

Tipos primitivos são tipos de valor.

Os objetos restantes como array, função e etc... são tipos de referência.

---

### Tipo Primitivo

Quando atribuímos um tipo primitivo a uma variável, é criado um local na memória que contém aquele valor e é **única e exclusivamente** associado a essa variável. 

Ex:

````js
let x = 10; // mem.0001 = nome e X e valor é 10
let y = x;
x = 20; 

console.log(x) // 20
console.log(y) // 10
````

Quando atribuímos um valor que já está em memória para uma variável que está sendo criada, a outra variável que está sendo criada **atribuímos apenas o valor dela**. 

`x` continua na memória tendo seu valor 10. `y` recebe uma cópia do valor de `x` e então atribuímos a `x` o novo valor de 20.

Quando o tipo é primitivo, atribuímos o valor e não a referência na memória.

---

### Tipo de referência

Diferente dos tipos de valores, que associam diretamente um valor a variável. Quando criamos um objeto, array ou função e atribuímos a uma variável estamos dando a essa variável apenas uma referência desse objeto na memória.

````js
let x = { valor: 10 }
let y = x

x.valor = 20

console.log(x) // [object Object] { valor: 20 }
console.log(y) // [object Object] { valor: 20 }
````

Nesse exemplo, `x` não é um objeto com o valor 20, `x` é apenas um ponteiro que tem o endereço da memória onde contém esse objeto. 

Vai existir um local na memória, esse local na memória vai receber o valor do objeto. 

Quando criamos a variável, não atribuimos a ela o valor e sim o local na memória. 

````bash
local mem.0002 = { valor: 10 }
variável x = mem.0002
variável y = x = mem.0002
````

Se um valor muda, seja em uma ou outra, como ambas apontam para o mesmo endereço e esse endereço aponta para o objeto a mudança acontece para ambos quando retribuímos `20` ao valor. 

Logo, mesmo se o valor fosse mudado em `y`, ambas receberiam o mesmo valor, pois estão tendo como referência o mesmo local na memória. 

````js
let x = { valor: 10 }
let y = x

x.valor = 20
y.valor = 30

console.log(x) // { valor: 30 }
console.log(y) // { valor: 30 }
````

Logo, objetos são tipos de referência. Uma variável que recebe um objeto apenas guarda uma referência desse objeto e não o valor do objeto. 

# Conceito 4 -

Coerção é quando o JavaScript tenta converter um tipo de um valor para um tipo esperado. 

Com a coerção só é possível obter 3 tipos de valor: string, number ou boolean.

As principais coerções:

1. `string` - `number` - Converteu a string para number e subtraiu.

````js
'10' - 5 // 5
````

2. `string` + `number` - Concatenou os valores

````js
'10' + 5 // 105
````

3. `boolean` + `number` - Como true é 1, ele somou 1 + 1 = 2

````js
true + 1 // 2
````

4. `boolean` - `number` - Como false é 0, ele somou 0 + 1 = 1

````js
false + 1 // 1
````

5. `array` + `object` - Retornou `[object Object]`

````js
[] + {} // "[object Object]"
````

6. `array` + `array` - Retornou uma string vazia

````js
[] + [] // ""
````

### Coerção Implícita

Métodos implícitos - Quando não especificamos para para o JavaScript qual valor queremos que ele converta. 

1. +`string` - se a string for um número converte para `number`

````js
+'5' // 5 - number
````

2. `number` + `string` vazia = número em string

````js
5 + '' // '5' - número em string
````

3. `number` e `string` = permanece o segundo valor, independentemente se esse valor for número ou string

````js
123 && 'oi' // 'oi' - permaneceu o segundo valor
'oi' && 123 // 123 - permanece o segundo valor independentemente do tipo
````

4. `null` ou `boolean` - permanece o segundo valor

````js
null || true // true - permanece o que for verdadeiro
````

### Coerção Explicita

Métodos explícitos - Quando afirmamos que queremos converter um valor em outro tipo de valor. 

É uma forma mais legível porque sabemos que aquele valor está sendo convertido para um construtor que está sendo usado. 

````js
Number('50') // 50
String(50) // '50'

Boolean('50') // true
Boolean('') // string vazia = false
Boolean(50) // true
Boolean(0) // false
Boolean(-10) // número negativo = true
````

O JavaScript é Duck type - *Se anda como pato e fala como pato, só pode ser um pato* - Isso quer dizer que o JS não vai buscar  validar os tipo que estão sendo usados. 

JavaScript é fracamente tipada. Não precisamos especificar os tipos.

Já o TypeScript é um super conjunto tipado do JavaScript que compila para JavaScript puro. 

Exemplo:

````typescript
let x: number = 1 // ou seja, x é do tipo number

x = '1' // erro
````

Caso tente passar outro valor diferente de `number` para `x` ele apresenta um erro. 

Na tipagem estática, é necessário declarar quais dados poderão ser associados a cada variável antes de sua utilização.

Já na tipagem dinâmica não exigem declarações de tipos de dados. Nesse caso, a linguagem é capaz de alterar o tipo durante a compilação ou execução do programa.

Quando a tipagem é forte a linguagem não permite um mesmo dado ser tratado como se fosse de outro tipo.

Já a tipagem fraca é quando conseguimos criar essas coerções implícitas. 

O ideal é não deixar o próprio JS fazer essas coerções. 

# Conceito 5 - Comparação de valores e tipos 

Muita gente não sabe a diferença entre `==` e `===`.

Com `==`, ele checa se os tipos são iguais. 

````js
5 == '5' // true
5 == 5 // true
````

Se não são iguais ele converte um dos tipos e checa novamente. 

O que acontece por trás do capô é que ele primeiro usa o sinal triplo para saber se são iguais em tipo e valor. 

Se não forem iguais, então ele verifica se estamos comparando `null` com `undefined`. Se for ele retorna true.

Se não for esse caso então ele verifica se estamos comparando número com `string`, se for ele converte a `string ` em número, depois volta para o começo do processo. 

Repetindo tudo novamente ele verifica se estamos comparando `boolean` com `number` se for ele converte o `boolean` em número 0 ou 1. 

Depois compara se for `boolean` com `string`, se for converte a `string` para `boolean`.

Se não for nenhum acima, ele verifica se é um `objeto` ou tipo primitivo. Se for ele converte o `objeto` para uma `string` e repete o primeiro passo novamente. 

"por baixo dos panos", ele usa o comparador triplo para fazer tudo isso. 

````js
5 === '5' // false
5 === 5 // true
````

A dica é evitar usar o operador `==` e usar apenas `===` por causa da coerção. 

O operador triplo `===` compara valor e tipo. Sendo assim, para retornar `true` é necessário que os tipos das variáveis sejam o mesmo e o valor também. Não passa por coerção. 

A dica do autor é que usemos o `typeof` para fazer validações. 

# Conceito 6 - Escopo global, de função, do bloco e léxico

Escopo é a acessibilidade das variáveis, funções e objetos em uma parte do código enquanto ele está sendo executado. 

No JS temos 3 tipos de variáveis: `var`, `let` e `const`.

`var` respeita o escopo da função, porém fora de uma função ele pertence ao escopo global.

````js
var nome = 'José'

console.log(nome) // "José"

function funcao(){
  var sobrenome = 'da Silva'
}

console.log(sobrenome) // sobrenome is not defined

if (nome === 'José') {
  var idade = 20
}

console.log(idade) // 20
````

Já `let` e `const` respeitam o escopo de bloco, ou seja, só estão disponíveis entre um abrir e fechar de chaves `{...}`.

````js
var nome = 'José'

if (nome === 'José') {
  const idade = 20
}

console.log(idade) // idade is not defined
````

O **escopo léxico** significa que quando temos funções aninhadas, ou seja, funções dentro de funções, as variáveis das funções pai estão disponíveis nas funções filho. 

````js
function pai() {
  var nome = 'José'
  
  function filho() {
    nome = 'Maria'
  }
}
````

Esse tipo de situação é possível porque a função `filho` tem acesso a tudo o que foi declarado na função pai. 

Não é possível acessar uma variável de filho para pai.

````js
function pai() {
  
  function filho() {
    var nome = 'José'
  }
  
  console.log(nome) // nome is not defined
  
}
````

O `escopo de função` funciona da mesma forma. O que é criado dentro da função não está disponível fora dela. Mas o que é criado fora da função fica disponível para ser usado dentro dela.

O `escopo global` que quando declaramos algo que ficara disponível para todo o código, se no navegador é o objeto `window`, ou seja, a janela do navegador. Já no NodeJS existe o objeto `global`.

Ao alterar uma variável global ela é alterada para a aplicação toda. 

````js
var nome = 'João'

function exibirNome() {
  console.log(nome) // 'João'
}
````

Variável `let` declarada dentro de um bloco não fica disponível fora do bloco.

````js
function bloco() {
  if(true) {
    let teste2 = 'teste 2'
  }
  console.log(teste2) // teste2 is not defined
}
````

`var` declarada fora do bloco fica disponível dentro do bloco, é possível até mesmo manipula-lá. 

````js
function bloco() {
  var teste
  if(true) {
    teste = 'teste bloco'
  }
  console.log(teste) // "teste bloco"
}

bloco()
````

# Conceito 7 - Expressão e Declaração

Existe uma diferença entre os dois. Uma expressão pode se comportar como declaração mas uma declaração não pode se comportar como expressão.

Expressão é todo o pedaço de código que retorna um valor único. 

Uma expressão não muda o estado de algo.

````js
console.log(1 + 1) // 2
console.log(Math.random()) // 0.3190358326370617
````

Declarações são pedaços de código que fazem algo, retornam uma ação. 

````js
function soma(a, b) {
  return a + b
}

soma(1, 3) // 4
````

Tudo o que for uma ação é considerado uma declaração. Logo, não posso passar uma declaração como um valor em uma declaração. Mas posso passar uma expressão dentro.

````js
function soma(a, b) {
  return a + b
}

soma(1, Math.random()) // 1.058350169276787
````

Onde é esperado uma expressão, o JS não aceita uma declaração.

# Conceito 8 - IIFE e Namespaces

iife (immediately invoked function expression) - São expressões de funções imediatamente invocadas. 

Como se cria uma função em JavaScript:

````js
function alerta() {
  alert('Olá mundo!')
}

alerta()
````

É possível atribuir uma função anônima a uma variável.

````js
const alerta = function() {
  alert('Olá mundo!')
}

alerta()
````

A IIFE funciona da seguinte forma, ela recebe uma exclamação na frente, e no final abre e fecha de parentesis `()`.

````js
!function(){
  alert('Olá mundo!')
}()
````

**OBS:** No final ela é invocada.

**OBS:** Ao encontrar a palavra-chave `function`, o JS espera que seja definida uma função, ou seja, que ela receba um nome. A exclamação `!` diz para o JS tratar o que vem a seguir como uma expressão. 

Essa função é executada apenas 1x, só será executada novamente se o código for executado novamente.

Resumindo, uma IIFE é uma função executada automaticamente assim que é lida.

Outra forma de escrever uma IIFE:

````js
(function(){
  alert('Olá mundo!')
}())
````

OBS: Mesmo que tenha um nome, ela roda assim que lida porque a exclamação na frente diz que ela é uma expressão.

````js
!function alerta() {
  alert('Olá mundo!')
}()
````

Um exemplo prático para uso da IF é quando buscamos um valor no banco de dados assim que inicializa a aplicação.

---

Namespace é um pedaço de código que serve para organizar o código em pequenos grupos.

Ao invés de deixar tudo solto, o que pode fazer com que uma variável colida com outra.

Um exemplo comum é quando uma biblioteca tem uma função com um determinado nome, e crio função com o mesmo nome da função da biblioteca o que acaba ou quebrando o meu código ou o código da biblioteca.

Para evitar esse tipo de problema usamos essa estratégia de namespace.

Dessa forma, os métodos não fazem parte do escopo global e sim do namespace de dados.

Nesse exemplo abaixo, a variável contador fica restrita ao bloco, e não no objeto global, caso em uma biblioteca exista outra variável contador, ela não será retribuída.

Assim como o método incrementar, ele fica privado não colidindo com o possíveis métodos de uma biblioteca:

````js
const dados = (function(){
  let contador = 0
  return {
    incrementar() {
      contador += 1
      return contador
    }
  }
}())

console.log(dados.contador) // undefined
console.log(dados.incrementar()) // 1
console.log(dados.incrementar()) // 2
console.log(dados.incrementar()) // 3
````

Ou seja, a variável contador fica privada. 

# Conceito 9 - Módulos

Módulos são pedaços de código encapsulados que podem ser importados e expõe alguns métodos para serem utilizados.

Por exemplo:

Temos aqui algumas constantes:

````js
const value = 5;

const alertHelloWorld = function() {
  alert('Hello World!')
}

const multiply = function(x) {
  return x * value
}
````

Para exporta-las de modo que outro arquivo tenha acesso a elas, usamos a palavra chave `export` e então, é possível através de um objeto, um array ou apenas uma variável. 

Exportando como array:

````js
export default [ alertHelloWorld, mutilply ]
````

Exportando como objeto:

````js
export { alertHelloWorld, mutilply }
````

Exportando variável ou função separada:

````js
export default alertHelloWorld
````

A palavra-chave `default` quer dizer que aquela será a exportação padrão daquele documento. 

Observe que ao exportar um objeto, não usamos a palavra `default` isso acontece porque é exportado mais de um objeto ao mesmo tempo e quando for importado, ele poderá ser desestruturado. 

Já ao exportar um array, usamos `default` porque é apenas 1 elemento com vários índices sendo exportado. 

É possível exportar mais de uma variável, porém apenas uma pode ser `default`.

Para acessar um array exportado em outro documento:

````js
import utilidades from './utilities.js'

console.log(utilidades) // retorna um array com as 2 variáveis exportadas

// para acessar as funções exportadas:
console.log(utilidades[0])
console.log(utilidades[1])

// para executar as funções exportadas:
console.log(utilidades[0]()) // executa o alerta 'hello world'
console.log(utilidades[1](5)) // faz a multiplicação, observe como o argumento é passado
````

Para acessar um objeto exportado de outro documento:

````js
import { alertHelloWorld, mutilply } from './utilities.js'

console.log(alertHelloWorld()) // aqui executa o método
console.log(mutilply(5)) // retorna 25 - passamos o argumento para outra função.
````

Outra forma de importar um objeto é usando o `*`. Em programação o asterisco significa "tudo". Então, podemos dizer para ele importar "tudo"... como ... "utilitários". Dessa forma, através de `utilitarios` podemos ter acesso a todos os métodos e propriedades exportados do outro documento.

````js
import * as utilitarios from './utilities.js'

console.log(utilitarios.mutilply(5)) // 25
utilitarios.alertHelloWorld() // exibe alerta
````

Para importar quando é uma única função:

````js
import alertHelloWorld from './utilities.js'

alertHelloWorld() // exibe o alerta
````

Uma observação interessante ao importar um método ou propriedade separado é que podemos dar qualquer nome, não necessariamente precisa ser o mesmo que o nome de exportação padrão.

````js
import helloWorld from './utilities.js'

helloWorld() // exibe o alerta
````

---

`Object Shorthand`, é quando vamos passar uma propriedade que tem o mesmo valor do nome que estou passando. É possível colocar apenas o valor da propriedade.

````js
export { valor: valor }
````

````js
export { valor }
````

# Conceito 10 - Fila de eventos e Pilha de Eventos

O JavaScript é uma linguagem de programação assíncrona e single thread.

Single thread - Processa uma requisição por vez. Tudo sequencialmente.

Assíncrona - Feito com `call backs` e `promisses` - Enquanto essas chamadas não retornam ele fica livre para fazer outra coisa no mesmo nível da camada. 

Uma pergunta que surge, é se o JS é single thread, como ele consegue executar algo enquanto outra chamada não foi finalizada? 

Ou seja, se ele é single thread, como ele consegue ser assíncrono?

Ele consegue isso através do `event loop`. Para entender o `Event Loop` é necessário entender antes a fila de mensagens.

Os browsers tem as suas Web APIs, como é o caso do DOM, Ajax, setTimeout os Event Listeners...

Quando essas APIs são executadas, o JS executa a chamada, mas  callback é colocado em um local separado, um local chamado `Message Queue` ou `Event Queue`, que é a fila de mensagens, uma fila de eventos.

Quando a `Call Stack` está limpa, ou seja, nada mais para executar, o `Event Loop` entra em ação. Ele sempre fica rodando vendo o que está na fila de execução a `Event Queue`. Como é uma fila, o primeiro que entra é o primeiro que sai. Logo, ele pega o `Call back` e coloca novamente para ser executado. 

Um exemplo, um `setTimeout`. 

O `setTimeout` entra na `Call Stack`, ou seja, ele é executado na hora. Porém, o seu callback é colocado no `Event Queue`, na fila de eventos. 

Código todo:

````js
setTimeout(() => {
  console.log('teste')
}, 0)
````

Primeiro executa a chamada:

````js
setTimeout()
````

Depois ele coloca o callback, que é o que está dentro do `setTimeout` no `event queue` que é a fila de eventos, também chamada de fila de mensagens, só depois que a `Call Stack` estiver limpa que ele executa o `callback` que é o que estava dentro do `setTimeout`:

`````js
() => {
  console.log('teste')
}, 0
`````

---

Existem códigos que bloqueiam a execução. Exemplo: `for` que demora 5 segundos para acontecer. Enquanto ele está rodando, nada mais acontece porque a thread é bloqueada. 

Porém, temos eventos assíncronos, como vistos anteriormente. Eles são executados mas os seus `callbacks` são colocados em uma fila de mensagens, que espera a `Call Stack` estar limpa para ser executada.

Nesse exemplo abaixo, teremos um `for` e um `setTimeout`. O `for` bloqueia a execução, ou seja, ao entrar no bloco ele só deixa executar a linha de baixo após ele ter finalizado. 

Diferente do `setTimeout` que é assíncrono, ou seja, o seu callback é colocado na fila de mensagens, e só depois que toda a `Call Stack` estiver limpa que ele é executado.

````js
console.log('A') // colocado na Call Stack

for(let i = 1; i <= 3; i++) {
  console.log('B - ' + i) // colocado na Call Stack
}

console.log('C') // colocado na Call Stack

setTimeout(() => {
  console.log('D') // colocado na Event Queue
}, 0)

console.log('E') // colocado na Call Stack

// "A"
// "B - 1"
// "B - 2"
// "B - 3"
// "C"
// "E"
// "D"
````

Observe que na execução, o `D` é executado por último. Isso acontece porque todo o código é colocado na `Call Stack`, ou seja, é executado imediatamente, mas como o `D` é colocado em um `callback`, ele é executado só após a `Call Stack` estar limpa. 

Quando a `Call Stack` fica limpa, o `Event Loop` verifica na fila de mensagens, ou seja a `Event Queue` para ver se tem algo para executar, ele vê que ainda tem um `console.log('D')` e então executa. 

Por isso que tudo o que é colocado no `Event Queue`, ou seja, na fila de mensagens, sempre é executado por último. 

Dessa forma o JS consegue trabalhar de forma assíncrona e single thread.

# Conceito 11 - setTimeout, setInterval, requestAnimationFrame

`setTimeout` - Usado para executar um código apenas uma vez, após determinado tempo.

Ele recebe 2 parâmetros. O primeiro é uma função `callback`, e o segundo é o tempo em mili`ssegundos. 

````js
setTimeout(() => {
  alert('Olá mundo!')
}, 1000)
````

É possível colocar essa função `callback` de forma externa:

````js
const alerta = () => {
  alert('Olá mundo!')
}

setTimeout(alerta, 1000)
````

A dica aqui é que é possível passar parâmetros para dentro do `setTimeout`.

Porém, para passar esses parâmetros, passamos após o parâmetro de tempo.

````js
const darOi = (nome) => {
  alert('Oi ' +  nome)
}

setTimeout(darOi, 2000, 'João')
````

É possível dessa forma passar vários parâmetros.

É possível cancelar um `setTimeout`. Colocamos dentro de uma variável, e então limpamos a variável através do `clearTimeout`.

````js
const darOi = (nome) => {
  alert('Oi ' +  nome)
}

const timeOut = setTimeout(darOi, 3000, 'João')

setTimeout(() => {
  clearTimeout(timeOut)
}, 1500)
````

Nesse exemplo, o timeOut é ativado para dar o aleta após 3 segundos, porém uma outra função usando o `clearTimeout` limpa o tempo aos 1.5 segundos.

---

`setInterval` - continua executando o código a partir do tempo passado. 

**OBS:** A execução não é imediata.

````js
setInterval(() => {
  console.log('Oi')
}, 1000)
````

É possível limpar a execução do `setInterval`, após um determinado tempo. Nesse exemplo, vamos limpar após 5 segundos, e o método que faz isso é o `clearInterval`.

````js
const intervalo = setInterval(() => {
  console.log('Oi')
}, 1000)

setTimeout(() => {
  clearInterval(intervalo)
}, 5000)
````

**OBS:** Como a execução não é imediata, o código é executado 4 vezes. 

---

O `setTimeout` e o `setInterval`, são muito usados por desenvolvedores front-end para criar animações. Porém, não é o ideal para fazer alguns tipos de animações.

Algumas animações, para que fiquem suaves, desenvolvedores usam 60 quadros por segundo. 

Porém, para fazer 60 quadros por segundo usando o `setInterval` não é performático, consome muita CPU. 

Existe um método chamado `requestAnimationFrame()`. Basicamente, ele executa o método toda vez que o browser está apto a fazer o repaint (repintura) da tela. 

`repaint` é a renderização da DOM. Quando ela for acontecer, o método é acionado novamente. 

[Leia sobre o requestAnimationFrame no site da Mozila](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/requestAnimationFrame)

````js
let contador = 0

function animacao() {
  contador += 1;
  console.log(contador)
  loop = requestAnimationFrame(animacao)
}

var loop = requestAnimationFrame(animacao)

setTimeout(() => {
  cancelAnimationFrame(loop)
}, 4000)
````

**OBSERVAÇÕES**: Dentro da função `animacao` passamos novamente `loop = requestAnimationFrame(animacao)` pois ele é executado recursivamente, ou seja, o próprio método se chama novamente. 

Sempre que acontecer o `repaint`, ele vai executar `animacao`. 

Também observe que ele executa todos os `repaints`.

Através de um `setTimeout` configurado para 4 segundos, cancelamos a animação. 

Ele também tem o seu método para cancelar, é o `cancelAnimationFrame`, nele passamos a variável onde o `requestAnimationFrame` foi colocado.

# Conceito 12 - Operadores Bitwise

Tudo para um computador são 0 e 1. Ele usa dígitos binários. O computador codifica os dígitos. Mapeia as combinações de dígitos para caracteres correspondentes. 

Existe uma forma de descobrir a representação binária de um número no JavaScript:

````js
Number(77).toString(2) // "1001101"
````

Passamos a base `2` que é a usada para converter números em binários.

Não dá para usar binário diretamente no JavaScript, para usar é necessário usar a função `parseInt()`, essa função recebe 2 argumentos o primeiro é o binário e o segundo é a base do binário.

````js
parseInt('1001101', 2) // 77
````

`Operadores Bitwise` - São parecidos com operadores lógicos, eles trabalham em cada bit dos caracteres que vamos comparar.

Por exemplo: 

Operador lógico de 'ou' - `||`

Operador 'ou' bitwise - `|`

Ao usar o operador bitwise 'ou', ele chega cada um dos bits da esquerda para a direita e se em alguma posição for 1, ele retorna 1 automaticamente para aquela posição. 

````js
parseInt('0000001', 2) // 1
parseInt('0000010', 2) // 2
````

Usando o `|` 'ou' ele vai comparar:

````js
// 0000001 = 1
// 0000010 = 2
// 0000011 = Resposta do ou = 3
````

Logo:

````js
console.log(1 | 2) // 3
console.log(parseInt(11, 2)) // 3
````

Observe que 3 em binário é `0000011`. Porém, usando o `parseInt` não é necessário colocar todos os 0 antes do primeiro 1, ou seja, todos os 0 antes do 1 podem ser ignorados. 

Com o operador `&` em bitwise ele retorna 1 onde em binário a comparação der 1. 

````js
// 0000010 = 2
// 0000011 = 3

// 0000010 = Resposta = 2
````

````js
parseInt('0000010', 2) // 2
parseInt('0000011', 2) // 3

console.log(2 & 3) // 2
````

---

Esse não é um conceito muito usado na prática mas é importante aprender a manipular os bits em JS caso encontre algum código fazendo esse tipo de manipulação.

# Conceito 13 - Factorie

## Factories

Uma `Factorie`, é uma função que retorna um objeto. 

Lembrando que no JS qualquer função pode retornar um objeto e quando ela retorna sem usar a palavra-chave `new` então ela é uma `factorie`.

````js
const Mamifero = function(nome, som) {
  return {
    nome,
    som
  }
}
````

Então, se a necessidade de `new`, podemos criar novos objetos:

````js
const cachorro = Mamifero('Cachorro', 'Au au')
const gato = Mamifero('Gato', 'Miau')

console.log(cachorro)
// [object Object] {
//  nome: "Cachorro",
//  som: "Au au"
// }

console.log(gato)
// [object Object] {
//  nome: "Gato",
//  som: "Miau"
// }
````

Uma curiosidade, é que podemos ainda sim criar o objeto com `new`:

````js
const cachorro = new Mamifero('Cachorro', 'Au au')
console.log(cachorro)

// [object Object] {
//  nome: "Cachorro",
//  som: "Au au"
// }
````

Outros pontos importantes, é em relação ao `this`. Ajuda a não confundir quando for usar. E também em relação a herança.

São pontos que costumam confundir quando se trata de classes. 

## Classes

Antes do ES6 para se usar classes no JS era necessário usar funções construtoras.

Apesar de a partir do ES6, termos uma sintaxe para trabalhar com classes, o que acontece por trás ainda é uma `syntactic sugar` do que acontecia nas funções construtoras.

A vantagem é que ainda sim, fica muito mais fácil de ser lido.

````javascript
class Automovel {
  constructor(marca, modelo, veiculo) {
    this.marca = marca
    this.modelo = modelo
    this.veiculo = veiculo
  }
  descricaoAuto() {
    return 'Este é um ' + this.veiculo + ' da marca ' + this.marca + ' modelo ' + this.modelo
  }
}

class Moto extends Automovel {
  constructor(marca, modelo, veiculo, rodas) {
    super(marca, modelo, veiculo)
    this.rodas = rodas
  }
  descricaoMoto() {
    return 'Esta é uma ' + this.veiculo + ' modelo ' + this.modelo + ' marca ' + this.marca + ' com ' + this.rodas + ' rodas'
  }
}

const mustang = new Automovel('Ford', 'Mustang', 'Carro')
console.log(mustang.descricaoAuto())
// "Este é um Carro da marca Ford modelo Mustang"

const bonneville = new Moto('Triumph', 'Bonneville', 'Moto', 2)
console.log(bonneville)
// [object Object] {
//  marca: "Triumph",
//  modelo: "Bonneville",
//  rodas: 2,
//  veiculo: "Moto"
// }

console.log(bonneville.descricaoMoto())
// "Esta é uma Moto modelo Bonneville marca Triumph com 2 rodas"
````

Aqui temos um construtor de classe. Por convenção, a primeira letra é maiúscula. 

Dentro temos o método `constructor`, que é por onde passamos os dados para a construção do objeto. 

Quando colocamos `this.modelo`, estamos criando uma variável dentro do contexto da classe chamada `modelo`.

Uma outra forma de criar classes é colocando ela em uma variável:

````js
const Automovel = class {}
````

Lembrando que uma classe é um objeto. Se não é tipo primitivo, é objeto. 

---

A herança é quando conseguimos receber métodos ou propriedades de uma classe que está acima.

Para trabalhar com herança entre classes, podemos usar a palavra `extends` e então passamos o nome da classe.

Ao estender uma classe também temos o método `super()`. É um método colocado dentro do construtor da classe estendida para chamar tudo o que foi declarado no construtor da classe pai.

Outra forma de declarar a extensão da classe:

````js
const Moto = class extends Automovel {}
````

# Conceito 14 - this, call, apply e bind

`this` referencia o atual contexto onde ele está sendo utilizado. 

Fora de funções e métodos, o `this` representa o escopo global. Quando no navegador representa o `Window`.

````js
this.nome = 'teste'

console.log(window.nome) // teste
````

Dentro de uma função, o `this` pode representar contextos diferentes. Simplesmente dentro da função, o `this` faz referência a `Window`. Mas se a função for um método de um objeto, o `this` faz referência a esse objeto pai. 

````js
function teste() {
  return this
}

teste()
// Window
````

Uma função dentro de um objeto, `this` faz referência ao objeto:

````js
const objeto = {
  funcao1: function() {
    console.log(this)
  }
}

console.log(objeto.funcao1())
// objeto {funcao1: ƒ}
````

---

Algumas vezes é necessário dentro da função acessar o escopo Global e não o objeto pai.

Uma das formas de fazer isso é usando uma `arrow function`:

````js
const funcao2 = () => console.log(this)

const utilitarios = {
  funcao: funcao2
}

utilitarios.funcao
// Window 
````

---

## Call, Apply e Bind

Esses métodos são usados para controlar a invocação de uma função. 

Métodos `call` e `apply` podem ser usados para invocar uma função imediatamente. O `bind` pode ser usado para invocar uma função depois. 

## Call

Permite invocar uma função alterando o contexto de `this` dessa função passando qual contexto você quer na execução dele. 

No exemplo a baixo, `this` retorna `undefined`. 

````js
const saudacao = function() {
  console.log(this)
}

saudacao() // undefined
````

Para que eu use a própria função como contexto de `this` para ela mesma é possível usar o método `call`:

````js
const saudacao = function() {
  console.log(this)
}

saudacao.call(saudacao)
// ƒ () {
//   console.log(this)
// }
````

Nesse exemplo mudamos o contexto de `this` em `descricao` para `dados`.

Os parâmetros passamos como argumentos seguintes ao `call`:

````js
const dados = { nome: 'João' }

const descricao = function(idade, sexo) {
  return `Seu nome é ${this.nome}, sua idade é ${idade} e seu sexo é ${sexo}`
}

descricao.call(dados, 25, 'masculino')
// Seu nome é João, sua idade é 25 e seu sexo é masculino
````

## Apply

A diferença entre `Apply` para `Call` é que o `Apply` recebe os argumentos através de um array. 

````js
const dados = { nome: 'Ana' }

const args = [30, 'feminino']

const descricao = function(idade, sexo) {
  return `Seu nome é ${this.nome}, sua idade é ${idade} e seu sexo é ${sexo}`
}

descricao.apply(dados, args)
// Seu nome é Ana, sua idade é 30 e seu sexo é feminino
````

## Bind

`bind` ele cria uma nova função a partir de outra função. 

O que precisamos fazer é passar o contexto do `this` que queremos que essa função nova receba.

````js
const dados = { nome: 'Maria' }

function descricao(idade) {
  console.log(`Seu nome é ${this.nome}, sua idade é ${idade}`)
}

const novaDescricao = descricao.bind(dados)

novaDescricao(25)
// Seu nome é Maria, sua idade é 25
````

Diferente do `apply` e do `call` que são executados imediatamente, o `bind` é executado apenas quando queremos.

# Conceito 15 - New, constructor e instanceof

O operador `new` - Cria um novo objeto vazio onde o contexto de `this` será o escopo do novo objeto. 

Nesse novo objeto ele cria uma propriedade chamada `__proto__` que aponta para as propriedades da função construtora que foi usada para criar esse novo objeto. Ele adiciona um `return this` no final da função construtora para que o objeto novo receba o `this` criado na função construtora.

Por exemplo, aqui temos uma função construtora:

````js
function User(name) {
  this.name = name
  this.log = function() {
    console.log(this)
  }
}
````

Ao criar a função, ele implicitamente cria o objeto vazio de `this`:

````js
function User(name) {
  // this = {}
}
````

E então no final dela, após adicionar os métodos e propriedades ele retorna o `this` implicitamente, não estamos vendo mas é isso o que acontece ao criar uma função construtora de objetos.

````js
function User(name) {
  // this = {}
  // Métodos e propriedades
  return this
}
````

---

Observe que ele cria uma propriedade chamada `__proto__` que aponta para as propriedades da função construtora que foi usada para criar esse novo objeto.

Logo ao criar um novo objeto e acessar o `proto` teremos o retorno do objeto criado:

````js
function User(name) {
  this.name = name
}

const maria = new User('Maria')

console.log(maria.__proto__)
// {nome: "Maria", constructor: ƒ}
````

Podemos inclusive mudar o construtor:

````js
maria.__proto__.constructor('João')
````

````js
console.log(Usuario.prototype)
// {nome: "João", constructor: ƒ}
````

---

Em relação ao `constructor`, a principal função dele é implementar código que pode ser reutilizado na criação de novos objetos.

Além dos construtores que podemos criar, o JS já vem com construtores embutidos. 

Construtor de `String`, `Boolean` e `Number` são construtores embutidos.

````js
const andre = 'André'

console.log(andre)
// André
````

````js
const alex = new String('Alex')

console.log(alex)
// String {"Alex"}
````

Um ponto importante de se observar, é que o construtor traz detalhes da `String`:

````js
// 0: "A"
// 1: "l"
// 2: "e"
// 3: "x"
// length: 4
````

Através do `alex.__proto__` podemos ver todos os métodos de `String`, que podemos usar com qualquer `string` no JavaScript.

São exatamente os mesmos métodos que temos em `andre.__proto__` que não foi criado a partir de um construtor.

Com isso podemos entender o que acontece ao criar uma variável com o nome. 

Basicamente ele pega o conteúdo dela, e através de um construtor cria um novo objeto, utiliza o método ou retorna a propriedade, depois ele limpa.

Por exemplo:

````js
const felipe = 'Felipe'

console.log(felipe.length) // 6
````

---

Qualquer função pode ser usada como uma função construtora, desde que seja usado a palavra-chave `new` antes de atribuir a uma variável. 

Se não for usado o `new`, o que estaremos fazendo é atribuindo a uma variável a referência de uma função construtora. Qualquer alteração na variável altera a função construtora uma vez que é passada a referência dela.

É uma convenção usar a primeira letra maiúscula. 

---

É possível verificar se uma variável foi criada a partir de uma função construtora.

Podemos usar o operador `instanceof` para comparar.

````js
function Usuario(nome) {
  this.nome = nome;
}

const matheus = new Usuario('Matheus')
console.log(matheus instanceof Usuario) // true

const andre = Usuario('André')
console.log(andre instanceof Usuario) // false
````

Nesse exemplo, a constante `matheus` é uma instância do construtor `Usuario`. 

Assim como podemos verificar outros construtores também:

````js
const joao = new String('João')
console.log(joao instanceof String) // true

const numeros = new Number(12345)
console.log(numeros instanceof Number) // true

const verdadeiro = new Boolean(true)
console.log(verdadeiro instanceof Boolean) // true
````

# Conceito 16 - Prototype Inheritance e Prototype Chain

Toda função tem uma propriedade chamada `prototype`, que por padrão vem vazia mas podemos adicionar propriedades a ela.

`prototype` é o protótipo daquela função, podemos criar uma espécie de herança de um objeto para o outro.

Essa herança é chamada de `prototype chain`, que é uma cadeia de protótipos. 

Ao criar um novo objeto a partir de uma função construtora, o prototype da função construtora é passado para o novo objeto como uma referência.

````js
const Usuario = function(nome, idade) {
    this.nome = nome;
  	this.idade = idade
}
````

 Ao criar um novo objeto com a função construtora, o novo objeto herda seus métodos e propriedades. 

````js
const carla = new Usuario('Carla', 30)

carla.nome // 'carla'
carla.idade // 30
````

Ao adicionar um novo método ao protótipo do construtor, o novo objeto criado continua herdando propriedades e métodos:

````js
Usuario.prototype.pegarDescricao = function() {
    return 'Nome: ' + this.nome + ' Idade: ' + this.idade
}

carla.pegarDescricao()
"Nome: Matheus Idade: 30"
````

Quando tentamos acionar o método `pegarDescricao()`, ele primeiro procura no construtor, se ele não achar esse método no construtor ele procura no protótipo.

`pegarDescricao()` foi criado no `prototype` do construtor, se tornou acessível para o novo objeto:

````js
Usuario.prototype
// {pegarDescricao: ƒ, constructor: ƒ}

carla.__proto__
// {pegarDescricao: ƒ, constructor: ƒ}
````

Nos métodos diretos, não tem o método `pegarDescricao`:

````js
console.log(carla)
// Usuario {nome: "Carla"}
````

Resumindo, tudo o que foi criado na função construtora, os objetos criados a partir dela vão herdar.

# Conceito 17 - Mais formas de criar objetos

`Object.create()`

Esse método aceita 2 argumentos. O primeiro argumento é o `prototype` que o novo objeto irá herdar. 

Agora passando o `prototype` de algum objeto:

````js
let Aluno = function(name, age) {
  this.name = name
  this.age = age
}

const gabriel = new Aluno('Gabriel', 13)
const novoGabriel = Object.create(gabriel)
````

Um ponto importante de ser observado aqui é que aluno se torna um novo objeto, mas ele continua sendo uma instância do construtor `Aluno`, mesmo tendo sido criado a partir do objeto `gabriel`.

Mesmo o objeto `novoGabriel` tendo sido alterado na idade para 15, ainda sim ele continua sendo uma instância do construtor `Aluno`.

````js
novoGabriel.age = 15

console.log(gabriel)
// { age: 13, name: "Gabriel" }

console.log(novoGabriel)
// { age: 15, name: "Gabriel" }

console.log(novoGabriel instanceof Aluno)
// true
````

Se o objeto criado com `new` for alterado, a nova instância criada com o `Object.create()` também é modificada.

````js
let Aluno = function(nome, serie) {
  this.nome = nome
  this.serie = serie
}

const carlos = new Aluno('Carlos', '7ª Série')
const novoCarlos = Object.create(carlos)

carlos.serie = '8ª Série'
console.log(carlos)
// { nome: "Carlos", serie: "8ª Série" }

novoCarlos.nome = 'Carlos Henrique'
console.log(novoCarlos)
// { nome: "Carlos Henrique", serie: "8ª Série" }
````

A única forma de não criar essa instância é criando com o construtor separado, o que não seria uma instância mas um novo objeto em si.

````js
const novoGabriel = Object.create({name: 'Gabriel', age: 16})

console.log(novoGabriel instanceof Aluno)
// false
````

---

O segundo argumento são as propriedades desse objeto, são as chamadas <u>propriedades descritoras</u>, elas são opcionais.

Lembrando que ao adicionar algo no `prototype`, ele não aparece diretamente na propriedade, mas o método existe.

Aqui vamos passar o `prototype`. 

`````js
// criando a factory function
let Aluno = function(nome, serie) {
  this.nome = nome
  this.serie = serie
}

// aqui adicionamos um método ao prototype
Aluno.prototype.resumoAluno = function() {
  return this.nome + ' - ' + this.serie
}

// passando o prototype para o Object.create
let chavier = Object.create(Aluno.prototype)

// adicionando o nome 'Chavier' ao construtor
chavier.nome = 'Chavier Fernandes'

console.log(chavier.resumoAluno())
// "Chavier Fernandes - undefined"

// retornou 'undefined' porque 'this.serie' não foi definido
`````

O que usamos para criar o objeto `chavier` é apenas o `prototype` vazio. 

Ou seja, essa é uma forma de se criar objetos, herdar o `prototype` para ser usado, mas sem precisar passar pelo construtor do objeto. 

---

Agora para popular esse novo objeto com o segundo parâmetro do `Object.create`:

````js
let Aluno = function(nome, serie) {
  this.nome = nome
  this.serie = serie
}

const novoChavier = Object.create(Aluno, {
  nome: { writeble: true, configurable: true, value: 'Chavier Oliveira'}
})

console.log(novoChavier.nome)
// "Chavier Oliveira"
````

Ao criar uma propriedade onde a própria propriedade recebe um objeto com as propriedades dela, são `propriedades descritoras` porque estamos descrevendo como aquela propriedade deve se comportar. 

Existem 2 tipos de propriedades descritoras, as **descritoras de dados**, que basicamente descrevem o valor. 

````js
nome: { writeble: true, configurable: true, value: 'Chavier Oliveira'},
````

`writable` quer dizer que esse dado pode ser diretamente modificado por atribuição. 

Por exemplo:

`````js
const matheus = Object.create({ name: 'Matheus' }, {
  idade: {
    writable: false,
    configurable: true,
    value: 26
  }
})

matheus.idade = 27

console.log(matheus.nome) // 'Matheus'
console.log(matheus.idade) // 26
`````

Se `writable` estivesse `true`, ao chamar `matheus.idade` retornaria 27.

`configurable` quer dizer se o descritor pode ser alterado ou removido do objeto. 

Por exemplo:

````js
const matheus = Object.create({ nome: 'Matheus' }, {
  idade: {
    writable: true,
    configurable: true,
    value: 26
  }
})

console.log(delete matheus.idade) // true
console.log(matheus.idade) // undefined
````

Observe que a propriedade `idade` foi deletada, por isso ela retornou `undefined`.

Se eu quiser bloquear a exclusão dessa propriedade em `configurable` eu coloco como `false`:

````js
const matheus = Object.create({ nome: 'Matheus' }, {
  idade: {
    writable: true,
    configurable: false,
    value: 26
  }
})

console.log(delete matheus.idade) // false
console.log(matheus.idade) // 26
````

`value` é o valor inicial.

> É importante observar que o método `create`, ele recebe 2 argumentos. Ao adicionar um objeto no primeiro, esses métodos e propriedades vão para o objeto em si. Enquanto que ao adicionar no segundo argumento, os métodos e propriedades vão para o `prototype`.

E as **descritoras assessoras** lidam com `getters` e `setters` para lidar com os dados, o que permite manipular os dados antes de exibir ou de salvar um dado alterado. 

````js
seriePadrao: { writable: false, configurable: true, value: '5ª Série'},
serie: { 
  configurable: true,
  get: function(){
    return this.seriePadrao.toUpperCase();
  },
  set: function(valor) {
    this.seriePadrao = valor.toLowerCase()
  }
}
````

Usando de forma prática, vamos criar uma `seriePadrao`, que serve apenas para inicializar a propriedade série com algum valor e assim não dar erro

`get` aqui vai ser usado quando o usuário chamar `serie`. Ao chamar essa propriedade ele vai fazer o que foi configurado em `get` e devolver o retorno dela que nesse caso vai ser o `value` de serie em maiúsculo.

Agora, quando tentar atribuir um novo valor a `serie`, ela vai receber nos parâmetros o `valor`, ou seja, o que o usuário tentou atribuir, e então vai executar a função colocando tudo em minúsculo.

Um resumo geral:

````js
let Aluno = function(nome, serie) {
  this.nome = nome
  this.serie = serie
}

const novoChavier = Object.create(Aluno, {
  nome: { writeble: true, configurable: true, value: 'Chavier Oliveira'},
  seriePadrao: { writable: true, configurable: true, value: '5ª Série'},
  serie: { 
    configurable: true,
    get: function(){
      return this.seriePadrao.toUpperCase();
    },
    set: function(valor) {
      this.seriePadrao = valor.toLowerCase()
    }
  }
})

console.log(novoChavier.serie)
// "5ª SÉRIE"

novoChavier.seriePadrao = '6ª Série'
console.log(novoChavier.serie)
// "6ª SÉRIE"
````

Observe que `seriePadrao` foi usada apenas para manipular o `value`.

---

Outro método 

`Object.assign` - O que ele faz é receber objetos e juntar esses objetos em um só. Como argumentos ele recebe quantos objetos eu for passando.

É importante saber que o primeiro objeto é o "alvo", ou seja, é o objeto que receberá todas as propriedades dos objetos seguintes passados por após ele. 

````js
const semestre1 = { nota1: 7, nota2: 6, nota3: 10 }
const semestre2 = { nota4: 8, nota5: 9, nota6: 7 }

const notasFinais = Object.assign(semestre1, semestre2)

console.log(notasFinais)
// { nota1: 7, nota2: 6, nota3: 10, nota4: 8, nota5: 9, nota6: 7 }
````

A pergunta comum, e se tiver propriedades repetidas. Nesse caso o `assign` sobrescreve colocando a propriedade passada por último.

````js
const prova = { nota1: 3 }
const recuperacao = { nota1: 5 }

const notasFinais = Object.assign(prova, recuperacao)

console.log(notasFinais)
// { nota1: 5 }
````

Observe que ele mantém a última propriedade passada, no caso do `recuperacao`.

---

Outro ponto importante é que os objetos a partir desse momento se tornam uma referência do objeto criado com `assign`:

````js
const semestre1 = { nota1: 7, nota2: 6, nota3: 10 }
const semestre2 = { nota4: 8, nota5: 9, nota6: 7 }

const notasFinais = Object.assign(semestre1, semestre2)

notasFinais.nota1 = 10

console.log(notasFinais)
// { nota1: 10, nota2: 6, nota3: 10, nota4: 8, nota5: 9, nota6: 7 }

console.log(semestre1.nota1) // 10
````

Observe que o JS mudou o valor da propriedade no primeiro objeto. Mesmo a atribuição sendo feita ao `Object.assign`.

Uma estratégia para se criar um objeto novo sem nenhuma referência, é passar um objeto vazio no primeiro argumento.

````js
const obj1 = { valor1: 5, valor2: 9}
const obj2 = { valor3: 7, valor4: 8}

const res = Object.assign({}, obj1, obj2)

res.valor1 = 6
console.log(res)
// { valor1: 6, valor2: 9, valor3: 7, valor4: 8 }
console.log(obj1.valor1) // 5
````

Observe que dessa forma ao mudar o `valor1` do objeto final ele não altera o `valor1` da constante `obj1`, apenas da constante `res`.

O `assign` então se torna muito útil para clonar objetos.

# Conceito 18 - Map, Reduce e Filter

Esses 3 métodos são muito usados para manipular `arrays`.

Método `map()` - ele itera por um `array`, manipula cada valor para que no final ele retorne um novo `array`com cada valor manipulado.

````js
const numbers = [1, 2, 3]
const doubles = numbers.map((num) => (num * 2))

console.log(doubles) // [2, 4, 6]
````

> Em relação a `arrow functions`. Quando o retorno tem apenas 1 linha de código, ao invés de usar chaves e `return` podemos suprimir estes. 
>
> E uma dica interessante aqui é que caso o seu retorno tenha apenas 1 linha de código, mas ainda seja grande você pode usar parentesis `()`.
>
> Ou quando queremos retornar o resultado dentro de um objeto: `.map(() => ({ chave: valor }))`.



Método `reduce()` - De forma bem resumida, ela pega cada valor de um `array` e reduz eles devolvendo um único valor. 

````js
const idades = [15, 18, 20]

const somaIdades = idades.reduce((acumulador, idade) => {
  return acumulador + idade
})

console.log(somaIdades) // 53
````

Observe que `acumulador`, não recebeu nenhum valor. Nesse caso, o método considerou que o `acumulador` é 0 e a partir dai fez a soma com cada idade.

Ao dar um `console.log` no acumulador vemos os seguintes valores:

````js
const idades = [15, 18, 20]

const somaIdades = idades.reduce((acumulador, idade) => {
  console.log(acumulador)
  return acumulador + idade
})

// 15 - 0 + primeiro index do array
// 33 - aqui foi somado 15 + 18 = 33
// 53 - aqui fo somado os 33 + 20 (terceiro index do array)
````

De forma bem resumida, o `reduce` foi somando o valor que tinha em cada campo do array e colocando na variável `acumulador`. 

Sobre o acumulador, podemos ter um valor de inicialização desse valor. Dessa forma o `acumulador` já começa com um valor e depois vai somando.

Colocamos esse valor como segundo argumento do `reducer()`:

````js
const idades = [15, 18, 20]

const somaIdades = idades.reduce((acumulador, idade) => {
  return acumulador + idade
}, 2)

// 2 + 15 + 18 + 20 = 55
console.log(somaIdades) // 55
````

Dessa forma, o acumulador já iniciou com 2, depois foi somando cada index do `array` chegando a 55. 

2 padrões muito comuns encontrados com `reduce()` é o `acumulador` ser uma variável externa inicializada em 0.

````js
let acumulador = 0;

const somaIdades = idades.reduce((acumulador, idade) => acumulador + idade)
````

ou a inicialização em 0 é feita na hora de passar o parâmetro:

````js
const somaIdades = idades.reduce((acumulador = 0, idade) => acumulador + idade)
````

É importante saber que o `reduce()` recebe 4 parâmetros, na seguinte ordem: Acumulador, valor atual, index atual e array original.

Nos exemplos acima usamos apenas os 2 parâmetros, mas às vezes é necessário saber a posição de um item em específico no array, por isso vai ser necessário usar o terceiro parâmetro o index atual. 

````js
const idades = [15, 18, 20]

const somaIdades = idades.reduce((acumulador, idade, index) => {
  console.log(index)
}, 0)

// 0
// 1
// 2
````

O `0, 1, 2` são as posições do `array`. E é importante saber que se não tiver um inicializador, ele não conta o primeiro index. 

````js
const somaIdades = idades.reduce((acumulador, idade, index) => {
  console.log(index)
})

// 1
// 2
````

O quarto parâmetro do callback é o `array` em si, no caso ele vai retorna 3x porque é número de campos que tem no `array`. 

````js
const somaIdades = idades.reduce((acumulador, idade, index, array) => {
  console.log(array)
}, 0)

// [15, 18, 20]
// [15, 18, 20]
// [15, 18, 20]
````



Método `filter()` - ele itera por um `array` e podemos dar uma condição onde caso o valor passe pela condição retorna no novo `array`.

````js
const tarefas = [
  { tarefa: 'Lavar o carro', feito: true },
  { tarefa: 'Lavar a louça', feito: false },
  { tarefa: 'Lavar as roupas', feito: true }
]

const tarefasRealizadas = tarefas.filter((tarefa) => tarefa.feito === true)

console.log(tarefasRealizadas)
// { feito: true, tarefa: "Lavar o carro" }, { feito: true, tarefa: "Lavar as roupas" }
````

# Conceito 19 - Pure Functions e side effects (Efeitos colaterais)

Programação funcional, é um paradigma de programação, ou seja, é uma forma de desenvolver onde se cria diversas funções puras. Essas funções evitam compartilhar estados, dados mutáveis e efeitos colaterais. 

Função pura é uma função que se ela receber os mesmos tipos de dados, ela retorna os mesmos tipos de valores. 

Ela depende apenas dos argumentos que recebe para produzir um resultado. 

Quando estamos trabalhando com funções impuras, uma função faz muitas ações:

````js
const aluno = { aluno: 'André', pontos: 5 }

const pontoExtraAluno = function(usuario) {
  usuario.aluno = usuario.aluno.toUpperCase()
  usuario.pontos += 1
  return usuario
}

pontoExtraAluno(aluno)
console.log(aluno)
// { aluno: "ANDRÉ", pontos: 6 }
````

Quando estamos trabalhando com funções puras, cada função faz apenas uma ação:

````js
const aluno = { nome: 'André', pontos: 5 }

// cada função executando uma coisa apenas
const nomeMaiusculo = (nome) => nome.toUpperCase()
const pontoExtra = (pontos) => aluno.pontos + 1

aluno.nome = nomeMaiusculo(aluno.nome)
aluno.pontos = pontoExtra(aluno.pontos)

console.log(aluno)
// { nome: "ANDRÉ", pontos: 6 }
````

A função pura recebe um valor, retorna algo do mesmo tipo do valor.

A grande vantagem de desenvolver com funções puras é a facilidade para ler o código. Funções com efeitos colaterais ficam difíceis de ler.

### State Mutation (Mutação de estado)

No JS atribuímos um valor de 2 formas. Para tipos primários passamos o valor. Para objetos passamos a referência. 

Em um tipo primário, ao passar o valor dele para outra variável e depois mudamos o valor não afeta a variável que recebeu o valor, por isso ele é **imutável**. 

````js
let texto = 'texto'

let textoNovo = texto
textoNovo = 'texto 2'

console.log(texto) // "texto"
console.log(textoNovo) // "texto 2"
````

*Apenas lembrando que o JavaScript tem 6 tipos de dados primitivos, ou seja, esses dados são imutáveis: Boolean, Null, Undefined, Number, BigInt, String.*

Os tipos de referência ao atribuir um valor nele, o valor é alterado para qualquer outra variável que aponte para esse espaço na memória onde está o objeto tornando ele **mutável**. 

````js
let objeto = { chave: 'valor' }

let novoObjeto = objeto
novoObjeto.chave = 'Novo valor'

console.log(objeto) // { chave: "Novo valor"}
console.log(novoObjeto) // { chave: "Novo valor" }
````

*Lembrando que tipos de referência, ou também chamados de tipos complexos são objects, functions e arrays*

É importante lembrar que tudo além de tipos primitivos é mutável. 

Esse é um dos motivos que fazem muitos desenvolvedores não gostarem do JavaScript, pelo fato de ser uma linguagem de tipagem fraca. Uma alternativa para isso é o TypeScript.

Para garantir que o código fique mais perto de ser imutável, a dica é não mudar objetos em uma função. 

Outra tica é usar `const` ao invés de `var`.

# Conceito 20 - Closures

Funções no JavaScript não são apenas funções, também são `closures`, também chamadas de fechamentos.

Isso significa que elas tem acesso a variáveis declaradas fora delas.

````js
const nome = 'Caio'

function cumprimentar() {
  console.log('Olá ' + nome)
}

cumprimentar() // Olá Caio
````

Existem linguagens que não aceitam `closures`. Ou seja, não permitem acesso ao escopo externo. Para pode acessar uma variável externa seria necessário passar o nome como argumento da função para pode ter acesso a ela dentro. 

A função guarda uma referência do escopo de fora. E não uma cópia da variável dentro da função.

Isso é possível de ser entendido ao mudar a variável antes da execução.

````js
let nome = 'Caio'
function cumprimentar() {
  console.log('Olá ' + nome)
}
nome = 'Maicon'
cumprimentar() // "Olá Maicon"
````

# Conceito 21 - High Order Functions

Funções de alta ordem são funções que podem receber outras funções como argumento, ou que retornam outra função.

Funções `callback` são high order functions. São funções executadas no final de outras funções. 

````js
const element = document.querySelector('.element')

element.addEventListener('click', () => { alert('click on element') })
````

Normalmente são funções anônimas passadas como último argumento de outras funções mas podem ser funções declaradas antes.

Geralmente, passamos uma função declarada antes quando vamos trabalhar com uma função compartilhada com outros eventos. 

````js
const element = document.querySelector('.element')

function alertElement() {
  alert('click on element')
}

element.addEventListener('click', alertElement)
````

Essa estratégia de passar uma função para ser executada após a função pai ser executada, permite um comportamento assíncrono, ou seja, o script continua executando enquanto espera por um resultado. 

Elas também podem retornar outras funções:

````js
const upperCase = function(name) {
    return name.toUpperCase()
}

upperCase('Ícaro')
"ÍCARO"
````

Dessa forma podem acontecer situações diferentes:

````js
function showAlert() {
    return alert('click')
}

function callAlert() {
    return showAlert
}

callAlert() // ƒ showAlert() { return alert('click') }
callAlert()() // executa o alerta
````

Isso acontece porque `callAlert` retornou uma função não ativada, ou seja, sem os parentesis, ao chamar `callAlert()` ele retorna a função `showAlert` não ativada. Apenas ao chamar `callAlert()()` que é retornado `showAlert` executando ela. 

# Conceito 22 - Recursion

Recursão no JavaScript é a habilidade de uma função chamar ela mesma de dentro dela.

````js
function recursao() {
  recursao()
}
recursao()
````

A recursão feita da forma errada quebra o código porque ela vai entrar em loop sendo chamada ela mesma infinitamente. 

Para fazer uma recursão útil é necessário criar um evento de saída.

````js
function count(num) {
  console.log(num)
  if(num > 0) {
    count(num - 1)
  }
}
count(5)
// 5
// 4
// 3
// 2
// 1
// 0
````

Aqui o evento de saída foi o `num > 0`.

Algumas vezes o programador vai preferir usar recursão ao invés de fazer o loop. Muito comum ao se usar o paradigma funcional. É importante entender.



---

## Truques Úteis

### Truque 8 - Atributo defer

É um truque usado para que o a tag de script seja lida apenas quando o HTML for completamente carregado.

Existem vários truques em relação a isso, eventos que programadores antigos gostavam de usar mas sem dúvida alguma esse é o mais fácil e rápido.

````html
<script src="main.js" defer></script>
````

### Truque 7 - 3 formas úteis de clonar objeto

É importante lembrar que objetos em JavaScript são referências de tipo, não é possível usar `=` para clonar. Por isso é sempre bom ter na manga formas de fazer isso:

````js
const pessoa = {
  nome: 'Alex',
  idade: 55
}

// Método Object.assign
const novaPessoa1 = Object.assign({}, pessoa)
novaPessoa1.idade = 70

console.log(novaPessoa1) // { nome: 'Alex', idade: 70 }
console.log(pessoa) // { nome: 'Alex', idade: 50 }

// JSON
const novaPessoa2 = JSON.parse(JSON.stringify(pessoa))
novaPessoa2.nome = 'João'

console.log(novaPessoa2) // { nome: 'João', idade: 50 }
console.log(pessoa) // { nome: 'Alex', idade: 50 }

// Spread Operator
const novaPessoa3 = { ...pessoa }
novaPessoa3.idade = 15

console.log(novaPessoa3) // { nome: 'Alex', idade: 15 }
console.log(pessoa) // { nome: 'Alex', idade: 50 }
````

Observe que nenhuma propriedade do objeto `pessoa` não foi reatribuída. 

### Truque 6 - Filtrar valores duplicados em um array

````js
let nomes = ['Samuel', 'João', 'Pedro', 'Ana', 'Fernanda', 'João', 'Pedro']

// João e pedro repetidos 2x

console.log([...nomes]) // ["Samuel","João","Pedro","Ana","Fernanda","João","Pedro"]
console.log([... new Set(nomes)]) // ["Samuel","João","Pedro","Ana","Fernanda"]
````

### Truque 5 - Verificar se um objeto está vazio

Esse truque em especial é bastante útil para quando estamos trabalhando com banco de dados e JSON, porque assim podemos verificar se existe dado sendo retornado e se não tomar alguma ação evitando uma quebra no programa.

````js
let pessoa = {
  nome: 'Eduardo',
  idade: 35
}
let objeto = {}
console.log(Object.entries(pessoa).length) // 2
console.log(Object.entries(objeto).length) // 0

// outra forma usual
console.log(Object.entries(pessoa).length === 0) // false
console.log(Object.entries(objeto).length === 0) // true

````

### Truque 4 - Limpar todos os campos do array 

````js
let arrayTeste = ['campo0', 'campo1', 'campo2']
arrayTeste.length = 0

console.log(arrayTeste) // []
````

### Truque 3 - Número aleatório dentro de um intervalo

````js
function randomNumber(num1, num2) {
  return Math.random() * (num2 - num1) + num1
}

console.log(randomNumber(10, 20))
````

### Truque 2 - Teste condicional rápido

````js
let condition = false

if (condition) {
  console.log('Verdadeiro')
}

condition && console.log('Verdadeiro')
````

### Truque 1 - Fazer um evento acontecer apenas 1 vez

````js
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  console.log('teste')
}, { once: true })
````



---

Dica extra de `Destructuring`

https://medium.com/geekculture/10-javascript-concepts-that-every-developer-should-know-702330e662e2

