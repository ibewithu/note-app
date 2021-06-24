import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetails = (props) => {
        const noteId = props.match.params.id;
        useFirestoreConnect([{ collection: 'notes', doc: noteId }]);
        const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[noteId])

        const noteMarkUp = !isLoaded(note) ? (
                <div className='container section'>
                        <div className="card z-depth-0">
                                <div className="card-content custom-note-detail">
                                        <span className="card-title">Loading...</span>
                                </div>
                        </div>
                </div>
        ) : (isEmpty(note) ? (
                <div className='container section'>
                        <div className="card z-depth-0">
                                <div className="card-content custom-note-detail">
                                        <span className="card-title">The note content is empty!</span>
                                </div>
                        </div>
                </div>
        ) : (
                <div className='container section'>
                        <div className="card z-depth-0">
                                <div className="card-content custom-note-detail">
                                        <span className="card-title">{note?.title}</span>
                                        <p className="card-content">{note?.content}</p>
                                        <div className="card-action grey grey-text lighten-4">
                                                <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                                        </div>
                                </div>
                        </div>
                </div>
        ))

        return noteMarkUp
}

export default NoteDetails
