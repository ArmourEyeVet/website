import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

// const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
const url = "https://ArmourEyeVet.us18.list-manage.com/subscribe/post?u=a1c8885ddbf605a37715f6bcd&id=943e23ae61";

// simplest form (only email)
const MCForm = (props) => <MailchimpSubscribe url={url}/>




// use the render prop and your custom form
// const MCForm = (props) => (
// // const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <MyForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )

export default MCForm