import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Popover</h1>
      <div className="popover">
        <button>Hover Me</button>
        <div className="popover-content">
          <h2>Heading</h2>
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}
