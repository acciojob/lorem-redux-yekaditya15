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
      {/* Intro text */}
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
            <li key={post.id}>
              {/* Display the post title with a space after "Title :" */}
              <h4 className="title">Title : {post.title}</h4>
              {/* Display the post body */}
              <h4>{post.body}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
