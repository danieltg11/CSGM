function b_login(){
    var pais = document.getElementById('pais').value;
    var senha = document.getElementById('senha').value;
    var textoerro = document.getElementById('texto-erro').value;
    var pais1 = document.getElementById('pais')
    var senha1 = document.getElementById('senha')
    var pais_passou = (pais == 'Alemanha' ||pais == 'União Soviética' ||pais == 'Reino Unido' ||pais == 'França' ||pais == 'Estados Unidos' ||pais == 'Japão' ||pais == 'Itália' ||pais == 'China' ||pais == 'Checoslováquia' ||pais == 'Polônia');
    var senha_passou = (senha == 'mxqy1'||senha == 'gzua2'||senha == 'uybe3'||senha == 'rdmz4'||senha == 'qefm5'||senha == 'vmba6'||senha == 'ufax7'||senha == 'otuz8'||senha == 'fotq9'||senha == 'baxm1');
    var alemanha = (pais == "Alemanha" && senha == "mxqy1")
    var urss = (pais == "União Soviética" && senha == "gzua2")
    var uk = (pais == "Reino Unido" && senha == "uybe3")
    var franca = (pais == "França" && senha == "rdmz4")
    var eua = (pais == "Estados Unidos" && senha == "qefm5")
    var japao = (pais == "Japão" && senha == "vmba6")
    var italia = (pais == "Itália" && senha == "ufax7")
    var china = (pais == "China" && senha == "otuz8")
    var czl = (pais == "Checoslováquia" && senha == "fotq9")
    var polonia = (pais == "Polônia" && senha == "baxm1")
    if(alemanha){
        window.location.href = "alemanha.html";
    }
    if(urss){
      window.location.href = "urss.html"; 
    }
    if(uk){
      window.location.href = "uk.html"; 
    }
    if(franca){
      window.location.href = "franca.html"; 
    }
    if(eua){
      window.location.href = "eua.html"; 
    }
    if(japao){
      window.location.href = "japao.html"; 
    }
    if(italia){
      window.location.href = "italia.html"; 
    }
    if(china){
      window.location.href = "china.html"; 
    }
    if(czl){
      window.location.href = "checoslovaquia.html"; 
    }
    if(polonia){
      window.location.href = "polonia.html"; 
    }
    else{
      if(!pais_passou){
        document.getElementById('pais').value = ""
        document.getElementById('senha').value = ""
        pais1.parentElement.classList.add('incorreto')
        document.getElementById('texto-erro').textContent = "Preencha as informações corretamente"
        pais1.placeholder = "Insira um país válido."
      }
      if(!senha_passou){
        document.getElementById('senha').value = ""
        senha1.parentElement.classList.add('incorreto')
        document.getElementById('texto-erro').textContent = "Preencha as informações corretamente"
        senha1.placeholder = "Senha incorreta."

      }
      if(senha_passou && pais_passou){
        document.getElementById('senha').value = ""
        senha1.parentElement.classList.add('incorreto')
        document.getElementById('texto-erro').textContent = "Preencha as informações corretamente"
        senha1.placeholder = "Senha incorreta."

      }
    }
  }