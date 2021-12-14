// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('tester', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('tester', async function() {
   
    await driver.get("https://eleven.happenings.events/")
    await driver.manage().window().setRect({ width: 1710, height: 1080 })
    await driver.findElement(By.css(".show-guests")).click()
    await driver.findElement(By.css("li:nth-child(4) > label")).click()
    await driver.findElement(By.css("#btnSearchVenues > span")).click()
    await driver.wait(until.elementIsNotVisible(await driver.findElement(By.xpath("//*[@id=\"full-loading\"]"))), 30000)
    await driver.findElement(By.id("btnViewVenue_Conservatory_Gardens_French_Garden")).click()
    await driver.wait(until.elementIsNotVisible(await driver.findElement(By.xpath("//*[@id=\"full-loading\"]"))), 30000)
    await driver.executeScript("window.scrollTo(0,279)")
    await driver.findElement(By.id("PageContentMaster_ctl01_rptResource_btnSelectVenue_0")).click()
    await driver.executeScript("window.scrollTo(0,2000)")
    await driver.findElement(By.linkText("Select Package")).click()
    await driver.executeScript("window.scrollTo(0,5000)")
    await driver.findElement(By.linkText("Pay deposit")).click()
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//*[@id=\"customise-main\"]/div[12]/div"))), 30000)
    await driver.findElement(By.xpath("//*[@id=\"PageContentMaster_ctl00_txtForename\"]")).sendKeys("john")
    await driver.findElement(By.xpath("//*[@id=\"PageContentMaster_ctl00_txtSurname\"]")).sendKeys("doe")
    await driver.findElement(By.xpath("//*[@id=\"PageContentMaster_ctl00_txtEmail\"]")).sendKeys("example@example.com")
    await driver.findElement(By.xpath("//*[@id=\"PageContentMaster_ctl00_txtPhone\"]")).sendKeys("227-206-6509")
    await driver.findElement(By.xpath("//*[@id=\"PageContentMaster_ctl00_txtPassword\"]")).sendKeys("2345yhhhh3ssA3@")
    debugger
    await driver.findElement(By.xpath("//*[@id=\"btnSecurePlan\"]")).click() //<breaks right here
    
    // await driver.wait(until.elementIsNotVisible(await driver.findElement(By.xpath("//*[@id=\"customise-main\"]/div[12]/div"))), 30000)

    // await driver.findElement(By.id("txtPreferDate")).sendKeys("11/25/2050")
     
  })
})



// // Generated by Selenium IDE
// const { Builder, By, Key, until } = require('selenium-webdriver')
// const assert = require('assert')

// describe('standardflow', function() {
//   this.timeout(30000)
//   let driver
//   let vars
//   beforeEach(async function() {
//     driver = await new Builder().forBrowser('chrome').build()
//     vars = {}
//   })
//   afterEach(async function() {
//     await driver.quit();
//   })
//   it('standardflow', async function() {
//     await driver.get("https://eleven.happenings.events/")
//     await driver.findElement(By.css(".show-guests")).click()
//     await driver.findElement(By.css("li:nth-child(4) > label")).click()
//     await driver.wait(until.elementIsVisible(await driver.findElement(By.id("btnSearchVenues"))), 30000)
//     await driver.findElement(By.id("btnSearchVenues")).click()
//     await driver.executeScript("window.scrollTo(0,12)")

//     await driver.wait(until.elementIsNotVisible(await driver.findElement(By.xpath("//*[@id=\"full-loading\"]"))), 30000)
//     await driver.findElement(By.xpath('//*[@id="btnViewVenue_Conservatory_Gardens_French_Garden"]')).click()

//     await driver.wait(until.elementIsNotVisible(await driver.findElement(By.xpath("//*[@id=\"full-loading\"]"))), 30000)
//     await driver.findElement(By.id("PageContentMaster_ctl01_rptResource_btnSelectVenue_0")).click()

//     await driver.wait(until.elementLocated(By.css("a#PageContentMaster_ctl01_rptResource_btnSelectVenue_0")), 10*1000);
//     // await driver.wait(until.elementIsVisible(await driver.findElement(By.id("btnViewVenue_Conservatory_Gardens_French_Garden"))), 10 * 1000).then(el => {
//     //   console.log("clicked french")
//     //     el.click();
//     // })

