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

# Conceito 23 - Collections e Generators

### Collections

Coleções no JS são objetos iteráveis. Existem 2 novos construtores que permitem criar essas coleções. `Set` e `Map`. São novos objetos criados para suprir as necessidades que objetos comuns não atendem. 

Como falta de um método para iterar, forma de evitar colisões entre propriedades, formas de esconder propriedades para não serem usadas ao usar uma chave da propriedade. 

`Set` é uma coleção de valores. Mutável. Tem próprios métodos para inserir e ler dados. Parecido com um `Array`. Não permite ter dados repetidos. Cada dado é único. 

Para inicializar o `Set` é necessário passar um `Array`. 

````js
const alfabeto = new Set(['a','b','c'])
console.log(alfabeto) // Set(3) {"a", "b", "c"}
````

Existe uma função para adicionar um valor para o `Set` chamada `.add()`:

````js
alfabeto.add('a') // Set(3) {"a", "b", "c"}
alfabeto.add('d') // Set(4) {"a", "b", "c", "d"}
````

Não adiciona valores repetidos.

Ao buscar por um item com array, geralmente usamos o método `indexOf`, ele retorna a posição do item caso ele exista, e retorna -1 caso ele não exista.

````js
['a', 'b', 'c'].indexOf('a') !== -1 // true
````

Para verificar se um valor existe com o `Set` usamos o método `.has()`:

````js
alfabeto.has('c') // true
alfabeto.has('e') // false
````

Para apagar um dado temos o método `.delete()`, que retorna `true` se conseguiu apagar ou false se não encontrou o dado e por isso não apagou. 

`````js
alfabeto.delete('d') // true
alfabeto.delete('e') // false
`````

Também temos o método `forEach`:

````js
alfabeto.forEach((letra) => { 
  return console.log(letra)
})

// a
// b
// c
````

O `Set` facilita remover dados repetidos em um array porque ele não permite dados repetidos e permite um array no construtor dele:

````js
let dados = [1, 2, 2, 3, 3, 4, 5]
const numeros = new Set(dados)
console.log(numeros) // {1, 2, 3, 4, 5}
````

Ao passar dados repetidos ele elimina automaticamente os dados repetidos. 

Para transformar em um array novamente usamos o método `from()` do construtor de `Array`:

````js
Array.from(numeros) // [1, 2, 3, 4, 5]
````

Observação: Não existe indexação de dados com `Set`. 

Para pegar o primeiro valor do array usamos o index `array[0]`, no `Set` isso não existe.

---

Outro novo construtor que permite criar coleções é `Map`, muito parecido com o `Set` com a diferença de que ele funciona com chave e valor. 

O `Map` também recebe um array no construtor, com a diferença de que para cada valor ele recebe um outro array que dentro vai ter a chave e o valor.

````js
const dados = new Map([['nome', 'Felipe'], ['idade', 17]])

console.log(dados) // {"nome" => "Felipe", "idade" => 17}
````

Diferente do `.add`, para inserir dados no `Map` usamos o método `.set()`.

````js
dados.set('cidade', 'Salvador')

// {"nome" => "Felipe", "idade" => 17, "cidade" => "Salvador"}
````

Para buscar um dado usamos o método `.get()` e passamos a chave:

````js
dados.get('nome') // Felipe
````

Facilmente iterável através do método `forEach`, onde é retornado todos os valores:

````js
dados.forEach((dado) => console.log(dado))

// Felipe
// 17
// Salvador
````

````js
dados.forEach((dado, chave) => console.log(dado, chave))
// Felipe nome
// 17 "idade"
// Salvador cidade
````

### Generators

São funções que podem ser usadas para controlar iterações.

Quando temos um loop de For, ele é 100% executado no momento que é chamado.

````js
function contador(num) {
  for(let i = 1; i <= num; i++) {
    console.log(i)
  }
}

contador(3)
// 1
// 2
// 3
````

No momento em que `contador` é chamado, o `for` dentro dele é 100% executado.

No JavaScript existem os `generators`. São funções que podemos controlar cada iteração ao chamar um método `next()`.

Para se tornar um `generator` é necessário colocar o asterisco antes de declarar o nome da função. 

É o `*` que simboliza que essa função vai ser `generator`. Apenas um identificador. 

````js
function *contador(num) {
  for(let i = 1; i <= num; i++) {
    yield console.log(i)
  }
}
````

A palavra-chave `yield`, funciona como um `return`. Porém, com diferenças. 

A primeira é que o `return` termina a execução do que está sendo executado, já o `yield` pausa a execução na linha que foi colocado, e na próxima vez que a função for chamada ele volta de onde parou até o próximo `yield`:

````js
const totalContador = contador(3)

