import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface TodoItemProps {
    task: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, onToggleComplete, onDelete }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.task, completed && styles.completed]}>{task}</Text>
            <Button title={completed ? "Undo" : "Complete"} onPress={onToggleComplete} />
            <Button title="Delete" onPress={onDelete} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    task: {
        fontSize: 18,
    },
    completed: {
        textDecorationLine: 'line-through',
    },
});

export default TodoItem;
