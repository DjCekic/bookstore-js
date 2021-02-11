import axios from 'axios';

const user_url = 'http://localhost:3000/api/user';

class UserService{
    /* POST users */
    static login(username, password){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(user_url + '/login', {username: username, password: password});
                resolve(res.data);
            }catch(err){
                reject(err);
            }
        });
    }

    static register(username, password){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(user_url + '/register', {username: username, password: password});
                resolve(res.data);
            }catch(err){
                reject(err);
            }
        });
    }

    static add_to_cart(user_id, book_id){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.post(user_url + '/cart', {user_id: user_id, book_id: book_id});
                resolve(res.data);
            }catch(err){
                reject(err);
            }
        });
    }

    /* GET books from cart*/
    static get_cart(user_id){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(user_url + '/cart/' + user_id);
                const data = res.data;
                resolve(data);
            }catch(err){
                reject(err);
            }
        });
    }

}

export default UserService;