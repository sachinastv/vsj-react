import { useState } from 'react';

const UpdateArray = () => {
    const initialState = [
        { rollno: 1, name: 'Popat' },
        { rollno: 2, name: 'Sourav' },
        { rollno: 3, name: 'Kapil' },
    ];

    const [data, setData] = useState(initialState);

    const updateName = () => {
        const newName = data.map(current => {
            
            if (current.rollno === 2) {
                return { ...current, name: 'Dhoni' };
            }

            return current;
        });

        setData(newName);
    };
    const addName = () => {
        data.push({ rollno: 14, name: 'Kapil' });
        const newName = data.map(current => {
            return current;
        });

        setData(newName);
    };

    return (
        <div>
            <button onClick={updateName}>Update name</button>
            <button onClick={addName}>Add name</button>
            {data.map(current => {
                return (
                    <div key={current.rollno}>
                        <h2>rollno: {current.rollno}</h2>
                        <h2>name: {current.name}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default UpdateArray;
