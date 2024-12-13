import React, { useEffect, useState } from 'react';

const CountryTable = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] =useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);

        console.log(data);
      } catch (error) {
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Country List</h1>
      <input
        type="text"
        placeholder="Enter a country name"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '90%' }}
      />
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Flag</th>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => (
            <tr>
              <td>{index + 1}</td>
              <td><img src={country.flags.svg} width="30" /></td>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.population.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
