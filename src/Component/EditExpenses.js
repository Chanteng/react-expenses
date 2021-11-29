import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap"

function EditExpenses(props) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.vale)
    }

    const handleDateChange = (e) => {
        setDate(e.target.vale)
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.vale)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.vale)
    }

    function handleSubmit() {
      let editedExpense = {
        name: name,
        date: date,
        amount: amount,
        category: category,
        id: props.expense.id
      }

      props.editedExpense(props.expense.id, editedExpense)
      props.toggleModal();

    }

    return (
        <div>
        <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control
           type="text"
           placeholder="Name"
           value={name}
           onChange={(e) => handleNameChange(e)}
         />
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Date</Form.Label>
         <Form.Control
           name="date"
           placeholder="Enter Date"
           value={date}
           onChange={(e) => handleDateChange(e)}
         />
         </Form.Group>
 
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Amount</Form.Label>
         <Form.Control
           name="number"
           placeholder="Amount"
           value={amount}
           onChange={(e) => handleAmountChange(e)}
         />
          </Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Category</Form.Label>
         <Form.Control
           name="text"
           placeholder="Category"
           value={category}
           onChange={(e) => handleCategoryChange(e)}
         />
 
         <Button onClick={() => handleSubmit()}>Save</Button>
       </Form.Group>
     </Form>
   </div>
    )
}

export default EditExpenses
