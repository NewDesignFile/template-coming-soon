import './style.css'

document.querySelector('#form').innerHTML = `
<form name="subscribe-form" target="_self">
<aside>
  <fieldset>
    <input type="email" class="text-input" autocomplete="email" placeholder="Email address" name="EMAIL" tabindex="-1">
    <button class="button" type="submit" name="subscribe" tabindex="-1"> &#8594;</button>
  </fieldset>
</aside>
</form>
`
