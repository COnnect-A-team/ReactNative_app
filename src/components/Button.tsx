import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ButtonVariant = "primary" | "dark" | "light" | "soft";

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
}

export default function Button({
  label,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const selectedVariant = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        fullWidth && styles.fullWidth,
        selectedVariant.container,
        isDisabled && styles.disabledContainer,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
    >
      {loading ? (
        <ActivityIndicator color={selectedVariant.text.color} />
      ) : (
        <Text
          style={[
            styles.label,
            selectedVariant.text,
            isDisabled && styles.disabledText,
            textStyle,
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  /* BUTTON/ACTION 공통: 360x48, radius 12 */
  base: {
    width: 360,
    height: 48,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  /* fullWidth: 부모 너비 100% */
  fullWidth: {
    width: "100%",
  },
  /* 버튼 텍스트 공통 */
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.85,
  },
  /* disabled: 배경 #F1F7E9 */
  disabledContainer: {
    backgroundColor: "#F1F7E9",
  },
  /* disabled: 텍스트 #78817B */
  disabledText: {
    color: "#78817B",
  },
});

const variantStyles: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle }
> = {
  /* primary: 배경 #94C443 / 텍스트 #FFFFFF */
  primary: {
    container: {
      backgroundColor: "#94C443",
    },
    text: {
      color: "#FFFFFF",
    },
  },
  /* dark: 배경 #25341E / 텍스트 #FFFFFF */
  dark: {
    container: {
      backgroundColor: "#25341E",
    },
    text: {
      color: "#FFFFFF",
    },
  },
  /* light: 배경 #F1F7E9 / 텍스트 #78817B */
  light: {
    container: {
      backgroundColor: "#F1F7E9",
    },
    text: {
      color: "#78817B",
    },
  },
  /* soft: 배경 #F1F7E9 / 텍스트 #3D792E */
  soft: {
    container: {
      backgroundColor: "#F1F7E9",
    },
    text: {
      color: "#3D792E",
    },
  },
};