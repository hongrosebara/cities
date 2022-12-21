import { buildCityPath, extractData } from "./api/getCities";
import { useState } from "react";
import { List } from "react-virtualized";
import Autocomplete from "react-autocomplete";

const rowRenderer =
  (data, onSelect) =>
  ({ key, index, style }) => {
    const client = data[index];
    return (
      <div key={key} style={style} onMouseDown={onSelect.bind(null, client)}>
        <h2>{client.name}</h2>
      </div>
    );
  };

const renderMenu = (data, onSelect) => () => {
  return (
    <List
      width={500}
      height={300}
      rowHeight={20}
      rowCount={data.length}
      rowRenderer={rowRenderer(data, onSelect)}
    />
  );
};

const HomePage = ({ cities }) => {
  // default valse should be empty string
  const [searchTerm, setSearchTerm] = useState("");

  if (cities !== undefined) {
    let data = []; // show all items by default

    if (searchTerm.length > 1) {
      data = cities.filter((city) =>
        // name.toLowerCase is used for case insensitivity
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const onSelect = (city) => setSearchTerm(city.name);

    return (
      <div className="flex items-center justify-center p-3">
        <Autocomplete
          className="p-3"
          items={data}
          value={searchTerm}
          getItemValue={(item) => item.name}
          onChange={(e, value) => setSearchTerm(value)}
          renderMenu={renderMenu(data, onSelect)}
          renderItem={(item) => <div>{item.name}</div>}
          shouldItemRender={() => false}
          inputProps={{
            className: "form-control",
            style: {
              width: "500px",
              height: "25px",
              padding: "2px",
              background: "var(--color-bg-secondary)",
            },
            placeholder: "Search city",
          }}
        />
      </div>
    );
  }
};

export async function getStaticProps() {
  const cityPath = buildCityPath();
  const cities = extractData(cityPath).cities;
  return {
    props: { cities },
  };
}

export default HomePage;
