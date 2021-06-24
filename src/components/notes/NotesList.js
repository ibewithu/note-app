import React from 'react'
import Note from './Note'

const NotesList = ({ notes, title }) => {
        return (
                <div className='custom-list'>
                        <center className='custom-heading-note-list'><u>{title ? title : 'Note List'}</u></center>
                        {notes && notes.map(note => <Note note={note} key={note.id} />)}
                </div>
        )
}

export default NotesList