//   //   await driver.wait( until.elementIsVisible(await driver.findElement(By.id("PageContentMaster_ctl01_rptResource_btnSelectVenue_0"))), 10 * 1000).then(el => {
//   //     console.log("clicked french")

//   //     el.click();
//   // })
//     // await driver.wait(until.elementIsVisible(await driver.findElement(By.id("PageContentMaster_ctl01_rptResource_btnSelectVenue_0"))), 30000)
//     // await driver.findElement(By.id("PageContentMaster_ctl01_rptResource_btnSelectVenue_0")).click()
//     // await driver.wait(until.elementIsVisible(await driver.findElement(By.css(".slick-current .tile__text:nth-child(3)"))), 30000)
//     // await driver.findElement(By.linkText("Select Package")).click()
//     // await driver.wait(until.elementIsVisible(await driver.findElement(By.css(".fees-right"))), 30000)
//     // await driver.findElement(By.linkText("Pay deposit")).click()
//     // await driver.wait(until.elementIsVisible(await driver.findElement(By.css(".signup-inner"))), 30000)
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtForename")).sendKeys("john")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtSurname")).sendKeys("doe")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtEmail")).sendKeys("example@gmail.com")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtPassword")).sendKeys("1234567890ab")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtPhone")).sendKeys("14087595371")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtPassword")).sendKeys("iQkc5e2U9DD53zR")
//     // await driver.findElement(By.id("btnSecurePlan")).click()
//     // await driver.findElement(By.css(".no-max-w .select-button")).click()
//     // await driver.findElement(By.id("txtPreferDate")).click()
//     // await driver.findElement(By.id("txtPreferDate")).sendKeys("11/03/2100")
//     // await driver.findElement(By.id("txtAltDate")).click()
//     // await driver.findElement(By.id("txtAltDate")).sendKeys("11/04/2100")
//     // await driver.findElement(By.css("#alt-dates .select-button")).click()
//     // await driver.findElement(By.css("#alt-dates .select-button")).click()
//     // await driver.findElement(By.css("#alt-dates li:nth-child(2)")).click()
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtAddress1")).click()
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtAddress1")).sendKeys("1716 Friendship Lane")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtForename")).sendKeys("Les")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtSurname")).sendKeys("Wilson")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtTel")).sendKeys("14087595371")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtCity")).sendKeys("Oakland")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_txtPostcode")).sendKeys("94607")
//     // await driver.findElement(By.id("PageContentMaster_ctl00_ddlDepositAmount")).click()
//     // {
//     //   const dropdown = await driver.findElement(By.id("PageContentMaster_ctl00_ddlDepositAmount"))
//     //   await dropdown.findElement(By.xpath("//option[. = '20%']")).click()
//     // }
//     // await driver.switchTo().frame(1)
//     // await driver.findElement(By.name("cardnumber")).click()
//     // await driver.findElement(By.name("cardnumber")).sendKeys("4242 4242 4242 4242")
//     // await driver.findElement(By.name("exp-date")).click()
//     // await driver.findElement(By.name("exp-date")).sendKeys("11 / 29")
//     // await driver.findElement(By.name("cvc")).sendKeys("232")
//     // await driver.switchTo().defaultContent()
//     // await driver.findElement(By.id("booker-basket")).click()
//     // await driver.switchTo().frame(1)
//     // await driver.findElement(By.name("postal")).click()
//     // await driver.findElement(By.name("postal")).sendKeys("95425")
//     // await driver.switchTo().defaultContent()
//     // await driver.findElement(By.id("btnStripe")).click()
//     // await driver.findElement(By.css("div:nth-child(13) > input:nth-child(1)")).sendKeys("14087595371")
//     // await driver.findElement(By.css("div:nth-child(13) > input:nth-child(2)")).sendKeys("iQkc5e2U9DD53zR")
//     // await driver.findElement(By.css(".no-max-w li:nth-child(2)")).click()
//   })
// })