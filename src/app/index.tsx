import { Pressable, StyleSheet, View, Text } from 'react-native';
import { router } from 'expo-router';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Streamio+
                </Text>
                <Text style={styles.subtitle}>
                    Watch your favorite channels anytime, anywhere.
                </Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => router.push("/home")}
            >
                <Text style={styles.buttonText}>
                    Get Started
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "space-between",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 80,
    },

    subtitle: {
        fontSize: 18,
        marginTop: 16,
        color: "#666",
        lineHeight: 26,
    },

    button: {
        backgroundColor: "#000",
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 30,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    }
});