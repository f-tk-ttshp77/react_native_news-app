import React from 'react'
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ActionSheetIOS,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'
import { WebView } from 'react-native-webview'
import ClipButton from '../components/ClipButton'
import Loading from '../components/Loading'

export default function ArticleScreen({ route }) {
	const { article } = route.params

	const user = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const isClipped = () => {
		return user.clips.some((clip) => clip.url === article.url)
	}

	const toggleClip = () => {
		if (isClipped()) {
			dispatch(deleteClip({ clip: article }))
		} else {
			dispatch(addClip({ clip: article }))
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<ClipButton onPress={toggleClip} enabled={isClipped()} />
			<WebView
				source={{ uri: article.url }}
				startInLoadingState={true}
				renderLoading={() => <Loading />}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
})
