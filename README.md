# DTDL Transpiler

The DTDL Transpiler is a framework consisting of Decorators for TypeScript classes, methods, and properties to map the classes to DTDL Interfaces, Properties, Relationships, and Telemetry. This allows developers to manage their DTDL ontology as code elements similar to a code first ORM like Entity Framework or TypeORM.

## Basic Concepts

Digital Twins Definition Language (DTDL) is an ontology specification language. It supports defining named relationships between entities, both in a hierarchy and peer to peer. While DTDL is human readable, it is not ideal for writing and managing the ontology by hand, especially for large ontologies.

The transpiler will allow users to manage their DTDL ontology in code, similar to the usage of Entity Framework for database schemas. 

## Features

This project framework provides the following features:

* DTDL Decorators for marking up TypeScript Classes as DTDL Entities
* A generator that creates DTDL from Decorated classes
* Supports class hierarchies (extends), relationships, properties, and telemetry

## Getting Started

### Prerequisites

- Node.js and npm installed on your system
- TypeScript knowledge for leveraging decorators.

### Installation

1. Clone this repository

` git clone https://github.com/Azure-Samples/azure-edge-extensions-adt-transpiler.git
  cd azure-edge-extensions-adt-transpiler
`

2. Install dependencies:

` npm install
  npm link
`

## Usage
1. Define your TypeScript classes with decorators to represent your DTDL model (see /src/main.ts in the repository for an example).
2. Use the DtdlGenerator.generateDtdlFromClass() function passing in the classes you have defined. Order does not matter, the generator will determine dependencies and validate the DTDL before generation.

## Known issues
This utility is still in active development full DTDL support is not currently implemented (relationships, inheritance). The work to enable full DTDL support is in process.

## Resources

- [DTDL Specification](https://azure.github.io/opendigitaltwins-dtdl/DTDL/v3/DTDL.v3.html)
