import Card from "./Card"


const Main = ({Products}) => {
  return (
    <div className="row">

        {Products.map((product) => 
        {
        return(
          <Card product={product} />
        )
        }
        )}

    </div>
  )
}

export default Main