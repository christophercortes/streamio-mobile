import { Stack } from "expo-router";
import { Colors } from "@/constants/theme";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.dark.background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
      />
      </Stack>
      </>
  );
}