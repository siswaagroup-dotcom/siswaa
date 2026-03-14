import { useState } from "react"

export default function Contacts() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const [status,setStatus] = useState(null)
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if(!form.name || !form.email || !form.phone || !form.message){
      setStatus({
        type:"error",
        message:"Please fill all fields"
      })
      return
    }

    setLoading(true)

    try {

      const formData = new FormData()

      formData.append("name", form.name)
      formData.append("email", form.email)
      formData.append("phone", form.phone)
      formData.append("message", form.message)

      await fetch(
        "https://script.google.com/macros/s/AKfycbymL-BanOTnEt-wVg_V6h6Nb8BcclhmZc2w2mTDf_CmUN_Uk7hnZ5_izyZY3ttJddaK/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
          headers:{
            Accept:"application/json"
          }
        }
      )

      setStatus({
        type:"success",
        message:"Message sent successfully."
      })

      setForm({
        name:"",
        email:"",
        phone:"",
        message:""
      })

    } catch (err) {

      setStatus({
        type:"error",
        message:"Failed to send message. Try again."
      })

    }

    setLoading(false)

    setTimeout(()=>{
      setStatus(null)
    },4000)

  }

  return (
    <div
      style={{
        background:"#f5f2ee",
        padding:"120px 20px",
        position:"relative"
      }}
    >

      {status && (
        <div
          style={{
            position:"fixed",
            top:30,
            right:30,
            background: status.type === "success" ? "#1a1a1a" : "#d9534f",
            color:"#fff",
            padding:"14px 20px",
            borderRadius:6,
            fontFamily:"Courier New",
            letterSpacing:"0.05em",
            boxShadow:"0 10px 30px rgba(0,0,0,0.15)",
            zIndex:9999
          }}
        >
          {status.message}
        </div>
      )}

      <div
        style={{
          maxWidth:900,
          margin:"0 auto",
          textAlign:"center"
        }}
      >

        <h2
          style={{
            fontFamily:"Georgia, serif",
            fontSize:"clamp(2.5rem,5vw,3.5rem)",
            marginBottom:20,
            color:"#1a1a1a"
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            fontFamily:"Courier New",
            fontSize:"0.9rem",
            color:"rgba(0,0,0,0.5)",
            marginBottom:40,
            lineHeight:1.8
          }}
        >
          Want to collaborate or start your own t-shirt brand?
          Send us a message and we will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display:"grid",
            gap:20
          }}
        >

          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            style={{
              padding:14,
              border:"1px solid rgba(0,0,0,0.1)"
            }}
          />

          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            style={{
              padding:14,
              border:"1px solid rgba(0,0,0,0.1)"
            }}
          />

          <input
            required
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            style={{
              padding:14,
              border:"1px solid rgba(0,0,0,0.1)"
            }}
          />

          <textarea
            required
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={{
              padding:14,
              border:"1px solid rgba(0,0,0,0.1)"
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background:"#1a1a1a",
              color:"#fff",
              padding:"14px 20px",
              border:"none",
              cursor:"pointer",
              fontFamily:"Courier New",
              letterSpacing:"0.2em",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>

        </form>

      </div>

    </div>
  )
}