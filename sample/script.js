// Create const
const popModal = new bootstrap.Modal(document.getElementById('popModal'), {
    keyboard: true  
});


// Load the modal
function popModalLoad () {
    popModal.show();
    return true;
}

// Set the Blur On
function blurOn() {
    document.querySelector('#section').classList.add('blur-on');
    return true;
}

// Set the Blur Off
function blurOff() {
    document.querySelector('#section').classList.add('blur-off');
    return true;
}



// Onload ... 
window.addEventListener('load', (event) => {
    popModalLoad() ? console.log('modal => 1') : console.log('modal => 0')
    blurOn()       ? console.log('blur-on => 1') : console.log('blur-on => 0')
});        

// When the modal close ... 
window.addEventListener('hidden.bs.modal', (event) => {
    blurOff() ? console.log('blur-off => 1') : console.log('blur-off => 0')
});