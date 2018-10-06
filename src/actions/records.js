import search from '../lib/search'
import model from '../lib/records'
import contact from '../lib/contacts'
import properties from '../lib/properties'

export const KEYWORD_SEARCH = 'KEYWORD_SEARCH'
export const keywordSearch = (fulltext) => {

  return async (dispatch) => {
    const response = await search.keyWord(fulltext)
    return dispatch({type: KEYWORD_SEARCH, payload: response})
  }
}

export const GET_ALL_RECORDS = 'GET_ALL_RECORDS'
export const getAllRecords = () => {
  return async (dispatch) => {
    const response = await model.getAllRecords()
    return dispatch({type: GET_ALL_RECORDS, payload: response})
  }
}

export const GET_ONE_RECORD = 'GET_ONE_RECORD'
export const getOneRecord = (id) => {
  return async (dispatch) => {
    const response = await model.getOneRecord(id)
    return dispatch({type: GET_ONE_RECORD, payload: response})
  }
}

export const ADD_RECORD = 'ADD_RECORD'
export const addRecord = (record) => {

  return async (dispatch) => {
    console.log("RECORD TO BE SUBMITTED:", record);

    let newRecord = await properties.addProperty(record).then(resp => resp.data[0]).then((resp) => {
      return {
        property_id: resp.id,
        document_date: record.document_date,
        recording_date: record.recording_date,
        document_type: record.document_type,
        title_company: record.title_company,
        instrument_number: record.instrument_number,
        fy_number: record.fy_number,
        cnmi_file_number: record.cnmi_file_number,
        lcdn: record.lcdn,
        book: record.book,
        page: record.page,
        amount: record.amount,
        recording_fees: record.recording_fees,
        land_tax: record.land_tax,
        building_tax: record.building_tax,
        land_appraised_value: record.land_appraised_value,
        building_appraised_value: record.building_appraised_value,
        remarks: record.remarks,
        source_db: record.source_db
      }
    })

    console.log("NEW RECORD:", newRecord);

    let response = await model.addRecord(newRecord)

    console.log("RESPONSE:", response.data.transaction_id);

    let partyPromises = record.parties.map(person => {
      return contact.addContact(person).then((resp) => {
        return {
          role: person.role,
          contact_id: resp.data.id,
          transaction_id: response.data.transaction_id
        }
      })
    })
    let partyList = await Promise.all(partyPromises)

    console.log("PARTY LIST:", partyList);

    let partyResponse = await model.addParties(partyList)

    console.log("Party Response:", partyResponse);
    // Check to see if the Property already exists.
    // If it does, return the property ID, else create it.

    // send contactlist to /api/records/parties w/ addParties

    return dispatch({type: ADD_RECORD})
  }
}

export const UPDATE_RECORD = 'UPDATE_RECORD'
export const updateRecord = (recordId, record) => {
  return async (dispatch) => {
    const response = await model.updateRecord(recordId, record)
    return dispatch({type: UPDATE_RECORD, payload: response})

  }
}
export const EDIT_LOCAL_RECORD = 'EDIT_LOCAL_RECORD'
export const editLocalRecord = (recordKey, recordValue) => {
  return ({
    type: EDIT_LOCAL_RECORD,
    payload: {
      key: recordKey,
      value: recordValue
    }
  })
}

export const DELETE_RECORD = 'DELETE_RECORD'
export const deleteRecord = (recordId) => {
  return async (dispatch) => {
    await model.deleteRecord(recordId)
    return dispatch({type: UPDATE_RECORD})
  }
}

export const ADD_EMPTY_PARTY = 'ADD_EMPTY_PARTY'
export const addEmptyParty = () => {
  return {type: ADD_EMPTY_PARTY}
}

export const EDIT_LOCAL_PARTY = 'EDIT_LOCAL_PARTY'
export const editLocalParty = (i, recordKey, recordValue) => {
  return(dispatch, getState) => {
    console.log("STATE:", getState());
    const editParty = getState().records.recordListing.parties[i]
    // editParty[recordKey] = recordValue
    const updatedParty = {
      ...editParty,
      [recordKey]: recordValue
    }
    dispatch({
      type: EDIT_LOCAL_PARTY,
      payload: {
        index: i,
        value: updatedParty
      }
    })
  }

}