totalContador.next()
// 1
// {value: undefined, done: false}
totalContador.next()
// 2
// {value: undefined, done: false}
totalContador.next()
// 3
// {value: undefined, done: false}
totalContador.next()
// {value: undefined, done: true} 
````

É preciso atribuir ele a uma variável antes de usar. Se eu simplesmente executar a função, ele vai retornar 1 novamente, não vai prosseguir. 

O método `next()` executa o método até atingir o `yield` e retorna o valor na propriedade `value` do objeto. 

Observe que em cada execução, além do valor retornou o objeto:

````js
{value: undefined, done: true} 
````

Esse objeto, o `value` é o valor retornado do `yield`:

````js
function *contador(num) {
  for(let i = 1; i <= num; i++) {
    yield i
  }
}

const totalContador = contador(3)

totalContador.next()
// {value: 1, done: false}

totalContador.next().value
// 2

totalContador.next().value
// 3

totalContador.next()
// {value: undefined, done: true}
````

Quando termina ele retorna que o valor está indefinido, e `done` como `true`.

Como é um objeto, caso queira retorno apenas o valor com `.value` encadeado.

Muito usado para pegar itens de acordo com a iteração do usuário. 

Podemos ter outro `yield` também, assim que ele terminar a iteração com o primeiro executa segundo:

````js
function *contador(num) {
  for(let i = 1; i <= num; i++) {
    yield i
  }
  let nome = 'Marcus'
  nome = nome.toUpperCase()
  yield nome
}

let totalContador = contador(3)

totalContador.next()
// {value: 1, done: false}
totalContador.next()
// {value: 2, done: false}
totalContador.next()
// {value: 3, done: false}
totalContador.next()
// {value: MARCUS, done: false}
totalContador.next()
// {value: undefined, done: false}
````

# Conceito 24 - Promises

Uma promessa pode ser cumprida ou não cumprida. Não tem um prazo para ser cumprida, pode ser em segundos, minutos ou horas para ser realizada. 

Uma promise tem 3 estados:

Pendente - Quando se está esperando o resultado

Realizada - Quando foi cumprida, ou seja, o resultado foi recebido.

Rejeitada - Quando não foi cumprida ou não retornou o que eu esperava. 

Existe um construtor de promises no JS: `new Promise()`.

Ele tem uma função `callback` que recebe 2 argumentos. O resolve e reject.

````js
const tarefaExecutada = true

const realizarTarefa = new Promise((resolve, reject) => {
  if (tarefaExecutada) {
    resolve(true)
  } else {
    reject(false)
  }
})
````

A `promise` não é executada como uma função. Para usa-la, usamos o método `.then()`. Caso tenha erro usamos o método `.catch()`.

````js
realizarTarefa.then((executada) => {
  console.log('Tarefa executada')
}).catch((naoExecutada) => {
  console.log('Não executada')
})
````

Quando nós criamos o `.then()`, ele também recebe um `callback` com 1 argumento. Esse argumento é o resultado esperado no argumento do `resolve()`.

Por exemplo, se no `resolve()` esperasse uma chamada HTTP, quando ela fosse finalizada o resultado seria colocado dentro dela. E consequentemente dentro do primeiro parâmetro do `callback` em `.then()`.

Observe os trechos em destaque:

````js
if (tarefaExecutada) {
  resolve(true)
}

realizarTarefa.then((executada) => {
  console.log(executada) // true
}) 
````

Poderia ser qualquer resultado, até mesmo um objeto, array e etc...

````js
if (tarefaExecutada) {
  resolve('Qualquer coisa')
}

realizarTarefa.then((executada) => {
  console.log(executada) // "Qualquer coisa"
})
````

O ponto importante de se entender aqui é que no `resolve()` podemos colocar uma chamada assíncrona. Quando ela for realizada, o resultado dela será refletido no `.then()` e então poderemos resgatar esse valor.

Assim como o erro, caso seja `reject()` cai no `.catch()`.

Colocando em destaque:

````js
const tarefaExecutada = false

...
else {
  reject('Ação não executada')
}

.catch((naoExecutada) => {
  console.log(naoExecutada) // "Ação não executada"
})
````

---

É possível também fazer o `chain` das `promises`. Ou seja, fazer o resultado de uma `promise` executar outra `promise`.

É uma `promise` retornando outra `promise`:

````js
const tarefaExecutada = true

const realizarTarefa = new Promise((resolve, reject) => {
  if (tarefaExecutada) {
    resolve(true)
  } else {
    reject(false)
  }
})

const realizarProximaTarefa = (resultado) => {
  return new Promise((resolve) => {
    if(resultado) {
      resolve('Próxima tarefa')
    } else {
      resolve('Não executar a próxima')
    }
  })
}

