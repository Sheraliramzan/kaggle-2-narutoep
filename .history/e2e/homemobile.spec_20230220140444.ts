import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone '],
    viewport: {width: 820, height: 1180},
})