import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Change intro text to match test's expected value */}
      <h4>A short Naration of Lorem Ipsum</h4>

      {/* Loading state */}
      {loading && <h4>Loading...</h4>}

      {/* Error state */}
      {error && <p>Error: {error}</p>}

      {/* Display posts */}
      {data && Array.isArray(data) && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              {/* Add class 'title' to the title element */}
              <strong className="title">{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
