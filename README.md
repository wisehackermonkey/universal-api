# universal-api
----
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


<!-- <img src="NNNNNNNNNNNNN" width="400"> -->


<h2 align="center">Goal: create a unified data format for all governmental datasets</h2>

<h4 align="center">________________________</h4>










# Quick start
### 
##### 
```bash
pip3 install -r requirements.txt
python3 src/api.py
``` 
## Open Broswer to [`http://localhost:3000`](http://localhost:3000)

---










# Summary
### -  *[Quick start](#Quick-start)*
### -  *[Installation](#Installation)*
### -  *[Deveopment](#For-developers)*
### -  *[Contributors](#Contributors)*
### -  *[Links](#Links)*
### -  *[License](#License)*













 
# Installation
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/universal-api.git
cd universal-api

```
 









 -----------------
# Screenshots
- <!-- <img src="NNNNNNNNNNNNN" width="400"> -->














-----------------
# Deveopment
### 
```bash
pip install pipenv
pip3 install --upgrade bonobo
```





# Docker
### Build
```bash
cd ~
git clone https://github.com/wisehackermonkey/universal-api.git
cd universal-api
docker build -t wisehackermonkey/universal-api:latest .  
```
### Run
```bash
docker run -it --rm --name wisehackermonkey/universal-api:latest  
```
### Docker-compose
```bash
docker-compose build
docker-compose up 
```
# Publish Docker Image
```bash
docker build -t wisehackermonkey/universal-api:latest .
docker login
docker push wisehackermonkey/universal-api:latest
```






 
---
# Links
### 
### 
### 
### 
### 












 -----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/universal-api)](https://github.com/wisehackermonkey/universal-api/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------
# License
#### MIT © wisehackermonkey
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```bash
by oran collins
github.com/wisehackermonkey
oranbusiness@gmail.com
11/9/2021
```
<!-- 

# Docker
### Build
```bash
cd ~
git clone https://github.com/wisehackermonkey/universal-api.git
cd universal-api
docker build -t wisehackermonkey/universal-api:latest .  
```
### Run
```bash
docker run -it --rm --name wisehackermonkey/universal-api:latest  
```
### Docker-compose
```bash
docker-compose build
docker-compose up 
```
# Publish Docker Image
```bash
docker build -t wisehackermonkey/universal-api:latest .
docker login
docker push wisehackermonkey/universal-api:latest
```
# Deploy on netlify
```
npm install netlify-cli -g
netlify login
netlify deploy
netlify deploy --prod
```
-->