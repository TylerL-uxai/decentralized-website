# decentralized-website

npm install -g meteor-build-client

cd decentralized-website

meteor-build-client ../build --path ""

$GOPATH/bin/swarm --recursive --bzzapi http://swarm-gateways.net up ../build/

