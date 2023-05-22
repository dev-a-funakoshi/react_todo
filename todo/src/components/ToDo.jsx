import classNames from 'classnames';
import 'bulma/css/bulma.css';
import {Card, Grid} from "@mui/material";


export const ToDo = (props) => {

    // stateを作成
    const { todo, onCheck } = props;

    // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
    const handleChange = () => {
        onCheck(todo);
    };

    return (
        <Card style={{width: '100%'}}>
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={1}>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={7}>
                    <span className={classNames({
                        'has-text-grey-light': todo.done
                    })}>{todo.text}</span>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent="flex-end">
                        {todo.createdAt}
                    </Grid>
                </Grid>
                <Grid item justifyContent="flex-end" xs={1}>
                    <Grid container justifyContent="flex-end">
                        優先度：{todo.priority}
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default ToDo;