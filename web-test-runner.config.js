import { defaultReporter } from '@web/test-runner';

export default {
  files: ['dist/**/*.test.js'],
  reporters: [defaultReporter({ reportTestResults: true, reportTestProgress: true })],
  testRunnerHtml: (testFramework) => `
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <script>
          window.__ENV__ = {
            DELAY: '${process.env.DELAY || "3000"}',
            DELAY_VAR: '${process.env.DELAY_VAR || "2000"}'
          };
        </script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>
  `,
};