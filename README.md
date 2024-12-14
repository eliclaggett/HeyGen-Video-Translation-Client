<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/eliclaggett/HeyGen-Video-Translation-Client/refs/heads/main/assets/heygen_modified.svg" width="300"></a>
  <br>
  HeyGen Video Translation Client
</h1>

<h4 align="center">A performant event-based client library for requesting video translations</h4>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#testing">Testing</a> •
  <a href="#examples">Examples</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/eliclaggett/HeyGen-Video-Translation-Client/refs/heads/main/assets/ui_screenshot.png"
  width="600">
</p>


## Quick Start

#### Prerequisites
> **Note:** This library leverages React functional components and was tested with React v19.0.0. Please exercise caution using this with older versions.
1. Node: v23.0.0 or greater
1. React.JS: v19.0.0 or greater

#### Installation
Run the following command to install the client library.

```bash
$ git clone https://github.com/eliclaggett/HeyGen-Video-Translation-Client.git
```

Then, import the client library in your React project.

```js
import TranslationClient from './heygen-video-translation-client/dist/client';
```

To see an example of this library in action, check out our [Examples](#Examples).

#### Local Development
You can contribute to the development of this library by installing the required packages and modifying the 

`$ npm run install` to install the required packages for the client library
`$ npm run postinstall` to install the required packages for the mock translation server

Then modify the `/src` files as desired, and run:

`$ npm run build` to update the bundled files in `/dist`.

The functionality of the library can be tested following the instructions in [Testing](#Testing)

## Documentation

This library contains an API client for interacting with a HeyGen video translation server that that processes translation requests and returns either `pending`, `completed`, or `error` depending on the request status.

The client is provided as a compiled TypeScript class implementing the following interface:
```ts
interface TranslationClient {
  // Method to request the translation of a video by a translation server
  requestTranslation(serverUrl : string, videoId : string) : () => void;
  // Status of the translation request
  status: string;
  // Getter of the translation request status
  getStatus() : string;
}
```
Additionally, this library implements a mock translation server for easily testing your application. The server uses high performance server-sent events to broadcast the status of translation requests similarly to a production environment.  

The client library and mock server can be tested together following the instructions in  [Testing](#Testing). To spin up the mock server on its own, run:

```bash
$ npm run mock-server
```

### Features
#### Video Translation Client Library
* Easy-to-use React library for requesting video translations and monitoring the status of each request
* Integration tests covering the expected return values of translation requests
* Implementation example in a React application

#### Mock Translation Server
* Scalable high-performance SSE implementation
* Configurable random delay for request processing

## Testing
We provide a basic integration test of the mock translation server. This test will spin up the mock server and test that the translation API returns `none` when no request has been made, `pending` when a request is being processed, and `completed` when a test is finished running. We also test that the API gracefully returns an `error` if something goes wrong.

Run the test with the following command:

```bash
$ npm run test-cli
```
After the test results are displayed, close the program by typing `Ctrl + C`.


**Mock Server Processing Time Configuration**
By default the mock server will process requests in a random timespan uniformly distributed between 3000ms &plusmn; 2000ms. The center and variance of this distribution can be configured using environment variables.

Example 1 ) Set the processing delay to exactly 1000ms.

```bash
$ DELAY=1000 DELAY_VAR=0 npm run test-cli
```
Example 2 ) Set the processing delay to be randomly distributed between 500ms &plusmn; 100ms.
```bash
$ DELAY=500 DELAY_VAR=100 npm run test-cli
```

## Examples
We demonstrate the usage of this library in a React application in `/src/examples/mock_ui`. The following command will spin up the mock server and run the application:

```bash
$ npm run test-ui
```

Then, open the application in your web browser at `http://localhost:5173`. When you are finished testing, close the program by typing `Ctrl + C`.

The processing time of the mock server can also be configured for the UI example following the same method described in [Testing](#Testing). Here, we set it to respond instantly.

```bash
$ DELAY=0 DELAY_VAR=0 npm run test-ui
```


## Author

<p align="center">
    <img src="https://raw.githubusercontent.com/eliclaggett/Face-Morphing-Experiment/refs/heads/main/assets/eli.png" width="80" valign="middle"/>
    <strong>Eli Claggett</strong>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</p>