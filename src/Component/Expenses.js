import React, {useState} from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import EditExpenses from './EditExpenses';

function Expenses(props) {
    const expense = props.expense;

    const [showModal, setShowModal] = useState(false);

    //function to toggle modal
  function toggleModal() {
  
      setShowModal(!showModal);
    }
  
    //console.log(props);

    return (
        <div>
        <Container>
            <h1>Name:{expense.name}</h1>
            <h1>Date:{expense.date}</h1>
            <h1>Amount:{expense.amount}</h1>
            <h1>Category:{expense.category}</h1>

            <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      
      <Button variant="danger" onClick={()=> props.deleteExpense(expense.id)}>
        Delete
      </Button>

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditExpenses
            expense={expense}
            // editNote={props.editNote}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>

        </Container>
        </div>
    )
}

export default Expenses
