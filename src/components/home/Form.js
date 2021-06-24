import React from 'react'
import useInput from '../../customhooks/useInput'
import { addNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const Form = () => {
        const [title, bindTitle, resetTitle] = useInput();
        const [content, bindContent, resetContent] = useInput();
        const dispatch = useDispatch();

        const submitHandler = (e) => {
                e.preventDefault();
                if (title && content) {
                        dispatch(addNote({ title, content }))
                        resetContent();
                        resetTitle();
                }
                else if (title)
                        alert('content is empty!');
                else
                        alert('title is empty!')
        }

        return (
                <div className='section flex'>
                        <form onSubmit={submitHandler} className='white custom-card'>
                                <h5 className="dark-text"><u>New Note</u></h5>
                                <div className="input-field">
                                        <input id="note-title" type="text" className="validate" {...bindTitle} />
                                        <label className="active" htmlFor="note-title">Note Title</label>
                                </div>
                                <div className="input-field">
                                        <textarea id="note-content" className="materialize-textarea" {...bindContent} ></textarea>
                                        <label className='active' htmlFor="note-content">Note Content</label>
                                </div>
                                <button className="btn green custom-button">Add</button>
                        </form>

                </div>
        )
}

export default Form
