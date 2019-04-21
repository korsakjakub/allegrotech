let bookData = [
  {
    "index": 1,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/9780596517748/cat.gif"
    },
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "releaseDate": "12/2008",
    "pages": 172,
    "link": "http://shop.oreilly.com/product/9780596517748.do"
  },
  {
    "index": 2,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/9780596000486/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/9780596000486/cat.gif"
    },
    "title": "JavaScript: The Definitive Guide",
    "author": "David Flanagan",
    "releaseDate": "11/2001",
    "pages": 936,
    "link": "http://shop.oreilly.com/product/9780596000486.do"
  },
  {
    "index": 3,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/0636920025832/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/0636920025832/cat.gif"
    },
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "releaseDate": "08/2012",
    "pages": 254,
    "link": "http://shop.oreilly.com/product/0636920025832.do"
  },
  {
    "index": 4,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/0636920027713/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/0636920027713/cat.gif"
    },
    "title": "JavaScript Enlightenment",
    "author": "Cody Lindley",
    "releaseDate": "12/2012",
    "pages": 166,
    "link": "http://shop.oreilly.com/product/0636920027713.do"
  },
  {
    "index": 5,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/0636920033141/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/0636920033141/cat.gif"
    },
    "title": "Programming JavaScript Applications",
    "author": "Eric Elliott",
    "releaseDate": "07/2014",
    "pages": 254,
    "link": "http://shop.oreilly.com/product/0636920033141.do"
  },
  {
    "index": 6,
    "cover": {
      "large": "https://covers.oreillystatic.com/images/0636920047124/lrg.jpg",
      "small": "https://covers.oreillystatic.com/images/0636920047124/cat.gif"
    },
    "title": "Practical Modern JavaScript",
    "author": "Nicolas Bevacqua",
    "releaseDate": "07/2017",
    "pages": 334,
    "link": "http://shop.oreilly.com/product/0636920047124.do"
  }
];

let sortDirection = false;

window.onload = () => {
    loadData(bookData);
};

loadData(bookData);


function loadData(bookData) {
    const dataBody = document.getElementById('book-wrapper');
    let dataHTML = '';

    for (let book of bookData) {
        dataHTML += `
                <li id='book' class='book'>
                    <a class='img' href="#book-item-${book.index}">
                        <img src="${book.cover.small}"></a>
                    <span class='book-content'>
                        <h3>${book.title}</h3>
                        <hr class='red-hr'>
                        <p class='author'>By ${book.author}</p>
                        <div class='p-info'>
                        <p >Release Date: ${book.releaseDate}</p>
                        <p id='pages'>Pages: <div>${book.pages}</div></p>
                        <p >Link: <a class='shop-link' href='${book.link}'>shop</a></p>
                        </div>
                    <span>
                </li>`
    }
    dataBody.innerHTML = dataHTML;
}

function sort(param) {

    sortDirection = !sortDirection;
    switch(param) {
        case "pages":
            //console.log("pages");
            sortPages(sortDirection, param);
            break;
        case "pub-date":
            //console.log("pub-date");
            sortPages(sortDirection, param);
            break;
        case "author":
            //console.log("author");
            break;
    }
    loadData(bookData);
}

function sortPages(sort, param) {
    bookData = bookData.sort((p1,p2)=> {
        return sort ? p1[param] - p2[param] : p2[param] - p1[param];
    });
}
function sortStrings(sort, param) {
    bookData = bookData.sort((p1,p2)=> {
    });
}
