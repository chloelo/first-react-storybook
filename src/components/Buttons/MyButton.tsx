import DarkModeContext, { type DarkModeContextType } from "@/context/DarkModeContext";
import { useContext } from "react";

import styles from "./ButtonsStyle.module.scss";

type ButtonProps = {
	url?: string;
	isFileDownload?: boolean;
	btnStyle?: string;
	classNames?: string;
	btnType?: string;
	onClick?: () => void;
};

function MyButton({
	children,
	btnStyle = "primary",
	classNames,
	onClick,
	url,
	isFileDownload,
}: React.PropsWithChildren<ButtonProps>): JSX.Element {
	const { darkMode } = useContext(DarkModeContext) as DarkModeContextType;
	const buttonTypes = ["primary", "danger", "light", "primary-outline", "light-outline", "close"];
	const targetType = buttonTypes.find((el) => el === btnStyle) ?? "primary";

	if (url) {
		if (isFileDownload) {
			return (
				<a href={url} download className={`${styles.btnBase} ${styles[`btn-${targetType}`]} ${classNames}`} rel="noreferrer">
					{children}
				</a>
			);
		}

		return (
			<a href={url} target="_blank" className={`${styles.btnBase} ${styles[`btn-${targetType}`]} ${classNames}`} rel="noreferrer">
				{children}
			</a>
		);
	}

	return (
		<button
			type="button"
			className={`${targetType === "close" ? "" : `${styles.btnBase}`} ${styles[`btn-${targetType}`]} ${classNames} ${
				darkMode ? styles.dark : ""
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

MyButton.defaultProps = {
	clickFn: undefined,
};

export default MyButton;
