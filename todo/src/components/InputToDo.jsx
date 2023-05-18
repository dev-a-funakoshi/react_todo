import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {

    // stateを作成
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('0');

    //入力値をtextに反映
    const handleChange = e => setText(e.target.value);

    const handlePriorityChange = e => setPriority(e.target.value);

    // Enter押下時、ToDoに追加
    const handleEnter = e => {
        // 入力値が空白文字の場合終了
        if (!text.match(/\S/g)) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(text, priority);
        setText('');
    };

    return (
        <div className="panel-block">
            <input
                className="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
            />
            <input
                className="input"
                type="text"
                placeholder="Enter to add"
                value={priority}
                onChange={handlePriorityChange}
            />
            <button onClick={handleEnter} className="button">Add</button>
        </div>
    );
}

export default InputToDo;