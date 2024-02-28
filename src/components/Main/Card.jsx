const Card = (data) => {
	// console.log(data);
	const { title, date, desc, image } = data;
	return (
		<div className="cards">
			<div className="title">
				<h1>{title}</h1>
				<h2>{date}</h2>
				<img src={image} alt="" />
				<div className="card-over">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
