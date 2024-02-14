module.exports = {
    displayName: "Vanilla JS onPageLoad",
    globals: {
        __PORT__: 30663,
        __STARTCMD__: "npm start -- --port 30663 --sample onPageLoad",
    },
    testMatch: ["<rootDir>/test/**/*.spec.ts"],
    preset: "../../../../e2eTestUtils/jest-puppeteer-utils/jest-preset.js",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    reporters: [
        "jest-junit",
        {
            suiteName: "onPageLoad Code E2E Tests",
            outputDirectory: "./app/onPageLoad",
            outputName: "junit.xml",
        },
    ],
};
