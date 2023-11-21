import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import BookDataService from '../services/book';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Book() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [books, loadBooks] = useState([]);
    const [inputs, setInputs] = useState({
        title: "",
        author: "",
        status: "",
        id: ""
    });
    const [modalTitle, setModalTitle] = useState('Add new book');
    const setValues = (e) => {
        let { value, name } = e.target
        setInputs({ ...inputs, [name]: value });
    }
    const submitForm = async () => {
        const { title, author, status } = inputs;
        if (title === '' || author === '' || status === '') {
            toast.error('All fields required!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            try {
                if (inputs.id !== '' && inputs.id !== null && inputs.id !== undefined) {
                    const result = await BookDataService.updateBook(inputs.id, inputs);
                    toast.success('Book updated successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    const result = await BookDataService.addBooks(inputs);
                    toast.success('New book added successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } catch (err) {
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            loadAllBooks();
            setShow(false);
            setModalTitle('Add new book');
            setInputs({
                'title': '',
                'author': '',
                'status': '',
                'id': '',
            })
        }
    }
    const deleteBook = async (id) => {
        try {
            await BookDataService.deleteBook(id);
            toast.success('Deleted successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        loadAllBooks();
    }
    const getBookId = async (id) => {
        const result = await BookDataService.getBook(id);
        setInputs({
            'title': result.data().title,
            'author': result.data().author,
            'status': result.data().status,
            'category': result.data().category,
            'id': id
        })
        setModalTitle('Update book');
        handleShow();

    }
    const loadAllBooks = async () => {
        const result = await BookDataService.getAllBooks();
        loadBooks(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        loadAllBooks();
    }, [])
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-end mt-4">
                    <Button className='proceed-button me-4' onClick={handleShow}><b>Add book</b></Button>
                </div>
                <Table striped bordered hover className='mt-4 mb-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.length > 0 ?
                                books.map((i, index) =>
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{i.title}</td>
                                        <td>{i.author}</td>
                                        <td>{i.status}</td>
                                        <td className='text-center'>
                                            <Button className='btn btn-light me-2' onClick={() => getBookId(i.id)}>
                                                <i class="fa-solid fa-pen-to-square text-success"></i>
                                            </Button>
                                            <Button className='btn btn-light' onClick={() => deleteBook(i.id)}>
                                                <i class="fa-sharp fa-solid fa-trash text-danger"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                                :
                                <tr>Collection is empty</tr>
                        }
                    </tbody>
                </Table>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Book title"
                                autoFocus
                                name="title"
                                value={inputs && inputs.title}
                                onChange={(e) => setValues(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Author"
                                name="author"
                                value={inputs && inputs.author}
                                onChange={(e) => setValues(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" onChange={(e) => setValues(e)}>
                                <option selected={inputs.status == ''} disabled>Select status</option>
                                <option value="Available" selected={inputs.status === 'Available'}>Available</option>
                                <option value="Unavailable" selected={inputs.status === 'Unavailable'}>Unavailable</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitForm}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default Book