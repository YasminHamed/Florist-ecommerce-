import React from 'react'
import './Error.css'

function Error() {
  return (
    <div>
           	<div id ="container">
   		<div class ="container-notfound">
   			<div class="error-message-header">
   				<div class="message-header"><h3> Page not Found!!!! </h3></div>

   			</div>

   			<div class="error-message-content">
   				<div class="message-content">

   					<h1>404</h1>
   				</div> 



   			</div>
   			<div class="error-message-footer">
               <a href="/"  class="btn btn-danger">Back to Home</a>
   			</div>


   		</div>
   	</div>
    </div>
  )
}

export default Error