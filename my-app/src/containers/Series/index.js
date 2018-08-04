import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import 'whatwg-fetch';

class Series extends Component {
	state = {
    	series: [],
    	seriesName: '',
    	isFetching: false
	}

	onSeriesInputChange = e => {
		this.setState({ seriesName: e.target.value, isFetching: true });
		fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
	  		.then(response => response.json())
	  		.then(json => this.setState({ series: json, isFetching: false }));
	}

	render() {
		const { series, seriesName, isFetching } = this.state;
		return (
			<div>
				<Intro message="you can find all your favorite series here"/>
				<div>
					<input type="text" value={seriesName} onChange={this.onSeriesInputChange}/>
				</div>
				{!isFetching && series.length === 0 && seriesName.trim() === ''
				&&
				<p>Enter a series name</p>
				}
				{!isFetching && series.length === 0 && seriesName.trim() !== ''
				&&
				<p>No series were found</p>
				}
				{ isFetching && <Loader />
				}
				{ !isFetching && <SeriesList list={this.state.series} />
				}
			</div>
		);
	}
}

export default Series;
