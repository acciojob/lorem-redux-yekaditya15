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
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>

      {/* Show loading state */}
      {loading && <div className="loading">Loading...</div>}

      {/* Show error state if there is an error */}
      {error && <div className="error">Error: {error}</div>}

      {data && Array.isArray(data) && (
        <div className="posts">
          {data.map((post) => (
            <div key={post.id} className="post">
              {/* Display title and body in separate lines */}
              <p className="title">
                <h2>Title :</h2>
                {post.title}
              </p>
              <p className="body">
                <h2>Body :</h2>
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