realizarTarefa
  .then(realizarProximaTarefa)
  .catch(realizarProximaTarefa)
  .then(resultado => console.log(resultado))
````

O que retornar da primeira `promise` pode ser encadeado na próxima `promise`. 

Uma `promise` retorna outra `promise`. 

---

`Callback Hell` é algo que você deve evitar no JavaScript:

````js
// callback hell
promessa1.then(() => {
  promessa2.then(() => {
    promessa3.then(() => {
    	...
  	})
  })
})

// chain
promessa1
	.then(() => {})
  .then(() => {})
  .then(() => {})

````

A execução não é alterada. O que muda é a legibilidade do código. 

---

Outro ponto importante de se observar é que `promises` são assíncronas. Logo, elas são executadas sempre depois. 

Tudo o que é `callback` é colocado no `Event Queue`, que é a fila de eventos, só quando não tiver nada para executar o `Event Loop` passa pelo `Event Queue` e executa os eventos que estão lá.

````js
console.log('Início')

realizarTarefa.then((executada) => {
  console.log(executada)
})

console.log('Fim')

// "Início"
// "Fim"
// "Qualquer coisa"
````
# Conceito 25 - Async Await

É uma forma mais recente de se trabalhar com `promises` no JS.

Para transformar uma função em assíncrona, colocamos o `async` antes da função. 

Onde for esperar por uma `promise` colocamos o `await`:

````js
async function funcaoAssincrona() {
  await promise 
}
````

---

Primeiro precisamos de uma função assíncrona que retorna uma promise. Aqui colocamos um `setTimeout` para que o texto passado seja entregue caso a promessa seja resolvida, isso após 2 segundos:

````js
function espera2segundos(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 2000)
  })
}

espera2segundos('Texto exibido após 2 segundos')
  .then(res => console.log(res))

// Texto exibido após 2 segundos
````

Usando `async` e `await`:

````js
async function aguardaResposta() {
  const resposta = await espera2segundos('Texto exibido após 2 segundos')
  console.log(resposta)
}

aguardaResposta()

// Texto exibido após 2 segundos
````

Ao colocar um `await`, é como se fosse encadeado um `.then()`:

````js
espera2segundos('Texto exibido após 2 segundos')
  .then(res => console.log(res))
````

````js
await espera2segundos('Texto exibido após 2 segundos')
````

Uma observação é que uma função assíncrona retorna uma `promise` também. Logo, podemos fazer o `chain`, de um `.then()` e `.catch()`.

# Conceito 26 - Data Structure Stack e Queue

Estrutura de dados é uma maneira de organizar os dados no computador para que eles sejam utilizados com eficiência. Eficiência significa: De acordo com as suas necessidades.

Cada estrutura de dados serve para um momento em específico. 

## Stack e Queue

Pilhas (Stack) são uma das estruturas mais importantes no JS e são basicamente um Array de dados.

Existem alguns métodos para isso:

````js
const numeros = []

numeros.push(1)
numeros.push(2)
numeros.push(3)

console.log(numeros) // [1, 2, 3]

numeros.pop()

console.log(numeros) // [1, 2]
````

Observe que o método `push` adiciona o item no final da fila. Enquanto que o método `pop` remove o último elemento no final da fila.

Trabalhando com `Arrays` também temos os métodos `shift` e `unshift`:

````js
const letras = []

letras.unshift('a')
letras.unshift('b')
letras.unshift('c')

console.log(letras) // ["c", "b", "a"]

letras.shift()

console.log(letras) // ["b", "a"]
````

Ao contrário do `push` e do `pop`, o `unshift` insere no começo da fila e o `shift` remove o primeiro elemento da fila.

**OBS:** Esses 2 últimos métodos exigem mais processamento porque toda vez que ele remove ou adiciona um elemento no começo da fila, ele precisa reindexar todos os elementos posteriores.

Em uma pilha, o primeiro que entrou é o primeiro a sair. Esse é o protocolo *FIFO - first in, first out*.

Um exemplo de pilha (stack) usando o JS:

````js
const pilha = []

pilha.push(1)
pilha.push(2)
pilha.push(3)

console.log(pilha) // [1, 2, 3]

pilha.shift()

console.log(pilha) // [2, 3]
````

---

Outro protocolo é o *LIFO - Last In, First Out* que é a estrutura de dados da fila. 

Nesse protocolo o último a entrar é o primeiro a sair:

````js
const fila = []

fila.push('a')
fila.push('b')
fila.push('c')

console.log(fila) // ["a", "b", "c"]

fila.pop() // remove o último elemento

console.log(fila) // ["a", "b"]
````

