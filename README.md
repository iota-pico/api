[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iota-pico/api/master/LICENSE) [![Build Status](https://travis-ci.org/iota-pico/api.svg?branch=master)](https://travis-ci.org/iota-pico/api) 
[![Coveralls](https://img.shields.io/coveralls/iota-pico/api.svg)](https://coveralls.io/github/iota-pico/api)

# IOTA Pico Framework API

Classes and interface definitions to communicate with an [IOTA Node REST API](https://iota.readme.io/reference).

This library is intended to be a direct one to one mapping with the IRI API.

All calls use pure DTOs and do not have any validation of the parameters.

To use this library you will also need to include one of the platform abstraction layers, depending on where you intend to use the code.

# Installation

```shell
npm install @iota-pico/api --save
```

# Platform Abstraction Layers (PALs)

* Browser PAL [@iota-pico/pal-browser](https://github.com/iota-pico/pal-browser)
* NodeJS PAL [@iota-pico/pal-nodejs](https://github.com/iota-pico/pal-nodejs)

# Documentation

Documentation for the code can be found in [docs](https://github.com/iota-pico/api/blob/master/docs/README.md) folder.

# Library

The IOTA Pico Framework is a multi-layered set of object oriented JavaScript libraries for use with the IOTA tangle.

If you don't want to use the layered versions of the libraries consider using the ready bundled versions:

* [@iota-pico/lib-browser](https://github.com/iota-pico/lib-browser)
* [@iota-pico/lib-nodejs](https://github.com/iota-pico/lib-nodejs)

Each layer is fully abstracted allowing you to replace components with your own implementations very easily.

The layered libraries are written in TypeScript so are all strongly typed. The modules are generated as ES6 so you may need to transpile them when including them for use in older JavaScript eco-systems. The code will run without transpilation in all modern browsers and when used by NodeJs.

# Tutorials

Some tutorials can be found in the following repo [@iota-pico/tutorials](https://github.com/iota-pico/tutorials)

# Examples

There is example code using all the functionality of the libraries for the following platforms and languages.

* Browser Examples [@iota-pico/api-examples-browser](https://github.com/iota-pico/api-examples-browser)
* NodeJS CLI Examples [@iota-pico/api-examples-nodejs](https://github.com/iota-pico/api-examples-nodejs)

# Contributing

Contributions are always welcome to the project. Feel free to raise issues, create pull requests or just make suggestions.

# Authors

Come and find us on the IOTA [Discord](https://discord.gg/JJysqe9) development channels

* **Martyn Janes** - *obany* - ([https://github.com/obany](https://github.com/obany))

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iota-pico/api/blob/master/LICENSE) file for details.
