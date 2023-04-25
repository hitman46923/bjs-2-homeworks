class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;



    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100
        } else {
            this._state = value;
        }

    }

    get state() {
        return this._state;

    }

    fix() {
        this.state *= 1.5;
    }



}



class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}



class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book'
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";



    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";


    }

}



class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";


    }
}


class Library {


    constructor(name, books) {
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        if (book.state > 30) {

            this.books.push(book);




        }
    }


    findBookBy(type, value) {

        let book = this.books.find((book) => book[type] === value);
        if (book) {
            return book;
        }
        return null;



    }



    giveBookByName(bookName) {
        let index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            let [book] = this.books.splice(index, 1);
            return book;
        }
        return null;
    }

}


const library = new Library("Библиотека имени Ленина");


library.addBook(


    new FantasticBook(
        'Фрэнк Герберт',
        "Дюна",
        1965,
        1000

    )


)



library.addBook(


    new FantasticBook(
        'Филипп Дик',
        "Дюна",
        1966,
        1500

    )

)


library.addBook(


    new DetectiveBook(
        'Агата Кристи',
        "10 Негритят",
        1939,
        256

    )

)








console.log("Количество книг до выдачи: " + library.books.length)

console.log(library.findBookBy("releaseDate", 1939).name);



/*   library.addBook(
     new DetectiveBook(
       "Артур Конан Дойл",
       "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
       2019,
       1008
     )
    );
    library.addBook(
     new FantasticBook(
       "Аркадий и Борис Стругацкие",
       "Пикник на обочине",
       1972,
       168
     )
    );
    library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
    library.addBook(new Magazine("Мурзилка", 1924, 60));
    
    console.log(library.findBookBy("name", "Властелин колец")); //null
    console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
    
    console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
    library.giveBookByName("Машина времени");
    console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

 */ 