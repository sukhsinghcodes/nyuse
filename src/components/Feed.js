import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import NewsItem from './NewsItem';

const paperStyle = {
	marginTop: '20px',
	marginBottom: '20px'
};
const listStyle = {
	paddingTop: '0',
	paddingBottom: '0'
};

export default class Feed extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let feedItems = (<p>No news items</p>);
		if (this.props.items.size > 0) {
			feedItems = this.props.items.get('newsItems').map((item) => {
				let source = this.props.items.get('feedSources').find((feedSource) => {
					return feedSource.get('id') === item.get('sourceId');
				});
				return (
					<div key={item.get('id')}>
						<NewsItem newsItem={item} feedSource={source} />
						<Divider />
					</div>
				);
			});
		}
		return (
			<Paper style={paperStyle}>
				<List style={listStyle}>
					{feedItems}
				</List>
			</Paper>
		);
	}
}

Feed.PropTypes = {
	items: PropTypes.object
};