import { Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Colors } from '@/constants/theme';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>
                    Streamio+
                </Text>
                <Text style={styles.greeting}>
                    Welcome back
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    Live TV
                </Text>

                <Pressable style={styles.card}>
                    <View style={styles.cardPlaceHolder}>
                        <Text style={styles.cardPlaceHolderText}>
                            Channel
                        </Text>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>
                            Your Channels
                        </Text>
                        <Text style={styles.cardSubtitle}>
                            Watch Live TV
                        </Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    Movies
                </Text>

                <Pressable style={styles.card}>
                    <View style={styles.cardPlaceHolder}>
                        <Text style={styles.cardPlaceHolderText}>
                            Movies
                        </Text>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>
                            Movie Library
                        </Text>
                        <Text style={styles.cardSubtitle}>
                            Browse your movies
                        </Text>
                    </View>
                </Pressable>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    Shows
                </Text>

                <Pressable style={styles.card}>
                    <View style={styles.cardPlaceHolder}>
                        <Text style={styles.cardPlaceHolderText}>
                            Show
                        </Text>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>
                            Your Channels
                        </Text>
                        <Text style={styles.cardSubtitle}>
                            Watch Shows
                        </Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 100,
    },

    header: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },

    logo: {
        color: Colors.dark.text,
        fontSize: 28,
        fontWeight: "bold",
    },

    greeting: {
        marginTop: 6,
        fontSize: 16,
        color: Colors.dark.textSecondary,
    },

    section: {
        paddingHorizontal: 24,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12,
    },

    card: {
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "#f2f2f2",
        marginBottom: 16,
    },

    cardPlaceHolder: {
        height: 160,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
    },

    cardPlaceHolderText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    cardContent: {
        padding: 16,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },

    cardSubtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#666",
    },
});