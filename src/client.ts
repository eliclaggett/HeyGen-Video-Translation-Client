/**
 * @fileoverview Class definition for the HeyGen Video Translation Client Library
 * 
 * This file is a part of the HeyGen Video Translation Client Library, which provides access to a server endpoint for processing video translation requests with HeyGen
 * 
 * Usage:
 * - Import or require this module to access its functionality.
 * - Example usage:
 *   ```javascript
 *   import TranslationClient from 'heygen-translation-client';
 *   const client = new TranslationClient();
 *   const status = client.getStatus(); // <-- Updated automatically through React state
 *   TranslationClient.requestTranslation(serverUrl, videoId);
 *   ```
 * 
 * @module HeyGen Video Translation Client Library
 * @version 1.0.0
 * @license MIT
 * @author Elijah Claggett
 * @contact elijah.claggett@gmail.com
 */

import { useState } from 'react';

/**
 * Description placeholder
 *
 * @class TranslationClient
 * @typedef {TranslationClient}
 */
class TranslationClient {
  /**
   * React state tracking the status of the requested translation
   *
   * @type {string}
   * @default '{"result": "none"}'
   */
  public status: string;
  /**
   * Instantaneous value of the status of the requested translation
   *
   * @type {string}
   * @default '{"result": "none"}'
   */
  private statusInstant: string;
  /**
   * Function to update the status of the requested translation
   *
   * @type {Function}
   */
  private setStatus: Function;

  
  /**
   * Creates an instance of TranslationClient.
   *
   * @constructor
   */
  constructor() {
    // Track request status in the React state
    [this.status, this.setStatus] = useState('{"result": "none"}');

    // Track request status in an instantaneously updated variable
    this.statusInstant = '{"result": "none"}';
  }
  
  /**
   * Function to request a translation from the server
   *
   * @returns {() => void}
   */
  public requestTranslation(serverUrl:string, videoId:string) : () => void {
    
    // Initialize an EventSource to watch for server-sent events tracking the progress of our translation request
    const eventSource = new EventSource(serverUrl);
    this.statusInstant = '{"result": "none"}';
    this.setStatus(this.statusInstant);
    
    // Update the request status when we receive a message from the server
    eventSource.onmessage = (event) => {
      this.setStatus(event.data);
      this.statusInstant = event.data;
    };
    
    // Update the request status when we receive an error from the server, or when the connection is terminated
    eventSource.onerror = (error) => {
      // If the request has not completed but we encounter an error or the connection is closed, record the error
      if (this.statusInstant != '{"result": "completed"}')
        this.setStatus('{"result": "error"}');

      // If the connection is closed by the server but the request has been completed, that's fine
      if (error.eventPhase == EventSource.CLOSED) {
        eventSource.close();
      } else {
        // If any other error occurs, record it
        this.setStatus('{"result": "error"}');
      }
    };
    
    // Close the connection when the React component unloads
    return () => {
      eventSource.close();
    };
  }
  
  /**
   * Function to access the status of the translation request externally
   *
   * @returns {string}
   */
  public getStatus() {
    return this.status;
  }
}

export { TranslationClient };