const gerarBtn = document.getElementById('gerarBtn');
const senhaGerada = document.getElementById('senhaGerada');

const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

gerarBtn.addEventListener('click', () => {
  const tamanho = parseInt(document.getElementById('tamanhoSenha').value);
  const incluirLetras = document.getElementById('letras').checked;
  const incluirNumeros = document.getElementById('numeros').checked;
  const incluirSimbolos = document.getElementById('simbolos').checked;

  let caracteres = "";
  if (incluirLetras) caracteres += letras;
  if (incluirNumeros) caracteres += numeros;
  if (incluirSimbolos) caracteres += simbolos;

  if (!caracteres) {
    senhaGerada.textContent = "Escolha ao menos um tipo de caractere!";
    return;
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  senhaGerada.textContent = senha;
});
