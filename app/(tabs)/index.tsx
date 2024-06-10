import { WebView } from "react-native-webview";


export default function HomeScreen() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://military-legal-center.vercel.app" }}
    />
  );
}


