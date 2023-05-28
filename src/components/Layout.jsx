import { GlobalData } from "@/context/ContextAPI";
import React, { useContext, useEffect, useState } from "react";

const LayoutFrame = ({ children }) => {
	const { theme } = useContext(GlobalData);
	const [config, setConfig] = useState({});

	useEffect(() => {
		if(theme==="dark"){
            setConfig({
                "--primary-bg":"#20222f",
                "--secondary-bg":"#252b45",
                "--active-bg":"#333a56",
                "--primary-fg":"#fdfbfc",
                "--secondary-fg":"#586285",
                "--highlight":"#43aff7"
            })
            return;
        }

        setConfig({
            "--primary-bg":"#f8f9fe",
            "--secondary-bg":"#f0f3fa",
            "--active-bg":"#e1e3f0",
            "--primary-fg":"#1d2029",
            "--secondary-fg":"#6f717e",
            "--highlight":"#43aff7"
        })
	}, [theme]);

	return <div className="App" style={config}>{children}</div>;
};

export default LayoutFrame;
