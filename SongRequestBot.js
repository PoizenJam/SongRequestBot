const tmi = require('tmi.js');
const ioHook = require('iohook');
var fs = require('fs');

// Define configuration options
const opts = {
  identity: {
    username: "USERNAME",
    password: "PASSWORD"
  },
  channels: [
    "CHANNEL_NAME"
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('connected', onConnectedHandler);

// Register and start hook
ioHook.start();

// Connect to Twitch:
client.connect();

// Change working directory to Rocksniffer Output folder
process.chdir('ROCKSNIFFER_OUTPUT_DIRECTORY')

// Activate function that listens for keypress.
ioHook.on('keydown', function(KeyPress) {
	// Uncomment the following line to have the script print out the keypress detail for custom configuration
	// console.log(KeyPress);  
	if(KeyPress.keycode == 73){
		
		// Read song_details.txt from RockSniffer to determine 'Artist - Song Title'
		fs.readFile('song_details.txt', 'utf8', function(err, data) {
			
			// Throw error if song_details not found
			if (err) throw err;
			
			// If song_details.txt not empty, create and send string to chat in the form of '!sr ARTIST - TITLE' for KokoliBot
			if (data !== '') {client.say('CHANNEL_NAME','!sr ' + data);}
		});	
	}
	
	if(KeyPress.keycode == 77){
		client.say('CHANNEL_NAME','!next');	
	}
});

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
