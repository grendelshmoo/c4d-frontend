import React, {Component} from 'react'
import ContactList from './ContactList'
import axios from 'axios'
const BASE_URL = `http://localhost:5000`


class ContactView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }
  componentDidMount = async () => {
    try {
      axios(`${BASE_URL}/api/contacts/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('c4d')}`
        },
        method: 'GET'
      }).then(response => this.setState({contacts: response.data.data}))
    } catch (e) {
      console.error(e.response)
      return false
    }
  }

  render() {
    return (<div className="container-fluid">
      <div className="row m-2">
        <div className="col p-2">
          <table className="table table-striped">
            <thead className="thead bg-dark text-light">
                <tr>
                  <th scope="col">Last Name</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Mailing Address</th>
                </tr>
              </thead>
              <ContactList contactState={this.state.contacts}/>

              {/* {
                searchResults.data.length >= 1  ?
                <ResultHeader />
                : <thead></thead>
              }
            <ResultsList setActiveRecord={setActiveRecord} searchResults={searchResults} /> */}
          </table>
        </div>

      </div>
    </div>)
  }

}

export default ContactView
