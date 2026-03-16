const credenciais = {
  "Alemanha": { senha: "mxqy1", pagina: "alemanha.html" },
  "União Soviética": { senha: "gzua2", pagina: "urss.html" },
  "Reino Unido": { senha: "uybe3", pagina: "uk.html" },
  "França": { senha: "rdmz4", pagina: "franca.html" },
  "Estados Unidos": { senha: "qefm5", pagina: "eua.html" },
  "Japão": { senha: "vmba6", pagina: "japao.html" },
  "Itália": { senha: "ufax7", pagina: "italia.html" },
  "China": { senha: "otuz8", pagina: "china.html" },
  "Checoslováquia": { senha: "fotq9", pagina: "checoslovaquia.html" },
  "Polônia": { senha: "baxm1", pagina: "polonia.html" },
  "Romênia": { senha: "nigga1", pagina: "romenia.html" }
};

function b_login(){
  const pais = document.getElementById('pais').value;
  const senha = document.getElementById('senha').value;
  const pais1 = document.getElementById('pais');
  const senha1 = document.getElementById('senha');
  const textoErro = document.getElementById('texto-erro');

  if(credenciais[pais] && credenciais[pais].senha === senha){
    window.location.href = credenciais[pais].pagina;
  } else {
    textoErro.textContent = "Preencha as informações corretamente";
    if(!credenciais[pais]){
      pais1.value = "";
      senha1.value = "";
      pais1.parentElement.classList.add('incorreto');
      pais1.placeholder = "Insira um país válido.";
    } else {
      senha1.value = "";
      senha1.parentElement.classList.add('incorreto');
      senha1.placeholder = "Senha incorreta.";
    }
  }
}
