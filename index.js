import { NativeModules, Platform } from 'react-native';

const RCTToast = Platform.select({
  ios: NativeModules.LRDRCTSimpleToast,
  android: require('react-native').ToastAndroid,
});

export default {
  // Toast duration constants
  SHORT: RCTToast.SHORT,
  LONG: RCTToast.LONG,

  // Toast gravity constants
  TOP: RCTToast.TOP,
  BOTTOM: RCTToast.BOTTOM,
  CENTER: RCTToast.CENTER,

  show(message, duration, viewControllerBlacklist) {
    let newMessage
    if (typeof message === 'object') {
      newMessage = JSON.stringify(message)
    } else {
      newMessage = message
    }
    RCTToast.show(
        newMessage,
        duration === undefined ? RCTToast.SHORT : duration,
        viewControllerBlacklist
    );
  },

  showWithGravity(message, duration, gravity, viewControllerBlacklist) {
    let newMessage
    if (typeof message === 'object') {
      newMessage = JSON.stringify(message)
    } else {
      newMessage = message
    }
    RCTToast.showWithGravity(
        newMessage,
        duration === undefined ? RCTToast.SHORT : duration,
        gravity,
        viewControllerBlacklist
    );
  },
};
