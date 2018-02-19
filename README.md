[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iotaeco/iota-pico-api/master/LICENSE) [![Build Status](https://travis-ci.org/iotaeco/iota-pico-api.svg?branch=master)](https://travis-ci.org/iotaeco/iota-pico-api) [![NSP Status](https://nodesecurity.io/orgs/iotaeco/projects/2edc0b1b-a893-43c1-ad41-a3832ca1da4c/badge)](https://nodesecurity.io/orgs/iotaeco/projects/2edc0b1b-a893-43c1-ad41-a3832ca1da4c)
[![Coveralls](https://img.shields.io/coveralls/iotaeco/iota-pico-api.svg)](https://coveralls.io/github/iotaeco/iota-pico-api)

# IOTA Pico Framework API

## Introduction

The IOTA Pico Framework is intended to be a multi-layered set of object oriented JavaScript libraries.

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

## Installation

```shell
npm install @iota-pico/api
```

## API

Classes and interface definitions to communicate with an [IOTA Node REST API](https://iota.readme.io/reference).

This library is intended to be a direct one to one mapping with the IRI API.

All calls use pure DTOs and do not have any validation of the parameters.

To use this library you will also need to include one of the platform abstraction layers, sepending on where you intend to use the code.

## Platform Abstraction Layers (PALs)

* Browser PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-browser)
* NodeJS PAL [@iota-pico/pal-browser](https://github.com/iotaeco/iota-pico-pal-nodejs)

## API Documentation

Documentation for the code can be found in [docs](./docs/README.md) folder.

## Tutorials

Some tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iotaeco/iota-pico-tutorials)

## Examples

There is example code using all the functionality of the libraries for the following platforms and languages.

* Browser Examples written in JavaScript [@iota-pico/examples-browser-js](https://github.com/iotaeco/iota-pico-examples-browser-js)
* Browser Examples written in TypeScript [@iota-pico/examples-browser-ts](https://github.com/iotaeco/iota-pico-examples-browser-ts)
* NodeJS CLI Examples written in JavaScript [@iota-pico/examples-nodejs-js](https://github.com/iotaeco/iota-pico-examples-nodejs-js)
* NodeJS CLI Examples written in TypeScript [@iota-pico/examples-nodejs-ts](https://github.com/iotaeco/iota-pico-examples-nodejs-ts)
