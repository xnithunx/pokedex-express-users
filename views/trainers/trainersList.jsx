
var React = require("react");

 class Show extends React.Component {
	 render() {
		 return (
			 <html>
    		 <head />
    		 <body>
    			 <div>
				 <ul className="trainers-list">
					 <li className="trainers-attribute">
					 id: {this.props.trainers.id}
				    </li>
				 </ul>
				 </div>
			 </body>
			 </html>
		 );
	 }
 }

 module.exports = Show;