import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function ListItem({ imageUrl, title, author, onPress }) {
	return (
		<TouchableOpacity style={styles.item_container} onPress={onPress}>
			<View style={styles.left_container}>
				{!!imageUrl && (
					<Image
						style={{ width: 100, height: 100 }}
						source={{ uri: imageUrl }}
					/>
				)}
			</View>
			<View style={styles.right_container}>
				<Text numberOfLines={3} style={styles.text}>
					{title}
				</Text>
				<Text style={styles.sub_text}>{author}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item_container: {
		height: 100,
		width: '100%',
		borderColor: 'gray',
		borderWidth: 1,
		flexDirection: 'row',
	},
	left_container: {
		width: 100,
	},
	right_container: {
		flex: 1,
		padding: 10,
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
	},
	sub_text: {
		fontSize: 12,
		color: 'gray',
	},
})
