import React from "react";
import { View, Text, Button } from "react-native";

type Task = {
	id: number;
	title: string;
	description: string;
};

export default function Task({ task, onDelete, } : { task: Task; onDelete: () => void; }) {
    return (
        
           <View key={task.id}>
					<Text style={{ fontSize: 30 }}>{task.id}</Text>
					<Text style={{ fontSize: 30 }}>{task.title}</Text>
					<Text style={{ fontSize: 30 }}>{task.description}</Text>
					<Button title="Delete" onPress={onDelete} />
				</View>
        
    );
}