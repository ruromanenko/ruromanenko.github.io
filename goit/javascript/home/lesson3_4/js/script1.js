var test = {

	
	addWrapper: function() {
		var body = document.body;
		var wrapper = document.createElement('div');

		wrapper.setAttribute('class','wrapper');
		body.insertBefore(wrapper,body.children[0]);
	},

	addForm: function() {
	  var wrapper = document.body.querySelector('.wrapper');
	  var form = document.createElement('form');

	  form.setAttribute('class','form');
	  form.setAttribute('method','POST');
	  wrapper.appendChild(form);
	},
	
	addTitle: function(text) { //Добавить заголовок
	  var form = document.body.querySelector('.form');
	  var title = document.createElement('h1');

	  title.setAttribute('class','title');
	  title.innerHTML = text;
	  form.appendChild(title);
	},

	addList: function() { //Добавить заголовок
	  var form = document.body.querySelector('.form');
	  var list = document.createElement('ol');

	  list.setAttribute('class','test');
	  form.appendChild(list);
	},

	addQuestion: function(text) { //Добавить вопрос
	  var test = document.body.querySelector('.test');
	  var question = document.createElement('li');

	  question.setAttribute('class','test__item');
	  question.innerHTML='<span class="test__task">'+text+"</span>";
	  test.appendChild(question);
	},

	addVariant: function(n,text) { //Добавить вариант ответа
	  var question = document.body.querySelector('.wrapper').querySelectorAll('.test__item')[n-1];
	  var variant = document.createElement('div');
	  var k = question.querySelectorAll('.test__variant').length+1; //номер варианта ответа

	  variant.setAttribute('class','test__variant');
	  variant.innerHTML='<input type="checkbox" name="q'+n+'_v'+
	  	k+'" class="test__checkbox"><span class="test__v">'+text+'</span>';
	  question.appendChild(variant);
	},

	addVariant2: function(n,text) { //Добавить вариант ответа
	  var question = document.body.querySelector('.wrapper').querySelectorAll('.test__item')[n-1];
	  var variant = document.createElement('label');
	  var k = question.querySelectorAll('.test__variant').length+1; //номер варианта ответа

	  variant.setAttribute('class','test__variant');
	  variant.innerHTML='<input type="checkbox" name="q'+n+'_v'+
	  	k+'" class="test__checkbox">'+text;
	  question.appendChild(variant);
	},

	addSubmit: function(text) { //Добавить кнопку "Проверить"
	  var form = document.body.querySelector('.form');
	  var submit = document.createElement('input');

	  submit.setAttribute('type','submit');
	  submit.setAttribute('class','btn_submit');
	  submit.setAttribute('value',text);
	  form.appendChild(submit);
		
	},

	write: function() {
		console.log(this.body);
	} 

};

test.addWrapper();
test.addForm();
test.addTitle('Тест по программированию');
test.addList();
test.addQuestion('Вопрос №1');
test.addQuestion('Вопрос №2');
test.addQuestion('Вопрос №3');

test.addVariant2(1,'Вариант ответа №1');
test.addVariant2(1,'Вариант ответа №2');
test.addVariant2(1,'Вариант ответа №3');

test.addVariant2(2,'Вариант ответа №1');
test.addVariant2(2,'Вариант ответа №2');
test.addVariant2(2,'Вариант ответа №3');

test.addVariant2(3,'Вариант ответа №1');
test.addVariant2(3,'Вариант ответа №2');
test.addVariant2(3,'Вариант ответа №3');

test.addSubmit('Проверить мои результаты');

var app ={
createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.className) {
			element.className = params.className;
		}

		if (params.content) {
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}
		return element;
	},

createTasks : function(n, m) {
	for(var i = 0; i < n; i++) {
		this.createElement({
			tagName: 'h2',
			className: 'test__item',
			content: 'Вопрос №'+ (i+1),
			parentElement: wrapper
		})
	}
}

}

var body = document.body;
var wrapper = body.querySelector('.wrapper');

app.createTasks(5,3);