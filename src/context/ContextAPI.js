import { createContext, useState } from "react";

export const GlobalData = createContext();

const ContextAPI = ({ children }) => {
	const [theme, setTheme] = useState("light");

	return (
		<GlobalData.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</GlobalData.Provider>
	);
};

export default ContextAPI;
