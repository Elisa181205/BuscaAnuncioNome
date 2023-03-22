function teste(){
const pessoas = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 32, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 20, cidade: "Belo Horizonte" },
];

const pessoasContainer = document.getElementById("pessoas-container");

for (let i = 0; i < pessoas.length; i++) {
  const pessoa = pessoas[i];
  
  const pessoaDiv = document.createElement("div");
  pessoaDiv.innerHTML = `
    <h3>${pessoa.nome}</h3>
    <p>Idade: ${pessoa.idade}</p>
    <p>Cidade: ${pessoa.cidade}</p>
  `;
  
  pessoasContainer.appendChild(pessoaDiv);
}
}
