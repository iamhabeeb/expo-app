import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const { background } = useThemeColor();

  return (
    <View style={[{ backgroundColor: background }, style]} {...otherProps} />
  );
}
