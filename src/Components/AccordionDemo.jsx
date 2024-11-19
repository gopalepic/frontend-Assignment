import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../App.css"
import targett from '../assets/Images/targett.svg'
 import deadline from '../assets/Images/deadline.svg'

 const AccordionDemo = ({
	targetImg,
	text,
	deadlineImg,
	date,
	progressBar,
	character,
	profileCharacter} ) => (
	<Accordion.Root
		className="AccordionRoot"
		type="single"
		defaultValue="item-1"
		collapsible
	>
		<Accordion.Item className="AccordionItem" value="item-1">
			<AccordionTrigger >
				<div className="flex items-center gap-4 ">
				<img src={targetImg}  />
				<span>{text}</span>
				<img src={deadlineImg} />
				<img src={date}  />
				{progressBar}
				{character}
				{profileCharacter}
				</div>
				
			</AccordionTrigger>
			<AccordionContent>
				
			</AccordionContent>
		</Accordion.Item>

		

		
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);




export default AccordionDemo;