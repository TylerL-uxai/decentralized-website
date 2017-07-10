# decentralized-website

Star this repository. [Install swarm](https://swarm-guide.readthedocs.io/en/latest/installation.html). Type the following in terminal:

git clone https://github.com/TylerL-uxai/decentralized-website.git

npm install -g meteor-build-client

cd decentralized-website

meteor-build-client ../build --path ""

$GOPATH/bin/swarm --recursive --bzzapi http://swarm-gateways.net up ../build/

It'll give you a hash like this 3a87eee553a310ca6adaa4f28ebf5df817542b0c648e4dbd61fb783746e4e105

Go to http://swarm-gateways.net/bzz:/3a87eee553a310ca6adaa4f28ebf5df817542b0c648e4dbd61fb783746e4e105/index.html 😎

# FAQ

What is swarm?
It's a decentralized website host

Why this repo?
It has routing so your links won't reload the page.
