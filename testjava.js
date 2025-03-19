function rectange(){
	let canvas = document.getElementById('c1');
	let ctx = canvas.getContext('2d')
	ctx.beginPath();
	ctx.strokeStyle="green";
	ctx.fillStyle = "rgb(130,161,177)";
	ctx.moveTo(120,100);
	ctx.lineTo(280,100);
	ctx.quadraticCurveTo(300,100,300,120);
	ctx.lineTo(300,180);
	ctx.quadraticCurveTo(300,200,280,200);
	ctx.lineTo(120,200);
	ctx.quadraticCurveTo(100,200,100,180);
	ctx.lineTo(100,120);
	ctx.quadraticCurveTo(100,100,120,100);
	ctx.fill()
	ctx.closePath();
	ctx.stroke();
}


if (typeof html5Qrcode === "undefined) {
	console.error("Erreur: la librairie QR code");
}else {
	console.log("c'est cool");
};

let scanner = null;
document.getElementById("QrCode").addEventListener("click",function () {
	document.getElementById("reader").style.display = "block";
	scanner = new html5QrcodeScanner("reader",{fps:10,qrbox:250});
	scanner.render(onScanSuccess);
});