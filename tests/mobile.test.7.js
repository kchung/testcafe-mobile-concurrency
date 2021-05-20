import { Selector } from 'testcafe';

fixture `Mobile concurrency 7`
  .page `https://www.whatismybrowser.com/detect/how-big-is-my-web-browser`

test('Verify browser window size', async (t) => {
  const PixelWidth = Selector('#pixels-width');
  const PixelHeight = Selector('#pixels-height');

  console.log(`Browser alias: ${t.browser.alias}`);

  await t
    .wait(2000)
    .expect(PixelWidth.textContent).eql('375');
});
