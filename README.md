## Star Power :sparkles:
#### If this guide helps please star :star: the repo. 
<br />
<p align="center">
  <h3 align="center">:movie_camera: venues-production :clapper:</h3>

  <p align="center">
    Quasar SSR :zap: deployed on DigitalOcean :surfer: using NGINX and PM2.
    <br />
    <br />
    <br />
    <img src="src/statics/venues-production.gif" width="850" height="530">
    <br />
    <br />
    <a href="https://lovejs.dev/">View Demo</a>
    ·
    <a href="https://thevenuesvr.netlify.com/#The_Atrium">View 360 Panoramas</a>
    ·
    <a href="https://github.com/Mary-Tyler-Moore/venues-production/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mary-Tyler-Moore/venues-production/issues">Request Feature</a>
  </p>
</p>

<br />

## :muscle: Motivation:
#### Working with Quasar CLI has been a game changer for my development and deployment work flow. This README documents the deployment of a Quasar SSR build on DigitalOcean using PM2 and NGINX.

<br />

## :floppy_disk: Developer Accessibility Statement:
#### :crystal_ball: I see great success in your future.  Believe in yourself and you will achieve anything. Quasar makes it easy to develop cross platform applications from a single code base. 
#### :broken_heart: Anyone can experience burn out when learning a new technology. If you face an error during installation or deployment, don't sweat :sweat: it!
#### :gift_heart: Always remember there are Quasarians worldwide :earth_americas: ready to help you.

<br />
## :mag_right: Useful Resources:
<br />
## Chat Support

Ask questions at the official community Discord server: [https://chat.quasar.dev](https://chat.quasar.dev)

## Community Forum

Ask questions at the official community forum: [https://forum.quasar.dev](https://forum.quasar.dev)

## Stay in Touch

For latest releases and announcements, follow on Twitter: [@quasarframework](https://twitter.com/quasarframework)

## Join Quasar on Discord:
###### [Quasar Framework Invitation](https://discordapp.com/invite/5TDhbDg)

### Quasar on Github:
###### [quasarframework/quasar](https://github.com/quasarframework/quasar)
###### [Sponsor Quasar](https://github.com/sponsors/rstoenescu)
###### [quasar-awesome](https://github.com/quasarframework/quasar-awesome)


## Documentation

Head on to the Quasar Framework official website: [https://quasar.dev](https://quasar.dev)
###### [CLI Documentation](https://quasar.dev/start/quasar-cli)

<br />
---
<br />


## :rocket: To-do:
:zap:
Updates to venues-production - 1/24/2020
- [ ] Write README.md
- [ ] Replace placeholder images with gifs I recorded using Terminalizer
- [ ] Setup Prettier 
- [ ] Add new map page
- [ ] Update contact page



## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<br />
---
<br />
## :cd: Project History

### Performance Improvements:
<img src="https://github.com/Mary-Tyler-Moore/venues-production/blob/master/src/statics/header-bg.jpg?raw=true" height="500" />

### UI/UX Improvments:
<img src="https://github.com/Mary-Tyler-Moore/venues-production/blob/master/src/statics/header-bg.jpg?raw=true" height="500" />

### Desktop UI:
<img src="https://github.com/Mary-Tyler-Moore/venues-production/blob/master/src/statics/header-bg.jpg?raw=true" height="500" />

### Mobile UI:
<img src="https://github.com/Mary-Tyler-Moore/venues-production/blob/master/src/statics/header-bg.jpg?raw=true" height="500" />

<br />

## :cd: About The Project

### Built With

* []() Quasar
* []() VueJS
* []() SCSS


### Project Features

* []() I18N
* []() A11Y
* []() Dark Mode


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### :electric_plug: Installation
 
1. Clone the repo
```sh
git clone https://github.com/Mary-Tyler-Moore/venues-production.git
```
2. Install NPM packages
```sh
npm install
```
### :hammer: Build the app for production
```bash
quasar build -m ssr
```


### Add Icon-Genie Extension
```bash
quasar ext add @quasar/icon-genie
```
<br />
## :neckbeard: Node.js Deployment

> Steps to deploy a Node.js app to DigitalOcean using PM2, NGINX as a reverse proxy and an SSL from LetsEncrypt

## 1. Sign up for Digital Ocean :surfer:
If you use the referal link below, you get $10 free (1 or 2 months)
https://m.do.co/c/5424d440c63a

## 2. Create a droplet and log in via ssh :computer:
 I will be using the root user, but would suggest creating a new user

## 3. Install :arrow_heading_down: Node/NPM
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs

node --version
```
<img src="http://placekitten.com/810/510" />

## 4. Clone your project from Github :octocat:
There are a few ways to get your files on to the server, I would suggest using Git
```
git clone yourproject.git
```
<img src="http://placekitten.com/820/500" />

### 5. Install dependencies and test app
```
cd yourproject
npm install
npm start (or whatever your start command)
# stop app
ctrl+C
```
<img src="http://placekitten.com/805/500" />

## 6. Setup PM2 process manager to keep your app running :running: :exclamation: :tiger2:

```
sudo npm i pm2 -g
pm2 start app (or whatever your file name)

# Other pm2 commands
pm2 show app
pm2 status
pm2 restart app
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

# To make sure app starts when reboot
pm2 startup ubuntu
```
### You should now be able to access your app using your IP and port. Now we want to setup a firewall blocking that port and setup NGINX as a reverse proxy so we can access it directly using port 80 (http)
<img src="http://placekitten.com/800/500" />

## 7. Setup ufw firewall
```
sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)
```
<img src="http://placekitten.com/801/500" />

## 8. Install NGINX and configure
```
sudo apt install nginx

sudo nano /etc/nginx/sites-available/default
```
Add the following to the location part of the server block
```
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
```
# Check NGINX config
sudo nginx -t

# Restart NGINX
sudo service nginx restart
```

### You should now be able to visit your IP with no port (port 80) and see your app. Now let's add a domain
<img src="http://placekitten.com/800/503" />

## 9. Add domain in Digital Ocean
In Digital Ocean, go to networking and add a domain

Add an A record for @ and for www to your droplet


## Register and/or setup domain from registrar
I prefer Namecheap for domains. Please use this affiliate link if you are going to use them
https://namecheap.pxf.io/c/1299552/386170/5618

Choose "Custom nameservers" and add these 3

* ns1.digitalocean.com
* ns2.digitalocean.com
* ns3.digitalocean.com

It may take a bit to propogate

## 10. Add SSL with LetsEncrypt
```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Only valid for 90 days, test the renewal process with
certbot renew --dry-run
```

Now visit https://yourdomain.com and you should see your Node app

<img src="http://placekitten.com/800/505" />


## Usage

I hope this is useful to anyone working with Quasar and VueJS. I'd also like to provide an easy way for folks to share 360 panoramas. 




## Roadmap

See the [open issues](https://github.com/Mary-Tyler-Moore/venues-production/issues) for a list of proposed features (and known issues).



## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the Creative Commons BY-NC-SA License. See `LICENSE` for more information.



# :love_letter: Email Me

#### tmoorewebdesigns@gmail.com

## :pager: Chat me on Discord :space_invader: 
#### @Mary-Tyler-Moore 

## Author's Environmental Impact:
#### I am seeking to work 100% remote. I am seeking to stop driving my car :car: to an office :office: fives days per week. Please help me become a carbon :deciduous_tree: neutral :recycle: JS developer by sharing your stars :sparkles: with me.
