import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
    const [entries, setEntries] = useState([
        { id: 1, title: "Looking for 2 players", date: "July 20, 2024", gender: "Male", age: "18-25", message: "We need 2 more players for our game this weekend.", replies: [] },
        { id: 2, title: "Looking for Female Player", date: "July 21, 2024", gender: "Female", age: "20-30", message: "Looking for a female player for our mixed team practice.", replies: [] },
        { id: 3, title: "Team of 4 looking for opponents", date: "July 22, 2024", gender: "Any", age: "Any", message: "We are a team of 4 looking for opponents to play against.", replies: [] }
    ]);

    const [newEntry, setNewEntry] = useState({ title: "", date: "", gender: "", age: "", message: "" });
    const [replyText, setReplyText] = useState({});

    const handleChange = (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries([...entries, { id: entries.length + 1, ...newEntry, replies: [] }]);
        setNewEntry({ title: "", date: "", gender: "", age: "", message: "" });
    };

    const handleReplyChange = (e, entryId) => {
        setReplyText({ ...replyText, [entryId]: e.target.value });
    };

    const handleReplySubmit = (e, entryId) => {
        e.preventDefault();
        setEntries(entries.map(entry => 
            entry.id === entryId 
                ? { ...entry, replies: [...entry.replies, { id: entry.replies.length + 1, text: replyText[entryId] }] } 
                : entry
        ));
        setReplyText({ ...replyText, [entryId]: '' });
    };

    return (
        <div className="lfg-container">
            <h1>Looking for Group</h1>
            {entries.map(entry => (
                <div key={entry.id} className="lfg-entry">
                    <h2>{entry.title}</h2>
                    <p><strong>Date:</strong> {entry.date}</p>
                    <p><strong>Gender:</strong> {entry.gender}</p>
                    <p><strong>Age:</strong> {entry.age}</p>
                    <p>{entry.message}</p>
                    <div className="replies">
                        {entry.replies.map(reply => (
                            <div key={reply.id} className="reply">
                                <p>{reply.text}</p>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={(e) => handleReplySubmit(e, entry.id)} className="reply-form">
                        <input 
                            type="text" 
                            value={replyText[entry.id] || ''} 
                            onChange={(e) => handleReplyChange(e, entry.id)} 
                            placeholder="Type your reply" 
                            required 
                        />
                        <button type="submit">Reply</button>
                    </form>
                </div>
            ))}
            <form onSubmit={handleSubmit} className="lfg-form">
                <h2><p className="submitTitle">Make your own post</p></h2>
                <input type="text" name="title" value={newEntry.title} onChange={handleChange} placeholder="Title" required />
                <input type="date" name="date" value={newEntry.date} onChange={handleChange} required />
                <input type="text" name="gender" value={newEntry.gender} onChange={handleChange} placeholder="Gender" required />
                <input type="text" name="age" value={newEntry.age} onChange={handleChange} placeholder="Age" required />
                <textarea name="message" value={newEntry.message} onChange={handleChange} placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Chat;