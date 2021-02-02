const create = (s) => document.createElement(s),
	  createText = (s) => document.createTextNode(s),
	  select = (s) => document.querySelector(s),
	  all = (s) => document.querySelectorAll(s);

import {default as Config} from './Config.js';




// CONFIG WEBPAGE 

const bg = Config['background'];

select('body').style.background = (bg['type'] == 'image') ? 'url("'+ bg['value'] +'")' : bg['value'];

select('.bg-op-page').style.backgroundColor = (bg.opacity.color == undefined) ? 'black' : bg.opacity.color;
select('.bg-op-page').style.opacity = (bg.opacity.value == undefined) ? 0.5 : bg.opacity.value;


// SET LOGO


select('.website-logo').src = Config['server-logo'];




// SET BUTTONS

const ButtonStyle = Config['buttons-style']
const Buttons = Config['web-buttons'];
const ButtonName = Object.keys(Buttons);


for(var i = 0; i < ButtonName.length; i++) {
	var Text = create('p');
	Text.innerText = ButtonName[i];

	Text.style.background = (ButtonStyle['background-color'] == undefined) ? "#fff659" : ButtonStyle['background-color']

	Text.style.color = (ButtonStyle['text-color'] == undefined) ? "black" : ButtonStyle['text-color']

	var ConfigB = Buttons[ButtonName[i]];

	var Button = create('a');
	var Icon = create('img');

	if (ConfigB.url != undefined) Button.setAttribute('href', ConfigB.url);
	if (ConfigB.icon != undefined) Icon.setAttribute('src', ConfigB.icon), Button.appendChild(Icon);

	Button.appendChild(Text);

	select('.website-urls').appendChild(Button);


}


// SET STATUS BUTTON
const StatusButton = select('.server-status-checker');
const StatusButtonicon = select('.server-status-checker img');
const StatusButtonText = select('.server-status-checker span');

const StatusConfig = Config['server-status'];


StatusButtonicon.src = StatusConfig['icon'];



StatusButton.style.background = (StatusConfig['background-color'] == undefined) ? '#fff659' : StatusConfig['background-color'];
StatusButtonText.style.color = (StatusConfig['text-color'] == undefined) ? 'black' : StatusConfig['text-color'];

// CHECK SERVER STATUS 
ServerStatus(Config['server-ip']).getData(server => {

	var IsOnline = server.online;


	const ButtonValue = StatusConfig['value'],
		  getStatus = (s) => s.replace(/{online}/g, IsOnline ? server.players.online : 0).replace(/{max}/g, IsOnline ? server.players.max : 0);


    StatusButtonText.innerHTML = getStatus(ButtonValue);

});

// ADD CLIPBOARD

StatusButton.addEventListener('click', function() {
	var L = StatusButtonText.innerHTML;
	var Text = create('input');
	Text.value = Config['server-ip'];


	select('body').appendChild(Text);

	Text.select();
	document.execCommand('copy');

	StatusButtonText.innerHTML = StatusConfig['copy-value'];

	Text.remove();

	setTimeout(() => StatusButtonText.innerHTML = L, 3 * 1000);


});
