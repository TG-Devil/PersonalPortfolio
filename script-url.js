
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz4v8ggNRj0m7z-udcSC9rrJaz9VEE8LZdUjDpzc5z_3WRV3TwxDAdPyg-WwHHvNHvK4A/exec'
  const form = document.forms['submit-to-google-sheet']
  const control = document.getElementById("control")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        control.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            control.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
