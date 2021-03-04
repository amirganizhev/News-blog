let registrationName  = document.querySelector('.registration-name');
let registrationSurname = document.querySelector('.registration-surname');
let registrationMail = document.querySelector('.registration-mail');
let registrationPassword = document.querySelector('.registration-password');

let registrationButton = document.querySelector('.registration-button');

registrationButton.onclick = function () {
	/*Создание обьекта, для посылание запроса на различные ресурсы*/
	let xhttp = new XMLHttpRequest();

	/*Функция, которая вызывается всякий раз, когда поле readyState меняет свое значение*/
	xhttp.onreadystatechange = function () {
		/*Проверка состояния запроса*/
		if (this.readyState == 4 && this.status == 200) {
			/*Ответ на запрос в виде строки*/
			myFynctiom(this.responseText)
		}
	}

	/*Открытие запроса, синхронный - true, асинхронный - false*/
	xhttp.open('POST', 'КУДА ОТПРАВИТЬ ЗАПРОС', false);
	/*Конфигурация запросов заголовков,
	показывает как отправлять данные,
	какие данные как их обрабатывать и тд,
	синтаксис: XMLHttpRequest.setRequestHeader(header, value)*/
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	/*Послание запроса*/
	xhttp.send("КАКИЕ ПАРАМЕТРЫ Я БУДУ ПЕРЕДАВАТЬ");

	function myFynctiom(data) {
		console.log(data);
	}
}
