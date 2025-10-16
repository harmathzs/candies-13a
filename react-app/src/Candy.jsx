/* Candy.jsx */
const Candy = ({name, mass, origin}) => (
  <div className="candy-card">
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Mass:</strong> {mass}</p>
    <p><strong>Origin:</strong> {origin}</p>
  </div>
)

export default Candy
