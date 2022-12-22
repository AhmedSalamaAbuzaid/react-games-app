import './GamingLibrary.css';
import {SectionWrapper, SectionHeader, GamingLibararyCard } from '../../components/index';
import GamingLibraryData from '../../Data/GamingLibraryData'


const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card => {
        return <GamingLibararyCard
        key={card.id}
        id={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        added={card.date_aded}
        played={card.houres_played}
        download={card.download}/>
    })

  return (
    <SectionWrapper>
        <SectionHeader>
            Gaming Library
        </SectionHeader>
        <div className='gaming-library-cards'>
            {cards}
        </div>
    </SectionWrapper>
  )
}

export default GamingLibrary