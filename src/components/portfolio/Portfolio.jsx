import React, {useState, useEffect} from 'react'
import {itemPortfolio, dataPortfolios} from '../../fakedata'
import Itemportfolio from '../itemportfolio/Itemportfolio'
import Detailportfolio from '../detaiportfolio/Detailportfolio'

const Portfolio = () => {
    const [type, setType] = useState(itemPortfolio[0].id)
    const [dataType, setDataType] = useState([])
    
    useEffect(() => {
        const initialDataType = dataPortfolios.filter((item, index) => item.id === itemPortfolio[0].id)
        setDataType(initialDataType[0].data)
    }, [])

    useEffect(() => {
        const newDataType = dataPortfolios.filter((item, index) => item.id === type)
        setDataType(newDataType[0].data)
    }, [type])

    return (
        <div className = 'portfolio' id = 'portfolio'>
            <h1 className = 'portfolio__title'>Portfolio</h1>
            <ul className = 'portfolio__list'>
                {
                    itemPortfolio.map((item, index) => (
                        <Itemportfolio 
                            type = {item.id} 
                            setType = {setType} 
                            active = {type === item.id}
                            key = {index}
                            display = {item.display}
                        />
                    ))
                }
            </ul>
            <Detailportfolio dataType = {dataType} />
        </div>
    )
}

export default Portfolio 
