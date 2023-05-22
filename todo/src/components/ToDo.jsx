import classNames from 'classnames';
import 'bulma/css/bulma.css';
import {Card, Grid, Paper, Stack} from "@mui/material";


export const ToDo = (props) => {

    // stateを作成
    const { todo, onCheck } = props;

    // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
    const handleChange = () => {
        onCheck(todo);
    };

    const ToDoText = (text) => {
        if(text.length < 15) {
            return text;
        }
        else {
            return text.substring(0, 15) + "...";
        }
    }

    return (
        <Card sx={{width: "100%", padding: "16px"}} >
            <Grid container spacing={2} justifyContent="center" alignItems="center" >
                <Grid item xs={1} style={{textAlign: 'center'}}>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={11} style={{textAlign: 'center', fontSize: "20px"}}>
                    <span className={classNames({
                        'has-text-grey-light': todo.done
                    })}>{ToDoText( todo.text )}</span>
                </Grid>
                <Grid item xs={8}>
                    {todo.createdAt}
                </Grid>
                <Grid item xs={4}>
                    優先度：{todo.priority}
                </Grid>
            </Grid>
        </Card>
    );
}

export default ToDo;