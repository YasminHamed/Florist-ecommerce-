import React from 'react'
import './Error.css'

function Error() {
  return (
    <div>
           	<div id ="container">
   		<div className ="container-notfound">
   			<div className="error-message-header">
   				<div className="message-header"><h3> Page not Found!!!! </h3></div>

   			</div>

   			<div className="error-message-content">
   				<div className="message-content">

   					<h1>404</h1>
   				</div> 



   			</div>
   			<div className="error-message-footer">
               <a href="/"  className="btn btn-danger">Back to Home</a>
   			</div>


   		</div>
   	</div>
    </div>
  )
}

export default Error