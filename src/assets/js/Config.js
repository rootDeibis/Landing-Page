const Config = {
/* START CONFIG */

'server-logo': 'assets/img/logo.png',

'server-ip': 'mc.minemora.net',

'server-status': {
	'background-color': '#fff659',
	'text-color': 'black',
	'icon': 'assets/img/status.png',

	'value': '{online} / {max} players connected!',
	'copy-value': 'IP COPIED!'
},


'background': {
	'type': 'image', // TYPES: IMAGE OR COLOR
	'value': "assets/img/background.jpg",
	'opacity': {
		'color': 'black',
		'value': 0.8
	}
},


'buttons-style': {
	'background-color': '#fff659',
	'text-color': 'black'
},

'web-buttons': {
	'Store': {
		icon: 'assets/img/store.png',
		url: 'https://store.myweb.net'
	},
	'Forum': {
		icon: 'assets/img/forum.png',
		url: 'https://forum.myweb.net'
	},
	'Bans': {
		icon: 'assets/img/bans.png',
		url: 'https://bans.myweb.net'
	}
}




/* END CONFIG */
};





/* IGNORE */
export default Config;