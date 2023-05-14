
import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>
        {snack.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={snack.url} target="_blank" rel="noreferrer">
          {snack.name}
        </a>
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}>🔍</Link>
      </td>
      <td>
      {snack.is_vegan ? (
          <span>👍🏽</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
      {snack.is_halal ? (

          <span>👍🏽</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>


    </tr>
  );
}

export default Snack;