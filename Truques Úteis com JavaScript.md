## Truques Úteis

### Truque - Atributo defer

É um truque usado para que o a tag de script seja lida apenas quando o HTML for completamente carregado.

Existem vários truques em relação a isso, eventos que programadores antigos gostavam de usar mas sem dúvida alguma esse é o mais fácil e rápido.

````html
<script src="main.js" defer></script>
````

### Truque - 3 formas úteis de clonar objeto

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

### Truque - Filtrar valores duplicados em um array

````js
let nomes = ['Samuel', 'João', 'Pedro', 'Ana', 'Fernanda', 'João', 'Pedro']

// João e pedro repetidos 2x

console.log([...nomes]) // ["Samuel","João","Pedro","Ana","Fernanda","João","Pedro"]
console.log([... new Set(nomes)]) // ["Samuel","João","Pedro","Ana","Fernanda"]
````

### Truque - Verificar se um objeto está vazio

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

### Truque - Limpar todos os campos do array 

````js
let arrayTeste = ['campo0', 'campo1', 'campo2']
arrayTeste.length = 0

console.log(arrayTeste) // []
````

### Truque - Número aleatório dentro de um intervalo

````js
function randomNumber(num1, num2) {
  return Math.random() * (num2 - num1) + num1
}

console.log(randomNumber(10, 20))
````

### Truque - Teste condicional rápido

````js
let condition = false

if (condition) {
  console.log('Verdadeiro')
}

condition && console.log('Verdadeiro')
````

### Truque - Fazer um evento acontecer apenas 1 vez

````js
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  console.log('teste')
}, { once: true })
````



---

Dica extra de `Destructuring`

https://medium.com/geekculture/10-javascript-concepts-that-every-developer-should-know-702330e662e2

---

Operadores

Comma Operator

Usado para avaliar várias expressões em uma linha.

````js
for (var i = 0, j = 10; i <= 3; i++, j++){
  console.log(`Andar numero: ${i} Apartamento Número: ${j}`)
}

// "Andar numero: 0 Apartamento Número: 10"
// "Andar numero: 1 Apartamento Número: 11"
// "Andar numero: 2 Apartamento Número: 12"
// "Andar numero: 3 Apartamento Número: 13"
````

Operador In

Retorna `true` caso a chave esteja no objeto ou em seu protótipo.

````js
const usuario = {
  nome: 'João',
  profissao: 'Desenvolvedor'
}

console.log('nome' in usuario) // true
delete usuario.nome
console.log('nome' in usuario) // false
console.log('toString' in usuario) // true
````

Observe que `toString` é um método que está no protótipo de todo objeto.

