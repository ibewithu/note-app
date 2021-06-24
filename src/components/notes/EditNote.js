import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../../store/actions/noteAction'
import useInput from '../../customhooks/useInput'
import { useHistory } from 'react-router'

const EditNote = () => {
        const note = useSelector(state => state.note)
        const [title, bindTitle, resetTitle] = useInput(note.title);
        const [content, bindContent, resetContent] = useInput(note.content);
        const dispatch = useDispatch()
        const history = useHistory()

        const submitHandler = (e) => {
                e.preventDefault();
                if (title && content) {
                        dispatch(updateNote({ id: note.id, title, content }))
                        resetContent();
                        resetTitle();
                        history.push('/')
                }
                else if (title)
                        alert('content is empty!');
                else
                        alert('title is empty!')
        }

        return (
                <div className='section'>
                        <form onSubmit={submitHandler} className='white'>
                                <h5 className="dark-text">Note Content</h5>
                                <div className="input-field">
                                        <input id="note-title" type="text" className="validate" {...bindTitle} />
                                        <label className="active" htmlFor="note-title">Note Title</label>
                                </div>
                                <div className="input-field">
                                        <textarea id="note-content" className="materialize-textarea" {...bindContent} ></textarea>
                                        <label className='active' htmlFor="note-content">Note Content</label>
                                </div>
                                <button className="btn green">Update</button>
                        </form>

                </div>
        )
}

export default EditNote
