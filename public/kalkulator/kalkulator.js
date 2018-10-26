// Created by Muhammad Rasyidi

document.addEventListener("DOMContentLoaded", (e) => {
	buatKonten();

	let hasil = document.getElementById("hasil");
	hasil.addEventListener("click", hitung);	

	let trigger = document.getElementsByClassName("trigger");
	Array.from(trigger).forEach(function(e){
		e.addEventListener("click", gantiOperator);
		e.operator = e.innerHTML;
	});
});

buatKonten = () => {
	const kalkulator = document.getElementById("kalkulator");
	kalkulator.className = "kalkulator";

		const title = document.createElement("h4");
		title.innerHTML = "Kalkulator";
		kalkulator.append(title);

		const system = document.createElement("div");
		system.className = "system";
		kalkulator.append(system);

			const input1 = document.createElement("input");
			input1.type = "text";
			input1.size = "5";
			input1.placeholder = "0";
			system.append(input1);

			const operator = document.createElement("p");
			operator.id = "operator";
			operator.innerHTML = "+";
			system.append(operator);

			const input2 = document.createElement("input");
			input2.type = "text";
			input2.size = "5";
			input2.placeholder = "0";
			system.append(input2);

			system.append("=");

			system.append(" ");

			const input3 = document.createElement("input");
			input3.type = "text";
			input3.size = "5";
			input3.placeholder = "0";
			input3.readOnly = true;
			system.append(input3);

			const button_tambah = document.createElement("button");
			button_tambah.innerHTML = "+";
			button_tambah.className = "trigger";
			system.append(button_tambah);

			const button_kurang = document.createElement("button");
			button_kurang.innerHTML = "-";
			button_kurang.className = "trigger";
			system.append(button_kurang);

			const button_bagi = document.createElement("button");
			button_bagi.innerHTML = "/";
			button_bagi.className = "trigger";
			system.append(button_bagi);

			const button_kali = document.createElement("button");
			button_kali.innerHTML = "*";
			button_kali.className = "trigger";
			system.append(button_kali);

			const button = document.createElement("button");
			button.id = "hasil";
			button.innerHTML = "=";
			system.append(button);
}

gantiOperator = (op) => {
	document.getElementById("operator").innerHTML = op.target.operator;
}

hitung = () => {
	let input = document.querySelectorAll("input");
	let a1 = parseInt(input[0].value);
	let a2 = parseInt(input[1].value);

	let op = document.getElementById("operator").innerHTML;
	let operator = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"/": (a, b) => a / b,
		"*": (a, b) => a * b
	}

	input[2].value = operator[op](a1, a2);
}