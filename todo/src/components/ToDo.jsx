import classNames from 'classnames';
import 'bulma/css/bulma.css';
import {Card, cardActionAreaClasses, Grid} from "@mui/material";

export const ToDo = (props) => {

    // stateを作成
    const { todo, onCheck } = props;

    // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
    const handleChange = () => {
        onCheck(todo);
    };

    return (
        <Card>
                <label className="panel-block">
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <span className={classNames({
                                'has-text-grey-light': todo.done
                            })}>{todo.text}</span>
                        </Grid>
                        <Grid item xs={2}>
                            {todo.createdAt}
                        </Grid>
                        <Grid item xs={1}>
                            {todo.priority}
                        </Grid>
                        </Grid>
                </label>
        </Card>
    );
}

export default ToDo;