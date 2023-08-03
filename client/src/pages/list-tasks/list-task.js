import { useState, useEffect } from 'react';
import { TaskAPI } from '../../services/task-apis';

const ListTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            const task = await TaskAPI.getAllTasks();
            setTasks(task);
            setLoading(false);
        }
        fetchTasks().catch(console.error);
    }, []);


    return (
        <>
            {
                loading ? 
                    "fetching.." 
                : 
                    <div>
                        <table>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                            </tr>
                            {tasks.map(task => {
                            return (
                                <tr>
                                    <td>{task.name}</td>  
                                    <td>{task.description}</td>
                                </tr>
                            )
                            })}
                        </table>
                    </div>
            }
        </>
    )
}

export { ListTasks }