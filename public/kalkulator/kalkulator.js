// Created by Muhammad Rasyidi

document.addEventListener("DOMContentLoaded", (e) => {
	buatKonten();

	let hasil = document.getElementById("hasil");
	hasil.addEventListener("click", hitung);	

	let trigger = document.getElementsByClassName("trigger");
	Array.from(trigger).forEach((e) => {
		e.addEventListener("click", () => {
			document.getElementById("operator").innerHTML = e.innerHTML;
			let input = document.querySelectorAll("input");
			if(input[2].value !== ""){
				input[0].value = input[2].value;
				input[1].value = "";
				input[2].value = "";
			}
		});
	});

	let clear = document.getElementById("clear");
	clear.addEventListener("click", clearNilai);
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

			const button_clear = document.createElement("button");
			button_clear.id = "clear";
			button_clear.className = "clear";
			button_clear.innerHTML = "C";
			system.append(button_clear);
}

hitung = () => {
	let input = document.querySelectorAll("input");
	let a1 = parseFloat(input[0].value);
	let a2 = parseFloat(input[1].value);

	let op = document.getElementById("operator").innerHTML;
	let operator = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"/": (a, b) => a / b,
		"*": (a, b) => a * b
	}

	input[2].value = parseFloat(operator[op](a1, a2)).toFixed(2);
}

clearNilai = () => {
	let input = document.querySelectorAll("input");
	Array.from(input).forEach((e) => {
		e.value = "";
	});
}