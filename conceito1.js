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