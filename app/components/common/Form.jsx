export default Form = ({ name, buttonValue, label, placeholder, action, method, }) =>{
    console.log(action, method)
    return<> 
    {/* <form action={action} method={method}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={placeholder}
            name={name}
            />
        
        </div>
        <button
            type="submit"
            value={buttonValue}
            className="btn btn-primary"
        >
            Submit
        </button>
    </form> */}
    </>
}