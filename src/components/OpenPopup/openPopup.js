import React from 'react';
import {connect} from "react-redux";

import Popup from '../Popup/popup';

const OpenPopup = (props) => {
  return (
    <>
      {props.isVisible && (
        <Popup title={"Open Document"}>
          {props.error && (
            <pre style={{ color: 'red' }}>{JSON.stringify(props.error)}</pre>
          )}

          {props.isLoading && (
            <div>Loading...</div>
          )}

          {!props.error && !props.isLoading && (
            <ul>
              {props.listDocument.map((item) => (
                <li key={item.DocumentId}>
                  <button onClick={() => {}}>{item.Title}</button>
                </li>
              ))}
            </ul>
          )}
        </Popup>
      )}
    </>
  )
}

function mapStateToProps(state) {
  return {
    isVisible: state.canvas.activePopup === 'OPEN',
    isLoading: state.canvas.documents.loading,
    listDocument: state.canvas.documents.list,
    error: state.canvas.documents.error,
  }
}

export default connect(mapStateToProps)(OpenPopup)
