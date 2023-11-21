import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const bookCollectionRef = collection(db, "books")
class BookDataService {
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook);
    }
    updateBook = (id, updateBook) => {
        const bookDoc = doc(db, "books", id);
        return updateDoc(bookDoc, updateBook)
    }
    deleteBook = (id) => {
        const bookDoc = doc(db, "books", id);
        return deleteDoc(bookDoc)
    }
    getAllBooks = () => {
        return getDocs(bookCollectionRef)
    }
    getBook = (id) => {
        const bookDoc = doc(db, "books", id);
        return getDoc(bookDoc)
    }
}

export default new BookDataService();