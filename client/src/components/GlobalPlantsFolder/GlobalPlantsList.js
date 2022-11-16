import React from 'react'
import GlobalPlantCard from './GlobalPlantCard'
const GlobalPlantsList = ({plantPosts}) => {

  const renderGlobalPlantCards = plantPosts.map((oneGlobalCard)=>{
    return (
      <GlobalPlantCard 
        key={oneGlobalCard.id}
        id={oneGlobalCard.id}
        username={oneGlobalCard.user.username}
        plant_name={oneGlobalCard.plant_name}
        image={oneGlobalCard.image}
        indoor={oneGlobalCard.indoor}
        state={oneGlobalCard.state}
        pet_safe={oneGlobalCard.pet_safe}
      />
    )
  })
  
  return (
    <div>{renderGlobalPlantCards}</div>
  )
}

export default GlobalPlantsList

