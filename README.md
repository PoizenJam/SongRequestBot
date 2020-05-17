# SongRequestBot

SongRequestBot is a tool designed to solve a simple problem- adding personal song picks to RS-Playlist without breaking the window focus for Rocksmith 2014.

<H2>Installation</H2>

If you have not created a Twitch Bot or written JavaScript code before, please complete the Twitch Bot tutorial  <a href="https://dev.twitch.tv/docs/irc">Twitch Provides</a> before continuing. Once you have completed it:

-Install the IoHook package
-Edit the 'SongRequestBot.js' to replace USERNAME (Line 8), PASSWORD (Line 9), CHANNEL_NAME (Line 12, 46), & ROCKSNIFFER DIRECTORY (Line 29)
-Launch the bot, either using the command line or by creating a simple BAT file with the code:

start cmd /k node C:\NAME\OF\THE\SONG_REQUEST_BOT_FOLDER\SongRequestBot.js

NOTE: If Rocksmith or Rocksniffer are not active, the bot will detect that song_details.txt is empty and not send any messages.
