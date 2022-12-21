import { buildCityPath, extractData } from "./api/getCities"
import { useState } from "react"
import Image from 'next/image'
import Autocomplete from '@/components/Autocomplete'

const HomePage = ({ cities }) => {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: '100%',
    height: 200,
  };
  const view = 'coverart'; // or 'coverart'
  const theme = 'white'; // or 'white'
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex justify-center">
          <div className="m-3">
          <Autocomplete 
            options={cities.map((city)=>city.name)}
            value={selectedOption}
            onChange={setSelectedOption}
          />
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const cityPath = buildCityPath();
  const cities = extractData(cityPath).cities;
  return {
    props: { cities } 
  }
}

export default HomePage;