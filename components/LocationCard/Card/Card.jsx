import './Card.css'

const Card = ({ location }) => {
    console.log(location);
    return (
        <div className='card-body'>
            <div className='location-img'>
                <img src={location.img.src} alt={location.img.alt} />
            </div>
            <div className='card-location-details'>
                <div className="counrty-name-link">
                    <img src="../../../img/marker.png" alt="" />
                    <p>{location.country}</p>
                    <a href={location.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1>{location.title}</h1>
                <h3>{location.dates}</h3>
                <p>{location.text}</p>
            </div>
        </div>
    )
}

export default Card