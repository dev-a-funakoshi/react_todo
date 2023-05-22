import {Grid} from "@mui/material";
import classNames from "classnames";

const ToDoCard = () => {
    return (<div>
        <input
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
        />

        <span className={classNames({
            'has-text-grey-light': todo.done
        })}>{todo.text}</span>


        <Grid container justifyContent="flex-end">
            {todo.createdAt}
        </Grid>

        <Grid container justifyContent="flex-end">
            優先度：{todo.priority}
        </Grid>

    </div>);
}

export default ToDoCard;