import axios from 'axios';

const books_url = 'http://localhost:3000/api/books';

class BookService{
    /* GET books */
    static get_books(query){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(books_url+query);
                const data = res.data;
                resolve(data);
            }catch(err){
                reject(err);
            }
        });
    }
}

export default BookService;