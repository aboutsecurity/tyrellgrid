# Cyberpunk Web Labyrinth

This project sets up an Nginx server inside a Docker container to host a "Web Labyrinth" that traps crawlers in an endless maze of Blade Runner quotes. Well-behaved crawlers see a `robots.txt` disallowing `/tyrellgrid`, but malicious actors that ignore it will be lured into the Tyrell Grid.

## Project Structure

- **Dockerfile**: Builds the Nginx image.
- **default.conf**: Nginx configuration.
- **html/**
  - *index.html*: Home page.
  - *robots.txt*: Instructs crawlers to avoid `/tyrellgrid`.
  - *tyrellgrid.html*: The trap page.
  - *css/style.css*: Cyberpunk theme styles.
  - *js/script.js*: Logic to generate random text labyrinth.
  - *data/*: Directory for the Blade Runner script.

## Setup

1. From within this directory, start the application using Docker Compose:

   ```bash
   docker-compose up --build -d
   ```

2. Visit `http://localhost:8080` in your browser.

3. To stop and remove the containers, network, and default volumes:

   ```bash
   docker-compose down
   ```

4. (Optional) To view real-time logs for the service:

   ```bash
   docker-compose logs -f
   ```

## How it Works

- `robots.txt` disallows well-behaved crawlers from `/tyrellgrid`.
- The `/tyrellgrid` page uses JavaScript to randomly assemble snippets from the Blade Runner script into paragraphs and generates a link back to itself with a random query parameter.
- Malicious crawlers get stuck following infinite links until they exhaust resources.

## Author

This project was created by Ismael Valenzuela (@aboutsecurity), author of SANS Security 530, the #AllAroundDefender class.
