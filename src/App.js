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

      {data && (
        <div className="post">
          <p className="title">
            <h2>Title :</h2>
            {data.title}
          </p>
          <p className="body">
            <h2>Body :</h2>
            {data.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