# Conceito 27 - Expensive Operation e Big o Notation

É um assunto muito comum ao se estudar algoritmos. 

É uma operação matemática que representa o quanto uma operação pode ser custosa em termos de tempo de execução a partir de uma entrada de dados. 

"O" vem de ordem de. Porque o crescimento de uma operação é também chamado de ordem de uma função. 

"Big O", também chamado de "Grande-O", porque representa o pior caso de complexidade de execução de uma determinada operação.

> "descreve o comportamento limitante de uma função quando o argumento tende a um valor específico ou para o infinito" - Wikipedia

Usamos a notação de Big O para **classificar algoritmos** por como eles respondem a mudança nos dados que estão entrando na função.

O quão rápido essa função é executada, **o quanto de memória é utilizada** e **quantas interações são feitas** para se chegar ao resultado.

Tipos comuns:

1. Notação de O(1) - Ordem de 1. São algoritmos de tempo de execução constante.

Significa que independente da complexidade, ou seja, do quão maior pode ser o Array o tempo de execução é sempre o mesmo e normalmente é usada apenas 1 operação.

Ex: `.pop()` - Não importa quantos valores temos no array, é feito uma única operação que é remover o último valor. 

````js
const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numRemovido = dados.pop()
console.log(numRemovido) // 9
````

O Array não é percorrido, não é feito iteração... nada mais é feito.

2. Notação de O(n) - N porque não temos o número exato de entradas, esse seria um algoritmo de tempo linear, dependendo do tamanho da entrada podem haver mais ou menos operações.

Um exemplo, é uma função que tenta achar um número no array, e dar console na posição do item procurado.

No JS existe uma função que faz isso, é a `indexOf`, porém faremos manualmente a título de exemplo:

````js
const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function o_n(entrada, numero) {
  for(let i = 0, max = entrada.length; i < max; i++) {
    if(entrada[i] === numero) {
      return i
    }
  }
  return 'valor não encontrado'
}

console.log(o_n(dados, 7)) // 7
````

Ele retorna exatamente a posição do número.

Quanto maior for o array mais custoso fica essa operação.  E a operação mais custosa possível é ele percorrer todo o array e não encontrar o valor. 

3. O(n)² - Big O de tempo quadrático

Demora o dobro de iterações em relação ao tamanho da entrada e cresce exponencialmente quanto maior for a entrada de dados.

É possível reproduzir isso com um loop dentro de outro loop. 

````js
const dados = [0, 1, 2, 3]

function o_n_quadrado(entrada) {
  let matriz = []
  for(let i = 0, max = entrada.length; i < max; i++) {
    matriz[i] = []
    for(let j = 0, maxj = entrada.length; j < maxj; j++) {
      matriz[i].push(j)
    }
  }
  return matriz
}

console.log(o_n_quadrado(dados)) 
// [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]
````

Operações assim são o dobro custosas porque além do primeiro loop percorrer o array até o final, também existe outro loop que percorre o array até o final. Por cada posição é percorrido o array várias vezes.

Em suma, por cada n posição, é percorrido n vezes.

Ou seja, quanto mais dados tivesse no array de entrada, mais custosa seria essa operação.

*Matriz são arrays dentro de arrays*

4.  O (n log n) - big O, n log de n - ou também chamado de ordem n, log de n.

É o algoritmo de tempo logaritmo. São mais eficientes para se trabalhar com entradas grandes. 

Ao invés de buscar valor por valor, quebramos a entrada em 2 partes na metade. Assim é possível descartar uma parte da entrada em cada iteração.

Dessa forma é possível achar um valor dentro da coleção de 1 milhão de valores em até 20 iterações. 

O algoritmo mais famoso nesse caso é o `Quick Sort` consegue ordenar uma entrada de forma bem eficiente.

Nesse exemplo a baixo, ordenamos uma série de letras em ordem alfabética.

A primeira parte do algoritmo é verificar se a entrada tem mais do que 1 valor. Caso tenha, retorna `true`, caso não ele continua e executando o código que será colocado abaixo:

````js
const entrada = ['q','a','z','w','s','x','e','d','c','r']

function quickSort(entrada) {
  if(entrada.length < 2) {
    return entrada
  }
}

console.log(quickSort(entrada)) // undefined
````

Segunda parte é criada 3 variáveis, a primeira recebe o `pivo`, que é o index  0 do `array`. A segunda vai receber os números da esquerda em um `array`, e a terceira os números da direita em um `array`. 

````js
function quickSort(entrada) {
  if(entrada.length < 2) {
    return entrada
  }
  let pivo = entrada[0]
  let esquerda = []
  let direita = []
}
````

