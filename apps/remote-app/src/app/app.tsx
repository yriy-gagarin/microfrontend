// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import * as React from "react";

export function App(props: {message?:string}) {
  const { message } = props;
  return (
    <div style={{border:'1px solid gray', padding:'10px', margin:'5px 0'}}>
      <h1>
        <span>Remote приложение на react</span>
        <img
          style={{padding:'0 10px'}}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt=""
          height="25"/>
      </h1>
      <input type={"number"} defaultValue={1}/>
      {message && <span style={{paddingLeft: '10px'}}>Сообщение от host: {message}</span>}
    </div>
  );
}

export default App;
