
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

