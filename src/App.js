import React, { useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
  });
  const [editBook, setEditBook] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleCreate = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', year: '' });
  };

  const handleEdit = (index) => {
    setEditBook(books[index]);
  };

  const handleUpdate = () => {
    const updatedBooks = [...books];
    const index = books.findIndex((book) => book === editBook);
    updatedBooks[index] = editBook;
    setBooks(updatedBooks);
    setEditBook(null);
  };

  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Add New Book</h2>
        <div className="flex">
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="number"
            name="year"
            value={newBook.year}
            onChange={handleInputChange}
            placeholder="Year"
            className="p-2 border border-gray-300 mr-2"
          />
          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Author</th>
            <th className="text-left">Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editBook && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Edit Book</h2>
          <div className="flex">
            <input
              type="text"
              name="title"
              value={editBook.title}
              onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
              placeholder="Title"
              className="p-2 border border-gray-300 mr-2"
            />
            <input
              type="text"
              name="author"
              value={editBook.author}
              onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
              placeholder="Author"
              className="p-2 border border-gray-300 mr-2"
            />
            <input
              type="number"
              name="year"
              value={editBook.year}
              onChange={(e) => setEditBook({ ...editBook, year: e.target.value })}
              placeholder="Year"
              className="p-2 border border-gray-300 mr-2"
            />
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
