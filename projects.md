---
layout: page
title: Projects
permalink: /projects/
---

My collection of side projects I've created over the years as a way to learn new programming languages,
frameworks, and platforms.

I open-source all of my side projects on [Github page](https://github.com/alfg).

### GuildBit.com
[guildbit.com](http://guildbit.com)

A free, donation-based service for deploying temporary
<span data-tooltip class="has-tip" title="Mumble is an open source, low-latency, high quality voice chat
software primarily intended for use while gaming.">Mumble servers</span>

* Frontend built with YUI Pure CSS
* Backend built in Python using the Flask framework
* Postgres as the Database and SQLAlchemy as the ORM
* Celery messaging queue for scheduling and sending tasks
* Redis as the message broker for Celery and caching store
* Python-requests for sending RESTful requests to the [http://github.com/alfg/murmur-rest](murmur-rest) backend
* AWS as the mailer service and backup storage</li>
* Hosted on [http://digitalocean.com](Digital Ocean)

### Screenchop.com
[Screenchop.com](http://screenchop.com)

[Github](http://github.com/alfg/screenchop)

An image sharing website for gamers to share their in-game screenshots with others.
* Frontend built with Twitter Bootstrap 2.0
* Backend built in Python using the Flask framework
* MongoDB as the database
* AWS S3 for storing images saved in various sizes
* jQuery filedrop plugin used for realtime uploading

### Zedhunt.com
[Github](http://github.com/alfg/zedhunt)

A squad matchmaking platform to help DayZ players find public groups to game with.
I built this project not only to help the DayZ community, but to learn more about frontend javascript frameworks,
web sockets, and realtime data with [http://firebase.io](Firebase).
* Frontend built with Bootstrap and Knockout.js
* Backend built in Node/Express
* MongoDB as the database and Mongoose as the ORM
* Firebase for realtime chat and detection of active players
* Redis for tracking live and online users

### Formkit
[Github](http://github.com/alfg/formkit)

A hosted backend for processing forms on static websites.
This project was built for frontend developers who needed a solution for processing simple forms, such as
contact forms without requiring a backend.
This project is a work-in-progress and not yet released.

* Frontend built with Bootstrap 2.0/jQuery
* Backend built in Python/Django
* Postgres as the database and Django ORM
* Github login authentication
* Integrations with Email, Dropbox, Google Drive, S3 and Box

### AdminCraft
[Github](http://github.com/alfg/admincraft)

[Minecraft Wiki](http://minecraft.gamepedia.com/Programs_and_editors/Server_wrappers#AdminCraft)

A Minecraft administration web control panel and tools for administering Minecraft servers.

* Custom frontend with jQuery UI components
* Backend built in Python using the Flask framework
* Reads/Writes to Minecraft flat configuration files
* SQLite database for managing server backup tasks
* Reads/Writes I/O to Minecraft's java console and logfiles for sending/reading messages

### Dropdot
[Demo](http://dropdot.alfg.co)

[Github](http://github.com/alfg/dropdot)

A simple file-sharing demo built in NodeJS utilizing
<span data-tooltip class="has-tip"title="Cross-origin resource sharing (CORS) defines a way for client web
applications that are loaded in one domain to interact with resources in a different domain">CORS</span>
uploading on AWS S3. This project was built to demonstrate CORS uploading to other developers as a new
method of uploading files directly to S3.

* Newer CSS3 and HTML5 features for some of the uploading animation, gradient and overall look and feel of the UI
* NodeJS/Express backend for uploading and creating signed URLs
* Node modules for mime-type detection, uuid generation and cryptography
* Amazon S3 for Object/File storage with support for DreamObjects S3

### Jot
[Demo](http://alfg.co/jot/)

[Github](http://github.com/alfg/jot)

A simple frontend application to save short, encrypted or encoded notes without a backend.
This project was built to demonstrate saving and encrypting strings of text base64 encoded into the URL

* Frontend built with the Skeleton CSS framework for a clean, minimal UI
* No backend. All data is stored in a base64 string in the URL
* Javascript implementation of the Blowfish cipher for encrypting messages with a key

### Murmur-REST
[Github](http://github.com/alfg/murmur-rest)

A <span title="Representational state transfer (REST) is an architectural style consisting of a coordinated
set of architectural constraints applied to components, connectors, and data elements, within a distributed
hypermedia system">RESTful</span> API for administering virtual Mumble servers.

This project was built to administer Mumble servers for <a href="http://guildbit.com">Guildbit.com</a> and to separate the logic of administering
the mumble servers into a separate, open-source project for others to use. This project also helps simplify the process
of using the Ice middleware platform.

* Backend built in Python with the Flask framework
* Python-zeroc-ice library for communicating to Mumble servers via the Ice middleware platform
* All response endpoints are in JSON format with the RESTful design
* HTTP Digest Authentication for securing endpoints
