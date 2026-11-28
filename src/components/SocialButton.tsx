import { Pressable, StyleSheet, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

type SocialButtonProps = {
  onPress: () => void;
  disabled?: boolean;
};

export function SocialButton({ onPress, disabled = false }: SocialButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Google로 로그인"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        (pressed || disabled) && styles.dimmed,
      ]}
    >
      <Svg width={28} height={28} viewBox="4 4 40 40" aria-hidden>
        <Path
          fill="#4285F4"
          d="M43.61 24.46c0-1.36-.12-2.66-.35-3.92H24v7.42h11a9.4 9.4 0 0 1-4.08 6.17v5.13h6.62c3.87-3.56 6.07-8.8 6.07-14.8Z"
        />
        <Path
          fill="#34A853"
          d="M24 44c5.51 0 10.13-1.83 13.51-4.74l-6.62-5.13A12.4 12.4 0 0 1 12.7 27.9H5.87v5.29A20.43 20.43 0 0 0 24 44Z"
        />
        <Path
          fill="#FBBC05"
          d="M12.7 27.9a12 12 0 0 1 0-7.8v-5.29H5.87a20 20 0 0 0 0 18.38l6.83-5.29Z"
        />
        <Path
          fill="#EA4335"
          d="M24 11.92c2.99 0 5.67 1.03 7.78 3.05l5.83-5.83A19.52 19.52 0 0 0 24 4 20.43 20.43 0 0 0 5.87 14.81l6.83 5.29A12.1 12.1 0 0 1 24 11.92Z"
        />
      </Svg>
      <Text style={styles.label}>Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    minHeight: 54,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  label: { color: "#000000", fontSize: 24, fontWeight: "500", lineHeight: 28 },
  dimmed: { opacity: 0.65 },
});
