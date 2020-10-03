/**
 * Decorator com debounce: {@link https://medium.com/time-machine/how-to-implement-debounce-decorator-2e963b70cd27}
 */
const $ = document.querySelector;
const name = $('input#name'), 
      span = $('span');

function debounce(fn, wait) {
    let timer = null;

    return function() {
        clearTimeout(timer);
        
        timer = setTimeout(fn, wait);
    }
}

export default name.addEventListener('keyup', (e: Event) => { 
    debounce(function() { span.innerHTML = (<HTMLInputElement>e.target).value }, 2000)()
});
