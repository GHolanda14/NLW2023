import { Text, View, ScrollView } from "react-native"

import { DAY_SIZE, HabitDay } from "../components/HabitDay"
import { Header } from "../components/Header"
import { generateDatesFromYearBeggining } from "../utils/generate-dates-from-year-beggining"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
const datesFromYearStart = generateDatesFromYearBeggining();
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

export function Home() {
    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View>
                {weekDays.map((day, i) => (
                    <Text
                        key={`${day}-${i}`}
                        className="text-zinc-400 text-xl font-bold text-center mx-1"
                        style={{ width: DAY_SIZE }}
                    >
                        {day}
                    </Text>
                ))}
            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}>
                <View className="flex-row flex-wrap">
                    {
                        datesFromYearStart.map(date => (
                            <HabitDay key={date.toISOString()} />
                        ))
                    }
                    {amountOfDaysToFill > 0 &&
                        Array
                            .from({ length: amountOfDaysToFill })
                            .map((_, i) => (
                                <View
                                    key={i}
                                    className="bg-zinc-900 rounded-lg border m-1 border-zinc-800"
                                    style={{ width: DAY_SIZE, height: DAY_SIZE }}>
                                </View>
                            ))}
                </View>

            </ScrollView>
        </View>
    )
}