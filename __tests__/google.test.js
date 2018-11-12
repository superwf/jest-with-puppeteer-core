jest.setTimeout(60000)
describe('google', () => {

  it('go to user page', async () => {
    await page.goto('https://www.google.com')
  })

})
