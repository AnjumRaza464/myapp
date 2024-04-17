import Home from "./pages/Home"


function App() {
  let Products = [
    {
      title: "Title One" ,
      name: "Product 1",
      price: 100,
      image : "images/bucket.png",
    },
    {
      title: "Title Two" ,
      name: "Product 2",
      price: 200,
      image : "images/combo.png",
    },
    {
      title: "Title Three" ,
      name: "Product 3",
      price: 300,
      image : "images/combo.png",
    }
  ]

  return (
    <>
      <Home Products={Products} />
    </>
  )
}

export default App