Depois fazemos um loop de `for` onde vai ser percorrido todo o `array`. A diferença é que ele terá uma estrutura condicional de `if` onde caso o valor da entrada percorrido for menor do que o do pivo em questão, o valor será adicionado a esquerda. Caso seja maior, será adicionado na direita.

````js
function quickSort(entrada) {
  if(entrada.length < 2) {
    return entrada
  }
  
  let pivo = entrada[0]
  let esquerda = []
  let direita = []
  
  for(let i = 1, max = entrada.length; i < max; i++) {
    if (entrada[i] < pivo) {
      esquerda.push(entrada[i])
    } else {
      direita.push(entrada[i])
    }
  }
}
````

Para finalizar retornamos dentro de um `array` através de recursão os valores da esquerda, o pivo e os valores da direita desestruturados.

````js
function quickSort(entrada) {
  if(entrada.length < 2) {
    return entrada
  }
  
  let pivo = entrada[0]
  let esquerda = []
  let direita = []
  
  for(let i = 1, max = entrada.length; i < max; i++) {
    if (entrada[i] < pivo) {
      esquerda.push(entrada[i])
    } else {
      direita.push(entrada[i])
    }
  }
  
  return [...quickSort(esquerda), pivo, ...quickSort(direita)]
}

console.log(quickSort(entrada)) // ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
````

# Conceito 28 - Algoritmos

Um algoritmo é uma sequência de ações que são tomadas para resolver um problema. 

Uma simples função que resolve uma soma de datas é um exemplo de algoritmo. Não precisa ser algo complexo para ser algoritmo.

É importante sempre refatorar o código, assim podemos pensar de forma diferente, menos custosa, consumindo menos recurso, menos linhas de código e que resolva o problema da mesma forma. 

Repositório JavaScript Algorithms:

https://github.com/trekhleb/javascript-algorithms

https://github.com/trekhleb/javascript-algorithms/blob/master/README.pt-BR.md

http://www.thatjsdude.com/interview/js1.html

Para ter um código analisado por outras pessoas: https://codesignal.com/

# Conceito 29 - Herança, Polimorfismo e reutilização de código

Polimorfismo é chamar o mesmo método em diferentes objetos.

Quando criamos classes e reaproveitamos os métodos da classe pai nas classes filhas, estamos usando o conceito de polimorfismo.

````js
class Automovel {
  acelerar() {
    console.log('Acelerar!')
  }
}

class Moto extends Automovel {
  empinar() {
    console.log('Empinar!')
  }
}

class Ferrari {
  acelerar() {
    console.log('Acelera muito!')
  }
}

const veiculo = [new Automovel(), new Moto(), new Ferrari()]

veiculo.forEach((metodo) => metodo.acelerar())

// "Acelerar!"
// "Acelerar!"
// "Acelera muito!"
````

Polimorfismo ajuda na reutilização de código, evita repetir o mesmo método sem necessidade. 

Observe que a classe moto herdou o método acelerar de automóvel.

Já a classe Ferrari sobrescreveu o método.

Apenas quando há necessidade sobrescrevemos o método pai como foi o caso da última classe. 

# Conceito 30 - Design Patterns (Padrões de Design)

São formas criadas para resolver problemas recorrentes. É um modo de escrever o código para evitar problemas organização de código, legibilidade, manutenção...

### Padrão Módulo (Module)

É um padrão que evita se perder em código quando ele cresce muito.

Além da dificuldade para ler, podemos criar variáveis, funções com nomes duplicados o que pode gerar erros.

Quando modularizamos, encapsulamos o código, criamos variáveis privadas que não ficam expostas em outros arquivos. 

Antigamente se usava IIFE's hoje é mais comum o `module.exports` para exportar e o `require()` para importar.

Temos o `export default` e o `import ... from ...` a partir do ES6. 

A única preocupação mesmo é quais arquivos criar. 

### Padrão Prototype

É muito usado quando temos um modelo, ou template do que queremos criar, então ao invés de repetir o código, podemos usar o `prototype` de outro objeto para criar um novo.

````js
const usuario = {
  administrador: false,
  fazerLogin() {
    return 'Login feito';
  },
  fazerLogout() {
    return 'Logout feito';
  }
}

const novoUsuario = Object.create(usuario, { 
  nome: { 
  	value: 'Carlos' 
	}
})

console.log(novoUsuario)
// {
//  administrador: false,
//  fazerLogin: function fazerLogin() {
//    return 'Login feito';
//  },
//  fazerLogout: function fazerLogout() {
//    return 'Logout feito';
//  }
// }

console.log(novoUsuario.nome) // "Carlos"
````

Observe que trabalhamos com herança. Métodos e propriedades herdadas do construtor pai. 

