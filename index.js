function addingEventListener() {
    const inputElement = document.getElementById('inputId');
    inputElement.addEventListener('click', function() {
        alert('I was clicked!');
    });
}