let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}
    

let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    // element = document.querySelector('#sidemenu');
    // element.style.visibility = 'visible';
    sidemenu.style.right="0";
}
function closemenu(){
    // element = document.querySelector('#sidemenu');
    // element.style.visibility = 'hidden';
    sidemenu.style.right="-200px";
}



// ____________________________Google sheet form____________________________


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzTPGn0TRqdFQeZShCwo4dfwWL0ZieMJuOjElloTkbBtIcJPtVINTlERTwR0w1oyQxikA/exec'

  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
