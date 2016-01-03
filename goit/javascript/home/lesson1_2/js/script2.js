
alert('Hello!');
//console.log('Hi');

var names = new Array(5);

for (var i=0; i < names.length; i++)
{
	names[i]=prompt('Введіть ім\'я');
}

var name = prompt('Login: ');
var k = -1; //счётчик совпадений имён

for (i = 0; i < names.length; i++)
{
	if (names[i] == name) {
	  k = i;
	  break; 
	}
}

if (k != -1)
{
	alert(name+', вы успешно вошли!');
}
else{
	alert('Пользователь '+name+' не обнаружен!');
}
