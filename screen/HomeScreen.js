import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Constatnts from 'expo-constants'
import Loading from '../components/Loading'
import axios from 'axios'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constatnts.manifest.extra.newsApiKey}`

export default function HomeScreen({ navigation }) {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		fetchArticles()
	}, [])

	const fetchArticles = async () => {
		setLoading(true)
		try {
			const response = await axios.get(URL)
			setArticles(response.data.articles)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={articles}
				renderItem={({ item }) => (
					<ListItem
						imageUrl={item.urlToImage}
						title={item.title}
						author={item.author}
						onPress={() =>
							navigation.navigate('Article', {
								article: item,
							})
						}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
			{loading && <Loading />}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
