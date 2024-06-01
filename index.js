const { default: puppeteer } = require("puppeteer")


const getSS = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://github.com/Md-Abdullah-321");
    await page.screenshot({path: "me.png"});

    await browser.close();
}

getSS();