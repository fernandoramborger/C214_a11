const Pessoa = (nome, idade) => ({
    nome,
    idade,
    getDados: () => ({nome, idade})
})

const pessoa = Pessoa('Fernando', 21)
console.log(pessoa.getDados())