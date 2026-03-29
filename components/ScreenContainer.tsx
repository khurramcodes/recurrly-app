import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

interface ScreenContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ScreenContainer = ({
  children,
  className = "flex-1 bg-background p-5",
}: ScreenContainerProps) => (
  <SafeAreaView className={className}>{children}</SafeAreaView>
);
