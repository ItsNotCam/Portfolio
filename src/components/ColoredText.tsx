import { ReactNode } from "react";

export const Pink = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-pink ${props.className || ""}`}>{props.children}</span>;
};
export const OffBlue = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-off-blue ${props.className || ""}`}>{props.children}</span>;
};
export const Blue = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-blue ${props.className || ""}`}>{props.children}</span>;
};
export const Yellow = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-yellow ${props.className || ""}`}>{props.children}</span>;
};
export const Orange = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-orange ${props.className || ""}`}>{props.children}</span>;
};
export const Red = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-red ${props.className || ""}`}>{props.children}</span>;
};
export const LightGreen = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-light-green ${props.className || ""}`}>{props.children}</span>;
};
export const Green = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-green ${props.className || ""}`}>{props.children}</span>;
};
export const OffDark300 = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-off-dark-300 ${props.className || ""}`}>{props.children}</span>;
};
export const Light = (props: { children?: ReactNode; className?: string}): ReactNode => {
	return <span className={`text-custom-text-300 ${props.className || ""}`}>{props.children}</span>;
};