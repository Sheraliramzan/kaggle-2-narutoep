import {test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: {width: 414, height: 1180},
})