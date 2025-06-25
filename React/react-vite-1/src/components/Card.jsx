import '../App.css'

function Card({src, name, rating}) {
    return (
        <>
            <div className='card-div' style={{display: 'flex', alignItems: 'center' }}>
                <img src={src} alt="" />
                <p style={{width: '200px' }}>{name}</p>
                <p style={{width: '200px' }}>Rating: {rating}</p>
                {
                    rating > 8.6 ? <p  >Must Watch</p> : ''
                }

            </div>
        </>
    )
}

export default Card