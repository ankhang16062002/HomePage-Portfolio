import React from 'react'

const Detailportfolio = ({dataType}) => {
    return (
        <div className = 'detail-portfolio'>
            {
                dataType.map((data) => (
                    <div className="detail-portfolio__item">
                        <img src= {data.img} alt="img" />
                        <h3>{data.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Detailportfolio
