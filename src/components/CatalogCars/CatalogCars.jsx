import React from "react";
import { useSelector } from "react-redux";
import { catalogSelector } from "../../redax/catalogSelector";
import defaultimg from "../../img/default_car.jpg";
import { ButtonItem, ImgCatalog, OptionsItem, TitleContainer, WrapperCatalog, WrapperItem } from "./CatalogCars.styled";

const CatalogCars = () => {

	const cars = useSelector(catalogSelector);
	console.log(cars);


	return (
		<WrapperCatalog>
			{cars.map(({ id, img, address, rentalCompany, rentalPrice, type, model, mileage, year, make, accessories
			}) => {
				const city = address.split(',');
				const modellength = model.length;
				console.log(modellength);

				return (
					<WrapperItem key={id}>
						{!img ?
							<ImgCatalog src={defaultimg} alt={make} /> :
							<ImgCatalog src={img} alt={make} />}
						<TitleContainer>
							{modellength < 8 ?
								<h2>{make} <span>{model}</span>, {year}</h2> :
								<h2>{make}, {year}</h2>
							}

							<p>{rentalPrice}</p>
						</TitleContainer>
						<OptionsItem>
							<span>{city[1]}</span><span>{city[2]}</span><span>{rentalCompany}</span>
						</OptionsItem>
						<OptionsItem>
							<span>{type}</span><span>{make}</span> <span>{id}</span><span>{accessories[0]}</span></OptionsItem>
						<ButtonItem>Learn more</ButtonItem>
					</WrapperItem>
				)
			})
			}
		</WrapperCatalog>
	)
}

export default CatalogCars