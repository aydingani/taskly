import { theme } from '@/theme'
import { StyleSheet, View } from 'react-native'
import { ShoppingListItem } from '@/components/ShoppingListItem'
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ShoppingListItem name="Coffee" />
            <ShoppingListItem name="Tea" isCompleted />
            <ShoppingListItem name="Milk" isCompleted />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        justifyContent: 'center',
    },
})
