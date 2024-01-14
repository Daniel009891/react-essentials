import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComments = React.createRef();
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)

    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h2>Please fill out the form below:</h2>
            <div>
                <label htmlFor='id-name'>Your Name:</label>
                <input defaultValue="Your name" ref={this.inputName} id='id-name' name='name' type='text'/>
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select ref={this.inputCategory} id='id-category' name='category'> 
                    <option value='website' >Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General Inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea ref={this.inputComments} id='id-comments' name='comments'/>
            </div>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm