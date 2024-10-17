import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "@contexts/useTranslation";
import { TimelineProps } from "@interfaces/timeline";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
	const {
		translationNext: { t },
	} = useTranslation();

	const timelineData: TimelineProps[] = t("timeline.timelineItem", {
		returnObjects: true,
	}) as Array<TimelineProps>;

	return (
		<Flex as="section" flexDir="column" w="100%">
			<Heading
				color="primary.100"
				fontWeight={600}
				fontSize={20}
				textAlign="start"
			>
				MInha timeline
			</Heading>

			<VerticalTimeline lineColor="#519872">
				{timelineData.map((item) => (
					<TimelineItem data={item} key={item.title} />
				))}
			</VerticalTimeline>
		</Flex>
	);
};
