import { Text, StyleSheet, View } from 'react-native'
import { theme } from '@/theme'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Coffee</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderBottomColor: theme.colorCerulan,
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: '200',
    },
})