Como todos os objetos são uma referência do objeto base `usuario`, caso eu precise criar uma nova propriedade que será replicada para todos os objetos fica mais fácil.

````js
usuario.__proto__.atualizar = function() {
  return 'Informações atualizadas'
}

console.log(novoUsuario.atualizar())
// "Informações atualizadas"
````

### Padrão Singleton

Esse padrão restringe a criar várias instâncias de um mesmo objeto. 

Ao criar um objeto a partir de uma classe, ele deve ser único mas pode ser referenciado em outros objetos. 

O objeto único é chamado de `singleton`.

Um exemplo é uma impressora compartilhada em um escritório. Várias pessoas podem usar ao invés de comprar uma impressora para cada pessoa da empresa. 

Muito semelhante a uma central de comando.

Uma `Connection Pool` é um exemplo desse padrão.

Em uma `pool` de conexões de banco, centraliza todas as conexões e gerencia elas em um mesmo objeto. É muito melhor do que deixar vários objetos na aplicação criando várias conexões. 

Para isso é criada apenas uma instância e a referência dela pode ser passada para outros objetos para ser utilizada. 

Outro benefício é reduzir a quantidade de variáveis globais criadas o que evita colisões. 

Usando IIFE:

````js
const impressora = (function() {
  let instanciaImpressora;
  
  function criar() {
    function imprimir() {
      console.log('Imprimir documento')
    }
    function ligar() {
      console.log('Ligando impressora')
    }
    
    return { imprimir, ligar }
  }
  
  return {
    pegarInstancia: function() {
      if(!instanciaImpressora) {
        instanciaImpressora = criar()
      }
      return instanciaImpressora
    }
  }
})()

const impressoraEmpresaA = impressora.pegarInstancia()
impressoraEmpresaA.ligar()
// "Ligando impressora"

const impressoraEmpresaB = impressora.pegarInstancia()
impressoraEmpresaA.imprimir()
// "Imprimir documento"
````

Uma outra observação:

````js
console.log(impressoraEmpresaA === impressoraEmpresaB)
// true
````

Os métodos ligar e imprimir não podem ser usados diretamente, apenas podemos pegar a instância.

Ou seja, não é possível pegar vários métodos criar, nem ligar várias impressoras. 

Além dos métodos serem privados. 

# Conceito 31
## Aplicações Parciais

A ideia das aplicações parciais é chamar uma função com menos argumentos do que ela espera.

Basicamente, elas começam com uma função e retornamos outra função com argumentos já configurados (ou seja, parcialmente aplicados).

Esse conceito serve para reduzir o número de argumentos que uma função aceita.

Um exemplo que pode ser aplicado com aplicações parciais:

````js
function lista(conector, ...itens) {
  const separadorVirgula = itens.slice(0, -1).join(', ')
  const ultimoItem = itens.pop()
  return `${separadorVirgula} ${conector} ${ultimoItem}`
}

const listaE = lista('e', 'Banana', 'Maçã', 'Uva')
const listaOu = lista('ou', 'Banana', 'Maçã', 'Uva')

console.log(listaE)
// "Banana, Maçã e Uva"

console.log(listaOu)
// "Banana, Maçã ou Uva"
````

OBS: O `...` quando passados como argumento em uma função é chamado de `rest operator`. Já quando estamos quebrando um array, ele se torna o `spread operator`.

---

Com esse exemplo em mãos, é possível usar o conceito de aplicações parciais.

Aqui é possível ter funções que representam cada tipo de lista e usar uma função parcial que vai no criar diferentes tipos de funções que retornam outras funções para serem executadas.

A partir da função `lista`, podemos criar funções diferentes para cada tipo de lista, a lista de `e` e a lista de `ou`.

Semelhante ao conceito de `middleware`, ou seja, ele passa por essa função antes de chegar ao local desejado.

````js
function lista(conector, ...itens) {
  const separadorVirgula = itens.slice(0, -1).join(', ')
  const ultimoItem = itens.pop()
  return `${separadorVirgula} ${conector} ${ultimoItem}`
}

function parcial(funcao, juncao) {
  return (...itens) => {
    return funcao(juncao, ...itens)
  }
}

const listaE = parcial(lista, 'e')
const listaOu = parcial(lista, 'ou')

console.log(listaE('Banana', 'Maçã', 'Uva'))
// "Banana, Maçã e Uva"

console.log(listaOu('Banana', 'Maçã', 'Uva'))
// "Banana, Maçã ou Uva"
````

Uma outra forma de enxergar as funções parciais:

````js
const listaE = parcial(lista, 'e')('Banana', 'Maçã', 'Uva')
const listaOu = parcial(lista, 'ou')('Banana', 'Maçã', 'Uva')

console.log(listaE)
// "Banana, Maçã e Uva"

