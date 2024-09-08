import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<{ username: string }[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User List</Text>
            {users.map((user, index) => (
                <Text key={index} style={styles.username}>{user.username}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    username: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default UserList;
