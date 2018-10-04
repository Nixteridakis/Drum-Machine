 export function starFactory (rating){

	console.log('goes')
	let rating = currentMovie.Ratings[0].Value.match(/[^/10]+/gi);
	let number = Number(rating/2);
	let count = Math.floor(number);
	for (let i=0; i<count; i++){
		return( <i className="fa fa-star"></i>);
	}
	if (number-count >= 0.5){
		return( <i className="fa fa-star-half-full"></i>);
	}	
}

