const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Finish the tutorial'},
        'task-2': { id: 'task-2', content: 'Learn React-Static'},
        'task-3': { id: 'task-3', content: 'Destroy Ruby on Rails'},
        'task-4': { id: 'task-4', content: 'Conquer Math Finals'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Today',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    // Reorder the columns
    columnOrder: ['column-1']
}

export default initialData