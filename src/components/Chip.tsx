import { Pressable, StyleSheet, Text, View } from "react-native";

export type ChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
} & (
  | { variant: "importance" | "nutrient" }
  | { variant: "goal"; direction: "higher" | "lower" }
);

export function Chip(props: ChipProps) {
  const { label, selected, onPress, disabled = false, variant } = props;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        styles[variant],
        selected && styles.selected,
        selected && variant === "importance" && styles.selectedImportance,
        selected && variant === "goal" && styles.selectedGoal,
        (pressed || disabled) && styles.dimmed,
      ]}
    >
      <View style={styles.content}>
        {props.variant === "goal" && (
          <Text style={[styles.label, selected && styles.selectedLabel]}>
            {props.direction === "higher" ? "↑" : "↓"}
          </Text>
        )}
        <Text
          style={[
            styles.label,
            variant === "importance" && styles.importanceLabel,
            variant === "nutrient" && styles.nutrientLabel,
            selected && styles.selectedLabel,
          ]}
        >
          {label}
        </Text>
        {variant === "nutrient" && selected && (
          <Text style={[styles.label, styles.selectedLabel]}>✓</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#DFE4DD",
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  importance: { minWidth: 76 },
  goal: { minWidth: 84 },
  nutrient: { minWidth: 124 },
  content: { flexDirection: "row", alignItems: "center", gap: 4 },
  label: { color: "#536158", fontSize: 14 },
  importanceLabel: { color: "#66716A" },
  nutrientLabel: { color: "#242D26" },
  selected: { backgroundColor: "#EFF5E8" },
  selectedImportance: { borderColor: "#8DC63F" },
  selectedGoal: { borderColor: "#6B9F56" },
  selectedLabel: { color: "#3B7330" },
  dimmed: { opacity: 0.65 },
});
