import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const CommentForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [validator] = useState(new SimpleReactValidator({ className: "error-message" }));

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        validator.showMessageFor(e.target.name);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setForm({ name: "", email: "", message: "" }); 
            validator.showMessages();
        }
    };

    return (
        <form className="comment-form" onSubmit={submitHandler}>
            <div className="form-inputs">
                <input
                    placeholder="Name:"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                />
                {validator.message("name", form.name, "required|alpha")}
                
                <input
                    placeholder="Email:"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                />
                {validator.message("email", form.email, "required|email")}
            </div>
            <div className="form-textarea">
                <textarea
                    id="comment"
                    placeholder="Message here..."
                    name="message"
                    value={form.message}
                    onChange={changeHandler}
                />
                {validator.message("message", form.message, "required|min:10")}
            </div>
            <div className="form-submit">
                <input id="submit" value="GET A QUOTE" type="submit" />
            </div>
        </form>
    );
};

export default CommentForm;
