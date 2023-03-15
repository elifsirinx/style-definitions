import "./App.css";

function App() {
  return (
    //Js'de bir değişken tanımlarken "-" ifadesini kullanamazsınız.
    //style kısmında background-color diye bir key olarak tanımlayamayız.
    //Bu sebeple camelCase ile tanımlama yapıyoruz.

    /** BOOTSTRAP:
     * cdnjs.com sayfasına bootstrap araması yaparak altındaki css tag ini alarak index.htm kısmına yerleştirebilirsin. (TERCIH EDILMEZ)
     *
     */
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div
          style={{
            color: "red",
            backgroundColor: "whitesmoke",
            paddingTop: 50,
          }}
        >
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." <br />
          "There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..."
        </div>
      </header>
    </div>
  );
}

export default App;
