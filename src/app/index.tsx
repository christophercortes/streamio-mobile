import { Colors } from '@/constants/theme';
import { Image, Pressable, StyleSheet, View, Text } from 'react-native';
import { router } from 'expo-router';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.subtitle}>
                    Watch your favorite channels anytime, anywhere.
                </Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/home')}
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
        paddingHorizontal: 24,
        paddingBottom: 40,
        justifyContent: 'space-between',
    },

    content: {
        alignItems: "center",
        marginTop: 100,
    },

    logo: {
        width: 300,
        height: 200,
        marginTop: 2,
    },

    subtitle: {
        color: Colors.dark.textSecondary,
        fontSize: 18,
        lineHeight: 26,
        textAlign: "center",
        marginTop: 12,
        maxWidth: 320,
    },

    button: {
        backgroundColor: Colors.light.background,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
        marginBottom: 40,
    },

    buttonText: {
        color: Colors.light.text,
        fontSize: 16,
        fontWeight: 'bold',
    }
});