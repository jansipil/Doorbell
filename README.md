# Doorbell
Doorbell using synchronized websites

Requires domain and server to work

Idea of this app is to create doorbell by using synchronized websites. Clicking the alarm button on any "Doorbell" website will send a request to server, 
which will broadcast alarm to all open "Doorbell" websites. At least one website must be open in a place you want to notify and then anyone can go to same website 
with their smartphone and ring the doorbell.

Downside of this is that you need to have a spare web server lying around instead of physical doorbell.

Created with Node.js + HTML/CSS.

Uses [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for defining Node version. Set the .nvmrc defined Node.js version into use:
```bash
nvm install
nvm use
```

Start the server with following command. 
```bash
node webserver.js
```

Project requires node modules
- express
- socket.io

## Running with docker compose

To run the Doorbell app using docker compose, follow these steps:

1. **Ensure Docker and docker compose are installed**  
   If you don't have them installed, follow the instructions here:  
   - [Docker Installation Guide](https://docs.docker.com/get-docker/)  
   - [docker compose Installation](https://docs.docker.com/compose/install/)  

2. **Clone the repository and navigate to the project folder**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

3. Define the port (optional)

If you want to change the default port (8080), create a .env file and set the port number:

```bash
echo "DOORBELL_PORT=4000" > .env
```

4. Start the application with docker compose:
```bash
docker compose up -d
```

The app will be available at `http://localhost:8080` (or the port defined in `.env`).

5. Stop the application

```bash
docker-compose down
```
