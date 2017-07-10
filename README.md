# decentralized-website

Star the repository. [Install swarm](https://swarm-guide.readthedocs.io/en/latest/installation.html). Type the following in terminal:

git clone https://github.com/TylerL-uxai/decentralized-website.git

npm install -g meteor-build-client

cd decentralized-website

meteor-build-client ../build --path ""

$GOPATH/bin/swarm --recursive --bzzapi http://swarm-gateways.net up ../build/

