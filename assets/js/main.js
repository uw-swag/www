// Copy the code from a given div > pre > code combination
function copy_code() {
    const text_to_copy = this.parentElement.children[0].children[0].innerText;
    console.log(text_to_copy);
    // Copy the code
    navigator.clipboard.writeText(text_to_copy);
    var bootstrap_toast = new bootstrap.Toast(document.getElementById('copy-toast')); // Initialize the Bootstrap toast
    bootstrap_toast.show(); // Show the toast
}


// For each div with class "copy-code" add a button that calls the function "copy_code()"
function add_copy_button() {
    const copy_code_divs = document.getElementsByClassName('copy-code');
    for (const div of copy_code_divs) {
        const copy_btn = document.createElement('button');
        copy_btn.innerText = 'Copy';
        copy_btn.classList.add('code-copy-button');
        copy_btn.addEventListener("click", copy_code, false);
        div.classList.add('position-relative');
        div.appendChild(copy_btn);
    }
}

add_copy_button();