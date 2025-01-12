var rus = {
  hello:'Привет,',
  hello_2:' меня зовут',
  hello_3:' Георгий,',
  hello_4:'я',
  hello_5:' системный администратор',
  hello_6:'из Беларуси',
  hello_7:'Я работаю системным администратором около пяти лет.  Преимущественно c windows, но также есть  опыт работы и с Linux. Помимо этого я не понаслышке знаю  о прокладке сетей, ремонте компьютерной техники и периферийного оборудования. Имею опыт работы с web-сайтами,  неплохо  верстаю, имел дело с  разными cms.  Php – не мой конек, но с ним я тоже знаком. В последнее время много интересуюсь Python/Django.',
  hello_8:'резюме',
  hello_9:' .doc',
  hello_10:'Связаться можно',
  hello_11:' вот так',
  hello_12:'образцы html-верстки',
  hello_13:'электронная почта',
  hello_14:'телефон/whatsapp',
  hello_15:'viber',
  hello_16:'Поэтому свои ключевые навыки я бы перечислил так:  компьютерные сети, ремонт компьютеров. Windows/Windows server, AD, DNS, DHCP, TCP/IP. Linux Ubuntu. Виртуализация, VPN. Python/selenium. PHP/mysql/jquery/html/css.',
  hello_17:'Более подробная информация в виде'
};

var eng = {
  hello:'Hi,',
  hello_2:' my name is',
  hello_3:' George,',
  hello_4:'i am a ',
  hello_5:' system administrator',
  hello_6:'from Belarus',
  hello_7:'I have been working as a system administrator for about five years. Mostly it was windows, but there is also experience with linux. In addition, I know firsthand about laying networks and repairing computer and peripheral equipment. I have experience working with web sites, I’m pretty good at html coding, I have deal  with different cms. Php is not my strong suit, but I also know it. Recently I have been interested in Python / Django a lot.',
  hello_8:'CV',
  hello_9:' .doc',
  hello_10:'You can contact',
  hello_11:' like this',
  hello_12:'html layout samples',
  hello_13:'e-mail',
  hello_14:'phone number/whatsapp',
  hello_15:'viber',
  hello_16:'Therefore, I would list my key skills as follows: computer networks , computer repair . Windows / Windows server, AD, DNS, DHCP, TCP / IP. Linux Ubuntu. Virtualization, VPN. Python / selenium. PHP / mysql / jquery / html / css.',
  hello_17:'More detailed information in the'
};

changeLanguage();

function changeLanguage(){
  var language = lang.checked ? eng : rus;
  var index;
  var a = document.querySelectorAll('[text]');
  for (index = 0; index < a.length; ++index) {
     a[index].innerHTML = language[a[index].getAttribute('text')];
  }


}
