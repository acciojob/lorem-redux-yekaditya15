import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions";
import "./App.css"; // Assuming you will add the CSS in this file

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Change intro text to match test's expected value */}
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten from a random API, Please take
        your time to Review
      </h4>
      {/* Loading state */}
      {loading && <h4>Loading...</h4>}

      {/* Error state */}
      {error && <p>Error: {error}</p>}

      {/* Display posts */}
      {data && Array.isArray(data) && (
        <ul>
          {data.map((post) => (
            <li key={post.id} className="post">
              {/* Display title and body in separate lines */}
              <p className="title">
                <h2>Title :</h2>
                {post.title}
              </p>
              <p className="body">
                <h2>Body:</h2> {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
