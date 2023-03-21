function trocar(){
	let minhaimagem = document.getElementById("imagem");
	let aleatorio = Math.trunc(Math.random()*10);
	minhaimagem.src = "img/" + aleatorio + ".jpg"; 
}