console.log(listaOu)
// "Banana, Maçã ou Uva"
````

Uma outra forma de escrever a função parcial usando `arrow function`:

````js
const parcial = (funcao, juncao) => (...itens) => funcao(juncao, ...itens)
````

## Currying

Transforma uma função com multiplos argumentos em uma série de execução de funções. 

Nesse exemplo, temos uma função que retorna uma frase e transformamos ela em currying.

````js
const carro = (modelo, tamanho, velocidade) => {
  return `${modelo} é um carro ${tamanho} e ${velocidade}`
}

console.log(carro('Ford', 'Médio', 'Lento'))
// "Ford é um carro Médio e Lento"
````

Para transformando ela em uma `função currying`, pegamos cada argumento dessa função e transformamos em uma nova função:

`````js
const carro = (modelo) => (tamanho) => (velocidade) => {
  return `${modelo} é um carro ${tamanho} e ${velocidade}`
}

console.log(carro('Volvo')('Pequeno')('Rápido'))
// "Volvo é um carro Pequeno e Rápido"
`````

Observe que `modelo` executa retornando `tamanho` e `tamanho` executa retornando a `velocidade`.

Para executar essa função, chamamos `carro`, e o que seria cada argumento, agora será uma nova execução da função.

Semelhante a um `chain` de funções.

Dessa forma é possível quebrar, usando diferentes variáveis para diferentes entradas de funções.

Poderiamos já deixar definido um modelo de carro pré-estabelecido, alterando apenas as funções seguintes.

````js
const carro = (modelo) => (tamanho) => (velocidade) => {
  return `${modelo} é um carro ${tamanho} e ${velocidade}`
}

const toyota = carro('Toyota')

console.log(toyota('pequeno')('lento'))
// "Toyota é um carro pequeno e lento"
console.log(toyota('médio')('rápido'))
// "Toyota é um carro médio e rápido"
````

Assim como também poderia fixar uma das funções seguintes deixando apenas a última função para o usuário definir.

## Compose

É compor uma função usando outras funções como argumento.

````js
function incrementar(x) {
  return x + 1
}

function dobrar(x) {
  return x * 2
}
````

Executando sem compose:

````js
const valor = incrementar(4)
const resultado = dobrar(valor)

console.log(resultado) // 10
````

Usando o compose onde uma função é passada como argumento da outra:

````js
const resultado = dobrar(incrementar(4))

console.log(resultado) // 10
````

Obs: Uma outra forma de escrever as funções de incrementar e dobrar, o resultado é o mesmo. 

````js
const incrementar = (x) => x + 1
const dobrar = (x) => x * 2
````

## Pipe

É uma outra forma de escrever o `compose` usando uma outra função como intermediária recebendo as funções que devem ser executadas e os argumentos passados a elas.

`Pipe` é cano em inglês, é usado esse nome porque é algo que vai "descendo" como por um cano. No final aparece apenas o resultado esperado.

````js
function incrementar(x) {
  return x + 1
}

function dobrar(x) {
  return x * 2
}

function pipe(inc, dob) {
  return (args) => dob(inc(args))
}
````

Para argumentos da função `pipe` passamos as funções incrementar e dobrar. 

No retorno dessa função passamos um valor que será executado.

`````js
const incrementaEDobra = pipe(incrementar, dobrar)

const resultado = incrementaEDobra(4)

console.log(resultado) // 10
`````

Uma outra forma mais abreviada de escrever as funções:

````js
const incrementar = x => x + 1
const dobrar = x => x * 2
const pipe = (inc, dob) => (args) => dob(inc(args))

const incrementaEDobra = pipe(incrementar, dobrar)
const resultado = incrementaEDobra(4)
console.log(resultado) // 10
````

Porém retorna o mesmo resultado. 

Uma observação, é que para a primeira função, passamos as funções como argumento, na segunda ela espera um valor.

Poderia usar o `currying`:

````js
const incrementaEDobra = pipe(incrementar, dobrar)(4)
console.log(incrementaEDobra) // 10
````

# Conceito 32 - Clean Code

> Qualquer um consegue escrever código que um computador entende. Bons programadores escrevem código que humanos entendem" - Martin Fowler

O objetivo de criar códigos limpos é fazer um trabalho pensando tanto em você no futuro, quando precisar fazer a manutenção do código, quanto pensar nas pessoas que podem vir a precisar trabalhar no código como equipe de trabalho.

De certa forma, é perder um pouco mais de tempo no começo para que depois você ganhe muito mais tempo. 

Alguns conceitos básicos:

### Variáveis - É importante nomear corretamente. 

Não colocar nomes que não indicam nada:

````js
let c = 0
const tempo = 15
````

