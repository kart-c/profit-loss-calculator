const initialPriceInput = document.querySelector('#initial-price');
const stockQtyInput = document.querySelector('#stock-qty');
const currentPriceInput = document.querySelector('#current-price');
const calcBtn = document.querySelector('.calc-btn');
const output = document.querySelector('.output-text');

function calculate() {
	output.innerText = '';
	if (
		initialPriceInput.value !== '' &&
		Math.sign(initialPriceInput.value) !== -1 &&
		stockQtyInput.value !== '' &&
		Math.sign(stockQtyInput.value) !== -1 &&
		currentPriceInput.value !== '' &&
		Math.sign(currentPriceInput.value) !== -1
	) {
		initialPrice = Number(initialPriceInput.value);
		stockQty = Number(stockQtyInput.value);
		currentPrice = Number(currentPriceInput.value);
		const stockReturn = Math.abs(currentPrice - initialPrice) * stockQty;
		const percentReturn = ((stockReturn / (initialPrice * stockQty)) * 100).toFixed(2);
		if (initialPrice > currentPrice) {
			output.style.color = 'red';
			output.innerText = `Sorry you suffered a loss of ${stockReturn} and the loss percentage is ${percentReturn} %`;
		} else if (initialPrice === currentPrice) {
			output.style.color = 'black';
			output.innerText = `Congrats! You broke even`;
		} else {
			output.style.color = 'green';
			output.innerText = `Hey, your profit is ${stockReturn} and the percent is ${percentReturn} %`;
		}
	} else {
		return (output.innerText = 'Enter valid number in all fields');
	}
}

calcBtn.addEventListener('click', calculate);
