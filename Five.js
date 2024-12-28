import React, { useState } from "react";

export default function App() {
  const [bookList] = useState([
    { id: 1, title: "Javascript", publishYear: 2007 },
    { id: 2, title: "Python", publishYear: 2000 },
    { id: 3, title: "jQuery", publishYear: 2003 },
    { id: 4, title: "HTML", publishYear: 1996 },
    { id: 5, title: "CSS", publishYear: 1998 },
    { id: 6, title: "React", publishYear: 2005 },
    { id: 7, title: "Script", publishYear: 2010 },
    { id: 8, title: "Laravel", publishYear: 2014 },
  ]);

  const [productList] = useState([
    { id: 1, title: "Walton", publishYear: 2007 },
    { id: 2, title: "Lava", publishYear: 2000 },
    { id: 3, title: "Samsung", publishYear: 2003 },
    { id: 4, title: "Apple", publishYear: 1996 },
    { id: 5, title: "Nokia", publishYear: 1998 },
    { id: 6, title: "Vivo", publishYear: 2005 },
    { id: 7, title: "Xiaomi", publishYear: 2010 },
    { id: 8, title: "Poco", publishYear: 2014 },
  ]);

  const [activeId, setActiveId] = useState(null);
  const [currentView, setCurrentView] = useState("book");

  const handleShow = (id, type) => {
    setActiveId(id);
    setCurrentView(type);
  };

  const dataToShow =
    currentView === "book"
      ? bookList.find((item) => item.id === activeId)
      : productList.find((item) => item.id === activeId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Item Viewer</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Books Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Books</h2>
          <div className="flex flex-wrap gap-4">
            {bookList.map((book) => (
              <button
                key={book.id}
                onClick={() => handleShow(book.id, "book")}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                aria-label={`Show details for Book ${book.title}`}
              >
                Show Book {book.id}
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <div className="flex flex-wrap gap-4">
            {productList.map((product) => (
              <button
                key={product.id}
                onClick={() => handleShow(product.id, "product")}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                aria-label={`Show details for Product ${product.title}`}
              >
                Show Product {product.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-8 bg-gray-100 p-4 rounded shadow">
        {dataToShow ? (
          <div>
            <h3 className="text-lg font-bold mb-2">Details</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Title:</span> {dataToShow.title}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Publish Year:</span>{" "}
              {dataToShow.publishYear}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Select an item to show details.</p>
        )}
      </div>
    </div>
  );
        }


