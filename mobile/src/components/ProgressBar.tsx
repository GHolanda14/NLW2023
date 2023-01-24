import { View } from "react-native"

interface Props {
    progress: number
}

export function ProgressBar({ progress }: Props) {
    return (
        <View className="w-full mt-4 rounded-xl h-3 bg-zinc-700 mb-4">
            <View className={'rounded-xl h-3 bg-violet-600'} style={{ width: `${progress}%` }}>

            </View>
        </View>
    )
}