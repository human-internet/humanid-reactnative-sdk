import { Platform } from 'react-native';
export function convertDuration(duration) {
  if (Platform.OS === 'ios') {
    return duration / 1000;
  }

  return duration;
}
//# sourceMappingURL=helpers.js.map