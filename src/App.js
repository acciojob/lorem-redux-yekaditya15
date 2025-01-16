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
      <h1>A short Naration of Lorem Ipsum</h1>{" "}
      {/* This matches the test expectation */}
      {/* Loading state */}
      {loading && <h4>Loading...</h4>}
      {/* Error state */}
      {error && <p>Error: {error}</p>}
      {/* Display posts */}
      {data && Array.isArray(data) && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
