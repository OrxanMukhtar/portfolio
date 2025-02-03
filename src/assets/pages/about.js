// import "./about.css";
import { useState, useReducer } from "react";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "TOGGLE_ITEM":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "CLEAR_COMPLETED":
      return state.filter((item) => !item.completed);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function handleAddItem(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function handleDeleteItem(id) {
    dispatch({ type: "DELETE_ITEM", payload: id });
  }

  function handleToggleItem(id) {
    dispatch({ type: "TOGGLE_ITEM", payload: id });
  }

  function handleClearCompleted() {
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  return (
    <div className="container mt-5 mb-5 pb-5 bg-light">
      <div className="card">
        <Header />
        <div className="card-body">
          <Form onAddItem={handleAddItem} />
          <List
            items={state}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        </div>
        <Summary items={state} onClearCompleted={handleClearCompleted} />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className="card-header mb-5">Enhanced TodoApp</h1>;
}

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("General");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!itemName.trim()) {
      alert("Please enter a valid item name.");
      return;
    }

    const product = {
      id: Date.now(),
      title: itemName,
      quantity: parseInt(quantity),
      category,
      completed: false,
    };

    onAddItem(product);
    setItemName("");
    setQuantity(1);
    setCategory("General");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-md-5">
          <input
            className="form-control"
            type="text"
            placeholder="Add item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

function List({ items, onDeleteItem, onToggleItem }) {
  return (
    <div>
      {items.length > 0 ? (
        <ul className="list-group mt-3">
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-danger">No items in the list</p>
      )}
    </div>
  );
}

function ListItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={item.completed ? { textDecoration: "line-through" } : {}}
        >
          {item.title} ({item.quantity}) - <em>{item.category}</em>
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteItem(item.id)}
      >
        Delete
      </button>
    </li>
  );
}

function Summary({ items, onClearCompleted }) {
  const totalItems = items.length;
  const completedItems = items.filter((item) => item.completed).length;

  return (
    <footer className="card-footer d-flex justify-content-between">
      <p>
        {totalItems} items in total, {completedItems} completed
      </p>
      <button className="btn btn-sm btn-warning" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}
