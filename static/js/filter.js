let filterInput = document.getElementById('text-field');

filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    let filter = document.getElementById('text-field').value;
    let bookWrapper = document.getElementById('book-wrapper');
    let book = bookWrapper.querySelectorAll('li.book');

    for(let i = 0; i < book.length; i++){
        let pages = book[i].getElementsByTagName('div')[1];
        if(Number(pages.innerHTML) <= Number(filter)){
            book[i].style.display = 'none';
        }else{
            book[i].style.display = '';
        }
    }
}
