# Doorbell
Doorbell using synchronized websites
Requires domain and server to work

Idea of this app is to create doorbell by using synchronized websites. Clicking the alarm button on any "Doorbell" website will send a request to server, 
which will broadcast alarm to all open "Doorbell" websites. At least one website must be open in a place you want to notify and then anyone can go to same website 
with their smartphone and ring the doorbell.

Downside of this is that you need to have a spare web server lying around instead of physical doorbell.

Created with Node.js + HTML/CSS
Requires node modules
- express
- socket.io
