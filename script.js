visibilidade1 = true
visibilidade2 = false

function cadastro() {

  if (visibilidade1==true && visibilidade2==false) {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
    
    visibilidade1 = false;
    visibilidade2 = true;
  }
}

function login() {

  if (visibilidade1==false && visibilidade2==true) {
    document.getElementById("login").style.display = "block";
    document.getElementById("cadastro").style.display = "none";
    
    visibilidade1 = true;
    visibilidade2 = false;
  }
}



/* 
--------PARA AS DUAS DIVs -------

function ocultarExibir() { // Quando clicar no botão.

        if (visibilidade1==true && visibilidade2==false) {
            document.getElementById("login").style.display = "none";
            document.getElementById("cadastro").style.display = "block";
            visibilidade1 = false;
            visibilidade2 = true;
        } else {
            document.getElementById("login").style.display = "block";
            document.getElementById("cadastro").style.display = "none";
            visibilidade1 = true;
            visibilidade2 = false;
        }
    }



------------ PARA SOMENTE UMA DIV -----------

function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }
*/
