/**
 * @fileoverview Integration test for the HeyGen Video Translation Client Library
 * 
 * This file is a part of the HeyGen Video Translation Client Library, which provides access to a server endpoint for processing video translation requests with HeyGen
 * 
 * Usage:
 * - Run this test using web-test-runner.
 * - Example usage:
 *   ```shell
 *   npx web-test-runner client.test.ts --node-resolve
 *   ```
 * 
 * @module HeyGen Video Translation Client Library Test
 * @version 1.0.0
 * @license MIT
 * @author Elijah Claggett
 * @contact elijah.claggett@gmail.com
 */

import { renderHook, act, waitFor } from '@testing-library/react';
import { expect } from '@esm-bundle/chai';
import { TranslationClient } from './client';

const DELAY = parseInt(window.__ENV__.DELAY || '3000');
const DELAY_VAR = parseInt(window.__ENV__.DELAY_VAR || '2000');
const MAX_DELAY = DELAY + DELAY_VAR;

mocha.timeout(MAX_DELAY + 10000);

describe('HeyGen Translation Client Integration Test w/ Real Server', () => {
    it('Updates React state according to server responses', async () => {
        const { result } = renderHook(() => {
            const client = new TranslationClient();
            const status = client.getStatus();
            return {'client': client, 'status': status};
        });
        
        const client = result.current.client;
        const statusDefault = result.current.status;

        expect(statusDefault).to.equal('{"result": "none"}');
        
        act(() => {
            client.requestTranslation('http://localhost:8000/status', 'myVideoId');
        });
        
        await waitFor(() => {
            const statusPending = result.current.status;
            expect(statusPending).to.equal('{"result": "pending"}');
        }, { timeout: MAX_DELAY + 500 });

        await waitFor(() => {
            const statusCompleted = result.current.status;
            expect(statusCompleted).to.equal('{"result": "completed"}');
        }, { timeout: MAX_DELAY + 500 });
    });

    it('Handles errors gracefully', async () => {
        const { result } = renderHook(() => {
            const client = new TranslationClient();
            const status = client.getStatus();
            return {'client': client, 'status': status};
        });
        
        const client = result.current.client;
        
        act(() => {
            client.requestTranslation('http://localhost:8000/fakepath', 'myVideoId');
        });
        
        await waitFor(() => {
            const statusError = result.current.status;
            expect(statusError).to.equal('{"result": "error"}');
        }, { timeout: MAX_DELAY + 500 });
    });
});