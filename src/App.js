import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import RecordCollectionPage from './components/RecordCollectionPage';

const store = createStore(combineReducers(reducers));

class App extends React.Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<RecordCollectionPage />
				</Provider>
			</div>
		);
	}
}

export default App;
