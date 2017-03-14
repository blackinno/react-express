import React from 'react';
import Header from './components/Header';
import styles from './main.css';


class App extends React.Component {
	
	render() {

		return (
			<div>
				<div>
					<Header />
				</div>
				<div className={styles.children_body}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;