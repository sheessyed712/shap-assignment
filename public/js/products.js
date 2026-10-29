const formHandle=(e)=>{
    e.preventDefault();

    const data=e.target.productName.value;
    const obj={
        value:data
    }

    axios.post("http://localhost:3000/api/products",obj)
    .then((response)=>{
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}