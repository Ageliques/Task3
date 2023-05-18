import './style.css'

const deposit = document.getElementById('deposit-type');
const rurururur = document.getElementById('rurururur');
deposit.addEventListener('click', () =>{
	updateTerm()
})

rurururur.addEventListener('click', () =>{
	calculate()
})

function updateTerm() {
	let depositType = document.getElementById("deposit-type").value;
	let depositTermSelect = document.getElementById("deposit-term");

	depositTermSelect.innerHTML = "";

	if (depositType === "replenished") {
		let terms = ["6", "12", "18", "24"];

		for (let i = 0; i < terms.length; i++) {
			let option = document.createElement("option");
			option.value = terms[i];
			if (option.value==24)
				option.text = terms[i] + " месяца";
			else option.text = terms[i] + " месяцев";
			depositTermSelect.appendChild(option);
		}
	} else if (depositType === "urgent") {
		let terms = ["3", "6", "9", "12", "18", "24"];

		for (let i = 0; i < terms.length; i++) {
			let option = document.createElement("option");
			option.value = terms[i];
			if ((option.value==3) || (option.value==24))
				option.text = terms[i] + " месяца";
			else option.text = terms[i] + " месяцев";
			depositTermSelect.appendChild(option);
		}
	}
}

function calculate() {
	let depositType = document.getElementById("deposit-type").value;
	let depositTerm = document.getElementById("deposit-term").value;
	let depositAmount = document.getElementById("deposit-amount").value;
	let resultDiv = document.getElementById("result");


	if (depositType === "" || depositTerm === "" || depositAmount === "") {
		resultDiv.innerHTML = "Пожалуйста заполните все поля";
		return;
	}

	if (depositAmount < 0) {
		resultDiv.innerHTML = "Введите положительное число";
		return;
	}

	depositAmount = parseFloat(depositAmount);


	let interestRate;
	if (depositType === "replenished") {
		if (depositTerm === "6") {
			interestRate = 0.2;
		} else if (depositTerm === "12") {
			interestRate = 0.22;
		} else if (depositTerm === "18") {
			interestRate = 0.15;
		} else if (depositTerm === "24") {
			interestRate = 0.1;
		}
	} else if (depositType === "urgent") {
		if (depositTerm === "3") {
			interestRate = 0.2;
		} else if (depositTerm === "6") {
			interestRate = 0.22;
		} else if (depositTerm === "9") {
			interestRate = 0.23;
		} else if (depositTerm === "12") {
			interestRate = 0.24;
		} else if (depositTerm === "18") {
			interestRate = 0.18;
		} else if (depositTerm === "24") {
			interestRate = 0.15;
		}
	}


	let totalAmount = depositAmount * (1 + interestRate) ** (depositTerm / 12);


	depositAmount = depositAmount.toFixed(2);
	totalAmount = totalAmount.toFixed(2);


	if (depositType=="replenished")
	{
		if ((depositTerm==3) || (depositTerm==24))
		{let resultMessage = "Вы выбрали поплняемый вклад "  + " на срок  " + depositTerm + " месяца " + " размером - " + depositAmount + " рублей."+
			" В конце ваш склад будет составлять " + totalAmount + " рублей.";
			resultDiv.innerHTML = resultMessage;}
		else {let resultMessage = "Вы выбрали поплняемый вклад "  + " на срок  " + depositTerm + " месяцев " + " размером - " + depositAmount + " рублей."+
			" В конце ваш склад будет составлять " + totalAmount + " рублей.";
			resultDiv.innerHTML = resultMessage;}
	}

	else {if ((depositTerm==3) || (depositTerm==24))
	{let resultMessage = "Вы выбрали срочный "  + " на срок  " + depositTerm + " месяца " + " размером - " + depositAmount + " рублей."+
		" В конце ваш склад будет составлять " + totalAmount + " рублей.";
		resultDiv.innerHTML = resultMessage;}
	else {let resultMessage = "Вы выбрали срочный вклад "  + " на срок  " + depositTerm + " месяцев " + " размером - " + depositAmount + " рублей."+
		" В конце ваш склад будет составлять " + totalAmount + " рублей.";
		resultDiv.innerHTML = resultMessage;}}
}