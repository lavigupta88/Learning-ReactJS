 

const Card = (props) => {
  return (
    <div>
      <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1789055093474-d76cdaa5a1f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button>view Profile</button>
    </div>
    </div>
  )
}

export default Card
