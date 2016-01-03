var app = {

run : function(n, m) {
		this.addWrapper();
		this.addForm();
		this.addTitle('Тест по программированию');

		for(var i = 0; i < n; i++) {
			this.addTask({
				tagName: 'h2',
				className: 'test__item',
				content: (i+1)+'. Вопрос №'+ (i+1)
			});
			for (var k = 1; k <= m; k++){
				this.addVariant(i, k, 'Вариант ответа №'+k);
			}
		}

		this.addSubmit('Проверить');
	},
	
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
	
	addTitle: function(text) { 
	  var form = document.body.querySelector('.form');
	  var title = document.createElement('h1');

	  title.setAttribute('class','title');
	  title.innerHTML = text;
	  form.appendChild(title);
	},

	addTask: function(params) {
		var element = document.createElement(params.tagName);

		if (params.className) {
			element.className = params.className;
		}

		if (params.content) {
			element.innerHTML = params.content;
		}

		var form = document.body.querySelector('.form'); 
		form.appendChild(element);

		return element;
	},

	addVariant: function(i,k,text) { 
	  var variant = document.createElement('label');
	  var form = document.body.querySelector('.form'); 

	  variant.setAttribute('class','test__variant');
	  variant.innerHTML='<input type="checkbox" name="q'+i+'_v'+
	  	k+'" class="test__checkbox">'+text;
	  form.appendChild(variant);
	},

	addSubmit: function(text) { 
	  var form = document.body.querySelector('.form');
	  var submit = document.createElement('input');

	  submit.setAttribute('type','submit');
	  submit.setAttribute('class','btn_submit');
	  submit.setAttribute('value',text);
	  form.appendChild(submit);
		
	},

};

app.run(5,3);