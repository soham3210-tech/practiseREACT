import React, { useState } from 'react';
import { data } from './data';

const Index = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id);
    }

    function handleMultipleSelection(id) {
        let copyMultiple = [...multiple];

        let findIndexOfCurrentId = copyMultiple.indexOf(id);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(id);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(copyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => {
                setEnableMultiSelection(!enableMultiSelection);
                setSelected(null);
                setMultiple([]);
            }}>
                {enableMultiSelection
                    ? 'Enable single selection'
                    : 'Enable multi selection'}
            </button>

            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={() => enableMultiSelection
                                    ? handleMultipleSelection(dataItem.id)
                                    : handleSingleSelection(dataItem.id)}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>

                                <span>
                                    {(enableMultiSelection
                                        ? multiple.includes(dataItem.id)
                                        : selected === dataItem.id)
                                        ? '-'
                                        : '+'}
                                </span>
                            </div>

                            {(enableMultiSelection
                                ? multiple.includes(dataItem.id)
                                : selected === dataItem.id) && (
                                    <div>{dataItem.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
};

export default Index;