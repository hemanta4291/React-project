import React, { useState } from 'react';

const data = [
    {
        id:1,
        name:'todoar',
        status:'archived'

    },
    {
        id:2,
        name: 'todo1',
        status: 'active'
    },
    {
        id:3,
        name: 'todo2',
        status: 'completed'
    },
    {
        id:4,
        name: 'todo3',
        status: 'pending'
    },
    {
        id:5,
        name: 'todo4',
        status: 'archived'
    }
]

const Problem1 = () => {

    const [tasks, setTasks] = useState(data);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState('all');

    const handleClick = (filter) => {
        setShow(filter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input
        if (name.trim() === '' || status.trim() === '') {
            return;
        }

        const newTask = { name, status };
        setTasks([...tasks, newTask]);

        // Clear form fields after adding a task
        setName('');
        setStatus('');
    };

    const sortTasks = (taskList) => {
        return taskList.sort((a, b) => {
            const order = ['active', 'completed', 'pending', 'archived'];
            return order.indexOf(a.status) - order.indexOf(b.status);
        });
    };

    const filteredTasks = () => {
        let filteredList;
        switch (show) {
            case 'all':
                filteredList = sortTasks(tasks);
                break;
            case 'active':
                filteredList = tasks.filter(task => task.status === 'active');
                break;
            case 'completed':
                filteredList = tasks.filter(task => task.status === 'completed');
                break;
            case 'pending':
                filteredList = tasks.filter(task => task.status === 'pending');
                break
            case 'archive':
                filteredList = tasks.filter(task => task.status === 'archived');
                break;
            default:
                filteredList = tasks;
        }

        return filteredList;
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'all' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('all')}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'active' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('active')}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === 'completed' && 'active'}`}
                                type="button"
                                onClick={() => handleClick('completed')}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks().map((task, index) => (
                                <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;