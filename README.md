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