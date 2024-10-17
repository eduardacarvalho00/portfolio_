import { HStack, Icon, Text } from "@chakra-ui/react";
import { useTheme } from "@contexts/useTheme";
import { TimelineProps } from "@interfaces/timeline";
import { dark } from "@styles/dark";
import { useState } from "react";
import { MdKeyboardArrowDown, MdSchool, MdWork } from "react-icons/md";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineItemProps {
	data: TimelineProps;
}

export const TimelineItem = ({ data }: TimelineItemProps) => {
	const { theme } = useTheme();
	const isThemeDark = theme === dark;
	const [isHeightTotal, setIsHeightTotal] = useState<boolean>();

	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				background: isThemeDark ? "#1E1E1E" : "#FFFFFF",
				color: isThemeDark ? "#fff" : "#000",
				boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				maxHeight: isHeightTotal ? "auto" : "10rem",
				overflow: "hidden",
			}}
			contentArrowStyle={{
				borderRight: `10px solid  ${isThemeDark ? "#1E1E1E" : "#FFFFFF"}`,
			}}
			date={data.date}
			iconStyle={{ background: "#1E1E1E", color: "#fff" }}
			icon={data.type === "work" ? <MdWork /> : <MdSchool />}
		>
			<h3 className="vertical-timeline-element-title">{data.title}</h3>
			<h4
				className="vertical-timeline-element-subtitle"
				style={{ fontSize: 14 }}
			>
				{data.address}
			</h4>

			{data.description && (
				<HStack>
					<Text>{data.description}</Text>
					<Icon
						as={MdKeyboardArrowDown}
						onClick={() => setIsHeightTotal(true)}
					/>
				</HStack>
			)}
		</VerticalTimelineElement>
	);
};
