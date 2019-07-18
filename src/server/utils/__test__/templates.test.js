import {
  convertClaimNewsletterToText,
  getHandlebarsTemplate,
} from '../templates'

const templateHTML = `
<div id="wrapper">
  <p>This is an intro!</p>
  <div class="claim-section">
    <h1 class="claim-section__header">🔎 Testing Claims 🔍</h1>
    <ul class="claims">
      <li class="claim" data-affiliation="CNN">
        <div class="claim__metadata">
          <a href="#" class="claim__permalink">
            <cite class="claim__speaker">RAY BOYD</cite>
            <span class="claim__platform">(<b>CNN</b>)</span></a>:
        </div>
        <blockquote class="claim__content">The human head weighs eight pounds.</blockquote>
      </li>
      <li class="claim" data-affiliation="Fox">
        <div class="claim__metadata">
          <a href="#" class="claim__permalink">
            <cite class="claim__speaker">RAY BOYD</cite>
            <span class="claim__platform">(<b>Fox</b>)</span></a>:
        </div>
        <blockquote class="claim__content">The human head does not weigh eight pounds.</blockquote>
      </li>
    </ul>
  </div>
  <p>Well that about wraps it up.</p>
</div>
`

const templateText = `This is an intro!

🔎 Testing Claims 🔍

RAY BOYD (CNN):
> The human head weighs eight pounds.

RAY BOYD (Fox):
> The human head does not weigh eight pounds.

Well that about wraps it up.`

describe('utils/templates', () => {
  describe('getHandlebarsTemplate', () => {
    const templateFn = getHandlebarsTemplate('Hello')
    it('Should generate a handlebars template function given valid source', () => {
      expect(templateFn).toBeInstanceOf(Function)
    })
    it('Should generate a handlebars template function that actually renders a template', () => {
      expect(templateFn()).toBe('Hello')
    })
  })
  describe('convertClaimNewsletterToText', () => {
    it('Should convert claim HTML to text as expected', () => {
      const convertedText = convertClaimNewsletterToText(templateHTML)
      expect(convertedText).toEqual(templateText)
    })
  })
})
