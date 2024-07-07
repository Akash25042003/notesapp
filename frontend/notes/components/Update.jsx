import '../style/update.css'
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const UpdateNote = () => {
    const { id } = useParams();
    const history = useHistory();
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/api/notes/note/${id}`, {
            credentials: 'include', // Add credentials to include cookies
            headers: {
                'Content-Type': 'application/json', // Set content type to JSON
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch note');
                }
                return response.json();
            })
            .then(data => {
                setTittle(data.tittle);
                setDescription(data.description);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedNote = { tittle, description };

        fetch(`http://localhost:4000/api/notes/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedNote)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update note');
            }
            return response.json();
        })
        .then(() => {
            history.push(`/Singlenote/${id}`); 
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <div className="update-note">
            <h2>Update Note</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleUpdate}>
                <div className='update-tittle'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={tittle} onChange={(e) => setTittle(e.target.value)} className='up-de-in'/>
                </div>
                <div className='update-description'>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className='up-ti-in'/>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateNote;
