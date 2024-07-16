"use client"
import {useState} from "react"

export const metadata={
  title:"Contact us Page",
  description:"science Blog for People"
}

export default function Contact() {
const [inputs,setInputs]=useState({});
const [message,setMessage]=useState("");

const handleInput=(event)=>{
  setInputs((state)=>{
    return { ...state, [event.target.name]:event.target.value}})
}

const handleSubmit=(event)=>{
event.preventDefault();
fetch("http://localhost:3000/api" +"/enquiry",{
  method:"POST",
  body:JSON.stringify(inputs)

} )
.then((response)=>response.json())
.then((response)=>{
  setMessage(response.message);
  setInputs({});
  setTimeout(()=>{
    setMessage("")
  },3000)
})
}




  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <form onSubmit ={handleSubmit} className="w-full max-w-lg">
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            onChange={handleInput}
            value={inputs.name??""}
            name="name"
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="email" className="w-1/4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={handleInput}
            value={inputs.email??""}
            name="email"
            className="border rounded px-2 py-1 w-3/4"
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="message" className="w-1/4">
            Message:
          </label>
          <textarea
            id="message"
            className="border rounded px-2 py-1 w-3/4"
            onChange={handleInput}
            value={inputs.message??""}
            name="message"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