Muitas das vezes quando você está escrevendo pela primeira vez, parece óbvio que `c` se refere a algo específico, depois de um tempo sem ler o código você não vai ser lembrar de coisas que era óbvias no passado. 

Outra dica é não abreviar:

````js
var respAguarINT = 15
````

Uma forma melhor:

````js
let chamadasParaAPI = 0
const tempoDeAguardandoRespostas = 15
const TEMPO_MAXIMO_DE_RESPOSTA = 10
````

 ### Funções

Os nomes das funções devem seguir as mesmas dicas das variáveis.

O ideal é que as funções façam apenas uma coisa. Realizar apenas uma atividade.

Um exemplo ruim porque a função faz 2 coisas:

````js
function criarUsuario(id) {
  http.post('url' + id).then(dadosUsuario => {
    this.usuario = dadosUsuario
  })
}
````

Exemplo melhor, onde a função faz apenas uma coisa e fica mais legível:

````js
async function buscarUsuario(id) {
  return await http.post('url' + id)tp
}

this.usuario = buscarUsuario(23)
````

---

Outra dica em relação a funções é evitar uma lista grande de argumentos. O ideal é a função ter argumentos únicos. 2 argumentos é aceitável porém 3 é considerado ruim.

Exemplo ruim:

````js
function atualizarUsuario(nome, telefone, endereço, idade, sexo) {
  this.nome = nome
  this.telefone = telefone
  this.endereço = endereço
  this.idade = idade
  this.sexo = sexo
}
````

Se necessário usar uma função com muitos argumentos, uma solução é passar um objeto com todos os argumentos.

O objeto pode até ser grande, mas a declaração da função será curta. 

````js
const usuario = {
  nome: 'Caio',
  telefone: '(62)8888-9999',
  endereço: 'Casa',
  idade: 32,
  sexo: 'masculino',
}

function atualizarUsuario(usuario) {}
````

Outra dica é sempre criar um comentário dizendo o que uma função ou uma variável faz. Comentários de bloco sempre são muito uteis. 

E não esquecer de dizer o que cada parâmetro faz. 

````js
/*
	Atualiza usuario a partir dos dados recebidos
	params usuario dados do usuário
*/

atualizaUsuario(usuario) 
````

Nas IDEs, quando colocamos o mouse sobre a função, ele retorna o que a função faz, para que os parâmetros servem.

### Objetos

Uma prática recomendada é não deixar o usuário usar as propriedades diretamente. 

Para isso são criados `getters` e `setters` para retornar e alterar propriedades.

Ou seja, tornamos as propriedades privadas para que o usuário não faça alterações, e criamos 

````js
function criarUsuario(nome) {
  this.nome = nome;
  getNome = () => this.nome;
  setNome = (novoNome) => this.nome = novoNome;
  
  return { getNome, setNome }
}

const novoUsuario = criarUsuario('Matheus')

console.log(novoUsuario.nome) // undefined
console.log(novoUsuario.getNome()) // "Matheus"
console.log(novoUsuario.setNome('Henrique')) // "Henrique"
````

### Classes

O ES6 trouxe uma forma mais legível de construir classes. Não faz mais sentido usar as confusas funções construtoras. 

Criar um `chain` dos métodos para deixar o código menos verboso e melhorar a legibilidade.

Retornar um `this` dos métodos que quero habilitar o `chain`.

Para criar um `chain` dos métodos, retornamos todos os métodos. Assim será possível encadea-los.

Nesse exemplo temos uma classe com métodos de opções de texto:

````js
class TextOptions {
  constructor() {
    this.text = ''
  }
  getText = () => this.text
  setText = (text) => {
    this.text = text
    return this
  }
  upperCase = () => {
    this.text = this.text.toUpperCase()
    return this
  }
  lowerCase = () => {
    this.text = this.text.toLowerCase()
    return this
  }
  invertText = () => {
    this.text = this.text.split('').reverse().join('')
    return this
  }
}
````

Então referenciamos a classe e usamos os métodos dela.

````js
const _textOptions = new TextOptions()

let emanuelInvert = _textOptions.setText('Emanuel').invertText().getText()

console.log(emanuelInvert) // leunamE
````

Assim como podemos também fazer um `chain` com outros métodos:

````js
let emanuel = _textOptions.setText('Emanuel').lowerCase().invertText().getText()

console.log(emanuel) // leuname
````

````js
let emanuel = _textOptions.setText('Emanuel').upperCase().invertText().getText()

console.log(emanuel) // LEUNAME
````

Dessa forma podemos usar os métodos em uma sequência e obter o resultado final. Sem o encadeamento teríamos que chamar um método diferente em cada linha para manipular o texto.