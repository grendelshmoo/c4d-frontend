import React, {Component} from 'react'
import ContactList from './ContactList'
import axios from 'axios'
const BASE_URL = `http://localhost:5000`


class ContactSearch extends Component {
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
      <div className="row p-2 m-2">
        <div className="col bg-dark text-light text-center p-3">
          <span>
            Contact Search
          </span>
          <form onSubmit={null} className="form-inline md-form form-sm m-2 p-2">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input id="searchfield" className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" name="keyword-search"></input>
            <a className="btn btn-sm btn-outline-danger m-3" href="/contacts/add" role="button">Add Contact</a>
          </form>

        </div>
      </div>
      <div className="row m-2">
        <div className="col p-2">
          <table className="table table-striped">
            <thead className="thead bg-dark text-light">
                <tr>
                  <th scope="col">ID</th>
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

export default ContactSearch
