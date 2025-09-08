const fontButtons = Array.from(document.querySelectorAll('.font-size'))

fontButtons.forEach(element => {
    element.addEventListener('click', function(event){
        event.preventDefault(); 
        const prevActive = document.querySelector('.font-size_active')
        prevActive.classList.remove('font-size_active');
        this.classList.add('font-size_active')
        const book = document.querySelector('.book')
        book.classList.remove('book_fs-small', 'book_fs-big');
        const textSize = this.getAttribute("data-size")
        if (textSize == 'small') {
            book.classList.add('book_fs-small')
        }
        else {
            if (textSize == 'big') {
            book.classList.add('book_fs-big')
        }
        }
    })
});